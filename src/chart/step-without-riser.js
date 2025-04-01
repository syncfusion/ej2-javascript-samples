

/**
 * Sample for Step Line Series
 */
var chartData = [
    { x: new Date(1980, 0, 1), y: 23 },
    { x: new Date(1981, 0, 1), y: 89 },
    { x: new Date(1982, 0, 1), y: 45 },
    { x: new Date(1983, 0, 1), y: 67 },
    { x: new Date(1984, 0, 1), y: 76 },
    { x: new Date(1985, 0, 1), y: 34 },
    { x: new Date(1986, 0, 1), y: 90 },
    { x: new Date(1987, 0, 1), y: 65 },
    { x: new Date(1988, 0, 1), y: 77 },
    { x: new Date(1989, 0, 1), y: 43 },
    { x: new Date(1990, 0, 1), y: 92 },
    { x: new Date(1991, 0, 1), y: 81 },
    { x: new Date(1992, 0, 1), y: 65 },
    { x: new Date(1993, 0, 1), y: 87 },
    { x: new Date(1994, 0, 1), y: 50 },
    { x: new Date(1995, 0, 1), y: 98 },
    { x: new Date(1996, 0, 1), y: 62 },
    { x: new Date(1997, 0, 1), y: 75 },
    { x: new Date(1998, 0, 1), y: 64 },
    { x: new Date(1999, 0, 1), y: 88 },
    { x: new Date(2000, 0, 1), y: 99 },
    { x: new Date(2001, 0, 1), y: 77 },
    { x: new Date(2002, 0, 1), y: 65 },
    { x: new Date(2003, 0, 1), y: 89 },
    { x: new Date(2004, 0, 1), y: 45 },
    { x: new Date(2005, 0, 1), y: 67 },
    { x: new Date(2006, 0, 1), y: 56 },
    { x: new Date(2007, 0, 1), y: 78 },
    { x: new Date(2008, 0, 1), y: 82 },
    { x: new Date(2009, 0, 1), y: 90 },
    { x: new Date(2010, 0, 1), y: 55 },
    { x: new Date(2011, 0, 1), y: 65 },
    { x: new Date(2012, 0, 1), y: 87 },
    { x: new Date(2013, 0, 1), y: 76 },
    { x: new Date(2014, 0, 1), y: 45 },
    { x: new Date(2015, 0, 1), y: 67 },
    { x: new Date(2016, 0, 1), y: 89 },
    { x: new Date(2017, 0, 1), y: 76 },
    { x: new Date(2018, 0, 1), y: 45 },
    { x: new Date(2019, 0, 1), y: 67 },
    { x: new Date(2020, 0, 1), y: 89 }
];
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'DateTime',
            labelFormat: 'yyyy', // Format to show only year
            intervalType: 'Years',
            edgeLabelPlacement: 'Shift',
            minimum: new Date(1980, 0, 1), // Start from 1970
            maximum: new Date(2020, 0, 1), // End at 2020
            majorGridLines: { width: 0 },
            minorTickLines: { width: 0 },
            interval: 4,
            labelIntersectAction:  ej.base.Browser.isDevice ? 'Rotate90': 'Rotate45'
        },
        primaryYAxis: {
            title: 'Sales in Units',
            labelFormat: '{value}',
            lineStyle: { width: 0 },
            minimum: 0,
            maximum: 100,
            interval: 20,
            majorTickLines: { width: 0 }
        },
        series: [{
            dataSource: chartData,
            xName: 'x',
            yName: 'y',
            type: 'StepArea',
            name: 'Product Sales',
            opacity: 0.1,
            border: { width: 2.5 },
            noRisers: true,
            step: 'Center'
        }],
        legendSettings:{visible : false },
        title: 'Sales of Product Over Time',
        chartArea: { border: { width: 0 } },
        tooltip: {
            enable: true, shared: true
        },

        width: ej.base.Browser.isDevice ? '100%' : '75%',
           // custom code start
        load: function (args) {
            var stepTheme = location.hash.split('/')[1];
            stepTheme = stepTheme ? stepTheme : 'Fluent2';
            args.chart.theme = (stepTheme.charAt(0).toUpperCase() + 
                stepTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
           // custom code end
    });
    chart.appendTo('#container');
};