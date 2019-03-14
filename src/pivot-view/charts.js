/**
 * PivotView Sample with Chart integration.
 */
this.default = function() {
  ej.base.enableRipple(false);
  var pivotGridObj = new ej.pivotview.PivotView({
    dataSource: {
      enableSorting: true,
      columns: [
        { name: "Year" },
        { name: "Order_Source", caption: "Order Source" }
      ],
      rows: [{ name: "Country" }, { name: "Products" }],
      valueSortSettings: { headerDelimiter: " - " },
      data: window.Pivot_Data,
      expandAll: false,
      formatSettings: [{ name: "Amount", format: "C" }],
      values: [{ name: "Amount", caption: "Sales Amount" }],
      filters: []
    },
    showFieldList: true,
    displayOption: { view: "Chart" },
    chartSettings: {
      title: "Sales Analysis",
      chartSeries: { type: "Column" },
      load: function(args) {
        var selectedTheme = location.hash.split("/")[1];
        selectedTheme = selectedTheme ? selectedTheme : "Material";
        args.chart.theme =
          selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
      }
    }
  });
  pivotGridObj.appendTo("#PivotView");
  var chartTypesDropDown = new ej.dropdowns.DropDownList({
    placeholder: "Chart Types",
    floatLabelType: "Auto",
    change: function(args) {
      pivotGridObj.chartSettings.chartSeries.type = args.value;
    }
  });
  chartTypesDropDown.appendTo("#charttypesddl");
};
