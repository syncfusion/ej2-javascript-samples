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
      majorTickLines: { color: "transparent", width: 0 },
      crosshairTooltip: { enable: true },
    },
    chartArea: { border: { width: 0 } },
    indicatorType: [],
    trendlineType: [],
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
      enable: true,
    },
    legendSettings: {
      visible: true,
    },
    title: "Multiple Series",
    load: function (args) {
      var selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.stockChart.theme = (
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
      )
        .replace(/-dark/i, "Dark")
        .replace(/contrast/i, "Contrast");
    }
    // custom code end
  });
  stockChart.appendTo("#container");
};
this.default = function () {
  var goog;
  var googl;
  var ajax = new ej.base.Ajax(
    "./src/stock-chart/data-source/goog.json",
    "GET",
    true
  );
  ajax.send().then();
  ajax.onSuccess = function (data) {
    goog = JSON.parse(data);
    goog.map(function (data) {
      data.x = new Date(data.x);
    });
    renderMultipleStockChart(goog);
  };
};
