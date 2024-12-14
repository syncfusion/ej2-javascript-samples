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
selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
var theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
var themes = ['Material', 'Fabric', 'Bootstrap', 'HighContrast', 'Bootstrap5', 'Tailwind', 'MaterialDark', 'FabricDark', 'BootstrapDark', 'TailwindDark', 'Fluent', 'FluentDark', 'Material3', 'Material3Dark', 'Bootstrap5Dark', 'Fluent2', 'Fluent2HighContrast', 'Fluent2Dark', 'tailwind3', 'tailwind3dark'];
var borderColor = ['#00bdae', '#4472c4', '#a16ee5', '#79ECE4', '#FD7E14', '#5A61F6',  '#9ECB08', '#4472c4', '#a16ee5','#8B5CF6', '#1AC9E6', '#1AC9E6', '#6355C7', '#4EAAFF', '#FD7E14', '#6200EE', '#9BB449', '#9BB449', '#2F4074', '#8029F1'];
var regionColor = ['rgba(0, 189, 174, 0.3)', 'rgba(68, 114, 196, 0.3)',
    'rgba(161, 110, 229, 0.3)', 'rgba(121, 236, 228, 0.3)', 'rgba(99, 85, 199, 0.3)', 'rgba(79, 70, 229, 0.3)',
    'rgba(0, 189, 174, 0.3)', 'rgba(68, 114, 196, 0.3)', 'rgba(161, 110, 229, 0.3)', 'rgba(139, 92, 246, 0.3)', 'rgba(26, 201, 230, 0.3)', 'rgba(26, 201, 230, 0.3)','rgba(99, 85, 199, 0.3)', 'rgba(78, 170, 255, 0.3)', 'rgba(143, 128, 244, 0.3)', 'rgba(143, 128, 244, 0.3)', 'rgba(98, 0, 238, 0.3)', 'rgba(155, 180, 73, 0.3)', 'rgba(155, 180, 73, 0.3)', 'rgba(47, 64, 116, 0.3)', 'rgba(128, 41, 241, 0.3)'];
this.default = function () {
    var chart = new ej.charts.Chart({
        primaryXAxis: {
            valueType: 'Logarithmic', crosshairTooltip: { enable: false }, interval: 1,
            edgeLabelPlacement: 'Shift', majorGridLines: { width: 0 },
            title: 'Numbers of Goods Consumers'
        },
        primaryYAxis: { title: 'Inflation', minimum: 0, maximum: 100, labelFormat: '{value}%', majorTickLines: { width: 0 }, lineStyle: { width: 0 } },
        chartArea: { border: { width: 0 } },
        series: [{
            dataSource: data, xName: 'x', yName: 'y', width: 2,
            animation: { enable: false }, type: 'StepArea', marker: { visible: true },
            fill: 'url(#' + selectedTheme + '-gradient-chart)',
            border: { width: 2, color: borderColor[themes.indexOf(theme)] }
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