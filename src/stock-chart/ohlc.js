
renderOhlcStockChart = function () {
        var stockChart = new ej.charts.StockChart({
            primaryXAxis: {
                valueType: 'DateTime',
                majorGridLines: { color: 'transparent' },
                crosshairTooltip: { enable: true }
            },
            primaryYAxis: {
                labelFormat: 'n0',
                rangePadding: 'None',
                lineStyle: { color: 'transparent' },
                majorTickLines: { color: 'transparent' }
            },    
            chartArea: { border: { width: 0 } },
            series: [
                {
                    dataSource: googl, type: 'HiloOpenClose',
                    animation: { enable: true },
                    xName: 'x', low: 'low', high: 'high', open: 'open', close: 'close',
                    bearFillColor: '#2ecd71', bullFillColor: '#e74c3d',
                }
            ],
            tooltip: { enable: true, shared: true },
            crosshair: {
                enable: true
            },
            tooltipRender: function (args) {
                if  (args.text.split('<br/>')[4]) {
                    var target = parseFloat(args.text.split('<br/>')[4].split('<b>')[1].split('</b>')[0]);
                    var value = (target / 100000000).toFixed(1) + 'B';
                    args.text = args.text.replace(args.text.split('<br/>')[4].split('<b>')[1].split('</b>')[0], value);
                }
            },
            title: 'AAPL Stock Price' ,
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
            renderOhlcStockChart(googl);
        };
    };