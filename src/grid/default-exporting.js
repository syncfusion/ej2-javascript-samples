this.default = function () {
    var isInitial = true;
    var grid = new ej.grids.Grid({
        dataSource: window.employeeDetails,
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'Excel' },
        allowExcelExport: true,
        allowPdfExport: true,
        toolbar: ['ExcelExport', 'PdfExport', 'CsvExport'],
        allowGrouping: true,
        columns: [
            { headerText: "Employee Image", template: "#template1", width: 150, textAlign: 'Center'},
            { field: "FirstName", headerText: "Name", width: 130 },
            { field: "Title", headerText: "Designation", width: 180 },
            { headerText: "Email ID", template: "#template2", width: 180 },
            { field: "HireDate", headerText: "Hire Date", textAlign: "Right", width: 135, format: 'yMd'},
            { field: "Address", allowGrouping: false, width: 180 }
        ],
        dataBound: function() {
            if (isInitial) {
                grid.toolbarModule.toolbar.hideItem(2, true);
                isInitial = false;
            }
        },
        height: 350
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
    function exportQueryCellInfo (args) {
        if (args.column.headerText === 'Employee Image') {
            if (args.name === "excelQueryCellInfo") {
                args.image = { height: 75, base64: args.data.EmployeeImage, width: 75 };
            } else {
                args.image = { base64: args.data.EmployeeImage };
            }
        }
        if (args.column.headerText === 'Email ID') {
            args.hyperLink = {
                target: 'mailto:' + args.data.EmailID,
                displayText: args.data.EmailID
            };
        }
    }
    
    grid.excelQueryCellInfo = grid.pdfQueryCellInfo = exportQueryCellInfo;

    //Render checkbox component for export template column.
    var templateExport = new ej.buttons.CheckBox({ checked: true });
    templateExport.appendTo('#templateExport');

    var fields = ["Employee Image", "Email ID"];
    document.getElementById('templateExport').onclick = function () {
        if (templateExport.checked) {
            grid.showColumns(fields, "headerText");
            grid.toolbarModule.toolbar.hideItem(2, true);
        } else {
            grid.hideColumns(fields, "headerText");
            grid.toolbarModule.toolbar.hideItem(2, false);
        }
    };
};