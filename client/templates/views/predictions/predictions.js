Template.predictions.onCreated(function(){
   // Meteor.subscribe('fixtures'); 
   this.pred = new ReactiveDict();
   this.pred.set('groupSelected',"A");
});

Template.predictions.onRendered(function(){

    // Initialize Predictions table
    $('#predictions').footable();
    
    // Get data for Predictions table
	// var fixtures = Fixtures.find({"group": });
    initTable(Template.instance());

});

Template.predictions.helpers({
    getGroupSelected: function() {
        return Template.instance().fixtures.get('groupSelected');
    },
});

Template.predictions.events({
    'click .group-select > button' : function(event, template) {
        var id = event.target.id;
        if (id === "ALL") {
            template.pred.set('groupSelected', {$in: ["A","B","C","D","E","F"]});
        } else {
            template.pred.set('groupSelected', id); 
        }
        
        $("#" + event.target.id).addClass("fc-state-active").siblings().removeClass("fc-state-active");
        return initTable();
    }
});

function initTable() {
    var fixtures = Fixtures.find({"group": Template.instance().pred.get('groupSelected')});
    
    if (fixtures.count() !== 0) {
        var table = document.getElementById("predictions");
        // clear existing values from table
        
        var tbody = document.createElement('tbody');
        tbody.setAttribute("id","pred-body");
        
        var date, home, vs, away, group, score;
        var imgHome, imgAway;
        var tr;
        
        fixtures.forEach(function (fixture){
            tr = document.createElement('tr');
            
            date = document.createElement('td');
            home = document.createElement('td');
            vs = document.createElement('td');
            away = document.createElement('td');
            group = document.createElement('td');
            score = document.createElement('td');
            
            imgHome = document.createElement("IMG");
            imgAway = document.createElement("IMG");
            
            date.setAttribute("class", "bf-table-date");
            home.setAttribute("class", "bf-table-home");
            vs.setAttribute("class", "bf-table-vs");
            away.setAttribute("class", "bf-table-away");
            group.setAttribute("class", "bf-table-group");
            score.setAttribute("class", "bf-table-score");
            
            date.innerHTML = fixture.date + " @ " + fixture.time;
            home.innerHTML = fixture.home_team.name;
            away.innerHTML = fixture.away_team.name;
            group.innerHTML = fixture.group;
            score.innerHTML = "99:99";
            
            imgHome.src = Meteor.settings.public.FOLDER_FLAGS + String(fixture.home_team.code).toLowerCase() + ".png";
            imgAway.src = Meteor.settings.public.FOLDER_FLAGS + String(fixture.away_team.code).toLowerCase() + ".png";
            
            vs.innerHTML = imgHome.outerHTML + "vs" + imgAway.outerHTML;
            
            tr.appendChild(date);
            tr.appendChild(home);
            tr.appendChild(vs);
            tr.appendChild(away);
            tr.appendChild(group);
            tr.appendChild(score);
            
            tbody.appendChild(tr);
            
        }); // end of for
        table.replaceChild(tbody,document.getElementById("pred-body"));
        
    } else {
        // TODO: Handle empty table
    };
}