/**
 * Sample for Bollinger Band Indicator
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'DateTime',            
            majorGridLines: { width: 0 },
            zoomFactor: 0.2, zoomPosition: 0.6,            
            crosshairTooltip: { enable: true }
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            title: 'Price',
            labelFormat: '${value}M',
            minimum: 50, maximum: 170, interval: 30,
            majorGridLines: { width: 1 },
            lineStyle: { width: 0 }
        },
        //Initializing Technical Indicator
        indicators: [{
            type: 'BollingerBands', field: 'Close', seriesName: 'Apple Inc', fill: '#606eff',
            period: 14, animation: { enable: true }, upperLine: { color: '#ffb735', width: 1 }, lowerLine: { color: '#f2ec2f', width: 1 }
        }],
        //Initializing Chart Series
        series: [{
                dataSource: window.chartData, width: 2,
                xName: 'x', yName: 'y', low: 'low', high: 'high', close: 'close', 
                volume: 'volume', open: 'open',
                name: 'Apple Inc', bearFillColor: '#2ecd71', bullFillColor: '#e74c3d',
                type: 'Candle', animation: { enable: false }
            }],
        //Initializing Tooltip
        tooltip: {
            enable: true, shared: true
        },
        //Initializing Crosshair
        crosshair: { enable: true, lineType: 'Vertical' },
        //Initializing Zooming
        zoomSettings: {
            enableSelectionZooming: true,
            mode: 'X',
            enablePan : true
        },
        width: ej.base.Browser.isDevice ? '100%' : '80%',
        //Initializing Chart Title
        title: 'AAPL - 2012-2017',
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
        },
        legendSettings: { visible: false }
    });
    chart.appendTo('#bollinger-container');
};