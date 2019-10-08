/**
 * Sample for StackingArea Series
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'DateTime',
            intervalType: 'Years',
            majorGridLines: { width: 0 },
            labelFormat: 'y',
            edgeLabelPlacement: 'Shift'
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            title: 'Spends',
            minimum: 0,
            maximum: 7,
            interval: 1,
            lineStyle: { width: 0},
            majorTickLines: { width: 0},
            labelFormat: '{value}B'
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Chart Series
        series: [
            {
                type: 'StackingArea',
                dataSource: [
                    { x: new Date(2000, 0, 1), y: 0.61 },
                    { x: new Date(2001, 0, 1), y: 0.81 }, { x: new Date(2002, 0, 1), y: 0.91 },
                    { x: new Date(2003, 0, 1), y: 1 }, { x: new Date(2004, 0, 1), y: 1.19 },
                    { x: new Date(2005, 0, 1), y: 1.47 }, { x: new Date(2006, 0, 1), y: 1.74 },
                    { x: new Date(2007, 0, 1), y: 1.98 }, { x: new Date(2008, 0, 1), y: 1.99 },
                    { x: new Date(2009, 0, 1), y: 1.70 }, { x: new Date(2010, 0, 1), y: 1.48 },
                    { x: new Date(2011, 0, 1), y: 1.38 }, { x: new Date(2012, 0, 1), y: 1.66 },
                    { x: new Date(2013, 0, 1), y: 1.66 }, { x: new Date(2014, 0, 1), y: 1.67 }
                ],
                xName: 'x', marker: { visible : false },
                yName: 'y', name: 'Organic',
            }, {
                type: 'StackingArea',
                dataSource: [
                    { x: new Date(2000, 0, 1), y: 0.03 },
                    { x: new Date(2001, 0, 1), y: 0.05 }, { x: new Date(2002, 0, 1), y: 0.06 },
                    { x: new Date(2003, 0, 1), y: 0.09 }, { x: new Date(2004, 0, 1), y: 0.14 },
                    { x: new Date(2005, 0, 1), y: 0.20 }, { x: new Date(2006, 0, 1), y: 0.29 },
                    { x: new Date(2007, 0, 1), y: 0.46 }, { x: new Date(2008, 0, 1), y: 0.64 },
                    { x: new Date(2009, 0, 1), y: 0.75 }, { x: new Date(2010, 0, 1), y: 1.06 },
                    { x: new Date(2011, 0, 1), y: 1.25 }, { x: new Date(2012, 0, 1), y: 1.55 },
                    { x: new Date(2013, 0, 1), y: 1.55 }, { x: new Date(2014, 0, 1), y: 1.65 }
                ],
                xName: 'x', marker: { visible : false },
                yName: 'y', name: 'Fair-trade',
            }, {
                type: 'StackingArea',
                dataSource: [
                    { x: new Date(2000, 0, 1), y: 0.48 },
                    { x: new Date(2001, 0, 1), y: 0.53 }, { x: new Date(2002, 0, 1), y: 0.57 },
                    { x: new Date(2003, 0, 1), y: 0.61 }, { x: new Date(2004, 0, 1), y: 0.63 },
                    { x: new Date(2005, 0, 1), y: 0.64 }, { x: new Date(2006, 0, 1), y: 0.66 },
                    { x: new Date(2007, 0, 1), y: 0.76 }, { x: new Date(2008, 0, 1), y: 0.77 },
                    { x: new Date(2009, 0, 1), y: 0.55 }, { x: new Date(2010, 0, 1), y: 0.54 },
                    { x: new Date(2011, 0, 1), y: 0.57 }, { x: new Date(2012, 0, 1), y: 0.61 },
                    { x: new Date(2013, 0, 1), y: 0.67 }, { x: new Date(2014, 0, 1), y: 0.67 }
                ],
                xName: 'x', marker: { visible : false },
                yName: 'y', name: 'Veg Alternatives',
            }, {
                type: 'StackingArea',
                dataSource: [
                    { x: new Date(2000, 0, 1), y: 0.23 },
                    { x: new Date(2001, 0, 1), y: 0.17 }, { x: new Date(2002, 0, 1), y: 0.17 },
                    { x: new Date(2003, 0, 1), y: 0.20 }, { x: new Date(2004, 0, 1), y: 0.23 },
                    { x: new Date(2005, 0, 1), y: 0.36 }, { x: new Date(2006, 0, 1), y: 0.43 },
                    { x: new Date(2007, 0, 1), y: 0.52 }, { x: new Date(2008, 0, 1), y: 0.72 },
                    { x: new Date(2009, 0, 1), y: 1.29 }, { x: new Date(2010, 0, 1), y: 1.38 },
                    { x: new Date(2011, 0, 1), y: 1.82 }, { x: new Date(2012, 0, 1), y: 2.16 },
                    { x: new Date(2013, 0, 1), y: 2.51 }, { x: new Date(2014, 0, 1), y: 2.61 }
                ],
                xName: 'x', marker: { visible : false },
                yName: 'y', name: 'Others',
            }
        ],
        //Initializing Chart Title
        title: 'Trend in Sales of Ethical Produce',
        width: ej.base.Browser.isDevice ? '100%' : '60%',
           // custom code start
        load: function (args) {
            var stackedTheme = location.hash.split('/')[1];
            stackedTheme = stackedTheme ? stackedTheme : 'Material';
            args.chart.theme = (stackedTheme.charAt(0).toUpperCase() + 
                stackedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        }
           // custom code end
    });
    chart.appendTo('#stacked-container');
};