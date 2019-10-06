var pointRender = function (args) {
    var inverseTheme = location.hash.split('/')[1];
    inverseTheme = inverseTheme ? inverseTheme : 'Material';
    if (inverseTheme && inverseTheme.indexOf('fabric') > -1) {
        args.fill = window.fabricColors[args.point.index % 10];
    } else if (inverseTheme === 'material') {
        args.fill = window.materialColors[args.point.index % 10];
    } else if (inverseTheme === 'highcontrast') {
        args.fill = window.highcontrastColors[args.point.index % 10];
    } else {
        args.fill = window.bootstrapColors[args.point.index % 10];
    }
};

/**
 * Sample for Inversed Axis
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            opposedPosition: true,
            isInversed: true,
            majorGridLines: { width: 0 }
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            edgeLabelPlacement: 'Shift',
            labelIntersectAction: 'Rotate45',
            isInversed: true,
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
        pointRender: pointRender,
        //Initializing Chart Series
        series: [
            {
                type: 'Column',
                dataSource: [
                    { x: '2008', y: 15.1 }, { x: '2009', y: 16 }, { x: '2010', y: 21.4 },
                    { x: '2011', y: 18 }, { x: '2012', y: 16.2 }, { x: '2013', y: 11 },
                    { x: '2014', y: 7.6 }, { x: '2015', y: 1.5 }
                ],
                marker: { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color:'#ffffff' } } },
                xName: 'x',
                yName: 'y',
                name: 'Rate'
            },
        ],
        //Initializing Tooltip
        tooltip: {
            enable: true
        },
        legendSettings: { visible: false },
        //Initializing Chart Titel
        title: 'Exchange Rate (INR per USD)',
        width: ej.base.Browser.isDevice ? '100%' : '60%',
         // custom code start
        load: function (args) {
            var inversedTheme = location.hash.split('/')[1];
            inversedTheme = inversedTheme ? inversedTheme : 'Material';
            args.chart.theme = (inversedTheme.charAt(0).toUpperCase() +
                inversedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        }
         // custom code end
    });
    chart.appendTo('#inverse-container');
};