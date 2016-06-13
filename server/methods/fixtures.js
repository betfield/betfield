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
    return Meteor.users.find({$or: [{"roles": "regular-user"}, {"roles": "registered-user"}]}, {fields: {"profile": 1, "roles": 1}});
});


function getActiveMatchdayFixtures() {
	HTTP.call( 'GET', Meteor.settings.public.RESULTS_FEED_API + 
				Meteor.settings.public.RESULTS_FEED_ACTIVE_LEAGUE, 
		{
			headers: {
				"X-Auth-Token": Meteor.settings.private.RESULTS_FEED_KEY
			},
			params: {
				"matchday": 1
			}
		}, function( error, response ) {
			if ( error ) {
				console.log( error );
			} else {
				var fixtureSet = JSON.parse( response.content );
				console.log(fixtureSet);
				
			}
		});
}

Meteor.setInterval(function() {

}, (5*60*1000));	
