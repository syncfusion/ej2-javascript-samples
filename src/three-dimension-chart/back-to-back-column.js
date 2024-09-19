/**
 * Sample for Column series series with Side by Side Placement
 */
this.default = function () {
    var chart3D = new ej.charts.Chart3D({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category', interval: 1,
            labelPlacement: 'BetweenTicks',
            labelRotation: -45
        },
        primaryYAxis: {
            interval: ej.base.Browser.isDevice ? 4 : 2
        },
        series: [
            {
                type: 'Column', xName: 'x', yName: 'y', name: 'Grapes',
                dataSource: [{ x: 'Jamesh', y: 1 }, { x: 'Michael', y: 2 }, { x: 'John', y: 2 }, { x: 'Jack', y: 1 }, { x: 'Lucas', y: 1 }],
                columnWidth: 0.2
            },
            {
                type: 'Column', xName: 'x', yName: 'y', name: 'Orange',
                dataSource: [{ x: 'Jamesh', y: 4 }, { x: 'Michael', y: 3 }, { x: 'John', y: 4 }, { x: 'Jack', y: 2 }, { x: 'Lucas', y: 3 }],
                columnWidth: 0.2
            },
            {
                type: 'Column', xName: 'x', yName: 'y', name: 'Apple',
                dataSource: [{ x: 'Jamesh', y: 5 }, { x: 'Michael', y: 4 }, { x: 'John', y: 5 }, { x: 'Jack', y: 5 }, { x: 'Lucas', y: 6 }],
                columnWidth: 0.2
            },
            {
                type: 'Column', xName: 'x', yName: 'y', name: 'Total',
                dataSource: [{ x: 'Jamesh', y: 10, text: 'Total 10' },
                { x: 'Michael', y: 9, text: 'Total 9' }, { x: 'John', y: 11, text: 'Total 11' }, { x: 'Jack', y: 8, text: 'Total 8' }, { x: 'Lucas', y: 10, text: 'Total 10' }],
                columnWidth: 0.2
            }
        ],
        enableSideBySidePlacement: false,
        rotation: ej.base.Browser.isDevice ? 5 : 25,
        depth: 500,
        height: '400',
        title: 'Fruit Consumption by Individuals', tooltip: { enable: true },
        legendSettings: { visible: true, enableHighlight: true },
        width: ej.base.Browser.isDevice ? '100%' : '75%',
         // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        },
         // custom code end
    });
    chart3D.appendTo('#container');
};