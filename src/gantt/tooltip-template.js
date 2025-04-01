this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.tooltipData,
        renderBaseline: true,
        height: '450px',
        highlightWeekends: true,
        treeColumnIndex: 1,
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            resourceInfo: 'resources',
            baselineStartDate: 'BaselineStartDate',
            baselineEndDate: 'BaselineEndDate',
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
            { field: 'BaselineStartDate' },
            { field: 'BaselineEndDate' },
            { field: 'resources' },
        ],
        resourceFields: {
            id: 'resourceId',
            name: 'resourceName'
        },
        
        resources: editingResources,
        tooltipSettings: {
            showTooltip: true,
            taskbar: '#taskbarTooltip',
            baseline: '#baselineTooltip',
            timeline:'#timelineTooltipTemplate'
        },
        timelineSettings: {
            showTooltip: true,
            topTier: {
                unit:'Week',
            },
            bottomTier: {
                unit: 'Day',
                count: 1
            }
        },
        labelSettings: {
            leftLabel: 'TaskName',
            rightLabel: 'resources'
        },
        splitterSettings: {
            columnIndex: 2
        },
        projectStartDate: new Date('03/24/2024'),
        projectEndDate: new Date('05/04/2024'),
    });
    ganttChart.appendTo('#TooltipTemplate');
};

function getTooltipData(startDate, endDate, tier) {
    var gantt = document.getElementsByClassName('e-gantt')[0].ej2_instances[0];
    var activeTasks;
    if (tier === 'topTier') {
        activeTasks = gantt.currentViewData.filter(function(task) {
            var taskStart = new Date(task.StartDate);
            var taskEnd = new Date(task.EndDate);
            taskStart.setHours(0, 0, 0, 0);
            taskEnd.setHours(0, 0, 0, 0);
            return taskStart >= startDate && taskEnd <= endDate;
        });    
    }
    else {
        activeTasks = gantt.currentViewData.filter(function(task) {
            var taskStart = new Date(task.StartDate);
            var taskEnd = new Date(task.EndDate);
            taskStart.setHours(0, 0, 0, 0);
            taskEnd.setHours(0, 0, 0, 0);
            return taskStart.getTime() === startDate.getTime() && taskEnd.getTime() === endDate.getTime();
        });
    }
    var milestones = activeTasks.filter(function(task) {
        return task.Duration === 0;
    });
    var totalProgress = activeTasks.reduce(function(acc, task) {
        return acc + (task.Progress ? task.Progress : 0);
    }, 0);    
    var overallProgress = (activeTasks.length > 0) ? (totalProgress / activeTasks.length).toFixed(2) : 0;
    return {
        activeTasks: activeTasks.length,
        milestones: milestones.length,
        overallProgress: overallProgress
    };
}
function topTierTooltip(value, date, tier) {
    var gantt = document.getElementsByClassName('e-gantt')[0].ej2_instances[0];
    var endDate;
    var startdate = new Date(date);
    if (gantt.timelineSettings.topTier.unit) {
        endDate = new Date(startdate.getTime());
        endDate.setDate(startdate.getDate() + 6);
    }
    var data = getTooltipData(startdate, endDate,tier);
    return generateTooltipMarkup(value, data);  
}
function generateTooltipMarkup(label, tooltipData) {
    var themeIsDark = document.body.classList.contains('tailwind3-dark') ||
    document.body.classList.contains('fluent2') ||
    document.body.classList.contains('material3-dark') ||
    document.body.classList.contains('bootstrap5.3-dark') ||
    document.body.classList.contains('highcontrast');

    var borderColor = themeIsDark ?  'black' : 'white';
    return (
        '<div style="padding: 5px;">' +
            '<div style="padding-bottom: 5px; text-align: center; border-bottom: 2px solid ' + borderColor + ';">' +
                '<span style="font-weight: bold; font-size: 14px;">' + label + '</span>' +
            '</div>' +
            '<div style="display: flex; padding-bottom: 5px; padding-top: 9px">' +
                '<span style="font-weight: bold;">Active Tasks:</span>' +
                '<span style="padding-left: 2px;">' + tooltipData.activeTasks + '</span>' +
            '</div>' +
            '<div style="display: flex; padding-bottom: 5px;">' +
                '<span style="font-weight: bold;">Milestones:</span>' +
                '<span style="padding-left: 2px;">' + tooltipData.milestones + '</span>' +
            '</div>' +
            '<div style="display: flex; padding-bottom: 5px;">' +
                '<span style="font-weight: bold;">Overall Progress:</span>' +
                '<span style="padding-left: 2px;">' + tooltipData.overallProgress + '</span>' +
            '</div>' +
        '</div>'
    );
}
function bottomTierTooltip(date, tier) {
    var gantt = document.getElementsByClassName('e-gantt')[0].ej2_instances[0];
    var startdate = new Date(date);
    if (gantt.timelineSettings.bottomTier.unit) {
        endDate = new Date(startdate.getTime());
    }
    var data = getTooltipData(startdate, endDate,tier);
    return generateTooltipMarkup(date, data);
}