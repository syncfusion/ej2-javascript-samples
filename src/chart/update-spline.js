/**
 * Sample for spline updating each second.
 */
var splineData = [
    { x: new Date(2024, 5, 6, 6, 7, 3),  y: 42 },
    { x: new Date(2024, 5, 6, 6, 7, 5),  y: 52 },
    { x: new Date(2024, 5, 6, 6, 7, 7),  y: 83 },
    { x: new Date(2024, 5, 6, 6, 7, 9),  y: 75 },
    { x: new Date(2024, 5, 6, 6, 7, 11), y: 35 },
    { x: new Date(2024, 5, 6, 6, 7, 13), y: 85 },
    { x: new Date(2024, 5, 6, 6, 7, 15), y: 78 },
    { x: new Date(2024, 5, 6, 6, 7, 17), y: 29 },
    { x: new Date(2024, 5, 6, 6, 7, 19), y: 62 },
    { x: new Date(2024, 5, 6, 6, 7, 21), y: 95 },
    { x: new Date(2024, 5, 6, 6, 7, 23), y: 32 },
    { x: new Date(2024, 5, 6, 6, 7, 25), y: 76 },
    { x: new Date(2024, 5, 6, 6, 7, 27), y: 83 },
    { x: new Date(2024, 5, 6, 6, 7, 29), y: 53 },
    { x: new Date(2024, 5, 6, 6, 7, 31), y: 32 },
    { x: new Date(2024, 5, 6, 6, 7, 33), y: 75 }
];
var intervalId;

this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X and Y Axis
        primaryXAxis: {
            valueType: 'DateTime', interval: 7, edgeLabelPlacement: ej.base.Browser.isDevice ? 'None' : 'Shift',
            majorGridLines: { width: 0 }, labelRotation: ej.base.Browser.isDevice ? 45 : 0, plotOffsetRight: 30,
            labelIntersectAction: 'Hide'
        },
        chartArea: { border: { width: 0 } },
        primaryYAxis:
        {
            title: 'Value', interval:20, lineStyle: { width: 0 }, majorTickLines: { width: 0 }
        },
        //Initializing Chart Series
        series: [
            {
                dataSource: splineData, xName: 'x', yName: 'y', type: 'Spline', width: 2,
                marker: { visible: true, isFilled: true, width: 7, height: 7 }
            }
        ],
        width: ej.base.Browser.isDevice ? '100%' : '75%',
        title: 'Live data',
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
            args.chart.splineClearInterval();

            intervalId = setInterval(function() {
                var container = document.getElementById('spline');
                if (container) {
                    if (chart && chart.series.length > 0 && chart.series[0].dataSource) {
                        var lastDataPointIndex = chart.series[0].dataSource.length - 1;
                        if (lastDataPointIndex >= 0) {
                            var timestamp = chart.series[0].dataSource[lastDataPointIndex].x;
                            var lastTimestamp = new Date(timestamp).getTime();
                            var x = new Date(lastTimestamp + 2000);
                            var y;
                            if (x.getSeconds() % 3 === 0) {
                                y = Math.max(30, Math.random() * 150);
                            } else if (x.getSeconds() % 2 === 0) {
                                y = Math.max(30, Math.random() * 200);
                            } else {
                                y = Math.max(30, Math.random() * 100);
                            }
                            chart.series[0].addPoint({ x: x, y: y }, 800);
                            chart.series[0].removePoint(0, 800);
                        }
                    }
                }
                else {
                    args.chart.splineClearInterval();
                }
            }, 1000);
        },
        splineClearInterval: function() {
            if (intervalId) {
                clearInterval(intervalId);
                intervalId = null;
            }
        },
        axisRangeCalculated: function (args) {
            if (args.axis.name === 'primaryXAxis') {
                var lastPoint = args.axis.series[0].points[args.axis.series[0].points.length - 1].x;
                args.maximum = new Date(lastPoint).getTime() + 500;
            }
        }
    });
    chart.appendTo('#spline');
};
