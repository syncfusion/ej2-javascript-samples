renderdatetimeCategory = function (datetimeCategoryData) {
    var stockChart = new ej.charts.StockChart({
        chartArea: { border: { width: 0 } },
        primaryYAxis: {
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 }
        },
        primaryXAxis: {
            majorGridLines: { width: 0 },
            crosshairTooltip: { enable: true },
            valueType: 'DateTimeCategory'
        },
        series: [
            {
                dataSource: datetimeCategoryData,
                type: 'Spline'
            },
        ],
        title: 'AAPL Stock Price',
        tooltip: { enable: true, header: 'AAPL Stock Price', format: '${point.x}: <b>${point.y}</b>' },
        crosshair: {
            enable: true
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
this.default = function () {
    var datetimeCategoryData;
    var fetchApi = new ej.base.Fetch('./src/stock-chart/data-source/datetime-category.json', 'GET', true);
    fetchApi.send().then();
    fetchApi.onSuccess = function (data) {
        datetimeCategoryData = data;
        datetimeCategoryData.map(function (data) {
            data.date = new Date(data.date);
        });
        renderdatetimeCategory(datetimeCategoryData);
    };
};