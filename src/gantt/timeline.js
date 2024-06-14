this.default = function () {
    var yearformat = [
        { id: 'MMM "yy', format: 'Jan "18' },
        { id: 'y', format: '2018' },
        { id: 'MMMM, y', format: 'January, 18' },
    ];
    var monthformat = [
        { id: 'MMM dd, yyyy', format: 'Jan 01, 2018' },
        { id: 'MMMM', format: 'January' },
        { id: 'MMM', format: 'Jan' },
    ];
    var weekformat = [
        { id: 'MMM dd, yyyy', format: 'Jan 01, 2019' },
        { id: 'EEE MMM dd, "yy', format: 'Mon Jan 01, "19' },
        { id: 'EEE MMM dd', format: 'Mon Jan 01' },
    ];
    var dayformat = [
        { id: '', format: 'M' },
        { id: 'EEE', format: 'Mon' },
        { id: 'dd', format: '01' },
    ];
    var hourformat = [
        { id: 'hh', format: '00' },
        { id: 'hh : mm a', format: '00 : 00 AM' },
        { id: 'h : mm a', format: '0 : 00 AM' },
    ];
    var unit = [
        { id: 'Year', unit: 'Year' },
        { id: 'Month', unit: 'Month' },
        { id: 'Week', unit: 'Week' },
        { id: 'Day', unit: 'Day' },
        { id: 'Hour', unit: 'Hour' },
    ];
    
    var gantt = new ej.gantt.Gantt({
        dataSource: window.projectData,
        taskFields: {
            id: 'taskID',
            name: 'taskName',
            startDate: 'startDate',
            endDate: 'endDate',
            duration: 'duration',
            progress: 'progress',
            dependency: 'predecessor',
            child: 'subtasks',
        },
        height: '503px',
        highlightWeekends: true,
        projectStartDate: new Date('02/03/2024'),
        projectEndDate: new Date('03/23/2024'),
        timelineSettings: {
            topTier: {
                format: 'MMM dd, yyyy',
                unit: 'Week',
            },
            bottomTier: {
                unit: 'Day',
            }
        },
        splitterSettings: {
            columnIndex: 1
        },
        treeColumnIndex: 1,
        labelSettings: {
            rightLabel: 'taskName',
        },
        columns: [
            { field: 'taskID', visible: false },
            { field: 'taskName', headerText: 'Name', width: 250 },
            { field: 'StartDate', headerText: 'Start Date', type: 'date', format: 'yMd' },
            { field: 'endDate', headerText: 'End Date', type: 'date', format: 'yMd' },
            { field: 'duration', headerText: 'Duration' },
            { field: 'predecessor', headerText: 'Dependency' },
            { field: 'progress', headerText: 'Progress' }
        ]
    });
    gantt.appendTo('#Timeline');

    var topTierCount = new ej.inputs.NumericTextBox({
        format: 'n',
        min: 1,
        max: 50,
        value: 1,
        change: function (e) {
            var count = e.value;
            gantt.timelineSettings.topTier.count = count;
        }
    });
    topTierCount.appendTo('#count');

    var bottomTierCount = new ej.inputs.NumericTextBox({
        min: 1,
        max: 50,
        format: 'n',
        value: 1,
        change: function (e) {
            var count = e.value;
            gantt.timelineSettings.bottomTier.count = count;
        }
    });
    bottomTierCount.appendTo('#btCount');

    var topTierformat = new ej.dropdowns.DropDownList({
        dataSource: weekformat,
        fields: { text: 'format', value: 'id' },
        value: 'MMM dd, yyyy',
        change: function (e) {
            var format = e.value;
            gantt.timelineSettings.topTier.format = format.toString();
        }
    });
    topTierformat.appendTo('#format');

    var topTierUnit = new ej.dropdowns.DropDownList({
        dataSource: unit,
        fields: { text: 'unit', value: 'id' },
        value: 'Week',
        change: function (e) {
            var unit = e.value;
            gantt.timelineSettings.topTier.unit = unit;
            if (unit === 'Year') {
                topTierformat.dataSource = yearformat;
            } else if (unit === 'Month') {
                topTierformat.dataSource = monthformat;
            } else if (unit === 'Week') {
                topTierformat.dataSource = weekformat;
            } else if (unit === 'Day') {
                topTierformat.dataSource = dayformat;
            } else {
                topTierformat.dataSource = hourformat;
            }
            topTierformat.refresh();
            updateUnitWidth(unit, 'top');
            gantt.timelineSettings.topTier.unit = unit;
        }
    });
    topTierUnit.appendTo('#unit');

    var bottomTierformat = new ej.dropdowns.DropDownList({
        dataSource: dayformat,
        value: '',
        fields: { text: 'format', value: 'id' },
        change: function (e) {
            var format = e.value;
            gantt.timelineSettings.bottomTier.format = format.toString();
        }
    });
    bottomTierformat.appendTo('#btFormat');

    var bottomTierUnit = new ej.dropdowns.DropDownList({
        dataSource: unit,
        fields: { text: 'unit', value: 'id' },
        value: 'Day',
        change: function (e) {
            var unit = e.value;
            gantt.timelineSettings.bottomTier.unit = unit;
            if (unit === 'Year') {
                bottomTierformat.dataSource = yearformat;
            } else if (unit === 'Month') {
                bottomTierformat.dataSource = monthformat;
            } else if (unit === 'Week') {
                bottomTierformat.dataSource = weekformat;
            } else if (unit === 'Day') {
                bottomTierformat.dataSource = dayformat;
            } else {
                bottomTierformat.dataSource = hourformat;
            }
            bottomTierformat.refresh();
            updateUnitWidth(unit, 'bottom');
            gantt.timelineSettings.bottomTier.unit = unit;
        }
    });
    bottomTierUnit.appendTo('#btUnit');

    var topTier = new ej.buttons.CheckBox({ checked: true });
    topTier.appendTo('#topTierCheck');

    var bottomTier = new ej.buttons.CheckBox({ checked: true });
    bottomTier.appendTo('#bottomTierCheck');

    document.getElementById('topTierCheck').onclick = function () {
        if (topTier.checked) {
            gantt.timelineSettings.topTier.unit = 'Week';
            topTierCount.enabled = true;
            topTierformat.enabled = true;
            topTierUnit.enabled = true;
        } else {
            gantt.timelineSettings.topTier.unit = 'None';
            topTierCount.enabled = false;
            topTierformat.enabled = false;
            topTierUnit.enabled = false;
        }
    };

    document.getElementById('bottomTierCheck').onclick = function () {
        if (bottomTier.checked) {
            gantt.timelineSettings.bottomTier.unit = 'Day';
            bottomTierCount.enabled = true;
            bottomTierformat.enabled = true;
            bottomTierUnit.enabled = true;
        } else {
            gantt.timelineSettings.bottomTier.unit = 'None';
            bottomTierCount.enabled = false;
            bottomTierformat.enabled = false;
            bottomTierUnit.enabled = false;
        }
    };

    var unitWidthNumObj = new ej.inputs.NumericTextBox({
        min: 10,
        format: 'n',
        value: 33,
        change: function (e) {
            var width = e.value;
            gantt.timelineSettings.timelineUnitSize = width;
        }
    });
    unitWidthNumObj.appendTo('#unitWidth');

    function updateUnitWidth(unit, tier) {
        var topUnit = tier === 'top' ? unit : gantt.timelineSettings.topTier.unit;
        var bottomUnit = tier === 'bottom' ? unit : gantt.timelineSettings.bottomTier.unit;
        var units = ['None', 'Hour', 'Day', 'Week', 'Month', 'Year'];
        var bootomCellUnit;
        var unitWidth;
        if (units.indexOf(topUnit) === 0 && units.indexOf(bottomUnit) === 0) {
            bootomCellUnit = 'Day';
        } else if (units.indexOf(topUnit) === 0 && units.indexOf(bottomUnit) > 0) {
            bootomCellUnit = bottomUnit;
        } else if (units.indexOf(topUnit) > 0 && units.indexOf(bottomUnit) === 0) {
            bootomCellUnit = topUnit;
        } else if (units.indexOf(topUnit) <= units.indexOf(bottomUnit)) {
            bootomCellUnit = topUnit;
        } else {
            bootomCellUnit = bottomUnit;
        }
        if (bootomCellUnit === 'Year') {
            unitWidth = 2000;
        } else if (bootomCellUnit === 'Month') {
            unitWidth = 300;
        } else if (bootomCellUnit === 'Week') {
            unitWidth = 150;
        } else if (bootomCellUnit === 'Day') {
            unitWidth = 33;
        } else if (bootomCellUnit === 'Hour') {
            unitWidth = 25;
        }
        unitWidthNumObj.value = unitWidth;
    }

    var mutitaskbar = new ej.buttons.CheckBox({ checked: false });
    mutitaskbar.appendTo('#mutiTaskbarCheck');

    document.getElementById('mutiTaskbarCheck').onclick = function () {
        if (mutitaskbar.checked) {
            gantt.enableMultiTaskbar = true;
        } else {
            gantt.enableMultiTaskbar = false;
        }
    };
};
