Template.chartJs.onRendered(function(){


    // Options for Line chart
    var lineData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Example dataset",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [22, 44, 67, 43, 76, 45, 12]
            },
            {
                label: "Example dataset",
                fillColor: "rgba(1,144,254,0.5)",
                strokeColor: "rgba(1,144,254,0.7)",
                pointColor: "rgba(1,144,254,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(26,179,148,1)",
                data: [16, 32, 18, 26, 42, 33, 44]
            }
        ]
    };

    var lineOptions = {
        scaleShowGridLines : true,
        scaleGridLineColor : "rgba(0,0,0,.05)",
        scaleGridLineWidth : 1,
        bezierCurve : true,
        bezierCurveTension : 0.4,
        pointDot : true,
        pointDotRadius : 4,
        pointDotStrokeWidth : 1,
        pointHitDetectionRadius : 20,
        datasetStroke : true,
        datasetStrokeWidth : 1,
        datasetFill : true,
        responsive: true
    };


    var ctx = document.getElementById("lineOptions").getContext("2d");
    var myNewChart = new Chart(ctx).Line(lineData, lineOptions);

    // Options for Sharp Line chart
    var sharpLineData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Example dataset",
                fillColor: "rgba(1,144,254,0.5)",
                strokeColor: "rgba(1,144,254,0.7)",
                pointColor: "rgba(1,144,254,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(1,144,254,1)",
                data: [33, 48, 40, 19, 54, 27, 54]
            }
        ]
    };

    var sharpLineOptions = {
        scaleShowGridLines : true,
        scaleGridLineColor : "rgba(0,0,0,.05)",
        scaleGridLineWidth : 1,
        bezierCurve : false,
        pointDot : true,
        pointDotRadius : 4,
        pointDotStrokeWidth : 1,
        pointHitDetectionRadius : 20,
        datasetStroke : true,
        datasetStrokeWidth : 1,
        datasetFill : true,
        responsive: true
    };

    var ctx = document.getElementById("sharpLineOptions").getContext("2d");
    var myNewChart = new Chart(ctx).Line(sharpLineData, sharpLineOptions);


    // Options for Bar chart
    var barOptions = {
        scaleBeginAtZero : true,
        scaleShowGridLines : true,
        scaleGridLineColor : "rgba(0,0,0,.05)",
        scaleGridLineWidth : 1,
        barShowStroke : true,
        barStrokeWidth : 1,
        barValueSpacing : 5,
        barDatasetSpacing : 1,
        responsive:true
    };

    // Data for Bar chart
    var barData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,0.8)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(1,144,254,0.5)",
                strokeColor: "rgba(1,144,254,0.8)",
                highlightFill: "rgba(1,144,254,0.75)",
                highlightStroke: "rgba(1,144,254,1)",
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };

    var ctx = document.getElementById("barOptions").getContext("2d");
    var myNewChart = new Chart(ctx).Bar(barData, barOptions);

    // Options for Bar chart
    var singleBarOptions = {
        scaleBeginAtZero : true,
        scaleShowGridLines : true,
        scaleGridLineColor : "rgba(0,0,0,.05)",
        scaleGridLineWidth : 1,
        barShowStroke : true,
        barStrokeWidth : 1,
        barValueSpacing : 5,
        barDatasetSpacing : 1,
        responsive:true
    };

    // Data for Bar chart
    var singleBarData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My Second dataset",
                fillColor: "rgba(1,144,254,0.5)",
                strokeColor: "rgba(1,144,254,0.8)",
                highlightFill: "rgba(1,144,254,0.75)",
                highlightStroke: "rgba(1,144,254,1)",
                data: [10, 20, 30, 40, 30, 50, 60]
            }
        ]
    };

    var ctx = document.getElementById("singleBarOptions").getContext("2d");
    var myNewChart = new Chart(ctx).Bar(singleBarData, singleBarOptions);


    var polarData = [
        {
            value: 120,
            color:"#0190fe",
            highlight: "#0182e4",
            label: "Homer"
        },
        {
            value: 140,
            color: "#34a6fe",
            highlight: "#0182e4",
            label: "Inspinia"
        },
        {
            value: 100,
            color: "#67bdfe",
            highlight: "#0182e4",
            label: "Luna"
        }
    ];

    var polarOptions = {
        scaleShowLabelBackdrop: true,
        scaleBackdropColor: "rgba(255,255,255,0.75)",
        scaleBeginAtZero: true,
        scaleBackdropPaddingY: 1,
        scaleBackdropPaddingX: 1,
        scaleShowLine: true,
        segmentShowStroke: true,
        segmentStrokeColor: "#fff",
        segmentStrokeWidth: 2,
        animationSteps: 100,
        animationEasing: "easeOutBounce",
        animateRotate: true,
        animateScale: false,
        responsive: true

    };

    var ctx = document.getElementById("polarOptions").getContext("2d");
    var myNewChart = new Chart(ctx).PolarArea(polarData, polarOptions);


    var doughnutData = [
        {
            value: 20,
            color:"#0190fe",
            highlight: "#0182e4",
            label: "App"
        },
        {
            value: 120,
            color: "#4db2fe",
            highlight: "#0182e4",
            label: "Software"
        },
        {
            value: 100,
            color: "#67bdfe",
            highlight: "#0182e4",
            label: "Laptop"
        }
    ];

    var doughnutOptions = {
        segmentShowStroke: true,
        segmentStrokeColor: "#fff",
        segmentStrokeWidth: 2,
        percentageInnerCutout: 45, // This is 0 for Pie charts
        animationSteps: 100,
        animationEasing: "easeOutBounce",
        animateRotate: true,
        animateScale: false,
        responsive: true
    };


    var ctx = document.getElementById("doughnutChart").getContext("2d");
    var myNewChart = new Chart(ctx).Doughnut(doughnutData, doughnutOptions);

    var radarData = {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(1,144,254,0.2)",
                strokeColor: "rgba(1,144,254,1)",
                pointColor: "rgba(1,144,254,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#0190fe",
                data: [65, 59, 66, 45, 56, 55, 40]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(1,144,254,0.4)",
                strokeColor: "rgba(1,144,254,1)",
                pointColor: "rgba(1,144,254,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#0190fe",
                data: [28, 12, 40, 19, 63, 27, 87]
            }
        ]
    };

    var radarOptions = {
        scaleShowLine : true,
        angleShowLineOut : true,
        scaleShowLabels : false,
        scaleBeginAtZero : true,
        angleLineColor : "rgba(0,0,0,.1)",
        angleLineWidth : 1,
        pointLabelFontFamily : "'Arial'",
        pointLabelFontStyle : "normal",
        pointLabelFontSize : 10,
        pointLabelFontColor : "#666",
        pointDot : true,
        pointDotRadius : 2,
        pointDotStrokeWidth : 1,
        pointHitDetectionRadius : 20,
        datasetStroke : true,
        datasetStrokeWidth : 1,
        datasetFill : true
    };

    var ctx = document.getElementById("radarChart").getContext("2d");
    var myNewChart = new Chart(ctx).Radar(radarData, radarOptions);

});