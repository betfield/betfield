Meteor.publish("leagues", function() {
  if ( Roles.userIsInRole(this.userId, 'premium-user') ) {
    return Leagues.find();
  }
});
