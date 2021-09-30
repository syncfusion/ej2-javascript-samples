/**
 * Sample for range navigator with logarithmic axis.
 */
var data = [];
var max = 100;
for (var i = 0; i < 100; i++) {
    data.push({
        x: Math.pow(10, i * 0.1),
        y: Math.floor(Math.random() * (80 - 30 + 1)) + 30
    });
}
var selectedTheme = location.hash.split('/')[1];
selectedTheme = selectedTheme ? selectedTheme : 'Material';
var theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
var themes = ['bootstrap5', 'bootstrap5dark', 'tailwind', 'tailwinddark', 'material', 'materialdark', 'bootstrap4', 'bootstrap', 'bootstrapdark', 'fabric', 'fabricdark', 'highcontrast'];
var borderColor = ['#262E0B', '#5ECB9B', '#5A61F6', '#8B5CF6', '#00bdae', '#9ECB08', '#a16ee5', '#a16ee5', '#a16ee5', '#4472c4', '#4472c4', '#79ECE4'];
var regionColor = ['rgba(38, 46, 11, 0.3)', 'rgba(94, 203, 155, 0.3)', 'rgba(90, 97, 246, 0.3)', 'rgba(139, 92, 246, 0.3)', 'rgba(0, 189, 174, 0.3)',
    'rgba(158, 203, 8, 0.3)', 'rgba(161, 110, 229, 0.3)', 'rgba(161, 110, 229, 0.3)', 'rgba(161, 110, 229, 0.3)', 'rgba(68, 114, 196, 0.3)',
    'rgba(68, 114, 196, 0.3)', 'rgba(121, 236, 228, 0.3)'];
this.default = function () {
    var chart = new ej.charts.Chart({
        primaryXAxis: {
            valueType: 'Logarithmic', crosshairTooltip: { enable: false }, interval: 1,
            edgeLabelPlacement: 'Shift', majorGridLines: { width: 0 },
            title: 'Numers of Goods Consumers'
        },
        primaryYAxis: { title: 'Inflation', minimum: 0, maximum: 100, labelFormat: '{value}%', majorTickLines: { width: 0 }, lineStyle: { width: 0 } },
        chartArea: { border: { width: 0 } },
        series: [{
            dataSource: data, xName: 'x', yName: 'y', width: 2,
            animation: { enable: false }, type: 'StepArea', marker: { visible: true },
            fill: 'url(#' + selectedTheme + '-gradient-chart)',
            border: { width: 2, color: borderColor[themes.indexOf(theme.toLowerCase())] }
        }],
        crosshair: { enable: false, lineType: 'Vertical' },
        height: '350',
        width: ej.base.Browser.isDevice ? '100%' : '80%',
        theme: theme
    });
    chart.appendTo('#chart');
    var range = new ej.charts.RangeNavigator({
        tooltip: { enable: true },
        labelPosition: 'Outside',
        labelIntersectAction: 'None',
        valueType: 'Logarithmic',
        interval: 1,
        series: [{ dataSource: data, xName: 'x', yName: 'y', width: 2, type: 'StepLine' }],
        value: [4, 6],
        labelRender: function (args) {
                args.text = (+args.text).toExponential().toLocaleUpperCase();
            },
            tooltipRender: function (args) {
                args.text = [(+(+args.text).toFixed(1)).toExponential(1).toString().toLocaleUpperCase()];
            },
        changed: function (args) {
            chart.primaryXAxis.zoomFactor = args.zoomFactor;
            chart.primaryXAxis.zoomPosition = args.zoomPosition;
            chart.dataBind();
        },
        width: ej.base.Browser.isDevice ? '100%' : '80%',
        theme: theme
    });
    range.appendTo('#container');
};