renderAreaStockChart = function (aapl) {
        var stockChart = new ej.charts.StockChart({
            chartArea: { border: { width: 0 } },
            primaryXAxis: { valueType: 'DateTime', majorGridLines: { color: 'transparent' },
            crosshairTooltip: { enable: true } },
            primaryYAxis: {
                lineStyle: { color: 'transparent' },
                majorTickLines: { color: 'transparent', height: 0},
                crosshairTooltip: { enable: true }
            },
            series: [
                {
                    dataSource: aapl, xName: 'x', yName: 'high', type: 'Area'
                }
            ],
            seriesType: [],
            indicatorType : [],
            title: 'AAPL Stock Price',
            crosshair: { enable: true , lineType:'Both'},
            // custom code start
            load: function (args) {
                var selectedTheme = location.hash.split('/')[1];
                selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
                args.stockChart.theme = (selectedTheme.charAt(0).toUpperCase() +
                    selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
            }
            // custom code end
        });
        stockChart.appendTo('#container');
    };
    this.default = function () {
        var aapl;
        var fetchApi = new ej.base.Fetch('./src/stock-chart/data-source/aapl.json', 'GET', true);
        fetchApi.send().then();
        fetchApi.onSuccess = function (data) {
            aapl = data;
            aapl.map(function (data) {
                data.x = new Date(data.x);
            });
            renderAreaStockChart(aapl);
        };
    };

