var instance = new ej.base.Internationalization();
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
                { field: "Name", headerText: "Employee Name" },
                { field: "Address", headerText: "Employee Details", width: "350" },
                { field: "DOB", headerText: "DOB" }
            ]
        });
    treegrid.appendTo('#TreeGrid');
};
window.format = function (value) {
    return instance.formatDate(value, { skeleton: 'yMd', type: 'date' });
};