var series1 = [];
var series2 = [];
var point1;
var point2;
var value = 80;
var value1 = 90;
var i;
for (i = 1; i < 500; i++) {
    if (Math.random() > 0.5) {
        value += Math.random();
        value1 += Math.random();
    }
    else {
        value -= Math.random();
        value1 -= Math.random();
    }
    point1 = { x: new Date(1960, (i + 1), i), y: Math.round(value) };
    point2 = { x: new Date(1960, (i + 1), i), y: Math.round(value1) };
    series1.push(point1);
    series2.push(point2);
}
/**
 * Sample for Local Data binding
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            majorGridLines: { width: 0 },
            valueType: 'DateTime',
            edgeLabelPlacement: 'Shift'
        },
        //Initializing Primary X Axis
        primaryYAxis: {
            title: 'Price',
            labelFormat: '${value}',
            rangePadding: 'None',
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 }
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Line',
                dataSource: series1,
                xName: 'x', yName: 'y',
                width: 2, name: 'Product X',
                marker: { visible: false }
            },
            {
                type: 'Line',
                dataSource: series2,
                xName: 'x', yName: 'y',
                width: 2, name: 'Product Y', marker: { visible: false }
            }
        ],
        //Initializing Chart Title
        title: 'Stock Price Analysis',
        //Initializing Tooltip and Crosshair
        tooltip: {
            enable: true, shared: true
        }, legendSettings: { enableHighlight: true },
        // Initializing the crosshair
        crosshair: {
            enable: true,
            line: {
                color: 'rgba(204,214,235,0.25)',
                width: ej.base.Browser.isDevice ? 50 : 20,
            },
            lineType: 'Vertical'
        },
        width: ej.base.Browser.isDevice ? '100%' : '75%',
         // custom code start
        load: function (args) {
            var selectTheme = location.hash.split('/')[1];
            selectTheme = selectTheme ? selectTheme : 'Fluent2';
            args.chart.theme = (selectTheme.charAt(0).toUpperCase() + 
                selectTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
         // custom code end
    });
    chart.appendTo('#local-container');
};