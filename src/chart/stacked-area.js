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
            edgeLabelPlacement: 'Shift',
            lineStyle: { width: 0},
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            title: 'Amount of sales in €',
            minimum: 0, maximum: 7, interval: 1,
            labelFormat: '{value}k',
            lineStyle: { width: 0},
            majorTickLines: { width: 0}
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
                xName: 'x', border: { width: 2 , color:'#666666' }, opacity: 1,
                yName: 'y', name: 'Bank-Transfer'
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
                xName: 'x', border: { width: 2 , color:'#666666' }, opacity: 1,
                yName: 'y', name: 'Credit Card'
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
                xName: 'x', border: { width: 2 , color:'#666666' }, opacity: 1,
                yName: 'y', name: 'Debit Card'
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
                xName: 'x', border: { width: 2 , color:'#666666' }, opacity: 1,
                yName: 'y', name: 'Cash'
            }
        ],
        //Initializing Chart Title
        title: 'Amount of Sales by Payment Mode',tooltip:{enable:true},
        width: ej.base.Browser.isDevice ? '100%' : '75%',
        legendSettings: {enableHighlight:true},
           // custom code start
        load: function (args) {
            var stackedTheme = location.hash.split('/')[1];
            stackedTheme = stackedTheme ? stackedTheme : 'Fluent2';
            args.chart.theme = (stackedTheme.charAt(0).toUpperCase() + 
                stackedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
           // custom code end
    });
    chart.appendTo('#stacked-container');
};