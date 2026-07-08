this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: [
            { taskID: 1, taskName: 'Project schedule', startDate: new Date('02/04/2025 08:00'), endDate: new Date('03/10/2025')},
            { taskID: 2, taskName: 'Planning', startDate: new Date('02/04/2025 08:00'), endDate: new Date('02/10/2025'), parentID: 1},
            { taskID: 3, taskName: 'Plan timeline', startDate: new Date('02/04/2025 08:00'), endDate: new Date('02/10/2025'), duration: 6, progress: '60', parentID: 2 },
            { taskID: 4, taskName: 'Plan budget', startDate: new Date('02/04/2025 08:00'), endDate: new Date('02/10/2025'), duration: 6, progress: '90', parentID: 2 },
            { taskID: 5, taskName: 'Allocate resources', startDate: new Date('02/04/2025 08:00'), endDate: new Date('02/10/2025'), duration: 6, progress: '75', parentID: 2 },
            { taskID: 6, taskName: 'Planning complete', startDate: new Date('02/06/2025 08:00'), endDate: new Date('02/10/2025'), duration: 0,  predecessor: '3FS,4FS,5FS', parentID: 2 },
            { taskID: 7, taskName: 'Design', startDate: new Date('02/13/2025 08:00'), endDate: new Date('02/17/2025 08:00'), parentID: 1, },
            { taskID: 8, taskName: 'Software specification', startDate: new Date('02/13/2025 08:00'), endDate: new Date('02/15/2025'), duration: 3, progress: '60', predecessor: '6FS', parentID: 7, },
            { taskID: 9, taskName: 'Develop prototype', startDate: new Date('02/13/2025 08:00'), endDate: new Date('02/15/2025'), duration: 3, progress: '100', predecessor: '6FS', parentID: 7, },
            { taskID: 10, taskName: 'Get approval from customer', startDate: new Date('02/16/2025 08:00'), endDate: new Date('02/17/2025 08:00'), duration: 2, progress: '100', predecessor: '9FS', parentID: 7 },
            { taskID: 11, taskName: 'Design complete', startDate: new Date('02/17/2025 08:00'), endDate: new Date('02/17/2025 08:00'), duration: 0, predecessor: '10FS', parentID: 7 },
            { taskID: 12, taskName: 'Implementation', startDate: new Date('02/18/2025 08:00'), endDate: new Date('02/25/2025 08:00'), parentID: 1 },
            { taskID: 13, taskName: 'Develop core modules', startDate: new Date('02/18/2025 08:00'), endDate: new Date('02/22/2025'), duration: 5, progress: '80', predecessor: '11FS', parentID: 12 },
            { taskID: 14, taskName: 'Integrate modules', startDate: new Date('02/19/2025 08:00'), endDate: new Date('02/23/2025'), duration: 5, progress: '70', predecessor: '13FS', parentID: 12 },
            { taskID: 15, taskName: 'Implementation complete', startDate: new Date('02/25/2025 08:00'), endDate: new Date('02/25/2025 08:00'), duration: 0, predecessor: '14FS', parentID: 12 },
            { taskID: 16, taskName: 'Testing', startDate: new Date('02/26/2025 08:00'), endDate: new Date('03/02/2025 08:00'), parentID: 1 },
            { taskID: 17, taskName: 'Unit testing', startDate: new Date('02/26/2025 08:00'), endDate: new Date('02/28/2025'), duration: 3, progress: '50', predecessor: '15FS', parentID: 16 },
            { taskID: 18, taskName: 'Integration testing', startDate: new Date('02/27/2025 08:00'), endDate: new Date('03/01/2025'), duration: 4, progress: '40', predecessor: '17FS', parentID: 16 },
            { taskID: 19, taskName: 'Test report', startDate: new Date('03/02/2025 08:00'), endDate: new Date('03/02/2025 08:00'), duration: 0, predecessor: '18FS', parentID: 16 },
            { taskID: 20, taskName: 'Deployment', startDate: new Date('03/03/2025 08:00'), endDate: new Date('03/06/2025 08:00'), parentID: 1 },
            { taskID: 21, taskName: 'Configure environment', startDate: new Date('03/03/2025 08:00'), endDate: new Date('03/04/2025'), duration: 2, progress: '30', predecessor: '19FS', parentID: 20 },
            { taskID: 22, taskName: 'Deploy application', startDate: new Date('03/04/2025 08:00'), endDate: new Date('03/05/2025'), duration: 2, progress: '20', predecessor: '21FS', parentID: 20 },
            { taskID: 23, taskName: 'Deployment verification', startDate: new Date('03/06/2025 08:00'), endDate: new Date('03/06/2025 08:00'), duration: 0, predecessor: '22FS', parentID: 20 },
            { taskID: 24, taskName: 'Training', startDate: new Date('03/07/2025 08:00'), endDate: new Date('03/08/2025 08:00'), parentID: 1 },
            { taskID: 25, taskName: 'User training', startDate: new Date('03/07/2025 08:00'), endDate: new Date('03/07/2025'), duration: 1, progress: '10', predecessor: '23FS', parentID: 24 },
            { taskID: 26, taskName: 'Admin training', startDate: new Date('03/07/2025 08:00'), endDate: new Date('03/08/2025'), duration: 2, progress: '10', predecessor: '23FS', parentID: 24 },
            { taskID: 27, taskName: 'Training complete', startDate: new Date('03/08/2025 08:00'), endDate: new Date('03/08/2025 08:00'), duration: 0, predecessor: '25FS,26FS', parentID: 24 },
            { taskID: 28, taskName: 'Client review', startDate: new Date('03/09/2025 08:00'), endDate: new Date('03/09/2025'), duration: 1, progress: '0', predecessor: '27FS', parentID: 1 },
            { taskID: 29, taskName: 'Project handover', startDate: new Date('03/10/2025 08:00'), endDate: new Date('03/10/2025'), duration: 0, predecessor: '28FS', parentID: 1 },
            { taskID: 30, taskName: 'Post-project review', startDate: new Date('03/10/2025 08:00'), endDate: new Date('03/10/2025 08:00'), duration: 0, progress: '0', predecessor: '29FS', parentID: 1 }
        ],
        taskFields: {
            id: 'taskID',
            name: 'taskName',
            startDate: 'startDate',
            duration: 'duration',
            progress: 'progress',
            dependency: 'predecessor',
            parentID: 'parentID'
        },
        treeColumnIndex: 1,
        columns: [
            { field: 'taskID', visible: false, width: 60 },
            { field: 'taskName', headerText: 'Name', width: 250 },
            { field: 'startDate' },
            { field: 'endDate', headerText: 'End Date', width: 120 },
            { field: 'duration' },
            { field: 'predecessor' },
            { field: 'progress' }
        ],
        timelineSettings: {
            timelineUnitSize: 90,
            topTier: {
                unit: 'Day',
                format: 'EEE dd/yyyy'
            },
            bottomTier: {
                unit: 'Hour',
                format: 'hh:mm a'
            }
        },
        enableRtl: document.dir === 'rtl',
        timezone: 'UTC',
        durationUnit: 'Hour',
		includeWeekend: true,
        dateFormat: 'hh:mm a',
        height: '650px',
        rowHeight: 46,
        taskbarHeight: 25,
        dayWorkingTime: [{ from: 0, to: 23 }]
    });

    ganttChart.appendTo('#timezone');

    //  ---------- TIMEZONE LIST ----------
     function getTimeZonesWithOffsets() {
        var now = new Date();
        var zones;
        // Check if Intl.supportedValuesOf is available
        if (Intl.supportedValuesOf) {
            zones = Intl.supportedValuesOf('timeZone');
            // Ensure UTC is included and comes first
            if (zones.indexOf('UTC') === -1) {
                zones.unshift('UTC');
            }
        } 
        // Remove duplicates while preserving order
        var uniqueZones = [];
        var seen = {};
        for (var i = 0; i < zones.length; i++) {
            if (!seen[zones[i]]) {
                seen[zones[i]] = true;
                uniqueZones.push(zones[i]);
            }
        }
        return uniqueZones.map(function(tz) {
            var formatter = new Intl.DateTimeFormat('en-US', {
                timeZone: tz,
                timeZoneName: 'longOffset'
            });
            var parts = formatter.formatToParts(now);
            var offsetPart = parts.find(function(part) { return part.type === 'timeZoneName'; });
            var offset = offsetPart ? offsetPart.value : 'UTC+00:00';
            offset = offset.replace('GMT', 'UTC');
            // Ensure zero-offset time zones display UTC+00:00
            if (offset === 'UTC' || offset === 'GMT') {
                offset = 'UTC+00:00';
            }
            return { id: tz, text: tz + ' (' + offset + ')' };
        });
    }

    //  Timezone dropdown
    var timeZoneList = new ej.dropdowns.ComboBox({
        dataSource: getTimeZonesWithOffsets(),
        value: 'UTC (UTC+00:00)',
        placeholder:"Select timezone",
        width: '300px',
        popupHeight: '350px',
        popupWidth: '300px',
        ignoreAccent: true,
        filterType: 'Contains',
        allowFiltering: true,
        change: function (args) {
            ganttChart.timezone = args.value ? args.value.split(' (')[0] : null;
        }
    });
    timeZoneList.appendTo('#timezonelist');

    // Timeline mode
    var timelineList = new ej.dropdowns.DropDownList({
        dataSource: ['Day', 'Week', 'Month'],
        width: '100px',
        placeholder: "Select timeline mode",
        value: ganttChart.timelineSettings.topTier.unit,
        change: function (args) {
            if (args.value === 'Day') {
                ganttChart.timelineSettings.topTier.unit = 'Day';
                ganttChart.timelineSettings.bottomTier.unit = 'Hour';
                ganttChart.timelineSettings.bottomTier.format = 'hh:mm a';
            } else if (args.value === 'Week') {
                ganttChart.timelineSettings.topTier.unit = 'Week';
                ganttChart.timelineSettings.bottomTier.unit = 'Day';
                ganttChart.timelineSettings.bottomTier.format = 'dd MMM';
            } else {
                ganttChart.timelineSettings.topTier.unit = 'Month';
                ganttChart.timelineSettings.bottomTier.unit = 'Day';
                ganttChart.timelineSettings.bottomTier.format = 'dd';
            }
        }
    });
    timelineList.appendTo('#timeline');

    // Buttons
    new ej.buttons.Button().appendTo('#previous-timespan');
    new ej.buttons.Button().appendTo('#next-timespan');

    document.getElementById('previous-timespan').onclick = function () {
        ganttChart.previousTimeSpan();
    };

    document.getElementById('next-timespan').onclick = function () {
        ganttChart.nextTimeSpan();
    };
};