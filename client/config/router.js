Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound'
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
	except: ['root', 'login', 'logout', 'register', 'football-data.events', 'predictions']
});

//
// Dashboard route
//

Router.route('/', {
	name: 'root',
	template: 'dashboard',
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
        // Wait until all data is retreived from the DB before rendering the page
        return Meteor.subscribe('predictions');
    }
});

Router.route('/fixtures/:_id', {
    template: 'fixtures',
    waitOn: function() {
        // Wait until all data is retreived from the DB before rendering the page
        return Meteor.subscribe('predictions');
    },
    data: function () {
        //if (this.ready()) {
            return this.params._id;
        //}
    }
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
    this.layout('landingLayout');
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

Router.route('/table', function () {
    this.render('table');
});

//
// Common views route
//

Router.route('/login', function () {
    this.render('login');
    this.layout('blankLayout');
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

/********************************************************************************************************/

//
// Analytics route
//

Router.route('/analytics', function () {
    this.render('analytics');
});

//
// Interface route
//

Router.route('/panels', function () {
    this.render('panels');
});
Router.route('/typography', function () {
    this.render('typography');
});
Router.route('/buttons', function () {
    this.render('buttons');
});
Router.route('/components', function () {
    this.render('components');
});
Router.route('/alerts', function () {
    this.render('alerts');
});
Router.route('/loadingButtons', function () {
    this.render('loadingButtons');
});
Router.route('/modals', function () {
    this.render('modals');
});
Router.route('/draggable', function () {
    this.render('draggable');
});
Router.route('/codeEditor', function () {
    this.render('codeEditor');
});
Router.route('/nestableList', function () {
    this.render('nestableList');
});
Router.route('/tour', function () {
    this.render('tour');
});
Router.route('/icons', function () {
    this.render('icons');
});

//
// App views route
//

Router.route('/contacts', function () {
    this.render('contacts');
});
Router.route('/projects', function () {
    this.render('projects');
});
Router.route('/project', function () {
    this.render('project');
});
Router.route('/appPlans', function () {
    this.render('appPlans');
});
Router.route('/socialBoard', function () {
    this.render('socialBoard');
});
Router.route('/faq', function () {
    this.render('faq');
});
Router.route('/timeline', function () {
    this.render('timeline');
});
Router.route('/notes', function () {
    this.render('notes');
});
Router.route('/profile', function () {
    this.render('profile');
});
Router.route('/mailbox', function () {
    this.render('mailbox');
});
Router.route('/emailCompose', function () {
    this.render('emailCompose');
});
Router.route('/emailView', function () {
    this.render('emailView');
});
Router.route('/blog', function () {
    this.render('blog');
});
Router.route('/blogDetails', function () {
    this.render('blogDetails');
});
Router.route('/forum', function () {
    this.render('forum');
});
Router.route('/forumDetails', function () {
    this.render('forumDetails');
});
Router.route('/gallery', function () {
    this.render('gallery');
});
Router.route('/fileManager', function () {
    this.render('fileManager');
});
Router.route('/invoice', function () {
    this.render('invoice');
});
Router.route('/search', function () {
    this.render('search');
});
Router.route('/chatView', function () {
    this.render('chatView');
});


//
// Charts route
//

Router.route('/chartJs', function () {
    this.render('chartJs');
});
Router.route('/flot', function () {
    this.render('flot');
});
Router.route('/inlineGraphs', function () {
    this.render('inlineGraphs');
});
Router.route('/chartist', function () {
    this.render('chartist');
});
Router.route('/c3Charts', function () {
    this.render('c3Charts');
});


//
// Box transitions route
//

Router.route('/transitionOverview', function () {
    this.render('transitionOverview');
});
Router.route('/transitionOne', function () {
    this.render('transitionOne');
});
Router.route('/transitionTwo', function () {
    this.render('transitionTwo');
});
Router.route('/transitionThree', function () {
    this.render('transitionThree');
});
Router.route('/transitionFour', function () {
    this.render('transitionFour');
});
Router.route('/transitionFive', function () {
    this.render('transitionFive');
});

//
// Tables route
//

Router.route('/tablesDesign', function () {
    this.render('tablesDesign');
});

Router.route('/dataTables', function () {
    this.render('dataTables');
});

Router.route('/fooTable', function () {
    this.render('fooTable');
});

//
// Widgets route
//

Router.route('/widgets', function () {
    this.render('widgets');
});

//
// Forms route
//

Router.route('/formsElements', function () {
    this.render('formsElements');
});
Router.route('/formsExtended', function () {
    this.render('formsExtended');
});
Router.route('/textEditor', function () {
    this.render('textEditor');
});
Router.route('/wizard', function () {
    this.render('wizard');
});
Router.route('/validation', function () {
    this.render('validation');
});

//
// Grid system route
//

Router.route('/gridSystem', function () {
    this.render('gridSystem');
});

//
// Options route
//

Router.route('/options', function () {
    this.render('options');
    this.layout('boxedLayout');
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
