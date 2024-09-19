renderDisabledStockChart = function (chartData) {
        var stockChart = new ej.charts.StockChart({
            chartArea: { border: { width: 0 } },
            primaryXAxis: { valueType: 'DateTime', majorGridLines: { width: 0 },crosshairTooltip: { enable: true } },
            primaryYAxis: { lineStyle: { color: 'transparent' },
                            majorTickLines: { color: 'transparent', height: 0 },
                            crosshairTooltip: { enable: true } },
            series: [
                {
                    dataSource: chartData, xName: 'date', type: 'Line'
                }
            ],
            tooltip: { enable: true },
            crosshair: {
                enable: true, lineType:'Both'
            }, 
            enableSelector: false,
            // custom code start
            load: function (args) {
                var selectedTheme = location.hash.split('/')[1];
                selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
                args.stockChart.theme = (selectedTheme.charAt(0).toUpperCase() +
                    selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
            },
            tooltipRender: function (args) {
                if (args.text.split('<br/>')[4]) {
                    var target = parseFloat(args.text.split('<br/>')[4].split('<b>')[1].split('</b>')[0]);
                    var value = (target / 100000000).toFixed(1) + 'B';
                    args.text = args.text.replace(args.text.split('<br/>')[4].split('<b>')[1].split('</b>')[0], value);
                }
            }
            // custom code end
        });
        stockChart.appendTo('#disabledNavigatorChart');
    };
    this.default = function () {
        var chartData;
        var fetchApi = new ej.base.Fetch('./src/stock-chart/data-source/indicator-data.json', 'GET', true);
        fetchApi.send().then();
        fetchApi.onSuccess = function (data) {
            chartData = data;
            chartData.map(function (data) {
                data.date = new Date(data.date);
            });
            renderDisabledStockChart(chartData);
        };
    };