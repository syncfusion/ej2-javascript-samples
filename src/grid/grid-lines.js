this.default = function () {
    var lines = [
        { id: 'Default', type: 'Default' },
        { id: 'Both', type: 'Both' },
        { id: 'None', type: 'None' },
        { id: 'Horizontal', type: 'Horizontal' },
        { id: 'Vertical', type: 'Vertical' }
    ];
    var grid = new ej.grids.Grid({
        dataSource: window.employeeData,
        gridLines: 'Default',
        columns: [
            { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 125 },
            { field: 'FirstName', headerText: 'Name', width: 125 },
            { field: 'Title', headerText: 'Title', width: 180 },
            {
                field: 'HireDate', headerText: 'Hire Date', textAlign: 'Right',
                width: 135, format: { skeleton: 'yMd', type: 'date' }
            }
        ]
    });
    grid.appendTo('#Grid');

    var dropDownListObject = new ej.dropdowns.DropDownList({
        dataSource: lines,
        fields: { text: 'type', value: 'id' },
        value: 'Default',
        change: function (e) {
            grid.gridLines = e.value;
            grid.dataBind();
            grid.refresh();
        },
    });
    dropDownListObject.appendTo('#ddlelement');
};