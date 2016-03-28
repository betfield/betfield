// accounts config
Accounts.ui.config({
	passwordSignupFields: "USERNAME_AND_EMAIL"
});

Template.login.events({
	'click #fb-login':function(event){
		Meteor.loginWithFacebook({}, function(err){
            if (err) {
                throw new Meteor.Error("Facebook login failed");
            }
        });
		
		Router.go('dashboard');
	}
});

Template.user_logged_out.events({
	'click #logout': function(event) {
        Meteor.logout(function(err){
            if (err) {
                throw new Meteor.Error("Logout failed");
            }
        });
	}
});