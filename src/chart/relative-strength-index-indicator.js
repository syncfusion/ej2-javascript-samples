/**
 * Sample for RSI Indicator
 */
var renderChartRSI = function () {
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
                plotOffset: 25,
                minimum: 50, maximum: 170, majorTickLines: { width: 0 },
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
                    majorTickLines: { width: 0 }, title: 'RSI', stripLines: [
                        {
                            start: 0, end: 120, text: '', color: '#6063ff', visible: true,
                            opacity: 0.1, zIndex: 'Behind'
                        }
                    ]
                }],
            series: [{
                    dataSource: chartValue, width: 2,
                    xName: 'period', yName: 'y', low: 'low', high: 'high', close: 'close', volume: 'volume', open: 'open',
                    name: 'Apple Inc', bearFillColor: '#2ecd71', bullFillColor: '#e74c3d',
                    type: 'Candle'
                }],
            indicators: [{
                    type: 'Rsi', field: 'Close', seriesName: 'Apple Inc', yAxisName: 'secondary', fill: '#6063ff',
                    showZones: true, overBought: 70, overSold: 30,
                    period: 3, upperLine: { color: '#ffb735' }, lowerLine: { color: '#f2ec2f' }
                }],
            zoomSettings: {
                enablePan: true,
                enableSelectionZooming: true,
                enablePinchZooming: true,
                mode: 'X',
            },
            tooltip: {
                enable: true, shared: true
            },
            crosshair: { enable: true, lineType: 'Vertical' },
            chartArea: { border: { width: 0 } },
            title: 'AAPL Stock Price 2012-2017',
            width: ej.base.Browser.isDevice ? '100%' : '75%',
               // custom code start
            load: function (args) {
                var selectedTheme = location.hash.split('/')[1];
                selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
                args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + 
                    selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
            },
               // custom code end
            legendSettings: { visible: false }
        });
        chart.appendTo('#rsi-container');
    };
    this.default = function () {
            renderChartRSI();
        };