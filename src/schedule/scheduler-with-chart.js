if (typeof loadCultureFiles === 'function') loadCultureFiles();

this.default = function () {
    if (typeof loadCultureFiles === 'function') loadCultureFiles();

    var Browser = ej.base.Browser;
    var extend = ej.base.extend;

    // Inject required modules into global ej instances
    ej.charts.Chart.Inject(ej.charts.ColumnSeries, ej.charts.Category, ej.charts.Legend, ej.charts.Tooltip, ej.charts.Highlight);
    ej.schedule.Schedule.Inject(ej.schedule.TimelineMonth, ej.schedule.Resize, ej.schedule.DragAndDrop);
    var truckEvents = [];
    // Drivers master (used both by Scheduler resources and for lookups)
    const driversMaster = [
        { driver: 'Ben Smith', id: 1, color: '#ea7a57', truck: 'Volvo FH16', capacity: '325 t' },
        { driver: 'Sarah Johnson', id: 2, color: '#7fa900', truck: 'Scania R730', capacity: '310 t' },
        { driver: 'Mike Chen', id: 3, color: '#5978ee', truck: 'Mercedes Actros', capacity: '290 t' },
        { driver: 'Emma Davis', id: 4, color: '#fec200', truck: 'MAN TGX', capacity: '280 t' },
        { driver: 'Carlos Rodriguez', id: 5, color: '#df5286', truck: 'DAF XF', capacity: '300 t' },
        { driver: 'Olivia Wilson', id: 6, color: '#00bdae', truck: 'Kenworth T680', capacity: '315 t' },
        { driver: 'James Taylor', id: 7, color: '#865fcf', truck: 'Peterbilt 579', capacity: '305 t' },
        { driver: 'Sophia Martinez', id: 8, color: '#1aaa55', truck: 'Freightliner Cascadia', capacity: '295 t' },
        { driver: 'Daniel Lee', id: 9, color: '#df5286', truck: 'Mack Anthem', capacity: '285 t' },
        { driver: 'Ava Thompson', id: 10, color: '#710193', truck: 'International LT', capacity: '275 t' }
    ];
    const driversById = new Map(driversMaster.map(function (d) { return [d.id, d.driver]; }));

    // Function to generate chart data based on mode
    function generateChartData(mode) {
        if (mode === 'capacity') {
            return driversMaster.map(function (d) {
                return {
                    Driver: d.driver,
                    Value: parseFloat(d.capacity.replace(' t', ''))
                };
            });
        }
        else if (mode === 'tripcount') {
            var countMap = {};
            for (var i = 0; i < truckEvents.length; i++) {
                var driver = truckEvents[i].Driver || driversById.get(truckEvents[i].DriverID);
                if (driver) {
                    countMap[driver] = (countMap[driver] || 0) + 1;
                }
            }
            // Return counts in driversMaster order (no extra referral counts)
            return driversMaster.map(function (d) { return ({ Driver: d.driver, Value: (countMap[d.driver] || 0) }); });
        }
        else if (mode === 'longest') {
            var maxMap = {};
            for (var j = 0; j < truckEvents.length; j++) {
                var drv = truckEvents[j].Driver || driversById.get(truckEvents[j].DriverID);
                if (drv && truckEvents[j].StartTime && truckEvents[j].EndTime) {
                    var duration = (new Date(truckEvents[j].EndTime).getTime() - new Date(truckEvents[j].StartTime).getTime()) / (1000 * 3600); // hours
                    maxMap[drv] = Math.max(maxMap[drv] || 0, duration);
                }
            }
            return Object.keys(maxMap).map(function (k) { return ({ Driver: k, Value: maxMap[k] }); });
        }
        return [];
    }

    var currentMode = 'tripcount';
    var chartDataSet = generateChartData(currentMode);

    // Scheduler
    var scheduleInstance = new ej.schedule.Schedule({
        width: 'calc(100% - 360px)',
        height: '650px',
        selectedDate: new Date(2026, 0, 12),
        allowOverlap: false,
        resourceHeaderTemplate: '#resourceTemplate',
        headerIndentTemplate: '#headerIndentTemplate',
        views: ['TimelineMonth'],
        group: {
            resources: ['TruckDetails'],
            headerTooltipTemplate: '#tooltipTemplate'
        },
        resources: [
            {
                field: 'DriverID',
                title: 'Driver',
                name: 'TruckDetails',
                allowMultiple: false,
                dataSource: driversMaster,
                textField: 'driver',
                idField: 'id',
                colorField: 'color'
            }
        ],
        eventSettings: { dataSource: truckEvents },
        actionComplete: function (args) { return onScheduleActionComplete(args); }
    });
    scheduleInstance.appendTo('#scheduler');

    // Chart - Modern styling
    var tripChart = new ej.charts.Chart({
        primaryXAxis: {
            valueType: 'Category',
            interval: 1,
            labelIntersectAction: Browser.isDevice ? 'None' : 'Trim',
            labelRotation: Browser.isDevice ? -45 : 315,
            majorGridLines: { width: 1, color: '#e9ecef', dashArray: '4' },
            majorTickLines: { width: 0 },
            labelStyle: {
                size: '12px',
                fontWeight: '500',
                color: '#495057'
            }
        },
        chartArea: { border: { width: 0 }, margin: { bottom: 20, top: 30, left: 50, right: 30 } },
        primaryYAxis: {
            interval: null,
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            title: 'Count',
            labelStyle: {
                size: '11px',
                color: '#6c757d'
            },
            majorGridLines: {
                width: 1,
                color: '#e9ecef',
                dashArray: '4'
            }
        },
        series: [
            {
                type: 'Column',
                xName: 'Driver',
                yName: 'Value',
                columnSpacing: 0.2,
                columnWidth: 0.85,
                legendShape: 'Rectangle',
                dataSource: chartDataSet,
                cornerRadius: { topLeft: 8, topRight: 8 },
                name: 'Value',
                marker: {
                    visible: false
                },
                border: {
                    width: 1,
                    color: 'rgba(255, 255, 255, 0.3)'
                }
            }
        ],
        width: '100%',
        height: '550px',
        title: 'Trip Count',
        tooltip: {
            enable: true,
            header: '<b>${point.x}</b>',
            format: 'Value: <b>${point.y}</b>',
            enableHighlight: true
        },
        legendSettings: {
            visible: false
        },
        axisLabelRender: function (args) {
            var numeric = Number(String(args.text).replace(/,/g, ''));
            if (!isNaN(numeric) && numeric >= 1000) {
                args.text = (numeric / 1000).toFixed(1) + 'K';
            }
        },
        tooltipRender: function (args) {
            if (args.text) {
                var unit = '';
                if (currentMode === 'capacity')
                    unit = ' t';
                else if (currentMode === 'longest')
                    unit = ' hours';
            }
        },
        pointRender: function (args) {
            var driverName = (args.point && args.point.x);
            if (driverName) {
                var resource = driversMaster.find(function (d) { return d.driver === driverName; });
                if (resource && resource.color) {
                    args.fill = resource.color;
                    args.border = {
                        color: 'rgba(255, 255, 255, 0.4)',
                        width: 1.5
                    };
                }
            }
        }
    });
    tripChart.appendTo('#chart');

        (function tryPaths(i) {
            var candidatePaths = ['./datasource.json', 'datasource.json', '/src/schedule/datasource.json', '/src/schedule/datasource.json'];
            if (i >= candidatePaths.length) {
                // nothing found — create a sensible fallback of events using the same driver names
                if (!truckEvents || truckEvents.length === 0) {
                    var baseDate = scheduleInstance.selectedDate || new Date();
                    var baseYear = baseDate.getFullYear();
                    var baseMonth = baseDate.getMonth();
                    var baseDay = baseDate.getDate();
                    var fallback = [];
                    for (var idx = 0; idx < driversMaster.length; idx++) {
                        var d = driversMaster[idx];
                        var startHour = 8 + (idx % 8); // stagger start times
                        var start = new Date(baseYear, baseMonth, baseDay, startHour, 0, 0);
                        var end = new Date(start.getTime() + (2 * 60 * 60 * 1000)); // 2 hour duration
                        fallback.push({
                            Id: idx + 1,
                            Subject: d.driver,
                            StartTime: start,
                            EndTime: end,
                            IsAllDay: false,
                            DriverID: d.id
                        });
                    }
                    truckEvents = extend([], fallback, null, true);
                }
                scheduleInstance.eventSettings.dataSource = truckEvents;
                scheduleInstance.dataBind();
                updateChart();
                return;
            }
            fetch(candidatePaths[i]).then(function (r) { return r.json(); }).then(function (json) {
                if (json && json.truckData) {
                    truckEvents = extend([], json.truckData, null, true);
                }
                else if (json) {
                    truckEvents = extend([], json, null, true);
                }
                scheduleInstance.eventSettings.dataSource = truckEvents;
                scheduleInstance.dataBind();
                updateChart();
            }).catch(function () { return tryPaths(i + 1); });
        })(0);

    // Dropdown for chart modes
    var ddlData = [
        { text: 'Truck Capacity', value: 'capacity' },
        { text: 'Trip Count', value: 'tripcount' },
        { text: 'Longest Trips', value: 'longest' }
    ];
    var modeDropdown = new ej.dropdowns.DropDownList({
        dataSource: ddlData,
        fields: { text: 'text', value: 'value' },
        value: 'tripcount',
        width: '100%',
        change: function (args) {
            currentMode = args.value;
            updateChart();
        }
    });
    modeDropdown.appendTo('#chart-ddl');

    function updateChart() {
        chartDataSet = generateChartData(currentMode);
        tripChart.series[0].dataSource = chartDataSet;
        tripChart.series[0].name = modeDropdown.text || 'Value';
        tripChart.title = modeDropdown.text || '';
        tripChart.primaryYAxis.title = currentMode === 'capacity' ? 'Capacity (t)' :
            currentMode === 'longest' ? 'Duration (hours)' : 'Count';
        tripChart.refresh();
    }

    // Handle scheduler action events to keep chart in sync
    function onScheduleActionComplete(args) {
        if (args.requestType === 'eventChanged' || args.requestType === 'eventCreated' || args.requestType === 'eventRemoved') {
            updateChart();
        }
    }
};
