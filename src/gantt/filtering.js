this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: filteredData,
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
            { field: 'Predecessor', headerText: 'Predecessor' }
        ],
        treeColumnIndex: 0,
        toolbar: ['Search'],
        allowFiltering: true,
        includeWeekend: true,
        height: '450px',
        timelineSettings: {
            timelineUnitSize: 60,
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
            columnIndex: 3
        },
        durationUnit: 'Hour',
        dayWorkingTime: [{ from: 0, to: 24 }],
        labelSettings: {
            rightLabel: 'TaskName',
        },
        projectStartDate: new Date('07/16/1969 01:00:00 AM'),
        projectEndDate: new Date('07/25/1969'),
        actionComplete: function (args) {
            if (args.requestType == "filterafteropen" && (args.columnName === "StartDate" || args.columnName === "EndDate")) {
                args.filterModel.dlgDiv.querySelector('.e-datetimepicker').ej2_instances[0].min = new Date(1969, 5, 1);
                args.filterModel.dlgDiv.querySelector('.e-datetimepicker').ej2_instances[0].max = new Date(1969, 8, 30);
                args.filterModel.dlgDiv.querySelector('.e-datetimepicker').ej2_instances[0].showTodayButton = false;
                args.filterModel.dlgDiv.querySelector('.e-datetimepicker').ej2_instances[0].dataBind();
            }
        },
    });
    ganttChart.appendTo('#Filtering');
};