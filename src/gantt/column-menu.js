this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.projectNewData,
        height: '650px',
        rowHeight:46,
        taskbarHeight:25,
        highlightWeekends: true,
        showColumnMenu: true,
        allowFiltering: true,
        allowSorting: true,
        allowResizing: true,
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
        columns: [
            { field: 'TaskID', headerText: 'ID', width: 100 },
            { field: 'TaskName', headerText: 'Name', width: 250 },
            { field: 'StartDate' },
            { field: 'EndDate' },
            { field: 'Duration' },
            { field: 'Progress' },
            { field: 'Predecessor', headerText: 'Dependency', width:190 }
        ],
        columnMenuOpen: columnMenuOpen,
        treeColumnIndex: 1,
        labelSettings: {
            leftLabel: 'TaskName'
        },
        splitterSettings: {
            columnIndex: 4
        },
        projectStartDate: new Date('03/26/2025'),
        projectEndDate: new Date('07/20/2025')
     });
    ganttChart.appendTo('#ColumnMenu');

    function columnMenuOpen(args) {
        if (args.parentItem != null) {
            args.element.querySelectorAll('li')[ganttChart.treeColumnIndex].style.display = 'none';
        }
    }
};