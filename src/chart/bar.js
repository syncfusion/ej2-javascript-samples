/**
 * Sample for Bar Series
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            title: 'Food',
            interval: 1,
            majorGridLines: { width: 0 }
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            labelFormat: '{value}B',
            edgeLabelPlacement: 'Shift',
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            labelStyle: {
                color: 'transparent'
            }
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Bar',
                dataSource: [
                    { x: 'Egg', y: 2.2 }, { x: 'Fish', y: 2.4 },
                    { x: 'Misc', y: 3 }, { x: 'Tea', y: 3.1 }
                ],
                xName: 'x', width: 2,
                yName: 'y', name: 'Imports', marker: {
                    dataLabel: {
                        visible: true,
                        position: 'Top',
                        font: {
                            fontWeight: '600', color:'#ffffff'
                        }
                    }
                }
            },
            {
                type: 'Bar',
                dataSource: [
                    { x: 'Egg', y: 1.2 }, { x: 'Fish', y: 1.3 },
                    { x: 'Misc', y: 1.5 }, { x: 'Tea', y: 2.2 }
                ],
                xName: 'x', width: 2,
                yName: 'y', name: 'Exports', marker: {
                    dataLabel: {
                        visible: true,
                        position: 'Top',
                        font: {
                            fontWeight: '600', color:'#ffffff'
                        }
                    }
                }
            }
        ],
        //Initializing Tooltip
        tooltip: {
            enable: true
        },
        width: ej.base.Browser.isDevice ? '100%' : '60%',
        //Initializing Chart Title
        title: 'UK Trade in Food Groups - 2015',
         // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        },
         // custom code end
    });
    chart.appendTo('#bar-container');
};