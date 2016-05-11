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
            template.pred.set('groupSelected', $("#" + event.target.id).data("template"));
            //{$in: ["A","B","C","D","E","F"]}
        } else {
            template.pred.set('groupSelected', $("#" + event.target.id).data("template")); 
        }
        
        $("#" + event.target.id).addClass("fc-state-active").siblings().removeClass("fc-state-active");
        console.log( "eventclick: ", template.pred.get("groupSelected") );
        
        return template.pred.get("groupSelected");
        //return initTable(this.userId);
    }
});

Template.predictions.helpers({
    tab: function() {
        return Template.instance().pred.get("groupSelected");
    },
    predictionsData: function() {
        
        return Template.instance().pred.get("groupSelected");
/*
        var data = {
            "A": "",
            "B": "",
            "C": "",
            "D": "",
            "E": "",
            "F": "",
            "ALL": ""
        };

        return { items: data[ tab ] };
        */
    }
});

