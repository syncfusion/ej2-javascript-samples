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
            title: 'Revenue in Millions',
            minimum: 2,
            maximum: 5,
            interval: 1,
            lineStyle: { width: 0},
            majorTickLines: { width: 0},
            labelFormat: '{value}M'
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Area',
                dataSource: [{ x: new Date(2000, 0, 1), y: 4 }, { x: new Date(2001, 0, 1), y: 3.0 },
                    { x: new Date(2002, 0, 1), y: 3.8 }, { x: new Date(2003, 0, 1), y: 3.4 },
                    { x: new Date(2004, 0, 1), y: 3.2 }, { x: new Date(2005, 0, 1), y: 3.9 }],
                xName: 'x', width: 2,
                yName: 'y', name: 'Product A',
                opacity: 0.5, marker: { visible : false }
            },
            {
                type: 'Area',
                dataSource: [{ x: new Date(2000, 0, 1), y: 2.6 }, { x: new Date(2001, 0, 1), y: 2.8 },
                    { x: new Date(2002, 0, 1), y: 2.6 }, { x: new Date(2003, 0, 1), y: 3 },
                    { x: new Date(2004, 0, 1), y: 3.6 }, { x: new Date(2005, 0, 1), y: 3 }],
                xName: 'x', width: 2,
                yName: 'y', name: 'Product B',
                opacity: 0.5, marker: { visible : false }
            }
        ],
        //Initializing Chart Title
        title: 'Average Sales Comparison',
        width: ej.base.Browser.isDevice ? '100%' : '60%',
         // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        },
         // custom code end
    });
    chart.appendTo('#area-container');
};