var instance = new ej.base.Internationalization();
this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.employeeData,
        detailTemplate: '#detailtemplate',
        height: 335,
        width: 'auto',
        columns: [
            { field: 'FirstName', headerText: 'First Name', width: 110 },
            { field: 'LastName', headerText: 'Last Name', width: 110 },
            { field: 'Title', headerText: 'Title', width: 150 },
            { field: 'Country', headerText: 'Country', width: 110 }
        ]
    });
    grid.appendTo('#Grid');

window.format = function (value) {
    return instance.formatDate(value, { skeleton: 'yMd', type: 'date' });
};
};