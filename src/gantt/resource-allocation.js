this.default = function () {   
    var ganttChart = new ej.gantt.Gantt({
        dataSource: editingData,
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
            resourceInfo: 'resources'
        },       
        resourceNameMapping: 'resourceName',
        resourceIDMapping: 'resourceId',
        resources: editingResources,
        columns: [
            { field: 'TaskID', width: 100 },
            { field: 'TaskName', width: 150, headerText: 'Job Name', clipMode: 'EllipsisWithTooltip' },
            { field: 'resources', width: 200 },
            { field: 'StartDate' },
            { field: 'Duration' },
            { field: 'Progress' },
            { field: 'Predecessor' },
        ],
        splitterSettings: { columnIndex: 3 },
        labelSettings: {
            leftLabel: 'TaskName',
            rightLabel: 'resources'
        },
        projectStartDate: new Date('03/24/2019'),
        projectEndDate: new Date('07/28/2019')
     });
    ganttChart.appendTo('#resource');
};