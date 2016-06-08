Template.table.helpers({
    userPointsData: function() {
        return Points.find({}).fetch();
    },
    userData: function() {
        return Meteor.users.find({}).fetch();
    }
});
