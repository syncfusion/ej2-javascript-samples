renderInversedStockChart = function (aapl) {
        var stockChart = new ej.charts.StockChart({
            primaryXAxis: { valueType: 'DateTime', isInversed: true,
             majorGridLines: { width: 0 },crosshairTooltip: { enable: true } },
            primaryYAxis: {
                lineStyle: { color: 'transparent' },
                majorTickLines: { color: 'transparent', width: 0 }, isInversed: true,crosshairTooltip: { enable: true }
            },
            chartArea: { border: { width: 0 } },
            series: [
                {
                    dataSource: aapl, xName: 'x', yName: 'high', type: 'Area', fill: '#BDEDE9'
                }
            ],
            seriesType : [],
            indicatorType : [],
            crosshair: { enable: true },
            title: 'AAPL Stock Price',
            titleStyle: { fontWeight: '500', color: '#424242' },
            // custom code start
            load: function (args) {
                var selectedTheme = location.hash.split('/')[1];
                selectedTheme = selectedTheme ? selectedTheme : 'Material';
                args.stockChart.theme = (selectedTheme.charAt(0).toUpperCase() +
                    selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
            }
            // custom code end
        });
        stockChart.appendTo('#container');
    };
    this.default = function () {
        var aapl;
        var ajax = new ej.base.Ajax('./src/stock-chart/data-source/aapl.json', 'GET', true);
        ajax.send().then();
        ajax.onSuccess = function (data) {
            aapl = JSON.parse(data);
            aapl.map(function (data) {
                data.x = new Date(data.x);
            });
            renderInversedStockChart(aapl);
        };
    };