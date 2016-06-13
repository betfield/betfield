Template.fixtures.helpers({
    predictionsData: function() {
        var fixtures = Predictions.find().fetch();
        var registeredFixtures = [];

        if (fixtures.length > 0) {
            var i = 0;
            fixtures.forEach(function(f) {
                
                var homeTeamCode = String(f.fixture.home_team.code).toLowerCase();
                var awayTeamCode = String(f.fixture.away_team.code).toLowerCase();
                var user = Meteor.users.findOne({"_id": f.userId});
                
                if (user.roles[0] === "registered-user") {

                    registeredFixtures[i] = f;

                    registeredFixtures[i].fixture.home_team.imgSrc = Meteor.settings.public.FOLDER_FLAGS + homeTeamCode + ".png";
                    registeredFixtures[i].fixture.away_team.imgSrc = Meteor.settings.public.FOLDER_FLAGS + awayTeamCode + ".png";
                    
                    registeredFixtures[i].user = user.profile;

                    // TODO: This is an ugly hack to display correct time for the fixture. Needs fixing in the DB schema
                    var tempDate = new Date(f.fixture.ts);
                    registeredFixtures[i].fixture.time = tempDate.getHours() + ":00";
                    i++;
                }
            });
        } else {
            Bert.alert("Ei saa mängu ennustusi näidata! Voor ei ole veel suletud.", "danger");
        }
        
        return registeredFixtures;
    },
});

Template.fixtures.events({
    'click #calendar-back' : function(event) {
        history.back();
    }
});