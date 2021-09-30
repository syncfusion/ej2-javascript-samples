this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.orderData.slice(0, 50),
        enableStickyHeader: true,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
            { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', width: 135, format: 'yMd' },
            { field: 'Freight', headerText: 'Freight($)', textAlign: 'Right', width: 120, format: 'C2' },
            { field: 'ShippedDate', headerText: 'Shipped Date', textAlign: 'Right', width: 145, format: 'yMd' },
            { field: 'ShipCountry', headerText: 'Ship Country', width: 140 }
        ]
    });
    grid.appendTo('#Grid');
};