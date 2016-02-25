Template.inlineGraphs.onRendered(function(){

    $("#sparkline7").sparkline([34, 43, 43, 35, 44, 32, 44, 52, 25], {
        type: 'line',
        lineColor: '#54ab2c',
        fillColor: '#0190fe'
    });
    $("#sparkline2").sparkline([5, 6, 7, 2, 0, -4, -2, 4], {
        type: 'bar',
        barColor: '#0190fe',
        negBarColor: '#c6c6c6'});

    $("#sparkline3").sparkline([1, 1, 2], {
        type: 'pie',
        sliceColors: ['#0190fe', '#b3b3b3', '#e4f0fb']});

    $("#sparkline4").sparkline([34, 43, 43, 35, 44, 32, 15, 22, 46, 33, 86, 54, 73, 53, 12, 53, 23, 65, 23, 63, 53, 42, 34, 56, 76, 15, 54, 23, 44], {
        type: 'line',
        lineColor: '#0190fe',
        fillColor: '#ffffff'
    });

    $("#sparkline5").sparkline([1, 1, 0, 1, -1, -1, 1, -1, 0, 0, 1, 1], {
        type: 'tristate',
        posBarColor: '#0190fe',
        negBarColor: '#bfbfbf'});


    $("#sparkline6").sparkline([4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 5, 6, 3, 4, 5, 8, 7, 6, 9, 3, 2, 4, 1, 5, 6, 4, 3, 7, ], {
        type: 'discrete',
        lineColor: '#0190fe'});

    $("span.pie").peity("pie", {
        fill: ["#0190fe", "#edf0f5"]
    })

    $(".line").peity("line",{
        fill: '#0190fe',
        stroke:'#edf0f5'
    })

    $(".bar").peity("bar", {
        fill: ["#0190fe", "#edf0f5"]
    })

    $(".bar_dashboard").peity("bar", {
        fill: ["#0190fe", "#edf0f5"]
    })

});