this.default = function () {
    /**
     * Smart Resource Allocation Sample
     */
    ej.gantt.Gantt.Inject(ej.gantt.Toolbar, ej.gantt.Edit, ej.gantt.Selection);

    let gantt = new ej.gantt.Gantt({
        dataSource: window.tasksCollectionData,
        resources: window.resourceCollectionData,
        viewType: 'ResourceView',
        showOverAllocation: true,
        enableContextMenu: true,
        allowSorting: true,
        allowReordering: true,
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            resourceInfo: 'resourceInfo',
            work: 'work',
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
        toolbar: ['Optimize resource allocation'],
        toolbarClick: toolbarClick,
        labelSettings: {
            rightLabel: 'resources',
            taskLabel: 'Progress'
        },
        splitterSettings: {
            columnIndex: 3
        },
        selectionSettings: {
            mode: 'Row',
            type: 'Single',
            enableToggle: false
        },
        tooltipSettings: {
            showTooltip: true
        },
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
        readOnly: false,
        allowSelection: true,
        highlightWeekends: true,
        treeColumnIndex: 1,
        taskbarHeight: 20,
        rowHeight: 40,
        height: '550px',
    });

    gantt.appendTo('#GanttContainer');

    function toolbarClick(args) {
        if (args.item.text === 'Optimize resource allocation') {
            gantt.showSpinner();
            let input = `I want you to act as an AI assistant tasked with updating resource assignments to tasks in a project management system. Your goal is to ensure that resources are not assigned to tasks that overlap in timeline with another task assigned to the same resource.
          This means checking the start and end dates of all tasks assigned to each resource and making sure no resource is double-booked during any task's duration. If you find that a resource is assigned multiple tasks with overlapping timelines(dates same or conflict any date), replace the conflicting task with another resource that has no tasks overlapping the same dates.
          Aim to reassign tasks in a way that ensures every task is assigned to a resource, minimizing the chance of any task being left unassigned unless it is unavoidable due to scheduling conflicts.
          Below is the list of tasks and their current details. It includes taskCollection Data with "resourceInfo" field as integer array collection which is assigned to respective tasks.This resourceInfo integer will be referencing from resourceId field of separate resourceCollection.
          First rearrange taskCollection based on resourceId, then if any resource tasks are overlapped in timeline, reassign any one of the task to other resource by comparing its existing tasks dates, if that too overlap in timeline try changing other resource, if you cannot reassign any one of the resource due to conflict then left the field blank. return only newly prepared collection as json format if you done any reassignment. I dont want code to achieve this, apply your logic to given taskcollection and resourceCollection and return only result in json format.
            Task Collection Data:` + JSON.stringify(window.tasksCollectionData);
            `Resource Collection Data:` + JSON.stringify(window.resourceCollectionData);
            let aioutput = OpenAiModel(input);
            aioutput.then((result) => {
                let cleanedJsonData = result.replace(/^```json\n|```\n?$/g, '');
                cleanedJsonData = cleanedJsonData.replace(/\n}\n/g, '');
                gantt.dataSource = JSON.parse(cleanedJsonData).TaskCollection;
                gantt.hideSpinner();
            });
        }
    }
};