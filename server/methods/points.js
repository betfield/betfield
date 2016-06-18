var initialPoints = {
	"round1": 	0, 
	"round2": 	0, 
	"round3": 	0, 
	"round4": 	0, 
	"round5": 	0, 
	"round6": 	0, 
	"round7": 	0, 
	"total": 	0 
}

Meteor.publish('points', function(filter) {
	var self = this;
	
	var subHandle = Points.find(filter || {}).observeChanges({
		added: function(id, fields) {
			self.added("points", id, fields);
		},
		changed: function(id, fields) {
			self.changed("points", id, fields);
		},
		removed: function(id) {
			self.removed("points", id);
		}
	});
		
	self.ready();
	
	self.onStop(function () {
		subHandle.stop();
	});
});

Meteor.publish('userPoints', function(user) {
	check(user, String);
	return Points.find({"user._id": user});
});

Meteor.publish('userFixturePoints', function(user) {
	check(user, String);
	return Predictions.find({"userId": user}, {fields: {"fixture.ts": 1, "fixture.userPoints": 1}});
});

Meteor.publish('userData', function() {
	return Meteor.users.find({"roles": "regular-user"});
});

Meteor.methods({
	createUserPoints: function( user ) {
		check( user, Object );
		
		var userPoints = Points.find({"user._id": user._id});
		// Create initial points object
		if (userPoints.count() == 0) {
			points = initialPoints;
			points["user"] = user.profile;
			points.user["_id"] = user._id;
			Points.insert(points);
		} 
	},
	updateUserPoints: function(user) {
		check( user, String );
		
		var predictions = Predictions.find({"userId": user}).fetch(); 
		var points = [0,0,0,0,0,0,0];

		predictions.forEach(function(prediction){
			var i = parseInt(prediction.fixture.round,10);
			points[i-1] += parseInt(prediction.fixture.userPoints,10);
		})
		
		var total = 0;

		points.forEach(function(p) {
			total += p;
		});

		console.log(points);
		console.log(total);
		
		Points.update({"user._id": user}, {$set: {"round1": points[0], "round2": points[1], "round3": points[2], "round4": points[3], "round5": points[4], "round6": points[5], "round7": points[6], "total": total}});
	},
	updateAllUsersPredictionPoints: function(fixtureId) {
		check(fixtureId, String );
		
		var predictions = Predictions.find({"fixture._id": fixtureId}).fetch();
		var fixture = Fixtures.findOne({"_id": fixtureId});
		console.log("Fixture: ", fixture);

		predictions.forEach(function(prediction) {
			console.log("Updating prediction points for user: " + prediction.userId + " on fixture: " + prediction.fixture._id + " with result: " + prediction.fixture.result.homeGoals + ":" + prediction.fixture.result.awayGoals + ". Actual: ", fixture.result);
			
			var points = userFixturePoints(prediction.fixture.result, fixture.result);
			console.log(points);

			Predictions.update({"_id": prediction._id}, {$set: {"fixture.userPoints": points}});
			Meteor.call("updateUserPoints", prediction.userId);
		});

		// Calculate table position changes
		try {
			updateTablePositions();
		} catch (err) {
			console.log(err.stack);
		}

		console.log("User points updated for fixture: " + fixtureId);

	},
	updateUserToRegistered: function(userId) {
		check(userId, String);

		Roles.addUsersToRoles(userId, ['registered-user']);
		Roles.removeUsersFromRoles(userId, 'regular-user');

		var user = Meteor.users.findOne({"_id": userId});
		console.log(user);
		Meteor.call("createUserPoints", user);

		console.log("Updated to registered: ", user.profile.name);
	}
});	

function updateTablePositions() {
	var users = Meteor.users.find({"roles": "registered-user"}, {fields: {"_id": 1}});
	var points = [];

	users.forEach(function(user){
		points.push(Points.findOne({"user._id": user._id}));	
	});
	
	console.log("Points initial: ", points);

	points.sort(function (points1, points2) {
		if (points1.total == points2.total) {

			var correctScoresUser1 = Predictions.find({"userId": points1.user._id, "fixture.userPoints": 5}).count();
			var correctScoresUser2 = Predictions.find({"userId": points2.user._id, "fixture.userPoints": 5}).count();

			console.log("User1: " + correctScoresUser1 + " User2: " + correctScoresUser2);

			if (correctScoresUser1 == correctScoresUser2) {
				var correctGoalDifferenceUser1 = Predictions.find({"userId": points1.user._id, "fixture.userPoints": 3}).count();
				var correctGoalDifferenceUser2 = Predictions.find({"userId": points2.user._id, "fixture.userPoints": 3}).count();

				console.log("User1: ", correctGoalDifferenceUser1, "User2: ", correctGoalDifferenceUser2);

				if (correctGoalDifferenceUser1 == correctGoalDifferenceUser2) {
					var groupScoreUser1 = points1.round1 + points1.round2 + points1.round3;
					var groupScoreUser2 = points2.round1 + points2.round2 + points2.round3;

					console.log("User1: ", groupScoreUser1, "User2: ", groupScoreUser2);

					return groupScoreUser2 - groupScoreUser1;			
				} return correctGoalDifferenceUser2 - correctGoalDifferenceUser1;
			}
			else return correctScoresUser2 - correctScoresUser1;
		} else { 
			console.log("Points1: " + points1.total + " Points2: " + points2.total);
			return points2.total - points1.total;
		}
	});

	console.log("Points after: ", points);

	var pos = 1;

	points.forEach(function(item) {
		Points.update({"user._id": item.user._id}, {$set: {"position": pos}});
		pos++;
	});
}

function userFixturePoints(userResult, fixtureResult) {
	
	var home = parseInt(userResult.homeGoals, 10);
	var away = parseInt(userResult.awayGoals, 10);

	var fh = parseInt(fixtureResult.homeGoals, 10);
	var fa = parseInt(fixtureResult.awayGoals, 10);
	
	console.log("User: " + home + ":" + away + ", Actual: " + fh + ":" + fa );
	var points = 0;
	// check if user result valid

			// User has predicted the correct score (5p)
			if (home == fh && away == fa) {
				points = 5;
			} 
			// Check if the goal difference was correct (3p)
			else if ((home - away) == (fh - fa)) {
				points = 3;
			// User has predicted the correct outcome of the match (2p)
			} else if (((home - away) > 0 && (fh - fa) > 0) || 
							((home - away) < 0 && (fh - fa) < 0)) {
				points = 2;
			}

	return points;
}