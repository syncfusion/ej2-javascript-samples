this.default = function () {
    var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: window.sampleData,
        height: '900',
        childMapping: 'subtasks',
        treeColumnIndex: 1,
        selectionSettings: { type: 'Multiple' },
        editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Row' },
        columns: [
            { field: 'taskID', headerText: 'Task ID', isPrimaryKey: true, width: 90, textAlign: 'Right' },
            { field: 'taskName', headerText: 'TaskName', textAlign: 'Left', width: 230, validationRules: { required: true } },
            { field: 'startDate', headerText: 'Start Date', format: 'yMd', width: 120, textAlign: 'Right', editType: 'datepickeredit' },
            { field: 'progress', headerText: 'Progress', width: 130, textAlign: 'Right',
                editType: 'numericedit', edit: { params: {  format: 'n'}}
            },
        ],
    });
    treeGridObj.appendTo('#Grid');
};