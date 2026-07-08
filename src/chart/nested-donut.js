/**
 * Sample for Nested Donut chart (multiple pie series)
 */

var regionColors = {
  "South Asia": "#1f4e8c",
  "Middle East": "#7a3b8f",
  "S.E. Asia": "#e91e63",
  "Africa": "#f4c20d",
  "Others": "#66a99c"
};
this.default = function () {
  var pie = new ej.charts.AccumulationChart({
    series: [
      {
        dataSource: [
          {
            x: "India",
            y: 21.8,
            color: regionColors["South Asia"],
            text: ej.base.Browser.isDevice ? "IND" : "India",
          },
          {
            x: "Bangladesh",
            y: 12.5,
            color: regionColors["South Asia"],
            text: ej.base.Browser.isDevice ? "BGD" : "Bangladesh",
          },
          {
            x: "Nepal",
            y: 12.5,
            color: regionColors["South Asia"],
            text: ej.base.Browser.isDevice ? "NPL" : "Nepal",
          },
          {
            x: "Pakistan",
            y: 4.7,
            color: regionColors["South Asia"],
            text: ej.base.Browser.isDevice ? "PAK" : "Pakistan",
          },
          {
            x: "Sri Lanka",
            y: 4.35,
            color: regionColors["South Asia"],
            text: ej.base.Browser.isDevice ? "LKA" : "Sri Lanka",
          },
          {
            x: "Qatar",
            y: 10.5,
            color: regionColors["Middle East"],
            text: ej.base.Browser.isDevice ? "QAT" : "Qatar",
          },
          {
            x: "Iran",
            y: 1.0,
            color: regionColors["Middle East"],
            text: ej.base.Browser.isDevice ? "IRN" : "Iran",
          },
          {
            x: "Jordan",
            y: 1.6,
            color: regionColors["Middle East"],
            text: ej.base.Browser.isDevice ? "JOR" : "Jordan",
          },
          {
            x: "Syria",
            y: 1.8,
            color: regionColors["Middle East"],
            text: ej.base.Browser.isDevice ? "SYR" : "Syria",
          },
          {
            x: "Lebanon",
            y: 1.25,
            color: regionColors["Middle East"],
            text: ej.base.Browser.isDevice ? "LBN" : "Lebanon",
          },
          {
            x: "Philippines",
            y: 7.36,
            color: regionColors["S.E. Asia"],
            text: ej.base.Browser.isDevice ? "PHL" : "Philippines",
          },
          {
            x: "Sudan",
            y: 1.9,
            color: regionColors.Africa,
            text: ej.base.Browser.isDevice ? "SDN" : "Sudan",
          },
          {
            x: "Egypt",
            y: 9.35,
            color: regionColors.Africa,
            text: ej.base.Browser.isDevice ? "EGY" : "Egypt",
          },
          {
            x: "Others",
            y: 9.39,
            color: regionColors.Others,
            text: ej.base.Browser.isDevice ? "Others" : "Others",
          },
        ],
        type: "Pie",
        xName: "x",
        yName: "y",
        pointColorMapping: "color",
        radius: "90%",
        innerRadius: "75%",
        border: { color: "#fff", width: 2 },
        dataLabel: {
          visible: true,
          name: "text",
          position: "Outside",
        },
        animation: {
          enable: false,
        },
      },
      {
        dataSource: [
          {
            x: "South Asia",
            y: 55.85,
            color: regionColors["South Asia"],
            text: ej.base.Browser.isDevice ? "SA" : "South Asia",
          },
          {
            x: "Middle East",
            y: 16.15,
            color: regionColors["Middle East"],
            text: ej.base.Browser.isDevice ? "ME" : "Middle East",
          },
          {
            x: "S.E. Asia",
            y: 7.36,
            color: regionColors["S.E. Asia"],
            text: ej.base.Browser.isDevice ? "SEA" : "S.E. Asia",
          },
          {
            x: "Africa",
            y: 11.25,
            color: regionColors.Africa,
            text: ej.base.Browser.isDevice ? "AF" : "Africa",
          },
          {
            x: "Others",
            y: 9.39,
            color: regionColors.Others,
            text: ej.base.Browser.isDevice ? "Others" : "Others",
          },
        ],
        type: "Pie",
        xName: "x",
        yName: "y",
        pointColorMapping: "color",
        radius: "67%",
        innerRadius: "35%",
        border: { color: "#fff", width: 2 },
        dataLabel: {
          visible: true,
          name: "text",
          position: "Inside",
        },
        animation: {
          enable: false,
        },
      },
    ],
    enableBorderOnMouseMove: false,
    centerLabel: {
      text: "Qatar Population<br><b>3.1 Million</b>",
      textStyle: {
        size: "12px",
        fontWeight: "bold",
      },
    },
    title: "The Population of Qatar by Nationality",
    tooltip: {
      enable: true,
      format: "<b>${point.x}</b><br/>Population: <b>${point.y}%</b>",
      textStyle: { fontWeight: "bold" },
    },
    legendSettings: {
      visible: true,
      mappingKey: "x",
    },
    load: function (args) {
      var selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Fluent2";
      args.accumulation.theme = (
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
      )
        .replace(/-dark/i, "Dark")
        .replace(/contrast/i, "Contrast")
        .replace(/-highContrast/i, "HighContrast");
    },
  });
  pie.appendTo("#container");
};
