this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.orderData.slice(0, 60),
        allowGrouping: true,
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'checkbox' },
        allowPaging: true,
        groupSettings: { showGroupedColumn: true },
        showColumnMenu: true,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 200, textAlign: 'right', showInColumnChooser: false },
            { field: 'CustomerName', headerText: 'Customer Name' },
            { field: 'Freight', format: 'C2', textAlign: 'right', editType: 'numericedit' },
            { field: 'ShipName', headerText: 'Ship Name', width: 300 },
            { field: 'ShipCountry', headerText: 'Ship Country', visible: false, width: 200 },
            { field: 'ShipCity', headerText: 'Ship City', width: 200 }
        ]
    });
    grid.appendTo('#Grid');
};
