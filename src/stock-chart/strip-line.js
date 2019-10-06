
renderLineStockChart = function (amzn) {
        var stockChart = new ej.charts.StockChart({
            chartArea: { border: { width: 0 } },
            primaryXAxis: { valueType: 'DateTime', majorGridLines: { width: 0 } },
            primaryYAxis: {
                lineStyle: { color: 'transparent' },
                majorTickLines: { color: 'transparent', width: 0 },
                stripLines: [{ start: 340, end: 380, color: '#3CB371', opacity: 0.1 }]
            },
            series: [
                {
                    dataSource: amzn, xName: 'x', yName: 'close', type: 'Line'
                }
            ],
            title: 'AAPL Historical',
            seriesType : [],
            indicatorType : [],
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
        var amzn;
        var ajax = new ej.base.Ajax('./src/stock-chart/data-source/aman.json', 'GET', true);
        ajax.send().then();
        ajax.onSuccess = function (data) {
            amzn = JSON.parse(data);
            amzn.map(function (data) {
                data.x = new Date(data.x);
            });
            renderLineStockChart(amzn);
        };
    };