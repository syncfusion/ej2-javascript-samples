/**
 * Sample for Momentum Indicator
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'DateTime',
            majorGridLines: { width: 0 },
            zoomFactor: 0.2, zoomPosition: 0.6,
            crosshairTooltip: { enable: true }
        },
        //Initializing Primary X Axis
        primaryYAxis: {
            title: 'Price',
            labelFormat: '${value}',
            plotOffset: 25,
            minimum: 50, maximum: 170,
            interval: 30, rowIndex: 1, opposedPosition: true, lineStyle: { width: 0 },
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
                majorGridLines: { width: 0 }, lineStyle: { width: 0 }, minimum: 80, maximum: 120, interval: 20,
                majorTickLines: { width: 0 }, title: 'Momentum', stripLines: [
                    {
                        start: 80, end: 120, 
                        opacity: 0.03, zIndex: 'Behind',
                        text: '', color: 'black', visible: true,
                    }
                ]
            }],
        //Initializing Chart Series
        series: [{
                dataSource: window.chartData, width: 2,
                close: 'close', volume: 'volume', open: 'open',
                xName: 'x', yName: 'y', low: 'low', high: 'high',
                name: 'Apple Inc', bearFillColor: '#2ecd71', bullFillColor: '#e74c3d',
                type: 'Candle', animation: { enable: true }
            }],
        //Initializing Technical Indicator
        indicators: [{
                type: 'Momentum', field: 'Close', seriesName: 'Apple Inc', yAxisName: 'secondary', 
                fill: '#6063ff', period: 3, 
                animation: { enable: true }, upperLine: { color: '#e74c3d' }
            }],
        //Initializing Zooming and Tooltip
        zoomSettings: {           
            mode: 'X',
            enableSelectionZooming: true,
            enablePan : true
        },
        tooltip: {
            enable: true, shared: true
        },
        chartArea: { border: { width: 0 } },
        //Initializing Chart Title
        title: 'AAPL 2012-2017',
        //Initializing Crosshair
        crosshair: { enable: true, lineType: 'Vertical' },
        width: ej.base.Browser.isDevice ? '100%' : '80%',
        load: function (args) {
            var momendumTheme = location.hash.split('/')[1];
            args.chart.theme = momendumTheme && (momendumTheme.charAt(0).toUpperCase() + momendumTheme.slice(1));
        },
        legendSettings: { visible: false }
    });
    chart.appendTo('#momentum-container');
};