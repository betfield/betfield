UserRoles = {
	view: 'view',
	create: 'create'
};


UserGroups = {
	admin: 'administrator',
	regular: 'regular-user',
	premium: 'premium-user'
};

Accounts.onCreateUser(function (options,user) {
	console.log("Entered onCreateUser function");
	
	var service = user.services;
	var profile;
	console.log(service);
	
	if (service.facebook) {
		console.log("Facebook service");
		profile = {
			picture: "https://graph.facebook.com/" + service.facebook.id + "/picture",
			email: service.facebook.email,
			name: service.facebook.name
		};
	} else if (service.google) {
		console.log("Google service");
		profile = {
			picture: service.google.picture,
			email: service.google.email,
			name: service.google.name
		};
	} else if (service.twitter) {
		console.log("Twitter service");
		//TODO: add Twitter profile
	}
	
	// set default team name to social network user name
	profile["team"] = profile.name;
	
	// append profile to Meteor user
	user.profile = profile;
	
	Meteor.call("updateUserPoints", user, function(){});
	
	try {
		/*Roles.addUsersToRoles(userId, 'regular-user');
		console.log("Roles: " + UserRoles.view + "Groups: " + UserGroups.regular);
		console.log("User with id:" + userId + " is included in group(s):" + Roles.getRolesForUser(userId) + " AND with premission(s) to: " + Roles.getGroupsForUser(userId));
		*/
		//Get profile picture and update user profile 
		 
	} catch (e) {
		console.log(e.message);
	}

	return user;
});