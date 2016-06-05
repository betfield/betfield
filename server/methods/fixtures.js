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

Meteor.publish('fixturePredictions', function(fixture) {
    check( fixture, String );
    if (Meteor.call("checkRoundEnabled", fixture)) {
	    return Predictions.find({"fixture._id": fixture});
    } else {
        return this.ready();
    }
});

Meteor.publish("registeredUsers", function () {
    return Meteor.users.find({"roles": "regular-user"}, {fields: {"profile": 1, "roles": 1}});
});