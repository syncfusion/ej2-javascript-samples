this.default = function () {
    var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: window.sampleData,
        childMapping: 'subtasks',
        treeColumnIndex: 1,
        editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Cell', newRowPosition: 'Below' },
        height: 400,
        toolbar: ['Add', 'Delete', 'Update', 'Cancel'],
        columns: [
            {
                field: 'taskID', headerText: 'Task ID', isPrimaryKey: true, textAlign: 'Right',
                validationRules: { required: true, number: true}, width: 90
            },
            { field: 'taskName', headerText: 'Task Name', editType: 'stringedit', width: 220, validationRules: {required: true} },
            { field: 'startDate', headerText: 'Start Date', textAlign: 'Right', width: 130, editType: 'datepickeredit',
              format: 'yMd', validationRules: { date: true} },
            {
                field: 'duration', headerText: 'Duration', textAlign: 'Right', width: 100, editType: 'numericedit',
                validationRules: { number: true, min: 0}, edit: { params: {  format: 'n'}}
            }
        ]
    });
    treeGridObj.appendTo('#TreeGrid');
    var dropDownColumns = new ej.dropdowns.DropDownList({
        dataSource: [{ id: 'CellEditing', name: 'Cell Editing' }, { id: 'RowEditing', name: 'Row Editing' }],
        fields: { text: 'name', value: 'id' },
        value: 'CellEditing',
        width: 120,
        change: function (e) {
            if (e.value === 'CellEditing') {
                treeGridObj.editSettings.mode = 'Cell';
                treeGridObj.toolbar = ['Add', 'Delete', 'Update', 'Cancel'];
            }
            else {
                treeGridObj.editSettings.mode = 'Row';
                treeGridObj.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
            }
        }
    });
    dropDownColumns.appendTo('#editmodes');
};
