/**
 * Sample for range navigator with print and export functionalities.
 */
var _this = this;
var selectedTheme = location.hash.split('/')[1];
selectedTheme = selectedTheme ? selectedTheme : 'Material';
var theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, 'Dark');
var themes = ['Material', 'Fabric', 'Bootstrap', 'Highcontrast'];
var borderColor = ['#FF4081', '#007897', '#428BCA', '#FFD939'];
var regionColor = ['rgba(255, 64, 129, 0.3)', ' rgba(0, 120, 151, 0.3)',
    'rgba(66, 139, 202, 0.3)', 'rgba(255, 217, 57, 0.3)'];
this.renderChart = function (datasrc) {
    var chart = new ej.charts.Chart({
        primaryXAxis: {
            valueType: 'DateTime', crosshairTooltip: { enable: true },
            edgeLabelPlacement: 'Shift', majorGridLines: { width: 0 }
        },
        series: [{
            dataSource: datasrc, xName: 'xDate', yName: 'Close', width: 2,
            name: 'Close',
            fill: regionColor[themes.indexOf(theme)], type: 'SplineArea',
            border: { width: 2, color: borderColor[themes.indexOf(theme)] }
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
        iconCss: 'e-icons e-print-icon', cssClass: 'e-flat', isPrimary: true,
    });
    printBtn.appendTo('#printBtn');
    document.getElementById('printBtn').onclick = function () {
        dateTimeControl.print(['container', 'chart']);
    };
};
this.default = function () {
    var datasrc;
    var ajax = new ej.base.Ajax('./src/range-navigator/data-source/export-data.json', 'GET', true);
    ajax.send().then();
    ajax.onSuccess = function (data) {
        datasrc = JSON.parse(data);
        datasrc.map(function (data) {
            data.xDate = new Date(data.xDate);
        });
        _this.renderChart(datasrc);
    };
};