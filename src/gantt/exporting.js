this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: editingData,
        dateFormat: 'MMM dd, y',
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
        allowExcelExport: true,
        toolbar: ['ExcelExport', 'CsvExport'],
        toolbarClick: function (args) {
            if (args.item.id === 'GanttExport_excelexport') {
                ganttChart.excelExport();
            }
            else if (args.item.id === 'GanttExport_csvexport') {
                ganttChart.csvExport();
            }
        },
        allowSelection: true,
        gridLines: 'Both',
        height: '450px',
        treeColumnIndex: 1,
        resourceNameMapping: 'resourceName',
        resourceIDMapping: 'resourceId',
        resources: editingResources,
        highlightWeekends: true,
        timelineSettings: {
            topTier: {
                unit: 'Week',
                format: 'MMM dd, y',
            },
            bottomTier: {
                unit: 'Day',
            },
        },
        labelSettings: {
            leftLabel: 'TaskName',
            rightLabel: 'resources'
        },
        projectStartDate: new Date('03/25/2019'),
        projectEndDate: new Date('07/28/2019'),
    });
    ganttChart.appendTo('#GanttExport');
};