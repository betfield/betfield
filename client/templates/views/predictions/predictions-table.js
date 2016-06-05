Template.predictionsTable.onRendered(function(){
    // Initialize Predictions table
    $('#predictions').footable();
    
});

Template.predictionsTable.events({
    'submit #predictions-form' : function(event, template) {
        // Prevent default browser form submit
        event.preventDefault();
    
        // Get value from form element
        var scores = [].slice.call(event.target.getElementsByClassName("bf-table-score"));
        var userId = Meteor.userId();
        
        scores.forEach(function(score){
            var result = score.getElementsByTagName("input");
            
            var fixture = result[0].value;
            var homeScore = result[1].value;
            var awayScore = result[2].value;
            
            Meteor.call( "updateUserPredictions", fixture, homeScore, awayScore, userId, function( error, response ) {
                if ( error ) {
                    Bert.alert( "Ennustuste uuendamine ebaõnnestus!", "success" );
                } else {
                    Bert.alert( "Ennustused uuendatud!", "success" );
                }
            });
        });
    },
});

