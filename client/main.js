Meteor.startup(function () {
	
	// Define global object with methods for logging 
	// info and error messages to Loggly
	logger = {
		log: function (msg) {	
			return Meteor.call('clientLog', msg);
		},
		error: function (msg, err) {	
			return Meteor.call('clientError', msg, err);
		}
	}
});

// accounts config
Accounts.ui.config({
	passwordSignupFields: "USERNAME_AND_EMAIL"
});

Template.login.events({
	'click #fb-login':function(event){
		Meteor.loginWithFacebook({}, function(err){
            if (err) {
				logger.error("Facebook login failed", err);
                throw new Meteor.Error("Facebook login failed");
            } else {
				logger.log("Facebook login succeeded");
				Router.go('dashboard');
			}
        });
	}
});

Template.user_logged_out.events({
	'click #logout': function(event) {
        Meteor.logout(function(err){
            if (err) {
				logger.error("Logout failed", err);
                throw new Meteor.Error("Logout failed");
            }
        });
	logger.log("User logged out");
	}
});

