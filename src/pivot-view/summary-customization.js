/**
 * PivotView Grouping bar Sample
 */
this.default = function () {
    ej.base.enableRipple(false);
    var pivotGridObj = new ej.pivotview.PivotView({
        dataSource: {
            drilledMembers: [{ name: 'Country', items: ['France'] }],
            filterSettings: [{ name: 'Products', items: ['Gloves', 'Helmets', 'Shorts', 'Vests'], type: 'Include' }],
            columns: [{ name: 'Year' }, { name: 'Order_Source', caption: 'Order Source' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            enableSorting: true,
            values: [{ name: 'In_Stock', caption: 'In Stock' }, { name: 'Sold', caption: 'Units Sold' },
            { name: 'Amount', caption: 'Sold Amount' }],
            data: window.Pivot_Data,
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            expandAll: false,
            filters: [{ name: 'Product_Categories', caption: 'Product Categories' }],
            showGrandTotals: false
        },
        width: '100%',
        height: 400,
        gridSettings: { columnWidth: 140 }
    });
    pivotGridObj.appendTo('#PivotView');

    var radioButton = new ej.buttons.RadioButton({ label: 'Row', name: 'total', value: 'Row', change: onChange });
    radioButton.appendTo('#summary-radio1');
    radioButton = new ej.buttons.RadioButton({ label: 'Column', name: 'total', value: 'Column', change: onChange });
    radioButton.appendTo('#summary-radio2');
    radioButton = new ej.buttons.RadioButton({ label: 'Both', name: 'total', value: 'Both', checked: true, change: onChange });
    radioButton.appendTo('#summary-radio3');
    var fields = [
        { Name: 'Country' },
        { Name: 'Year' }
    ];
    var valuesddl = new ej.dropdowns.MultiSelect({
        dataSource: fields,
        mode: 'CheckBox',
        showDropDownIcon: true,
        showClearButton: false,
        enableSelectionOrder: false,
        fields: { text: 'Name' },
        placeholder: 'Select fields to hide its sub-totals',
        select: function (args) {
            for (var i = 0; i < pivotGridObj.dataSource.columns.length; i++) {
                if ((pivotGridObj.dataSource.columns[i].name || pivotGridObj.dataSource.columns[i].caption) === args.itemData.Name) {
                    pivotGridObj.dataSource.columns[i].showSubTotals = false;
                }
            }
            for (var j = 0; j < pivotGridObj.dataSource.rows.length; j++) {
                if ((pivotGridObj.dataSource.rows[j].name || pivotGridObj.dataSource.rows[j].name) === args.itemData.Name) {
                    pivotGridObj.dataSource.rows[j].showSubTotals = false;
                }
            }
        },
        removed: function (args) {
            for (var i = 0; i < pivotGridObj.dataSource.columns.length; i++) {
                if ((pivotGridObj.dataSource.columns[i].name || pivotGridObj.dataSource.columns[i].caption) === args.itemData.Name) {
                    pivotGridObj.dataSource.columns[i].showSubTotals = true;
                }
            }
            for (var j = 0; j < pivotGridObj.dataSource.rows.length; j++) {
                if ((pivotGridObj.dataSource.rows[j].name || pivotGridObj.dataSource.rows[j].name) === args.itemData.Name) {
                    pivotGridObj.dataSource.rows[j].showSubTotals = true;
                }
            }
        },
        open: function (args) {
            args.popup.element.querySelector(".e-filter-parent").style.display = 'none';
        }
    });
    valuesddl.appendTo('#summary-values');
    function onChange(args) {
        pivotGridObj.setProperties({ dataSource: { showGrandTotals: true } }, true);
        pivotGridObj.setProperties({ dataSource: { showRowGrandTotals: true } }, true);
        pivotGridObj.setProperties({ dataSource: { showColumnGrandTotals: true } }, true);
        if (args.value === 'Column') {
            pivotGridObj.dataSource.showColumnGrandTotals = false;
        }
        else if (args.value === 'Row') {
            pivotGridObj.dataSource.showRowGrandTotals = false;
        }
        else if (args.value === 'Both') {
            pivotGridObj.dataSource.showGrandTotals = false;
        }
    }
};
