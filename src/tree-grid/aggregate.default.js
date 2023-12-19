this.default = function () {
    var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: window.summaryRowData,
        childMapping: 'children',
        allowExcelExport: true,
        allowPdfExport: true,
        treeColumnIndex: 1,
        toolbar: ['PdfExport', 'ExcelExport', 'CsvExport'],
        height: 400,
        columns: [
            { field: 'FreightID', headerText: 'Freight ID', width: 130 },
            { field: 'FreightName', width: 200, headerText: 'Freight Name' },
            { field: 'UnitWeight', headerText: 'Weight Per Unit', type: 'number', width: 140, textAlign: 'Right' },
            { field: 'TotalUnits', headerText: 'Total Units', type: 'number', width: 140, textAlign: 'Right' }
        ],
        aggregates: [{
            columns: [
                {
                    type: 'Max',
                    field: 'UnitWeight',
                    columnName: 'UnitWeight',
                    footerTemplate: 'Maximum: ${Max}'
                },
                {
                type: 'Min',
                field: 'TotalUnits',
                columnName: 'TotalUnits',
                footerTemplate: 'Minimum: ${Min}'
            }]
    }]
    });
    treeGridObj.appendTo('#TreeGrid');
    var checkBoxObj = new ej.buttons.CheckBox({ checked: true, change: onChange });
    checkBoxObj.appendTo('#checked');
    function onChange(args) {
        if (args.checked) {
            treeGridObj.aggregates[0].showChildSummary = true;
            treeGridObj.refresh();
        }
        else {
            treeGridObj.aggregates[0].showChildSummary = false;
            treeGridObj.refresh();
        }
    }

    treeGridObj.toolbarClick = function (args) {
        if (args.item.id === treeGridObj.grid.element.id + '_excelexport') {
          treeGridObj.excelExport();
        } else if (args.item.id === treeGridObj.grid.element.id + '_pdfexport') {
            if (treeGridObj.enableRtl === true && treeGridObj.locale === 'ar') {
                var innercontent = 'You need custom fonts to export Arabic characters, refer this' + 
                    '<a target="_blank" href="https://ej2.syncfusion.com/documentation/treegrid/pdf-export/#add-custom-font-for-pdf-exporting">' + 
                    'documentation section</a>';
                 ej.popups.DialogUtility.alert({content: innercontent});
             }
             else {
                treeGridObj.pdfExport();
             }
        } else if (args.item.id === treeGridObj.grid.element.id + '_csvexport') {
          treeGridObj.csvExport();
        }
    };
};
