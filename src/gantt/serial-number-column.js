this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.SerialNumberData,
        allowSorting: true,
        allowFiltering: true,
        enableContextMenu: true,
        enableSerialNumber: true, 
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            parentID: 'ParentId'
        },
        treeColumnIndex: 2,
        editSettings: {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        },
        columns: [
            { field: 'TaskID', headerText: 'Task ID', visible: false },
            { field: 'SerialNumber', headerText: 'S.No', width: '100px', allowFiltering: false },
            { field: 'TaskName', headerText: 'Task Name', allowReordering: false, width: '280px'  },
            { field: 'StartDate', headerText: 'Start Date', width: '140px'  },
            { field: 'Predecessor', headerText: 'Predecessor', width: '190px' },
            { field: 'Duration', headerText: 'Duration', allowEditing: false , width: '130px'},
            { field: 'Progress', headerText: 'Progress'}
        ],
        toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'Indent', 'Outdent', 'ExpandAll', 'CollapseAll', 'Search'],
        allowSelection: true,
        splitterSettings: {
            columnIndex: 2
        },
        selectionSettings: {
            mode: 'Row',
            type: 'Single',
            enableToggle: false
        },
        tooltipSettings: {
            showTooltip: true
        },
        filterSettings: {
            type: 'Menu'
        },
        gridLines: "Both",
        highlightWeekends: true,
        timelineSettings: {
            showTooltip: true,
            topTier: {
                unit: 'Week',
                format: 'dd/MM/yyyy'
            },
            bottomTier: {
                unit: 'Day',
                count: 1
            }
        },
        labelSettings: {
            taskLabel: '${Progress}%'
        },
        allowRowDragAndDrop: true,
        allowTaskbarDragAndDrop: true,
        height: '650px',
        rowHeight: 46,
        taskbarHeight: 25,
        allowUnscheduledTasks: true,
        projectStartDate: new Date('03/30/2025'),
        projectEndDate: new Date('05/30/2025')
    });
    ganttChart.appendTo('#SerialNum');

};