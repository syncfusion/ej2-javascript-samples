this.default = function () {
    var filtertype = [
        { id: 'Menu', type: 'Menu' },
        { id: 'Excel', type: 'Excel' },
    ];
    var modes = [
        { id: 'Parent', type: 'Parent' },
        { id: 'Child', type: 'Child' },
        { id: 'Both', type: 'Both' },
        { id: 'None', type: 'None' },
    ];
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.filteredData,
        dateFormat: 'MM/dd/yyyy hh:mm:ss',
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            dependency: 'Predecessor',
            child: 'subtasks',
        },
        columns: [
            { field: 'TaskName', headerText: 'Task Name', width: '250', clipMode: 'EllipsisWithTooltip' },
            { field: 'StartDate', headerText: 'Start Date' },
            { field: 'Duration', headerText: 'Duration' },
            { field: 'EndDate', headerText: 'End Date' },
            { field: 'Predecessor', headerText: 'Predecessor', width:190 }
        ],
        treeColumnIndex: 0,
        allowFiltering: true,
        includeWeekend: true,
        height: '650px',
        rowHeight:46,
        taskbarHeight:25,
        filterSettings: { type: 'Menu', hierarchyMode:'Parent'},
        timelineSettings: {
            timelineUnitSize: 70,
            topTier: {
                format: 'MMM dd, yyyy',
                unit: 'Day',
            },
            bottomTier: {
                unit: 'Hour',
                format: 'h.mm a'
            },
        },
        splitterSettings: {
            columnIndex: 2
        },
        durationUnit: 'Hour',
        dayWorkingTime: [{ from: 0, to: 24 }],
        labelSettings: {
            rightLabel: 'TaskName',
        },
        projectStartDate: new Date('07/16/2025 02:00:00 AM'),
        projectEndDate: new Date('07/25/2025'),
        actionComplete: function (args) {
            if (args.requestType == "filterafteropen" && (args.columnName === "StartDate" || args.columnName === "EndDate") && ganttChart.filterSettings.type === "Menu") {
                args.filterModel.dlgDiv.querySelector('.e-datetimepicker').ej2_instances[0].min = new Date(2025, 5, 1);
                args.filterModel.dlgDiv.querySelector('.e-datetimepicker').ej2_instances[0].max = new Date(2025, 8, 30);
                args.filterModel.dlgDiv.querySelector('.e-datetimepicker').ej2_instances[0].showTodayButton = false;
                args.filterModel.dlgDiv.querySelector('.e-datetimepicker').ej2_instances[0].dataBind();
            }
        },
    });
    ganttChart.appendTo('#Filtering');
    var dropDownFilterType = new ej.dropdowns.DropDownList({
        dataSource: filtertype,
        fields: { text: 'type', value: 'id' },
        value: 'Menu',
        width: '100px',
        change: function (e) {
            var dropSelectedValue = e.value;
            ganttChart.filterSettings.type = dropSelectedValue;
            ganttChart.clearFiltering();
        }
    });
    dropDownFilterType.appendTo('#filterType');
    var dropDownFilterMode = new ej.dropdowns.DropDownList({
        dataSource: modes,
        fields: { text: 'type', value: 'id' },
        value: 'Parent',
        width: '100px',
        change: function (e) {
            var mode = e.value;
            ganttChart.filterSettings.hierarchyMode = mode;
            ganttChart.clearFiltering();
        }
    });
    dropDownFilterMode.appendTo('#mode');
};
