/**
 * Sample of candle updates for a few seconds.
 */
var value = 180;
var getData = function () {
    var series = [];
    var point;
    for (var i = 0; i < 30; i++) {
        value = 180 + Math.round((Math.random() * 25) * Math.sin(i * Math.PI / 8));
        value = Math.max(140, Math.min(260, value));
        if (value > 260) {
            value = 260;
        }
        if (value < 140) {
            value = 140;
        }
        var open = value + Math.round(Math.random() * 18);
        var low = Math.min(value, open) - Math.round(Math.random() * 6);
        var high = Math.min(220, Math.max(value, open) + Math.round(Math.random() * 15));
        point = {
            x: new Date(2000, 5, 2, 2, 0, i),
            close: value,
            open: open,
            low: low,
            high: high
        };
        series.push(point);
    }
    return { series: series };
};

var data = getData().series;
var incVal = 0;
var updateVal = data.length;
var pointAdded = false;
var intervalId;

this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X and Y Axis
        primaryXAxis: {
            valueType: 'DateTime', interval: ej.base.Browser.isDevice ? 8 : 4, crosshairTooltip: { enable: true }, edgeLabelPlacement: ej.base.Browser.isDevice ? 'None' : 'Shift', majorGridLines: { width: 0 },
            labelIntersectAction: 'Hide'
        },
        chartArea: { border: { width: 0 } },
        primaryYAxis:
        {
            interval: 20, opposedPosition: true, minimum: 120, crosshairTooltip: { enable: true }, lineStyle: { width: 0 },
            majorGridLines: { width: 1 }, majorTickLines: { width: 0 }
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Candle', bearFillColor: '#2ecd71', bullFillColor: '#e74c3d', columnWidth: 0.4,
                dataSource: data, xName: 'x', low: 'low', high: 'high', open: 'open', close: 'close'
            }
        ],
        width: ej.base.Browser.isDevice ? '100%' : '90%',
        title: 'AAPL Historical',
        crosshair: { enable: true, dashArray: '5,5' },
        pointRender: function (args) {
            if (args.series.chart.enableRtl) {
                args.series.chart.annotations[0].x = 0;
            }
            if (pointAdded && args.series.points[args.series.points.length - 1] === args.point) {
                var firstPoint = args.series.chart.enableRtl ? args.series.points[args.series.points.length - 1].x : args.series.points[0].x;
                args.series.chart.annotations[0].x = new Date(firstPoint).getTime() + (args.series.chart.enableRtl ? 2000 : 1000);
                args.series.chart.annotations[0].y = args.point.close + 0.25;
                args.series.chart.annotations[0].content = '<div style="width: ' + args.series.chart.initialClipRect.width + 'px; height: 0; left: ' + 
                (ej.base.Browser.isDevice ? -10 : -16) + 'px; position: absolute;">' +
                '<svg width="100%" height="2" style="display: block;">' +
                '<line x1="0" y1="1" x2="' + args.series.chart.initialClipRect.width + '" y2="1" ' +
                'style="stroke:#868180; stroke-width:0.75; stroke-dasharray:5,5;" />' +
                '</svg>' +
                '</div>' +
                '<div style="width: 40px; height: 18px; background-color: ' + args.fill + '; border: 1px solid rgba(48, 153, 245, 0.4); color: white; font-size: 11px; display: flex; align-items: center; justify-content: center; text-align: center; line-height: 18px; position: absolute; left: ' + 
                (args.series.chart.enableRtl ? -args.series.chart.initialClipRect : args.series.chart.initialClipRect.width - 20) + 'px; top: -9px;">' + 
                (args.point.close).toFixed(2) +
                '</div>';
            }
        },
        annotations: [{
            x: new Date(2000, 5, 2, 2, 0, 1),
            region: "Series",
            coordinateUnits: 'Point',
            y: 140,
            content: '<div></div>'
        }],
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
            args.chart.stockClearInterval();

            intervalId = setInterval(function () {
                var container = document.getElementById('stock');
                if (container && container.id === args.chart.element.id) {
                    var newData1 = [];
                    var value = 180;
                    pointAdded = true;
                    for (var i = 0; i < data.length; i++) {
                        newData1.push(Object.assign({}, data[i]));
                    }
                    if (newData1.length > 0) {
                        var lastIndex = newData1.length - 1;
                        var previousClose = newData1[lastIndex].close;
                        newData1[lastIndex].close += (Math.random() < 0.5 ? 1 : -1) * Math.random() * 25;
                        newData1[lastIndex].close = Math.min(Math.min(Math.max(newData1[lastIndex].close, newData1[lastIndex].low + 5), newData1[lastIndex].high - 5), newData1[lastIndex].open - 2);
                        if (previousClose === newData1[lastIndex].close) {
                            newData1[lastIndex].close -= 5;
                        }
                    }
                    if (incVal < 10) {
                        if (chart.series.length > 0) {
                            chart.series[0].setData(newData1);
                            incVal++;
                        }
                    }
                    else {
                        var change = Math.round((Math.random() < 0.49 ? 1 : -1) * Math.random() * 10);
                        value += change;
                        if (value > 260) {
                            value = 260;
                        }
                        if (value < 140) {
                            value = 140;
                        }
                        var open = value + Math.round(Math.random() * 12);
                        var low = Math.min(value, open) - Math.round(Math.random() * 8);
                        var high = Math.max(value, open) + Math.round(Math.random() * 15);
                        if (chart.series.length > 0) {
                            var lastDataPointIndex = chart.series[0].dataSource.length - 1;
                            if (lastDataPointIndex >= 0) {
                                var timestamp = chart.series[0].dataSource[lastDataPointIndex].x;
                                var lastTimestamp = new Date(timestamp).getTime();
                                chart.series[0].addPoint({ x: new Date(lastTimestamp + 1000), high: high, low: low, open: open, close: value });
                            }
                        }
                        incVal = 0;
                        updateVal++;
                    }
                }
                else {
                    args.chart.stockClearInterval();
                }
            }, 1000);
        },
        stockClearInterval: function() {
            if (intervalId) {
                clearInterval(intervalId);
                intervalId = null;
            }
        },
        axisRangeCalculated: function (args) {
            if (args.axis.name === 'primaryXAxis') {
                var lastPoint = args.axis.series[0].points[args.axis.series[0].points.length - 1].x;
                args.maximum = new Date(lastPoint).getTime() + 2500;
                var firstPoint = args.axis.series[0].points[0].x;
                args.minimum = new Date(firstPoint).getTime() + 500;
            }
        }
    });
    chart.appendTo('#stock');
};
