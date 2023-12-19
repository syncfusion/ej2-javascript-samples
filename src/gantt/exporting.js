this.default = function () {
    var isFitToWidth;
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
                    day: new Date('04/02/2019'),
                }, {
                    day: new Date('04/09/2019'),
                    label: 'Research phase'
                }, {
                    day: new Date('04/30/2019'),
                    label: 'Design phase'
                }, {
                    day: new Date('05/23/2019'),
                    label: 'Production phase'
                }, {
                    day: new Date('06/20/2019'),
                    label: 'Sales and marketing phase'
                }
            ],
            holidays: [
                {
                    from: new Date('04/04/2019'),
                    to: new Date('04/04/2019'),
                    label: 'Local Holiday'
                }, {
                    from: new Date('04/19/2019'),
                    to: new Date('04/19/2019'),
                    label: 'Good Friday'
                }, {
                    from: new Date('04/30/2019'),
                    to: new Date('04/30/2019'),
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
                var exportProperties = {
                    fitToWidthSettings: {       
                        isFitToWidth: isFitToWidth,       
                    }       
                };
                ganttChart.pdfExport(exportProperties);
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
        projectStartDate: new Date('03/25/2019'),
        projectEndDate: new Date('07/28/2019'),
    });
    
    ganttChart.appendTo('#GanttExport');

    var taskbarDragDrop = new ej.buttons.Switch({ value: 'fitToWidth', change: dragDropChange});
    taskbarDragDrop.appendTo('#checked');

    function dragDropChange(args) {
        if (args.checked) {
            isFitToWidth = true;
        } else {
            isFitToWidth = false;
        }
    }
};
