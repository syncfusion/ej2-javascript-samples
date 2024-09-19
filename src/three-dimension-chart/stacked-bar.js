/**
 * Sample for StackingBar Series
 */
this.default = function () {
    var chart3D = new ej.charts.Chart3D({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            labelPlacement: 'BetweenTicks',
        },
        //Initializing Primary Y Axis
        primaryYAxis:
        {
            edgeLabelPlacement: 'Shift', interval: ej.base.Browser.isDevice ? 20 : 10
        },
        //Initializing Chart Series
        series: [
            {
                type: 'StackingBar',
                dataSource: [
                    { x: 'Sochi 2014', y: 9 },
                    { x: 'Rio 2016', y: 46 },
                    { x: ej.base.Browser.isDevice ? 'Pyeongchang<br> 2018' : 'Pyeongchang 2018', y: 9 },
                    { x: 'Tokyo 2020', y: 39 },
                    { x: 'Beijing 2022', y: 8 },
                ],
                name: 'America',
                xName: 'x',
                yName: 'y', columnWidth: 0.6
            },
            {
                type: 'StackingBar',
                dataSource: [
                    { x: 'Sochi 2014', y: 10 },
                    { x: 'Rio 2016', y: 4 },
                    { x: ej.base.Browser.isDevice ? 'Pyeongchang<br> 2018' : 'Pyeongchang 2018', y: 11 },
                    { x: 'Tokyo 2020', y: 7 },
                    { x: 'Beijing 2022', y: 4 },],
                name: 'Canada',
                xName: 'x',
                yName: 'y', columnWidth: 0.6
            },
            {
                type: 'StackingBar',
                dataSource: [
                    { x: 'Sochi 2014', y: 4 },
                    { x: 'Rio 2016', y: 10 },
                    { x: ej.base.Browser.isDevice ? 'Pyeongchang<br> 2018' : 'Pyeongchang 2018', y: 5 },
                    { x: 'Tokyo 2020', y: 10 },
                    { x: 'Beijing 2022', y: 5 },],
                name: 'France',
                xName: 'x',
                yName: 'y', columnWidth: 0.6

            },
            {
                type: 'StackingBar',
                dataSource: [
                    { x: 'Sochi 2014', y: 8 },
                    { x: 'Rio 2016', y: 17 },
                    { x: ej.base.Browser.isDevice ? 'Pyeongchang<br> 2018' : 'Pyeongchang 2018', y: 14 },
                    { x: 'Tokyo 2020', y: 10 },
                    { x: 'Beijing 2022', y: 12 },],
                name: 'Germany',
                xName: 'x',
                yName: 'y',
                columnWidth: 0.6
            }
        ],

        //Initializing Chart title
        title: 'Olympic Gold Medal Comparison',
        tooltip: {
            enable: true
        },
        enableRotation: true,
        rotation: 22,
        depth: 100,
        height: '400',
        width: ej.base.Browser.isDevice ? '100%' : '75%',
        legendSettings: {
            enableHighlight: true
        },
           // custom code start
        load: function (args) {
            var stackedBarTheme = location.hash.split('/')[1];
            stackedBarTheme = stackedBarTheme ? stackedBarTheme : 'Fluent2';
            args.chart.theme = (stackedBarTheme.charAt(0).toUpperCase() + 
                stackedBarTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
           // custom code end
    });
    chart3D.appendTo('#sBar-container');
};
