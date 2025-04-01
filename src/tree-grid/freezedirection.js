this.default = function () {
    var alertDialogObj = new ej.popups.Dialog({
        header: 'Frozen',
        content: 'Atleast one Column should be in movable',
        showCloseIcon: false,
        target: '.control-section',
        buttons: [{
            click: alertDlgBtnClick, buttonModel: { content: 'OK', isPrimary: true }
        }],
        width: '300px',
        visible: false,
        animationSettings: { effect: 'None' }
    });
    alertDialogObj.appendTo('#alertDialog');
    function alertDlgBtnClick() {
        alertDialogObj.hide();
    }
    var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: window.sampleData,
        childMapping: 'subtasks',
        treeColumnIndex: 1,  
        allowSorting: true,
        allowSelection: false,
        height: 410,
        columns: [
            { field: 'taskID', headerText: 'Task ID', textAlign: 'Right', width: 100,freeze: 'Left'  },
            { field: 'taskName', headerText: 'Task Name', width: 250 },
            { field: 'startDate', headerText: 'Start Date', width: 130, textAlign: 'Right',
                type: 'date', format: { type: 'dateTime', format: 'dd/MM/yyyy' } },
            { field: 'endDate', headerText: 'End Date', width: 150, textAlign: 'Right',
                type: 'date', format: { type: 'dateTime', format: 'dd/MM/yyyy' } },
            { field: 'duration', headerText: 'Duration', textAlign: 'Right', width: 130 },
            { field: 'progress', headerText: 'Progress', textAlign: 'Right', width: 130 },
            { field: 'priority', headerText: 'Priority', textAlign: 'Left', width: 160 },
            { field: 'designation', headerText: 'Designation', textAlign: 'Left', width: 190 },
            { field: 'employeeID', headerText: 'EmployeeID', textAlign: 'Left', width: 120 },
            { field: 'approved', headerText: 'Approved', width: 140, displayAsCheckBox: true, textAlign: 'Left',freeze: 'Right' }
        ]
    });
    treeGridObj.appendTo('#TreeGrid');

    var columnNames = [
        { id: 'taskID', name: 'Task ID' },
        { id: 'taskName', name: 'Task Name' },
        { id: 'startDate', name: 'Start Date' },
        { id: 'endDate', name: 'End Date' },
        { id: 'duration', name: 'Duration' },
        { id: 'progress', name: 'Progress' },
        { id: 'priority', name: 'Priority' },
        { id: 'designation', name: 'Designation' },
        { id: 'employeeID', name: 'Employee ID' },
        { id: 'approved', name: 'Approved' }
    ];
    var directions = [
        { id: 'Left', name: 'Left' },
        { id: 'Right', name: 'Right' },
        { id: 'Center', name: 'Center' }
    ];

    var refresh = true;
    var columnDropDown = new ej.dropdowns.DropDownList({
        dataSource: columnNames,
        fields: { text: 'name', value: 'id' },
        value: 'taskID',
        change: function(e) {
            var columnName = e.value;
            var column = treeGridObj.getColumnByField(columnName);
            var value = column.freeze === undefined ? 'Center' : column.freeze;
            refresh = directionDropDown.value === value;
            directionDropDown.value = value;
        }
    });
    columnDropDown.appendTo('#column');

    var directionDropDown = new ej.dropdowns.DropDownList({
        dataSource: directions,
        fields: { text: 'name', value: 'id' },
        value: 'Left',
        change: function(e) {
            if (refresh) {
                var columnName = document.getElementById("column").ej2_instances[0].value;
                var mvblColumns = treeGridObj.getMovableColumns();
                if (mvblColumns.length === 1 && columnName === mvblColumns[0].field && e.value !== mvblColumns[0].freeze) {
                    alertDialogObj.show(); refresh = false; directionDropDown.value = "Center"; directionDropDown.refresh();
                } else {
                    var columns = treeGridObj.getColumns();
                    var column = columns.find(function (col) {
                        return col.field === columnName;
                    });
                    if (column) {
                        column.freeze = e.value === 'Center' ? undefined : e.value;
                    }
                    treeGridObj.columns = columns;
                }
            }
            refresh = true;
        }
    });
    directionDropDown.appendTo('#FreezeDirection');
};


