Meteor.publish('predictions', function(filter) {
	var self = this;
	var userId = this.userId;
	
	if (userId) {
		var subHandle = Predictions.find(filter || {"userId": userId}).observeChanges({
			added: function(id, fields) {
				self.added("predictions", id, fields);
			},
			changed: function(id, fields) {
				self.changed("predictions", id, fields);
			},
			removed: function(id) {
				self.removed("predictions", id);
			}
		});
			
		self.ready();
		
		self.onStop(function () {
			subHandle.stop();
		});
	} 
});

Meteor.publish('fixtureStatuses', function() {
    return Fixtures.find({}, {fields: {"_id": 1, "status": 1}});
});

Meteor.methods({
	createUserPredictions: function( userId ) {
		check( userId, String );
		
		var fixtures = Fixtures.find().fetch();
		
		return fixtures.forEach(function(fixture) {
			fixture["result"] = {"homeGoals": "", "awayGoals": ""};
			fixture["userPoints"] = 0;
			var prediction = {"userId": userId, "fixture": fixture};
			Predictions.insert( prediction );
		});
	},
	updateUserPredictions: function(fixture,homeScore,awayScore,userId) {
		check( fixture, String );
		check( homeScore, String );
		check( awayScore, String );
		check( userId, String );
		
		// Check if logged in as admin and update the actual fixture result if so
		if (Roles.userIsInRole(userId, ['administrator'])) {
			return Fixtures.update({"_id": fixture}, {$set: {"result.homeGoals": homeScore, "result.awayGoals": awayScore}});
		} else { // If not admin, update user's prediction result
			return Predictions.update({"userId": userId, "fixture._id": fixture}, {$set: {"fixture.result.homeGoals": homeScore, "fixture.result.awayGoals": awayScore}});
		}
	},
	checkRoundEnabled: function(fixture) {
		check( fixture, String );
		
		var roundFixtures = Fixtures.find({"round": Fixtures.findOne({"_id": fixture}).round}).fetch();
		
		function orderByDate(arr, dateProp) {
			return arr.slice().sort(function (a, b) {
				return a[dateProp] < b[dateProp] ? -1 : 1;
			});
		}
		
		var firstRoundFixtureDate = orderByDate(roundFixtures, "ts")[0].ts;
		var currentDate = new Date();
		// adjust current date to ET timezone
		currentDate.setTime(currentDate.getTime() + (Meteor.settings.private.TZ_HOURS*60*60*1000));
		
		if (Meteor.settings.private.TEST_TIME) {
			currentDate = new Date(Meteor.settings.private.TEST_TIME);
		}
		
		console.log(fixture);
		console.log(firstRoundFixtureDate);
		console.log(currentDate.toISOString());
		
		return (firstRoundFixtureDate < currentDate.toISOString());
	},
	updateFixtureStatuses: function() {
		var rounds = 6;
		var roundFixtures = [];
		
		function orderByDate(arr, dateProp) {
			return arr.slice().sort(function (a, b) {
				return a[dateProp] < b[dateProp] ? -1 : 1;
			});
		}
		
		var currentDate = new Date();
		// adjust current date -1h in ET timezone
		currentDate.setTime(currentDate.getTime() + (Meteor.settings.private.TZ_HOURS*60*60*1000));
		
		if (Meteor.settings.private.TEST_TIME) {
			currentDate = new Date(Meteor.settings.private.TEST_TIME);
		}
			
		for (i = 0; i < rounds; i++) { 
			roundFixtures[i] = Fixtures.find({"round": i+1}).fetch();
			
			var firstRoundFixtureDate = orderByDate(roundFixtures[i], "ts")[0].ts;
			
			console.log("Round start: ", firstRoundFixtureDate);
			console.log("Current: ", currentDate.toISOString());
			
			if (firstRoundFixtureDate > currentDate.toISOString()) {
				console.log("enabled");
				Fixtures.update({"round": i+1}, {$set: {"status": "enabled"}}, {multi: true});
			} else {
				console.log("disabled");
				Fixtures.update({"round": i+1}, {$set: {"status": "disabled"}}, {multi: true});
			}
		}
	}			
});	