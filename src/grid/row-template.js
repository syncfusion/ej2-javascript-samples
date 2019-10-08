var instance = new ej.base.Internationalization();
this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.employeeData,
        rowTemplate: '#rowtemplate',
        height: 335,
        width: 'auto',
        columns: [
            { headerText: 'Employee Image', width: 150, textAlign: 'Center', field: 'OrderID' },
            { headerText: 'Employee Details', width: 300, field: 'EmployeeID', textAlign: 'Left' }
        ]
    });
    grid.appendTo('#Grid');

window.format = function (value) {
    return instance.formatDate(value, { skeleton: 'yMd', type: 'date' });
};
};