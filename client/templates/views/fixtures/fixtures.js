Template.fixtures.helpers({
    predictionsData: function() {
        var fixtures;
        var fixtureSelected = Template.instance().data;
        
        if (fixtureSelected) {
            fixtures = Predictions.find({"fixture._id": fixtureSelected}).fetch();
      
            var i = 0;
            
            fixtures.forEach(function(f) {
                
                var homeTeamCode = String(f.fixture.home_team.code).toLowerCase();
                var awayTeamCode = String(f.fixture.away_team.code).toLowerCase();

                fixtures[i].fixture.home_team.imgSrc = Meteor.settings.public.FOLDER_FLAGS + homeTeamCode + ".png";
                fixtures[i].fixture.away_team.imgSrc = Meteor.settings.public.FOLDER_FLAGS + awayTeamCode + ".png";

                i++;
            });
        }
        
        return fixtures;
    }
});
