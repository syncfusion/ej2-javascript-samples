if (typeof loadCultureFiles === 'function') loadCultureFiles();

this.default = function () {
    if (typeof loadCultureFiles === 'function') loadCultureFiles();

    var Browser = ej.base.Browser;
    var extend = ej.base.extend;

    // Inject required modules into global ej instances
    ej.charts.Chart.Inject(ej.charts.ColumnSeries, ej.charts.Category, ej.charts.Legend, ej.charts.Tooltip, ej.charts.Highlight);
    ej.schedule.Schedule.Inject(ej.schedule.TimelineMonth, ej.schedule.Resize, ej.schedule.DragAndDrop);
    var truckEvents = [
        {
            Id: 1,
            Subject: 'Long haul trip',
            StartTime: new Date(2026, 0, 12, 10, 0),
            EndTime: new Date(2026, 0, 12, 18, 0),
            DriverID: 1
        },
        {
            Id: 2,
            Subject: 'Delivery to New York',
            StartTime: new Date(2026, 0, 13, 9, 0),
            EndTime: new Date(2026, 0, 13, 17, 0),
            DriverID: 2
        },
        {
            Id: 3,
            Subject: 'Cross-country route',
            StartTime: new Date(2026, 0, 13, 16, 0),
            EndTime: new Date(2026, 0, 14, 4, 0),
            DriverID: 3
        },
        {
            Id: 4,
            Subject: 'Refrigerated goods',
            StartTime: new Date(2026, 0, 14, 6, 0),
            EndTime: new Date(2026, 0, 14, 14, 0),
            DriverID: 4
        },
        {
            Id: 5,
            Subject: 'Container transport',
            StartTime: new Date(2026, 0, 15, 8, 0),
            EndTime: new Date(2026, 0, 15, 16, 0),
            DriverID: 5
        },
        {
            Id: 6,
            Subject: 'Steel materials',
            StartTime: new Date(2026, 0, 16, 7, 0),
            EndTime: new Date(2026, 0, 16, 13, 0),
            DriverID: 6
        },
        {
            Id: 7,
            Subject: 'Food products',
            StartTime: new Date(2026, 0, 16, 14, 0),
            EndTime: new Date(2026, 0, 16, 22, 0),
            DriverID: 7
        },
        {
            Id: 8,
            Subject: 'Construction materials',
            StartTime: new Date(2026, 0, 17, 6, 0),
            EndTime: new Date(2026, 0, 17, 15, 0),
            DriverID: 8
        },
        {
            Id: 9,
            Subject: 'Medical supplies',
            StartTime: new Date(2026, 0, 17, 16, 0),
            EndTime: new Date(2026, 0, 17, 23, 0),
            DriverID: 9
        },
        {
            Id: 18,
            Subject: 'Emergency equipment',
            StartTime: new Date(2026, 0, 20, 7, 0),
            EndTime: new Date(2026, 0, 20, 13, 0),
            DriverID: 9
        },
        {
            Id: 10,
            Subject: 'Retail distribution',
            StartTime: new Date(2026, 0, 18, 8, 0),
            EndTime: new Date(2026, 0, 18, 16, 0),
            DriverID: 10
        },
        {
            Id: 11,
            Subject: 'Warehouse pickup',
            StartTime: new Date(2026, 0, 15, 8, 0),
            EndTime: new Date(2026, 0, 15, 14, 0),
            DriverID: 2
        },
        {
            Id: 12,
            Subject: 'Express highway delivery',
            StartTime: new Date(2026, 0, 16, 6, 0),
            EndTime: new Date(2026, 0, 16, 12, 0),
            DriverID: 3
        },
        {
            Id: 13,
            Subject: 'Return cargo trip',
            StartTime: new Date(2026, 0, 18, 9, 0),
            EndTime: new Date(2026, 0, 18, 15, 0),
            DriverID: 3
        },
        {
            Id: 14,
            Subject: 'Frozen food transport',
            StartTime: new Date(2026, 0, 17, 7, 0),
            EndTime: new Date(2026, 0, 17, 13, 0),
            DriverID: 4
        },
        {
            Id: 15,
            Subject: 'Industrial machinery',
            StartTime: new Date(2026, 0, 18, 6, 0),
            EndTime: new Date(2026, 0, 18, 14, 0),
            DriverID: 6
        },
        {
            Id: 16,
            Subject: 'Cement delivery',
            StartTime: new Date(2026, 0, 19, 8, 0),
            EndTime: new Date(2026, 0, 19, 14, 0),
            DriverID: 8
        },
        {
            Id: 17,
            Subject: 'Equipment relocation',
            StartTime: new Date(2026, 0, 21, 9, 0),
            EndTime: new Date(2026, 0, 21, 17, 0),
            DriverID: 8
        }
    ];
    var driversMaster = [
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
    var driversById = new Map(driversMaster.map(function (d) { return [d.id, d.driver]; }));

    function generateChartData(mode) {
        if (mode === 'capacity') {
            return driversMaster.map(function (d) {
                return {
                    Truck: d.truck,                                     
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
            return driversMaster
                .map(function (d) {
                    return {
                        Driver: d.driver,
                        Value: countMap[d.driver] || 0
                    };
                })
                .filter(function (d) { return d.Value > 0; });
        }
        else if (mode === 'longest') {
            var durationMap = {};

            for (var j = 0; j < truckEvents.length; j++) {
                var drv = truckEvents[j].Driver || driversById.get(truckEvents[j].DriverID);

                if (drv && truckEvents[j].StartTime && truckEvents[j].EndTime) {
                    var duration =
                        (new Date(truckEvents[j].EndTime).getTime() -
                            new Date(truckEvents[j].StartTime).getTime()) /
                        (1000 * 3600); // hours

                    if (!durationMap[drv] || duration > durationMap[drv]) {
                        durationMap[drv] = duration;
                    }
                }
            }

            return driversMaster
                .map(function (d) {
                    return {
                        Driver: d.driver,
                        Value: durationMap[d.driver] ? +durationMap[d.driver].toFixed(1) : 0
                    };
                })
                .filter(function (d) { return d.Value > 0; });
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
            majorTickLines: { width: 0 },
            labelStyle: {
                size: '12px',
                fontWeight: '500',
            }
        },
        chartArea: { border: { width: 0 }, margin: { bottom: 20, top: 30, left: 50, right: 30 } },
        primaryYAxis: {
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            title: 'Count',
            labelStyle: {
                size: '11px',
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
        load: function (args) {
            var lineTheme = location.hash.split('/')[1];
            lineTheme = lineTheme ? lineTheme: 'Fluent2';
            args.chart.theme = (lineTheme.charAt(0).toUpperCase() + 
                lineTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        },
        pointRender: function (args) {
            if (!args.point) return;

            var resource;

            if (currentMode === 'capacity') {
                var truckName = args.point.x;
                resource = driversMaster.find(function (d) {
                    return d.truck === truckName;
                });
            }
            else {
                var driverName = args.point.x;
                resource = driversMaster.find(function (d) {
                    return d.driver === driverName;
                });
            }

            if (resource && resource.color) {
                args.fill = resource.color;
                args.border = {
                    color: 'rgba(255, 255, 255, 0.4)',
                    width: 1.5
                };
            }
        }
    });
    tripChart.appendTo('#chart');

    (function tryPaths(i) {
        var candidatePaths = ['./datasource.json', 'datasource.json', '/src/schedule/datasource.json', '/src/schedule/datasource.json'];
        if (i >= candidatePaths.length) {
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

    var ddlData = [
        { text: 'Trip Count', value: 'tripcount' },
        { text: 'Truck Capacity', value: 'capacity' },
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

        if (currentMode === 'tripcount') {
            tripChart.primaryYAxis = {
                title: 'Count',
                interval: 2,                     
                majorTickLines: { width: 0 },
                lineStyle: { width: 0 },
                labelStyle: {
                    size: '11px',
                    color: '#6c757d'
                }
            };
        } else if (currentMode === 'capacity') {
            tripChart.primaryYAxis = {
                title: 'Capacity (t)',
                interval: null,                   
                majorTickLines: { width: 0 },
                lineStyle: { width: 0 }
            };
        } else {
            tripChart.primaryYAxis = {
                title: 'Duration (hours)',
                interval: null,  
                majorTickLines: { width: 0 },
                lineStyle: { width: 0 }
            };
        }
        tripChart.series[0].xName =
            currentMode === 'capacity' ? 'Truck' : 'Driver';
        tripChart.refresh();
    }

    function onScheduleActionComplete(args) {
        if (args.requestType === 'eventChanged' || args.requestType === 'eventCreated' || args.requestType === 'eventRemoved') {
            updateChart();
        }
    }
};
