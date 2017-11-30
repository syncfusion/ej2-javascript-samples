this.default = function () {
    var data = new ej.data.DataManager(window.employeeData).executeLocal(new ej.data.Query().take(15));
    var grid = new ej.grids.Grid({
        dataSource: data,
        columns: [
            { field: 'EmployeeID', headerText: 'Employee ID', width: 120, textAlign: 'right', headerTemplate: '#employeetemplate' },
            { field: 'FirstName', headerText: 'First Name', width: 140 },
            {
                field: 'BirthDate', headerText: 'Birth Date', width: 130, format: 'yMd',
                textAlign: 'right', headerTemplate: '#datetemplate'
            },
            { field: 'City', width: 120 },
            { field: 'Country', headerText: 'Country', width: 140, format: 'yMd', textAlign: 'right' },
        ]
    });
    grid.appendTo('#Grid');
};