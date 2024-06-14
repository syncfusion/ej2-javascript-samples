this.default = function () {

    var columnNames = [
        { id: 'TaskID', name: 'ID' },
        { id: 'TaskName', name: 'Name' },
        { id: 'StartDate', name: 'Start Date' },
        { id: 'EndDate', name: 'End Date' },
        { id: 'Duration', name: 'Duration' },
        { id: 'Progress', name: 'Progress' },
        { id: 'Predecessor', name: 'Dependency' }
    ];
    var columnsIndex = [
        { id: '0', name: '1' },
        { id: '1', name: '2' },
        { id: '2', name: '3' },
        { id: '3', name: '4' },
        { id: '4', name: '5' },
        { id: '5', name: '6' },
        { id: '6', name: '7' }
    ];
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.projectNewData,
        height: '450px',
        highlightWeekends: true,
        allowReordering: true,
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
        treeColumnIndex: 1,
        labelSettings: {
            leftLabel: 'TaskName'
        },
        splitterSettings: {
            columnIndex: 3
        },
        actionComplete: function (args) {
            if (args.requestType === 'reorder') {
                var columnName = dropDownColumn.value;
                var index = ganttChart.treeGrid.getColumnIndexByField(columnName);
                dropDownIndex.value = index.toString();
            }
        },
        projectStartDate: new Date('03/24/2024'),
        projectEndDate: new Date('07/06/2024')
     });
    ganttChart.appendTo('#ReorderColumn');

    var dropDownColumn = new ej.dropdowns.DropDownList({
        dataSource: columnNames,
        popupWidth: '110px',
        fields: { text: 'name', value: 'id' },
        value: 'TaskID',
        change: function (e) {
            var columnName = e.value;
            var index = ganttChart.treeGrid.getColumnIndexByField(columnName);
            dropDownIndex.value = index.toString();
        }
    });
    dropDownColumn.appendTo('#columns');

    var dropDownIndex = new ej.dropdowns.DropDownList({
        dataSource: columnsIndex,
        fields: { text: 'name', value: 'id' },
        value: '0',
        change: function (e) {
            var columnName = dropDownColumn.value;
            var toColumnIndex = e.value;
            ganttChart.reorderColumns(columnName, ganttChart.treeGrid.columns[toColumnIndex].field);
        }
    });
    dropDownIndex.appendTo('#columnIndex');
};