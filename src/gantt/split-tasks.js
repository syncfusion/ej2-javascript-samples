this.default = function () {   
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.splitTasksData,
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks',
            segments: 'Segments'
        },
        editSettings: {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        },
        columns: [
            { field: 'TaskID', width: 80 },
            { field: 'TaskName', headerText: 'Job Name', width: '250', clipMode: 'EllipsisWithTooltip' },
            { field: 'StartDate' },
            { field: 'EndDate' },
            { field: 'Duration' },
            { field: 'Progress' },
            { field: 'Predecessor' }
        ],
        toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
        enableContextMenu: true,
        allowSelection: true,
        height: '450px',
        treeColumnIndex: 1,
        highlightWeekends: true,
        splitterSettings: {
            position: "35%"
        },
        labelSettings: {
            leftLabel: 'TaskName',
            taskLabel: '${Progress}%'
        },
        projectStartDate: new Date('01/30/2024'),
        projectEndDate: new Date('03/04/2024')
     });
    ganttChart.appendTo('#SplitTasks');
};
