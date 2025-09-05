/* jshint esversion: 6 */
this.default = function () {
    var theme;
    var style;
    var CurrentTheme;
    var statusStyleColor;
    var priorityStyle;
    var IconClass;
    var priorityContentStyle;
    var statusContentstyleColor;
    var isSideBar = false;
    var sidebarObj;
    var sidebarToggle;
    var isChecked;
    var gantt = new ej.gantt.Gantt({
        dataSource: window.overviewData,
        resources: window.editingResources,
        height: '650px',
        rowHeight: 46,
        taskbarHeight: 25,
        width: "100%",
        highlightWeekends: true,
        enableHover: true,
        allowSelection: true,
        allowSorting: true,
        treeColumnIndex: 0,
        enableWBS: true,
        enableAutoWbsUpdate: true,
        viewType: 'ProjectView',
        pdfQueryCellInfo: pdfQueryCellInfo,
        pdfQueryTaskbarInfo:pdfQueryTaskbarInfo,
        taskFields: {
            id: 'TaskId',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'TimeLog',
            progress: 'Progress',
            dependency: 'Predecessor',
            constraintType: 'ConstraintType',
            constraintDate: 'ConstraintDate',
            parentID: 'ParentId',
            resourceInfo: 'resource'
        },
        resourceFields: {
            id: 'resourceId',
            name: 'resourceName',
        },
        columns: [
            { field: 'WBSCode', headerText: 'WBS ID', width: 120 },
            { field: 'TaskName', width: 200, headerText: 'Product Release' },
            { field: 'Assignee', width: 179, allowSorting: false, headerText: 'Assignee', template: '#columnTemplate' },
            { field: 'Status', minWidth: 100, width: 120, headerText: 'Status', template: '#columnTemplate1' },
            { field: 'Priority', minWidth: 80, width: 120, headerText: 'Priority', template: '#columnTemplate2' },
            { field: 'WBSPredecessor', headerText: 'WBS Predecessor', width: 200},
            { field: 'ConstraintType', width: 200 },
            { field: 'ConstraintDate', width: 200 },
            { field: 'Progress',  headerText: 'Completion (%)',width:205},
            { field: 'TimeLog',  headerText: 'Work Log', width:150}
        ],
        toolbar: ['ExpandAll', 'CollapseAll', 'ZoomIn', 'ZoomOut', 'ZoomToFit', 'ExcelExport', 'CsvExport', 'PdfExport'],
        allowExcelExport: true,
        allowPdfExport: true,
        toolbarClick: function (args) {
            if (args.item.id === 'overviewSample_excelexport') {
                gantt.excelExport();
            }
            else if (args.item.id === 'overviewSample_csvexport') {
                gantt.csvExport();
            } else if (args.item.id === 'overviewSample_pdfexport') {
                gantt.pdfExport();
            }
        },
        load: function (args) {
           var themeCollection = ['bootstrap5', 'bootstrap', 'bootstrap4', 'fluent', 'fabric', 'fusionnew', 'material3', 'material', 'highcontrast', 'tailwind', 'fluent2', 'tailwind3', 'bootstrap5.3'];
            var theme = document.body.className.split(' ').find(function(cls) { return themeCollection.includes(cls); }) || '';
            CurrentTheme = theme ? true : false;
        },
        splitterSettings: {
            columnIndex: 4,
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
        gridLines: "Both",
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
                day: new Date('2025-03-13'),
                cssClass: 'e-custom-event-marker',
                label: 'Project Initiative'
            },
            {
                day: new Date('2025-04-18'),
                cssClass: 'e-custom-event-marker',
                label: 'Requirement Gathering'
            },
            {
                day: new Date('2025-05-30'),
                cssClass: 'e-custom-event-marker',
                label: 'Design Phase'
            },
            {
                day: new Date('2025-11-25'),
                cssClass: 'e-custom-event-marker',
                label: 'Deployment'
            },
        ],
        holidays: [{
            from: new Date("01/01/2025"),
            to: new Date("01/01/2025"),
            label: "New Year holiday",
            cssClass: "e-custom-holiday"
        },
        {
            from: new Date("12/25/2024"),
            to: new Date("12/26/2024"),
            label: "Christmas holidays",
            cssClass: "e-custom-holiday"
        }],
        labelSettings: {
            rightLabel: '#rightLabel',
            taskLabel: '${Progress}%'
        },
        allowResizing: true,
        projectStartDate: new Date('01/25/2025'),
        projectEndDate: new Date('01/30/2026'),
    });
    gantt.appendTo('#overviewSample');
    function pdfQueryCellInfo(args) {
        // Format Assignee column
       
            if (args.column.headerText === 'Assignee' && args.data.taskData.resourcesImage) {
                args.image = { height: 30, width: 30, base64: args.data.taskData.resourcesImage};
                args.value = `${args.data.Assignee}\n${args.data.taskData.Department}`; 
            }

        // Set font color for Status or Priority columns
        if (args.column.field === 'Status' || args.column.field === 'Priority') {
            const styleFunction = args.column.field === 'Status' ? window.StatusContent : window.PriorityContent;
            const style = styleFunction(args.value); // args.value is the cell's value (e.g., "Completed" for Status, "High" for Priority)
            const rgbMatch = style.match(/rgb\(\d+,\s*\d+,\s*\d+\)/);
            if (rgbMatch) {
                const rgbValues = rgbMatch[0].slice(4, -1).split(', ').map(Number);
                args.style.fontColor = new ej.pdfexport.PdfColor(rgbValues[0], rgbValues[1], rgbValues[2]);
            }   
        }
    }

    function pdfQueryTaskbarInfo(args){
        if(gantt.labelSettings.rightLabel && args.data.taskData.resourcesImage){
            args.labelSettings.rightLabel.image= [{base64: args.data.taskData.resourcesImage, height: 25, width: 25}];
            args.labelSettings.rightLabel.value=args.data.ganttProperties.resourceNames;
        }
    }

    window.Status = function (status) {
        switch (status) {
            case "In Progress":
                statusStyleColor =  (CurrentTheme) ? "#006aa6ff" : "#34B6FF";
                style = "display: flex; padding: 2px 10px; gap: 10px; width: 96px; height: 24px; border: solid 1px" + statusStyleColor;
                break;
            case "Open":
                style = "display: flex; justify-content:center; gap: 10px; width: 96px; height: 24px; border: solid 1px red";
                break;
            case "On Hold":
                statusStyleColor =  (CurrentTheme) ? "#766B7C" : "#CDCBD7";
                style = "display: flex; justify-content:center; gap: 10px; width: 96px; height: 24px; border: solid 1px" + statusStyleColor;
                break;
            case "Completed":
                statusStyleColor = (CurrentTheme) ? "#00A653" : "#92FFC8";
                style = "display: flex; padding: 2px 10px; gap: 10px; width: 96px; height: 24px; border: solid 1px" + statusStyleColor;
                break;
        }
        return style;
    };
    window.StatusContent = function (status) {
        switch (status) {
            case "In Progress":
                statusContentstyleColor = (CurrentTheme) ? "rgb(0, 106, 166)" : "rgb(52, 182, 255)";
                style = "width: 72px; height: 22px; font-style: normal; font-weight: 400; font-size: 14px; line-height: 20px; text-align: center; color: " + statusContentstyleColor;
                break;
            case "Open":
                style = "width: 54px; height: 22px; font-style: normal;  font-weight: 400; font-size: 14px; line-height: 22px; text-align: center; color: rgb(255, 0, 0); ";
                break;
            case "On Hold":
                statusContentstyleColor = (CurrentTheme) ? "rgb(118, 107, 124)" : "rgb(205, 203, 215)";
                style = "width: 54px; height: 22px; font-style: normal;  font-weight: 400; font-size: 14px; line-height: 22px; text-align: center; color: " + statusContentstyleColor;
                break;
            case "Completed":
                statusContentstyleColor = (CurrentTheme) ? "rgb(0, 166, 83)" : "rgb(146, 255, 200)";
                style = "width: 74px; height: 22px; font-style: normal; font-weight: 400; font-size: 14px; line-height: 20px; text-align: center; color: " + statusContentstyleColor;
                break;
            case "High":
                statusContentstyleColor = (CurrentTheme) ? "rgb(243, 86, 32)" : "rgb(255, 181, 184)";
                style = "width: 31px; height: 22px; font-style: normal; font-weight: 400; font-size: 14px; line-height: 20px; text-align: center; color: " + statusContentstyleColor;
                break;
        }
        return style;
    };
    window.PriorityIconStyle = function (priority) {
        switch (priority) {
            case "Low":
                priorityStyle = (CurrentTheme) ? "#00A653" : "#FDFF88";
                style = " margin-top:2px; color: " + priorityStyle + "!important";
                break;
            case "Normal":
                priorityStyle = (CurrentTheme) ? "#7100A6" : "#E3A9FF";
                style = " margin-top:2px; !important; color: " + priorityStyle + "!important"; 
                break;
            case "Critical":
                priorityStyle = (CurrentTheme) ? "#FF3740" : "#FFB5B8";
                style = "margin-top:2px; color: " + priorityStyle + "!important"; 
                break;
            case "High":
                priorityStyle = (CurrentTheme) ? "#f35620" : "#FFB5B8";
                style = "margin-top:2px; color: " + priorityStyle + "!important"; 
                break;
        }
        return style;
    };
    window.PriorityContent = function (priority) {
        switch (priority) {
            case "Low":
                priorityContentStyle = (CurrentTheme) ? "rgb(0, 166, 83)" : "rgb(253, 255, 136)";
                style = "width: 28px; height: 22px; font-style: normal;  font-size: 14px; margin-left:3px; line-height: 20px; text-align: center; color: " + priorityContentStyle;
                break;
            case "Normal":
                priorityContentStyle = (CurrentTheme) ? "rgb(113, 0, 166)" : "#rgb(227, 169, 255)";
                style = "width: 28px; height: 22px; font-style: normal;  margin-left:3px; font-size: 14px; line-height: 20px; text-align: center; color: " + priorityContentStyle;
                break;
            case "Critical":
                priorityContentStyle = (CurrentTheme) ? "rgb(255, 55, 64)" : "rgb(255, 181, 184)";
                style = "width: 48px; height: 22px; font-style: normal;  font-size: 14px; margin-left:3px; line-height: 20px; text-align: center; color: " + priorityContentStyle;
                break;
            case "High":
                priorityContentStyle = (CurrentTheme) ? "rgb(235, 99, 67)" : "rgb(255, 181, 184)";
                style = "width: 31px; height: 22px; font-style: normal; font-size: 14px; margin-left:3px; line-height: 20px; text-align: center; color: " + priorityContentStyle;
                break;
        }
        return style;
    };
    window.PriorityIcon = function (priority) {
        switch (priority) {
            case "Low":
                IconClass = "e-icons e-arrow-down e-icon-style";
                break;
            case "Normal":
                IconClass = "e-icons e-arrow-right e-icon-style";
                break;
            case "Critical":
                IconClass = "e-icons e-arrow-up e-icon-style";
                break;
            case "High":
                IconClass = "e-icons e-arrow-up e-icon-style";
                break;
        }
        return IconClass;
    };
    function initializeSidebar() {
        if (isSideBar) {
            if (!document.getElementById('sidebar')) {
                var sidebarDiv = document.createElement('div');
                sidebarDiv.id = 'sidebar';
                sidebarDiv.innerHTML = `
                <div class="ganttoverview-title-header">
                <div class="ganttoverview-title">Project Settings</div>
                    <button id="close" class="e-ganttoverview-close" aria-label="Close settings"></button>
                </div>
                <ul class="ganttoverview-settings-list">
                    <li class="ganttoverview-list-fields">
                        <label for="default" class="ganttoverview-labels-style">Row height :</label>
                        <div id="default" style="left: 20px;"></div>
                    </li>
                    <li class="ganttoverview-list-fields-labels ganttoverview-side-by-side-container">
                        <label for="showGridLines" class="ganttoverview-labels">Show grid lines :</label>
                        <input id="showGridLines" type="checkbox" class="ganttoverview-right-aligned-input">
                    </li>
                    <li class="ganttoverview-list-fields-labels ganttoverview-side-by-side-container">
                        <label for="showEventMarkers" class="ganttoverview-labels">Show event markers :</label>
                        <input id="showEventMarkers" type="checkbox" class="ganttoverview-right-aligned-input">
                    </li>
                    <li class="ganttoverview-list-fields-labels ganttoverview-side-by-side-container">
                        <label for="dependencyLines" class="ganttoverview-labels">Show dependencies :</label>
                        <input id="dependencyLines" type="checkbox" class="ganttoverview-right-aligned-input">
                    </li>
                    <li class="ganttoverview-list-fields-labels ganttoverview-side-by-side-container">
                        <label for="taskLabelChange" class="ganttoverview-labels">Show task labels :</label>
                        <input id="taskLabelChange" type="checkbox" class="ganttoverview-right-aligned-input">
                    </li>
                    <li class="ganttoverview-list-fields ganttoverview-section-header">
                        <label id="scheduling" class="ganttoverview-section-header-label">Scheduling Settings</label>
                    </li>
                    <li class="ganttoverview-list-fields">
                        <label for="WorkingDays" class="ganttoverview-labels-style">Working days:</label>
                        <div class="ganttoverview-container">
                            <input id="WorkingDays" type="checkbox" class="ganttoverview-right-aligned-input">
                        </div>
                    </li>
                    <li class="ganttoverview-list-fields ganttoverview-stack-container">
                        <label for="DurationUnit" class="ganttoverview-labels-style">Duration unit:</label>
                        <div class="ganttoverview-container">
                            <input id="DurationUnit" type="text" class="ganttoverview-right-aligned-input">
                        </div>
                    </li>
                    <li class="ganttoverview-list-fields ganttoverview-stack-container">
                        <label for="unitWidth" class="ganttoverview-labels-style">Timeline width:</label>
                        <div class="ganttoverview-container">
                            <input id="unitWidth" type="text" class="ganttoverview-right-aligned-input">
                        </div>
                    </li>
                    <li class="ganttoverview-list-fields ganttoverview-section-header">
                        <label id="viewSettings" class="ganttoverview-section-header-label">View Settings</label>
                    </li>
                    <li class="ganttoverview-list-fields ganttoverview-stack-container">
                        <label for="viewType" class="ganttoverview-labels-style">View type:</label>
                        <div class="ganttoverview-container">
                            <input id="viewType" type="text" class="ganttoverview-right-aligned-input">
                        </div>
                    </li>
                    <li class="ganttoverview-list-fields ganttoverview-stack-container">
                        <label for="viewMode" class="ganttoverview-labels-style">View mode:</label>
                        <div class="ganttoverview-container">
                            <input id="viewMode" type="text" class="ganttoverview-right-aligned-input">
                        </div>
                    </li>
                </ul>
                `;
                document.querySelector('#gantt-sidebar-parent').appendChild(sidebarDiv);
                document.getElementById('close').addEventListener('click', function () {
                    document.getElementById('sidebar').remove();
                    sidebarObj.hide();
                    sidebarToggle = false;
                    isSideBar = false;
                });

                sidebarObj = new ej.navigations.Sidebar({
                    width: '280px',
                    type: 'Over',
                    position: 'Right',
                    target: '#sidebar-gantt',
                    isOpen: sidebarToggle
                });
                sidebarObj.appendTo('#sidebar');

                // type change
                var viewType = [
                    { id: "ResourceView", Text: "Resource View" },
                    { id: "ProjectView", Text: "Project View" }
                ];

                var checkListViewType = new ej.dropdowns.DropDownList({
                    dataSource: viewType,
                    change: typeChange,
                    value: gantt.viewType,
                    fields: { text: 'Text', value: 'id' },
                    placeholder: 'View type',
                    popupHeight: '350px'
                });
                checkListViewType.appendTo('#viewType');

                // grid lines
                var gridLines = new ej.buttons.Switch({ checked: gantt.gridLines === 'Both', change: gridLinesChange });
                gridLines.appendTo('#showGridLines');

                // event markers
                var eventMarkers = new ej.buttons.Switch({ checked: gantt.eventMarkers && gantt.eventMarkers.length > 0, change: eventMarkersChange });
                eventMarkers.appendTo('#showEventMarkers');

                // dependency lines
                var ganttDependencyViewContainer = document.querySelector('.e-gantt-dependency-view-container');
                dependency = new ej.buttons.Switch({
                    checked: ganttDependencyViewContainer && ganttDependencyViewContainer.style.visibility || isChecked !== 'hidden', change: dependencyChange
                });
                dependency.appendTo('#dependencyLines');

                // task label
                var taskLabel = new ej.buttons.Switch({ checked: gantt.labelSettings.rightLabel && gantt.labelSettings.rightLabel.length > 0, change: taskLabelChange });
                taskLabel.appendTo('#taskLabelChange');

                var defaultObj = new ej.inputs.Slider({
                    min: 40,
                    value: 30,
                    max: 60,
                    step: 5,
                    width: '190px',
                    tooltip: { placement: 'Before', isVisible: true, showOn: "Hover" },
                    ticks: { placement: 'Before', largeStep: 10, smallStep: 10, showSmallTicks: true },
                    changed: onChanged
                });
                defaultObj.appendTo('#default');

                // working days
                var workDays = [
                    { id: 'Sunday', day: 'Sunday' },
                    { id: 'Monday', day: 'Monday' },
                    { id: 'Tuesday', day: 'Tuesday' },
                    { id: 'Wednesday', day: 'Wednesday' },
                    { id: 'Thursday', day: 'Thursday' },
                    { id: 'Friday', day: 'Friday' },
                    { id: 'Saturday', day: 'Saturday' }
                ];

                var checkListWorkingDays = new ej.dropdowns.MultiSelect({
                    dataSource: workDays,
                    select: selected,
                    removed: deselected,
                    value: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    placeholder: 'WorkWeek',
                    fields: { text: 'day', value: 'id' },
                    mode: 'CheckBox',
                    showDropDownIcon: true,
                    popupHeight: '350px'
                });
                checkListWorkingDays.appendTo('#WorkingDays');

                // duration unit
                var durationUnit = [
                    { id: "Minute", Text: "Minute" },
                    { id: "Hour", Text: "Hour" },
                    { id: "Day", Text: "Day" }
                ];

                var input = new ej.dropdowns.DropDownList({
                    dataSource: durationUnit,
                    change: durationChange,
                    placeholder: 'Day',
                    fields: { text: 'Text', value: 'id' }
                });
                input.appendTo('#DurationUnit');

                // timline unit size
                var unitWidthNumObj = new ej.inputs.NumericTextBox({
                    min: 10,
                    format: 'n',
                    value: 33,
                    change: unitChange
                });
                unitWidthNumObj.appendTo('#unitWidth');


                // view mode
                viewMode = [
                    { ID: "Default", Text: "Default" },
                    { ID: "Grid", Text: "Grid" },
                    { ID: "Chart", Text: "Chart" }
                ];

                var checkListViewMode = new ej.dropdowns.DropDownList({
                    dataSource: viewMode,
                    placeholder: 'View',
                    fields: { value: 'ID', text: 'Text' },
                    change: viewChange,
                    popupHeight: '350px'
                });
                checkListViewMode.appendTo('#viewMode');
            }
        }
    }

    var clickBtn = new ej.buttons.Button();
    clickBtn.appendTo('#settings-btn');
    document.getElementById('settings-btn').addEventListener('click', function () {
        sidebarToggle = !sidebarToggle;
        isSideBar = true;
        initializeSidebar();
        sidebarObj.isOpen = true;
    });

    function gridLinesChange(args) {
        gantt.gridLines = args.checked ? 'Both' : 'Vertical';
    }

    var tempEventMarkers = [];
    function eventMarkersChange(args) {
        if (args.checked) {
            gantt.eventMarkers = tempEventMarkers;
        } else {
            tempEventMarkers = gantt.eventMarkers;
            gantt.eventMarkers = " ";
        }
    }

    function dependencyChange(args) {
        var ganttDependencyViewContainer = document.querySelector('.e-gantt-dependency-view-container');
        if (ganttDependencyViewContainer) {
            ganttDependencyViewContainer.style.visibility = args.checked ? 'visible' : 'hidden';
        }
    }

    function initializeDependencySwitch() {
        var ganttDependencyViewContainer = document.querySelector('.e-gantt-dependency-view-container');
        if (!dependency) {
            dependency = new ej.buttons.Switch({
                checked: (ganttDependencyViewContainer && ganttDependencyViewContainer.style.visibility !== 'hidden') || isChecked,
                change: dependencyChange
            });
            dependency.appendTo('#dependencyLines');
        } else {
            dependency.checked = (ganttDependencyViewContainer && ganttDependencyViewContainer.style.visibility !== 'hidden') || isChecked;
        }
    }

    var tempRightLabel = " ";
    function taskLabelChange(args) {
        if (args.checked) {
            gantt.labelSettings.rightLabel = tempRightLabel;
        } else {
            tempRightLabel = gantt.labelSettings.rightLabel;
            gantt.labelSettings.rightLabel = "";
        }
    }

    function onChanged(args) {
        gantt.rowHeight = args.value;
    }

    function selected(args) {
        var workingDays = ej.base.extend([], this.value, [], true);
        workingDays.push(args.itemData.day);
        gantt.workWeek = workingDays;
    }

    function deselected(args) {
        var index = gantt.workWeek.indexOf(args.itemData.day);
        if (index !== -1) {
            gantt.workWeek = this.value;
        }
    }

    function durationChange(args) {
        gantt.durationUnit = args.value;
    }

    function unitChange(args) {
        gantt.timelineSettings.timelineUnitSize = args.value;
    }

    function typeChange(args) {
        gantt.viewType = args.value;
        setTimeout(() => {
            isChecked = true;
            initializeDependencySwitch();
        }, 0);
    }

    function viewChange(args) {
        if (args.value === 'Grid') {
            gantt.setSplitterPosition('100%', 'position');
        } else if (args.value === 'Chart') {
            gantt.setSplitterPosition('0%', 'position');
        } else {
            gantt.setSplitterPosition('50%', 'position');
        }
    }
    window.getConstraintText = function (value) {
        var map = {
            0: 'As Soon As Possible',
            1: 'As Late As Possible',
            2: 'Must Start On',
            3: 'Must Finish On',
            4: 'Start No Earlier Than',
            5: 'Start No Later Than',
            6: 'Finish No Earlier Than',
            7: 'Finish No Later Than'
        };
        return map[value];
    };
};
