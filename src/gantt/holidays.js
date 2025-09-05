this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.projectNewData,
        height: '650px',
        rowHeight:46,
        taskbarHeight:25,
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
            parentID:'ParentId'
        },
        treeColumnIndex: 1,
        columns: [
            { field: 'TaskID', visible:false ,width: 80 },
            { field: 'TaskName',headerText: 'Name', width: 250 },
            { field: 'StartDate' },
            { field: 'EndDate' },
            { field: 'Duration' },
            { field: 'Predecessor' },
            { field: 'Progress' },
        ],
        holidays: [
            {
                from: new Date('03/28/2025'),
                to: new Date('03/28/2025'),
                label: 'Good Friday'
            },{
                from: new Date('03/30/2025'),
                to: new Date('03/30/2025'),
                label: 'Easter Sunday'
            }, {
                from: new Date('05/26/2025'),
                to: new Date('05/26/2025'),
                label: 'Memorial Day'
            }, {
                from: new Date('07/04/2025'),
                to: new Date('07/04/2025'),
                label: 'Independence Day'
            }, 
        ],
        labelSettings: {
            rightLabel: 'TaskName'
        },
        projectStartDate: new Date('03/25/2025'),
        projectEndDate: new Date('07/20/2025')
     });
    ganttChart.appendTo('#Holidays');
};