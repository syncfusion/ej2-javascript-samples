
 renderPlotLineStockChart = function (amzn) {
        var stockChart = new ej.charts.StockChart({
            primaryYAxis: {
                stripLines: [{ start: 320, sizeType: 'Pixel', size: 1, color: 'green', dashArray: '10,5' },
                    { start: 380, sizeType: 'Pixel', size: 1, color: 'red', dashArray: '10,5' }],
                lineStyle: { color: 'transparent' },
                majorTickLines: { color: 'transparent', height: 0 }
            },
            chartArea: { border: { width: 0 } },
            primaryXAxis: { majorGridLines: { color: 'transparent' } },
            series: [
                {
                    dataSource:amzn, xName: 'x', yName: 'close', type: 'Line', 
                }
            ],
            seriesType : [],
            indicatorType : [],
            trendlineType: ['Linear', 'Exponential', 'Polynomial', 'Logarithmic', 'MovingAverage'],
            title: 'Plot line on Y axis',
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
    this.default = function () {
        var amzn;
        var fetchApi = new ej.base.Fetch('./src/stock-chart/data-source/aman.json', 'GET', true);
        fetchApi.send().then();
        fetchApi.onSuccess = function (data) {
            amzn = data;
            amzn.map(function (data) {
                data.x = new Date(data.x);
            });
            renderPlotLineStockChart(amzn);
        };
    };