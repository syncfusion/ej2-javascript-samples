/**
 * Pivot Table Sample with Chart integration.
 */
this.default = function() {
  ej.base.enableRipple(false);
  var pivotObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
      enableSorting: true,
      rows: [
        { name: "Year" },
        { name: "Order_Source", caption: "Order Source" }
      ],
      columns: [{ name: "Country" }, { name: "Products" }],
      valueSortSettings: { headerDelimiter: " - " },
      drilledMembers: [{ name: 'Year', items: ['FY 2015'] }],
      dataSource: window.Pivot_Data,
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
  pivotObj.appendTo("#PivotView");
  var chartTypesDropDown = new ej.dropdowns.DropDownList({
    placeholder: "Chart Types",
    floatLabelType: "Auto",
    change: function(args) {
      pivotObj.chartSettings.chartSeries.type = args.value;
    }
  });
  chartTypesDropDown.appendTo("#charttypesddl");
};
