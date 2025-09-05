this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.projectNewData,
        height: '650px',
        rowHeight:46,
        taskbarHeight:25,
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
            parentID: 'ParentId'
        },
        enableHover: true,
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
        allowResizing: true,
        columns: [
            { field: 'TaskID', width: 70 },
            { field: 'TaskName', width: 250 },
            { field: 'StartDate'},
            { field: 'EndDate'},
            { field: 'Duration'},
            { field: 'Predecessor'},
            { field: 'Progress'},
        ],
        projectStartDate: new Date('03/26/2025'),
        projectEndDate: new Date('07/20/2025')
    });
    ganttChart.appendTo('#Selection');

    var selectionModeList = new ej.dropdowns.DropDownList({
        dataSource: [
            { id: 'Row', type: 'Row' },
            { id: 'Cell', type: 'Cell' }
        ],
        width: '125px',
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
        width: '125px',
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
        width: '125px',
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

    var hover = new ej.buttons.CheckBox({ checked: true });
    hover.appendTo('#hover');

     document.getElementById('hover').onclick = function () {
        if (hover.checked) {
            ganttChart.enableHover = true;
        } else {
             ganttChart.enableHover = false;
        }
    };

};