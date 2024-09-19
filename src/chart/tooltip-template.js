/**
 * Sample for tooltip template in chart.
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        
        backgroundImage: 'src/chart/images/wheat.png',
        //Initializing Primary X Axis
        primaryXAxis: {
            labelStyle: { color: 'white'},
            intervalType: 'Years',
            labelFormat: 'y',
            valueType: 'Category',
            edgeLabelPlacement: 'Shift',
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            lineStyle: { color: '#EFEFEF', width: 3 },
        },
        //Initializing Primary X Axis
        primaryYAxis: {
            rangePadding: 'None',
            labelStyle: { color: 'white'},
            majorGridLines: { color: '#EFEFEF', width: 2 },
            majorTickLines: { width: 0},
            title: 'Billion Bushels',
            titleStyle: { color: 'white'},
            lineStyle: { width: 0 },
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
                dataSource: [{ x: 2002, y: 1.61 }, { x: 2003, y: 2.34 }, { x: 2004, y: 2.16 }, { x: 2005, y: 2.10 }, 
                { x: 2006, y: 1.81 }, { x: 2007, y: 2.05 }, { x: 2008, y: 2.50 }, { x: 2009, y: 2.22 }, 
                { x: 2010, y: 2.21 }, { x: 2011, y: 2.00 }, { x: 2012, y: 1.7 }],
                xName: 'x', width: 2, fill: '#333333',  yName: 'y',
                marker: {
                    visible: true,
                    width: 10,
                    height: 10,
                    fill: '#C1272D',
                    border: {color: '#333333', width: 2} 
                },            
            }        
        ],
        //Initializing Chart Title
        title: 'USA Wheat Production',
        //Initializing Tooltip
        tooltip: {
            enable: true,
            template: '#Tooltip'
        },
        width: ej.base.Browser.isDevice ? '100%' : '75%',
         // custom code start
        load: function (args) {
            var lineTheme = location.hash.split('/')[1];
            lineTheme = lineTheme ? lineTheme: 'Fluent2';
            args.chart.theme = (lineTheme.charAt(0).toUpperCase() + 
                lineTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
         // custom code end
    });
    chart.appendTo('#tooltip-container');
};