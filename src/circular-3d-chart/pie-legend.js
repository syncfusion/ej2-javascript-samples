var centerTitle = document.createElement('div');
centerTitle.innerHTML = 'Browser Market Share';
centerTitle.style.position = 'absolute';
centerTitle.style.visibility = 'hidden';
/**
 * Sample for Doughnut 
 */
this.default = function () {
    var pie = new ej.charts.CircularChart3D({
        // Initialize the chart series
        series: [
            {
                dataSource: [
                    { 'x': 'Chrome', y: 62.92, text: '62.92%' },
                    { 'x': 'Internet Explorer', y: 6.12, text: '6.12%' },
                    { 'x': 'Opera', y: 3.15, text: '3.15%' },
                    { 'x': 'Edge', y: 5.5, text: '5.5%' },
                    { 'x': 'Safari', y: 19.97, text: '19.97%' },
                    { 'x': 'Others', y: 2.34, text: '2.34%' }
                ],
                xName: 'x', yName: 'y',
                innerRadius: '55%', radius: '75%',
                dataLabel: {
                    visible: true, position: 'Inside', enableRotation: true,
                    font: { fontWeight: '600' }, name: 'text', connectorStyle: { length: '20px' }
                }
            }
        ],
        rotation: 15,
        tilt: -15,
        title: "Browser Market Shares in November 2023",
        legendSettings: {
            visible: true,
            enableHighlight: true,
            position: ej.base.Browser.isDevice ? 'Bottom' : 'Right',
        },
        highlightMode: 'Point',
        tooltip: { enable: true, format: '<b>${point.x}</b><br>Browser Share: <b>${point.y}%</b>', header: "" },
        // Triggered animation complete, text render and load event
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        },
    });
    pie.appendTo('#doughnut-container');
};