/**
 * Sample for Doughnut chart
 */
this.default = function () {
    var pie = new ej.charts.CircularChart3D({
        // Initialize the chart series
        series: [
            {
                dataSource: [{ x: 'Tesla', y: 137429 }, { x: 'Aion', y: 80308 }, { x: 'Wuling', y: 76418 }, { x: 'Changan', y: 52849 }, { x: 'Geely', y: 47234 }, { x: 'Nio', y: 31041 }, { x: 'Neta', y: 22449 }, { x: 'BMW', y: 18733 }],
                dataLabel: {
                    visible: true,
                    name: 'x',
                    position: 'Outside',
                    font: {
                        fontWeight: '600',
                    },
                    connectorStyle: { length: ej.base.Browser.isDevice ? '20px' : '40px' }
                },
                xName: 'x',
                yName: 'y',
                radius: ej.base.Browser.isDevice ? '45%' : '75%',
                innerRadius: '65%',
            }
        ],
        title: 'Top Selling Electric Cars in China',
        legendSettings: {
            visible: false,
        },
        tooltip: { enable: true, header: "${point.x}", format: 'Sales Count : <b>${point.y}' },
        enableRotation: true,
        tilt: -30,
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
    });
    pie.appendTo('#container');
};