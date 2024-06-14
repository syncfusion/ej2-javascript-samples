var instance = new ej.base.Internationalization();
this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.employeeData,
        detailTemplate: '#detailtemplate',
        toolbar: ['ExcelExport', 'PdfExport'],
        allowPdfExport: true,
        allowExcelExport: true,
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'Excel' },
        toolbarClick: toolbarClick,
        exportDetailTemplate: exportDetailTemplate,
        height: 335,
        width: 'auto',
        columns: [
            { field: 'FirstName', headerText: 'First Name', width: 110 },
            { field: 'LastName', headerText: 'Last Name', width: 110 },
            { field: 'Title', headerText: 'Title', width: 240 },
            { field: 'Country', headerText: 'Country', width: 180 }
        ]
    });
    grid.appendTo('#Grid');

    window.format = function (value) {
        return instance.formatDate(value, { skeleton: 'yMd', type: 'date' });
    };

    function toolbarClick(args) {
        if (args.item.id === 'Grid_excelexport') {
            grid.excelExport({ hierarchyExportMode: 'All' });
        }
        if (args.item.id === 'Grid_pdfexport') {
            grid.pdfExport({ hierarchyExportMode: 'All' });
        }
    }

    function exportDetailTemplate(args) {
        args.value = {
            columnCount: 3,
            rows: [
                {
                    cells: [
                        {
                            index: 0, rowSpan: 4, image: args.action === 'excelexport' ? {
                                base64: args.parentRow.data.EmployeeImage,
                                height: 80, width: 80
                            } : { base64: args.parentRow.data.EmployeeImage, width: 80 }
                        },
                        { index: 1, value: 'First Name: ' + args.parentRow.data.FirstName },
                        { index: 2, value: 'Postal Code: ' + args.parentRow.data.PostalCode }
                    ]
                },
                {
                    cells: [
                        { index: 1, value: 'Last Name: ' + args.parentRow.data.LastName },
                        { index: 2, value: 'City: ' + args.parentRow.data.City }
                    ]
                },
                {
                    cells: [
                        { index: 1, value: 'Title: ' + args.parentRow.data.Title },
                        { index: 2, value: 'Phone: ' + args.parentRow.data.HomePhone }
                    ]
                },
                {
                    cells: [
                        { index: 1, value: 'Address: ' + args.parentRow.data.Address },
                        { index: 2, value: 'HireDate: ' + window.format(args.parentRow.data.HireDate) }
                    ]
                }
            ]
        };
    }
};