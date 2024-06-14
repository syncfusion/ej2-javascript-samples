this.default = function () {
    var columnsName = [
        { id: 'TaskID', name: 'ID' },
        { id: 'StartDate', name: 'Start Date' },
        { id: 'EndDate', name: 'End Date' },
        { id: 'Duration', name: 'Duration' },
        { id: 'Predecessor', name: 'Dependency' },
        { id: 'Progress', name: 'Progress' }
    ];

    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.projectNewData,
        height: '450px',
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
        labelSettings: {
            leftLabel: 'TaskName'
        },
        splitterSettings: {
            columnIndex: 3
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
        projectStartDate: new Date('03/24/2024'),
        projectEndDate: new Date('07/06/2024')
     });
    ganttChart.appendTo('#ShowHideColumn');

    var dropDownListObject = new ej.dropdowns.DropDownList({
        dataSource: columnsName,
        fields: { text: 'name', value: 'id' },
        value: 'TaskID',
        change: function (e) {
            var columnName = e.value;
            var column = ganttChart.treeGrid.grid.getColumnByField(columnName);
            if (column.visible === undefined || column.visible) {
                show.disabled = true;
                hide.disabled = false;
            }
            else {
                hide.disabled = true;
                show.disabled = false;
            }
        }
    });
    dropDownListObject.appendTo('#ddlelement');

    var show = new ej.buttons.Button({ disabled: true });
    show.appendTo('#show');
    var hide = new ej.buttons.Button();
    hide.appendTo('#hide');
    var hiddenColumns = document.getElementById('hiddencolumns');

    document.getElementById('show').addEventListener('click', function () {
        var dropValue = dropDownListObject.value;
        var columnName = ganttChart.treeGrid.getColumnByField(dropValue).headerText;
        ganttChart.showColumn(columnName);
        show.disabled = true;
        hide.disabled = false;
        hiddenColumns.value = hiddenColumns.value.replace(columnName + '\n', '');
    });

    document.getElementById('hide').addEventListener('click', function () {
        var dropValue = dropDownListObject.value;
        var columnName = ganttChart.treeGrid.getColumnByField(dropValue).headerText;
        ganttChart.hideColumn(columnName);
            hide.disabled = true;
            show.disabled = false;
            hiddenColumns.value = hiddenColumns.value + columnName + '\n';
        });
    };