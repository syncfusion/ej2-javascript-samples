var chartData = [
    { x: 'Jan', y: 6, y1: 6, y2: 1 }, { x: 'Feb', y: 8, y1: 8, y2: 1.5 },
    { x: 'Mar', y: 12, y1: 11, y2: 2 }, { x: 'Apr', y: 15, y1: 16, y2: 2.5 },
    { x: 'May', y: 20, y1: 21, y2: 3 }, { x: 'Jun', y: 24, y1: 25, y2: 3.5 }
];
/**
 * Sample for 100 percent StackingBar Series
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            edgeLabelPlacement: 'Shift',
            title: 'Sales (In Percentage)',
            majorTickLines: { width: 0 },
            lineStyle: {width: 0}
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Chart Series
        series: [
            {
                //Series type as 100% stacked bar
                type: 'StackingBar100',
                name: 'Apple',
                dataSource: chartData, xName: 'x', yName: 'y', border:{width: 1, color: "white" } , columnWidth:0.6
            }, {
                type: 'StackingBar100', name: 'Orange',
                dataSource: chartData, xName: 'x', yName: 'y1', border:{width: 1, color: "white" } , columnWidth:0.6
            }, {
                type: 'StackingBar100', name: 'Wastage',
                dataSource: chartData, xName: 'x', yName: 'y2', border:{width: 1, color: "white" } , columnWidth:0.6
            }
        ],
        width: ej.base.Browser.isDevice ? '100%' : '75%',
           // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + 
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        },
           // custom code end
        //Initializing Chartt Title
        title: 'Sales Comparison',
        legendSettings: {
            enableHighlight :true
        },
        //Initializing Tooltip
        tooltip: {
            enable: true, format: '${point.x} : <b>${point.y} (${point.percentage}%)</b>'
        }
    });
    chart.appendTo('#bar100-container');
};