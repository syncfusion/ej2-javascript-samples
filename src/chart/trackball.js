var john = [{ x: new Date(2000, 2, 11), y: 15 }, { x: new Date(2000, 9, 14), y: 20 },
{ x: new Date(2001, 2, 11), y: 25 }, { x: new Date(2001, 9, 16), y: 21 },
{ x: new Date(2002, 2, 7), y: 13 }, { x: new Date(2002, 9, 7), y: 18 },
{ x: new Date(2003, 2, 11), y: 24 }, { x: new Date(2003, 9, 14), y: 23 },
{ x: new Date(2004, 2, 6), y: 19 }, { x: new Date(2004, 9, 6), y: 31 },
{ x: new Date(2005, 2, 11), y: 39 }, { x: new Date(2005, 9, 11), y: 50 },
{ x: new Date(2006, 2, 11), y: 24 }];
var andrew = [{ x: new Date(2000, 2, 11), y: 39 }, { x: new Date(2000, 9, 14), y: 30 },
{ x: new Date(2001, 2, 11), y: 28 }, { x: new Date(2001, 9, 16), y: 35 },
{ x: new Date(2002, 2, 7), y: 39 }, { x: new Date(2002, 9, 7), y: 41 },
{ x: new Date(2003, 2, 11), y: 45 }, { x: new Date(2003, 9, 14), y: 48 },
{ x: new Date(2004, 2, 6), y: 54 }, { x: new Date(2004, 9, 6), y: 55 },
{ x: new Date(2005, 2, 11), y: 57 }, { x: new Date(2005, 9, 11), y: 60 },
{ x: new Date(2006, 2, 11), y: 60 }];
var thomas = [{ x: new Date(2000, 2, 11), y: 60 }, { x: new Date(2000, 9, 14), y: 55 },
{ x: new Date(2001, 2, 11), y: 48 }, { x: new Date(2001, 9, 16), y: 57 },
{ x: new Date(2002, 2, 7), y: 62 }, { x: new Date(2002, 9, 7), y: 64 },
{ x: new Date(2003, 2, 11), y: 57 }, { x: new Date(2003, 9, 14), y: 53 },
{ x: new Date(2004, 2, 6), y: 63 }, { x: new Date(2004, 9, 6), y: 50 },
{ x: new Date(2005, 2, 11), y: 66 }, { x: new Date(2005, 9, 11), y: 65 },
{ x: new Date(2006, 2, 11), y: 79 }];
/**
 * Sample for Trackball
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'DateTime',
            labelFormat: 'yyyy',
            majorGridLines: { width: 0 },
            edgeLabelPlacement: 'Shift',
            minimum: new Date(2000, 1, 1), maximum: new Date(2006, 2, 11),
            skeleton: 'y'
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            title: 'Revenue (in Million)',
            rangePadding: 'None',
            edgeLabelPlacement: 'Shift',
            labelFormat: '{value}M',
            majorTickLines: { width: 0 },
            minimum: 10, maximum: 80,
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
                dataSource: john,
                name: 'John',
                xName: 'x', width: 2,
                yName: 'y',
                marker: { visible: true, height : 7, width: 7, isFilled: true}
            },
            {
                type: 'Line',
                dataSource: andrew,
                name: 'Andrew',
                xName: 'x', width: 2,
                yName: 'y',
                marker: { visible: true, height : 7, width: 7, isFilled: true }
            },
            {
                type: 'Line',
                dataSource: thomas,
                name: 'Thomas',
                xName: 'x', width: 2,
                yName: 'y',
                marker: { visible: true, height : 7, width: 7, isFilled: true }
            }
        ],
        //Initializing Tooltip and Crosshair
        tooltip: { enable: true, shared: true },
        legendSettings: { enableHighlight: true },
        crosshair: { enable: true, lineType: 'Vertical' },
        //Initializing Chart Title
        title: 'Average Sales per Person',
        width: ej.base.Browser ? '100' : '75%',
           // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
            args.chart.width = ej.base.Browser.isDevice ? '100%' : '75%';
        }
           // custom code end
    });
    chart.appendTo('#container');
};