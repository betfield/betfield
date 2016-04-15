UserRoles = {
	view: 'view',
	create: 'create'
};


UserGroups = {
	admin: 'administrator',
	regular: 'regular-user',
	premium: 'premium-user'
};
/*
Accounts.onCreateUser(function (options,user) {
	console.log("Entered onCreateUser function");
	var userId = user.services.facebook.id;
	
	try {
		Roles.addUsersToRoles(userId, 'regular-user');
		console.log("Roles: " + UserRoles.view + "Groups: " + UserGroups.regular);
		console.log("User with id:" + userId + " is included in group(s):" + Roles.getRolesForUser(userId) + " AND with premission(s) to: " + Roles.getGroupsForUser(userId));

		//Get profile picture and update user profile 
		var profile = {
			picture: "https://graph.facebook.com/" + userId + "/picture",
			email: user.services.facebook.email
		}; 
		user.profile = profile;
		console.log("Profile picture URL for user with id:" + userId + " was updated");

	} catch (e) {
		console.log(e.message);
	}

		
	
	return user;
});
*/