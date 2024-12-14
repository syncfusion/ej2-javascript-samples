/**
 * Sample for range navigator with print and export functionalities.
 */
var _this = this;
var selectedTheme = location.hash.split('/')[1];
selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
var theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
var themes1 = ['Material', 'Fabric', 'Bootstrap', 'Bootstrap4', 'HighContrast', 'Bootstrap5', 'Tailwind','MaterialDark', 'FabricDark', 'BootstrapDark', 'TailwindDark', 'Bootstrap5Dark', 'Fluent', 'FluentDark', 'Material3', 'Material3Dark', 'Fluent2', 'Fluent2HighContrast', 'Fluent2Dark', 'Tailwind3', 'Tailwind3Dark'];
var borderColor1 = ['#FF4081', '#007897', '#428BCA', '#FFD939', '#FFD939', '#FD7E14', '#4F46E5','#FF4081', '#007897', '#428BCA', '#22D3EE', '#FD7E14', '#1AC9E6', '#1AC9E6', '#6355C7', '#4EAAFF', '#6200EE', '#9BB449', '#9BB449', '#2F4074', '#8029F1'];
var regionColor1 = ['rgba(255, 64, 129, 0.3)', 'rgba(0, 120, 151, 0.3)',
    'rgba(66, 139, 202, 0.3)', 'rgba(255, 217, 57, 0.3)', 'rgba(255, 217, 57, 0.3)', 'rgba(253, 126, 20, 0.3)', 'rgba(79, 70, 229, 0.3)',
    'rgba(255, 64, 129, 0.3)', 'rgba(0, 120, 151, 0.3)', 'rgba(66, 139, 202, 0.3)', 'rgba(34, 211, 238, 0.3)', 'rgba(253, 126, 20, 0.3)', 'rgba(26, 201, 230, 0.3)', 'rgba(26, 201, 230, 0.3)', 'rgba(99, 85, 199, 0.3)', 'rgba(78, 170, 255, 0.3)', 'rgba(98, 0, 238, 0.3)', 'rgba(155, 180, 73, 0.3)', 'rgba(155, 180, 73, 0.3)', 'rgba(47, 64, 116, 0.3)', 'rgba(128, 41, 241, 0.3)'];
this.renderChart = function (datasrc) {
    var chart = new ej.charts.Chart({
        primaryXAxis: {
            valueType: 'DateTime', crosshairTooltip: { enable: true },
            edgeLabelPlacement: 'Shift', majorGridLines: { width: 0 }
        },
        series: [{
            dataSource: datasrc, xName: 'xDate', yName: 'Close', width: 2,
            name: 'Close',
            fill: regionColor1[themes1.indexOf(theme)], type: 'SplineArea',
            border: { width: 2, color: borderColor1[themes1.indexOf(theme)] }
        }],
        chartArea: { border: { width: 0 } },
        primaryYAxis: {
            minimum: 81, maximum: 87, interval: 2,
            majorTickLines: { width: 0 }, lineStyle: { width: 0 },
            labelFormat: '{value}M', title: 'Million in USD'
        },
        tooltip: { enable: true, shared: true },
        legendSettings: { visible: false },
        height: '350',
        theme: theme
    });
    chart.appendTo('#chart');
    var dateTimeControl = new ej.charts.RangeNavigator({
        valueType: 'DateTime',
        animationDuration: 500,
        intervalType: 'Months',
        labelFormat: 'MMM', theme: theme,
        enableGrouping: true,
        value: [new Date('2013-05-01'), new Date('2013-08-01')],
        dataSource: datasrc,
        xName: 'xDate', yName: 'Close',
        changed: function (args) {
            chart.primaryXAxis.zoomFactor = args.zoomFactor;
            chart.primaryXAxis.zoomPosition = args.zoomPosition;
            chart.dataBind();
        }
    });
    dateTimeControl.appendTo('#container');
    var mode = new ej.dropdowns.DropDownList({
        index: 0,
        width: 90
    });
    mode.appendTo('#mode');
    var togglebtn = new ej.buttons.Button({
        iconCss: 'e-icons e-export-icon', cssClass: 'e-flat', isPrimary: true,
    });
    togglebtn.appendTo('#exportBtn');
    document.getElementById('exportBtn').onclick = function () {
        var fileName = (document.getElementById('fileName')).value;
        chart.exportModule.export(mode.value, fileName, null, [dateTimeControl, chart]);
    };
    var printBtn = new ej.buttons.Button({
        cssClass: 'e-flat', isPrimary: true, iconCss: 'e-icons e-print-icon'
    });
    printBtn.appendTo('#printBtn');
    document.getElementById('printBtn').onclick = function () {
        dateTimeControl.print(['container', 'chart']);
    };
};
this.default = function () {
    var datasrc;
    var fetchApi = new ej.base.Fetch('./src/range-navigator/data-source/export-data.json', 'GET', true);
    fetchApi.send().then();
    fetchApi.onSuccess = function (data) {
        datasrc = data;
        datasrc.map(function (data) {
            data.xDate = new Date(data.xDate);
        });
        _this.renderChart(datasrc);
    };
};