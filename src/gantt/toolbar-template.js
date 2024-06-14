this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.projectNewData,
        allowFiltering: true,
        height: '450px',
        highlightWeekends: true,
        treeColumnIndex: 1,
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
            { field: 'TaskID', width: 80 },
            { field: 'TaskName', width: 250 },
            { field: 'StartDate' },
            { field: 'EndDate' },
            { field: 'Duration' },
            { field: 'Predecessor' },
            { field: 'Progress' },
        ],
        labelSettings: {
            leftLabel: 'TaskName'
        },
        splitterSettings: {
            columnIndex: 2
        },
        toolbarClick: function (args) {
            if (args.item.text === 'Quick Filter') {
                ganttChart.filterByColumn('TaskName', 'startswith', 'Identify');
            }
            if (args.item.text === 'Clear Filter') {
                ganttChart.clearFiltering();
            }
        },
        toolbar: ['ExpandAll', 'CollapseAll', { text: 'Quick Filter', tooltipText: 'Quick Filter', id: 'Quick Filter', prefixIcon: 'e-quickfilter' }, { text: 'Clear Filter', tooltipText: 'Clear Filter', id: 'Clear Filter' }],
        projectStartDate: new Date('03/24/2024'),
        projectEndDate: new Date('07/06/2024')
    });
    ganttChart.appendTo('#ToolbarTemplate');
};