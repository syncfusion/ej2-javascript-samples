/**
 * Sample for StackingBar Series
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            majorGridLines: { width: 0 }
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            labelFormat: '{value}%',
            edgeLabelPlacement: 'Shift'
        },
        //Initializing Chart Series
        series: [
            {
                type: 'StackingBar',
                dataSource: [{ x: 'Jan', y: 6 }, { x: 'Feb', y: 8 }, { x: 'Mar', y: 12 }, { x: 'Apr', y: 15.5 },
                    { x: 'May', y: 20 }, { x: 'Jun', y: 24 }],
                name: 'Apple',
                xName: 'x', width: 2,
                yName: 'y'
            },
            {
                type: 'StackingBar',
                dataSource: [{ x: 'Jan', y: 6 }, { x: 'Feb', y: 8 }, { x: 'Mar', y: 11 }, { x: 'Apr', y: 16 },
                    { x: 'May', y: 21 }, { x: 'Jun', y: 25 }],
                name: 'Orange',
                xName: 'x', width: 2,
                yName: 'y'
            },
            {
                type: 'StackingBar',
                dataSource: [{ x: 'Jan', y: -1 }, { x: 'Feb', y: -1.5 }, { x: 'Mar', y: -2 }, { x: 'Apr', y: -2.5 },
                    { x: 'May', y: -3 }, { x: 'Jun', y: -3.5 }],
                name: 'Wastage', width: 2,
                xName: 'x',
                yName: 'y'
            }
        ],
        //Initializing Tooltip
        tooltip: {
            enable: true
        },
        //Initializing Chart Title
        title: 'Sales Comparison',
        width: ej.base.Browser.isDevice ? '100%' : '60%',
           // custom code start
        load: function (args) {
            var stackedBarTheme = location.hash.split('/')[1];
            stackedBarTheme = stackedBarTheme ? stackedBarTheme : 'Material';
            args.chart.theme = (stackedBarTheme.charAt(0).toUpperCase() + 
                stackedBarTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        }
           // custom code end
    });
    chart.appendTo('#sBar-container');
};