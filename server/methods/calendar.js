if (Meteor.isServer) {
	Meteor.publish('allFixtures', function() {
		return Fixtures.find();
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
