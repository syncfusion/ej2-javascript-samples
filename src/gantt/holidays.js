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
        holidays: [
            {
                from: new Date('04/04/2019'),
                to: new Date('04/04/2019'),
                label: 'Local Holiday'
            }, {
                from: new Date('04/19/2019'),
                to: new Date('04/19/2019'),
                label: 'Good Friday'
            }, {
                from: new Date('04/30/2019'),
                to: new Date('04/30/2019'),
                label: 'Release Holiday'
            }, 
        ],
        labelSettings: {
            leftLabel: 'TaskName'
        },
        projectStartDate: new Date('03/24/2019'),
        projectEndDate: new Date('07/06/2019')
     });
    ganttChart.appendTo('#Holidays');
};