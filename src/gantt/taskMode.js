this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.taskModeData,
        allowSorting: true,
        enableContextMenu: true,
        height: '450px',
        allowSelection: true,
        highlightWeekends: true,
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            endDate: 'EndDate',
            dependency:'Predecessor',
            child: 'Children',
            manual: 'isManual',    
        },
        taskMode :'Custom',
        toolbar:['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'Search'],
        columns:[       
            { field: 'TaskID', visible: false},
            {field: 'TaskName'},
            { field: 'isManual'}
        ],
        validateManualTasksOnLinking: true,
        treeColumnIndex: 1,
        editSettings: {
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        },
        labelSettings: {
            leftLabel: 'TaskName'
        },
        splitterSettings:{
            position: "35%"
        },
        projectStartDate: new Date("02/20/2024"),
        projectEndDate: new Date('03/30/2024'),
    });
    ganttChart.appendTo('#TaskMode');
};
    
    
   
   
