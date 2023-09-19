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
