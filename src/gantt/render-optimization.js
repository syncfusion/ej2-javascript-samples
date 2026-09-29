this.default = function () {
    var count = 5000;
    var startLoadTime = new Date();
    var shouldCalculateLoadTime = true;
    function updateLoadTime() {
        if (shouldCalculateLoadTime) {
            shouldCalculateLoadTime = false;
            var endLoadTime = new Date();
            var diff = endLoadTime.getTime() - startLoadTime.getTime();
            document.getElementById('loadTime').innerHTML =
                (diff / 1000).toFixed(2);
        }
    }
    var ganttChart = new ej.gantt.Gantt({
        dataSource: generateVirtualData(count),
        enablePredecessorValidation: false,
        autoCalculateDateScheduling: false,
        enableVirtualization: true,
        allowSelection: true,
        highlightWeekends: true,
        height: '650px',
        width: '100%',
        rowHeight: 46,
        taskbarHeight: 25,
        treeColumnIndex: 1,
        projectStartDate: new Date('03/29/2026'),
        projectEndDate: new Date('09/20/2026'),
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            parentID: 'parentID',
            dependency: 'Predecessor'
        },
        columns: [
            { field: 'TaskID' },
            { field: 'TaskName', headerText: 'Task Name', width: 300 },
            { field: 'StartDate' },
            { field: 'Duration' },
            { field: 'Progress' }
        ],
        labelSettings: {
            taskLabel: 'Progress'
        },
        splitterSettings: {
            columnIndex: 2
        },
        dataBound: function () {
            updateLoadTime();
        },
        created: function () {
            if (document.querySelector('.e-bigger')) {
                ganttChart.rowHeight = 48;
                ganttChart.taskbarHeight = 28;
            }
        }
    });
    ganttChart.appendTo('#RenderOptimization');

    var ddl = new ej.dropdowns.DropDownList({
        dataSource: [
            { Text: '5,000 Rows', Value: 5000 },
            { Text: '10,000 Rows', Value: 10000 }
        ],
        fields: {
            text: 'Text',
            value: 'Value'
        },
        value: count,
        placeholder: '5,000 Rows',
        change: function (args) {
            count = Number(args.value);
            startLoadTime = new Date();
            shouldCalculateLoadTime = true;
            ganttChart.dataSource = generateVirtualData(count);
            ganttChart.refresh();
        }
    });
    ddl.appendTo('#rowCount');
};