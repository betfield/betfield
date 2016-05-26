Template.predictionsTable.onRendered(function(){
    var userId = Meteor.userId();
    var predictions = Predictions.find();
    
    // Initialize Predictions table
    $('#predictions').footable();
    
});
