this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.unscheduledData,
        taskFields: {
            id: 'TaskId',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
        },
        editSettings: {
            allowAdding: true,
            allowEditing: true
        },
        columns: [
            { field: 'TaskId', width: 90 },
            { field: 'TaskName', width: 100},
            { field: 'StartDate', width: 180 },
            { field: 'EndDate', width: 120 },
            { field: 'Duration', width: 150 }
        ],
        splitterSettings: {
            columnIndex: 4
        },
        toolbar: [{ text: 'Insert task', tooltipText: 'Insert task at top', id: 'toolbarAdd', prefixIcon: 'e-add-icon tb-icons' }],
        height: '650px',
        rowHeight:46,
        taskbarHeight:25,
        labelSettings: {
            leftLabel: 'TaskName',
            rightLabel: 'TaskType'
        },
        allowUnscheduledTasks: true,
        projectStartDate: new Date('12/29/2024'),
        projectEndDate: new Date('02/08/2025'),
        toolbarClick: toolbarClick,
    });
    ganttChart.appendTo('#Unscheduled');

    function toolbarClick() {
        var data = {
            Duration: null,
            StartDate: null,
            EndDate: null,
            TaskType: ''
        };
        ganttChart.addRecord(data);
    }
};