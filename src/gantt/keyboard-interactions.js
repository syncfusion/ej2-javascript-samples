this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.projectNewData,
        height: '650px',
        rowHeight:46,
        taskbarHeight:25,
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
            parentID: 'ParentId'
        },
        columns: [
            { field: 'TaskID', width: 80 },
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
        projectStartDate: new Date('03/26/2025'),
        projectEndDate: new Date('07/20/2025')
    });
    ganttChart.appendTo('#KeyboardNavigation');
};