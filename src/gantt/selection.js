this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.projectNewData,
        height: '450px',
        allowSelection: true,
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
        selectionSettings: {
            mode: 'Row',
            type: 'Single',
            enableToggle: false
        },
        labelSettings: {
            leftLabel: 'TaskName'
        },
        splitterSettings: {
            columnIndex: 2
        },
        projectStartDate: new Date('03/27/2024'),
        projectEndDate: new Date('07/06/2024')
    });
    ganttChart.appendTo('#Selection');

    var selectionModeList = new ej.dropdowns.DropDownList({
        dataSource: [
            { id: 'Row', type: 'Row' },
            { id: 'Cell', type: 'Cell' }
        ],
        popupWidth: '100px',
        value: 'Row',
        fields: { text: 'type', value: 'id' },
    });
    selectionModeList.appendTo('#mode');

    var selectionTypeList = new ej.dropdowns.DropDownList({
        dataSource: [
            { id: 'Single', type: 'Single' },
            { id: 'Multiple', type: 'Multiple' }
        ],
        popupWidth: '100px',
        value: 'Single',
        fields: { text: 'type', value: 'id' },
    });
    selectionTypeList.appendTo('#type');

    var toggleList = new ej.dropdowns.DropDownList({
        dataSource: [
            { id: true, type: 'Enable' },
            { id: false, type: 'Disable' }
        ],
        popupWidth: '100px',
        value: false,
        fields: { text: 'type', value: 'id' },
    });
    toggleList.appendTo('#toggle');

    var perform = new ej.buttons.Button();
    perform.appendTo('#perform');

    document.getElementById('perform').onclick = function () {
        var mode = selectionModeList.value;
        var type = selectionTypeList.value;
        var toggle = toggleList.value;
        ganttChart.selectionSettings.mode = mode;
        ganttChart.selectionSettings.type = type;
        ganttChart.selectionSettings.enableToggle = toggle;
    };
};