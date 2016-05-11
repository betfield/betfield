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
    //initTable(userId);

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
