/**
 * Sample for Spline Series
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            interval: 1,
            majorGridLines: { width: 0 },
            labelIntersectAction: 'Rotate90'
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            labelFormat: '{value}°C',
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 }
        },
        //Initializing Chart Annotations
        annotations: [{
            content: '<div id="chart_cloud"><img src="src/chart/images/cloud.png"  style="width: 41px; height: 41px"/></div>',
            x: 'Sun', y: 2, coordinateUnits: 'Point', verticalAlignment: 'Top'
        }, {
            content: '<div id="chart_cloud"><img src="src/chart/images/sunny.png"  style="width: 41px; height: 41px"/></div>',
            x: 'Tue', y: 33, coordinateUnits: 'Point', verticalAlignment: 'Top'
        }],
        //Initializing Chart Series
        series: [
            {
                type: 'Spline',
                dataSource: [
                    { x: 'Sun', y: 15 }, { x: 'Mon', y: 22 },
                    { x: 'Tue', y: 32 },
                    { x: 'Wed', y: 31 },
                    { x: 'Thu', y: 29 }, { x: 'Fri', y: 24 },
                    { x: 'Sat', y: 18 },
                ],
                xName: 'x', width: 2, marker: {
                    visible: true,
                    width: 10,
                    height: 10
                },
                yName: 'y', name: 'Max Temp',
            },
            {
                type: 'Spline',
                dataSource: [
                    { x: 'Sun', y: 10 }, { x: 'Mon', y: 18 },
                    { x: 'Tue', y: 28 },
                    { x: 'Wed', y: 28 },
                    { x: 'Thu', y: 26 }, { x: 'Fri', y: 20 },
                    { x: 'Sat', y: 15 }
                ],
                xName: 'x', width: 2, marker: {
                    visible: true,
                    width: 10,
                    height: 10
                },
                yName: 'y', name: 'Avg Temp',
            },
            {
                type: 'Spline',
                dataSource: [
                    { x: 'Sun', y: 2 }, { x: 'Mon', y: 12 },
                    { x: 'Tue', y: 22 },
                    { x: 'Wed', y: 23 },
                    { x: 'Thu', y: 19 }, { x: 'Fri', y: 13 },
                    { x: 'Sat', y: 8 },
                ],
                xName: 'x', width: 2, marker: {
                    visible: true,
                    width: 10,
                    height: 10
                },
                yName: 'y', name: 'Min Temp',
            }
        ],
        //Initializing Chart Title
        title: 'NC Weather Report - 2016',
        tooltip: { enable: true },
        width: ej.base.Browser.isDevice ? '100%' : '60%',
           // custom code start
        load: function (args) {
            var splineTheme = location.hash.split('/')[1];
            splineTheme = splineTheme ? splineTheme : 'Material';
            args.chart.theme = (splineTheme.charAt(0).toUpperCase() + 
                splineTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        }
           // custom code end
    });
    chart.appendTo('#spline-container');
};