this.default = function () {
    var data = new ej.data.DataManager({
        url: 'https://services.syncfusion.com/js/production/api/GanttLoadOnDemand',
        adaptor: new ej.data.WebApiAdaptor(),
        crossDomain: true
    });
    var ganttChart = new ej.gantt.Gantt({
        dataSource: data,
        loadChildOnDemand: true,
        taskFields: {
            id: 'taskId',
            name: 'taskName',
            startDate: 'startDate',
            endDate: 'endDate',
            duration: 'duration',
            progress: 'progress',
            hasChildMapping: 'isParent',
            parentID: 'parentID'
        },
        columns: [
            { field: 'taskId', headerText: 'Task ID',width: 130},
            { field: 'taskName', headerText: 'Task Name', allowReordering: false },
            { field: 'startDate', headerText: 'Start Date', allowSorting: false },
            { field: 'duration', headerText: 'Duration', allowEditing: false },
            { field: 'progress', headerText: 'Progress', allowFiltering: false },
        ],
        allowSelection: true,
        enableVirtualization: true,
        splitterSettings: {
            columnIndex: 3,
        },
        tooltipSettings: {
            showTooltip: true
        },
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
        treeColumnIndex: 1,
        height: '650px',
        rowHeight:46,
        taskbarHeight:25,
        projectStartDate: new Date('01/02/2000'),
        projectEndDate: new Date('12/01/2002'),
        });
    ganttChart.appendTo('#LoadOnDemand');
};
