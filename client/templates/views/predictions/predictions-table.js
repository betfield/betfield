Template.predictionsTable.onCreated(function(){
   
    console.log("onCreated: ", this.data);
});

Template.predictionsTable.onRendered(function(){
    console.log( "onRendered: ", this.data );
    
    var userId = Meteor.userId();
    var predictions = Predictions.find();
    
    console.log(userId + ": " + predictions.count());
    
    // Initialize Predictions table
    $('#predictions').footable();
    
    if (userId && (predictions.count() < 1)) {
        initUserPredictions(userId);
    }
    
    // Get data for Predictions table
    initTable(userId);

});


/*
Template.predictionsTable.helpers({
    getGroupSelected: function() {
        return Template.instance().fixtures.get('groupSelected');
    },
});
*/
function initTable(userId) {
    var fixtures = Predictions.find({"fixture.group": Template.instance().data}).fetch();
    if (fixtures && fixtures.length) {
        var table = document.getElementById("predictions");
        // clear existing values from table
        
        var tbody = document.createElement('tbody');
        tbody.setAttribute("id","pred-body");
        
        var date, home, vs, away, group, score;
        var imgHome, imgAway;
        var tr;
        
        fixtures.forEach(function (f){
            tr = document.createElement('tr');
            
            date = document.createElement('td');
            home = document.createElement('td');
            vs = document.createElement('td');
            away = document.createElement('td');
            group = document.createElement('td');
            score = document.createElement('td');
            
            imgHome = document.createElement("img");
            imgAway = document.createElement("img");
            scoreHome = document.createElement("input");
            scoreAway = document.createElement("input");
            
            date.setAttribute("class", "bf-table-date");
            home.setAttribute("class", "bf-table-home");
            vs.setAttribute("class", "bf-table-vs");
            away.setAttribute("class", "bf-table-away");
            group.setAttribute("class", "bf-table-group");
            score.setAttribute("class", "bf-table-score");
            
            setAttributes(scoreHome, {"value": f.fixture.result.homeGoals, "maxlength": 2, "type": "number", "min": 0, "max": 99, "class": "input-no-spinner"});
            setAttributes(scoreAway, {"value": f.fixture.result.awayGoals, "maxlength": 2, "type": "number", "min": 0, "max": 99, "class": "input-no-spinner"});
            
            date.innerHTML = f.fixture.date + " @ " + f.fixture.time;
            home.innerHTML = f.fixture.home_team.name;
            away.innerHTML = f.fixture.away_team.name;
            group.innerHTML = f.fixture.group;
            score.innerHTML = scoreHome.outerHTML + " : " + scoreAway.outerHTML;
            
            imgHome.src = Meteor.settings.public.FOLDER_FLAGS + String(f.fixture.home_team.code).toLowerCase() + ".png";
            imgAway.src = Meteor.settings.public.FOLDER_FLAGS + String(f.fixture.away_team.code).toLowerCase() + ".png";
            
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

// Create empty prediction set for logged in user
function initUserPredictions(userId) {
    Meteor.call( "createUserPredictions", userId, function( error, response ) {
        if ( error ) {
            Bert.alert( error.reason, "danger" );
        } else {
            Bert.alert( "Prediction created!", "success" );
        }
    });
}

// Set multiple attributes for HTML element
function setAttributes(el, attrs) {
    for(var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}