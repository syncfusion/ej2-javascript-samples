this.default = function () {
    var columns = [
        { field: 'TaskID', headerText: 'Player Jersey', validationRules: { required: true, number: true }, width: 140, textAlign: 'Right', isPrimaryKey: true },
        { field: 'FIELD1', headerText: 'Player Name', validationRules: { required: true }, width: 140 },
        { field: 'FIELD2', headerText: 'Year', width: 120, textAlign: 'Right' },
        { field: 'FIELD3', headerText: 'Stint', width: 120, textAlign: 'Right' },
        { field: 'FIELD4', headerText: 'TMID', width: 120, textAlign: 'Right' }
    ];
    if (!window.virtualData.length) {
        window.dataSource();
    }
    var treegrid = new ej.treegrid.TreeGrid({
        dataSource: window.virtualData,
        enableVirtualization: true,
        height: 400,
        treeColumnIndex: 1,
        enableVirtualMaskRow: true,
        childMapping: 'Crew',
        editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Row', newRowPosition: 'Child' },
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Indent', 'Outdent'],
        columns: columns
    });
    treegrid.appendTo('#TreeGrid');
};
