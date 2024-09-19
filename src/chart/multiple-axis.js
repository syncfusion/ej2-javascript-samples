/**
 * Sample for Multiple Axes
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            majorGridLines: { width: 0 },
            minorGridLines: { width: 0 },
            majorTickLines: { width: 0 }
        },
        //Initializing Primary X Axis
        primaryYAxis: {
            minimum: 0, maximum: 100, interval: 20,
            lineStyle: { width: 0 },
            labelFormat: '{value}°F',  majorTickLines: { width: 0 }  
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Axes
        axes: [
            {
                majorGridLines: { width: 0 },
                rowIndex: 0, opposedPosition: true,
                lineStyle: { width: 0 },
                minimum: 24, maximum: 36, interval: 2,
                name: 'yAxis',
                labelFormat: '{value}°C',
                majorTickLines: { width: 0 }
            }
        ],
        //Initializing Chart Annotations
        annotations: [{
                content: '<div id="chart_cloud"><img src="src/chart/images/cloud.png" alt="Cloud Picture" style="width: 41px; height: 41px"/></div>',
                x: 'Sun', y: 70, coordinateUnits: 'Point', verticalAlignment: 'Top'
            }, {
                content: '<div id="chart_cloud"><img src="src/chart/images/sunny.png" alt="Sunny Picture" style="width: 41px; height: 41px"/></div>',
                x: 'Sat', y: 35, coordinateUnits: 'Point', yAxisName: 'yAxis'
            }],
        //Initializing Chart Series
        series: [
            {
                type: 'Column',
                dataSource: [
                    { x: 'Sun', y: 35 }, { x: 'Mon', y: 40 },
                    { x: 'Tue', y: 80 }, { x: 'Wed', y: 70 }, { x: 'Thu', y: 65 }, { x: 'Fri', y: 55 },
                    { x: 'Sat', y: 50 }
                ],
                width: 2,
                xName: 'x', yName: 'y',
                name: 'Germany', marker: { visible: true, height: 7, width: 7}
            },
            {
                type: 'Spline',
                dataSource: [
                    { x: 'Sun', y: 30 }, { x: 'Mon', y: 28 },
                    { x: 'Tue', y: 29 }, { x: 'Wed', y: 30 }, { x: 'Thu', y: 33 }, { x: 'Fri', y: 32 },
                    { x: 'Sat', y: 34 }
                ],
                xName: 'x', yName: 'y',
                width: 2, yAxisName: 'yAxis',
                name: 'Japan',
                marker: { visible: true, width: 7, height: 7, isFilled: true }
            }
        ],
        legendSettings: {
            visible: false
        },
        //Initializing tooltip
        tooltip: { enable: true },
        width: ej.base.Browser.isDevice ? '100%' : '75%',
        //Initializing Chart Title
        title: 'Weather Data',
         // custom code start
        load: function (args) {
            var axisTheme = location.hash.split('/')[1];
            axisTheme = axisTheme ? axisTheme : 'Fluent2';
            args.chart.theme = (axisTheme.charAt(0).toUpperCase() + 
                axisTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
         // custom code end
    });
    chart.appendTo('#axes-container');
};