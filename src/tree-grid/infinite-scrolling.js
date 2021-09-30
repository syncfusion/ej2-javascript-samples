this.default = function () {
    var columns = [
        { field: 'TaskID', headerText: 'Player Jersey', width: 140, textAlign: 'Right' },
        { field: 'FIELD1', headerText: 'Player Name', width: 140 },
        { field: 'FIELD2', headerText: 'Year', width: 120, textAlign: 'Right' },
        { field: 'FIELD3', headerText: 'Stint', width: 90, textAlign: 'Right' },
        { field: 'FIELD4', headerText: 'TMID', width: 90, textAlign: 'Right' },
        { field: 'FIELD5', headerText: 'LGID', width: 90, textAlign: 'Right' },
        { field: 'FIELD6', headerText: 'GP', width: 90, textAlign: 'Right' },
        { field: 'FIELD7', headerText: 'GS', width: 90, textAlign: 'Right' }
    ];
    if (!window.virtualData.length) {
        window.dataSource();
    }
    var treegrid = new ej.treegrid.TreeGrid({
        dataSource: window.virtualData,
        enableInfiniteScrolling: true,
        pageSettings: { pageSize: 50 },
        height: 400,
        treeColumnIndex: 1,
        childMapping: 'Crew',
        columns: columns
    });
    treegrid.appendTo('#TreeGrid');
};
