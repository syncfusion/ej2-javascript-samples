this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.editingData,
        height: '650px',
        rowHeight:46,
        taskbarHeight:25,
        allowSorting: true,
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
            parentID:'ParentId'
        },
        columns: [
            { field: 'TaskID', visible:false ,headerText: 'ID', width: 80 },
            { field: 'TaskName', headerText: 'TaskName', width: 250 },
            { field: 'StartDate', headerText: 'StartDate' },
            { field: 'EndDate', headerText: 'EndDate' },
            { field: 'Duration', headerText: 'Duration' },
            { field: 'Progress', headerText: 'Progress' },
        ],
        labelSettings: {
            leftLabel: 'TaskName'
        },
        splitterSettings: {
            columnIndex: 2
        },
        projectStartDate: new Date('03/26/2025'),
        projectEndDate: new Date('09/01/2025'),
    });
    ganttChart.appendTo('#SortingAPI');

    var dropDownColumnList = new ej.dropdowns.DropDownList({
        dataSource: [
            { id: 'TaskName', type: 'TaskName' },
            { id: 'StartDate', type: 'StartDate' },
            { id: 'EndDate', type: 'EndDate' },
            { id: 'Duration', type: 'Duration' },
            { id: 'Progress', type: 'Progress' }
        ],
        popupWidth: '150px',
        value: 'TaskName',
        fields: { text: 'type', value: 'id' },
    });
    dropDownColumnList.appendTo('#columns');

    var dropDownDirectionList = new ej.dropdowns.DropDownList({
        dataSource: [
            { id: 'Ascending', type: 'Ascending' },
            { id: 'Descending', type: 'Descending' },
        ],
        popupWidth: '150px',
        value: 'Ascending',
        fields: { text: 'type', value: 'id' },
    });
    dropDownDirectionList.appendTo('#direction');

    var Sort = new ej.buttons.Button();
    Sort.appendTo('#sort');
    var Clear = new ej.buttons.Button();
    Clear.appendTo('#clear');
    document.getElementById('sort').onclick = function () {
        var columnName = dropDownColumnList.value;
        var sortType = dropDownDirectionList.value;
        ganttChart.sortModule.sortColumn(columnName, sortType, false);
    };
    document.getElementById('clear').onclick = function () {
        ganttChart.clearSorting();
    };
};