/**
 * Sample for Polar Series with DrawType StackingColumn
 */
this.default = function () {
    var data = [
        { x: 'N', y: 1, y1: 0.8, y2: 0.8, y3: 0.3, y4: 0.2, y5: 0.2 },
        { x: 'NNE', y: 0.9, y1: 0.7, y2: 0.7, y3: 0.3, y4: 0.2, y5: 0.2 },
        { x: 'NE', y: 0.7, y1: 0.8, y2: 0.5, y3: 1.1, y4: 1.2, y5: 0.5 },
        { x: 'ENE', y: 0.9, y1: 1, y2: 0.4, y3: 0.9, y4: 1, y5: 0.4 },
        { x: 'E', y: 0.9, y1: 0.6, y2: 0.9, y3: 0.5, y4: 0.7, y5: 0.4 },
        { x: 'ESE', y: 0.8, y1: 0.5, y2: 0.7, y3: 0.3, y4: 0.8, y5: 0.3 },
        { x: 'SE', y: 0.7, y1: 0.4, y2: 0.6, y3: 0.5, y4: 0.5, y5: 0.3 },
        { x: 'SSE', y: 1.4, y1: 0.4, y2: 0.5, y3: 0.4, y4: 0.6, y5: 0.2 },
        { x: 'S', y: 2, y1: 1.2, y2: 0.6, y3: 0.6, y4: 0.4, y5: 0.4 },
        { x: 'SSW', y: 2, y1: 2.5, y2: 2, y3: 1, y4: 0.5, y5: 0.3 },
        { x: 'SW', y: 2.2, y1: 2, y2: 1.8, y3: 1, y4: 0.4, y5: 0.2 },
        { x: 'WSW', y: 1.8, y1: 1.1, y2: 0.8, y3: 0.1, y4: 0.4, y5: 0.2 },
        { x: 'W', y: 1.6, y1: 1.8, y2: 2.1, y3: 1, y4: 0.4, y5: 0.4 },
        { x: 'WNW', y: 1.2, y1: 1.2, y2: 1.5, y3: 1.3, y4: 1.1, y5: 1.2 },
        { x: 'NW', y: 2, y1: 2.5, y2: 2, y3: 1, y4: 0.2, y5: 0.7 },
        { x: 'NNW', y: 1.8, y1: 1.1, y2: 0.8, y3: 0.1, y4: 0.4, y5: 0.2 }
    ];
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            labelPlacement: 'OnTicks',
            interval: 1,
            coefficient: ej.base.Browser.isDevice ? 80 : 100
        },
        //Initializing Primary Y Axis
        primaryYAxis: {},
        //Initializing Chart Sample
        series: [
            {
                type: 'Polar', drawType: 'StackingColumn', dataSource: data,
                animation: { enable: true },
                xName: 'x', yName: 'y', name: '6-9', border:{color:'white', width: 1}
            },
            {
                type: 'Polar', drawType: 'StackingColumn', dataSource: data,
                animation: { enable: true },
                xName: 'x', yName: 'y1', name: '9-11', border:{color:'white', width: 1}
            },
            {
                type: 'Polar', drawType: 'StackingColumn', dataSource: data,
                animation: { enable: true },
                xName: 'x', yName: 'y2', name: '11-14', border:{color:'white', width: 1}
            },
            {
                type: 'Polar', drawType: 'StackingColumn', dataSource: data,
                animation: { enable: true },
                xName: 'x', yName: 'y3', name: '14-17', border:{color:'white', width: 1}
            },
            {
                type: 'Polar', drawType: 'StackingColumn', dataSource: data,
                animation: { enable: true },
                xName: 'x', yName: 'y4', name: '17-20', border:{color:'white', width: 1}
            },
            {
                type: 'Polar', drawType: 'StackingColumn', dataSource: data,
                animation: { enable: true },
                xName: 'x', yName: 'y5', name: '23 Above', border:{color:'white', width: 1}
            },
        ],
        //Initializing Chart Title
        title: 'Wind Rose Chart',
        legendSettings: {
            visible: true, enableHighlight: true
        },
        //Initializing Tooltip
        tooltip: {
            enable: true
        },
           // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + 
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
           // custom code end
    });
    chart.appendTo('#container');
};