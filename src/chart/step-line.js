/**
 * Sample for Step Line Series
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            labelFormat: 'y',
            intervalType: 'Years',
            majorGridLines: { width: 0 },
            valueType: 'DateTime',
            edgeLabelPlacement: 'Shift'
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            interval: 5,
            labelFormat: '{value}%'
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Chart Series
        series: [
            {
                type: 'StepLine',
                dataSource: [
                    { x: new Date(1975, 0, 1), y: 16 },
                    { x: new Date(1980, 0, 1), y: 12.5 },
                    { x: new Date(1985, 0, 1), y: 19 },
                    { x: new Date(1990, 0, 1), y: 14.4 },
                    { x: new Date(1995, 0, 1), y: 11.5 },
                    { x: new Date(2000, 0, 1), y: 14 },
                    { x: new Date(2005, 0, 1), y: 10 },
                    { x: new Date(2010, 0, 1), y: 16 }
                ],
                xName: 'x', width: 2,
                yName: 'y', name: 'China',
                marker: {
                    visible: true,
                    width: 10,
                    height: 10
                },
            },
            {
                type: 'StepLine',
                dataSource: [
                    { x: new Date(1975, 0, 1), y: 10 },
                    { x: new Date(1980, 0, 1), y: 7.5 },
                    { x: new Date(1985, 0, 1), y: 11 },
                    { x: new Date(1990, 0, 1), y: 7 },
                    { x: new Date(1995, 0, 1), y: 8 },
                    { x: new Date(2000, 0, 1), y: 6 },
                    { x: new Date(2005, 0, 1), y: 3.5 },
                    { x: new Date(2010, 0, 1), y: 7 }
                ],
                xName: 'x', width: 2,
                yName: 'y', name: 'Australia',
                marker: {
                    visible: true,
                    width: 10,
                    height: 10
                },
            }
        ],
        //Initializing Chart Title
        title: 'Unemployment Rates 1975-2010',
        //Initializing Tooltip
        tooltip: { enable: true },
        width: ej.base.Browser.isDevice ? '100%' : '60%',
           // custom code start
        load: function (args) {
            var stepTheme = location.hash.split('/')[1];
            stepTheme = stepTheme ? stepTheme : 'Material';
            args.chart.theme = (stepTheme.charAt(0).toUpperCase() + 
                stepTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        }
           // custom code end
    });
    chart.appendTo('#sLine-container');
};