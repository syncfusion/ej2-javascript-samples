this.default = function () {
    var collapsedStatePersist = true;
    var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: window.sampleData,
        childMapping: 'subtasks',
        treeColumnIndex: 1,
        height: 400,
        allowExcelExport: true,
        allowPdfExport: true,
        toolbar: ['ExcelExport', 'CsvExport', 'PdfExport'],
        columns: [
            { field: 'taskID', headerText: 'Task ID', width: 70, textAlign: 'Right' },
            { field: 'taskName', headerText: 'Task Name', width: 200, textAlign: 'Left' },
            { field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd' },
            { field: 'endDate', headerText: 'End Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd' },
            { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' },
            { field: 'progress', headerText: 'Progress', width: 80, textAlign: 'Right' },
            { field: 'priority', headerText: 'Priority', width: 90 }
        ],
    });
   treeGridObj.appendTo('#TreeGrid');
   treeGridObj.toolbarClick = function (args) {
   if (args.item.id === 'TreeGrid_gridcontrol_pdfexport') {
        if (treeGridObj.enableRtl === true && treeGridObj.locale === 'ar') {
            dialog.show();
        }
        else {
            var pdfExportProperties = {
                isCollapsedStatePersist: collapsedStatePersist
            };
            treeGridObj.pdfExport(pdfExportProperties);
        }
   }
    if (args.item.id === 'TreeGrid_gridcontrol_excelexport') {
        var excelExportProperties = {
            isCollapsedStatePersist: collapsedStatePersist
        };
        treeGridObj.excelExport(excelExportProperties);
    }
    if (args.item.id === 'TreeGrid_gridcontrol_csvexport') {
        treeGridObj.csvExport();
    }
};
    var checkBoxObj = new ej.buttons.CheckBox({ checked: true, label: 'Persist collapsed state', labelPosition: 'Before', change: onChange });
    checkBoxObj.appendTo('#checked');
    function onChange(args) {
        if (args.checked) {
            collapsedStatePersist = true;
        }
        else {
            collapsedStatePersist = false;
        }
    }
    var dialog = new ej.popups.Dialog({
        showCloseIcon: false,
        buttons: [{
            click: alertDlgBtnClick, buttonModel: { content: 'OK', isPrimary: true }
        }],
        isModal: true,
        content: 'You need custom fonts to export Arabic characters, refer this ' +
            '<a target="_blank" href="https://ej2.syncfusion.com/javascript/documentation/treegrid/pdf-export/pdf-export-options#add-custom-font-for-pdf-exporting">' +
            'documentation section</a>',
        target: document.getElementById('control-section'),
        width: '600px',
        visible: false,
        height: '115px',
    });
    dialog.appendTo('#dialog');
    function alertDlgBtnClick() {
        dialog.hide();
    }
};