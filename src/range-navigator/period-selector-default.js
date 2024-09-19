/**
 * Sample for stock chart
 */
var selectedThemes = location.hash.split('/')[1];
selectedThemes = selectedTheme ? selectedTheme : 'Fluent2';
var themes = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
this.default = function () {
    var chart = new ej.charts.Chart({
        primaryXAxis: {
            valueType: 'DateTime',
            majorGridLines: { width: 0 },
            crosshairTooltip: { enable: true }
        },
        primaryYAxis: {
            title: 'Price',
            labelFormat: '${value}',
            plotOffset: 25,
            minimum: 50, maximum: 170,
            interval: 30, rowIndex: 1, opposedPosition: true, lineStyle: { width: 0 },
        },
        rows: [
            {
                height: '40%'
            }, {
                height: '60%'
            }
        ],
        axes: [{
            name: 'secondary',
            opposedPosition: true, rowIndex: 0,
            majorGridLines: { width: 0 }, lineStyle: { width: 0 }, minimum: 80, maximum: 120, interval: 20,
            majorTickLines: { width: 0 },title: 'Momentum', stripLines: [
                {
                    start: 80, end: 120, text: '', visible: true,
                    opacity: 0.03, zIndex: 'Behind', color: 'black'
                }
            ]
        }],
        series: [{
            dataSource: window.chartData, width: 2,
            xName: 'x', yName: 'y', low: 'low', high: 'high', close: 'close', volume: 'volume', open: 'open',
            name: 'Apple Inc', bearFillColor: '#2ecd71', bullFillColor: '#e74c3d',
            type: 'Candle', animation: { enable: true }
        }],
        margin: { top: 0 },
        indicators: [{
            type: 'Momentum', field: 'Close', seriesName: 'Apple Inc', yAxisName: 'secondary', fill: '#6063ff',
            period: 3, animation: { enable: true }, upperLine: { color: '#e74c3d' }
        }],
        tooltip: {
            enable: true, shared: true
        },
        width: ej.base.Browser.isDevice ? '100%' : '80%',
        crosshair: { enable: true, lineType: 'Vertical' },
        chartArea: { border: { width: 0 } },
        theme: themes,
        legendSettings: { visible: false }
    });
    chart.appendTo('#chart');
    var range = new ej.charts.RangeNavigator({
        labelPosition: 'Outside',
        valueType: 'DateTime',
        value: [new Date(2014, 0), new Date(2015, 0)],
        series: [{ dataSource: window.chartData, xName: 'x', yName: 'high', type: 'Line', width: 1 }],
        changed: function (args) {
            chart.primaryXAxis.zoomFactor = args.zoomFactor;
            chart.primaryXAxis.zoomPosition = args.zoomPosition;
            chart.dataBind();
        },
        theme: themes,
        margin: { right: 0, left: 0, top: 0, bottom: 0 },
        width: ej.base.Browser.isDevice ? '100%' : '80%',
        periodSelectorSettings: {
            position: 'Top',
            height: 56,
            periods: [
                { text: '1M', interval: 1, intervalType: 'Months' },
                { text: '2M', interval: 2, intervalType: 'Months' },
                { text: '6M', interval: 6, intervalType: 'Months' },
                { text: 'YTD' },
                { text: '1Y', interval: 1, intervalType: 'Years' },
                { text: '2Y', interval: 2, intervalType: 'Years' },
                { text: 'ALL' }
            ]
        },
        loaded: function (args) {
            if (!ej.base.Browser.isDevice) {
                document.getElementById('container_Secondary_Element').style.transform = 'translate(13%)';
            }
        },
        load: function (args) {
            args.rangeNavigator.dateTimeModule = new ej.charts.DateTime(args.rangeNavigator);
            args.rangeNavigator.rangeTooltipModule = new ej.charts.RangeTooltip(args.rangeNavigator);
            args.rangeNavigator.periodSelectorModule = new ej.charts.PeriodSelector(args.rangeNavigator);
            args.rangeNavigator.logarithmicModule = new ej.charts.Logarithmic(args.rangeNavigator);
            args.rangeNavigator.areaSeriesModule = new ej.charts.AreaSeries(args.rangeNavigator);
            args.rangeNavigator.stepLineSeriesModule = new ej.charts.StepLineSeries(args.rangeNavigator);
            args.rangeNavigator.periodSelectorSettings.height = document.body.className.indexOf('e-bigger') > -1 ? 56 : 42;
        }
    });
    range.appendTo('#container');
};