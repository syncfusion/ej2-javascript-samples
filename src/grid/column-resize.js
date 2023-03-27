this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource:  window.orderDatas,
        allowResizing: true,
        height: 400,
        width: 850,
        autoFit: true,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', minWidth: 100, width: 150, maxWidth: 200, textAlign: 'Right' },
            { field: 'CustomerName', headerText: 'Customer Name', minWidth: 8, width: 150 },
            { field: 'Freight', width: 120, format: 'C2', minWidth: 8, textAlign: 'Right' },
            {
                field: 'ShippedDate', headerText: 'Shipped Date', minWidth: 8,
                width: 150, format: 'yMd', textAlign: 'Right', allowResizing: false
            },
            { field: 'ShipCountry', headerText: 'Ship Country', minWidth: 8, width: 150 }
        ]
    });
    grid.appendTo('#Grid');
};