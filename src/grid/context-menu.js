this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.orderDatas,
        allowExcelExport: true,
        allowPdfExport: true,
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'Excel' },
        editSettings: { allowAdding: true, allowDeleting: true, allowEditing: true },
        allowPaging: true,
        contextMenuItems: ['AutoFit', 'AutoFitAll', 'SortAscending', 'SortDescending',
            'Copy', 'Edit', 'Delete', 'Save', 'Cancel', 'PdfExport', 'ExcelExport',
            'CsvExport', 'FirstPage', 'PrevPage', 'LastPage', 'NextPage'],
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right', isPrimaryKey: true },
            { field: 'CustomerName', headerText: 'Customer Name', width: 160 },
            { field: 'Freight', format: 'C2', textAlign: 'Right', width: 120, editType: 'numericedit' },
            { field: 'ShipName', headerText: 'Ship Name', width: 200 },
            { field: 'ShipCountry', headerText: 'Ship Country', width: 150, editType: 'dropdownedit' },
            { field: 'ShipCity', headerText: 'Ship City', width: 150 }
        ]
    });
    grid.appendTo('#Grid');
};

