Accounts.onCreateUser(function (options,user) {
	console.log("Entered onCreateUser function");
	var userId = user.services.facebook.id;
	
	try {
		//Get profile picture and update user profile 
		var profile = {
			picture: "https://graph.facebook.com/" + userId + "/picture"
		}; 
		user.profile = profile;
		console.log("Profile picture URL for user with id:" + userId + " was updated");
	} catch (e) {
		console.log("Failed to update profile picture URL for user with id:" + userId);
		console.log(e.message);
	}
	
	return user;
});