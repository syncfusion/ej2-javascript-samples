this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.orderDatas,
        allowPaging: true,
        allowSelection: true,
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'Excel' },
        selectionSettings: { persistSelection: true },
        editSettings: { allowDeleting: true },
        toolbar: [ 'Delete' ],
        enableHover: false,
        columns: [
            { type: 'checkbox', width: 50 },
            { field: 'OrderID', isPrimaryKey: true, headerText: 'Order ID', textAlign: 'Right', width: 180 },
            { field: 'CustomerName', headerText: 'Customer Name', width: 150 },
            { field: 'OrderDate', headerText: 'Order Date', format: 'yMd', width: 150, textAlign: 'Right' },
            { field: 'Freight', headerText: 'Freight', format: 'C2', width: 130, textAlign: 'Right' },
            { field: 'ShipCountry', headerText: 'Ship Country', width: 130 }
        ],
        pageSettings: { pageCount: 2 }
    });
    grid.appendTo('#Grid');
};
