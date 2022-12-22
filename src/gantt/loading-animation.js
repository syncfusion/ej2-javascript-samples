this.default = function () {
    var indicatortypes = [
        { id: 'Shimmer', type: 'Shimmer' },
        { id: 'Spinner', type: 'Spinner' },
    ];
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.virtualData,
        treeColumnIndex: 1,
        height: '450px',
        allowSelection: true,
        allowEditing:true,
        highlightWeekends: true,
        loadingIndicator: { indicatorType: 'Shimmer' },
        allowSorting: true,
        allowFiltering: true,
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            parentID: 'parentID'
        },
        enableVirtualization: true,
        columns: [
            { field: 'TaskID' },
            { field: 'TaskName' },
            { field: 'StartDate' },
            { field: 'Duration' },
            { field: 'Progress' }
        ],
        labelSettings: {
            taskLabel: 'Progress'
        },
        gridLines: 'Both',
        splitterSettings: {
            columnIndex: 2
        },
    });
    ganttChart.appendTo('#loading-animation');
    var dropDownListObject = new ej.dropdowns.DropDownList({
        dataSource: indicatortypes,
        fields: { text: 'type', value: 'id' },
        value: 'Shimmer',
        change: function (e) {
            if (dropDownListObject.value === 'Shimmer') {
                ganttChart.loadingIndicator.indicatorType = 'Shimmer';
                ganttChart.enableVirtualMaskRow = true;
                ganttChart.refresh();
            } else {
                ganttChart.loadingIndicator.indicatorType = 'Spinner';
                ganttChart.enableVirtualMaskRow = false;
                ganttChart.refresh();
            }
        },
    });
    dropDownListObject.appendTo('#indicatorType');
};