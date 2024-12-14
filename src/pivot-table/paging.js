/**
 * Pivot Table Sample with paging option.
 */
this.default = function () {
  ej.base.enableRipple(false);
  var pagerPositions = ['Top', 'Bottom'];
  var pageSizes = ['Row', 'Column', 'Both', 'None'];
  var pagerViewData = ['Row', 'Column', 'Both'];

  var remoteData = new ej.data.DataManager({
    url: 'https://ej2services.syncfusion.com/js/development/api/order',
    adaptor: new ej.data.WebApiAdaptor(),
    crossDomain: true
  });
  var pivotObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
      type: 'JSON',
      dataSource: remoteData,
      expandAll: true,
      columns: [{
        name: 'ProductName',
        caption: 'Product Name'
      }],
      rows: [{
        name: 'ShipCountry',
        caption: 'Ship Country'
      }, {
        name: 'ShipCity',
        caption: 'Ship City'
      }],
      formatSettings: [{
        name: 'UnitPrice',
        format: 'C0'
      }],
      values: [{
        name: 'Quantity'
      }, {
        name: 'UnitPrice',
        caption: 'Unit Price'
      }],
      filters: []
    },
    width: '100%',
    height: 600,
    enablePaging: true,
    pageSettings: {
      rowPageSize: 10,
      columnPageSize: 5,
      currentColumnPage: 1,
      currentRowPage: 1
    },
    pagerSettings: {
      position: 'Bottom',
      enableCompactView: false,
      showColumnPager: true,
      showRowPager: true
    },
    gridSettings: {
      columnWidth: 120
    },
  });
  pivotObj.appendTo("#PivotView");
  var positionDropDown = new ej.dropdowns.DropDownList({
    dataSource: pagerPositions,
    index: 1,
    change: onDropDownChange
  });
  positionDropDown.appendTo('#Pager_Position');

  var pagerViewDropDown = new ej.dropdowns.DropDownList({
    dataSource: pagerViewData,
    index: 2,
    change: onDropDownChange
  });
  pagerViewDropDown.appendTo('#Pager_View');

  var pageSizeDropDown = new ej.dropdowns.DropDownList({
    dataSource: pageSizes,
    index: 2,
    change: onDropDownChange
  });
  pageSizeDropDown.appendTo('#Page_Size');


  var checkBoxObj = new ej.buttons.CheckBox({
    checked: false,
    change: onCheckBoxChange
  });
  checkBoxObj.appendTo('#Compact_View');

  checkBoxObj = new ej.buttons.CheckBox({
    checked: false,
    change: onCheckBoxChange
  });
  checkBoxObj.appendTo('#Inverse');

  function onDropDownChange(args) {
    if (args.element.id === 'Pager_Position') {
      pivotObj.pagerSettings.position = args.value;
    } else if (args.element.id === 'Pager_View') {
      if (args.value === 'Row') {
        pivotObj.pagerSettings.showRowPager = true;
        pivotObj.pagerSettings.showColumnPager = false;
      } else if (args.value === 'Column') {
        pivotObj.pagerSettings.showRowPager = false;
        pivotObj.pagerSettings.showColumnPager = true;
      } else {
        pivotObj.pagerSettings.showRowPager = pivotObj.pagerSettings.showColumnPager = true;
      }
    } else {
      if (args.value === 'Row') {
        pivotObj.pagerSettings.showRowPageSize = true;
        pivotObj.pagerSettings.showColumnPageSize = false;
      } else if (args.value === 'Column') {
        pivotObj.pagerSettings.showRowPageSize = false;
        pivotObj.pagerSettings.showColumnPageSize = true;
      } else if (args.value === 'Both') {
        pivotObj.pagerSettings.showRowPageSize = pivotObj.pagerSettings.showColumnPageSize = true;
      } else {
        pivotObj.pagerSettings.showRowPageSize = pivotObj.pagerSettings.showColumnPageSize = false;
      }
    }
  }

  function onCheckBoxChange(args) {
    if (this.element.id === 'Compact_View') {
      pivotObj.pagerSettings.enableCompactView = args.checked;
    } else {
      pivotObj.pagerSettings.isInversed = args.checked;
    }
  }
};