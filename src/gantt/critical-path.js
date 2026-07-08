this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.criticalPathData,
        height: '650px',
        rowHeight: 46,
        taskbarHeight: 25,
        enableCriticalPath: true,
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
        editSettings: {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        },
        treeColumnIndex: 1,
        toolbar: ['Add','Edit','Delete','CriticalPath'],
        columns: [
            { field: 'TaskID', width: 80 },
            { field: 'TaskName', headerText: 'Name', width: 250 },
            { field: 'StartDate' },
            { field: 'EndDate' },
            { field: 'Duration' },
            { field: 'Predecessor' },
            { field: 'Progress' }
        ],
        labelSettings: {
            rightLabel: 'TaskName'
        },
        eventMarkers: [
            {
                day: new Date('2025-04-02'),
                cssClass: 'e-custom-event-marker',
                label: 'Project planning and kickoff',
                top: '138px'
            }
        ],
        splitterSettings: {
            columnIndex: 2
        },
        timelineSettings: {
            viewEndDate: new Date('06/07/2025'),
        },
        projectStartDate: new Date('03/30/2025')
    });
    ganttChart.appendTo('#CriticalPath');
};
