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
      chartSeries: { type: "Column" },
      title: "Sales Analysis",
      load: function (args) {
        var selectTheme = location.hash.split("/")[1];
        selectTheme = selectTheme ? selectTheme : "Material";
        args.chart.theme = (selectTheme.charAt(0).toUpperCase() +
          selectTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
      },
    },
    height: 450
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
