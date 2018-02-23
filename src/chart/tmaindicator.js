/**
 * Sample for TMA Indicator
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'DateTime',
            majorGridLines: { width: 0 },
            zoomFactor: 0.4, zoomPosition: 0.4,
            crosshairTooltip: { enable: true },
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            title: 'Price',
            labelFormat: '${value}M',
            minimum: 50, maximum: 170, interval: 30,
            majorGridLines: { width: 1 }, lineStyle: { width: 0 }
        },
        //Initializing Chart Series
        series: [{
                dataSource: window.chartData, width: 2,
                xName: 'x', yName: 'y', low: 'low', high: 'high', close: 'close', volume: 'volume', open: 'open',
                name: 'Apple Inc', bearFillColor: '#2ecd71', bullFillColor: '#e74c3d',
                type: 'Candle', animation: { enable: false }
            }],
        //Initializing Technical Indicator
        indicators: [{
                type: 'Tma', field: 'Close', seriesName: 'Apple Inc', fill: '#6063ff',
                period: 14, animation: { enable: true }
            }],
        //Initializing Tooltip, Crosshair and Zooming
        tooltip: {
            enable: true, shared: true
        },
        crosshair: { enable: true, lineType: 'Vertical' },
        zoomSettings: {
            enableSelectionZooming: true,
            mode: 'X',
            enablePan: true
        },
        //Initializing Chart Title
        title: 'AAPL - 2012-2017',
        width: ej.base.Browser.isDevice ? '100%' : '80%',
        load: function (args) {
            var tmaTheme = location.hash.split('/')[1];
            tmaTheme = tmaTheme ? tmaTheme : 'Material';
            args.chart.theme = (tmaTheme.charAt(0).toUpperCase() + tmaTheme.slice(1));
        },
        legendSettings: { visible: false }
    });
    chart.appendTo('#tma-container');
};