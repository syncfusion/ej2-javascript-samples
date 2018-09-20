/**
 * PivotView Member Sorting sample
 */
this.default = function () {
    ej.base.enableRipple(false);
    var pivotGridObj = new ej.pivotview.PivotView({
        dataSource: {
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            columns: [{ name: 'Year' }, { name: 'Order_Source', caption: 'Order Source' }],
            data: window.Pivot_Data,
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
    pivotGridObj.appendTo('#PivotView');
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
            if (args.checked) {
                fieldsddl.enabled = true;
                orderddl.enabled = true;
                applyBtn.disabled = false;                
            }
            else {
                fieldsddl.enabled = false;
                orderddl.enabled = false;
				applyBtn.disabled = true;
            }
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
    fieldsddl.appendTo('#fields');
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
    orderddl.appendTo('#order');
    var applyBtn = new ej.buttons.Button({
        iconCss: 'e-icons e-play-icon', cssClass: 'e-flat', isPrimary: true,
    });
    applyBtn.appendTo('#apply');
    document.getElementById('apply').onclick = function () {
        if (checkBoxObj.checked) {
            pivotGridObj.dataSource.enableSorting = true;
            pivotGridObj.dataSource.sortSettings = [
                { name: 'Country', order: fieldsddl.dataSource[0].Order === 'Country_asc' ? 'Ascending' : 'Descending' },
                { name: 'Products', order: fieldsddl.dataSource[1].Order === 'Products_asc' ? 'Ascending' : 'Descending' },
                { name: 'Year', order: fieldsddl.dataSource[2].Order === 'Year_asc' ? 'Ascending' : 'Descending' },
                { name: 'Order_Source', order: fieldsddl.dataSource[3].Order === 'Order Source_asc' ? 'Ascending' : 'Descending' }
            ];
        }
        else {
            pivotGridObj.dataSource.enableSorting = false;
            pivotGridObj.dataSource.sortSettings = [];
        }
    };
};
