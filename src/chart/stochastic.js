/**
 * Sample for Stochastic Indicator
 */
renderChart =function (chartData) {
        var chart = new ej.charts.Chart({
            primaryXAxis: {
                valueType: 'DateTime',
                majorGridLines: { width: 0 },
                zoomFactor: 0.2, zoomPosition: 0.6,
                crosshairTooltip: { enable: true },
            },
            primaryYAxis: {
                title: 'Price',
                labelFormat: '${value}',
                minimum: 80, maximum: 170,
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
                            start: 0, end: 120, text: '', color: 'black', visible: true,
                            opacity: 0.03, zIndex: 'Behind'
                        }
                    ]
                }],
            series: [{
                    dataSource: chartData, width: 2,
                    xName: 'x', yName: 'y', low: 'low', high: 'high', close: 'close', volume: 'volume', open: 'open',
                    name: 'Apple Inc', bearFillColor: '#2ecd71', bullFillColor: '#e74c3d',
                    type: 'Candle', animation: { enable: true }
                }],
            indicators: [{
                    type: 'Stochastic', field: 'Close', seriesName: 'Apple Inc', yAxisName: 'secondary', fill: '#6063ff',
                    kPeriod: 2, dPeriod: 3, showZones: true, periodLine: { color: '#f2ec2f' },
                    period: 3, animation: { enable: false }, upperLine: { color: '#e74c3d' }, lowerLine: { color: '#2ecd71' }
                }],
            zoomSettings: {
                enableSelectionZooming: true,
                enablePinchZooming: true,
                mode: 'XY',
                enablePan: true
            },
            tooltip: {
                enable: true, shared: true
            },
            crosshair: { enable: true, lineType: 'Vertical' },
            chartArea: { border: { width: 0 } },
            title: 'AAPL 2012-2017',
            width: ej.base.Browser.isDevice ? '100%' : '80%',
               // custom code start
            load: function (args) {
                var selectedTheme = location.hash.split('/')[1];
                selectedTheme = selectedTheme ? selectedTheme : 'Material';
                args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + 
                    selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
            },
               // custom code start
            legendSettings: { visible: false }
        });
        chart.appendTo('#sto-container');
    };
    this.default = function () {
        var chartData = [];
        var ajax = new ej.base.Ajax('./src/chart/data-source/financial-data.json', 'GET', true);
        ajax.send().then();
        ajax.onSuccess = function (data) {
            chartData = JSON.parse(data);
            chartData.map(function (data) {
                data = new Date(data);
            });
            renderChart(chartData);
        };
    };