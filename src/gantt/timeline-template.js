this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.timelineTemplate,
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency:'Predecessor',
            child: 'subtasks'
        },
        splitterSettings: {
            columnIndex: 1
        },
        treeColumnIndex: 1,
        allowSelection: true,
        showColumnMenu: false,
        timelineSettings: {
            topTier: {
                unit: 'Day',
            },
            timelineUnitSize: 200,
        },
        labelSettings: {
            leftLabel: 'TaskName',
            taskLabel: 'Progress'
        },
        columns: [
            { field: 'TaskID', headerText: 'Task ID' ,visible: false},
            { field: 'TaskName', headerText: 'Task Name', width: 300  },
            { field: 'StartDate', headerText: 'Start Date'},
            { field: 'Duration', headerText: 'Duration'},
            { field: 'Progress', headerText: 'Progress'},
        ],
        height: '450px',
        allowUnscheduledTasks: true,
        projectStartDate: new Date('03/31/2024'),
        projectEndDate: new Date('04/23/2024'),
        timelineTemplate:"#TimelineTemplates"
    });
    ganttChart.appendTo('#Timeline');
};
window.weekDate = function (dateString) {
    var date = new Date(dateString);
    var options = { weekday: 'short' };
    return date.toLocaleDateString('en-US', options);
};
window.formatDate = function (dateString) {
    var date = new Date(dateString);
    var options = { day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
};
window.imageString = function (value) {
    return "src/gantt/images/"+ value.toLowerCase() +".svg" ;
};
