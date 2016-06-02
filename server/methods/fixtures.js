Meteor.publish('fixturePredictions', function(fixture) {
    check( fixture, String );
	return Predictions.find({"fixture._id": fixture});
});

Meteor.publish("registeredUsers", function () {
    return Meteor.users.find({"roles": "regular-user"});
});