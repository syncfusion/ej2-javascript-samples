var chartData = [
    { x: '2013', y: 9628912, y1: 4298390, y2: 2842133, y3: 2006366 },
    { x: '2014', y: 9609326, y1: 4513769, y2: 3016710, y3: 2165566 },
    { x: '2015', y: 7485587, y1: 4543838, y2: 3034081, y3: 2279503 },
    { x: '2016', y: 7793066, y1: 4999266, y2: 2945295, y3: 2359756 },
    { x: '2017', y: 6856880, y1: 5235842, y2: 3302336, y3: 2505741 }
];
/**
 * Sample for 100 percent StackingColumn Series
 */
this.default = function () {
    var chart3D = new ej.charts.Chart3D({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            labelPlacement: 'BetweenTicks'
        },
        //Initializing Primary Y Axis
        primaryYAxis:
        {
            rangePadding: 'None',
            interval: ej.base.Browser.isDevice ? 25 : 20
        },
        //Initializing Chart Series
        series: [
            {
                dataSource: chartData, xName: 'x', yName: 'y',
                type: 'StackingColumn100',
                name: 'General Motors', columnWidth: 0.5
            }, {
                dataSource: chartData, xName: 'x', yName: 'y1',
                type: 'StackingColumn100', name: 'Honda', columnWidth: 0.5
            }, {
                dataSource: chartData, xName: 'x', yName: 'y2',
                type: 'StackingColumn100', name: 'Suzuki', columnWidth: 0.5

            }, {
                dataSource: chartData, xName: 'x', yName: 'y3',
                type: 'StackingColumn100', name: 'BMW', columnWidth: 0.5

            }
        ],
           // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme  : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + 
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        },
           // custom code end
           width: ej.base.Browser.isDevice ? '100%' : '75%',
           enableRotation: true,
           wallColor: 'transparent',
           rotation: 7,
           tilt: 10,
           depth: 100,
           height: '400',
           //Initializing Chart Title
           title: 'Motor Vehicle Production by Manufacturer',
           legendSettings: {
               enableHighlight: true
           },
           //Initializing User Interaction Tooltip
           tooltip: {
            enable: true, format: '${point.x} : <b>${point.y} (${point.percentage}%)</b>'
           }
    });
    chart3D.appendTo('#column100-container');
};