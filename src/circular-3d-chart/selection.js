var centerTitle = document.createElement('div');
centerTitle.innerHTML = 'Browser Market Share';
centerTitle.style.position = 'absolute';
centerTitle.style.visibility = 'hidden';
/**
 * Sample for Doughnut 
 */
this.default = function () {
    var pie = new ej.charts.CircularChart3D({
        series: [
            {
                dataSource: [
                    { 'x': 'Chrome', y: 62.92 },
                    { 'x': 'Internet Explorer', y: 6.12 },
                    { 'x': 'Edge', y: 5.5 },
                    { 'x': 'Opera', y: 3.15 },
                    { 'x': 'Safari', y: 19.97 },
                    { 'x': 'Others', y: 2.34 }
                ],
                xName: 'x', yName: 'y',
                radius: ej.base.Browser.isDevice ? '50%' : '70%',
                dataLabel: {
                    visible: true,
                    name: 'x',
                    position: 'Outside',
                    font: {
                        fontWeight: '600',
                    },
                    connectorStyle: { length: ej.base.Browser.isDevice ? '20px' : '40px' }
                },
            }
        ],
        title: "Browser Market Shares in November 2023",
        legendSettings: {
            visible: true,
            position: ej.base.Browser.isDevice ? 'Bottom' : 'Right',
            toggleVisibility: false
        },
        tilt: -30,
        selectionMode: 'Point',
        selectionPattern: 'DiagonalBackward',
        isMultiSelect: true,
        highlightMode: 'Point',
        tooltip: { enable: true, format: '<b>${point.x}</b><br>Browser Share: <b>${point.y}%</b>', header: "" },
        // Triggered animation complete, text render and load event
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
    });
    pie.appendTo('#doughnut-container');
};