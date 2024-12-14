this.default = function () {
    /* create window.lazyLoadData */
    createLazyLoadData();
    var grid = new ej.grids.Grid({
        dataSource: window.lazyLoadData,
        enableVirtualization: true,
        height: 400,
        allowSorting: true,
        allowGrouping: true,
        groupSettings: { enableLazyLoading: true, columns: ['ProductName', 'CustomerName'] },
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, allowGrouping: false },
            { field: 'ProductName', headerText: 'Product Name', width: 160 },
            { field: 'ProductID', headerText: 'Product ID', textAlign: 'Right', width: 120 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
            { field: 'CustomerName', headerText: 'Customer Name', width: 160 }
        ]
    });
    grid.appendTo('#Grid');
};
