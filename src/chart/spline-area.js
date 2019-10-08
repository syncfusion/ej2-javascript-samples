/**
 * Sample for Area Series
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'DateTime',
            labelFormat: 'y',
            majorGridLines: { width: 0 },
            intervalType: 'Years',
            edgeLabelPlacement: 'Shift'
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            maximum: 4, interval: 1,
            labelFormat: '{value}%',
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
                dataSource: [
                    { x: new Date(2002, 0, 1), y: 2.2 }, { x: new Date(2003, 0, 1), y: 3.4 },
                    { x: new Date(2004, 0, 1), y: 2.8 }, { x: new Date(2005, 0, 1), y: 1.6 },
                    { x: new Date(2006, 0, 1), y: 2.3 }, { x: new Date(2007, 0, 1), y: 2.5 },
                    { x: new Date(2008, 0, 1), y: 2.9 }, { x: new Date(2009, 0, 1), y: 3.8 },
                    { x: new Date(2010, 0, 1), y: 1.4 }, { x: new Date(2011, 0, 1), y: 3.1 }
                ],
                name: 'US', xName: 'x', yName: 'y', type: 'SplineArea',
                border: { color: 'transparent' },
                opacity: 0.5
            },
            {
                dataSource: [
                    { x: new Date(2002, 0, 1), y: 2 }, { x: new Date(2003, 0, 1), y: 1.7 },
                    { x: new Date(2004, 0, 1), y: 1.8 }, { x: new Date(2005, 0, 1), y: 2.1 },
                    { x: new Date(2006, 0, 1), y: 2.3 }, { x: new Date(2007, 0, 1), y: 1.7 },
                    { x: new Date(2008, 0, 1), y: 1.5 }, { x: new Date(2009, 0, 1), y: 2.8 },
                    { x: new Date(2010, 0, 1), y: 1.5 }, { x: new Date(2011, 0, 1), y: 2.3 }
                ],
                name: 'France', xName: 'x', yName: 'y', type: 'SplineArea',
                border: { color: 'transparent' },
                opacity: 0.5
            },
            {
                dataSource: [
                    { x: new Date(2002, 0, 1), y: 0.8 }, { x: new Date(2003, 0, 1), y: 1.3 },
                    { x: new Date(2004, 0, 1), y: 1.1 }, { x: new Date(2005, 0, 1), y: 1.6 },
                    { x: new Date(2006, 0, 1), y: 2 }, { x: new Date(2007, 0, 1), y: 1.7 },
                    { x: new Date(2008, 0, 1), y: 2.3 }, { x: new Date(2009, 0, 1), y: 2.7 },
                    { x: new Date(2010, 0, 1), y: 1.1 }, { x: new Date(2011, 0, 1), y: 2.3 }
                ],
                name: 'Germany', xName: 'x', yName: 'y', type: 'SplineArea',
                border: { color: 'transparent' },
                opacity: 0.5
            }
        ],
        //Initializing Chart title
        title: 'Inflation Rate in Percentage',
        width: ej.base.Browser.isDevice ? '100%' : '60%',
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