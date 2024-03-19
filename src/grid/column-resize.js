this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource:  window.orderDatas,
        allowResizing: true,
        allowSorting: true,
        height: 400,
        width: 850,
        autoFit: true,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', minWidth: 100, textAlign: 'Right', maxWidth: 200, width: 140},
            { field: 'CustomerName', headerText: 'Customer Name', minWidth: 100, width: 150 },
            { field: 'Freight', width: 160, minWidth: 100, format: 'C2', textAlign: 'Right' },
            {
                field: 'ShippedDate', headerText: 'Shipped Date',
                width: 150, format: 'yMd', textAlign: 'Right', allowResizing: false
            },
            { field: 'ShipCountry', headerText: 'Ship Country', minWidth: 100, width: 150 }
        ]
    });
    grid.appendTo('#Grid');
};