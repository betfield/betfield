Template.rules.events({
    'click #rules-login' : function(event) {
        // Prevent default browser form submit
        event.preventDefault();
        Router.go('login');
    }
});

