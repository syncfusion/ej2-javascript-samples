renderMultipleStockChart = function (goog) {
        var stockChart = new ej.charts.StockChart({
            primaryXAxis: {
                valueType: 'DateTime', majorGridLines: { width: 0 },
                crosshairTooltip: { enable: true }
            },
            primaryYAxis: {
                interval: 40, lineStyle: { color: 'transparent' },
                majorTickLines: { color: 'transparent', width: 0 }
            },
            indicatorType : [],
            trendlineType : [],    
            chartArea: { border: { width: 0 } },
            series: [
                {
                    dataSource: goog, xName: 'x', yName: 'close', type: 'Line',
                },
                {
                    dataSource: window.googl, xName: 'x', yName: 'close', type: 'Line',
                }
            ],
            title: 'Multiple Series',
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
        var goog;
        var googl;
        var ajax = new ej.base.Ajax('./src/stock-chart/data-source/goog.json', 'GET', true);
        ajax.send().then();
        ajax.onSuccess = function (data) {
            goog = JSON.parse(data);
            goog.map(function (data) {
                data.x = new Date(data.x);
            });
            renderMultipleStockChart(goog);
        };
        
        
    };