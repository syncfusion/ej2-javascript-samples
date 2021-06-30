this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.multiTaskbarData,
        resources: resources,
        viewType: 'ResourceView',
        enableMultiTaskbar: true,
		showOverAllocation: true,
        collapseAllParentTasks: true,
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            dependency: 'Predecessor',
            progress: 'Progress',
            resourceInfo: 'resources',
            work: 'work',
            expandState: 'isExpand',
            child: 'subtasks'
        },
        resourceFields: {
            id: 'resourceId',
            name: 'resourceName',
            unit: 'resourceUnit',
            group: 'resourceGroup'
        },
        editSettings: {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        },
        columns: [
            { field: 'TaskID', visible: false },
            { field: 'TaskName', headerText: 'Name', width: 250 },
            { field: 'work', headerText: 'Work' },
            { field: 'Progress' },
            { field: 'resourceGroup', headerText: 'Group' },
            { field: 'StartDate' },
            { field: 'Duration' },
        ],
        toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
        labelSettings: {
            taskLabel: 'TaskName'
        },
        splitterSettings: {
            columnIndex: 2
        },
        allowResizing: true,
        allowSelection: true,
        highlightWeekends: true,
        treeColumnIndex: 1,
        height: '450px',
        projectStartDate: new Date('03/28/2019'),
        projectEndDate: new Date('05/18/2019')
    });
    ganttChart.appendTo('#ResourceMultiTaskbar');
};