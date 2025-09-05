this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.projectNewData,
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
            parentID:'ParentId'
        },
        height: '650px',
        rowHeight:46,
        taskbarHeight:25,
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
        labelSettings: {
            leftLabel: 'TaskName'
        },
        splitterSettings: {
            columnIndex: 2
        },
        created:function() {
            if(document.querySelector('.e-bigger'))
            {
                ganttChart.rowHeight=48;
                ganttChart.taskbarHeight=28;
            }
        },
        projectStartDate: new Date('03/26/2025'),
        projectEndDate: new Date('07/20/2025')
    });
    ganttChart.appendTo('#Default');
};