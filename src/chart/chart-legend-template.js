

    var MedalData = [
        { Country: 'Argentina', Gold: 22, Silver: 27, Bronze: 31 },
        { Country: 'Austria', Gold: 22, Silver: 35, Bronze: 44 },
        { Country: 'Ethiopia', Gold: 24, Silver: 16, Bronze: 22 },
        { Country: 'Iran', Gold: 27, Silver: 29, Bronze: 32 },
        { Country: 'India', Gold: 10, Silver: 10, Bronze: 21 }
    ];
this.default = function () {
    ej.charts.Chart.Inject(ej.charts.ColumnSeries, ej.charts.Category, ej.charts.Tooltip, ej.charts.Legend);

    var chart;
    chart = new ej.charts.Chart({
      primaryXAxis: {
        valueType: "Category",
        labelPlacement: "OnTicks",
        edgeLabelPlacement: "Shift",
        majorGridLines: { width: 0 },
      },
      chartArea: { border: { width: 0 } },
      primaryYAxis: {
        interval: 10,
        minimum: 0,
        maximum: 50,
        title: "Medal Count",
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
      },
      tooltip: {
        enable: true,
        header: "<b>${point.x}</b>",
        format: "${series.name} Medals : <b>${point.y}</b>",
      },
      width: ej.base.Browser.isDevice ? "100%" : "75%",
      series: [
        {
          dataSource: MedalData,
          xName: "Country",
          yName: "Gold",
          name: "Gold",
          type: "Column",
          columnSpacing: 0.1,
        },
        {
          dataSource: MedalData,
          xName: "Country",
          yName: "Silver",
          name: "Silver",
          type: "Column",
          columnSpacing: 0.1,
        },
        {
          dataSource: MedalData,
          xName: "Country",
          yName: "Bronze",
          name: "Bronze",
          type: "Column",
          columnSpacing: 0.1,
        },
      ],
      title: "All-Time Summer Olympic Medal Count by Country",
      subTitle: "Source: Wikipedia.org",
      legendSettings: {
        visible: true,
        position: "Right",
        template:
          '<div class="template" style="display:flex;align-items:center;gap:' +
          (ej.base.Browser.isDevice ? "1px" : "8px") +
          ';opacity:1;">' +
          '<img class="e-image" src="" width="20" height="20" />' +
          '<span class="e-text" style="font-size:' +
          (ej.base.Browser.isDevice ? "9px" : "14px") +
          ';"></span>' +
          "</div>",
      },
      legendRender: function (args) {
        var matchedSeries = chart.series.find(function (s) { return s.name === args.text; });
        var opacity = matchedSeries && !matchedSeries.visible ? '0.5' : '1';
        var seriesColor = args.fill;
        args.template = args.template
          .replace('opacity:1;', 'opacity:' + opacity + ';')
          .replace('src=""', 'src="src/chart/images/' + args.text.toLowerCase() + '-medal.png"')
          .replace('font-size:', 'color:' + seriesColor + ';font-weight:bold;font-size:')
          .replace('></span>', '>' + args.text + '</span>');
      },
      load: function (args) {
        var selectedTheme = location.hash.split("/")[1];
        selectedTheme = selectedTheme ? selectedTheme : "Fluent2";
        args.chart.theme = (
          selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
        )
          .replace(/-dark/i, "Dark")
          .replace(/contrast/i, "Contrast")
          .replace(/-highContrast/i, "HighContrast");
      },
    });

    chart.appendTo('#chart-container');
};

