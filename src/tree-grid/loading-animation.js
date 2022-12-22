this.default = function () {
    var indicatortypes = [
        { id: 'Shimmer', type: 'Shimmer' },
        { id: 'Spinner', type: 'Spinner' },
    ];
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
        treeColumnIndex: 1,
        height: 400,
        allowPaging: true,
        allowSorting: true,
        loadingIndicator: { indicatorType: 'Shimmer' },
        columns: [
            { field: 'TaskID', headerText: 'Task ID', width: 120, textAlign: 'Right' },
            { field: 'TaskName', headerText: 'Task Name', width: 240, textAlign: 'Left' },
            { field: 'StartDate', headerText: 'Start Date', width: 140, textAlign: 'Right', type: 'date', format: 'yMd' },
            { field: 'Duration', headerText: 'Duration', width: 130, textAlign: 'Right' },
            { field: 'Progress', headerText: 'Progress', width: 130 }
        ],
        pageSettings: { pageCount: 3 }
    });
    treeGridObj.appendTo('#TreeGrid');
    var dropDownListObject = new ej.dropdowns.DropDownList({
        dataSource: indicatortypes,
        fields: { text: 'type', value: 'id' },
        width: '125px',
        value: 'Shimmer',
        change: function (e) {
            if (dropDownListObject.value === 'Shimmer') {
                treeGridObj.loadingIndicator.indicatorType = 'Shimmer';
            } else {
                treeGridObj.loadingIndicator.indicatorType = 'Spinner';
            }
            treeGridObj.refresh();
        },
    });
    dropDownListObject.appendTo('#animation');
};
