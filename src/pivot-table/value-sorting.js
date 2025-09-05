this.default = function () {
    ej.base.enableRipple(false);
    var pivotObj = new ej.pivotview.PivotView({
        dataSourceSettings: {
            valueSortSettings: {
                columnHeaderText: 'FY 2022##In Stock',
                headerDelimiter: '##',
                columnSortOrder: 'Descending',
                rowHeaderText: 'France',
                rowSortOrder: 'Ascending'
            },
            values: [{ name: 'In_Stock', caption: 'In Stock' }, { name: 'Sold', caption: 'Units Sold' },
            { name: 'Amount', caption: 'Sold Amount' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            columns: [{ name: 'Year' }, { name: 'Order_Source', caption: 'Order Source' }],
            dataSource: window.Pivot_Data,
            expandAll: false,
            enableSorting: true,
            rows: [{ name: 'Country' }, { name: 'Products' }],
            filters: [{ name: 'Product_Categories', caption: 'Product Categories' }]
        },
        width: '100%',
        enableValueSorting: true,
        height: 300,
        showFieldList: true,
        showValuesButton: true,
        gridSettings: { columnWidth: 140 }
    });
    pivotObj.appendTo('#PivotView');
};
