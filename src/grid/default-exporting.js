this.default = function () {
    var refresh;
    var grid = new ej.grids.Grid({
        dataSource: window.orderDatas,
        allowExcelExport: true,
        allowPdfExport: true,
        allowPaging: true,
        allowGrouping: true,
        toolbar: ['ExcelExport', 'PdfExport', 'CsvExport'],
        groupSettings: { showDropArea: false, columns: ['ShipCountry'] },
        pageSettings: { pageCount: 5 },
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
            { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
            { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' },
            { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
            { field: 'ShipCountry', visible: false, headerText: 'Ship Country', width: 150 },
            { field: 'ShipCity', visible: false, headerText: 'Ship City', width: 150 }
        ],
        aggregates: [{
            columns: [{
                type: 'Sum',
                field: 'Freight',
                format: 'C2',
                groupFooterTemplate: 'Total freight: ${Sum}'
            }]
        }],
        load: function() {
            refresh = grid.refreshing;
        },
        dataBound: function() {
            if (refresh) {
                grid.groupColumn('ShipCountry');
                refresh = false;
            }
        },
    });
    grid.appendTo('#Grid');
    grid.toolbarClick = function (args) {
        if (args.item.id === 'Grid_pdfexport') {
            grid.pdfExport();
        }
        if (args.item.id === 'Grid_excelexport') {
            grid.excelExport();
        }
        if (args.item.id === 'Grid_csvexport') {
            grid.csvExport();
        }
    };
};