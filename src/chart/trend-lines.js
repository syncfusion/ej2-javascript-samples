/**
 * Samples for trendlines
 */
this.default = function () {
    var series1 = [];
    var yValue = [7.66, 8.03, 8.41, 8.97, 8.77, 8.20, 8.16, 7.89, 8.68, 9.48, 10.11, 11.36, 12.34, 12.60, 12.95,
        13.91, 16.21, 17.50, 22.72, 28.14, 31.26, 31.39, 32.43, 35.52, 36.36,
        41.33, 43.12, 45.00, 47.23, 48.62, 46.60, 45.28, 44.01, 45.17, 41.20, 43.41, 48.32, 45.65, 46.61, 53.34, 58.53];
    var point1;
    var i;
    var j = 0;
    for (i = 1973; i <= 2013; i++) {
        point1 = { x: i, y: yValue[j] };
        series1.push(point1);
        j++;
    }
    var powerData = [
        { x: 1, y: 10 }, { x: 2, y: 50 }, { x: 3, y: 80 }, { x: 4, y: 110 },
        { x: 5, y: 180 }, { x: 6, y: 220 }, { x: 7, y: 300 }, { x: 8, y: 370 }, { x: 9, y: 490 }, { x: 10, y: 500 }
    ];
    var chart = new ej.charts.Chart({
        primaryXAxis: {
            majorGridLines: { width: 0 },
            edgeLabelPlacement: 'Shift'
        },
        primaryYAxis: {
            title: 'Rupees against Dollars',
            interval: 10, lineStyle: { width: 0 }, majorTickLines: { width: 0 }
        },
        series: [{
            dataSource: series1, xName: 'x', yName: 'y',
            name: 'Rupees', type: 'Spline',
            marker: { visible: true },
            trendlines: [{ type: 'Linear', width: 3, marker: { visible: false }, name: 'TrendLine' , fill: '#C64A75' }]
        }],
        tooltip: { enable: true },
        title: 'Historical Indian Rupee Rate (INR/USD)',
        chartArea: { border: { width: 0 } },
        legendSettings: { visible: true },
           // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        },
           // custom code end
    });
    chart.appendTo('#container');
    var forward = new ej.inputs.NumericTextBox({
        value: 0, min: 1, max: 20, width: 120, step: 1,
        change: function () {
            chart.series[0].animation.enable = false;
            chart.series[0].trendlines[0].forwardForecast = forward.value;
            chart.refresh();
        }
    });
    forward.appendTo('#forwardForecast');
    var backward = new ej.inputs.NumericTextBox({
        value: 0, min: 1, max: 20, width: 120, step: 1, change: function () {
            chart.series[0].animation.enable = false;
            chart.series[0].trendlines[0].backwardForecast = backward.value;
            chart.refresh();
        }
    });
    backward.appendTo('#backwardForecast');
    var polynomial = new ej.inputs.NumericTextBox({
        value: 0, min: 1, max: 20, width: 120, step: 1, enabled: false,
        change: function () {
            chart.series[0].animation.enable = false;
            chart.series[0].trendlines[0].polynomialOrder = polynomial.value;
            chart.refresh();
        }
    });
    polynomial.appendTo('#polynomialOrder');
    var periodValue = new ej.inputs.NumericTextBox({
        value: 0, min: 1, max: 20, width: 120, step: 1, enabled: false,
        change: function () {
            chart.series[0].animation.enable = false;
            chart.series[0].trendlines[0].period = periodValue.value;
            chart.refresh();
        }
    });
    periodValue.appendTo('#period');
    var trend = new ej.dropdowns.DropDownList({
        index: 0, width: 120,
        change: function () {
            chart.series[0].animation.enable = false;
            chart.series[0].dataSource = [];
            chart.series[0].trendlines[0].type = trend.value;
            chart.series[0].trendlines[0].name = trend.value;
            var forwardForecast;
            var backwardForecast;
            var polynomialOrder;
            var period;
            if (trend.value !== 'Power') {
                chart.series[0].dataSource = series1;
                chart.series[0].name = 'Rupees';
                chart.primaryXAxis.title = '';
                chart.primaryYAxis.interval = 10;
                chart.primaryYAxis.title = 'Rupees against Dollars';
                chart.title = 'Historical Indian Rupee Rate (INR USD)';
                if (trend.value === 'MovingAverage') {
                    chart.series[0].trendlines[0].marker.visible = false;
                }
            }
            else {
                chart.series[0].dataSource = powerData;
                chart.series[0].name = 'Meters';
                chart.primaryXAxis.title = 'Seconds';
                chart.primaryYAxis.title = 'Meters';
                chart.primaryYAxis.interval = 100;
                chart.title = 'Distance Measurement';
            }
            if (trend.value !== 'Polynomial' && trend.value !== 'MovingAverage') {
                period = polynomialOrder = true;
                forwardForecast = backwardForecast = false;
            }
            else if (trend.value === 'MovingAverage') {
                period = false;
                forwardForecast = backwardForecast = polynomialOrder = true;
            }
            else {
                forwardForecast = backwardForecast = polynomialOrder = false;
                period = true;
            }
            forward.enabled = !forwardForecast;
            backward.enabled = !backwardForecast;
            polynomial.enabled = !polynomialOrder;
            periodValue.enabled = !period;
            chart.refresh();
        }
    });
    trend.appendTo('#trendLineType');
};