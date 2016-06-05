Meteor.publish('fixturePredictions', function(fixture) {
    check( fixture, String );
    if (Meteor.call("checkRoundEnabled", fixture)) {
	    return Predictions.find({"fixture._id": fixture});
    } else {
        return this.ready();
    }
});

Meteor.publish("registeredUsers", function () {
    return Meteor.users.find({"roles": "regular-user"});
});