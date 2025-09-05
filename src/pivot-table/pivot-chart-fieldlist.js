/**
 * PivotView Sample with Chart integration.
 */
this.default = function () {
  ej.base.enableRipple(false);
  var displayOptionDropDown;
  var primaryViewDropDown;
  var isInitial = false;
  var isChecked = true;
  var displayOption = 'Both';
  var preference = 'Chart';

  var pivotGridObj = new ej.pivotview.PivotView({
    enginePopulated: function () {
      if (!ej.base.Browser.isDevice && fieldListObj && pivotGridObj) {
        fieldListObj.update(pivotGridObj);
      }
    },
    dataBound: function () {
      if (document.getElementById('displayOptionddl') && document.getElementById('displayOptionddl') && document.getElementById('toolbar-switch') && !isInitial) {
        isInitial = true;
        displayOptionDropDown = new ej.dropdowns.DropDownList({
          floatLabelType: 'Auto',
          width: 100,
          value: displayOption,
          change: function (args) {
            displayOption = args.value;
            if (args.value !== 'Both') {
              primaryViewDropDown.readonly = true;
              pivotGridObj.displayOption = { view: args.value };
            } else if (args.value == 'Both') {
              primaryViewDropDown.readonly = false;
              pivotGridObj.displayOption = {
                view: args.value,
                primary: primaryViewDropDown.value,
              };
            }
            pivotGridObj.refresh();
          }
        });
        displayOptionDropDown.appendTo('#displayOptionddl');
        primaryViewDropDown = new ej.dropdowns.DropDownList({
          floatLabelType: 'Auto',
          width: 100,
          value: preference,
          change: function (args) {
            preference = args.value;
            if (pivotGridObj.displayOption.view == 'Both') {
              pivotGridObj.displayOption = { view: 'Both', primary: args.value };
              pivotGridObj.refresh();
            }
          }
        });
        primaryViewDropDown.appendTo('#primaryViewddl');
        var layoutSwitch = new ej.buttons.Switch({
          checked: isChecked,
          cssClass: 'pivot-toolbar-switch',
          change: function (args) {
            isChecked = args.checked;
            pivotGridObj.showToolbar = !pivotGridObj.showToolbar;
            pivotGridObj.refresh();
          }
        });
        layoutSwitch.appendTo('#toolbar-switch');
      }
    },
    width: '100%',
    height: 350,
    toolbar: ['Grid', 'Chart'],
    showToolbar: true,
    displayOption: { view: 'Both', primary: 'Chart' },
    chartSettings: {
      title: 'Sales Analysis',
      chartSeries: { type: 'Column' },
      load: function (args) {
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
          selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
      }
    },
    gridSettings: { columnWidth: 140 },
    actionBegin: function(args) {
      if (args.actionName == "Show table view") {
        primaryViewDropDown.value = 'Table';
      } else if (args.actionName == "Show chart view") {
        primaryViewDropDown.value = 'Chart';
      }
    }
  });
  pivotGridObj.appendTo('#PivotView');

  var fieldListObj = new ej.pivotview.PivotFieldList({
    dataSourceSettings: {
      dataSource: window.Pivot_Data,
      allowValueFilter: true,
      allowLabelFilter: true,
      rows: [{ name: 'Country' }, { name: 'Products' }],
      columns: [{ name: 'Year' }, { name: 'Order_Source', caption: 'Order Source' }],
      formatSettings: [{ name: 'Amount', format: 'C0' }],
      values: [{ name: 'In_Stock', caption: 'In Stock' }, { name: 'Sold', caption: 'Units Sold' },
      { name: 'Amount', caption: 'Sold Amount' }],
      filters: [{ name: 'Product_Categories', caption: 'Product Categories' }],
      enableSorting: true,
      expandAll: false
    },
    renderMode: 'Fixed',
    enableFieldSearching: true,
    allowCalculatedField: true,
    load: function () {
      if (ej.base.Browser.isDevice) {
        fieldListObj.renderMode = 'Popup';
        fieldListObj.target = '.control-section';
        ej.base.setStyleAttribute(document.getElementById('PivotFieldList'), {
          'width': 0,
          'height': 0,
          'float': 'left',
          'display': 'none'
        });
      }
    },
    dataBound: function () {
      if (ej.base.Browser.isDevice) {
        pivotGridObj.element.style.width = '100%';
        pivotGridObj.allowCalculatedField = true;
        pivotGridObj.showFieldList = true;
      }
      pivotGridObj.tooltip.destroy();
      pivotGridObj.refresh();
    },
    enginePopulated: function () {
      fieldListObj.updateView(pivotGridObj);
    }
  });
  fieldListObj.appendTo('#PivotFieldList');

  var toolbarObj = new ej.navigations.Toolbar({
    cssClass: "defaultToolbar",
    height: "50px",
    clicked: ToolbarCliked,
    items: [
      {
        template: '<div class="toolbar-template" id="layout_switch"><label for="toolbar-switch" class="label_option">Show/hide Toolbar:</label><div id="toolbar-switch"></div></div>',
        id: 'layout'
      },
      {
        template: '<div class="toolbar-template toolbar-temp"><label class="label_option display_label">Display Option:</label><select id="displayOptionddl" name="ddl-display-option"><option value="Both">Both</option><option value="Table">Table</option><option value="Chart">Chart</option></select></div>',
        id: 'display'
      },
      {
        template: '<div class="toolbar-template toolbar-temp"><label class="label_option display_label">Primary View:</label><select id="primaryViewddl" name="ddl-primary-view"><option value="Table">Table</option><option value="Chart">Chart</option></select></div>',
        id: 'preference'
      },
      { prefixIcon: "sb-icons sb-icon-Next", id: 'fieldlist', tooltipText: "Collapse Field List", align: 'Right' },
    ],
    beforeCreate: function () {
      isInitial = false;
      pivotGridObj.layoutRefresh();
    }
  });
  toolbarObj.appendTo("#defaultToolbar");

  var sideObj = new ej.navigations.Sidebar({
    target: ".maincontent",
    type: "Auto",
    isOpen: true,
    position: 'Right',
    enableGestures: false,
    change: function () {
       if (!sideObj.isOpen) {
        document.getElementById('PivotView').style.width = '100%';
      } else {
        document.getElementById('PivotView').style.width = '64%';
      }
      setTimeout(function () {
        pivotGridObj.layoutRefresh();
      }, 700);
    }
  });
  sideObj.appendTo("#defaultSidebar");

  function ToolbarCliked(args) {
    if (args.item.id == "fieldlist") {
      sideObj.toggle();
      toolbarObj.items[3].prefixIcon = sideObj.isOpen ? 'sb-icons sb-icon-Next' : 'sb-icons sb-icon-Previous';
      toolbarObj.items[3].tooltipText = sideObj.isOpen ? 'Collapse Field List' : 'Expand Field List';
    }
    if (ej.base.Browser.isDevice) {
      sideObj.isOpen = false;
      toolbarObj.items[3].prefixIcon = 'sb-icons sb-icon-Next pivot-fieldList';
    }
  }

  setTimeout(function () {
    if (ej.base.Browser.isDevice) {
      sideObj.isOpen = false;
      toolbarObj.items[3].prefixIcon = 'sb-icons sb-icon-Next pivot-fieldList';
      pivotGridObj.toolbar = ['Grid', 'Chart',  'FieldList'];
    }
    pivotGridObj.layoutRefresh();
  }, 700);
};