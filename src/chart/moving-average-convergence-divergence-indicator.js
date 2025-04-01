/**
 * Sample for MACD Indicator
 */
var renderChartMACD = function () {
        var chart = new ej.charts.Chart({
            primaryXAxis: {
                valueType: 'DateTime', intervalType: 'Months',
                majorGridLines: { width: 0 },
                zoomFactor: 0.2, zoomPosition: 0.6,
                crosshairTooltip: { enable: true }
            },
            primaryYAxis: {
                title: 'Price',
                labelFormat: '${value}',
                plotOffset: 25, minimum: 50,
                maximum: 170, majorTickLines: { width: 0 },
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
                    majorGridLines: { width: 0 }, lineStyle: { width: 0 }, minimum: -3.5, maximum: 3.5, interval: 3.5,
                    majorTickLines: { width: 0 }, title: 'MACD', stripLines: [
                        {
                            start: -3.5, end: 3.5, text: '', color: '#000000', visible: true,
                            opacity: 0.03, zIndex: 'Behind'
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
                    type: 'Macd',
                    period: 3,
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
        chart.appendTo('#macd-container');
    };
    this.default = function () {
            renderChartMACD();
        };