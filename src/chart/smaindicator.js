/**
 * Sample for SMA Indicator
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'DateTime',
            intervalType: 'Months',
            majorGridLines: { width: 0 },
            crosshairTooltip: { enable: true },
            zoomFactor: 0.4, zoomPosition: 0.4,
        },
        chartArea: { border: { width: 0 } },
        //Initializing Primary Y Axis
        primaryYAxis: {
            title: 'Price',
            labelFormat: '${value}M',
            minimum: 50, 
            interval: 30,
            maximum: 170, 
            lineStyle: { width: 0 },
            majorGridLines: { width: 1 },
        },
        //Initializing Chart Series
        series: [{
                dataSource: window.chartData, width: 2,
                type: 'Candle', animation: { enable: false },
                xName: 'x', yName: 'y', low: 'low', high: 'high', close: 'close', 
                volume: 'volume', open: 'open',
                name: 'Apple Inc', bearFillColor: '#2ecd71', bullFillColor: '#e74c3d',
            }],
        //Initializing Technical Indicator
        indicators: [{
                type: 'Sma', field: 'Close', 
                period: 14, animation: { enable: true },
                seriesName: 'Apple Inc', fill: '#6063ff',
            }],
        //Initializing Crosshair, Tooltip and Zooming 
        crosshair: { enable: true, lineType: 'Vertical' },
        tooltip: {
            enable: true, shared: true
        },
        zoomSettings: {
            enableDeferredZooming: true,
            mode: 'X',
            enableMouseWheelZooming: true,
            enableSelectionZooming: true,
        },
        //Initializing Chart Title
        title: 'AAPL - 2012-2017',
        width: ej.base.Browser.isDevice ? '100%' : '80%',
        load: function (args) {
            var smaTheme = location.hash.split('/')[1];
            smaTheme = smaTheme ? smaTheme : 'Material';
            args.chart.theme = (smaTheme.charAt(0).toUpperCase() + smaTheme.slice(1));
        },
        legendSettings: { visible: false }
    });
    chart.appendTo('#sma-container');
};