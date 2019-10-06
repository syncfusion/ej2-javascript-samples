/**
 * Sample for Area Series with empty points
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            interval: 2,
            majorGridLines: { width: 0 },
            edgeLabelPlacement: 'Shift'
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            title: 'Rates',            
            labelFormat: '{value}M',
            lineStyle: { width: 0},
            majorTickLines: { width: 0}
        },
        chartArea: {
            border: {
                width: 0
            }
        },//Initializing Chart Series
        series: [
            {
                type: 'Area',
                dataSource: [{ x: '2002', y: 2 }, { x: '2003', y: 1.7 }, { x: '2004', y: 1.8 }, { x: '2005', y: 2.1 },
                    { x: '2006', y: 2.3 }, { x: '2007', y: 1.7 }, { x: '2008', y: 1.5 }, { x: '2009', y: 1.8 },
                    { x: '2010', y: 2 }, { x: 2011, y: 3.1 }],
                xName: 'x', width: 2,
                yName: 'y', name: 'France',
                opacity: 0.8, marker: { visible : false }
            }, {
                type: 'Area',
                dataSource: [{ x: '2002', y: 2.2 }, { x: '2003', y: 3.4 }, { x: '2004', y: 2.8 }, { x: '2005', y: null },
                    { x: '2006', y: null }, { x: '2007', y: 2.5 }, { x: '2008', y: 2.9 }, { x: '2009', y: 3.8 },
                    { x: '2010', y: 1.4 }, { x: 2011, y: 3.1 }],
                xName: 'x', width: 2,
                yName: 'y', name: 'US',
                opacity: 0.8, marker: { visible : false }
            },
        ],
        //Initializing Chart Title
        title: 'Inflation Rate',
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