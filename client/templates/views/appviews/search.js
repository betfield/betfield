Template.search.onRendered(function(){

    $('.input-group.date').datepicker();

    $("#demo1").TouchSpin({
        min: 0,
        max: 100,
        step: 0.1,
        decimals: 2,
        boostat: 5,
        maxboostedstep: 10
    });

    $("#demo2").TouchSpin({
        verticalbuttons: true
    });

    $(".select2").select2();

});