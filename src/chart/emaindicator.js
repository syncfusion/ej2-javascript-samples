/**
 * Sample for EMA Indicator
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'DateTime',            
            majorGridLines: { width: 0 },
            zoomFactor: 0.2,            
            zoomPosition: 0.6,
            crosshairTooltip: { enable: true },
        }, 
        //Initializing Chart Area
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Primary X Axis
        primaryYAxis: {
            title: 'Price',
            labelFormat: '${value}M',
            majorGridLines: { width: 1 },
            minimum: 50, maximum: 170, interval: 30,
            lineStyle: { width: 0 }
        },
        //Initializing Chart Series
        series: [{
                dataSource: window.chartData, width: 2,
                name: 'Apple Inc', bearFillColor: '#2ecd71', bullFillColor: '#e74c3d',
                xName: 'x', yName: 'y', low: 'low', high: 'high', close: 'close', volume: 'volume', open: 'open',
                type: 'Candle', animation: { enable: false }
            }],
        //Initializing Technical Indicator
        indicators: [{
                period: 14, animation: { enable: true },
                type: 'Ema', field: 'Close', seriesName: 'Apple Inc', fill: '#606eff',
            }],
        //Initializing Tooltip
        tooltip: {
            enable: true, shared: true
        },
        //Initializing Zooming
        zoomSettings: {
            enableSelectionZooming: true,
            mode: 'X',
            enablePan : true
        },
        //Initializing Chart Title
        title: 'AAPL - 2012-2017',
        width: ej.base.Browser.isDevice ? '100%' : '80%',
        //Initializing Crosshair
        crosshair: { enable: true, lineType: 'Vertical' },
        load: function (args) {
            var emaTheme = location.hash.split('/')[1];
            emaTheme = emaTheme ? emaTheme : 'Material';
            args.chart.theme = (emaTheme.charAt(0).toUpperCase() + emaTheme.slice(1));
        },
        legendSettings: { visible: false }
    });
    chart.appendTo('#ema-container');
};