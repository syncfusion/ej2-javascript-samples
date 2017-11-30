/**
 * Sample for Stochastic Indicator
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'DateTime',
            intervalType: 'Months', majorGridLines: { width: 0 },
            zoomFactor: 0.4, zoomPosition: 0.6,
            skeleton: 'yMd',
            crosshairTooltip: { enable: true },
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            title: 'Price',
            labelFormat: '${value}',
            minimum: 80, maximum: 170,
            plotOffset: 25,
            interval: 30, rowIndex: 1, opposedPosition: true, lineStyle: { width: 0 }
        },
        //Initializing Axes
        axes: [{
                name: 'secondary',
                opposedPosition: true, rowIndex: 0,
                majorGridLines: { width: 0 }, 
                lineStyle: { width: 0 }, 
                minimum: 0, maximum: 120, interval: 60,
                majorTickLines: { width: 0 }, title: 'Stochastic', stripLines: [
                    {
                        start: 0, end: 120, text: '', color: 'black', visible: true,
                        opacity: 0.03, zIndex: 'Behind'
                    }
                ]
            }],
            rows: [
                {
                    height: '40%'
                }, {
                    height: '60%'
                }
            ],
        //Initializing Chart Series
        series: [{
                dataSource: window.chartData, width: 2,
                xName: 'x', yName: 'y', low: 'low', high: 'high', close: 'close', volume: 'volume', open: 'open',
                name: 'Apple Inc', bearFillColor: '#2ecd71', bullFillColor: '#e74c3d',
                type: 'Candle', animation: { enable: true }
            }],
        //Initializing Technical Indicator
        indicators: [{
                type: 'Stochastic', field: 'Close', seriesName: 'Apple Inc', 
                yAxisName: 'secondary', fill: '#6063ff',
                kPeriod: 2, dPeriod: 3, showZones: true, 
                periodLine: { color: '#f2ec2f' },
                period: 3, animation: { enable: false }, 
                upperLine: { color: '#e74c3d' }, lowerLine: { color: '#2ecd71' }
            }],
        //Initializing Zooming
        zoomSettings: {
            enablePinchZooming: true,
            enableMouseWheelZooming: true,
            enableSelectionZooming: true,
            mode: 'X'
        },
        //Initializing Tooltip
        tooltip: {
            enable: true, shared: true
        },
        chartArea: { border: { width: 0 } },
        //Initializing Crosshair
        crosshair: { enable: true, lineType: 'Vertical' },
        //Initializing Title
        title: 'AAPL 2012-2017',
        width: ej.base.Browser.isDevice ? '100%' : '80%',
        load: function (args) {
            var stoTheme = location.hash.split('/')[1];
            stoTheme = stoTheme ? stoTheme : 'Material';
            args.chart.theme = (stoTheme.charAt(0).toUpperCase() + stoTheme.slice(1));
        },
        legendSettings: { visible: false }
    });
    chart.appendTo('#sto-container');
};