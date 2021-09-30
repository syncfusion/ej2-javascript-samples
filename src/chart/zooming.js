this.default = function () {
    var series1 = [];
    var point1;
    var value = 80;
    var i;
    for (i = 1; i < 500; i++) {
        if (Math.random() > 0.5) {
            value += Math.random();
        }
        else {
            value -= Math.random();
        }
        point1 = { x: new Date(1950, i + 2, i), y: value.toFixed(1) };
        series1.push(point1);
    }
/**
 * Sample for Zooming in Chart
 */
var selectedTheme = location.hash.split('/')[1];
selectedTheme = selectedTheme ? selectedTheme : 'Material';
var theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
var themes = ['bootstrap5', 'bootstrap5dark', 'tailwind', 'tailwinddark', 'material', 'materialdark', 'bootstrap4', 'bootstrap', 'bootstrapdark', 'fabric', 'fabricdark', 'highcontrast'];
var borderColor = ['#262E0B', '#5ECB9B', '#5A61F6', '#8B5CF6', '#00bdae', '#9ECB08', '#a16ee5', '#a16ee5', '#a16ee5', '#4472c4', '#4472c4', '#79ECE4'];
var fill = 'url(#' + selectedTheme + '-gradient-chart)';
    var chart = new ej.charts.Chart({
        chartArea: { border: { width: 0 } },
        //Initializing Primary X Axis
        primaryXAxis: {
            title: 'Years',
            valueType: 'DateTime',
            skeleton: 'yMMM',
            edgeLabelPlacement: 'Shift',
            majorGridLines: { width: 0 }
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            title: 'Profit ($)',
            rangePadding: 'None',
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 }
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Area',
                dataSource: series1,
                name: 'Product X',
                xName: 'x',
                yName: 'y',
                fill: fill,
                border: { width: 0.5, color: borderColor[themes.indexOf(theme.toLowerCase())] },
                animation: { enable: false }
            },
        ],
        //Initializing Zooming
        zoomSettings: {
            enableMouseWheelZooming: true,
            enablePinchZooming: true,
            enableSelectionZooming: true,
            mode: 'X',
            enableScrollbar: true
        },
        //Initializing Chart Title
        title: 'Sales History of Product X',
        legendSettings: { visible: false },
        width: ej.base.Browser.isDevice ? '100%' : '80%',
        theme: theme,
    });
    chart.appendTo('#zoom-container');
};