this.default = function () {
    var isFitToWidth;
    
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.pdfExportData,
        enableCriticalPath: true,
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
                    day: new Date('04/09/2025'),
                    label: 'Research phase'
                }, 
                {
                    day: new Date('06/20/2025'),
                    label: 'Sales and marketing phase'
                }
            ],
        holidays: [
            {
                from: new Date('04/04/2025'),
                to: new Date('04/04/2025'),
                label: 'Local Holiday'
            }, {
                from: new Date('04/19/2025'),
                to: new Date('04/19/2025'),
                label: 'Good Friday'
            }, {
                from: new Date('04/30/2025'),
                to: new Date('04/30/2025'),
                label: 'Release Holiday'
            },
        ],
        columns: [
            { field: 'TaskID', width: 80 },
            { field: 'TaskName', width: 250 },
            { field: 'StartDate'},
            { field: 'EndDate'},
            { field: 'Progress'},
        ],
        allowExcelExport: true,
        allowPdfExport: true,
        toolbar: ['PdfExport'],
        toolbarClick: function (args) {
             if (args.item.id === 'advanceExport_pdfexport') {     
                var borderWidth = 1;
                var borderColor = new ej.pdfexport.PdfColor(227, 22, 91);
                var pdfpen = new ej.pdfexport.PdfPen(borderColor, borderWidth);
                pdfpen.dashStyle = ej.pdfexport.PdfDashStyle.Dash;
                var exportProperties = {
                    pageSize: 'A2',
                    fileName:"Product Development Report.pdf.pdf",
                    ganttStyle: {
                        eventMarker: {
                            label: {
                                fontColor: new ej.pdfexport.PdfColor(33, 33, 33),
                                fontStyle: ej.pdfexport.PdfFontStyle.Bold,
                                backgroundColor: new ej.pdfexport.PdfColor(253, 191, 100),
                            },
                            lineStyle: pdfpen,
                        },
                        holiday: {
                            fontColor: new ej.pdfexport.PdfColor(33, 33, 33),
                            backgroundColor: new ej.pdfexport.PdfColor(243, 244, 246),
                        }
                    },
                    header: {
                        fromTop: 0,
                        height: 150,
                        contents: [
                          {
                            type: 'Text',
                            value:'Product Development Lifecycle Gantt Chart Report March 2025 - June 2025',
                            position: { x: 20, y: 20 },
                            style: { textBrushColor: '#00008B', fontSize: 24 },
                          },
                          {
                            type: 'Line',
                            style: { penColor: '#00008B', penSize: 2, dashStyle: 'Solid' },
                            points: { x1: 20, y1: 70, x2: 755, y2: 70 }, 
                          },
                        ],
                      },
                    footer: {
                        fromBottom: 160,
                        height: 100,
                        contents: [
                            {
                                type: 'Text',
                                value: "© 2025 Syncfusion Inc. All Rights Reserved.\n" +
                                       "Generated on: " + new Date().toLocaleString('en-US', {
                                            month: 'long',
                                            day: '2-digit',
                                            year: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit',
                                            second: '2-digit',
                                            hour12: true
                                       }),
                                position: { x: 1950, y: 40 },
                                style: { textBrushColor: '#3a435e', fontSize: 20 },
                            }
                        ],
                    },
                    fitToWidthSettings: {       
                        isFitToWidth: isFitToWidth,       
                    }       
                };
                ganttChart.pdfExport(exportProperties);
            }
        },
        pdfQueryTaskbarInfo:pdfQueryTaskbarInfo,
        queryTaskbarInfo:queryTaskbarInfo,
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
            leftLabel: '#leftLabel',
             rightLabel: '#rightLabel'
        },
        splitterSettings: {
            columnIndex: 2,
        },
        projectStartDate: new Date('03/25/2025'),
        projectEndDate: new Date('06/01/2025'),
    });
    
    ganttChart.appendTo('#advanceExport');

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

 var pdfQueryTaskbarInfo =  function(args){
    args.labelSettings.leftLabel.value = args.data.ganttProperties.taskName;
    if (args.data.ganttProperties.resourceNames) {
        args.labelSettings.rightLabel.value = args.data.ganttProperties.resourceNames;
        args.labelSettings.rightLabel.image = [{
            base64: args.data.taskData.resourcesImage, width: 20, height: 20
        }];
        if(args.data.ganttProperties.taskId === 7){
            args.labelSettings.leftLabel.value = 'Custom Label';
            args.labelSettings.leftLabel.fontStyle.fontColor = new ej.pdfexport.PdfColor(142,36,64);
        }
    }
    var theme = document.body.classList.contains('tailwind3-dark') || document.body.classList.contains('fluent2-dark') ||
    document.body.classList.contains('material3-dark') || document.body.classList.contains('bootstrap5.3-dark') ||
    document.body.classList.contains('fluent2-highcontrast') || document.body.classList.contains('fluent2-dark');
    if( theme && args.data.isCritical) {
        args.taskbar.progressColor = new ej.pdfexport.PdfColor(172, 6, 136);
        args.taskbar.taskColor =  args.taskbar.taskBorderColor = new ej.pdfexport.PdfColor(73, 4, 58);
    }
    else if(!theme && args.data.isCritical){
        args.taskbar.progressColor = new ej.pdfexport.PdfColor(176, 0, 138);
        args.taskbar.taskColor = new ej.pdfexport.PdfColor(255, 206, 244);
    }
};
window.getResourceElements = function (value) {
    var out = "";
    var img = document.createElement('img');
    img.height = 20;
    var span = document.createElement('span');
    span.style.marginLeft = "5px";
    span.style.marginRight = "5px";
    for (var index = 0; index < value.length; index++) {
        img.src = 'https://ej2.syncfusion.com/demos/src/gantt/images/' + value[index].resourceName + '.png';
        span.innerHTML = value[index].resourceName;
        out = out + img.outerHTML + span.outerHTML;
    }
    return out;
};
var queryTaskbarInfo = function(args){
    var theme = document.body.classList.contains('tailwind3-dark') || document.body.classList.contains('fluent2-dark') ||
    document.body.classList.contains('material3-dark') || document.body.classList.contains('bootstrap5.3-dark') ||
    document.body.classList.contains('fluent2-highcontrast') || document.body.classList.contains('fluent2-dark');
    if(theme && args.data.isCritical){
        args.taskbarBgColor = "#49043A";
        args.progressBarBgColor = "#AC0688";
    }else if(!theme && args.data.isCritical){
        args.progressBarBgColor = "#B0008A";
        args.taskbarBgColor = "#FFCEF4";
    }
};