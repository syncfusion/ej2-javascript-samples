this.default = function () {
    var elem;
    var autoCompleteObj;
    var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: window.sampleData,
        childMapping: 'subtasks',
        treeColumnIndex: 1,
        height: 400,
        editSettings: {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            mode: 'Row',
            newRowPosition: 'Below'
        },
        toolbar: ['Add','Edit', 'Delete', 'Update', 'Cancel',],
        columns: [
            {
                field: 'taskID', headerText: 'Task ID', isPrimaryKey: true, textAlign: 'Right',
                validationRules: { required: true, number: true }, width: 80
            },
            { field: 'taskName', headerText: 'Task Name', editType: 'stringedit', validationRules: { required: true }, edit: {
                    create: function () {
                        elem = document.createElement('input');
                        return elem;
                    },
                    read: function () {
                        return autoCompleteObj.value;
                    },
                    destroy: function () {
                        autoCompleteObj.destroy();
                    },
                    write: function (args) {
                        autoCompleteObj = new ej.dropdowns.AutoComplete({
                            dataSource: treeGridObj.grid.dataSource,
                            fields: { value: 'taskName' },
                            value: args.rowData[args.column.field]
                        });
                        autoCompleteObj.appendTo(elem);
                    }
                },
                width: 190 },
            { field: 'startDate', headerText: 'Start Date', textAlign: 'Right', width: 155, editType: 'datepickeredit',
                format: 'yMd', edit: { params: { format:'M/d/yyyy'}}, validationRules: { date: ['M/d/yyyy', 'Please enter a valid date'] }},
            {
                field: 'duration', headerText: 'Duration', textAlign: 'Right', width: 140, editType: 'numericedit',
                validationRules: { number: true, min: 0 }, edit: { params: { format: 'n' } }
            },
            {
                field: 'progress', headerText: 'Progress', textAlign: 'Right', width: 150,
                editType: 'numericedit', validationRules: { number: true, min: 0 }, edit: { params: {  format: 'n'}}
            },
            {
            field: 'priority', headerText: 'Priority', width: 130,
            editType: 'stringedit', validationRules: { required: true }
             }
        ]
    });
    treeGridObj.appendTo('#TreeGrid');
};