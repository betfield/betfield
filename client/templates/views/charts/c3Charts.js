Template.c3Charts.onRendered(function(){

    // Wait until all panels will be render
    // Remove setTimeout if you don't use animate-panel effect

    setTimeout(function(){
        c3.generate({
            bindto: '#lineChart',
            data:{
                columns: [
                    ['data1', 30, 200, 100, 400, 150, 250],
                    ['data2', 50, 20, 10, 40, 15, 25]
                ],
                colors:{
                    data1: '#62cb31',
                    data2: '#BABABA'
                }
            }
        });

        c3.generate({
            bindto: '#areaChart',
            data:{
                columns: [
                    ['data1', 300, 350, 300, 0, 0, 0],
                    ['data2', 130, 100, 140, 200, 150, 50]
                ],
                types: {
                    data1: 'area',
                    data2: 'area-spline'
                },
                colors:{
                    data1: '#62cb31',
                    data2: '#BABABA'
                }
            }
        });

        c3.generate({
            bindto: '#scatter',
            data:{
                xs:{
                    data1: 'data1_x',
                    data2: 'data2_x'
                },
                columns: [
                    ["data1_x", 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2.0, 3.0, 2.2, 2.9, 2.9, 3.1, 3.0, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3.0, 2.8, 3.0, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3.0, 3.4, 3.1, 2.3, 3.0, 2.5, 2.6, 3.0, 2.6, 2.3, 2.7, 3.0, 2.9, 2.9, 2.5, 2.8],
                    ["data2_x", 3.3, 2.7, 3.0, 2.9, 3.0, 3.0, 2.5, 2.9, 2.5, 3.6, 3.2, 2.7, 3.0, 2.5, 2.8, 3.2, 3.0, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8, 2.7, 3.3, 3.2, 2.8, 3.0, 2.8, 3.0, 2.8, 3.8, 2.8, 2.8, 2.6, 3.0, 3.4, 3.1, 3.0, 3.1, 3.1, 3.1, 2.7, 3.2, 3.3, 3.0, 2.5, 3.0, 3.4, 3.0],
                    ["data1", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
                    ["data2", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8]
                ],
                colors:{
                    data1: '#62cb31',
                    data2: '#BABABA'
                },
                type: 'scatter'
            }
        });

        c3.generate({
            bindto: '#stocked',
            data:{
                columns: [
                    ['data1', 30,200,100,400,150,250],
                    ['data2', 50,20,10,40,15,25]
                ],
                colors:{
                    data1: '#62cb31',
                    data2: '#BABABA'
                },
                type: 'bar',
                groups: [
                    ['data1', 'data2']
                ]
            }
        });

        c3.generate({
            bindto: '#gauge',
            data:{
                columns: [
                    ['data', 91.4]
                ],

                type: 'gauge'
            },
            color:{
                pattern: ['#62cb31', '#BABABA']

            }
        });

        c3.generate({
            bindto: '#pie',
            data:{
                columns: [
                    ['data1', 30],
                    ['data2', 120]
                ],
                colors:{
                    data1: '#62cb31',
                    data2: '#CFCFCF'
                },
                type : 'pie'
            }
        });
    },700)
});