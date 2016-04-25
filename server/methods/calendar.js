if (Meteor.isServer) {
	Meteor.publish('allFixtures', function(filter) {
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
	
}
/*
Meteor.methods({
	getAllFixtures: function () {
		var someParam = Fixtures.findOne();
		console.log(someParam);
		return someParam;
	}

});
*/
