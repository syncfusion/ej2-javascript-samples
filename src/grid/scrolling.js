this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.orderDatas,
        height: 410,
        width: 'auto',
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
            { field: 'CustomerName', headerText: 'Customer Name', width: 160 },
            { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' },
            { field: 'Freight', width: 120, format: 'C', textAlign: 'Right' },
            { field: 'ShippedDate', headerText: 'Shipped Date', width: 140, format: 'yMd', textAlign: 'Right' },
            { field: 'ShipName', headerText: 'Ship Name', width: '170' },
            { field: 'ShipAddress', headerText: 'Ship Address', width: '170' },
            { field: 'ShipCity', headerText: 'Ship City', width: '150' },
            { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
        ]
    });
    grid.appendTo('#Grid');
};