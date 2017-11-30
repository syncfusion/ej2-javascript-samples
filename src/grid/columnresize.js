this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.orderData.slice(0, 60),
        allowResizing: true,
        height: 400,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', minWidth: 120, width: 200, maxWidth: 300, textAlign: 'right' },
            { field: 'CustomerName', headerText: 'Customer Name', minWidth: 8, width: 200 },
            { field: 'OrderDate', headerText: 'Order Date', minWidth: 8, width: 200, format: 'yMd', textAlign: 'right' },
            { field: 'Freight', width: 150, format: 'C2', minWidth: 8, textAlign: 'right' },
            { field: 'ShipName', headerText: 'Ship Name', minWidth: 8, width: 300 },
            { field: 'ShippedDate', headerText: 'Shipped Date', width: 200, format: 'yMd', textAlign: 'right', allowResizing: false },
            { field: 'ShipCountry', headerText: 'Ship Country', minWidth: 8, width: 200 },
            { field: 'ShipCity', headerText: 'Ship City', minWidth: 8, width: 200 }
        ]
    });
    grid.appendTo('#Grid');
};