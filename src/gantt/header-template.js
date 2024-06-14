this.default = function () {
   var ganttChart = new ej.gantt.Gantt({
        dataSource: window.templateData,
        height: '450px',
        highlightWeekends: true,
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            resourceInfo: 'resources',
            dependency: 'Predecessor',
            child: 'subtasks'
        },
        columns: [
            { field: 'TaskName', headerText: 'Job Name', headerTemplate: '#projectName', width: 250 },
            { field: 'StartDate', headerTemplate: '#dateTemplate' },
            { field: 'resources', headerText: 'Resources', headerTemplate: '#resource', width: 150 },
            { field: 'Duration', headerTemplate: '#durationTemplate' },
            { field: 'Progress', headerTemplate: '#progressTemplate' }
        ],
        labelSettings: {
            leftLabel: 'TaskName'
        },
        splitterSettings: {
            columnIndex: 4
        },
        resourceFields: {
            id: 'resourceId',
            name: 'resourceName'
        },
        resources: editingResources,
        projectStartDate: new Date('03/24/2024'),
        projectEndDate: new Date('07/06/2024')
     });
    ganttChart.appendTo('#HeaderTemplate');
};