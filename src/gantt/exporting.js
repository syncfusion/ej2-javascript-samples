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
            child: 'subtasks',
            resourceInfo: 'resources'
        },
        eventMarkers: [
                {
                    day: new Date('04/02/2024'),
                }, {
                    day: new Date('04/09/2024'),
                    label: 'Research phase'
                }, {
                    day: new Date('04/30/2024'),
                    label: 'Design phase'
                }, {
                    day: new Date('05/23/2024'),
                    label: 'Production phase'
                }, {
                    day: new Date('06/20/2024'),
                    label: 'Sales and marketing phase'
                }
            ],
            holidays: [
                {
                    from: new Date('04/04/2024'),
                    to: new Date('04/04/2024'),
                    label: 'Local Holiday'
                }, {
                    from: new Date('04/19/2024'),
                    to: new Date('04/19/2024'),
                    label: 'Good Friday'
                }, {
                    from: new Date('04/30/2024'),
                    to: new Date('04/30/2024'),
                    label: 'Release Holiday'
                },
            ],
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
        height: '450px',
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
        projectStartDate: new Date('03/25/2024'),
        projectEndDate: new Date('07/28/2024'),
    });
    
    ganttChart.appendTo('#GanttExport');
};
