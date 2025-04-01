this.default = function () {
    var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: window.sampleData,
        childMapping: 'subtasks',
        treeColumnIndex: 1,
        editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog', newRowPosition: 'Below' },
        height: 400,
        toolbar: ['Add', 'Edit', 'Delete','Update','Cancel'],
        columns: [
            {
                field: 'taskID', headerText: 'Task ID', isPrimaryKey: true, textAlign: 'Right',
                validationRules: { required: true, number: true}, width: 120
            },
            {
                field: 'taskName', headerText: 'TaskName', editType: 'stringedit', width: 225,
                validationRules: { required: true}
            },
            {
                field: 'startDate', headerText: 'Start Date', textAlign: 'Right', width: 150,
                editType: 'datepickeredit', format: 'yMd', edit: { params: { format:'M/d/yyyy',}}, validationRules: { date: ['M/d/yyyy', 'Please enter a valid date'] }
            },
            {
                field: 'endDate', headerText: 'End Date', textAlign: 'Right', width: 150,
                editType: 'datepickeredit', format: 'yMd',  edit: { params: { format:'M/d/yyyy',}}, validationRules: { date: ['M/d/yyyy', 'Please enter a valid date'] }
            },
            {
                field: 'duration', headerText: 'Duration', textAlign: 'Right', width: 110,
                editType: 'numericedit', validationRules: { number: true, min: 0}, edit: { params: {  format: 'n'}}
            },
            {
                field: 'progress', headerText: 'Progress', textAlign: 'Right', width: 110,
                editType: 'numericedit', validationRules: { number: true, min: 0}, edit: { params: {  format: 'n'}}
            },
        ]
    });
    treeGridObj.appendTo('#TreeGrid');
};