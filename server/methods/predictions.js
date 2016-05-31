// Publish all fixtures from the local DB
Meteor.publish('fixtures', function(filter) {
	var self = this;
	
	var subHandle = Fixtures.find(filter || {}).observeChanges({
		added: function(id, fields) {
			self.added("fixtures", id, fields);
		},
		changed: function(id, fields) {
			self.changed("fixtures", id, fields);
		},
		removed: function(id) {
			self.removed("fixtures", id);
		}
	});
		
	self.ready();
	
	self.onStop(function () {
		subHandle.stop();
	});
});

Meteor.publish('predictions', function(filter) {
	var self = this;
	var userId = this.userId;
	
//	if (userId) {
		//var subHandle = Predictions.find(filter || {"userId": userId}).observeChanges({
		var subHandle = Predictions.find(filter || {}).observeChanges({
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
//	} 
});

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
			console.log("uuendan siin");
			return Predictions.update({"userId": userId, "fixture._id": fixture}, {$set: {"fixture.result.homeGoals": homeScore, "fixture.result.awayGoals": awayScore}});
		}
	}
});	