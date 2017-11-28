/**
 * Sample for RSI Indicator
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'DateTime',
            intervalType: 'Months', 
            zoomFactor: 0.4, zoomPosition: 0.6,
            majorGridLines: { width: 0 },
            skeleton: 'yMd',
            crosshairTooltip: { enable: true },
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            title: 'Price',
            labelFormat: '${value}',
            plotOffset: 25,
            minimum: 50, maximum: 170,
            interval: 30, rowIndex: 1, opposedPosition: true, lineStyle: { width: 0 }
        },
        //Initializing Rows
        rows: [
            {
                height: '40%'
            }, {
                height: '60%'
            }
        ],
        //Initializing Axes
        axes: [{
                name: 'secondary',
                opposedPosition: true, rowIndex: 0,
                majorGridLines: { width: 0 }, lineStyle: { width: 0 }, minimum: 0, maximum: 120, interval: 60,
                majorTickLines: { width: 0 }, title: 'RSI', stripLines: [
                    {
                        start: 0, end: 120, text: '', color: 'black', visible: true,
                        opacity: 0.03, zIndex: 'Behind'
                    }
                ]
            }],
        //Initializing Chart Series
        series: [{
                dataSource: window.chartData, width: 2,
                bearFillColor: '#2ecd71', bullFillColor: '#e74c3d',
                xName: 'x', yName: 'y', low: 'low', high: 'high', close: 'close', volume: 'volume', 
                open: 'open', name: 'Apple Inc',
                type: 'Candle', animation: { enable: true }
            }],
        //Initializing Technical Indicator
        indicators: [{
                type: 'Rsi', field: 'Close', seriesName: 'Apple Inc', 
                showZones: true, overBought: 70, overSold: 30,
                yAxisName: 'secondary', fill: '#6063ff',
                period: 3, animation: { enable: true }, upperLine: { color: '#e74c3d' }, lowerLine: { color: '#2ecd71' }
            }],
        //Initializing Zooming
        zoomSettings: {
            enableMouseWheelZooming: true,
            enablePinchZooming: true,
            enableSelectionZooming: true,
            mode: 'X'
        },
        //Initializing Tooltip
        tooltip: {
            enable: true, shared: true
        },
        //Initializing Crosshair
        crosshair: { enable: true, lineType: 'Vertical' },
        chartArea: { border: { width: 0 } },
        //Initializing Chart Title
        title: 'AAPL 2012-2017',
        width: ej.base.Browser.isDevice ? '100%' : '80%',
        load: function (args) {
            var rsiTheme = location.hash.split('/')[1];
            rsiTheme = rsiTheme ? rsiTheme : 'Material';
            args.chart.theme = (rsiTheme.charAt(0).toUpperCase() + rsiTheme.slice(1));
        },
        legendSettings: { visible: false }
    });
    chart.appendTo('#rsi-container');
};