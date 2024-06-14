this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.projectNewData,
        height: '450px',
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
            child: 'subtasks'
        },
        columns: [
            { field: 'TaskID', headerText: 'ID', width: 100 },
            { field: 'TaskName', headerText: 'Name', width: 250 },
            { field: 'StartDate' },
            { field: 'EndDate' },
            { field: 'Duration' },
            { field: 'Progress' },
            { field: 'Predecessor', headerText: 'Dependency' }
        ],
        columnMenuOpen: columnMenuOpen,
        treeColumnIndex: 1,
        labelSettings: {
            leftLabel: 'TaskName'
        },
        splitterSettings: {
            columnIndex: 4
        },
        projectStartDate: new Date('03/24/2024'),
        projectEndDate: new Date('07/06/2024')
     });
    ganttChart.appendTo('#ColumnMenu');

    function columnMenuOpen(args) {
        if (args.parentItem != null) {
            args.element.querySelectorAll('li')[ganttChart.treeColumnIndex].style.display = 'none';
        }
    }
};