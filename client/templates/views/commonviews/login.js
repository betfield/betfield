Template.login.events({

    'submit #loginForm' : function(e, t){
        // If this method is called, the default action of the 
        // event will not be triggered.
        e.preventDefault();
    
        // retrieve the input field values
        var email = t.find('#login-email').value; 
        password = t.find('#login-password').value;

        // Trim and validate your fields here.... 

        // If validation passes, supply the appropriate fields to the
        // Meteor.loginWithPassword() function.
        Meteor.loginWithPassword(email, password, function(err){
            if (err) {
                // The user might not have been found, or their passwword
                // could be incorrect. Inform the user that their
                // login attempt has failed. 
            }
            else {
                // The user has been logged in.
            }
        });
        
        return false; 
    }
});