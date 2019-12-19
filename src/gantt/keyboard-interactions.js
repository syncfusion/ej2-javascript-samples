this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: projectNewData,
        height: '450px',
        highlightWeekends: true,
        treeColumnIndex: 1,
        allowSelection: true,
        allowKeyboard: true,
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
        columns: [
            { field: 'TaskID', width: 70 },
            { field: 'TaskName', width: 250 },
            { field: 'StartDate' },
            { field: 'EndDate' },
            { field: 'Duration' },
            { field: 'Predecessor' },
            { field: 'Progress' },
        ],
        toolbar: ['Search'],
        editSettings: {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
        },
        labelSettings: {
            leftLabel: 'TaskName'
        },
        splitterSettings: {
            columnIndex: 2
        },
        projectStartDate: new Date('03/24/2019'),
        projectEndDate: new Date('07/06/2019')
    });
    ganttChart.appendTo('#KeyboardNavigation');
};