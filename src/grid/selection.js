this.default = function () {
    var type = [
        { id: 'Single', type: 'Single' },
        { id: 'Multiple', type: 'Multiple' }
    ];
    var mode = [
        { id: 'Row', mode: 'Row' },
        { id: 'Cell', mode: 'Cell' },
        { id: 'Both', mode: 'Both' }
    ];
    var grid = new ej.grids.Grid({
        dataSource: window.employeeData,
        allowSelection: true,
        selectionSettings: { type: 'Multiple' },
        enableHover: false,
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'Excel' },
        rowSelecting: selectingEvent,
        cellSelecting : selectingEvent,
        columns: [
            { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 150, isPrimaryKey: true },
            { field: 'FirstName', headerText: 'Name', width: 125 },
            { field: 'Title', headerText: 'Title', width: 180 },
            {
                field: 'HireDate', headerText: 'Hire Date', textAlign: 'Right',
                width: 135, format: { skeleton: 'yMd', type: 'date' }, type:'date'
            }
        ]
    });
    grid.appendTo('#Grid');

    function selectingEvent(e) {
        if (grid.selectionSettings.allowColumnSelection) {
            e.cancel = true;
        }
    }

    //Render DropDownList component for selection type.
     var dropDownType = new ej.dropdowns.DropDownList({
        dataSource: type,
        fields: { text: 'type', value: 'id' },
        value: 'Multiple',
        change: function (e) {
            var type = e.value;
            grid.selectionSettings.type = type;
        }
    });
    dropDownType.appendTo('#type');

   //Render DropDownList component for selection type.
    var dropDownMode = new ej.dropdowns.DropDownList({
        dataSource: mode,
        fields: { text: 'mode', value: 'id' },
        value: 'Row',
        change: function (e) {
            var mode = e.value;
            grid.selectionSettings.mode = mode;
        },
    });
    dropDownMode.appendTo('#mode');

    // enable/disable Column Selection
    var columnSelection = new ej.buttons.CheckBox({
        change: function (e) {
            grid.clearSelection();
            if (e.checked) {
                grid.selectionSettings.allowColumnSelection = true;
                dropDownMode.enabled = false;
            } else {
                grid.selectionSettings.allowColumnSelection = false;
                dropDownMode.enabled = true;
            }
        }
    }); 
    columnSelection.appendTo('#columnSelection');
};