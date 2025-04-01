this.default = function () {
    var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: window.sampleData,
        childMapping: 'subtasks',
        height: 350,
        treeColumnIndex: 1,
        allowPaging: true,
        pageSettings: { pageSize: 2, pageSizeMode: 'Root' },
        editSettings: {
            allowEditing: true,
            mode: 'Row',
            newRowPosition: 'Child'
        },
        toolbar: ['Edit', 'Update', 'Cancel'],
        enableHover: false,
        rowDataBound: function (args) {
            var key = 'taskID';
            if (dropDownColumns.value.indexOf(args.data[key]) !== -1) {
                ej.base.addClass([args.row], 'disableRow');
            }
            else {
                ej.base.removeClass([args.row], 'disableRow');
            }
        },
        beginEdit: function (args) {
            var key = 'taskID';
            if (dropDownColumns.value.indexOf(args.rowData[key]) !== -1) {
                args.cancel = true;
            }
        },
        columns: [
            {
                field: 'taskID', headerText: 'Task ID', isPrimaryKey: true, textAlign: 'Right',
                validationRules: { required: true, number: true }, width: 100
            },
            { field: 'taskName', headerText: 'Task Name', editType: 'stringedit', width: 220, validationRules: {required: true}   },
            { field: 'startDate', headerText: 'Start Date', textAlign: 'Right', width: 130, editType: 'datepickeredit',
              format: 'yMd', edit: { params: { format:'M/d/yyyy'}}, validationRules: { date: ['M/d/yyyy', 'Please enter a valid date'] } },
            {
                field: 'duration', headerText: 'Duration', textAlign: 'Right', width: 140, editType: 'numericedit',
                validationRules: { number: true, min: 0}, edit: { params: {  format: 'n'}}
            }
        ]
    });
    treeGridObj.appendTo('#TreeGrid');
    ej.dropdowns.MultiSelect.Inject(ej.dropdowns.CheckBoxSelection);
        var dropDownColumns = new ej.dropdowns.MultiSelect({
            dataSource: window.lockRowDropDownData,
            mode: 'CheckBox',
            value: [2, 6],
            width: '140px',
            showDropDownIcon: true,
            popupHeight: '350px',
            select: function (e) {
                treeGridObj.refresh();
            },
            removed: function (e) {
                treeGridObj.refresh();
            }
        });
        dropDownColumns.appendTo('#lockrows');
};
