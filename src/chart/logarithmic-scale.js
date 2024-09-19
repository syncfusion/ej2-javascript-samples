/**
 * Sample for Logarithmic Axis
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            labelFormat: 'y',
            valueType: 'DateTime',
            edgeLabelPlacement: 'Shift'
        },
        //Initializing Primary X Axis
        primaryYAxis: {
            valueType: 'Logarithmic',
            edgeLabelPlacement: 'Shift',
            minorTicksPerInterval: 5,
            majorGridLines: { width: 1.5 },
            minorTickLines: { width: 0, height: 4 },
            minimum: 0,
            maximum: 100000,
            interval: 1,
            labelFormat: '${value}'
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Line',
                dataSource: [
                    { x: new Date(1995, 0, 1), y: 80 },
                    { x: new Date(1996, 0, 1), y: 200 },
                    { x: new Date(1997, 0, 1), y: 400 },
                    { x: new Date(1998, 0, 1), y: 600 },
                    { x: new Date(1999, 0, 1), y: 700 },
                    { x: new Date(2000, 0, 1), y: 1400 },
                    { x: new Date(2001, 0, 1), y: 2000 },
                    { x: new Date(2002, 0, 1), y: 4000 },
                    { x: new Date(2003, 0, 1), y: 6000 },
                    { x: new Date(2004, 0, 1), y: 8000 },
                    { x: new Date(2005, 0, 1), y: 11000 }
                ],
                xName: 'x', width: 2,
                yName: 'y', name: 'Product X',
                marker: {
                    visible: true, height: 7, width: 7, isFilled: true
                }
            }
        ],
        //Initializing Chart Title
        title: 'Product X Growth [1995-2005]', legendSettings: { visible: false },
        //Initializing Tooltip
        tooltip: { enable: true,  shared: true, header: '', format: '${point.x} : <b>${point.y}</b>' },
        width: ej.base.Browser.isDevice ? '100%' : '75%',
         // custom code start
        load: function (args) {
            var logTheme = location.hash.split('/')[1];
            logTheme = logTheme ? logTheme : 'Fluent2';
            args.chart.theme = (logTheme.charAt(0).toUpperCase() + 
                logTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
         // custom code end
    });
    chart.appendTo('#log-container');
};