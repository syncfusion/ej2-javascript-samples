this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource:  window.orderDatas,
        showColumnChooser: true,
        allowPaging: true,
        allowSorting: true,
        toolbar: ['ColumnChooser'],
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 140},
            { field: 'CustomerName', headerText: 'Customer Name', width: 150 },
            { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' },
            { field: 'Freight', width: 160, format: 'C2', textAlign: 'Right' },
            { field: 'ShippedDate', headerText: 'Shipped Date', width: 140, format: 'yMd', textAlign: 'Right' },
            { field: 'ShipCountry', headerText: 'Ship Country', width: 140 },
            { field: 'ShipCity', visible: false, headerText: 'Ship City', width: 150 }
        ]
    });
    grid.appendTo('#Grid');
};