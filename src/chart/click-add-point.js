/**
 * Sample for click to add a point.
 */
var chartData = [
    { x: 20, y: 20 }, { x: 80, y: 80 }
];
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X and Y Axis
        primaryXAxis: {
            edgeLabelPlacement: 'Shift',
            rangePadding: 'Additional',
            majorGridLines: { width: 0 }
        },
        chartArea: { border: { width: 0 } },
        primaryYAxis:
        {
            title: 'Value', interval: 20, lineStyle: { width: 0 }, majorTickLines: { width: 0 }
        },
        //Initializing Chart Series
        series: [
            {
                dataSource: chartData, xName: 'x', yName: 'y', type: 'Line', width: 3,
                marker: { visible: true, isFilled: true, border: { width: 2, color: 'White' }, width: 13, height: 13 }
            }
        ],
        width: ej.base.Browser.isDevice ? '100%' : '70%',
        title: 'User supplied data',
        tooltip: { enable: true },
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        },
        chartMouseClick: function (args) {
            var isRemoved = false;
            if (args.axisData) {
                for (var i = 0; i < chart.series[0].points.length; i++) {
                    var markerWidth = chart.series[0].marker.width / 2;
                    var roundedX = Math.round(args.axisData.primaryXAxis) + markerWidth;
                    var roundedY = Math.round(args.axisData.primaryYAxis) + markerWidth;
                    var pointX = Math.round(chart.series[0].points[i].x) + markerWidth;
                    var pointY = Math.round(chart.series[0].points[i].y) + markerWidth;
                    if ((roundedX === pointX || roundedX + 1 === pointX || roundedX - 1 === pointX) &&
                        (roundedY === pointY || roundedY + 1 === pointY || roundedY - 1 === pointY)) {
                        if (chart.series[0].points.length > 1) {
                            var points = chart.series[0].points;
                            var duration = i === 0 || i === points[points.length - 1].index ? 500 : 0;
                            chart.series[0].removePoint(i, duration);
                        }
                        isRemoved = true;
                    }
                }
                if (!isRemoved) {
                    chart.series[0].addPoint({ x: Math.round(args.axisData.primaryXAxis), y: Math.round(args.axisData.primaryYAxis) });
                }
            }
        },
        axisRangeCalculated: function(args) {
            if (args.axis.name === 'primaryXAxis') {
                if (args.interval < 10) {
                    args.maximum = args.maximum + 10;
                    args.minimum = args.minimum - 10;
                    args.interval = 10;
                }
            }
            if (args.axis.name === 'primaryYAxis') {
                if (args.maximum <= 60) {
                    args.interval = 10;
                }
            }
        }
    });
    chart.appendTo('#AddPoint');
};