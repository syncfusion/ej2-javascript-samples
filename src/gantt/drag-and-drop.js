this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.projectNewData,
        height: '650px',
        rowHeight:46,
        taskbarHeight:25,
        highlightWeekends: true,
        allowRowDragAndDrop: true,
        allowTaskbarDragAndDrop: true,
        editSettings: {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        },
        treeColumnIndex: 1,
        splitterSettings: {
            columnIndex: 3
        },
        selectionSettings: {
            type: 'Multiple'
        },
        columns: [
            { field: 'TaskID', headerText: 'ID', width: 80 },
            { field: 'TaskName', headerText: 'Name', width: 250 },
            { field: 'StartDate' },
            { field: 'EndDate' },
            { field: 'Duration' },
            { field: 'Progress' },
            { field: 'Predecessor', headerText: 'Dependency' }
        ],
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
        labelSettings: {
            leftLabel: 'TaskName'
        },
        projectStartDate: new Date('03/26/2025'),
        projectEndDate: new Date('07/20/2025')
    });
    ganttChart.appendTo('#DragAndDrop');
};