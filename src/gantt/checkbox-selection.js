this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.hierarchyCheckboxData,
        height: '650px',
        hierarchyCheckboxMode: 'hierarchy',
        rowHeight: 46,
        taskbarHeight: 25,
        highlightWeekends: true,
        allowSelection: true,
        treeColumnIndex: 2,
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
        selectionSettings: {
            mode: 'Row',
            type: 'Multiple',
            enableToggle: false
        },
        allowResizing: true,
        columns: [
            { field: 'CheckBox', headerText: '', showCheckbox: true, width: 70, allowFiltering: false },
            { field: 'TaskID', width: 110, visible: false },
            { field: 'TaskName', width: 190 },
            { field: 'StartDate' },
            { field: 'EndDate' },
            { field: 'Duration' },
            { field: 'Predecessor' },
            { field: 'Progress' }
        ],
        enableHover: true,
        labelSettings: {
            leftLabel: 'TaskName'
        },
        splitterSettings: {
            columnIndex: 3
        },
        toolbar: ['Search'],
        allowFiltering: true,
        projectStartDate: new Date('03/26/2025'),
        projectEndDate: new Date('07/20/2025')
    });
    ganttChart.appendTo('#HierarchyCheckbox');

    var selectionModeList = new ej.dropdowns.DropDownList({
        dataSource: [
            { id: 'self', type: 'self' },
            { id: 'hierarchy', type: 'hierarchy' },
            { id: 'filteredHierarchy', type: 'filteredHierarchy' }
        ],
        width: '125px',
        popupWidth: '100px',
        value: 'hierarchy',
        change: function (e) {
            var mode = e.value;
            ganttChart.hierarchyCheckboxMode = mode;
            ganttChart.refresh();
        },
        fields: { text: 'type', value: 'id' }
    });
    selectionModeList.appendTo('#mode');

};