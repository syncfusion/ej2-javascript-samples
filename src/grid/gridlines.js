this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.employeeData,
        gridLines: 'default',
        columns: [
            { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'right', width: 125 },
            { field: 'FirstName', headerText: 'Name', width: 125 },
            { field: 'Title', headerText: 'Title', width: 180 },
            {
                field: 'HireDate', headerText: 'Hire Date', textAlign: 'right',
                width: 135, format: { skeleton: 'yMd', type: 'date' }
            }
        ]
    });
    grid.appendTo('#Grid');
    document.getElementById('ddl').onchange = function () {
        var ddl = document.getElementById('ddl');
        grid.gridLines = ddl.value;
        grid.refresh();
    };
};