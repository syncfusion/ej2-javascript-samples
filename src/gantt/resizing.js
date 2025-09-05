this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.projectNewData,
        height: '650px',
        rowHeight:46,
        taskbarHeight:25,
        highlightWeekends: true,
        allowResizing: true,
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            parentID: 'ParentId'
        },
        columns: [
            { field: 'TaskID', headerText: 'ID', width: 80, minWidth: 8 },
            { field: 'TaskName', headerText: 'Job Name', width: 250, minWidth: 120, maxWidth: 300 },
            { field: 'StartDate', width: 135, minWidth: 8 },
            { field: 'EndDate', width: 135, minWidth: 8 },
            { field: 'Duration', allowResizing: false, width: 120 },
            { field: 'Progress', headerText: 'Progress', textAlign: 'Right', width: 120, minWidth: 8 },
            { field: 'Predecessor', headerText: 'Dependency', textAlign: 'Left', width: 135, minWidth: 8 }
        ],
        treeColumnIndex: 1,
        labelSettings: {
            rightLabel: 'TaskName'
        },
        splitterSettings: {
            columnIndex: 6
        },
        projectStartDate: new Date('03/30/2025'),
        projectEndDate: new Date('07/20/2025')
     });
    ganttChart.appendTo('#ColumnResize');
};