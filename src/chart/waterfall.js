/**
 * Sample for Waterfall series
 */
this.default = function () {
    var chartData = [
        { x: 'Income', y: 971  }, { x: 'Sales', y: -101  },
        { x: 'Development', y: -268  },
        { x: 'Revenue', y: 403  }, { x: 'Balance' },
        { x: 'Expense', y: -136  }, { x: 'Tax', y: -365  },
        { x: 'Net Profit' }
    ];
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            majorGridLines: { width: 0 },labelRotation: ej.base.Browser.isDevice ? -45 : 0,
                        labelIntersectAction : ej.base.Browser.isDevice ? 'None' : 'Rotate45', majorTickLines: {width : 0},
                        minorTickLines: {width: 0}
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            minimum: 0, maximum: 1250, interval: 250,
            majorGridLines: { width: 1 }, lineStyle: { width: 0 }, majorTickLines: { width: 0 },
            minorTickLines: { width: 0 },
            title: 'USD',
            labelFormat: "{value}K"
        },
        //Initializing Chart Series
        series: [{
                dataSource: chartData, width: 2, negativeFillColor: '#e56590',
                xName: 'x', yName: 'y', intermediateSumIndexes: [4], sumIndexes: [7],
                name: 'USA',
                type: 'Waterfall', animation: { enable: true },
                marker: {
                    dataLabel: { visible: true }
                }, border:{width:1, color:'black'}, connector: { color: '#5F6A6A', width: 2 }
            }],
        chartArea: { border: { width: 0 } },
        //Initializing Tooltip
        tooltip: {
            enable: true, header:'', format: "<b>${point.x}</b> <br> Product Revenue : <b>${point.y}</b>"
        },
        //Initializing Chart Title
        title: 'Company Revenue and Profit',
        legendSettings: { visible: false },
        width: ej.base.Browser.isDevice ? '100%' : '75%',
           // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            args.chart.theme = selectedTheme && (selectedTheme.charAt(0).toUpperCase() + 
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        }
           // custom code end
    });
    chart.appendTo('#waterFall-container');
};