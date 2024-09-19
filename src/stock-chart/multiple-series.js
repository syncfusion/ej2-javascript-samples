renderMultipleStockChart = function (goog) {
  var stockChart = new ej.charts.StockChart({
    primaryXAxis: {
      valueType: "DateTime",
      majorGridLines: { width: 0 },
      crosshairTooltip: { enable: true },
    },
    primaryYAxis: {
      interval: 40,
      lineStyle: { color: "transparent" },
      majorTickLines: { color: "transparent", height: 0 },
      crosshairTooltip: { enable: true },
    },
    chartArea: { border: { width: 0 } },
    indicatorType: [],
    trendlineType: [],
    seriesType: ['Line', 'Hilo', 'HiloOpenClose', 'Spline', 'Candle'],
    series: [
      {
        dataSource: goog,
        xName: "x",
        yName: "close",
        type: "Spline",
        name: "GOOG",
      },
      {
        dataSource: googl,
        xName: "x",
        yName: "close",
        type: "Spline",
        name: "GOOGL",
      },
    ],
    crosshair: {
      enable: true, lineType:'Both'
    },
    legendSettings: {
      visible: true,
    },
    title: "Multiple Series",
    load: function (args) {
      var selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Fluent2";
      args.stockChart.theme = (
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
      )
        .replace(/-dark/i, "Dark")
        .replace(/contrast/i, "Contrast")
        .replace(/-highContrast/i, 'HighContrast');
    }
    // custom code end
  });
  stockChart.appendTo("#container");
};
this.default = function () {
  var goog;
  var googl;
  var fetchApi = new ej.base.Fetch(
    "./src/stock-chart/data-source/goog.json",
    "GET",
    true
  );
  fetchApi.send().then();
  fetchApi.onSuccess = function (data) {
    goog = data;
    goog.map(function (data) {
      data.x = new Date(data.x);
    });
    renderMultipleStockChart(goog);
  };
};
