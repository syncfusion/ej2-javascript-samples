/**
 * Sample for a multi-axis combination chart.
 */
this.default = function () {
    var climateData = [
        { Month: new Date(2025, 0, 1), TemperatureAnomaly: 1.75, AtmosphericCO2: 426.65, SeaIceExtent: 13.11 },
        { Month: new Date(2025, 1, 1), TemperatureAnomaly: 1.59, AtmosphericCO2: 427.09, SeaIceExtent: 14.26 },
        { Month: new Date(2025, 2, 1), TemperatureAnomaly: 1.60, AtmosphericCO2: 428.15, SeaIceExtent: 14.33 },
        { Month: new Date(2025, 3, 1), TemperatureAnomaly: 1.51, AtmosphericCO2: 429.35, SeaIceExtent: 13.73 },
        { Month: new Date(2025, 4, 1), TemperatureAnomaly: 1.40, AtmosphericCO2: 430.51, SeaIceExtent: 12.68 },
        { Month: new Date(2025, 5, 1), TemperatureAnomaly: 1.42, AtmosphericCO2: 429.95, SeaIceExtent: 10.82 },
        { Month: new Date(2025, 6, 1), TemperatureAnomaly: 1.37, AtmosphericCO2: 427.87, SeaIceExtent: 8.02 },
        { Month: new Date(2025, 7, 1), TemperatureAnomaly: 1.39, AtmosphericCO2: 425.71, SeaIceExtent: 5.92 },
        { Month: new Date(2025, 8, 1), TemperatureAnomaly: 1.44, AtmosphericCO2: 424.82, SeaIceExtent: 4.68 },
        { Month: new Date(2025, 9, 1), TemperatureAnomaly: 1.48, AtmosphericCO2: 425.46, SeaIceExtent: 6.08 },
        { Month: new Date(2025, 10, 1), TemperatureAnomaly: 1.53, AtmosphericCO2: 426.98, SeaIceExtent: 9.04 },
        { Month: new Date(2025, 11, 1), TemperatureAnomaly: 1.55, AtmosphericCO2: 428.12, SeaIceExtent: 11.83 }
    ];

    function createAnnotation(options) {
        var root = document.createElement('div');
        root.className = 'climate-insight ' + options.colorClass + ' ' + options.anchorClass;

        var marker = document.createElement('div');
        marker.className = 'climate-insight-marker ' + options.markerClass;

        var leader = document.createElement('div');
        leader.className = 'climate-insight-leader';

        var pill = document.createElement('div');
        pill.className = 'climate-insight-pill';

        var pin = document.createElement('span');
        pin.className = 'climate-insight-pin ' + options.pinClass;

        var label = document.createElement('span');
        label.className = 'climate-insight-label';
        label.textContent = options.label;

        var value = document.createElement('span');
        value.className = 'climate-insight-value';
        value.textContent = options.value;

        pill.appendChild(pin);
        pill.appendChild(label);
        pill.appendChild(value);
        root.appendChild(marker);
        root.appendChild(leader);
        root.appendChild(pill);

        return root.outerHTML;
    }

    var co2Annotation = createAnnotation({
        colorClass: 'climate-insight-blue',
        anchorClass: 'climate-insight-anchor-down',
        markerClass: 'climate-insight-marker-diamond',
        pinClass: 'climate-insight-pin-diamond',
        label: 'CO2 seasonal peak',
        value: '430.5 ppm'
    });

    var seaIceAnnotation = createAnnotation({
        colorClass: 'climate-insight-green',
        anchorClass: 'climate-insight-anchor-up',
        markerClass: 'climate-insight-marker-rectangle',
        pinClass: 'climate-insight-pin-rectangle',
        label: 'Sea ice annual low',
        value: '4.68 M km2'
    });

    var temperatureAnnotation = createAnnotation({
        colorClass: 'climate-insight-orange',
        anchorClass: 'climate-insight-anchor-right',
        markerClass: 'climate-insight-marker-circle',
        pinClass: 'climate-insight-pin-circle',
        label: 'Hottest anomaly',
        value: '+1.75 C'
    });

    var chart = new ej.charts.Chart({
        title: 'Global Climate Pulse',
        subTitle: 'Monthly global climate signals during 2025 • Copernicus C3S • NOAA GML • NSIDC',
        titleStyle: {
            textAlignment: 'Near',
            fontFamily: 'Segoe UI',
            fontWeight: '700',
            size: '24px',
            textOverflow: 'Wrap'
        },
        subTitleStyle: {
            textAlignment: 'Near',
            fontFamily: 'Segoe UI',
            fontWeight: '500',
            size: '13px',
            textOverflow: 'Wrap'
        },
        primaryXAxis: {
            valueType: 'DateTimeCategory',
            intervalType: 'Months',
            interval: 1,
            labelFormat: 'MMM',
            edgeLabelPlacement: 'Shift',
            plotOffsetLeft: 10,
            plotOffsetRight: 10,
            majorGridLines: { width: 0 },
            minorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            labelStyle: {
                fontFamily: 'Segoe UI',
                fontWeight: '600',
                size: '12px'
            }
        },
        primaryYAxis: {
            title: 'Temperature Anomaly (°C)',
            minimum: 1.2,
            maximum: 1.8,
            interval: 0.1,
            labelFormat: '{value}°C',
            edgeLabelPlacement: 'Shift',
            majorGridLines: { width: 1, dashArray: '3,4' },
            minorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            lineStyle: { width: 1.5, color: '#F97316' },
            labelStyle: {
                fontFamily: 'Segoe UI',
                fontWeight: '600',
                size: '12px',
                color: '#EA580C'
            },
            titleStyle: {
                fontFamily: 'Segoe UI',
                fontWeight: '700',
                size: '13px',
                color: '#EA580C',
                textAlignment: 'Center'
            }
        },
        axes: [
            {
                name: 'CO2Axis',
                title: 'Atmospheric CO₂ (ppm)',
                opposedPosition: true,
                minimum: 422,
                maximum: 432,
                interval: 2,
                labelFormat: '{value} ppm',
                edgeLabelPlacement: 'Shift',
                majorGridLines: { width: 0 },
                minorGridLines: { width: 0 },
                majorTickLines: { width: 0 },
                lineStyle: { width: 1.5, color: '#2563EB' },
                labelStyle: {
                    fontFamily: 'Segoe UI',
                    fontWeight: '600',
                    size: '12px',
                    color: '#2563EB'
                },
                titleStyle: {
                    fontFamily: 'Segoe UI',
                    fontWeight: '700',
                    size: '13px',
                    color: '#2563EB',
                    textAlignment: 'Center'
                }
            },
            {
                name: 'SeaIceAxis',
                title: 'Arctic Sea Ice (million km²)',
                opposedPosition: true,
                minimum: 4,
                maximum: 16,
                interval: 2,
                labelFormat: '{value}M',
                edgeLabelPlacement: 'Shift',
                majorGridLines: { width: 0 },
                minorGridLines: { width: 0 },
                majorTickLines: { width: 0 },
                lineStyle: { width: 1.5, color: '#059669' },
                labelStyle: {
                    fontFamily: 'Segoe UI',
                    fontWeight: '600',
                    size: '12px',
                    color: '#059669'
                },
                titleStyle: {
                    fontFamily: 'Segoe UI',
                    fontWeight: '700',
                    size: '13px',
                    color: '#059669',
                    textAlignment: 'Center'
                }
            }
        ],
        series: [
            {
                type: 'Area',
                dataSource: climateData,
                name: 'Arctic Sea Ice (million km²)',
                xName: 'Month',
                yName: 'SeaIceExtent',
                yAxisName: 'SeaIceAxis',
                fill: '#10B981',
                opacity: 1,
                width: 2.5,
                border: { width: 2.5, color: '#059669' },
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1,
                    gradientColorStop: [
                        { offset: 0, color: '#10B981', opacity: 0.30 },
                        { offset: 45, color: '#34D399', opacity: 0.15 },
                        { offset: 100, color: '#ECFDF5', opacity: 0.02 }
                    ]
                },
                marker: {
                    visible: true,
                    shape: 'Rectangle',
                    width: 8,
                    height: 8,
                    isFilled: true,
                    fill: '#10B981'
                },
                animation: { enable: true, duration: 1200, delay: 0 }
            },
            {
                type: 'Line',
                dataSource: climateData,
                name: 'Temperature Anomaly (°C)',
                xName: 'Month',
                yName: 'TemperatureAnomaly',
                fill: '#F97316',
                width: 4,
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 1,
                    y2: 0,
                    gradientColorStop: [
                        { offset: 0, color: '#FB923C', opacity: 1 },
                        { offset: 55, color: '#F97316', opacity: 1 },
                        { offset: 100, color: '#C2410C', opacity: 1 }
                    ]
                },
                marker: {
                    visible: true,
                    shape: 'Circle',
                    width: 8,
                    height: 8,
                    isFilled: true,
                    fill: '#F97316'
                },
                animation: { enable: true, duration: 1400, delay: 450 }
            },
            {
                type: 'Spline',
                dataSource: climateData,
                name: 'Atmospheric CO₂ (ppm)',
                xName: 'Month',
                yName: 'AtmosphericCO2',
                yAxisName: 'CO2Axis',
                splineType: 'Natural',
                fill: '#2563EB',
                width: 3.5,
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 1,
                    y2: 0,
                    gradientColorStop: [
                        { offset: 0, color: '#60A5FA', opacity: 1 },
                        { offset: 50, color: '#2563EB', opacity: 1 },
                        { offset: 100, color: '#1E40AF', opacity: 1 }
                    ]
                },
                marker: {
                    visible: true,
                    shape: 'Diamond',
                    width: 8,
                    height: 8,
                    isFilled: true,
                    fill: '#2563EB'
                },
                animation: { enable: true, duration: 1400, delay: 950 }
            }
        ],
        annotations: [
            {
                content: co2Annotation,
                x: new Date(2025, 4, 1),
                y: 430.51,
                coordinateUnits: 'Point',
                region: 'Chart',
                yAxisName: 'CO2Axis'
            },
            {
                content: seaIceAnnotation,
                x: new Date(2025, 8, 1),
                y: 4.68,
                coordinateUnits: 'Point',
                region: 'Chart',
                yAxisName: 'SeaIceAxis'
            },
            {
                content: temperatureAnnotation,
                x: new Date(2025, 0, 1),
                y: 1.75,
                coordinateUnits: 'Point',
                region: 'Chart'
            }
        ],
        tooltip: {
            enable: true,
            shared: true,
            enableMarker: true,
            opacity: 0.97,
            header: '<b>${point.x}</b>',
            format: '${series.name} : <b>${point.y}</b>'
        },
        crosshair: {
            enable: true,
            lineType: 'Vertical',
            dashArray: '4,4',
            line: { width: 1 }
        },
        legendSettings: {
            visible: true,
            position: 'Bottom',
            alignment: 'Center',
            shapeWidth: 10,
            shapeHeight: 10,
            shapePadding: 8,
            padding: 24,
            enableHighlight: true,
            toggleVisibility: false,
            textStyle: {
                fontFamily: 'Segoe UI',
                fontWeight: '600',
                size: '12px'
            }
        },
        chartArea: {
            border: { width: 0 }
        },
        width: ej.base.Browser.isDevice ? '100%' : '90%',
        legendRender: function (args) {
            if (args.text === 'Temperature Anomaly (°C)') {
                args.shape = 'Circle';
                args.fill = '#F97316';
            } else if (args.text === 'Atmospheric CO₂ (ppm)') {
                args.shape = 'Diamond';
                args.fill = '#2563EB';
            } else if (args.text === 'Arctic Sea Ice (million km²)') {
                args.shape = 'Rectangle';
                args.fill = '#10B981';
            }
        },
        // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (
                selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
            )
                .replace(/-dark/i, 'Dark')
                .replace(/contrast/i, 'Contrast')
                .replace(/-highContrast/i, 'HighContrast');

            if (args.chart.element) {
                if (args.chart.enableRtl) {
                    args.chart.element.classList.add(
                        'climate-chart-rtl'
                    );
                } else {
                    args.chart.element.classList.remove(
                        'climate-chart-rtl'
                    );
                }
            }
        }
        // custom code end
    });

    chart.appendTo('#climate-chart-container');
};
