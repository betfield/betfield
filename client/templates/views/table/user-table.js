Template.userTable.events({
    'submit #user-form' : function(event, template) {
        // Prevent default browser form submit
        event.preventDefault();
    
        var value = $('#user-select :selected').val();
		Meteor.call("updateUserToRegistered", value);

        console.log("User " + value + " updated to registered");
    }
})