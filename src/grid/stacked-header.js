this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.orderData,
        allowPaging: true,
        allowResizing: true,
        pageSettings: { pageCount: 5 },
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, minWidth: 10 },
            {
                headerText: 'Order Details', columns: [
                    { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', width: 135, format: 'yMd', minWidth: 10 },
                    { field: 'Freight', headerText: 'Freight($)', textAlign: 'Right', width: 120, format: 'C2', minWidth: 10 },
                ]
            },
            {
                headerText: 'Ship Details', columns: [
                    { field: 'ShippedDate', headerText: 'Shipped Date', textAlign: 'Right', width: 145, format: 'yMd', minWidth: 10 },
                    { field: 'ShipCountry', headerText: 'Ship Country', width: 140, minWidth: 10 },
                ]
            }
        ]
    });
    grid.appendTo('#Grid');
};