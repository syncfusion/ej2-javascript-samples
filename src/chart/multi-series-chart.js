/**
 * Sample for Combination Series
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            title: 'Years',
            interval: 1,
            labelIntersectAction: 'Rotate45',
            valueType: 'Category',
            majorGridLines: { width: 0 }, minorGridLines: { width: 0 },
            majorTickLines: { width: 0 }, minorTickLines: { width: 0 },
            lineStyle: { width: 0 },
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            title: 'Growth',
            minimum: -3,
            maximum: 3,
            interval: 1,
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 }, majorGridLines: { width: 1 },
            minorGridLines: { width: 1 }, minorTickLines: { width: 0 },
            labelFormat: '{value}B',
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Chart Series
        series: [
            {
                type: 'StackingColumn',
                dataSource: [
                    { x: '2007', y: 1 }, { x: '2008', y: 0.25 },
                    { x: '2009', y: 0.1 }, { x: '2010', y: 1 },
                    { x: '2011', y: 0.1 }, { x: '2012', y: -0.25 },
                    { x: '2013', y: 0.25 }, { x: '2014', y: 0.6 }
                ],
                xName: 'x', yName: 'y', name: 'Private Consumption',
            }, {
                type: 'StackingColumn',
                dataSource: [
                    { x: '2007', y: 0.5 }, { x: '2008', y: 0.35 },
                    { x: '2009', y: 0.9 }, { x: '2010', y: 0.5 },
                    { x: '2011', y: 0.25 }, { x: '2012', y: -0.5 },
                    { x: '2013', y: 0.5 }, { x: '2014', y: 0.6 }
                ],
                xName: 'x', yName: 'y', name: 'Government Consumption',
            }, {
                type: 'StackingColumn',
                dataSource: [
                    { x: '2007', y: 1.5 }, { x: '2008', y: 0.35 },
                    { x: '2009', y: -2.7 }, { x: '2010', y: 0.5 },
                    { x: '2011', y: 0.25 }, { x: '2012', y: -0.1 },
                    { x: '2013', y: -0.3 }, { x: '2014', y: -0.6 }
                ],
                xName: 'x', yName: 'y', name: 'Investment',
            }, {
                type: 'StackingColumn',
                dataSource: [
                    { x: '2007', y: -1 }, { x: '2008', y: -0.35 },
                    { x: '2009', y: -0.3 }, { x: '2010', y: -0.5 },
                    { x: '2011', y: 0 }, { x: '2012', y: -0.4 },
                    { x: '2013', y: 0 }, { x: '2014', y: -0.6 }
                ],
                xName: 'x', yName: 'y', name: 'Net Foreign Trade'
            }, {
                type: 'Line',
                dataSource: [
                    { x: '2007', y: 2 }, { x: '2008', y: 0.1 },
                    { x: '2009', y: -2.7 }, { x: '2010', y: 1.8 },
                    { x: '2011', y: 2 }, { x: '2012', y: 0.4 },
                    { x: '2013', y: 0.9 }, { x: '2014', y: 0.4 }
                ],
                xName: 'x', yName: 'y', name: 'GDP',
                width: 2,
                marker: {
                    visible: true,
                    width: 10,
                    height: 10
                },
            }
        ],
        width: ej.base.Browser.isDevice ? '100%' : '60%',
        //Initializing Chart Title
        title: 'Annual Growth GDP in France',
        //Initializing Tooltip
        tooltip: {
            enable: true
        },
         // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + 
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        }
         // custom code end
    });
    chart.appendTo('#series-container');
};