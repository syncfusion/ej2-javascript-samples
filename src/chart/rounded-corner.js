/**
 * Sample for pie corner radius in Pie Chart
 */
var chartData1 = [
    { x: 'Android', y: 45.49, text: 'Android: 45.49%' },
    { x: 'Windows', y: 25.35, text: 'Windows: 25.35%' },
    { x: 'iOS', y: 18.26, text: 'iOS: 18.26%' },
    { x: 'macOS', y: 5.06, text: 'macOS: 5.06%' },
    { x: 'Linux', y: 1.48, text: 'Linux: 1.48%' },
    { x: 'Others', y: 4.36, text: 'Others: 4.36%' }
];
var fontSize =  ej.base.Browser.isDevice ? '10px' : '14px';
this.default = function () {
    var chart = new ej.charts.AccumulationChart({
        series: [{
            type: 'Pie',
            dataSource: chartData1,
            animation: { enable: true },
            xName: 'x',
            yName: 'y', name: 'Project', startAngle: 120,
            innerRadius: '50%', radius: ej.base.Browser.isDevice ? '25%' : '70%', explode: false,
            dataLabel: {
                visible: true,
                position: 'Outside',
                name: 'text',
                font: { size: '12px', fontWeight: '600' },
                connectorStyle: { length: '20px', type: 'Curve' }
            },
            borderRadius: 8,
            border: { width: 0.5, color: 'white' }
        }],
        tooltip: {
            enable: true, header: '', format: '<b>${point.x}</b><br>Operating System Usage: <b>${point.y}%</b>', enableHighlight: true
        },
        title: 'Global Operating System Usage Share - 2024', subTitle: 'Source: wikipedia.org',
        enableAnimation: true,
        enableBorderOnMouseMove: false,
        legendSettings: {
            visible: false
        },
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() + 
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        },
           // custom code end
    });
    chart.appendTo('#piechart-container');
};
