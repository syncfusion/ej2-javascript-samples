/**
 * Sample for Hilo Open Close Series
 */
var _this = this;
this.renderChartOhlc = function () {
        var chart = new ej.charts.Chart({
            primaryXAxis: {
                valueType: 'DateTime',
                crosshairTooltip: { enable: true },
                majorGridLines: { width: 0 }
            },
            primaryYAxis: {
                title: 'Price',
                labelFormat: 'n0', interval: 20,
                lineStyle: { width: 0 },
                minimum: 40,
                maximum: 140,
                majorTickLines: { width: 0 }
            },
            chartArea: { border: { width: 0 } },
            series: [
                {
                    type: 'HiloOpenClose',
                    dataSource: chartValue, animation: { enable: true },
                    bearFillColor: '#2ecd71', bullFillColor: '#e74c3d',
                    xName: 'period', low: 'low', high: 'high', open: 'open', close: 'close', name: 'Apple Inc.(AAPL)'
                }
            ],
            tooltip: { enable: true, shared: true, header: '', format:'<b>Apple Inc.(AAPL)</b> <br> High : <b>${point.high}</b> <br> Low : <b>${point.low}</b> <br> Open : <b>${point.open}</b> <br> Close : <b>${point.close}</b> ' },
            crosshair: {
                enable: true, lineType: 'Vertical'
            },
            legendSettings: { visible: false }, width: ej.base.Browser.isDevice ? '100%' : '75%',
             // custom code start
            load: function (args) {
                var selectedTheme = location.hash.split('/')[1];
                selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
                args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                    selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
            },
            title: 'AAPL Historical',
             // custom code end
        });
        chart.appendTo('#container2');
    };
    this.default = function () {
            _this.renderChartOhlc();
        };
