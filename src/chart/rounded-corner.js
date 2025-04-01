/**
 * Sample for pie corner radius in Pie Chart
 */
var chartData1 = [
    { x: 'Operations', y: 30.0, text: '30.0%' },
    { x: 'Miscellaneous', y: 10.0, text: '10.0%' },
    { x: 'Human Resources', y: 15.0, text: '15.0%' },
    { x: 'Research and Development', y: 20.0, text: '20.0%' },
    { x: 'Marketing', y: 25.0, text: '25.0%' },
];
var fontSize =  ej.base.Browser.isDevice ? '10px' : '14px';
this.default = function () {
    var chart = new ej.charts.AccumulationChart({
        series: [{
            type: 'Pie',
            dataSource: chartData1,
            animation: { enable: true },
            xName: 'x',
            yName: 'y',
            innerRadius: '50%',
            dataLabel: {
                visible: true,
                position: 'Outside',
                name: 'x',
                connectorStyle: { width: 0 },
            },
            borderRadius: 8,
            border: { width: 3 }
        }],
        tooltip: {
            enable: true,
            header: '<b>Budget</b>', format: '${point.x}: <b>${point.y}%</b>',
            enableHighlight: true
        },
        title: 'Company Budget Distribution',
        enableSmartLabels: true,
        enableBorderOnMouseMove: false,
        legendSettings: {
            visible: false
        },
        annotations: [
            {
                content: '<div style="padding: 5px; color: #FFFFFF; font-size: ' + fontSize + '">30%</div>',
                region: 'Series',
                coordinateUnits: 'Point',
                x: 'Operations',
                y: 30.0
            },
            {
                content: '<div style="padding: 5px; color: #FFFFFF; font-size: ' + fontSize + '">10%</div>',
                region: 'Series',
                coordinateUnits: 'Point',
                x: 'Miscellaneous',
                y: 10.0
            },
            {
                content: '<div style="padding: 5px; color: #FFFFFF; font-size: ' + fontSize + '">15%</div>',
                region: 'Series',
                coordinateUnits: 'Point',
                x: 'Human Resources',
                y: 15.0
            },
            {
                content: '<div style="padding: 5px; color: #FFFFFF; font-size: ' + fontSize + '">20%</div>',
                region: 'Series',
                coordinateUnits: 'Point',
                x: 'Research and Development',
                y: 20.0
            },
            {
                content: '<div style="padding: 5px; color: #FFFFFF; font-size: ' + fontSize + '">25%</div>',
                region: 'Series',
                coordinateUnits: 'Point',
                x: 'Marketing',
                y: 25.0
            }
        ],
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() + 
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        },
        pointRender: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            if (selectedTheme.indexOf('dark') > -1) {
                if (selectedTheme.indexOf('material') > -1) {
                    args.border.color = '#303030';
                }
                else if (selectedTheme.indexOf('bootstrap5') > -1) {
                    args.border.color = '#212529';
                }
                else if (selectedTheme.indexOf('bootstrap') > -1) {
                    args.border.color = '#1A1A1A';
        
                }
                else if (selectedTheme.indexOf('fabric') > -1) {
                    args.border.color = '#201f1f';
        
                }
                else if (selectedTheme.indexOf('fluent') > -1) {
                    args.border.color = '#252423';
        
                }
                else if (selectedTheme.indexOf('bootstrap') > -1) {
                    args.border.color = '#1A1A1A';
        
                }
                else if (selectedTheme.indexOf('tailwind') > -1) {
                    args.border.color = '#1F2937';
        
                }
                else {
                    args.border.color = '#222222';
        
                }
            }
            else if (selectedTheme.indexOf('highcontrast') > -1) {
                args.border.color = '#000000';
            }
            else {
                args.border.color = '#FFFFFF';
            }
        }
           // custom code end
    });
    chart.appendTo('#piechart-container');
};
