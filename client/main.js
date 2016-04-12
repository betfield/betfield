Meteor.startup(function () {
	logger = function (user, msg, type, err) {	
		return Meteor.call('clientLog', user, msg, type, err);
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
				logger(Meteor.userId(),"Facebook login failed", "error", err);
                throw new Meteor.Error("Facebook login failed");
            }
        });
		logger(Meteor.userId(),"Facebook login succeeded", "info");
		Router.go('dashboard');
	}
});

Template.user_logged_out.events({
	'click #logout': function(event) {
        Meteor.logout(function(err){
            if (err) {
				logger(Meteor.userId(),"Logout failed", "error", err);
                throw new Meteor.Error("Logout failed");
            }
        });
	logger(Meteor.userId(),"User logged out", "info");
	}
});

