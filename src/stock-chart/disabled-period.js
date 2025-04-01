renderStockChart = function (aapl) {
        var stockChart = new ej.charts.StockChart({
            chartArea: { border: { width: 0 } },
            primaryXAxis: { valueType: 'DateTime', majorGridLines: { width: 0 }, crosshairTooltip: { enable: true } },
            primaryYAxis: {
                    lineStyle: { color: 'transparent' },
                    majorTickLines: { color: 'transparent', height: 0 }
            },
            series: [
                {
                    dataSource: aapl, xName: 'x', yName: 'open', type: 'Area', fill: 'url(#gradient-chart)'
                }
            ],
            enablePeriodSelector: false,
            tooltip: { enable: true },
            tooltipRender: function (args) {
                if (args.text.split('<br/>')[4]) {
                    var target = parseFloat(args.text.split('<br/>')[4].split('<b>')[1].split('</b>')[0]);
                    var value = (target / 100000000).toFixed(1) + 'B';
                    args.text = args.text.replace(args.text.split('<br/>')[4].split('<b>')[1].split('</b>')[0], value);
                }
            },
            crosshair: {
                enable: true
            },
            load: function (args) {
                var selectedTheme = location.hash.split('/')[1];
                selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
                args.stockChart.theme = (selectedTheme.charAt(0).toUpperCase() +
                    selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
                args.stockChart.series[0].fill = 'url(#' + selectedTheme + '-gradient-chart)';
            },
        });
        stockChart.appendTo('#disabledPeriodChart');
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
            renderStockChart(aapl);
        };
    };