this.default = function () {
        var themeColors = {
            'material3': {
                onTime: '#F0FDF4', 
                delayed: '#FFF7ED' ,
                baseline:'#DAA520',
                onTimeProgress: '#15803D',
                delayedProgress: '#C2410C'
            },
            'material3-dark': {
                onTime: '#122A2C', 
                delayed: '#282125' ,
                baseline:'#9CA3AF',
                onTimeProgress: '#22C55E',
                delayedProgress: '#FB923C'
            },
            'tailwind3':{
                onTime: '#F0FDF4', 
                delayed: '#FFF7ED' ,
                baseline:'#DAA520',
                onTimeProgress: '#15803D',
                delayedProgress: '#C2410C'
            },
            'tailwind3-dark':{
                onTime: '#122A2C', 
                delayed: '#282125' ,
                baseline:'#9CA3AF',
                onTimeProgress: '#22C55E',
                delayedProgress: '#FB923C'
            },
            'bootstrap5.3': {
                onTime: '#F0FDF4', 
                delayed: '#FFF7ED' ,
                baseline:'#DAA520',
                onTimeProgress: '#15803D',
                delayedProgress: '#C2410C'
            },
            'bootstrap5.3-dark': {
                onTime: '#122A2C', 
                delayed: '#282125' ,
                baseline:'#9CA3AF',
                onTimeProgress: '#22C55E',
                delayedProgress: '#FB923C'
            },
            'fluent2':{
                onTime: '#F0FDF4', 
                delayed: '#FFF7ED' ,
                baseline:'#DAA520',
                onTimeProgress: '#15803D',
                delayedProgress: '#C2410C'
            },
            'fluent2-dark':{
                onTime: '#122A2C', 
                delayed: '#282125' ,
                baseline:'#9CA3AF',
                onTimeProgress: '#22C55E',
                delayedProgress: '#FB923C'
            },
           'fluent2-highcontrast':{
                onTime: '#122A2C', 
                delayed: '#282125' ,
                baseline:'#9CA3AF',
                onTimeProgress: '#22C55E',
                delayedProgress: '#FB923C'
           }
        };
        function getCurrentTheme() {
            return Object.keys(themeColors).find(function(theme) {
                return document.body.classList.contains(theme);
            }) || 'material3';
        }
        var currentTheme = getCurrentTheme();
        var colors = themeColors[currentTheme]; 
        var ganttChart = new ej.gantt.Gantt({
        dataSource: baselineData,
        taskFields: {
            id: "TaskId",
            name: "TaskName",
            startDate: "StartDate",
            endDate: "EndDate",
            baselineStartDate: "BaselineStartDate",
            baselineEndDate: "BaselineEndDate",
            baselineDuration: 'baselineDur',
            parentID: 'ParentId',
            duration: 'Duration',
            dependency: 'Predecessor',
            progress: 'Progress'
        },
        renderBaseline: true,
        gridLines: "Horizontal",    
        columns: [
            { field: "TaskId", visible: false, headerText: "Task ID"},
            { field: "TaskName", headerText: "Task Name", allowReordering: false, width: 200},
            { field: 'StartDate', width: 140, },
            { field: 'Duration',  width: 125,},
            { field: "BaselineStartDate", headerText: "Baseline Start Date", width: 195,  },
            { field: "baselineDur", type: "string", editType: "stringedit",width: 195, },
            { field: "variance", headerText: "Variance",allowEditing: false, width: 140,},
        ],
        treeColumnIndex: 1,
        allowSelection: true,
        includeWeekend: true,
        splitterSettings: {
            columnIndex: 4,
        },
        allowResizing: true,
        height: '650px',
        rowHeight:46,
        taskbarHeight:25,
        timelineSettings:{
            topTier:{
                unit: 'Month',
                format: 'MMMM yyyy'
            },
            bottomTier:{
                unit: 'Day'
            }
        },
        labelSettings:{
            rightLabel: '#rightLabel',
        },
        allowPdfExport: true,
        tooltipSettings: {
            taskbar: "#tooltip",
        },
        parentTaskbarTemplate: '#parenttask',
        queryTaskbarInfo: function (args) {
            var currentTheme = getCurrentTheme();
            var colors = themeColors[currentTheme];
            var taskbarColor = !args.data.ganttProperties.baselineStartDate || !args.data.ganttProperties.baselineEndDate || args.data.ganttProperties.startDate <= args.data.ganttProperties.baselineStartDate ? colors.onTime : colors.delayed;
            var progressColor = !args.data.ganttProperties.baselineStartDate || !args.data.ganttProperties.baselineEndDate || args.data.ganttProperties.startDate <= args.data.ganttProperties.baselineStartDate ? colors.onTimeProgress : colors.delayedProgress;
            if(args.taskbarType!='ParentTask'){
                if(currentTheme==='material3' || currentTheme==='material3-dark'){
                    if(args.taskbarType !='Milestone'){
                        args.taskbarElement.querySelectorAll('.e-gantt-child-taskbar-inner-div')[0].style.setProperty('background',taskbarColor,'important');
                    }
                    else{
                        args.taskbarElement.querySelectorAll('.e-gantt-milestone')[0].style.setProperty('border',progressColor,'important');
                        args.rowElement.querySelectorAll('.e-baseline-gantt-milestone-container')[0].style.setProperty('border',colors.baseline,'important');
                    }
                }
                args.taskbarBgColor = taskbarColor;
                args.milestoneColor = progressColor;
                args.taskbarBorderColor = progressColor;
                args.progressBarBgColor =progressColor;
            }
            args.baselineColor = colors.baseline;
        },
        enableUndoRedo: true,
        undoRedoActions: ["Add", "Edit", "Delete"],
        projectStartDate: new Date("07/02/2025"),
        projectEndDate: new Date("08/11/2025"),
        queryCellInfo: function (args) {
            if (args.column.field === "variance") {
                var start = args.data.ganttProperties.startDate;
                var baselineStart = args.data.ganttProperties.baselineStartDate;
                var baselineEnd = args.data.ganttProperties.baselineEndDate;
                if (!baselineStart || !baselineEnd || !start || start <= baselineStart) {
                    args.data.variance = 0;
                    args.data.taskData.variance = 0;
                    args.cell.innerText = "0 days";
                    return;
                }
                var diffInDays = (start - baselineStart) / (1000 * 60 * 60 * 24);
                var roundedDiff = Math.round(diffInDays);
                args.data.variance = roundedDiff;
                args.data.taskData.variance = roundedDiff;
                args.cell.innerText = roundedDiff + " days";
            }
        },
    });
    ganttChart.appendTo('#Baseline');
};