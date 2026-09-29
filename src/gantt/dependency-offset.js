this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.leadLagOffsetData,
        allowSelection: true,
        editSettings: {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        },
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            parentID: 'ParentID'
        },
        height: '650px',
        rowHeight: 46,
        taskbarHeight: 25,
        treeColumnIndex: 1,
        columns: [
            {
                field: 'TaskID',
                visible: false
            },
            {
                field: 'TaskName',
                headerText: 'Task Name',
                width: 200
            },
            {
                field: 'Predecessor',
                headerText: 'Dependency',
                width: 160
            },
            {
                field: 'StartDate',
                headerText: 'Start Date',
                width: 130
            },
            {
                field: 'Duration',
                headerText: 'Duration',
                width: 110
            },
            {
                field: 'Progress',
                headerText: 'Progress',
                width: 100
            }
        ],
        labelSettings: {
            leftLabel: 'TaskName'
        },
        splitterSettings: {
            columnIndex: 3
        },
        highlightWeekends: true,
        gridLines: 'Both',
        created: function () {
            if (document.querySelector('.e-bigger')) {
                ganttChart.rowHeight = 48;
                ganttChart.taskbarHeight = 28;
            }
        },
        projectStartDate: new Date('01/01/2026')
    });
    ganttChart.appendTo('#DependencyOffset');
};