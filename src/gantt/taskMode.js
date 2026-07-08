this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.taskModeData,
        allowSorting: true,
        enableContextMenu: true,
        height: '650px',
        rowHeight: 46,
        taskbarHeight: 25,
        allowSelection: true,
        highlightWeekends: true,
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            endDate: 'EndDate',
            dependency:'Predecessor',
            child: 'Children',
            manual: 'isManual'   
        },
        taskMode:'Custom',
        toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'Search'],
        columns: [       
            { field: 'TaskID', visible: false },
            { field: 'TaskName', width: 130 },
            { field: 'isManual', width: 120 }
        ],
        validateManualTasksOnLinking: true,
        treeColumnIndex: 1,
        editSettings: {
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        },
        labelSettings: {
            leftLabel: 'TaskName'
        },
        splitterSettings:{
            columnIndex: 2
        },
        projectStartDate: new Date("02/18/2025"),
        projectEndDate: new Date('03/30/2025')
    });
    ganttChart.appendTo('#TaskMode');
};