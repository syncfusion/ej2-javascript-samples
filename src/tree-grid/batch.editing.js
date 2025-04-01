this.default = function () {
    var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: window.sampleData,
        childMapping: 'subtasks',
        treeColumnIndex: 1,
        editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch', newRowPosition: 'Below' },
        height: 400,
        toolbar: ['Add', 'Delete', 'Update', 'Cancel'],
        columns: [
            {
                field: 'taskID', headerText: 'Task ID', isPrimaryKey: true, textAlign: 'Right',
                validationRules: { required: true, number: true}, width: 90
            },
            { field: 'taskName', headerText: 'Task Name', editType: 'stringedit', width: 220, validationRules: {required: true} },
            { field: 'startDate', headerText: 'Start Date', textAlign: 'Right', width: 130, editType: 'datepickeredit',
              format: 'yMd', edit: { params: { format:'M/d/yyyy',}}, validationRules: { date: ['M/d/yyyy', 'Please enter a valid date'] } },
            {
                field: 'duration', headerText: 'Duration', textAlign: 'Right', width: 140, editType: 'numericedit',
                validationRules: { number: true, min: 0}, edit: { params: {  format: 'n'}}
            },
            {
                field: 'progress', headerText: 'Progress', textAlign: 'Right', width: 150,
                editType: 'numericedit', validationRules: { number: true, min: 0 }, edit: { params: {  format: 'n'}}
            },
            {
                field: 'priority', headerText: 'Priority', width: 90,
                editType: 'stringedit', validationRules: { required: true }
            }

        ]
    });
    treeGridObj.appendTo('#TreeGrid');
};
