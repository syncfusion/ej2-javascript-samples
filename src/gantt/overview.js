this.default = function () {
    var sportsData = [
        { ID: "Default", Text: "Default" },
        { ID: "Grid", Text: "Grid" },
        { ID: "Chart", Text: "Chart" },
    ];
    var theme;
    var style;
    var CurrentTheme;
    var statusStyleColor;
    var priorityStyle;
    var priorityContentStyle;
    var statusContentstyleColor;
    
    var gantt = new ej.gantt.Gantt({
        dataSource: window.overviewData,
        resources: window.editingResources,
        height: '500px',
        width: "100%",
        highlightWeekends: true,
        allowSelection: true,
        allowSorting: true,
        treeColumnIndex: 1,
        viewType: 'ProjectView',
        taskFields: {
            id: 'TaskId',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'TimeLog',
            progress: 'Progress',
            dependency: 'Predecessor',
            parentID: 'ParentId',
            resourceInfo: 'Assignee'
        },
        resourceFields: {
            id: 'resourceId',
            name: 'resourceName',
        },
        columns: [
            { field: 'TaskId', width: 60, visible: false },
            { field: 'TaskName', width: 200, headerText: 'Product Release' },
            { field: 'Assignee', width: 130, allowSorting: false, headerText: 'Assignee', template: '#columnTemplate' },
            { field: 'Status', minWidth: 100, width: 120, headerText: 'Status', template: '#columnTemplate1' },
            { field: 'Priority', minWidth: 80, width: 100, headerText: 'Priority', template: '#columnTemplate2' },
            { field: 'Work', width: 120, headerText: 'Planned Hours' },
            { field: 'TimeLog', width: 120, headerText: 'Work Log' }
        ],
        toolbar: [{
            type: 'Input', align: 'Right', template: new ej.dropdowns.DropDownList({
                dataSource: sportsData,
                placeholder: 'View',
                width: '90px',
                fields: { value: 'ID', text: 'Text' },
                change: function (args) {
                    if (args.value == 'Grid') {
                        gantt.setSplitterPosition('100%', 'position');
                    }
                    else if (args.value == 'Chart') {
                        gantt.setSplitterPosition('0%', 'position');
                    }
                    else {
                        gantt.setSplitterPosition('50%', 'position');
                    }
                }
            })
        }, 'ExpandAll', 'CollapseAll'],
        load: function (args) {
            var themeCollection = ['bootstrap5', 'bootstrap', 'bootstrap4', 'fluent', 'fabric', 'fusionnew', 'material3', 'material', 'highcontrast', 'tailwind'];
            var check = themeCollection.indexOf(theme);
            var cls = document.body.className.split(' ');
            theme = cls.indexOf('bootstrap5') > 0 ? 'bootstrap5' : cls.indexOf('bootstrap') > 0 ? 'bootstrap' : cls.indexOf('tailwind') > 0 ? 'tailwind' :
                cls.indexOf('fluent') > 0 ? 'fluent' : cls.indexOf('fabric') > 0 ? 'fabric' :
                    cls.indexOf('material3') > 0 ? 'material3' : cls.indexOf('bootstrap4') > 0 ? 'bootstrap4' : cls.indexOf('material') > 0 ? 'material' :
                        cls.indexOf('fusionnew') > 0 ? 'fusionnew' : cls.indexOf('highcontrast') > 0 ? 'highcontrast' : '';
            if (check >= 0) {
                CurrentTheme = true;
            }
            else {
                CurrentTheme = false;
            }
        },
        splitterSettings: {
            position: "50%",
        },
        selectionSettings: {
            mode: 'Row',
            type: 'Single',
            enableToggle: true
        },
        tooltipSettings: {
            showTooltip: true
        },
        filterSettings: {
            type: 'Menu'
        },
        allowFiltering: true,
        gridLines: "Vertical",
        showColumnMenu: true,
        timelineSettings: {
            showTooltip: true,
            topTier: {
                unit: 'Month',
                format: 'MMM yyyy'
            },
            bottomTier: {
                unit: 'Day',
                count: 4,
                format: 'dd'
            }
        },
        eventMarkers: [
            {
                day: '04/04/2022',
                cssClass: 'e-custom-event-marker',
                label: 'Q-1 Release'
            },
            {
                day: '06/30/2022',
                cssClass: 'e-custom-event-marker',
                label: 'Q-2 Release'
            },
            {
                day: '09/29/2022',
                cssClass: 'e-custom-event-marker',
                label: 'Q-3 Release'
            }
        ],
        holidays: [{
            from: "01/01/2022",
            to: "01/01/2022",
            label: "New Year holiday",
            cssClass: "e-custom-holiday"
        },
        {
            from: "12/25/2021",
            to: "12/26/2021",
            label: "Christmas holidays",
            cssClass: "e-custom-holiday"
        }],
        labelSettings: {
            rightLabel: 'Assignee',
            taskLabel: '${Progress}%'
        },
        allowResizing: true,
        taskbarHeight: 24,
        rowHeight: 36,
        projectStartDate: new Date('12/17/2021'),
        projectEndDate: new Date('10/26/2022'),
    });
    gantt.appendTo('#overviewSample');

    window.Status = function (status) {
        switch (status) {
            case "In Progress":
                statusStyleColor = (CurrentTheme) ? "#DFECFF" : "#2D3E57";
                style = "display: flex; padding: 1.5px 12px; gap: 10px; width: 96px; height: 24px; border-radius: 24px; background:" + statusStyleColor;
                break;
            case "Open":
                style = "background-color: red; color: white; border-radius: 15px; padding:6px";
                break;
            case "On Hold":
                statusStyleColor = (CurrentTheme) ? "#E4E4E7" : "#3C3B43";
                style = "display: flex; border-radius: 24px; padding: 1.5px 12px; gap: 10px; width: 78px; height: 24px; background:" + statusStyleColor;
                break;
            case "Completed":
                statusStyleColor = (CurrentTheme) ? "#DFFFE2" : "#16501C";
                style = "display: flex; padding: 1.5px 12px; gap: 10px; width: 98px; height: 24px; border-radius: 24px;background:" + statusStyleColor;
                break;
            case "High":
                statusStyleColor = (CurrentTheme) ? "#FFEBE9" : "#48211D";
                style = "display: flex; padding: 1.5px 12px; gap: 10px; width: 55px; height: 24px; border-radius: 24px; background:" + statusStyleColor;
                break;
        }
        return style;
    };
    window.StatusContent = function (status) {
        switch (status) {
            case "In Progress":
                statusContentstyleColor = (CurrentTheme) ? "#006AA6" : "#34B6FF";
                style = "width: 72px; height: 22px; font-style: normal; font-weight: 500; font-size: 14px; line-height: 20px; text-align: center; color: " + statusContentstyleColor;
                break;
            case "Open":
                style = "background-color: red; color: white; border-radius: 15px; padding:6px";
                break;
            case "On Hold":
                statusContentstyleColor = (CurrentTheme) ? "#766B7C" : "#CDCBD7";
                style = "width: 54px; height: 22px; font-style: normal; font-weight: 500; font-size: 14px; line-height: 20px; text-align: center; color: " + statusContentstyleColor;
                break;
            case "Completed":
                statusContentstyleColor = (CurrentTheme) ? "#00A653" : "#92FFC8";
                style = "width: 74px; height: 22px; font-style: normal; font-weight: 500; font-size: 14px; line-height: 20px; text-align: center; color: " + statusContentstyleColor;
                break;
            case "High":
                statusContentstyleColor = (CurrentTheme) ? "#FF3740" : "#FFB5B8";
                style = "width: 31px; height: 22px; font-style: normal; font-weight: 500; font-size: 14px; line-height: 20px; text-align: center; color: " + statusContentstyleColor;
                break;
        }
        return style;
    };
    window.Priority = function (priority) {
        switch (priority) {
            case "Low":
                priorityStyle = (CurrentTheme) ? "#FFF6D1" : "#473F1E";
                style = "display: flex; padding: 1.5px 12px; gap: 10px; width: 52px; height: 24px; border-radius: 24px; background: " + priorityStyle;
                break;
            case "Normal":
                priorityStyle = (CurrentTheme) ? "#F5DFFF" : "#4D2F5A";
                style = "display: flex; padding: 1.5px 12px; gap: 10px; width: 73px; height: 24px; border-radius: 24px; background: " + priorityStyle;
                break;
            case "Critical":
                priorityStyle = (CurrentTheme) ? "#FFEBE9" : "#48211D";
                style = "display: flex; padding: 1.5px 12px; gap: 10px; width: 72px; height: 24px; border-radius: 24px; background: " + priorityStyle;
                break;
            case "High":
                priorityStyle = (CurrentTheme) ? "#FFEBE9" : "#48211D";
                style = "display: flex; padding: 1.5px 12px; gap: 10px; width: 55px; height: 24px; border-radius: 24px; background: " + priorityStyle;
                break;
        }
        return style;
    };
    window.PriorityContent = function (priority) {
        switch (priority) {
            case "Low":
                priorityContentStyle = (CurrentTheme) ? "#70722B" : "#FDFF88";
                style = "width: 28px; height: 22px; font-style: normal; font-weight: 500; font-size: 14px; line-height: 20px; text-align: center; color: " + priorityContentStyle;
                break;
            case "Normal":
                priorityContentStyle = (CurrentTheme) ? "#7100A6" : "#E3A9FF";
                style = "width: 49px; height: 22px; font-style: normal; font-weight: 500; font-size: 14px; line-height: 20px; text-align: center; color: " + priorityContentStyle;
                break;
            case "Critical":
                priorityContentStyle = (CurrentTheme) ? "#FF3740" : "#FFB5B8";
                style = "width: 48px; height: 22px; font-style: normal; font-weight: 500; font-size: 14px; line-height: 20px; text-align: center; color: " + priorityContentStyle;
                break;
            case "High":
                priorityContentStyle = (CurrentTheme) ? "#FF3740" : "#FFB5B8";
                style = "width: 31px; height: 22px; font-style: normal; font-weight: 500; font-size: 14px; line-height: 20px; text-align: center; color: " + priorityContentStyle;
                break;
        }
        return style;
    };
};