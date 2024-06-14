this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.projectNewData,
        height: '450px',
        allowSelection: true,
        highlightWeekends: true,
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'subtasks'
        },
        treeColumnIndex: 1,
        columns: [
            { field: 'TaskID', width: 80 },
            { field: 'TaskName',headerText: 'Name', width: 250 },
            { field: 'StartDate' },
            { field: 'EndDate' },
            { field: 'Duration' },
            { field: 'Predecessor' },
            { field: 'Progress' },
        ],
        eventMarkers: [
            {
                day: new Date('04/02/2024'),               
            }, {
                day: new Date('04/09/2024'),
                label: 'Design phase'
            }, {
                day: new Date('04/19/2024'),
                label: 'Research phase'
            }, {
                day: new Date('05/23/2024'),
                label: 'Production phase'
            }, {
                day: new Date('06/20/2024'),
                label: 'Sales and marketing phase'
            }
        ],
        labelSettings: {
            leftLabel: 'TaskName'
        },
        projectStartDate: new Date('03/24/2024'),
        projectEndDate: new Date('07/06/2024')
     });
    ganttChart.appendTo('#EventMarkers');
};