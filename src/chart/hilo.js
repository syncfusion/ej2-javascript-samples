/**
 * Sample for Hilo Series
 */
var renderChart = function () {
        var chart = new ej.charts.Chart({
            primaryXAxis: {
                valueType: 'DateTime',
                crosshairTooltip: { enable: false },
                majorGridLines: { width: 0 }
            },
            chartArea: {
                border: {
                    width: 0
                }
            },
            primaryYAxis: {
                title: 'Price',
                minimum: 10,
                maximum: 180,
                interval: 20,
                labelFormat: '${value}',
                lineStyle: { width: 0 },
                majorTickLines: { width: 0 }
            },
            legendSettings: { visible: false },
            series: [
                {
                    type: 'Hilo',
                    dataSource: chartValue, animation: { enable: true },
                    xName: 'period', low: 'low', high: 'high', name: 'Apple Inc'
                }
            ],
            title: 'AAPL Historical',
            tooltip: {
                enable: true, shared: true, header:'', format:'<b>Apple Inc.(AAPL)</b> <br> High : <b>${point.high}</b> <br> Low : <b>${point.low}</b>', enableMarker: false
            },
            crosshair: {
                enable: true, lineType: 'Vertical', line: {
                    width: 0,
                }
            },
            width: ej.base.Browser.isDevice ? '100%' : '75%',
             // custom code start
            load: function (args) {
                var selectedTheme = location.hash.split('/')[1];
                selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
                args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                    selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
            }
             // custom code end
        });
        chart.appendTo('#hilo-container');
    };
    this.default = function () {
            renderChart();
        };
