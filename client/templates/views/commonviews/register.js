var validateMessage = null;

Template.register.onRendered(function(){

    // Initialize iCheck plugin
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
    });

});

Template.register.events({
    'submit #registerForm' : function(e, t) {
        e.preventDefault();
        
        var email = t.find('#email').value,
        email_repeat = t.find('#email-repeat').value,
        password = t.find('#password').value,
        password_repeat = t.find('#password-repeat').value;

        // Trim and validate the input
        if (validateFields(password, password_repeat, "Passwords") &&
            validateFields(email, email_repeat, "Emails")){
            
            Accounts.createUser({email: email, password : password}, function(err){
                if (err) {
                    // Inform the user that account creation failed
                    //TODO: localise message
                    Bert.alert("Failed to create user", 'danger' );
                    logger.error("Failed to create user", err);
                } else {
                    // Success. Account has been created and the user
                    // has logged in successfully. 
                    Bert.alert("User created sucessfully", 'success' );
                    logger.log("User created successfully");
                    Router.go('dashboard');
                }
            });

        } else {
            Bert.alert(validateMessage, 'danger' );
            logger.error(validateMessage);
            return false;
        }
    }
});

function validateFields(a, b, type){
    if(a !== b) {
        //TODO: localize the message
        validateMessage = type + " didn't match";
        return false;
    } else {
        validateMessage = "";
        return true;
    }
}