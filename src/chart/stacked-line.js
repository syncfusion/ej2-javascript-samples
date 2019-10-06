/**
 * Sample for StackingArea Series
 */
this.default = function () {
    var chartData = [
        { x: 'Food', y: 90, y1: 40, y2: 70, y3: 120 },
        { x: 'Transport', y: 80, y1: 90, y2: 110, y3: 70 },
        { x: 'Medical', y: 50, y1: 80, y2: 120, y3: 50 },
        { x: 'Clothes', y: 70, y1: 30, y2: 60, y3: 180 },
        { x: 'Personal Care', y: 30, y1: 80, y2: 80, y3: 30 },
        { x: 'Books', y: 10, y1: 40, y2: 30, y3: 270 },
        { x: 'Fitness', y: 100, y1: 30, y2: 70, y3: 40 },
        { x: 'Electricity', y: 55, y1: 95, y2: 55, y3: 75 },
        { x: 'Tax', y: 20, y1: 50, y2: 40, y3: 65 },
        { x: 'Pet Care', y: 40, y1: 20, y2: 80, y3: 95 },
        { x: 'Education', y: 45, y1: 15, y2: 45, y3: 195 },
        { x: 'Entertainment', y: 75, y1: 45, y2: 65, y3: 115 }
    ];
    
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            majorGridLines: { width: 0 }, minorGridLines: { width: 0 },
            majorTickLines: { width: 0 }, minorTickLines: { width: 0 },
            interval: 1, lineStyle: { width: 0 }, valueType: 'Category'
        },
        //Initializing Primary Y Axis
        primaryYAxis:
        {
            title: 'Expense', lineStyle: { width: 0 },
            minimum: 0, maximum: 400, interval: 100,
            majorTickLines: { width: 0 },
            majorGridLines: { width: 1 },
            minorGridLines: { width: 1 },
            minorTickLines: { width: 0 },
            labelFormat: '${value}',
        },
        chartArea: { border: { width: 0 } },
        //Initializing Chart Series
        series: [
            {
                type: 'StackingLine', dataSource: chartData, marker: { visible: true },
                dashArray: '5, 1', xName: 'x', width: 2, yName: 'y', name: 'John'
            },
            {
                type: 'StackingLine', dataSource: chartData, marker: { visible: true },
                dashArray: '5, 1', xName: 'x', width: 2, yName: 'y1', name: 'Peter'
            },
            {
                type: 'StackingLine', dataSource: chartData, marker: { visible: true },
                dashArray: '5, 1', xName: 'x', width: 2, yName: 'y2', name: 'Steve'
            },
            {
                type: 'StackingLine', dataSource: chartData, marker: { visible: true },
                dashArray: '5, 1', xName: 'x', width: 2, yName: 'y3', name: 'Charle'
            }
        ],
        //Initializing User Interaction Tooltip
        tooltip: {
            enable: true
        },
        title: 'Family Expense for Month',
        width: ej.base.Browser.isDevice ? '100%' : '90%',
        load: function (args) {
            var stackedTheme = location.hash.split('/')[1];
            stackedTheme = stackedTheme ? stackedTheme : 'Material';
            args.chart.theme = (stackedTheme.charAt(0).toUpperCase() + 
            stackedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        }
    });
    chart.appendTo('#stacked-container');
};