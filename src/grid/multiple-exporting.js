this.default = function () {
    var names = ['AROUT', 'BERGS', 'BLONP', 'CHOPS', 'ERNSH'];
    var masterdata = window.customerData.filter(function(e){ 
        return names.indexOf(e.CustomerID) !== -1;
    });
    
    var mastergrid = new ej.grids.Grid({
        dataSource: masterdata,
        allowExcelExport: true,
        allowPdfExport: true,
        exportGrids: ['MasterGrid', 'DetailGrid'],
        toolbar: ['ExcelExport', 'PdfExport'],
        selectedRowIndex: 1,
        columns: [
            { field: 'ContactName', headerText: 'Customer Name', width: 150 },
            { field: 'CompanyName', headerText: 'Company Name', width: 150 },
            { field: 'Address', headerText: 'Address', width: 150 },
            { field: 'Country', headerText: 'Country', width: 150 }
        ],
        rowSelected: rowSelected
    });
    mastergrid.appendTo('#MasterGrid');

    function rowSelected(args) {
         var selRecord = args.data;
         grid.dataSource = window.data.filter(function(record){
             return (record.CustomerName === selRecord.ContactName);
            }).slice(0, 5);
        document.getElementById("key").innerHTML = selRecord.ContactName;
    }

    var grid = new ej.grids.Grid({
        allowSelection: false,
        allowExcelExport: true,
        allowPdfExport: true,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 150, textAlign: 'Right' },
            { field: 'Freight', headerText: 'Freight', width: 150, format: 'C2', textAlign: 'Right' },
            { field: 'ShipName', headerText: 'Ship Name', width: 150 },
            { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
        ]
    });
    grid.appendTo('#DetailGrid');
    var exportCheckbox = new ej.buttons.CheckBox({ checked: true });
    exportCheckbox.appendTo('#multipleExport');
    var newSheetExcelProperties = {
        multipleExport: { type: 'NewSheet' }
    };
    var sameSheetPdfProperties = {
        multipleExport: { type: "AppendToPage", blankSpace: 10 }
    };
    mastergrid.toolbarClick = function (args) {
        if (exportCheckbox.checked) {
            if (args.item.id === 'MasterGrid_excelexport') {
                mastergrid.excelExport({}, true);
            }
            if (args.item.id === 'MasterGrid_pdfexport') {
                mastergrid.pdfExport(sameSheetPdfProperties, true);
            }
        }
        else {
            if (args.item.id === 'MasterGrid_excelexport') {
                mastergrid.excelExport(newSheetExcelProperties, true);
            }
            if (args.item.id === 'MasterGrid_pdfexport') {
                mastergrid.pdfExport({}, true);
            }
        }
    };
};

