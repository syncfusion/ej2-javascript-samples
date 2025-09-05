this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.editingData,
        height: '650px',
        rowHeight:46,
        taskbarHeight:25,
        allowSorting: true,
        highlightWeekends: true,
        treeColumnIndex: 1,
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
        columns: [
            { field: 'TaskID' , visible:false},
            { field: 'TaskName', width: 250 },
            { field: 'StartDate' },
            { field: 'EndDate' },
            { field: 'Duration' },
            { field: 'Progress' },
        ],
        labelSettings: {
            leftLabel: 'TaskName'
        },
        splitterSettings: {
            columnIndex: 2
        },
        selectedRowIndex: 0,
        sortSettings: { columns: [{ field: 'TaskName', direction: 'Ascending' }, { field: 'TaskID', direction: 'Ascending' }] },
        projectStartDate: new Date('03/26/2025'),
        projectEndDate: new Date('09/01/2025'),
    });
    ganttChart.appendTo('#Sorting');
};