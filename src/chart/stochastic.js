/**
 * Sample for Stochastic Indicator
 */
var renderChartSto =function () {
        var chart = new ej.charts.Chart({
            primaryXAxis: {
                valueType: 'DateTime',
                majorGridLines: { width: 0 },
                zoomFactor: 0.2, zoomPosition: 0.6,
                crosshairTooltip: { enable: true },
            },
            primaryYAxis: {
                title: 'Price (in Million)',
                labelFormat: '${value}M',
                minimum: 50, maximum: 170,
                plotOffset: 25, 
                interval: 30, rowIndex: 1, opposedPosition: true, lineStyle: { width: 0 }
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
                    majorGridLines: { width: 0 }, lineStyle: { width: 0 }, minimum: 0, maximum: 120, interval: 60,
                    majorTickLines: { width: 0 }, title: 'Stochastic', stripLines: [
                        {
                            start: 0, end: 120, text: '', color: '#000000', visible: true,
                            opacity: 0.03, zIndex: 'Behind'
                        }
                    ]
                }],
            series: [{
                    dataSource: chartValue, width: 2,
                    xName: 'period', yName: 'y', low: 'low', high: 'high', close: 'close', volume: 'volume', open: 'open',
                    name: 'Apple Inc', bearFillColor: '#2ecd71', bullFillColor: '#e74c3d',
                    type: 'Candle',
                }],
            indicators: [{
                    type: 'Stochastic', field: 'Close', seriesName: 'Apple Inc', yAxisName: 'secondary', fill: '#6063ff',
                    showZones: true, periodLine: { color: '#f2ec2f' }, overBought: 70, overSold: 30,
                    period: 3, animation: { enable: false }, upperLine: { color: '#ffb735' }, lowerLine: { color: '#f2ec2f' }
                }],
            zoomSettings: {
                enableSelectionZooming: true,
                enablePinchZooming: true,
                mode: 'X',
                enablePan: true
            },
            tooltip: {
                enable: true, shared: true
            },
            crosshair: { enable: true, lineType: 'Vertical' },
            chartArea: { border: { width: 0 } },
            title: 'AAPL Stock Price 2012-2017',
            width: ej.base.Browser.isDevice ? '100%' : '80%',
               // custom code start
            load: function (args) {
                var selectedTheme = location.hash.split('/')[1];
                selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
                args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + 
                    selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
            },
               // custom code start
            legendSettings: { visible: false }
        });
        chart.appendTo('#sto-container');
    };
    this.default = function () {
            renderChartSto();
        };
