this.default = function () {   
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.resourceData,
        height: '450px',
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
            child: 'subtasks',
            work:'work',
            resourceInfo: 'resources',
            type:'taskType'
        },       
        resources: resourceResources,
        resourceFields: {
            id: 'resourceId',
            name: 'resourceName',
            unit: 'unit'
        },
        taskType:"FixedDuration",
        workUnit:"Hour",
        editSettings: {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        },
        treeColumnIndex: 1,
        columns: [
            { field: 'TaskID', visible: false},
            { field: 'TaskName', headerText: 'Task Name', width: '180'},
            { field: 'resources', headerText: 'Resources', width: '160' },
            { field: 'work', width:'110'},
            { field: 'Duration', width: '100' },
            { field: 'taskType', headerText: 'Task Type', width: '110'}
        ],
        editDialogFields: [
            { type: 'General', headerText: 'General' },
            { type: 'Dependency' },
            { type: 'Resources' }
        ],
        toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
        splitterSettings: { columnIndex: 5.1 },
        labelSettings: {
            rightLabel: 'resources'
        },
        projectStartDate: new Date('03/28/2019'),
        projectEndDate: new Date('07/28/2019')
     });
    ganttChart.appendTo('#resource');
};