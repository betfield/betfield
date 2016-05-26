Template.table.helpers({
    userPointsData: function() {
        return Points.find({}).fetch();
    }
});
