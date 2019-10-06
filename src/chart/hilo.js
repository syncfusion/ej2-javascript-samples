/**
 * Sample for Hilo Series
 */
this.renderChart = function (chartData) {
        var chart = new ej.charts.Chart({
            primaryXAxis: {
                valueType: 'DateTime',
                crosshairTooltip: { enable: true },
                minimum: new Date('2016-12-31'),
                maximum: new Date('2017-09-30'),
                majorGridLines: { width: 0 }
            },
            chartArea: {
                border: {
                    width: 0
                }
            },
            primaryYAxis: {
                title: 'Price',
                minimum: 100,
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
                    dataSource: chartData, animation: { enable: true },
                    xName: 'x', low: 'low', high: 'high', name: 'Apple Inc'
                }
            ],
            title: 'AAPL Historical',
            tooltip: {
                enable: true, shared: true
            },
            crosshair: {
                enable: true, lineType: 'Vertical', line: {
                    width: 0,
                }
            },
            width: ej.base.Browser.isDevice ? '100%' : '80%',
             // custom code start
            load: function (args) {
                var selectedTheme = location.hash.split('/')[1];
                selectedTheme = selectedTheme ? selectedTheme : 'Material';
                args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                    selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
            }
             // custom code end
        });
        chart.appendTo('#hilo-container');
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
            renderChart(chartData);
        };
    };