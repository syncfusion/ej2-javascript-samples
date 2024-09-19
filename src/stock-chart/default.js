this.default = function () {
        var stockChart = new ej.charts.StockChart({
            chartArea: { border: { width: 0 } },
            primaryYAxis: {
                lineStyle: { color: 'transparent' },
                majorTickLines: { color: 'transparent', height: 0 },
                crosshairTooltip: { enable: true }
            },
            primaryXAxis: {
                valueType:'DateTimeCategory',
                majorGridLines: { color: 'transparent' },
                crosshairTooltip: { enable: true },
                edgeLabelPlacement: 'Shift'
             },
            series: [
                {
                    dataSource: window.defaultData,
                    type: 'Candle',
                    xName:'x',
                    yName:'high',
                    high:'high',
                    low:'low'
                },
            ],
            tooltipRender: function (args) {
                if (args.text.split('<br/>')[4]) {
                    var target = parseFloat(args.text.split('<br/>')[4].split('<b>')[1].split('</b>')[0]);
                    var value = (target / 100000000).toFixed(1) + 'B';
                    args.text = args.text.replace(args.text.split('<br/>')[4].split('<b>')[1].split('</b>')[0], value);
                }
            },
            title: 'AAPL Stock Price',
            tooltip: { enable: true },
            crosshair: {
                enable: true,
                lineType:'Both'
            },
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

   