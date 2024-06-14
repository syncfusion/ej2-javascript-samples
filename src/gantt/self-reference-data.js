this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.selfData,
        height: '450px',
        allowSelection: true,
        highlightWeekends: true,
        treeColumnIndex: 1,
        taskFields: {
            id: 'taskID',
            name: 'taskName',
            startDate: 'startDate',
            endDate: 'endDate',
            duration: 'duration',
            progress: 'progress',
            dependency: 'predecessor',
            parentID: 'parentID'
        },
        columns: [
            { field: 'taskID', width: 80 },
            { field: 'taskName', width: 250 },
            { field: 'startDate' },
            { field: 'endDate' },
            { field: 'duration' },
            { field: 'predecessor' },
            { field: 'progress' },
        ],
        labelSettings: {
            leftLabel: 'taskName'
        },
        splitterSettings: {
            columnIndex: 2
        },
        projectStartDate: new Date('01/28/2024'),
        projectEndDate: new Date('03/10/2024')
    });
    ganttChart.appendTo('#SelfData');
};