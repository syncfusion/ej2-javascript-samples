var selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    var theme = (selectedTheme.charAt(0).toUpperCase() +
        selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
    var themes = ['bootstrap5', 'bootstrap5dark', 'tailwind', 'tailwinddark', 'material', 'materialdark', 'bootstrap4', 'bootstrap', 'bootstrapdark', 'fabric', 'fabricdark', 'highcontrast', 'Fluent', 'FluentDark', 'material3', 'material3dark', 'fluent2', 'fluent2highcontrast', 'fluent2dark', 'tailwind3', 'tailwind3dark'];
    var borderColor = ['#FD7E14', '#FD7E14', '#5A61F6', '#5A61F6',  '#00bdae', '#9ECB08', '#a16ee5', '#a16ee5', '#a16ee5', '#4472c4', '#4472c4', '#79ECE4', '#1AC9E6', '#1AC9E6', '#6355C7', '#4EAAFF', '#6200EE', '#9BB449', '#9BB449', '#2F4074', '#8029F1'];
    var fill = 'url(#' + selectedTheme + '-gradient-chart)';
var chart;
var loaded;
var dt1;
var dt2;
/**
 * Sample for Chart Performance
 */
this.default = function () {
    chart = new ej.charts.Chart({
        enableCanvas: false,
        //Initializing Primary X Axis
        primaryXAxis: {
            intervalType: 'Years',
            valueType: 'DateTime',
            edgeLabelPlacement: 'Shift',
            title: 'Years',
            majorGridLines: { width: 0 }
        },
        primaryYAxis: {
            interval: 2000,
            minimum: 0,
            maximum: 12000,
            title: 'Values',
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 }
        },
        chartArea: {
            border: { width: 0 }
        },
        //Initializing Chart Series
        series: [
            {
                name: 'Series1',
                type: 'Area',fill: fill,
                animation: { enable: false }, border: { width: 2, color: borderColor[themes.indexOf(theme)] },
            }
        ],
        legendSettings: { visible: false },
        width : ej.base.browser ? '100' : '75%',
        title:'Chart with 100k points',
        load: function (args) {
            var series1 = [];
            var point1;
            var pts;
            var value = 0;
            for (pts = 0; pts < 100000; pts++) {
                if (pts % 3 == 0) {
                    value -= (Math.random() * (100) / 3) * 4;
                }
                else if (pts % 2 == 0) {
                    value += (Math.random() * (100) / 3) * 4;
                }
                if (value < 0) {
                    value = value * -1;
                }
                if (value >= 12000) {
                    value = Math.floor(Math.random() * 11000) + 1000;
                }
                point1 = { x: new Date(2005, 1, 1).setHours(pts), y: value };
                series1.push(point1);
            }
            chart.series[0].dataSource = series1;
            chart.series[0].xName = 'x';
            chart.series[0].yName = 'y';
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
            args.chart.series[0].border = { width: 2, color: borderColor[themes.indexOf(args.chart.theme.toLowerCase())] };
        }
    });
    chart.appendTo('#container');
};