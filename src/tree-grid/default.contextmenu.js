this.default = function () {
    var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: window.sampleData,
        childMapping: 'subtasks',
        treeColumnIndex: 1,
        allowExcelExport: true,
        allowPdfExport: true,
        allowSorting: true,
        editSettings: { allowAdding: true, allowDeleting: true, allowEditing: true, mode: 'Row' },
        allowPaging: true,
        pageSettings: { pageSize: 10 },
        contextMenuItems: ['AutoFit', 'AutoFitAll', 'SortAscending', 'SortDescending',
             'Edit', 'Delete', 'Save', 'Cancel', 'PdfExport', 'ExcelExport',
            'CsvExport', 'FirstPage', 'PrevPage', 'LastPage', 'NextPage'],
            columns: [
                { field: 'taskID', headerText: 'Task ID', width: 80, isPrimaryKey: true, textAlign: 'Right', editType: 'numericedit' },
                { field: 'taskName', headerText: 'Task Name', width: 180 },
                { field: 'startDate', headerText: 'Start Date', format: 'yMd', width: 95,
                    editType: 'datepickeredit', textAlign: 'Right' },
                { field: 'endDate', headerText: 'End Date', format: 'yMd', width: 95, editType: 'datepickeredit', textAlign: 'Right' },
                { field: 'duration', headerText: 'Duration', width: 85, textAlign: 'Right', editType: 'numericedit',
                    edit: {params: {format: 'n'}} },
                { field: 'priority', headerText: 'Priority', width: 80 }
            ]
    });
    treeGridObj.appendTo('#TreeGrid');
};