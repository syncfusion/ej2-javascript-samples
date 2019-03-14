this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: projectNewData,
        height: '450px',
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
        eventMarkers: [
            {
                day: new Date('04/09/2019'),
                label: 'Research phase'
            }, {
                day: new Date('04/30/2019'),
                label: 'Design phase'
            }, {
                day: new Date('05/23/2019'),
                label: 'Production phase'
            }, {
                day: new Date('06/20/2019'),
                label: 'Sales and marketing phase'
            }
        ],
        labelSettings: {
            leftLabel: 'TaskName'
        },
     });
    ganttChart.appendTo('#Default');
};