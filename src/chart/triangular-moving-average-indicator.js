/**
 * Sample for TMA Indicator
 */
 var _this = this;
this.renderChart = function (chartData) {
        var chart = new ej.charts.Chart({
            primaryXAxis: {
                valueType: 'DateTime',
                majorGridLines: { width: 0 },
                zoomFactor: 0.2, zoomPosition: 0.6,
                crosshairTooltip: { enable: true },
            },
            chartArea: {
                border: {
                    width: 0
                }
            },
            primaryYAxis: {
                title: 'Price',
                labelFormat: '${value}M',
                minimum: 50, maximum: 170, interval: 30,
                majorGridLines: { width: 1 }, lineStyle: { width: 0 }
            },
            series: [{
                    dataSource: chartData, width: 2,
                    xName: 'x', yName: 'y', low: 'low', high: 'high', close: 'close', volume: 'volume', open: 'open',
                    name: 'Apple Inc', bearFillColor: '#2ecd71', bullFillColor: '#e74c3d',
                    type: 'Candle', animation: { enable: false }
                }],
            indicators: [{
                    type: 'Tma', field: 'Close', seriesName: 'Apple Inc', fill: '#6063ff',
                    period: 14, animation: { enable: true }
                }],
            tooltip: {
                enable: true, shared: true
            },
            crosshair: { enable: true, lineType: 'Vertical' },
            zoomSettings: {
                enableSelectionZooming: true,
                enablePinchZooming: true,
                mode: 'XY',
                enablePan: true
            },
            title: 'AAPL - 2012-2017',
            width: ej.base.Browser.isDevice ? '100%' : '80%',
               // custom code start
            load: function (args) {
                var selectedTheme = location.hash.split('/')[1];
                selectedTheme = selectedTheme ? selectedTheme : 'Material';
                args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
            },
               // custom code end
            legendSettings: { visible: false }
        });
        chart.appendTo('#tma-container');
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
            _this.renderChart(chartData);
        };
    };