this.default = function (){
   var ganttChart = new ej.gantt.Gantt({
            dataSource: window.WBSData,
            allowSorting: true,
            enableContextMenu: true,
            enableWBS: true,
            enableAutoWbsUpdate: true,
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency: 'Predecessor',
                parentID: 'ParentId'
            },
            treeColumnIndex: 2,
            editSettings: {
                allowAdding: true,
                allowEditing: true,
                allowDeleting: true,
                allowTaskbarEditing: true,
                showDeleteConfirmDialog: true
            },
            columns: [
                { field: 'TaskID', headerText: 'Task ID', visible: false },
                { field: 'WBSCode', headerText: 'WBS Code',width: 200  },
                { field: 'TaskName', headerText: 'Task Name', allowReordering: false, width: '260px'  },
                { field: 'StartDate', headerText: 'Start Date', width: '140px'  },
                { field: 'WBSPredecessor', headerText: 'WBS Predecessor',width: '190px' },
                { field: 'Duration', headerText: 'Duration', allowEditing: false , width: '130px'},
                { field: 'Progress', headerText: 'Progress'},
            ],
            eventMarkers: [
               {
                   day: new Date('04/2/2025'),
                   label: 'Project Initiation'
               }
            ],
            dataBound: function () {
               ganttChart.element.getElementsByClassName('e-span-label')[0].style.top = '125px';
               ganttChart.element.getElementsByClassName('e-gantt-right-arrow')[0].style.top = '131px';
            },
            toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
            allowPdfExport: true,
            allowSelection: true,
            splitterSettings: {
                columnIndex: 4,
            },
            selectionSettings: {
                mode: 'Row',
                type: 'Single',
                enableToggle: false
            },
            tooltipSettings: {
                showTooltip: true
            },
            filterSettings: {
                type: 'Menu'
            },
            allowFiltering: true,
            gridLines: "Both",
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
            labelSettings: {
                taskLabel: '${Progress}%'
            },
            height: '650px',
            rowHeight:46,
            taskbarHeight:25,
            allowUnscheduledTasks: true,
            projectStartDate: new Date('03/30/2025'),
            projectEndDate: new Date('05/30/2025'),
        });
    ganttChart.appendTo('#ColumnWbs');
    var columnAutoUpdate = new ej.buttons.Switch({ value: 'autoUpdateWbs', checked: true, change: autoUpdate });
    columnAutoUpdate.appendTo('#unchecked');
    function autoUpdate(args) {
        var gantt =document.getElementsByClassName('e-gantt')[0].ej2_instances[0];
        if (args.checked) {
            gantt.enableAutoWbsUpdate = true;
        } else {
            gantt.enableAutoWbsUpdate = false;
        }
    }
};
