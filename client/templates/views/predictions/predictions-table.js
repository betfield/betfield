Template.predictionsTable.onRendered(function(){
    var userId = Meteor.userId();
    var predictions = Predictions.find();
    
    // Initialize Predictions table
    $('#predictions').footable();
    
    if (userId && !Roles.userIsInRole(userId, ['administrator']) && (predictions.count() < 1)) {
        initUserPredictions(userId);
    }
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
                    console.log( error.reason);
                } else {
                    Bert.alert( "Ennustused uuendatud!", "success" );
                }
            });
        });
    },
});

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
