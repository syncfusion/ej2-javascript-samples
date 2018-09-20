/**
 * Sample for ADI Indicator
 */
 var _this = this;
 this.renderChart = function (chartData) {
        var chart = new ej.charts.Chart({
            primaryXAxis: {
                valueType: 'DateTime',
                majorGridLines: { width: 0 },
                zoomFactor: 0.2, zoomPosition: 0.6,
                crosshairTooltip: { enable: true }
            },
            primaryYAxis: {
                title: 'Price',
                labelFormat: '${value}',
                minimum: 50, maximum: 170,
                plotOffset: 25,
                interval: 30, rowIndex: 1, opposedPosition: true, lineStyle: { width: 0 }
            },
            axes: [{
                    name: 'secondary',
                    opposedPosition: true, rowIndex: 0,
                    majorGridLines: { width: 0 }, lineStyle: { width: 0 }, minimum: -7000000000, maximum: 5000000000,
                    interval: 6000000000, majorTickLines: { width: 0 }, title: 'Accumulation Distribution',
                    stripLines: [
                        {
                            start: -7000000000, end: 6000000000, text: '', color: '#6063ff', visible: true,
                            opacity: 0.1, zIndex: 'Behind'
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
            series: [{
                    dataSource: chartData, width: 2,
                    xName: 'x', yName: 'y', low: 'low', high: 'high', close: 'close', volume: 'volume', open: 'open',
                    name: 'Apple Inc', bearFillColor: '#2ecd71', bullFillColor: '#e74c3d',
                    type: 'Candle', animation: { enable: true }
                }],
            indicators: [{
                    type: 'AccumulationDistribution', field: 'Close', seriesName: 'Apple Inc', yAxisName: 'secondary', fill: '#6063ff',
                    period: 3, animation: { enable: true }
                }],
            zoomSettings: {
                enableSelectionZooming: true,
                mode: 'X',
                enablePan: true
            },
            tooltip: {
                enable: true, shared: true
            },
            crosshair: { enable: true, lineType: 'Vertical' },
            axisLabelRender: function (args) {
                if (args.axis.name === 'secondary') {
                    var value = Number(args.text) / 1000000000;
                    args.text = String(value) + 'bn';
                }
            },
            chartArea: { border: { width: 0 } },
            title: 'AAPL 2012-2017',
            width: ej.base.Browser.isDevice ? '100%' : '80%',
            load: function (args) {
                var selectedTheme = location.hash.split('/')[1];
                selectedTheme = selectedTheme ? selectedTheme : 'Material';
                args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
            },
            legendSettings: {
                visible: false
            }
        });
        chart.appendTo('#adi-container');
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