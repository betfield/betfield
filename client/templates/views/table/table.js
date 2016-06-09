Template.table.helpers({
    userPointsData: function() {
        var points = Points.find({}).fetch();
        return orderByTotal(points, "total");
    },
    userData: function() {
        return Meteor.users.find({}).fetch();
    }
});

function orderByTotal(arr, total) {
    return arr.slice().sort(function (a, b) {
        return a[total] > b[total] ? -1 : 1;
    });
}