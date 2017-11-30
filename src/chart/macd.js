/**
 * Sample for MACD Indicator
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'DateTime',
            intervalType: 'Months', majorGridLines: { width: 0 },
            skeleton: 'yMd',
            crosshairTooltip: { enable: true }, zoomFactor: 0.4, zoomPosition: 0.6
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            title: 'Price',
            labelFormat: '${value}',
            plotOffset: 25,
            minimum: 50, maximum: 170,
            opposedPosition: true, lineStyle: { width: 0 },
            interval: 30, rowIndex: 1,
        },
        //Initializing Rows
        rows: [ { height: '40%' }, {  height: '60%'  } ],
        //Initializing Axes
        axes: [{
                name: 'secondary',
                opposedPosition: true, rowIndex: 0,
                lineStyle: { width: 0 }, minimum: -3.5, maximum: 3.5, interval: 3.5,
                majorGridLines: { width: 0 }, title: 'MACD',
                majorTickLines: { width: 0 },  
                stripLines: [
                    {
                        start: -3.5, end: 3.5, 
                        opacity: 0.03, zIndex: 'Behind',
                        text: '', color: 'black', visible: true,
                    }
                ]
            }],
        //Initializing Chart Series
        series: [{
                dataSource: window.chartData, width: 2, volume: 'volume', open: 'open',
                xName: 'x', yName: 'y', high: 'high', close: 'close', low: 'low', 
                name: 'Apple Inc', bearFillColor: '#2ecd71', bullFillColor: '#e74c3d',
                type: 'Candle', animation: { enable: true }
            }],
        //Initializing Technical Indicator
        indicators: [{
                type: 'Macd', period: 3,
                fastPeriod: 8,
                slowPeriod: 5,
                seriesName: 'Apple Inc',
                macdType: 'Both',
                width: 2,
                macdPositiveColor: '#2ecd71',
                macdNegativeColor: '#e74c3d',
                fill: '#6063ff',
                yAxisName: 'secondary'
            }],
        //Initializing Zooming, Tooltip and Crosshair
        zoomSettings: {
            enableMouseWheelZooming: true, enablePinchZooming: true,
            enableSelectionZooming: true,  mode: 'X'
        },
        tooltip: {
            enable: true, shared: true
        },
        crosshair: { enable: true, lineType: 'Vertical' },
        //Initializing Chart Title
        title: 'AAPL 2012-2017', chartArea: { border: { width: 0 } },
        width: ej.base.Browser.isDevice ? '100%' : '80%',
        load: function (args) {
            var macdTheme = location.hash.split('/')[1];
            macdTheme = macdTheme ? macdTheme : 'Material';
            args.chart.theme = (macdTheme.charAt(0).toUpperCase() + macdTheme.slice(1));
        },
        legendSettings: { visible: false }
    });
    chart.appendTo('#macd-container');
};