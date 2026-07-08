/**
 * Pivot Table Tabular Layout Sample.
 */
this.default = function () {
    ej.base.enableRipple(false);
    var pivotObj = new ej.pivotview.PivotView({
        dataSourceSettings: {
            columns: [{ name: 'Year' }, { name: 'Quarter' }],
            rows: [{ name: 'Product_Categories', caption: 'Product Categories' }, { name: 'Products' }, { name: 'Order_Source', caption: 'Order Source' }],
            drilledMembers: [{ name: 'Product_Categories', items: ['Accessories', 'Bikes'] }, { name: 'Products', delimiter: '##', items: ['Accessories##Helmets'] }],
            filterSettings: [{
                name: 'Products', type: 'Exclude', items: ['Cleaners', 'Fenders']
            }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            values: [{ name: 'Sold', caption: 'Units Sold' },
            { name: 'Amount', caption: 'Sold Amount' }],
            enableSorting: true,
            dataSource: window.Pivot_Data,
            expandAll: false,
            filters: []
        },
        width: '100%',
        height: 450,
        showFieldList: true,
        showToolbar: true,
        toolbar: ['Export', 'FieldList'],
        allowExcelExport: true,
        allowPdfExport: true,
        gridSettings: {
            columnWidth: ej.base.Browser.isDevice ? 100 : 120,
            layout: 'Tabular'
        }
    });
    pivotObj.appendTo('#PivotView');

    var layoutSwitch = new ej.buttons.Switch({
        checked: true,
        cssClass: 'pivot-layout-switch',
        change: onSwitchChange
    });
    layoutSwitch.appendTo('#layout-switch');

    var repeatLabelSwitch = new ej.buttons.Switch({
        cssClass: 'pivot-repeatlabel-switch',
        change: onRepeatLabelSwitchChange
    });
    repeatLabelSwitch.appendTo('#repeatlabel-switch');

    function onSwitchChange(args) {
        if (pivotObj.gridSettings.layout === 'Compact') {
            pivotObj.gridSettings.layout = 'Tabular';
            repeatLabelSwitch.disabled = false;
        } else {
            pivotObj.gridSettings.layout = 'Compact';
            repeatLabelSwitch.disabled = true;
        }
    }

    function onRepeatLabelSwitchChange(args) {
        if (pivotObj.gridSettings.repeatItemLabels) {
            pivotObj.setProperties({ gridSettings: { repeatItemLabels: false } });
            pivotObj.refreshData();
        } else {
            pivotObj.setProperties({ gridSettings: { repeatItemLabels: true } });
            pivotObj.refreshData(); 
        }
    }
};
