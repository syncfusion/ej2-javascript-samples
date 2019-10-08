/**
 * Sample for Hilo Open Close Series
 */
var _this = this;
this.renderChartOhlc = function (chartData) {
        var chart = new ej.charts.Chart({
            primaryXAxis: {
                valueType: 'DateTime',
                crosshairTooltip: { enable: true },
                majorGridLines: { width: 0 }
            },
            primaryYAxis: {
                title: 'Price',
                labelFormat: 'n0',
                lineStyle: { width: 0 }, rangePadding: 'None',
                majorTickLines: { width: 0 }
            },
            chartArea: { border: { width: 0 } },
            series: [
                {
                    type: 'HiloOpenClose',
                    dataSource: chartData, animation: { enable: true },
                    bearFillColor: '#2ecd71', bullFillColor: '#e74c3d',
                    xName: 'x', low: 'low', high: 'high', open: 'open', close: 'close', name: 'Apple Inc'
                }
            ],
            tooltip: { enable: true, shared: true },
            crosshair: {
                enable: true, lineType: 'Vertical', line: { width: 0 }
            },
            legendSettings: { visible: false }, width: ej.base.Browser.isDevice ? '100%' : '80%',
            axisLabelRender: function (args) {
                if (args.axis.title === 'Price') {
                    args.text = '$' + args.text;
                }
            },
             // custom code start
            load: function (args) {
                var selectedTheme = location.hash.split('/')[1];
                selectedTheme = selectedTheme ? selectedTheme : 'Material';
                args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                    selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
            }
             // custom code end
        });
        chart.appendTo('#container2');
    };
    this.default = function () {
        var chartData;
        var ajax = new ej.base.Ajax('./src/chart/data-source/financial-data.json', 'GET', true);
        ajax.send().then();
        ajax.onSuccess = function (data) {
            chartData = JSON.parse(data);
            chartData.map(function (data) {
                data.x = new Date(data.x);
            });
            _this.renderChartOhlc(chartData);
        };
    };