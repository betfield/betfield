Template.widgets.onRendered(function(){


    // Pie Chart Data
    var pieChartData = [
        { label: "Data 1", data: 16, color: "#1b9bfe", },
        { label: "Data 2", data: 6, color: "#57a2db", },
        { label: "Data 3", data: 22, color: "#67bdfe", },
        { label: "Data 4", data: 32, color: "#4da6fe", }
    ];

    // Pie Chart Options
    var pieChartOptions = {
        series: {
            pie: {
                show: true
            }
        },
        grid: {
            hoverable: true
        },
        tooltip: true,
        tooltipOpts: {
            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
            shifts: {
                x: 20,
                y: 0
            },
            defaultTheme: false
        }
    };

    $.plot($("#flot-pie-chart"), pieChartData, pieChartOptions);

    // Bar Chart data
    var flotChartData = [
        {
            label: "bar",
            data: [ [1, 12], [2, 14], [3, 18], [4, 24], [5, 32], [6, 22] ]
        }
    ];

    // Bar Chart Options for Analytics
    var flotBarOptions = {
        series: {
            bars: {
                show: true,
                barWidth: 0.8,
                fill: true,
                fillColor: {
                    colors: [ { opacity: 1 }, { opacity: 1 } ]
                },
                lineWidth: 1
            }
        },
        xaxis: {
            tickDecimals: 0
        },
        colors: ["#3498db"],
        grid: {
            show: false
        },
        legend: {
            show: false
        }
    };

    $.plot($("#flot-bar-chart"), flotChartData, flotBarOptions);

    // Line Chart Data and Options

    var lineChartData = [
        {
            label: "line",
            data: [ [1, 10], [2, 26], [3, 16], [4, 36], [5, 32], [6, 51] ]
        }
    ];

    var lineChartOptions = {
        series: {
            lines: {
                show: true,
                lineWidth: 0,
                fill: true,
                fillColor: "#1b9bfe"

            }
        },
        colors: ["#1b9bfe"],
        grid: {
            show: false
        },
        legend: {
            show: false
        }
    };

    $.plot($("#flot-line-chart"), lineChartData, lineChartOptions);

});