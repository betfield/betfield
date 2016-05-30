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

Meteor.publish('allPoints', function(filter) {
	var self = this;
	
	var subHandle = Points.find(filter || {}).observeChanges({
		added: function(id, fields) {
			self.added("allPoints", id, fields);
		},
		changed: function(id, fields) {
			self.changed("allPoints", id, fields);
		},
		removed: function(id) {
			self.removed("allPoints", id);
		}
	});
		
	self.ready();
	
	self.onStop(function () {
		subHandle.stop();
	});
});

Meteor.methods({
	updateUserPoints: function( user ) {
		check( user, Object );
		
		var userPoints = Points.find({"user": user});
		var points = userPoints.fetch();
		
		// Create initial points object
		if (userPoints.count() == 0) {
			points = initialPoints;
			points["user"] = user;
			Points.insert(points);
			console.log(points);
		} 
		
			/*
			fixtures.forEach(function(fixture) {
				fixture["result"] = {"homeGoals": "", "awayGoals": ""};
				fixture["userPoints"] = 0;
				var prediction = {"userId": userId, "fixture": fixture};
				Predictions.insert( prediction );
			});*/
		
	}
});	