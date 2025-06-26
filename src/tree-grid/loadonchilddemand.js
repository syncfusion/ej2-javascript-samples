this.default = function () {
    var data = new ej.data.DataManager({
        url: 'https://services.syncfusion.com/js/production/api/TreeUrlDataSource',
        adaptor: new ej.data.UrlAdaptor(),
        crossDomain: true
    });
    var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: data,
        hasChildMapping: 'isParent',
        idMapping: 'TaskID',
        parentIdMapping: 'ParentValue',
        expandStateMapping: 'IsExpanded',
        height: 450,
        enableVirtualization: true,
        loadChildOnDemand: true,
        pageSettings: { pageSize: 20 },
        treeColumnIndex: 1,
        columns: [
            { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 120 },
            { field: 'TaskName', headerText: 'Task Name', width: 150 },
            { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 120, format: { skeleton: 'yMd', type: 'date' } },
            { field: 'EndDate', headerText: 'End Date', textAlign: 'Right', width: 120, format: { skeleton: 'yMd', type: 'date' } },
            { field: 'Duration', headerText: 'Duration', width: 110, textAlign: 'Right' },
            { field: 'Progress', headerText: 'Progress', width: 110 },
            { field: 'Priority', headerText: 'Priority', width: 130 }
        ]
    });
    treeGridObj.appendTo('#TreeGrid');
};
