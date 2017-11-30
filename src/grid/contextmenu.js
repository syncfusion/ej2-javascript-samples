this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.orderData.slice(0, 60),
        allowExcelExport: true,
        allowPdfExport: true,
        allowSorting: true,
        editSettings: { allowAdding: true, allowDeleting: true, allowEditing: true },
        allowPaging: true,
        contextMenuItems: ['autoFit', 'autoFitAll', 'sortAscending', 'sortDescending',
            'copy', 'edit', 'delete', 'save', 'cancel', 'pdfExport', 'excelExport',
            'csvExport', 'firstPage', 'prevPage', 'lastPage', 'nextPage'],
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'right', isPrimaryKey: true },
            { field: 'CustomerName', headerText: 'Customer Name' },
            { field: 'Freight', format: 'C2', textAlign: 'right', editType: 'numericedit' },
            { field: 'ShipName', headerText: 'Ship Name', width: 200 },
            { field: 'ShipCountry', headerText: 'Ship Country', width: 150, editType: 'dropdownedit' },
            { field: 'ShipCity', headerText: 'Ship City', width: 150 }
        ]
    });
    grid.appendTo('#Grid');
};

