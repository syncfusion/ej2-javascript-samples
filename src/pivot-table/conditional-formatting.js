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
            drilledMembers: [{ name: 'Country', items: ['France', 'Germany'] }],
            columns: [{ name: 'Year' }, { name: 'Order_Source', caption: 'Order Source' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            values: [{ name: 'In_Stock', caption: 'In Stock' },
            { name: 'Sold', caption: 'Units Sold' }],
            filters: [{ name: 'Product_Categories', caption: 'Product Categories' }],
            conditionalFormatSettings: [
                {
                    measure: 'In_Stock',
                    value1: 5000,
                    conditions: 'LessThan',
                    style: {
                        backgroundColor: '#80cbc4',
                        color: 'black',
                        fontFamily: 'Tahoma',
                        fontSize: '12px'
                    }
                },
                {
                    value1: 3400,
                    value2: 40000,
                    measure: 'Sold',
                    conditions: 'Between',
                    style: {
                        backgroundColor: '#f48fb1',
                        color: 'black',
                        fontFamily: 'Tahoma',
                        fontSize: '12px'
                    }
                }
            ]
        },
        allowConditionalFormatting: true,
        showFieldList: true,
        width: '100%',
        height: 300,
        gridSettings: { columnWidth: 100 }
    });
    pivotObj.appendTo('#PivotView');
    var button = new ej.buttons.Button({ isPrimary: true });
    button.appendTo('#conditional-formatting-btn');
    button.element.onclick = function () {
        pivotObj.conditionalFormattingModule.showConditionalFormattingDialog();
    };
    var button1 = new ej.buttons.Button({ isPrimary: true });
    button1.appendTo('#reset-format');
    button1.element.onclick = function () {
        if (pivotObj.dataSourceSettings.conditionalFormatSettings.length > 0) {
            pivotObj.setProperties({ dataSourceSettings: { conditionalFormatSettings: [] } }, true);
            pivotObj.renderPivotGrid();
        }
        pivotObj.conditionalFormattingModule.destroy();
        document.getElementById('reset-format').blur();
    };
};
