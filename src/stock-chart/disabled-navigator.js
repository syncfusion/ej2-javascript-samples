renderDisabledStockChart = function (chartData) {
        var stockChart = new ej.charts.StockChart({
            chartArea: { border: { width: 0 } },
            primaryXAxis: { valueType: 'DateTime', majorGridLines: { width: 0 },crosshairTooltip: { enable: true } },
            primaryYAxis: { lineStyle: { color: 'transparent' },
                            majorTickLines: { color: 'transparent', width: 0 },
                            crosshairTooltip: { enable: true } },
            series: [
                {
                    dataSource: chartData, xName: 'date', type: 'Line'
                }
            ],
            tooltip: { enable: true },
            crosshair: {
                enable: true
            }, 
            enableSelector: false,
            load: function (args) {
                var selectedTheme = location.hash.split('/')[1];
                selectedTheme = selectedTheme ? selectedTheme : 'Material';
                args.stockChart.theme = (selectedTheme.charAt(0).toUpperCase() +
                    selectedTheme.slice(1)).replace(/-dark/i, 'Dark');
            }
        });
        stockChart.appendTo('#disabledNavigatorChart');
    };
    this.default = function () {
        var chartData;
        var ajax = new ej.base.Ajax('./src/stock-chart/data-source/indicator-data.json', 'GET', true);
        ajax.send().then();
        ajax.onSuccess = function (data) {
            chartData = JSON.parse(data);
            chartData.map(function (data) {
                data.date = new Date(data.date);
            });
            renderDisabledStockChart(chartData);
        };
    };