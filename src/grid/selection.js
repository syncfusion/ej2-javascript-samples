this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.employeeData,
        allowSelection: true,
        selectionSettings: { type: 'multiple' },
        enableHover: false,
        columns: [
            { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'right', width: 135 },
            { field: 'FirstName', headerText: 'Name', width: 125 },
            { field: 'Title', headerText: 'Title', width: 180 },
            {
                field: 'HireDate', headerText: 'Hire Date', textAlign: 'right',
                width: 135, format: { skeleton: 'yMd', type: 'date' }
            }
        ]
    });
    grid.appendTo('#Grid');
    document.getElementById('type').onchange = function () {
        var type = document.getElementById('type').value;
        grid.selectionSettings.type = type;
    };
    document.getElementById('mode').onchange = function () {
        var mode = document.getElementById('mode').value;
        grid.selectionSettings.mode = mode;
    };
};