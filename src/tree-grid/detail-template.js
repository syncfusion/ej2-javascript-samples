var instance = new ej.base.Internationalization();
window.format = function (value) {
    return instance.formatDate(value, { skeleton: 'yMd', type: 'date' });
};
this.default = function () {
    var treegrid = new ej.treegrid.TreeGrid({
        dataSource: window.textdata,
        childMapping: 'Children',
        treeColumnIndex: 0,
        detailTemplate: '#detailtemplate',
        height: 335,
        width: 'auto',
        columns: [
            { field: 'Name', headerText: 'First Name', width: '160' },
            { field: 'DOB', headerText: 'DOB', width: '85', type: 'date', format: 'yMd', textAlign: 'Right' },
            { field: 'Designation', headerText: 'Designation', width: '147' },
            { field: 'EmpID', headerText: 'EmployeeID', width: '125'},
            { field: 'Country', headerText: 'Country' , width: '148'},
        ]
    });
treegrid.appendTo('#TreeGrid');
};