var instance = new ej.base.Internationalization();
window.format = function (value) {
    return instance.formatDate(value, { skeleton: 'yMd', type: 'date' });
};
this.default = function () {
    var treegrid = new ej.treegrid.TreeGrid({
            dataSource: window.textdata,
            childMapping: "Children",
            treeColumnIndex: 0,
            height: 335,
            rowTemplate:'#rowtemplate',
            rowHeight: 83,
            columns: [
                { field: "EmpID", headerText: "Employee ID", width: "180" },
                { field: "Name", headerText: "Employee Name", width:'140' },
                { field: "Address", headerText: "Employee Details", width: "390" },
                { field: "DOB", headerText: "DOB", width: "100" }
            ]
        });
    treegrid.appendTo('#TreeGrid');
};
