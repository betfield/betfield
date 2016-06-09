Template.fixtures.helpers({
    predictionsData: function() {
        var fixtures = Predictions.find().fetch();
        
        
        if (fixtures.length > 0) {
            var i = 0;
            fixtures.forEach(function(f) {
                
                var homeTeamCode = String(f.fixture.home_team.code).toLowerCase();
                var awayTeamCode = String(f.fixture.away_team.code).toLowerCase();
                console.log(f.userId);
                var user = Meteor.users.findOne({"_id": f.userId});
                fixtures[i].fixture.home_team.imgSrc = Meteor.settings.public.FOLDER_FLAGS + homeTeamCode + ".png";
                fixtures[i].fixture.away_team.imgSrc = Meteor.settings.public.FOLDER_FLAGS + awayTeamCode + ".png";
                console.log(user);
                fixtures[i].user = user.profile;

                // TODO: This is an ugly hack to display correct time for the fixture. Needs fixing in the DB schema
                var tempDate = new Date(f.fixture.ts);
                fixtures[i].fixture.time = tempDate.getHours() + ":00";
                
                i++;
            });
        } else {
            Bert.alert("Ei saa mängu ennustusi näidata! Voor ei ole veel suletud.", "danger");
        }
        
        return fixtures;
    }
});
