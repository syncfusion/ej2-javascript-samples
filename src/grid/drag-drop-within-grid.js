this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.orderDatas,
        allowRowDragAndDrop: true,
        selectionSettings: { type: 'Multiple' },
        height: 400,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', isPrimaryKey: true, width: 80, textAlign: 'Right' },
            { field: 'CustomerName', headerText: 'Customer Name', width: 130, textAlign: 'Left' },
            { field: 'OrderDate', headerText: 'Order Date', width: 120, format: 'yMd', textAlign: 'Right' },
            { field: 'Freight', headerText: 'Freight', width: 130, format: 'C2', textAlign: 'Right' },
            { field: 'ShipCity', headerText: 'Ship City', width: 130, textAlign: 'Left' },
            { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
        ]
    });
    grid.appendTo('#Grid');
};