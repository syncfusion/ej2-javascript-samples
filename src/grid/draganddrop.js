this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.orderDatas,
        allowPaging: true,
        allowRowDragAndDrop: true,
        selectionSettings: { type: 'Multiple' },
        rowDropSettings: { targetID: 'DestGrid' },
        pageSettings: { pageCount: 2 },
        width: '49%',
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
            { field: 'CustomerName', headerText: 'Customer Name', width: 135 },
            { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' }
        ]
    });
    grid.appendTo('#Grid');
    var destGrid = new ej.grids.Grid({
        dataSource: [],
        allowPaging: true,
        allowRowDragAndDrop: true,
        selectionSettings: { type: 'Multiple' },
        rowDropSettings: { targetID: 'Grid' },
        pageSettings: { pageCount: 2 },
        width: '49%',
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
            { field: 'CustomerName', headerText: 'Customer Name', width: 135 },
            { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' }
        ]
    });
    destGrid.appendTo('#DestGrid');
};