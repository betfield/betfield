// Run this when the meteor app is started
Meteor.startup(function () {
	console.log("Mongo url: ", process.env.MONGO_URL);

	Logger = new Loggly({
		token: Meteor.settings.private.LOGGLEY_TOKEN,
		subdomain: Meteor.settings.public.LOGGLEY_SERVER,
		auth: {
			username: Meteor.settings.private.LOGGLEY_USER,
			password: Meteor.settings.private.LOGGLEY_PASS
		},

		// Optional: Tag to send with EVERY log message
		tags: ['betfield'],

		// Optional: logs will be stored in JSON format
		json: true
	});
	/*
	UserRoles = {
		admin: 'administrator',
		regular: 'regular-user',
		premium: 'premium-user'
	};

	Roles.createRole();
	*/
	function getUserId() {
		var user = Meteor.userId();
				
		if (user == null || typeof user == 'undefined') {
			user = 'anonymous';
		}
		
		return user;
	}
	
	function convertMessage(message) {
		return message.toString().replace(/,/g, ' '); //useful if you hijack console.log
	}
	
	//just checking to see if the object exists-    
	if (Logger !== null && typeof Logger !== 'undefined') { 
		
		Meteor.methods({
			clientLog: function(message) {
				message = convertMessage(message);
				check(message, String);
				Logger.info(message, {user: getUserId()});
			},
			clientError: function(message, err) {
				check(message, String);
				check(err, Object);
				console.log(err);
				
				Logger.error(message, {user: getUserId(), error: err});
			}
		});

	} else {
		console.error('SB.logger is not set - client is unable to send logs to server');
	};
	
	var everySecond = new Cron(function() {
		console.log("Running Fixture status update:");
		Meteor.call("updateFixtureStatuses");
	}, {
		minute: 21
	});
	
});

