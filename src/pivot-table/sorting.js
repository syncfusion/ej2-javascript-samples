/**
 * Pivot Table Member Sorting sample
 */
this.default = function () {
    ej.base.enableRipple(false);
    var pivotObj = new ej.pivotview.PivotView({
        dataSourceSettings: {
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            columns: [{ name: 'Year' }, { name: 'Order_Source', caption: 'Order Source' }],
            dataSource: window.Pivot_Data,
            expandAll: false,
            values: [{ name: 'In_Stock', caption: 'In Stock' }, { name: 'Sold', caption: 'Units Sold' },
                { name: 'Amount', caption: 'Sold Amount' }],
            filters: [{ name: 'Product_Categories', caption: 'Product Categories' }],
            enableSorting: true
        },
        width: '100%',
        height: 300,
        gridSettings: { columnWidth: 140 }
    });
    pivotObj.appendTo('#PivotView');
    var order = ['Ascending', 'Descending'];
    var fields = [
        { Field: 'Country', Order: 'Country_asc' },
        { Field: 'Products', Order: 'Products_asc' },
        { Field: 'Year', Order: 'Year_asc' },
        { Field: 'Order Source', Order: 'Order Source_asc' }
    ];
    var checkBoxObj = new ej.buttons.CheckBox({
        label: 'Enable Sorting', labelPosition: 'After', checked: true,
        change: function (args) {
            var ischecked = args.checked;
            fieldsddl.enabled = ischecked;
            orderddl.enabled = ischecked;
            applyBtn.disabled = !ischecked;
            pivotObj.dataSourceSettings.enableSorting = ischecked;
        }
    });
    checkBoxObj.appendTo('#sorting');
    var fieldsddl = new ej.dropdowns.DropDownList({
        dataSource: fields,
        fields: { text: 'Field', value: 'Order' },
        index: 0,
        enabled: true,
        change: function (args) {
            if (fieldsddl.dataSource[fieldsddl.index].Order === fieldsddl.dataSource[fieldsddl.index].Field + '_asc') {
                orderddl.index = 0;
            }
            else {
                orderddl.index = 1;
            }
        }
    });
    fieldsddl.appendTo('#sorting-fields');
    var orderddl = new ej.dropdowns.DropDownList({
        dataSource: order,
        index: 0,
        enabled: true,
        change: function (args) {
            if (args.value === 'Ascending') {
                fieldsddl.dataSource[fieldsddl.index].Order = fieldsddl.dataSource[fieldsddl.index].Field + '_asc';
            }
            else {
                fieldsddl.dataSource[fieldsddl.index].Order = fieldsddl.dataSource[fieldsddl.index].Field + '_desc';
            }
            fieldsddl.refresh();
        }
    });
    orderddl.appendTo('#sorting-order');
    var applyBtn = new ej.buttons.Button({
        isPrimary: true
    });
    applyBtn.appendTo('#sorting-apply');
    document.getElementById('sorting-apply').onclick = function () {
        if (checkBoxObj.checked) {
            pivotObj.dataSourceSettings.enableSorting = true;
            pivotObj.dataSourceSettings.sortSettings = [
                { name: 'Country', order: fieldsddl.dataSource[0].Order === 'Country_asc' ? 'Ascending' : 'Descending' },
                { name: 'Products', order: fieldsddl.dataSource[1].Order === 'Products_asc' ? 'Ascending' : 'Descending' },
                { name: 'Year', order: fieldsddl.dataSource[2].Order === 'Year_asc' ? 'Ascending' : 'Descending' },
                { name: 'Order_Source', order: fieldsddl.dataSource[3].Order === 'Order Source_asc' ? 'Ascending' : 'Descending' }
            ];
        }
        else {
            pivotObj.dataSourceSettings.enableSorting = false;
            pivotObj.dataSourceSettings.sortSettings = [];
        }
    };
};
