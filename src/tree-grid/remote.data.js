this.default = function () {
    var data = new ej.data.DataManager({
        url: 'https://ej2services.syncfusion.com/production/web-services/api/SelfReferenceData',
        adaptor: new ej.data.WebApiAdaptor(),
        crossDomain: true
    });
    var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: data,
        hasChildMapping: 'isParent',
        idMapping: 'TaskID',
        parentIdMapping: 'ParentItem',
        height: 400,
        treeColumnIndex: 1,
        allowPaging: true,
        columns: [
            { field: 'TaskID', headerText: 'Task ID', width: 80, textAlign: 'Right' },
            { field: 'TaskName', headerText: 'Task Name', width: 200, textAlign: 'Left' },
            { field: 'StartDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd' },
            { field: 'EndDate', headerText: 'End Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd' },
            { field: 'Duration', headerText: 'Duration', width: 90, textAlign: 'Right' },
            { field: 'Progress', headerText: 'Progress', width: 90 }
        ]
    });
    treeGridObj.appendTo('#TreeGrid');
};