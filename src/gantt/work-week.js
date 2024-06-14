this.default = function () {
    var workDays = [
        { id: 'Sunday', day: 'Sunday' },
        { id: 'Monday', day: 'Monday' },
        { id: 'Tuesday', day: 'Tuesday' },
        { id: 'Wednesday', day: 'Wednesday' },
        { id: 'Thursday', day: 'Thursday' },
        { id: 'Friday', day: 'Friday' },
        { id: 'Saturday', day: 'Saturday' },
    ];
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.projectNewData,
        height: '450px',
        allowSelection: true,
        highlightWeekends: true,
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
        treeColumnIndex: 1,
        splitterSettings: {
           columnIndex: 1
        },
        columns: [
            { field: 'TaskID', width: 80 },
            { field: 'TaskName',headerText: 'Name', width: 250 },
            { field: 'StartDate' },
            { field: 'EndDate' },
            { field: 'Duration' },
            { field: 'Predecessor' },
            { field: 'Progress' },
        ],
        workWeek: ["Monday", "Tuesday", "Wednesday","Thursday","Friday"],        
        labelSettings: {
            leftLabel: 'TaskName'
        },
        projectStartDate: new Date('03/24/2024'),
        projectEndDate: new Date('07/06/2024')
     });
    ganttChart.appendTo('#Workweek');

    var checkList = new ej.dropdowns.MultiSelect({
        dataSource: workDays,
        select: function (args) {
            var workingDays = ej.base.extend([], this.value, [], true);
            workingDays.push(args.itemData.day);
            ganttChart.workWeek = workingDays;
        },
        removed: function (args) {
            var index = ganttChart.workWeek.indexOf(args.itemData.day);
            if (index !== -1) {
                ganttChart.workWeek = this.value;
            }
        },
        value: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        fields: { text: 'day', value: 'id' },
        mode: 'CheckBox',
        showDropDownIcon: true,
        popupHeight: '350px'
    });
    checkList.appendTo('#WorkingDays');
};