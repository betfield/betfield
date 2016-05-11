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

Meteor.methods({
	createUserPredictions: function( userId ) {
		check( userId, String );
		
		var fixtures = Fixtures.find().fetch();
		
		return fixtures.forEach(function(fixture) {
			fixture["result"] = {"homeGoals": "", "awayGoals": ""};
			var prediction = {"userId": userId, "fixture": fixture};
			Predictions.insert( prediction );
		});
      },
	  updateUserPredictions: function( userId ) {
		check( userId, String );
		
		var fixtures = Fixtures.find().fetch();
		
		return fixtures.forEach(function(fixture) {
			fixture["result"] = {"homeGoals": "", "awayGoals": ""};
			var prediction = {"userId": userId, "fixture": fixture};
			Predictions.insert( prediction );
		});
      }
});	