/**
 * Sample for synchronized chart
 */
var charts = [];
var zoomFactor = 0;
var zoomPosition = 0;

this.default = function () {
    var chart = new ej.charts.Chart({
        primaryXAxis: {
            minimum: new Date(2023, 1, 18),
            maximum: new Date(2023, 7, 18),
            valueType: 'DateTime',
            labelFormat: 'MMM d',
            lineStyle: { width: 0 },
            majorGridLines: { width: 0 },
            edgeLabelPlacement: ej.base.Browser.isDevice ? 'None' : 'Shift',
            labelRotation: ej.base.Browser.isDevice ? -45 : 0,
            interval: ej.base.Browser.isDevice ? 2 : 1
        },

        primaryYAxis: {
            labelFormat: 'n2',
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            minimum: 0.86,
            maximum: 0.96,
            interval: 0.025
        },
        chartArea: { border: { width: 0 } },

        series: [
            {
                type: 'Line', dataSource: window.synchronizedData, xName: 'USD', width: 2, yName: 'EUR', emptyPointSettings: { mode: 'Drop' }
            }
        ],
        zoomSettings: {
            enableMouseWheelZooming: true,
            enablePinchZooming: true,
            enableScrollbar: false,
            enableDeferredZooming: false,
            enablePan: true,
            mode: 'X',
            toolbarItems: ['Pan', 'Reset']
        },
        zoomComplete: function (args) {
            if (args.axis.name === 'primaryXAxis') {
                zoomFactor = args.currentZoomFactor;
                zoomPosition = args.currentZoomPosition;
                zoomCompleteFunction(args);
            }
        },
        chartMouseLeave: function (args) {
            chartobj.hideCrosshair();
            chart3.hideCrosshair();
            chart4.hideCrosshair();
            chartobj.hideTooltip();
            chart3.hideTooltip();
            chart4.hideTooltip();
        },
        chartMouseMove: function (args) {
            if ((!ej.base.Browser.isDevice && !chart.isTouch && !chart.isChartDrag) || chart.startMove) {
                chartobj.startMove = chart3.startMove = chart4.startMove = chart.startMove;
                chartobj.showTooltip(args.x, args.y);
                chart3.showTooltip(args.x, args.y);
                chart4.showTooltip(args.x, args.y);
                chartobj.showCrosshair(args.x, args.y);
                chart3.showCrosshair(args.x, args.y);
                chart4.showCrosshair(args.x, args.y);
            }
        },
        chartMouseUp: function (args) {
            if (ej.base.Browser.isDevice && chart.startMove) {
                chartobj.hideCrosshair();
                chart3.hideCrosshair();
                chart4.hideCrosshair();
                chartobj.hideTooltip();
                chart3.hideTooltip();
                chart4.hideTooltip();
            }
        },
        title: 'US to EURO',
        titleStyle: { textAlignment: 'Near' },
        tooltip: { enable: true, fadeOutDuration: ej.base.Browser.isDevice ? 2500 : 1000, showNearestTooltip: true, shared: true, header: '', format: '<b>€${point.y}</b> <br> ${point.x} 2023', enableMarker: false },
        crosshair: { enable: true, lineType: 'Vertical', dashArray: '2,2' },
        load: load
    });
    chart.appendTo('#container3');
    charts.push(chart);
    var chartobj = new ej.charts.Chart({
        primaryXAxis: {
            minimum: new Date(2023, 1, 18),
            maximum: new Date(2023, 7, 18),
            valueType: 'DateTime',
            labelFormat: 'MMM d',
            lineStyle: { width: 0 },
            majorGridLines: { width: 0 },
            edgeLabelPlacement: ej.base.Browser.isDevice ? 'None' : 'Shift',
            labelRotation: ej.base.Browser.isDevice ? -45 : 0,
            interval: ej.base.Browser.isDevice ? 2 : 1
        },

        primaryYAxis: {
            labelFormat: '{value}',
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            minimum: 120,
            maximum: 152,
            interval: 8,
            labelPadding: 8
        },
        chartArea: { border: { width: 0 } },
        series: [
            {
                type: 'Line', dataSource: window.synchronizedData, xName: 'USD', width: 2, yName: 'JPY'
            }
        ],
        zoomSettings: {
            enableMouseWheelZooming: true,
            enablePinchZooming: true,
            enableScrollbar: false,
            enableDeferredZooming: false,
            enablePan: true,
            mode: 'X',
            toolbarItems: ['Pan', 'Reset']
        },
        zoomComplete: function (args) {
            if (args.axis.name === 'primaryXAxis') {
                zoomFactor = args.currentZoomFactor;
                zoomPosition = args.currentZoomPosition;
                zoomCompleteFunction(args);
            }
        },
        chartMouseMove: function (args) {
            if ((!ej.base.Browser.isDevice && !chartobj.isTouch && !chartobj.isChartDrag) || chartobj.startMove) {
                chart.startMove = chart3.startMove = chart4.startMove = chartobj.startMove;
                chart.showTooltip(args.x, args.y);
                chart3.showTooltip(args.x, args.y);
                chart4.showTooltip(args.x, args.y);
                chart.showCrosshair(args.x, args.y);
                chart3.showCrosshair(args.x, args.y);
                chart4.showCrosshair(args.x, args.y);
            }
        },
        chartMouseLeave: function (args) {
            chart.hideCrosshair();
            chart3.hideCrosshair();
            chart4.hideCrosshair();
            chart.hideTooltip();
            chart3.hideTooltip();
            chart4.hideTooltip();
        },
        chartMouseUp: function (args) {
            if (ej.base.Browser.isDevice && chartobj.startMove) {
                chart.hideCrosshair();
                chart3.hideCrosshair();
                chart4.hideCrosshair();
                chart.hideTooltip();
                chart3.hideTooltip();
                chart4.hideTooltip();
            }
        },
        title: 'US to Yen',
        titleStyle: { textAlignment: 'Near' },
        tooltip: { enable: true, fadeOutDuration: ej.base.Browser.isDevice ? 2500 : 1000, shared: true, header: '', format: '<b>¥${point.y}</b> <br> ${point.x} 2023', enableMarker: false },
        crosshair: { enable: true, lineType: 'Vertical', dashArray: '2,2' },
        load: load
    });
    chartobj.appendTo('#container4');
    charts.push(chartobj);
    var chart3 = new ej.charts.Chart({
        primaryXAxis: {
            minimum: new Date(2023, 1, 18),
            maximum: new Date(2023, 7, 18),
            valueType: 'DateTime',
            labelFormat: 'MMM d',
            lineStyle: { width: 0 },
            majorGridLines: { width: 0 },
            edgeLabelPlacement: ej.base.Browser.isDevice ? 'None' : 'Shift',
            labelRotation: ej.base.Browser.isDevice ? -45 : 0,
            interval: ej.base.Browser.isDevice ? 2 : 1
        },
        primaryYAxis: {
            labelFormat: 'n2',
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            minimum: 1.30,
            maximum: 1.37,
            interval: 0.0175
        },
        chartArea: { border: { width: 0 } },
        series: [
            {
                type: 'Area', dataSource: window.synchronizedData, xName: 'USD', width: 2, yName: 'SGD', opacity: 0.6, border: { width: 2 }
            }
        ],
        zoomSettings: {
            enableMouseWheelZooming: true,
            enablePinchZooming: true,
            enableScrollbar: false,
            enableDeferredZooming: false,
            enablePan: true,
            mode: 'X',
            toolbarItems: ['Pan', 'Reset']
        },
        zoomComplete: function (args) {
            if (args.axis.name === 'primaryXAxis') {
                zoomFactor = args.currentZoomFactor;
                zoomPosition = args.currentZoomPosition;
                zoomCompleteFunction(args);
            }
        },
        chartMouseMove: function (args) {
            if ((!ej.base.Browser.isDevice && !chart3.isTouch && !chart3.isChartDrag) || chart3.startMove) {
                chart.startMove = chartobj.startMove = chart4.startMove = chart3.startMove;
                chart.showTooltip(args.x, args.y);
                chartobj.showTooltip(args.x, args.y);
                chart4.showTooltip(args.x, args.y);
                chart.showCrosshair(args.x, args.y);
                chartobj.showCrosshair(args.x, args.y);
                chart4.showCrosshair(args.x, args.y);
            }
        },
        chartMouseLeave: function (args) {
            chartobj.hideCrosshair();
            chart.hideCrosshair();
            chart4.hideCrosshair();
            chartobj.hideTooltip();
            chart.hideTooltip();
            chart4.hideTooltip();
        },
        chartMouseUp: function (args) {
            if (ej.base.Browser.isDevice && chart3.startMove) {
                chart.hideCrosshair();
                chartobj.hideCrosshair();
                chart4.hideCrosshair();
                chart.hideTooltip();
                chartobj.hideTooltip();
                chart4.hideTooltip();
            }
        },
        title: 'US to SGD',
        titleStyle: { textAlignment: 'Near' },
        tooltip: { enable: true, fadeOutDuration: ej.base.Browser.isDevice ? 2500 : 1000, shared: true, header: '', format: '<b>$${point.y}</b> <br> ${point.x} 2023', enableMarker: false },
        crosshair: { enable: true, lineType: 'Vertical', dashArray: '2,2' },
        load: load
    });
    chart3.appendTo('#container1');
    charts.push(chart3);
    var chart4 = new ej.charts.Chart({
        primaryXAxis: {
            minimum: new Date(2023, 1, 18),
            maximum: new Date(2023, 7, 18),
            valueType: 'DateTime',
            labelFormat: 'MMM d',
            lineStyle: { width: 0 },
            majorGridLines: { width: 0 },
            edgeLabelPlacement: ej.base.Browser.isDevice ? 'None' : 'Shift',
            labelRotation: ej.base.Browser.isDevice ? -45 : 0,
            interval: ej.base.Browser.isDevice ? 2 : 1
        },
        primaryYAxis: {
            labelFormat: 'n1',
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            minimum: 79,
            maximum: 85,
            interval: 1.5
        },
        chartArea: { border: { width: 0 } },
        series: [
            {
                type: 'Area', dataSource: window.synchronizedData, xName: 'USD', width: 2, yName: 'INR', opacity: 0.6, border: { width: 2 }
            }
        ],
        zoomSettings: {
            enableMouseWheelZooming: true,
            enablePinchZooming: true,
            enableScrollbar: false,
            enableDeferredZooming: false,
            enablePan: true,
            mode: 'X',
            toolbarItems: ['Pan', 'Reset']
        },
        zoomComplete: function (args) {
            if (args.axis.name === 'primaryXAxis') {
                zoomFactor = args.currentZoomFactor;
                zoomPosition = args.currentZoomPosition;
                zoomCompleteFunction(args);
            }
        },
        chartMouseMove: function (args) {
            if ((!ej.base.Browser.isDevice && !chart4.isTouch && !chart4.isChartDrag) || chart4.startMove) {
                chart.startMove = chartobj.startMove = chart3.startMove = chart4.startMove;
                chart.showTooltip(args.x, args.y);
                chartobj.showTooltip(args.x, args.y);
                chart3.showTooltip(args.x, args.y);
                chart.showCrosshair(args.x, args.y);
                chartobj.showCrosshair(args.x, args.y);
                chart3.showCrosshair(args.x, args.y);
            }
        },
        chartMouseLeave: function (args) {
            chartobj.hideCrosshair();
            chart3.hideCrosshair();
            chart.hideCrosshair();
            chartobj.hideTooltip();
            chart3.hideTooltip();
            chart.hideTooltip();
        },
        chartMouseUp: function (args) {
            if (ej.base.Browser.isDevice && chart4.startMove) {
                chart.hideCrosshair();
                chartobj.hideCrosshair();
                chart3.hideCrosshair();
                chart.hideTooltip();
                chartobj.hideTooltip();
                chart3.hideTooltip();
            }
        },
        title: 'US to INR',
        titleStyle: { textAlignment: 'Near' },
        tooltip: { enable: true, fadeOutDuration: ej.base.Browser.isDevice ? 2500 : 1000, shared: true, header: '', format: '<b>₹${point.y}</b> <br> ${point.x} 2023', enableMarker: false },
        crosshair: { enable: true, lineType: 'Vertical', dashArray: '2,2' },
        load: load
    });
    chart4.appendTo('#container2');
    charts.push(chart4);
    function zoomCompleteFunction(args) {
        for (var i = 0; i < charts.length; i++) {
            if (args.axis.series[0].chart.element.id !== charts[i].element.id) {
                charts[i].primaryXAxis.zoomFactor = zoomFactor;
                charts[i].primaryXAxis.zoomPosition = zoomPosition;
                charts[i].zoomModule.isZoomed = args.axis.series[0].chart.zoomModule.isZoomed;
                charts[i].zoomModule.isPanning = args.axis.series[0].chart.zoomModule.isPanning;
            }
        }
    }

    function load(args) {
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        var themeColor = [];
        var materialColors = ['#00bdae', '#404041', '#357cd2', '#e56590'];
        var materialDarkColors = ['#9ECB08', '#56AEFF', '#C57AFF', '#61EAA9'];
        var fabricColors = ['#4472c4', '#ed7d31', '#ffc000', '#70ad47'];
        var bootstrapColors = ['#a16ee5', '#f7ce69', '#55a5c2', '#7ddf1e'];
        var highContrastColors = ['#79ECE4', '#E98272', '#DFE6B6', '#C6E773'];
        var bootstrap4Colors = ['#a16ee5', '#f7ce69', '#55a5c2', '#7ddf1e'];
        var bootstrap5Colors = ['#FD7E14', '#6610F2', '#6F42C1', '#D63384'];
        var bootstrap5DarkColors = ['#FD7E14', '#6610F2', '#6F42C1', '#D63384'];
        var fluentColors = ['#1AC9E6', '#DA4CB2', '#EDBB40', '#AF4BCF'];
        var tailwindColors = ['#5A61F6', '#65A30D', '#334155', '#14B8A6'];
        var tailwindDarkColors = ['#8B5CF6', '#22D3EE', '#F87171', '#4ADE80'];
        var tailwind3Colors = ['#2F4074', '#03B4B4', '#0D72DE', '#FF5733'];
        var tailwind3DarkColors = ['#8029F1', '#1ABC9C', '#0D72DE', '#FF5733'];
        var fabricdarkColors = ['#4472c4', '#ed7d31', '#ffc000', '#70ad47'];
        var material3Colors = ['#6355C7', '#00AEE0', '#FFB400', '#F7523F'];
        var material3DarkColors = ['#4EAAFF', '#FA4EAB', '#FFF500', '#17EA58'];
        var fluent2Colors = ['#6200EE', '#09AF74', '#0076E5', '#CB3587'];
        var fluent2HighContrastColors = ['#9BB449', '#2A72D5', '#43B786', '#3F579A'];
        // check the theme
        if (args.chart.theme === 'MaterialDark') {
            themeColor = materialDarkColors;
        }
        else if (args.chart.theme === 'Material') {
            themeColor = materialColors;
        }
        else if (args.chart.theme === "Fabric") {
            themeColor = fabricColors;
        }
        else if (args.chart.theme === "FabricDark") {
            themeColor = fabricdarkColors;
        }
        else if (args.chart.theme === 'Bootstrap5Dark') {
            themeColor = bootstrap5DarkColors;
        }
        else if (args.chart.theme === 'Bootstrap5') {
            themeColor = bootstrap5Colors;
        }
        else if (args.chart.theme === "Bootstrap4") {
            themeColor = bootstrap4Colors;
        }
        else if (args.chart.theme === 'TailwindDark') {
            themeColor = tailwindDarkColors;
        }
        else if (args.chart.theme === 'Tailwind') {
            themeColor = tailwindColors;
        }
        else if (args.chart.theme === 'Tailwind3Dark') {
            themeColor = tailwind3DarkColors;
        }
        else if (args.chart.theme === 'Tailwind3') {
            themeColor = tailwind3Colors;
        }
        else if (args.chart.theme === "HighContrast") {
            themeColor = highContrastColors;
        }
        else if (args.chart.theme === 'FluentDark') {
            themeColor = fluentColors;
        }
        else if (args.chart.theme === 'Bootstrap') {
            themeColor = bootstrapColors;
        }
        else if (args.chart.theme === 'BootstrapDark') {
            themeColor = bootstrapColors;
        }
        else if (args.chart.theme === 'Material3') {
            themeColor = material3Colors;
        }
        else if (args.chart.theme === 'Material3Dark') {
            themeColor = material3DarkColors;
        }
        else if (args.chart.theme === 'Fluent2') {
            themeColor = fluent2Colors;
        }
        else if (args.chart.theme === 'Fluent2HighContrast' || args.chart.theme === 'Fluent2Dark') {
            themeColor = fluent2HighContrastColors;
        }
        else {
            themeColor = fluentColors;
        }
        // check the container
        if (args.chart.element.id === 'container3') {
            args.chart.series[0].fill = themeColor[0];
        }
        else if (args.chart.element.id === 'container4') {
            args.chart.series[0].fill = themeColor[1];
        }
        else if (args.chart.element.id === 'container1') {
            args.chart.series[0].fill = themeColor[2];
        }
        else if (args.chart.element.id === 'container2') {
            args.chart.series[0].fill = themeColor[3];
        }
    }
};