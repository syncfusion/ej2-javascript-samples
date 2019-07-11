/**
 * Pivot Table RTL Sample.
 */
this.default = function () {
    ej.base.enableRipple(false);
    var pivotObj = new ej.pivotview.PivotView({
        dataSourceSettings: {
            dataSource: window.Pivot_Data,
            expandAll: false,
            enableSorting: true,
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            values: [{ name: 'In_Stock', caption: 'In Stock' }, { name: 'Sold', caption: 'Units Sold' },
                { name: 'Amount', caption: 'Sold Amount' }],
            filters: [{ name: 'Product_Categories', caption: 'Product Categories' }],
            columns: [{ name: 'Year' }, { name: 'Order_Source', caption: 'Order Source' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
        },
        width: '100%',
        height: 300,
        allowCalculatedField: true,
        showGroupingBar: true,
        showFieldList: true,
        enableRtl: true,
        gridSettings: { columnWidth: 140 }
    });
    pivotObj.appendTo('#PivotView');
};
