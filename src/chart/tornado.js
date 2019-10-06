/**
 * Sample for Tornoda chart
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            title: 'Height in Inches',
            minorGridLines: { width: 0 },
            minorTickLines: { width: 0 },
            interval: 1,
            majorGridLines: { width: 0 }
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            labelFormat: '{value} KG',
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
                type: 'StackingBar',
                dataSource: [
                    { x: '4.5', y: 31 }, { x: '4.8', y: 37 },
                    { x: '5.1', y: 49 }, { x: '5.4', y: 57 },
                    { x: '5.7', y: 63 }, { x: '6', y: 69 }
                ],
                xName: 'x', width: 2,
                yName: 'y', name: 'Female', marker: {
                    dataLabel: {
                        visible: true,
                        position: 'Top',
                        font: {
                            fontWeight: '600'
                        }
                    }
                }
            },
            {
                type: 'StackingBar',
                dataSource: [
                    { x: '4.5', y: -31, text: '31 KG' }, { x: '4.8', y: -39, text: '39 KG' },
                    { x: '5.1', y: -52, text: '52 KG' }, { x: '5.4', y: -64, text: '64 KG' },
                    { x: '5.7', y: -70, text: '70 KG' }, { x: '6', y: -74, text: '74 KG' }
                ],
                xName: 'x', width: 2,
                yName: 'y', name: 'Male', marker: {
                    dataLabel: {
                        name: 'text',
                        visible: true,
                        position: 'Top',
                        font: {
                            fontWeight: '600'
                        }
                    }
                }
            }
        ],
        //Initializing Tooltip
        tooltip: {
            enable: true
        },
        tooltipRender: function (args) {
            args.text = args.text.indexOf('-') > 0 ? args.text.replace('-', '') : args.text;
        },
        legendSettings: {
            position: ej.base.Browser.isDevice ? 'Auto' : 'Right'
        },
        width: ej.base.Browser.isDevice ? '100%' : '80%',
        title: 'Height vs Weight',
           // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + 
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        }
           // custom code end
    });
    chart.appendTo('#container');
};