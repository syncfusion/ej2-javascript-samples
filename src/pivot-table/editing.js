/**
 * Pivot Table Sample with Edit Options.
 */
this.default = function () {
    ej.base.enableRipple(false);
    var pivotObj = new ej.pivotview.PivotView({
        dataSourceSettings: {
            enableSorting: true,
            columns: [{ name: 'Year' }, { name: 'Quarter' }, { name: 'Order_Source', caption: 'Order Source' }],
            values: [{ name: 'In_Stock', caption: 'In Stock' }, { name: 'Sold', caption: 'Units Sold' },
            { name: 'Amount', caption: 'Sold Amount' }],
            filters: [],
            rows: [{ name: 'Country' }, { name: 'Product_Categories', caption: 'Product Categories' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            dataSource: window.Pivot_Data,
            expandAll: false
        },
        width: '100%',
        height: 290,
        gridSettings: { columnWidth: 140 },
        showTooltip: false,
        editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' }
    });
    pivotObj.appendTo('#PivotView');
    var radioButton = new ej.buttons.RadioButton({
        label: 'Inline Editing',
        name: 'EditOpeartion',
        checked: true,
        change: onRadioChange
    });
    radioButton.appendTo('#inline');
    radioButton = new ej.buttons.RadioButton({
        label: 'Batch Editing',
        name: 'EditOpeartion',
        checked: false,
        change: onRadioChange
    });
    radioButton.appendTo('#batch');
    radioButton = new ej.buttons.RadioButton({
        label: 'Dialog Editing',
        name: 'EditOpeartion',
        checked: false,
        change: onRadioChange
    });
    radioButton.appendTo('#dialog');
    radioButton = new ej.buttons.RadioButton({
        label: 'Command Columns',
        name: 'EditOpeartion',
        checked: false,
        change: onRadioChange
    });
    radioButton.appendTo('#cc');
    function onRadioChange(args) {
        var id = args.event.target.id;
        if (id === 'inline') {
            pivotObj.editSettings.allowCommandColumns = false;
            pivotObj.editSettings.mode = 'Normal';
        }
        else if (id === 'batch') {
            pivotObj.editSettings.allowCommandColumns = false;
            pivotObj.editSettings.mode = 'Batch';
        }
        else if (id === 'dialog') {
            pivotObj.editSettings.allowCommandColumns = false;
            pivotObj.editSettings.mode = 'Dialog';
        }
        else {
            pivotObj.editSettings.allowCommandColumns = true;
        }
    }
};
