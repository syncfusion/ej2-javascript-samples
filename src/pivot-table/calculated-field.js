/**
 * Pivot Table Sample with Calculated Fields.
 */
this.default = function () {
    ej.base.enableRipple(false);
    var pivotObj = new ej.pivotview.PivotView({
        dataSourceSettings: {
            dataSource: window.Pivot_Data,
            expandAll: false,
            enableSorting: true,
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            columns: [{ name: 'Year' }, { name: 'Order_Source', caption: 'Order Source' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            values: [{ name: 'In_Stock', caption: 'In Stock' },
                { name: 'Sold', caption: 'Units Sold' }, { name: 'Total', caption: 'Total Units', type: 'CalculatedField' }],
            filters: [{ name: 'Product_Categories', caption: 'Product Categories' }],
            calculatedFieldSettings: [
                {
                    name: 'Total',
                    formula: '"Sum(In_Stock)"+"Sum(Sold)"'
                }
            ]
        },
        allowCalculatedField: true,
        showFieldList: true,
        width: '100%',
        height: 300,
        gridSettings: { columnWidth: 140 }
    });
    pivotObj.appendTo('#PivotView');
    var button = new ej.buttons.Button({ isPrimary: true });
    button.appendTo('#calculated-field-btn');
    button.element.onclick = function () {
        if (ej.base.Browser.isDevice) {
            pivotObj.pivotFieldListModule.dialogRenderer.onShowFieldList();
        }
        else {
            pivotObj.calculatedFieldModule.createCalculatedFieldDialog();
        }
    };
};
