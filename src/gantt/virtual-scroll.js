this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.virtualData,
        treeColumnIndex: 1,
        height: '650px',
        rowHeight:46,
        taskbarHeight:25,
        allowSelection: true,
        highlightWeekends: true,
        enableTimelineVirtualization: true,
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
            { field: 'TaskName', width: '200px' },
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
        projectStartDate: new Date('04/01/2025'),
        projectEndDate: new Date('12/31/2030')
    });
    ganttChart.appendTo('#VirtualScroll');
};