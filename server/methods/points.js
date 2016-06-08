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

Meteor.publish('userData', function() {
	return Meteor.users.find({"roles": "regular-user"});
});

Meteor.methods({
	updateUserPoints: function( user ) {
		check( user, Object );
		
		var userPoints = Points.find({"user._id": user._id});
		// Create initial points object
		if (userPoints.count() == 0) {
			points = initialPoints;
			points["user"] = user.profile;
			points.user["_id"] = user._id;
			Points.insert(points);
		} 
		
			/*
			fixtures.forEach(function(fixture) {
				fixture["result"] = {"homeGoals": "", "awayGoals": ""};
				fixture["userPoints"] = 0;
				var prediction = {"userId": userId, "fixture": fixture};
				Predictions.insert( prediction );
			});*/
		
	},
	updateUserToRegistered: function(userId) {
		check(userId, String);

		Roles.addUsersToRoles(userId, ['registered-user']);
		Roles.removeUsersFromRoles(userId, 'regular-user');

		var user = Meteor.users.findOne({"_id": userId});
		console.log(user);
		Meteor.call("updateUserPoints", user);

		console.log("Updated to registered: ", user.profile.name);
	}
});	