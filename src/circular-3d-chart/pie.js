/**
 * Sample for Pie with Various Radius
 */
this.default = function () {
    var pie = new ej.charts.CircularChart3D({
        series: [
            {
                dataSource: [
                    { 'x': 'Canada', y: 46, text: 'Canada: 46' },
                    { 'x': 'Hungary', y: 30, text: 'Hungary: 30' },
                    { 'x': 'Germany', y: 79, text: 'Germany: 79' },
                    { 'x': 'Mexico', y: 13, text: 'Mexico: 13' },
                    { 'x': 'China', y: 56, text: 'Greece: 26' },
                    { 'x': 'India', y: 41, text: 'India: 41' },
                    { 'x': 'Bangladesh', y: 25, text: 'Bangladesh: 25' },
                    { 'x': 'United States', y: 32, text: 'United States: 32' },
                    { 'x': 'Belgium', y: 34, text: 'Belgium: 34' }
                ],
                xName: 'x',
                yName: 'y',
                radius: ej.base.Browser.isDevice ? '45%' : '75%',
                innerRadius: '0%',
                explode: true,
                explodeOffset: ej.base.Browser.isDevice ? '10%' : '30%',
                dataLabel: {
                    visible: true, position: 'Outside',
                    name: 'x',
                    font: { fontWeight: '600' },
                    connectorStyle: { length: ej.base.Browser.isDevice ? '20px' : '40px' }
                },
            },
        ],
        title: 'Berlin 2023 Special Olympics Gold Medals',
        legendSettings: {
            visible: false,
        },
        // Initialize tht tooltip
        tooltip: { enable: true, format: "<b>${point.x}</b><br> Gold Medals: <b>${point.y}</b>", header: "" },
        enableRotation: true,
        tilt: -45,
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
        // custom code end
    });
    pie.appendTo('#pie-container');
};