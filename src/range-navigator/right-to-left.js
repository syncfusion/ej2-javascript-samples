/**
 * Sample for range navigator with RTL support
 */
var _this = this;
var selectedTheme = location.hash.split('/')[1];
selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
var theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
var themes = ['bootstrap5', 'bootstrap5dark', 'tailwind', 'tailwinddark', 'material', 'materialdark', 'bootstrap4', 'bootstrap', 'bootstrapdark', 'fabric', 'fabricdark', 'highcontrast', 'fluent', 'fluentDark', 'material3', 'material3dark', 'fluent2', 'fluent2highcontrast', 'fluent2dark', 'tailwind3', 'tailwind3dark'];
var borderColor = ['#FD7E14', '#FD7E14',  '#5A61F6', '#8B5CF6', '#00bdae', '#9ECB08', '#a16ee5', '#a16ee5', '#a16ee5', '#4472c4', '#4472c4', '#79ECE4', '#1AC9E6', '#1AC9E6', '#6355C7', '#4EAAFF', '#6200EE', '#9BB449', '#9BB449', '#2F4074', '#8029F1'];
var regionColor = ['rgba(38, 46, 11, 0.3)', 'rgba(94, 203, 155, 0.3)', 'rgba(90, 97, 246, 0.3)', 'rgba(139, 92, 246, 0.3)', 'rgba(0, 189, 174, 0.3)',
    'rgba(158, 203, 8, 0.3)', 'rgba(161, 110, 229, 0.3)', 'rgba(161, 110, 229, 0.3)', 'rgba(161, 110, 229, 0.3)', 'rgba(68, 114, 196, 0.3)',
    'rgba(68, 114, 196, 0.3)', 'rgba(121, 236, 228, 0.3)', 'rgba(97, 69, 112, 0.3)', 'rgba(138, 177, 19, 0.3)', 'rgba(99, 85, 199, 0.3)', 'rgba(78, 170, 255, 0.3)',
    'rgba(98, 0, 238, 0.3)', 'rgba(155, 180, 73, 0.3)', 'rgba(155, 180, 73, 0.3)', 'rgba(47, 64, 116, 0.3)', 'rgba(128, 41, 241, 0.3)'];
this.renderRTLChart = function (datasrc) {
    var chart = new ej.charts.Chart({
        primaryXAxis: {
            valueType: 'DateTime', crosshairTooltip: { enable: true }, edgeLabelPlacement: 'Shift',
            majorGridLines: { width: 0 }
        },
        primaryYAxis: {
            majorTickLines: { width: 0 }, lineStyle: { width: 0 }, labelFormat: '{value}%',
            maximum: 87, minimum: 82, interval: 1
        },
        chartArea: { border: { width: 0 } },
        series: [{
            dataSource: datasrc, xName: 'xDate', yName: 'High', width: 2, type: 'Area',
            fill: 'url(#' + selectedTheme + '-gradient-chart)', name: 'Profit',
            border: { width: 2, color: borderColor[themes.indexOf(theme)] }
        }],
        tooltip: { enable: true, shared: true, header: '<b>England</b>', format: '${point.x} : <b>${point.y}</b>' },
        height: '350', enableRtl: true,
        width: ej.base.Browser.isDevice ? '100%' : '80%',
        theme: theme, legendSettings: { visible: false }
    });
    chart.appendTo('#chart');
    var range = new ej.charts.RangeNavigator({
        width: ej.base.Browser.isDevice ? '100%' : '80%',
        valueType: 'DateTime',
        tooltip: { enable: true, displayMode: 'Always' },
        intervalType: 'Years',
        value: [new Date('2014-01-01'), new Date('2015-12-31')],
        series: [{
            dataSource: datasrc, xName: 'xDate', yName: 'High', type: 'Area',
            fill: 'url(#' + selectedTheme + '-gradient-chart)',
            border: { width: 2, color: borderColor[themes.indexOf(theme)] }
        }],
        enableRtl: true,
        changed: function (args) {
            chart.primaryXAxis.zoomFactor = args.zoomFactor;
            chart.primaryXAxis.zoomPosition = args.zoomPosition;
            chart.dataBind();
        },
        theme: theme
    });
    range.appendTo('#container');
};
this.default = function () {
    var datasrc;
    var fetchApi = new ej.base.Fetch('./src/range-navigator/data-source/axes-data.json', 'GET', true);
    fetchApi.send().then();
    fetchApi.onSuccess = function (data) {
        datasrc = data;
        datasrc.map(function (data) {
            data.xDate = new Date(data.xDate);
        });
        _this.renderRTLChart(datasrc);
    };
};
