this.default = function () {   
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.resourcesData,
        resources: resourceCollection,
        viewType: 'ResourceView',
        showOverAllocation: 'true',
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            resourceInfo: 'resources',
            work: 'work',
            child: 'subtasks'
        },
	taskType:'FixedWork',
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
		toolbarClick: function (args) {
            if (args.item.id === 'showhidebar') {
                ganttChart.showOverAllocation = ganttChart.showOverAllocation ? false : true;
            }
        },
        toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll',
        { text: 'Show/Hide Overallocation', tooltipText: 'Show/Hide Overallocation', id: 'showhidebar' }],
        splitterSettings: { columnIndex: 3 },
        labelSettings: {
            rightLabel: 'resources',
            taskLabel: 'Progress'
        },
        allowResizing: true,
        allowSelection: true,
        highlightWeekends: true,
        treeColumnIndex: 1,
        height: '450px',
        projectStartDate: new Date('03/28/2024'),
        projectEndDate: new Date('05/18/2024')
     });
    ganttChart.appendTo('#ResourceView');
};
