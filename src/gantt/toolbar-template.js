this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.projectNewData,
        allowFiltering: true,
        height: '650px',
        rowHeight:46,
        taskbarHeight:25,
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
            parentID: 'ParentId'
        },
        columns: [
            { field: 'TaskID', width: 100 },
            { field: 'TaskName', width: 250 },
            { field: 'StartDate' },
            { field: 'EndDate' },
            { field: 'Duration' },
            { field: 'Predecessor', width: 190 },
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
        projectStartDate: new Date('03/26/2025'),
        projectEndDate: new Date('07/20/2025')
    });
    ganttChart.appendTo('#ToolbarTemplate');
};