Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound',
    loadingTemplate: 'splash'
});

var OnBeforeActions;

OnBeforeActions = {
    loginRequired: function(pause) {
		if (!(Meteor.loggingIn() || Meteor.user())){
			Bert.alert( 'Palun logi sisse', 'danger' );
			Router.go('login');
		}
		else {
			this.next();
		}
    }
};

Router.onBeforeAction(OnBeforeActions.loginRequired, {
	except: ['login', 'logout']
});

//
// Dashboard route
//

Router.route('/', {
	name: 'root',
	template: 'predictions',
    waitOn: function() {
        if (Meteor.userId()) {
            if (Roles.userIsInRole(Meteor.userId(), ['administrator'])) {
                return Meteor.subscribe('fixtures');    
            } else {
                Meteor.subscribe('fixtureStatuses');
                return Meteor.subscribe('predictions');
            }
        } 
    },
	action: function() {
		this.render();
	}
});

Router.route('/calendar', {
	name: 'calendar',
    waitOn: function() {
        // Wait until all data is retreived from the DB before rendering the page
        return Meteor.subscribe('fixtures');
    }
});

Router.route('/predictions', {
    name: 'predictions',
    waitOn: function() {
        if (Meteor.userId()) {
            if (Roles.userIsInRole(Meteor.userId(), ['administrator'])) {
                return Meteor.subscribe('fixtures');    
            } else {
                Meteor.subscribe('fixtureStatuses');
                return Meteor.subscribe('predictions');
            }
        } 
    }
});

Router.route('/fixtures/:_id', {
    template: 'fixtures',
    waitOn: function() {
        Meteor.subscribe('registeredUsers');
        return Meteor.subscribe('fixturePredictions', this.params._id);
    }
    /*,
    data: function () {
        return this.params._id;
    }*/
});
/*
Router.route('/predictions/:_id', function () {
    this.render('predictions', {
        waitOn: function() {
            // Wait until all data is retreived from the DB before rendering the page
            return Meteor.subscribe('predictions');
        },
        data: function () {
            if (this.ready()) {
                return this.params._id;
            }
        }
    });
});
*/
Router.route('/payments', function () {
    this.render('payments');
});

Router.route('/downgrade', function () {
	Meteor.call('downgradeToRegular', Meteor.user()._id);	
	Bert.alert( 'Konto algseadistatud', 'success' );
	Router.go('root');
});

Router.route('/logout', function () {
	Meteor.logout(function(err){
        if (err) {
            Bert.alert( 'Väljalogimine ebaõnnestus', 'danger' );
            throw new Meteor.Error("Logout failed");
        }
    });
    Bert.alert('Oled välja logitud', 'success');
	Router.go('root');
});

Router.route('/dashboard', function () {
    this.render('dashboard');
});

Router.route('/rules', function () {
    this.render('rules');
});

Router.route('/table', {
    name: 'table',
    waitOn: function() {
        // Wait until all data is retreived from the DB before rendering the page
        return Meteor.subscribe('points');
    }
});

//
// Common views route
//

Router.route('/login', function () {
    this.render('login');
});
Router.route('/register', function () {
    this.render('register');
    this.layout('blankLayout');
});
Router.route('/errorOne', function () {
    this.render('errorOne');
    this.layout('blankLayout');
});
Router.route('/errorTwo', function () {
    this.render('errorTwo');
    this.layout('blankLayout');
});
Router.route('/lock', function () {
    this.render('lock');
    this.layout('blankLayout');
});
Router.route('/passwordRecovery', function () {
    this.render('passwordRecovery');
    this.layout('blankLayout');
});

//
// Global - Remove splash screen after after rendered layout
//

Router.onAfterAction(function()
{
    setTimeout(function()
    {
       $('.splash').css('display', 'none')
    })
});