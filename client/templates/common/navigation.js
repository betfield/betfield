Template.navigation.onCreated(function() {
    var instance = this;
    instance.userPoints = new ReactiveVar();
    instance.pointsArray = new ReactiveVar();
    
    instance.autorun(function () {
        if(Meteor.userId()) {
            var subscription = instance.subscribe('userPoints', Meteor.userId());
        } 

        if (subscription && subscription.ready()) {
            instance.userPoints.set(Points.findOne({"user._id": Meteor.userId()}));

            var userFixturePointsCursor = Predictions.find({"userId": Meteor.userId()}, {fields: {"fixture.ts": 1, "fixture.userPoints": 1}});
            
            if (userFixturePointsCursor.count() > 0) {
                var userFixturePoints = userFixturePointsCursor.fetch();
                instance.pointsArray.set(getLast15Points(userFixturePoints));

                // Sparkline bar chart data and options used under Profile image on navigation
                $("#sparkline1").sparkline(instance.pointsArray.get(), {
                    type: 'bar',
                    barWidth: 7,
                    height: '30px',
                    barColor: '#0190fe',
                    negBarColor: '#0173cb'
                });
            }
        }
    });
});

Template.navigation.onRendered(function() {

    // Initialize metsiMenu plugin to sidebar menu
    $('#side-menu').metisMenu();

    var instance = this;
});

Template.navigation.events({

    // Colapse menu in mobile mode after click on element
    'click #side-menu a:not([href$="\\#"])': function(){
        if ($(window).width() < 769) {
            $("body").toggleClass("show-sidebar");
        }
    }

});

Template.navigation.helpers({
    userRoleName: function() {
        var userId = Meteor.userId();
        
        if (Roles.userIsInRole(userId, ['administrator'])) {
            return "Administraator";
        } else if (Roles.userIsInRole(userId, ['registered-user'])) {
            return "Aktiveeritud";
        } else {
            return "Mitteaktiivne";
        }

    },
    userPoints: function() {
        return Template.instance().userPoints.get();
    },
    getTicker: function() {
        var firstRoundFixtureDates = [
            {"ts": "2016-06-10T19:00:00", "round": 1},
            {"ts": "2016-06-15T13:00:00", "round": 2},
            {"ts": "2016-06-19T19:00:00", "round": 3},
            {"ts": "2016-06-25T13:00:00", "round": 4},
            {"ts": "2016-06-30T19:00:00", "round": 5},
            {"ts": "2016-07-6T19:00:00", "round": 6},
            {"ts": "2016-07-10T19:00:00", "round": 7}
        ];

        var currentDate = new Date();
        // adjust current date to -1h from now
        currentDate.setTime(currentDate.getTime() + (1*60*60*1000));
        
        var roundDate;

        for (i = 0; i < 7; i++) {
            roundDate = firstRoundFixtureDates[i];
            if (currentDate.toISOString() < roundDate.ts) {
                i = 7;
            }
        };

        switch(roundDate.round) {
            case 1:
                // 1. round ticker
                return '<iframe src="https://freesecure.timeanddate.com/countdown/i58fl2g4/n242/cf11/cm0/cu4/ct1/cs0/ca0/co1/cr0/ss0/cac01508c/cpcc0392b/pcfff/tcfff/fs100/szw256/szh108/tatVooru%20sulgemiseni%3A/tac6a6c6f/tpc6a6c6f/iso2016-06-10T21:00:00" allowTransparency="true" frameborder="0" width="136" height="32"></iframe>'
            case 2:
                // 2. round ticker    
                return '<iframe src="https://freesecure.timeanddate.com/countdown/i58fl2g4/n242/cf11/cm0/cu4/ct1/cs0/ca0/co1/cr0/ss0/cac01508c/cpcc0392b/pcfff/tcfff/fs100/szw256/szh108/tatVooru%20sulgemiseni%3A/tac6a6c6f/tpc6a6c6f/iso2016-06-15T15:00:00" allowTransparency="true" frameborder="0" width="136" height="32"></iframe>'
            case 3:
                // 3. round ticker
                return '<iframe src="https://freesecure.timeanddate.com/countdown/i58fl2g4/n242/cf11/cm0/cu4/ct1/cs0/ca0/co1/cr0/ss0/cac01508c/cpcc0392b/pcfff/tcfff/fs100/szw256/szh108/tatVooru%20sulgemiseni%3A/tac6a6c6f/tpc6a6c6f/iso2016-06-19T21:00:00" allowTransparency="true" frameborder="0" width="136" height="32"></iframe>'
            case 4:
                // 4. round ticker
                return '<iframe src="https://freesecure.timeanddate.com/countdown/i58fl2g4/n242/cf11/cm0/cu4/ct1/cs0/ca0/co1/cr0/ss0/cac01508c/cpcc0392b/pcfff/tcfff/fs100/szw256/szh108/tatVooru%20sulgemiseni%3A/tac6a6c6f/tpc6a6c6f/iso2016-06-25T15:00:00" allowTransparency="true" frameborder="0" width="136" height="32"></iframe>'
            case 5:
                // 5. round ticker
                return '<iframe src="https://freesecure.timeanddate.com/countdown/i58fl2g4/n242/cf11/cm0/cu4/ct1/cs0/ca0/co1/cr0/ss0/cac01508c/cpcc0392b/pcfff/tcfff/fs100/szw256/szh108/tatVooru%20sulgemiseni%3A/tac6a6c6f/tpc6a6c6f/iso2016-06-30T21:00:00" allowTransparency="true" frameborder="0" width="136" height="32"></iframe>'
            case 6:
                // 6. round ticker
                return '<iframe src="https://freesecure.timeanddate.com/countdown/i58fl2g4/n242/cf11/cm0/cu4/ct1/cs0/ca0/co1/cr0/ss0/cac01508c/cpcc0392b/pcfff/tcfff/fs100/szw256/szh108/tatVooru%20sulgemiseni%3A/tac6a6c6f/tpc6a6c6f/iso2016-07-06T21:00:00" allowTransparency="true" frameborder="0" width="136" height="32"></iframe>'
            case 7:
                // 7. round ticker
                return '<iframe src="https://freesecure.timeanddate.com/countdown/i58fl2g4/n242/cf11/cm0/cu4/ct1/cs0/ca0/co1/cr0/ss0/cac01508c/cpcc0392b/pcfff/tcfff/fs100/szw256/szh108/tatVooru%20sulgemiseni%3A/tac6a6c6f/tpc6a6c6f/iso2016-07-10T21:00:00" allowTransparency="true" frameborder="0" width="136" height="32"></iframe>'
            default:
                break;
        }            
    }
});

function getLast15Points(userFixturePoints) {
    // Sort array based on fixture TS
    userFixturePoints.sort(function(first,second) {
        var a = first.fixture.ts;
        var b = second.fixture.ts;

        if (a < b) {
            return 1;
        } else if (a < b) {
            return -1;
        } else {
            return 0;
        }   
    });
    
    var currentDate = new Date();
    // adjust current date to -2h from now so it would only show after normal time end for current fixture
    // TODO: This should be changed based on fixture status
    currentDate.setTime(currentDate.getTime() - (2*60*60*1000)); 
    var userFixturePointsArray = [];
    var count = 0;

    // Remove fixtures not occurred yet and construct simple object array with only relevant data included
    userFixturePoints.forEach(function(element) {
        // Only add elements to array that have fixture TS earlier to now
        if (element.fixture.ts < currentDate.toISOString() && count < 15) {
            userFixturePointsArray.push(element.fixture.userPoints);
            count++;
        }
    });

    return userFixturePointsArray.reverse();
}