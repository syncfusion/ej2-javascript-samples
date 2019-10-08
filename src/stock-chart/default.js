window.default = function () {
        var stockChart = new ej.charts.StockChart({
            chartArea: { border: { width: 0 } },
            primaryYAxis: {
                lineStyle: { color: 'transparent' },
                majorTickLines: { color: 'transparent', width: 0 },
                crosshairTooltip: { enable: true },
            },
            primaryXAxis: { 
                majorGridLines: { color: 'transparent' },
                crosshairTooltip: { enable: true }
             },
            series: [
                {
                    dataSource: window.chartData,
                    type: 'Candle'
                },
            ],
            tooltipRender: function (args) {
                if  (args.text.split('<br/>')[4]) {
                    var target = parseFloat(args.text.split('<br/>')[4].split('<b>')[1].split('</b>')[0]);
                    var value = (target / 100000000).toFixed(1) + 'B';
                    args.text = args.text.replace(args.text.split('<br/>')[4].split('<b>')[1].split('</b>')[0], value);
                }
            },
            title: 'AAPL Stock Price',
            titleStyle: { fontWeight: '500', color: '#424242' },
            tooltip: { enable: true },
            crosshair: {
                enable: true,  
            },
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

   