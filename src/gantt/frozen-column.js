this.default = function () {
    var leftColumns = [
        { id: 'TaskID', name: 'Task ID' },
        { id: 'TaskName', name: 'Task Name' },
        { id: 'StartDate', name: 'Start Date' },
        { id: 'EndDate', name: 'End Date' },
        { id: 'Duration', name: 'Duration' },
        { id: 'Progress', name: 'Progress' },
        { id: 'Predecessor', name: 'Dependency'},
        { id: 'Resources', name: 'Assignee' },
        { id: 'Designation', name: 'Designation' },
        { id: 'Status', name: 'Status' }
    ];
 
    var directions = [
        { id: 'Left', name: 'Left' },
        { id: 'Right', name: 'Right' },
        { id: 'Fixed', name: 'Fixed' },
        { id: 'None', name: 'None' }
    ];
    
    var ColumnsDropdown = new ej.dropdowns.DropDownList({
        dataSource: leftColumns,
        value: 'TaskID',
        fields: {value: 'id', text: 'name'},
        change: function (e){
            var columnName = e.value;
            var column = ganttChart.getColumnByField(columnName, ganttChart.columns);
            var value = column.freeze === undefined ? 'None' : column.freeze;
            directionDropDown.value = value;
        }
    });

    var directionDropDown = new ej.dropdowns.DropDownList({
        dataSource: directions,
        value: "Left",
        fields: { value: "id", text: "name" },
        change: function (e) {
        var columnName = ColumnsDropdown.value;
        var columns = ganttChart.getGanttColumns();
        var column = columns.find(function (col) {
            return col.field === columnName;
        });
        if (column) {
            column.freeze = e.value === "None" ? "None" : e.value;
            ganttChart.columns = columns;
        }
      },
    });
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.frozenColumnsData,
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency:'Predecessor',
            parentID: 'ParentID',
            resourceInfo: 'Resources',
        },
        resources: resourceCollection,
        resourceFields: {
            id: 'resourceId',
            name: 'resourceName'
        },
        columns: [
            { field: 'TaskID', headerText: 'Task ID', freeze: 'Left' },
            { field: 'TaskName', headerText: 'Task Name', width: 200, freeze: 'Left' },
            { field: 'StartDate', headerText: 'Start Date' },
            { field: 'Duration', headerText: 'Duration' },
            { field: 'EndDate', headerText: 'End Date' },
            { field: 'Progress', headerText: 'Progress' },
            { field: 'Predecessor', headerText: 'Dependency' },
            { field: 'Resources', headerText: 'Assignee', freeze: 'Right', width: 200 },
            { field: 'Designation', headerText: 'Designation' },
            { field: 'Status', headerText: 'Status' }
        ],
        treeColumnIndex: 1,
        splitterSettings: {
            position: "70%"
        },
        allowSelection: false,
        toolbar: [
            {
                align: 'Left',
                template: '<div class="left-label"><label>Columns:</label></div>'
            },
            {
                align: 'Left',
                type: 'Input',
                template: ColumnsDropdown
            },
            {
                align: 'Left',
                template: '<div class="right-label"><label>Freeze Direction:</label></div>'
            },
            {
                align: 'Left',
                type: 'Input',
                template: directionDropDown
            }
        ],
        timelineSettings: {
            showTooltip: true,
            topTier: {
                unit: 'Week',
                format: 'dd/MM/yyyy'
            },
            bottomTier: {
                unit: 'Day',
                count: 1
            }
        },
        labelSettings: {
            taskLabel: 'Progress'
        },
        rowHeight: 46,
        taskbarHeight: 25,
        height: '650px',
        projectStartDate: new Date('02/27/2025'),
        projectEndDate: new Date('05/04/2025')
     });
    ganttChart.appendTo('#frozenColumns');
};