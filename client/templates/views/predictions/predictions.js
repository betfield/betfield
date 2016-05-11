Template.predictions.onCreated(function(){
    this.pred = new ReactiveDict();
    this.pred.set('groupSelected',"A");
});

Template.predictions.onRendered(function(){

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
        
        $("#" + event.target.id).addClass("fc-state-active").siblings().removeClass("fc-state-active");
        console.log( "eventclick: ", template.pred.get("groupSelected") );
        
        return template.pred.get("groupSelected");
    }
});

Template.predictions.helpers({
    tab: function() {
        return Template.instance().pred.get("groupSelected");
    },
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

