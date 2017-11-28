this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: new ej.data.DataManager(window.employeeData).executeLocal(new ej.data.Query().take(8)),
        columns: [
            {
                headerText: 'Employee Image', textAlign: 'center',
                template: '#template', width: 150
            },
            { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'right', width: 125 },
            { field: 'FirstName', headerText: 'Name', width: 120 },
            { field: 'Title', headerText: 'Title', width: 170 },
            {
                field: 'HireDate', headerText: 'Hire Date', textAlign: 'right',
                width: 135, format: { skeleton: 'yMd', type: 'date' }
            },
            { field: 'ReportsTo', headerText: 'Reports To', width: 120, textAlign: 'right' }
        ],
        width: 'auto',
        height: 359
    });
    grid.appendTo('#Grid');
};