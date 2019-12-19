this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: labelData,
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
            { field: 'TaskID', width: 60 },
            { field: 'TaskName', width: 250 },
            { field: 'StartDate' },
            { field: 'EndDate' },
            { field: 'Duration' },
            { field: 'Predecessor' },
            { field: 'Progress' },
            { field: 'resources' },
        ],
        resourceNameMapping: 'resourceName',
        resourceIDMapping: 'resourceId',
        resources: editingResources,
        labelSettings: {
            leftLabel: '#leftLabel',
            rightLabel: '#rightLabel',
            taskLabel: '${Progress}%'
        },
        splitterSettings: {
            columnIndex: 2
        },
        projectStartDate: new Date('03/24/2019'),
        projectEndDate: new Date('05/04/2019'),
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
            img.src = 'src/gantt/images/' + value[index].resourceName + '.png';
            span.innerHTML = value[index].resourceName;
            out = out + img.outerHTML + span.outerHTML;
        }
        return out;
    };
};