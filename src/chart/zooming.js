
this.default = function () {
    var zoomSeriesData = [];
    var point;
    var i;
    for (i = 0; i < zoomData.length; i++) {
        point = { x: new Date(1941, i + 2, i), y: zoomData[i] / 1000 - 0.5 };
        zoomSeriesData.push(point);
    }

    var chart = new ej.charts.Chart({
        primaryXAxis: {
            valueType: 'DateTime',
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            scrollbarSettings: {
                enableZoom: false,
                position: 'Bottom'
            }
        },
        primaryYAxis: {
            title: 'Temperature Anomaly (°C)',
            intervalType: 'Months',
            labelFormat: '{value}°C',
            enableScrollbarOnZooming: false,
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
        },
        series: [
            {
                dataSource: zoomSeriesData,
                xName: 'x', yName: 'y',
                type: 'Line'
            }
        ],
        chartArea: { border: { width: 0 } },
        zoomSettings: {
            enableSelectionZooming: true,
            enableMouseWheelZooming: true,
            enableDeferredZooming: false,
            enableScrollbar: true,
            mode: 'X',
            enablePinchZooming: true,
            enableAnimation: true,
            showToolbar : true,
            toolbarPosition:{y: -60, draggable: true },
            draggable: true
        },
        margin : {top: 20},
        tooltip: { enable: true, showNearestTooltip: true, header: '<b>${point.x}</b>', format: 'Temperature: <b>${point.y}</b>', enableHighlight: true },
        title: ej.base.Browser.isDevice ? 'Monthly Temperature Anomalies' : 'Global Warming: Monthly Temperature Anomalies',
        titleStyle: { textAlignment: ej.base.Browser.isDevice ? 'Near' : 'Center' },
        width: ej.base.Browser.isDevice ? '100%' : '75%',
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
            args.chart.width = ej.base.Browser.isDevice ? '100%' : '75%';
        },
    });
    chart.appendTo('#chartzoom-container');
};
