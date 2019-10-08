
 renderSplineStockChart = function (aapl) {
        var stockChart = new ej.charts.StockChart({
            primaryXAxis: { valueType: 'DateTime', majorGridLines: { width: 0 }, crosshairTooltip: { enable: true } },
            primaryYAxis: {
                lineStyle: { color: 'transparent' },
                majorTickLines: { color: 'transparent', width: 0 }
            },
            chartArea: { border: { width: 0 } },
            series: [
                {
                    dataSource: aapl, xName: 'x', yName: 'high', type: 'Spline'
                }
            ],
            seriesType : [],
            indicatorType : [],
            title: 'AAPL Stock Price',
            titleStyle: { fontWeight: '500', color: '#424242' },
            tooltip: { enable: true },
            crosshair: { enable: true },
            load: function (args) {
                var selectedTheme = location.hash.split('/')[1];
                selectedTheme = selectedTheme ? selectedTheme : 'Material';
                args.stockChart.theme = (selectedTheme.charAt(0).toUpperCase() +
                    selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
            },
            tooltipRender: function (args) {
                if  (args.text.split('<br/>')[4]) {
                    var target = parseFloat(args.text.split('<br/>')[4].split('<b>')[1].split('</b>')[0]);
                    var value = (target / 100000000).toFixed(1) + 'B';
                    args.text = args.text.replace(args.text.split('<br/>')[4].split('<b>')[1].split('</b>')[0], value);
                }
            },
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
            renderSplineStockChart(aapl);
        };
    };