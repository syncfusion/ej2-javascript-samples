
renderSplineAreaStockChart = function (googl) {
        var stockChart = new ej.charts.StockChart({
            primaryXAxis: { valueType: 'DateTime', majorGridLines: { width: 0 }, crosshairTooltip: { enable: true } },
            primaryYAxis: {
                lineStyle: { color: 'transparent' },
                majorTickLines: { color: 'transparent', width: 0 },
                crosshairTooltip: { enable: true }
            },
            chartArea: { border: { width: 0 } },
            series: [
                {
                    dataSource: googl, xName: 'x', yName: 'high', type: 'SplineArea', fill: '#BDEDE9'
                }
            ],
            seriesType : [],
            indicatorType : [],
            title: 'Google Stock Price',
            crosshair: {
                enable: true
            },
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
        var googl;
        var ajax = new ej.base.Ajax('./src/stock-chart/data-source/googl.json', 'GET', true);
        ajax.send().then();
        ajax.onSuccess = function (data) {
            googl = JSON.parse(data);
            googl.map(function (data) {
                data.x = new Date(data.x);
            });
            renderSplineAreaStockChart(googl);
        };
    };