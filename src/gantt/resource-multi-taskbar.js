this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.multiTaskbarData,
        resources: resources,
        viewType: 'ResourceView',
        enableMultiTaskbar: true,
        showOverAllocation: true,
        taskType:'FixedWork',
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
        projectStartDate: new Date('03/24/2024'),
        projectEndDate: new Date('05/18/2024')
    });
    ganttChart.appendTo('#ResourceMultiTaskbar');

    var taskbarDragDrop = new ej.buttons.Switch({ value: 'allowTaskbarDragAndDrop', change: dragDropChange});
    taskbarDragDrop.appendTo('#checked');

    var taskbarOverlap = new ej.buttons.Switch({ value: 'allowTaskbarOverlap',checked: true, change: overlapChange });
    taskbarOverlap.appendTo('#unchecked');

    function dragDropChange(args) {
        var gantt =document.getElementsByClassName('e-gantt')[0].ej2_instances[0];
        if (args.checked) {
            gantt.allowTaskbarDragAndDrop = true;
        } else {
            gantt.allowTaskbarDragAndDrop = false;
        }
    }
    function overlapChange(args) {
        var gantt =document.getElementsByClassName('e-gantt')[0].ej2_instances[0];
        if (args.checked) {
            gantt.allowTaskbarOverlap = true;
        } else {
            gantt.allowTaskbarOverlap = false;
        }
    }
};
