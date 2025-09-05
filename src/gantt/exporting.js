this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.editingData,
        dateFormat: 'MMM dd, y',
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            parentID: 'ParentId',
            resourceInfo: 'resources'
        },
        columns: [
            { field: 'TaskID', width: 80 },
            { field: 'TaskName', width: 250 },
        ],
        allowExcelExport: true,
        allowPdfExport: true,
        toolbar: ['ExcelExport', 'CsvExport', 'PdfExport'],
        toolbarClick: function (args) {
            if (args.item.id === 'GanttExport_excelexport') {
                ganttChart.excelExport();
            }
            else if (args.item.id === 'GanttExport_csvexport') {
                ganttChart.csvExport();
            } else if (args.item.id === 'GanttExport_pdfexport') {
                ganttChart.pdfExport();
            }
        },
        allowSelection: true,
        gridLines: 'Both',
        height: '650px',
        rowHeight:46,
        taskbarHeight:25,
        treeColumnIndex: 1,
        resourceFields: {
            id: 'resourceId',
            name: 'resourceName'
        },
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
            leftLabel: 'TaskName'
        },
        splitterSettings: {
            columnIndex: 2,
        },
        projectStartDate: new Date('03/26/2025'),
        projectEndDate: new Date('09/01/2025'),
    });
    
    ganttChart.appendTo('#GanttExport');
};
