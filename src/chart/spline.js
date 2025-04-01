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
            labelIntersectAction: 'Rotate90',
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 }
        },
        chartArea: {
            border: {
                width: 0
            },
            margin: {
                bottom: 12
            }
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            labelFormat: '{value}°F',
            minimum: 0,
            interval: 20,
            title: 'Temperature (°F)',
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 }
        },
        //Initializing Chart Annotations
        annotations: [{
            content: '<div id="chart_cloud"><img src="src/chart/images/cloud.png" alt="Cloud Picture" style="width: 41px; height: 41px"/></div>',
            x: 'Jan', y: 22.75, coordinateUnits: 'Point', verticalAlignment: 'Middle'
        }, {
            content: '<div id="chart_cloud"><img src="src/chart/images/sunny.png" alt="Sunny Picture" style="width: 41px; height: 41px"/></div>',
            x: 'Jul', y: 88.43, coordinateUnits: 'Point', verticalAlignment: 'Middle'
        }],
        //Initializing Chart Series
        series: [
            {
                type: 'Spline',
                dataSource: [
                    { x: 'Jan', y: 41.02 },
                    { x: 'Feb', y: 51.93 },
                    { x: 'Mar', y: 56.39 },
                    { x: 'Apr', y: 66.06 },
                    { x: 'May', y: 74.64 },
                    { x: 'Jun', y: 84.58 },
                    { x: 'Jul', y: 88.43 },
                    { x: 'Aug', y: 86.72 },
                    { x: 'Sep', y: 81.86 },
                    { x: 'Oct', y: 73.13 },
                    { x: 'Nov', y: 55.54 },
                    { x: 'Dec', y: 48.36 }
                ],
                xName: 'x', width: 2, marker: {
                    visible: true,
                    width: 7,
                    height: 7,
                    isFilled: true
                },
                yName: 'y', name: 'Max Temp'
            },
            {
                type: 'Spline',
                dataSource: [
                    { x: 'Jan', y: 31.89 },
                    { x: 'Feb', y: 40.82 },
                    { x: 'Mar', y: 44.96 },
                    { x: 'Apr', y: 53.64 },
                    { x: 'May', y: 62.28 },
                    { x: 'Jun', y: 71.80 },
                    { x: 'Jul', y: 75.69 },
                    { x: 'Aug', y: 73.99 },
                    { x: 'Sep', y: 68.61 },
                    { x: 'Oct', y: 58.95 },
                    { x: 'Nov', y: 45.18 },
                    { x: 'Dec', y: 38.21 }
                ],
                xName: 'x', width: 2, marker: {
                    visible: true,
                    width: 7,
                    height: 7,
                    isFilled: true
                },
                yName: 'y', name: 'Avg Temp'
            },
            {
                type: 'Spline',
                dataSource: [
                    { x: 'Jan', y: 22.75 },
                    { x: 'Feb', y: 29.71 },
                    { x: 'Mar', y: 33.53 },
                    { x: 'Apr', y: 41.22 },
                    { x: 'May', y: 49.87 },
                    { x: 'Jun', y: 59.02 },
                    { x: 'Jul', y: 62.94 },
                    { x: 'Aug', y: 61.27 },
                    { x: 'Sep', y: 55.36 },
                    { x: 'Oct', y: 44.76 },
                    { x: 'Nov', y: 34.79 },
                    { x: 'Dec', y: 28.04 }
                ],
                xName: 'x', width: 2, marker: {
                    visible: true,
                    width: 7,
                    height: 7,
                    isFilled: true
                },
                yName: 'y', name: 'Min Temp'
            }
        ],
        //Initializing Chart Title
        title: '2024 US Temperature Trends with Hottest Coldest and Average Records',
        subTitle: 'Source: ncei.noaa.gov',
        legendSettings: { enableHighlight: true },
        //Initializing User Interaction Tooltip
        tooltip: { enable: true, showNearestTooltip: true, header: '<b>${point.x}<b>', format: '${series.name} : <b>${point.y}</b>', shared: true },
        crosshair: { enable: true, lineType: 'Vertical', highlightCategory: true },
        width: ej.base.Browser.isDevice ? '100%' : '75%',
        height: '500px',
        // custom code start
        load: function (args) {
            var splineTheme = location.hash.split('/')[1];
            splineTheme = splineTheme ? splineTheme : 'Fluent2';
            args.chart.theme = (splineTheme.charAt(0).toUpperCase() + 
                splineTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
        // custom code end
    });
    chart.appendTo('#spline-container');
};