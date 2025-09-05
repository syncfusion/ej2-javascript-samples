this.default = function () {
    var indicatortypes = [
        { id: 'Shimmer', type: 'Shimmer' },
        { id: 'Spinner', type: 'Spinner' },
    ];
    function isFluent2OrBootstrap() {
        // Check for Bootstrap 5 or Bootstrap 5 dark theme
        return document.body.classList.contains('bootstrap5.3') || document.body.classList.contains('bootstrap5.3-dark') ||
        document.body.classList.contains('fluent2') || document.body.classList.contains('fluent2-dark') || document.body.classList.contains('fluent2-highcontrast');
    }
    
    if (isFluent2OrBootstrap) {
        var indicator = document.getElementById('indicator');
        indicator.style.width = '103%';
    }
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.virtualData,
        treeColumnIndex: 1,
        height: '650px',
        rowHeight:46,
        taskbarHeight:25,
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
            { field: 'TaskName', width:'200px'},
            { field: 'StartDate',width: 170 },
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
        width: '125px',
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