this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.labelData,
        rowHeight: 46,
        highlightWeekends: true,
        treeColumnIndex: 1,
        height: '450px',
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            resourceInfo: 'resources',
            child: 'subtasks'
        },
        columns: [
            { field: 'TaskID', width: 80 },
            { field: 'TaskName', width: 250 },
            { field: 'StartDate' },
            { field: 'EndDate' },
            { field: 'Duration' },
            { field: 'Predecessor' },
            { field: 'Progress' },
            { field: 'resources' },
        ],
        resourceFields: {
            id: 'resourceId',
            name: 'resourceName'
        },
        resources: editingResources,
        labelSettings: {
            leftLabel: '#leftLabel',
            rightLabel: '#rightLabel',
            taskLabel: '${Progress}%'
        },
        splitterSettings: {
            position: "35%"
        },
        projectStartDate: new Date('03/24/2024'),
        projectEndDate: new Date('05/04/2024'),
    });
    ganttChart.appendTo('#TasklabelTemplate');
    window.getResourceElements = function (value) {
        var out = "";
        var img = document.createElement('img');
        img.height = 40;
        var span = document.createElement('span');
        span.style.marginLeft = "5px";
        span.style.marginRight = "5px";
        for (var index = 0; index < value.length; index++) {
            img.src = 'https://ej2.syncfusion.com/demos/src/gantt/images/' + value[index].resourceName + '.png';
            img.alt = value[index].resourceName;
            span.innerHTML = value[index].resourceName;
            out = out + img.outerHTML + span.outerHTML;
        }
        return out;
    };
};
