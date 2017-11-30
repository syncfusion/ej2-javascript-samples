/**
 * Sample for ATR Indicator
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'DateTime',
            intervalType: 'Months',
            majorGridLines: { width: 0 },
            skeleton: 'yMd',
            zoomFactor: 0.2, zoomPosition: 0.6,
            crosshairTooltip: { enable: true },
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            title: 'Price',
            labelFormat: '${value}',
            minimum: 50, maximum: 170,
            interval: 30, rowIndex: 1,
            plotOffset: 25,
            majorGridLines: { width: 1 }, opposedPosition: true, lineStyle: { width: 0 }
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
                majorGridLines: { width: 0 }, lineStyle: { width: 0 }, majorTickLines: { width: 0 },
                maximum: 14, minimum: 0, interval: 7, title: 'ATR',
                stripLines: [
                    {
                        start: 0, end: 14, text: '',
                        opacity: 0.1, 
                        color: '#6063ff', visible: true,
                        zIndex: 'Behind'
                    }
                ]
            }],
        //Initializing Chart Series
        series: [{
                dataSource: window.chartData, width: 2,
                xName: 'x', yName: 'y', low: 'low', 
                bullFillColor: '#e74c3d',
                high: 'high', close: 'close', volume: 'volume', open: 'open',
                name: 'Apple Inc', bearFillColor: '#2ecd71', 
                type: 'Candle', animation: { enable: true }
            }],
        //Initializing Technical Indicator
        indicators: [{
                type: 'Atr', field: 'Close', 
                seriesName: 'Apple Inc', yAxisName: 'secondary', fill: '#6063ff',
                period: 3, 
                animation: { enable: true }
            }],
        //Initializing Zoom
        zoomSettings: {
            mode: 'X',
            enableMouseWheelZooming: true,
            enablePinchZooming: true,
            enableSelectionZooming: true,
        },
        //Initializing Tooltip
        tooltip: {
            enable: true, shared: true
        },
        //Initializing Crosshair
        crosshair: { enable: true, lineType: 'Vertical' },
        chartArea: { border: { width: 0 } }, title: 'AAPL 2012-2017',
        width: ej.base.Browser.isDevice ? '100%' : '80%',
        load: function (args) {
            var atrTheme = location.hash.split('/')[1];
            atrTheme = atrTheme ? atrTheme : 'Material';
            args.chart.theme = (atrTheme.charAt(0).toUpperCase() + atrTheme.slice(1));
        },
        legendSettings: { visible: false }
    });
    chart.appendTo('#atr-container');
};