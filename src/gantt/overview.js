/* jshint esversion: 6 */
this.default = function () {
    var theme;
    var style;
    var CurrentTheme;
    var statusStyleColor;
    var priorityStyle;
    var priorityContentStyle;
    var statusContentstyleColor;
    var isSideBar = false;
    var sidebarObj;
    var sidebarToggle;
    var isChecked;

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
        pdfQueryCellInfo: pdfQueryCellInfo,
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
            { field: 'Assignee', width: 135, allowSorting: false, headerText: 'Assignee', template: '#columnTemplate' },
            { field: 'Status', minWidth: 100, width: 120, headerText: 'Status', template: '#columnTemplate1' },
            { field: 'Priority', minWidth: 80, width: 100, headerText: 'Priority', template: '#columnTemplate2' },
            { field: 'Work', width: 120, headerText: 'Planned Hours' },
            { field: 'TimeLog', width: 120, headerText: 'Work Log' }
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
            var themeCollection = ['bootstrap5', 'bootstrap', 'bootstrap4', 'fluent', 'fabric', 'fusionnew', 'material3', 'material', 'highcontrast', 'tailwind','fluent2','tailwind3','bootstrap5.3'];
            var cls = document.body.className.split(' ');
            theme = cls.indexOf('bootstrap5') > 0 ? 'bootstrap5' : cls.indexOf('bootstrap') > 0 ? 'bootstrap' : cls.indexOf('tailwind') > 0 ? 'tailwind' : cls.indexOf('tailwind3') > 0 ? 'tailwind3' :
                cls.indexOf('fluent') > 0 ? 'fluent' :cls.indexOf('fluent2') > 0 ? 'fluent2' : cls.indexOf('fabric') > 0 ? 'fabric' : cls.indexOf('bootstrap5.3') > 0 ? 'bootstrap5.3' :
                    cls.indexOf('material3') > 0 ? 'material3' : cls.indexOf('bootstrap4') > 0 ? 'bootstrap4' : cls.indexOf('material') > 0 ? 'material' :
                        cls.indexOf('fusionnew') > 0 ? 'fusionnew' : cls.indexOf('highcontrast') > 0 ? 'highcontrast' : '';
            var check = themeCollection.indexOf(theme);
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
                day: new Date('04/04/2024'),
                cssClass: 'e-custom-event-marker',
                label: 'Q-1 Release'
            },
            {
                day: new Date('06/30/2024'),
                cssClass: 'e-custom-event-marker',
                label: 'Q-2 Release'
            },
            {
                day: new Date('09/29/2024'),
                cssClass: 'e-custom-event-marker',
                label: 'Q-3 Release'
            }
        ],
        holidays: [{
            from: new Date("01/01/2024"),
            to: new Date("01/01/2024"),
            label: "New Year holiday",
            cssClass: "e-custom-holiday"
        },
        {
            from: new Date("12/25/2023"),
            to: new Date("12/26/2023"),
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
        projectStartDate: new Date('12/17/2023'),
        projectEndDate: new Date('10/26/2024'),
    });
    gantt.appendTo('#overviewSample');
    function pdfQueryCellInfo(args) {
        if (args.column.headerText === 'Assignee' && args.data.taskData.resourcesImage) {
            {
                args.image = { height:25,width:25, base64: args.data.taskData.resourcesImage };
            }
        }
    }

    window.Status = function (status) {
        switch (status) {
            case "In Progress":
                statusStyleColor = (CurrentTheme) ? "#DFECFF" : "#2D3E57";
                style = "display: flex; padding: 0px 12px; gap: 10px; width: 96px; height: 24px; border-radius: 24px; background:" + statusStyleColor;
                break;
            case "Open":
                style = "background-color: red; color: white; border-radius: 15px; padding:6px";
                break;
            case "On Hold":
                statusStyleColor = (CurrentTheme) ? "#E4E4E7" : "#3C3B43";
                style = "display: flex; border-radius: 24px; padding: 0px 12px; gap: 10px; width: 78px; height: 24px; background:" + statusStyleColor;
                break;
            case "Completed":
                statusStyleColor = (CurrentTheme) ? "#DFFFE2" : "#16501C";
                style = "display: flex; padding: 0px 12px; gap: 10px; width: 98px; height: 24px; border-radius: 24px;background:" + statusStyleColor;
                break;
            case "High":
                statusStyleColor = (CurrentTheme) ? "#FFEBE9" : "#48211D";
                style = "display: flex; padding: 0px 12px; gap: 10px; width: 55px; height: 24px; border-radius: 24px; background:" + statusStyleColor;
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
                style = "width: 54px; height: 22px; font-style: normal; font-weight: 500; font-size: 14px; line-height: 22px; text-align: center; color: " + statusContentstyleColor;
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
                style = "display: flex; padding: 0px 12px; gap: 10px; width: 52px; height: 24px; border-radius: 24px; background: " + priorityStyle;
                break;
            case "Normal":
                priorityStyle = (CurrentTheme) ? "#F5DFFF" : "#4D2F5A";
                style = "display: flex; padding: 0px 12px; gap: 10px; width: 73px; height: 24px; border-radius: 24px; background: " + priorityStyle;
                break;
            case "Critical":
                priorityStyle = (CurrentTheme) ? "#FFEBE9" : "#48211D";
                style = "display: flex; padding: 0px 12px; gap: 10px; width: 72px; height: 24px; border-radius: 24px; background: " + priorityStyle;
                break;
            case "High":
                priorityStyle = (CurrentTheme) ? "#FFEBE9" : "#48211D";
                style = "display: flex; padding: 0px 12px; gap: 10px; width: 55px; height: 24px; border-radius: 24px; background: " + priorityStyle;
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
                    value: 'Day',
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
            gantt.eventMarkers = null;
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

    var tempRightLabel = null;
    function taskLabelChange(args) {
        if (args.checked) {
            gantt.labelSettings.rightLabel = tempRightLabel;
        } else {
            tempRightLabel = gantt.labelSettings.rightLabel;
            gantt.labelSettings.rightLabel = null;
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
};