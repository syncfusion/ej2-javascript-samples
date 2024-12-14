
renderSplineAreaStockChart = function (googl) {
    var selectedTheme = location.hash.split('/')[1];
selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
var theme = (selectedTheme.charAt(0).toUpperCase() +
    selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
var themes = ['bootstrap5', 'bootstrap5dark', 'tailwind', 'tailwinddark', 'material', 'materialdark', 'bootstrap4', 'bootstrap', 'bootstrapdark', 'fabric', 'fabricdark', 'highcontrast', 'fluent', 'fluentdark', 'material3', 'material3dark', 'fluent2', 'fluent2highcontrast', 'fluent2dark', 'tailwind3', 'tailwind3dark'];
var borderColor = ['#FD7E14', '#FD7E14', '#9333EA', '#8B5CF6', '#00bdae', '#9ECB08', '#a16ee5', '#a16ee5', '#a16ee5', '#4472c4', '#4472c4', '#79ECE4', '#1AC9E6', '#1AC9E6', '#6355C7', '#4EAAFF', '#6200EE', '#9BB449', '#9BB449', '#2F4074', '#8029F1'];
var fill = 'url(#' + selectedTheme + '-gradient-chart)';
        var stockChart = new ej.charts.StockChart({
            primaryXAxis: { valueType: 'DateTime', majorGridLines: { width: 0 }, crosshairTooltip: { enable: true } },
            primaryYAxis: {
                lineStyle: { color: 'transparent' },
                majorTickLines: { color: 'transparent', height: 0 },
                crosshairTooltip: { enable: true }
            },
            chartArea: { border: { width: 0 } },
            series: [
                {
                    dataSource: googl, xName: 'x', yName: 'high', type: 'SplineArea', opacity: 0.5,
                     fill: fill, border: { width: 2, color: borderColor[themes.indexOf(theme)] },
                }
            ],
            seriesType: [],
            indicatorType : [],
            title: 'Google Stock Price',
            crosshair: {
                enable: true,
                lineType: 'Both',
                snapToData: true, dashArray: '5, 5'
            },
            tooltip: {
                enable: true,
                format: '<b>${point.x}</b> <br>Stock Price : <b>${point.y}</b>',
                header: '',
                enableMarker: false
            },
            // custom code start
            load: function (args) {
                var selectedTheme = location.hash.split('/')[1];
                selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
                args.stockChart.theme = (selectedTheme.charAt(0).toUpperCase() +
                    selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
                args.stockChart.series[0].border = { width: 2, color: borderColor[themes.indexOf(args.stockChart.theme.toLowerCase())] };

            }
            // custom code end
        });
        stockChart.appendTo('#container');
    };
    this.default = function () {
        var googl;
        var fetchApi = new ej.base.Fetch('./src/stock-chart/data-source/googl.json', 'GET', true);
        fetchApi.send().then();
        fetchApi.onSuccess = function (data) {
            googl = data;
            googl.map(function (data) {
                data.x = new Date(data.x);
            });
            renderSplineAreaStockChart(googl);
        };
    };