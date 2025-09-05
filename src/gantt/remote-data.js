this.default = function () {
    var recordCount = '1000';
    function loadGanttData(recordCount) {
        startLoadTime = new Date();
        return new ej.data.DataManager({
            url: 'https://services.syncfusion.com/js/production/api/GanttWebApiRemoteData?count=' + recordCount,
            adaptor: new ej.data.WebApiAdaptor(),
            crossDomain: true,
        });
    }
    var startLoadTime, endLoadTime;
    var shouldCalculateLoadTime = true;
    var DLData = [
        { Text: '1,000 Rows', Value: '1000' },
        { Text: '2,500 Rows', Value: '2500' },
        { Text: '5,000 Rows', Value: '5000' }
    ];

    var dropdown = new ej.dropdowns.DropDownList({
        dataSource: DLData,
        fields: { text: 'Text', value: 'Value' },
        placeholder: 'Select Rows',
        value: recordCount,
        change: function (e) {
            recordCount = e.value;
            shouldCalculateLoadTime = true;
            ganttChart.dataSource = loadGanttData(recordCount);
        }
    });
    dropdown.appendTo('#rowDropdown');

    var ganttChart = new ej.gantt.Gantt({
        dataSource: loadGanttData(recordCount),
        height: '650px',
        rowHeight:46,
        taskbarHeight:25,
        taskFields: {
            id: 'TaskId',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            parentID: 'ParentId',
            dependency: 'Predecessor'
        },
        splitterSettings:{
            columnIndex: 2
        },
        columns: [
            { field: 'TaskId' },
            { field: 'TaskName', headerText: 'Project Activity', width: 250, clipMode: 'EllipsisWithTooltip' },
            { field: 'StartDate', headerText: 'Planned Start Date',width: 200 },
            { field: 'Duration', headerText: 'Duration' ,width: 160},
            { field: 'Progress', headerText: 'Completion (%)', width: 200 }
        ],
        treeColumnIndex: 1,
        allowSelection: true,
        enableVirtualization: true,
        enableTimelineVirtualization: true,
        gridLines: 'Horizontal',
        showColumnMenu: false,
        highlightWeekends: true,
        timelineSettings: {
            timelineUnitSize: 50,
            topTier: {
                unit: 'Week',
                format: 'MMM dd, y'
            },
            bottomTier: {
                unit: 'Day',
                format: 'dd'
            }
        },
        labelSettings: {
            rightLabel: 'TaskName',
            taskLabel: 'Progress'
        },
        includeWeekend: true,
        projectStartDate: new Date('12/29/2024'),
        projectEndDate: new Date('03/19/2025'),

        dataBound: function () {
            if (shouldCalculateLoadTime) {
                endLoadTime = new Date();
                if (startLoadTime && endLoadTime) {
                    var loadDuration = (endLoadTime.getTime() - startLoadTime.getTime())/1000;
                    document.getElementById('loadTime').innerText = loadDuration.toFixed(2) + " sec";
                }
                shouldCalculateLoadTime = false;
            }
        }
    });
    ganttChart.appendTo('#RemoteData');
};
