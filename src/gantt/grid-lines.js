this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.projectNewData,
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
        gridLines: 'Both',
        labelSettings: {
            leftLabel: 'TaskName'
        },
        splitterSettings: {
            columnIndex: 2
        },
        projectStartDate: new Date('03/24/2024'),
        projectEndDate: new Date('07/06/2024')
    });
    ganttChart.appendTo('#GridLines');

    var dropDownListObject = new ej.dropdowns.DropDownList({
        dataSource: [
            { id: 'Both', type: 'Both' },
            { id: 'Vertical', type: 'Vertical' },
            { id: 'Horizontal', type: 'Horizontal' },
            { id: 'None', type: 'None' }
        ],
        popupWidth: '125px',
        fields: { text: 'type', value: 'id' },
        value: 'Both',
        change: function (e) {
            var lines = e.value;
            ganttChart.gridLines = lines;
            ganttChart.refresh();
        },
    });
    dropDownListObject.appendTo('#lines');
};