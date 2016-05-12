Template.predictions.onCreated(function(){
    this.pred = new ReactiveDict();
    this.pred.set('groupSelected',"A");
});

Template.predictions.events({
    'click .group-select > button' : function(event, template) {
        var id = event.target.id;
        var currentTab = $( event.target ).closest( "" );
        
        if (id === "ALL") {
            template.pred.set('groupSelected', {$in: ["A","B","C","D","E","F"]});
        } else {
            template.pred.set('groupSelected', id); 
        }
        
        $("#" + id).addClass("fc-state-active").siblings().removeClass("fc-state-active");
        Tracker.afterFlush(function() {
            return $('#predictions').trigger('footable_redraw');    
        })
    }
});

Template.predictions.helpers({
    predictionsData: function() {
        var fixtures = Predictions.find({"fixture.group": Template.instance().pred.get("groupSelected")}).fetch();
		var i = 0;
		
		fixtures.forEach(function(f) {
			
			var homeTeamCode = String(f.fixture.home_team.code).toLowerCase();
			var awayTeamCode = String(f.fixture.away_team.code).toLowerCase();

			fixtures[i].fixture.home_team.imgSrc = Meteor.settings.public.FOLDER_FLAGS + homeTeamCode + ".png";
			fixtures[i].fixture.away_team.imgSrc = Meteor.settings.public.FOLDER_FLAGS + awayTeamCode + ".png";

			i++;
		});

        return fixtures;
    }
});

$('#predictions').trigger('footable_redraw');

