/**
 * Sample for Date time category axis
 */
this.default = function () {
    var chart = new ej.charts.Chart({

        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'DateTimeCategory',
            intervalType: 'Days',
            skeleton: 'Ed',
            majorGridLines: { width: 0 },
            stripLines: [
                { visible: true, start: new Date(2017, 11, 20), end: new Date(2017, 11, 27), color: 'skyblue', opacity: 0.5, },
                { visible: true, start: new Date(2018, 0, 2), end: new Date(2018, 0, 8), color: 'pink', opacity: 0.5 },
            ],
            title: 'Business Days',
            labelIntersectAction: ej.base.Browser.isDevice ? 'None' : 'Rotate45',
            labelRotation: ej.base.Browser.isDevice ? -45 : 0
        },
        primaryYAxis: {
            labelFormat: '{value}M',
            rangePadding: 'None',
            minimum: 0,
            maximum: 100,
            interval: 20,
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 },
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        series: [
            {
                type: 'Column',
                dataSource: [
                    { x: new Date(2017, 11, 20), y: 21, text: '21M' }, { x: new Date(2017, 11, 21), y: 24, text: '24M' },
                    { x: new Date(2017, 11, 22), y: 24, text: '24M' }, { x: new Date(2017, 11, 26), y: 70, text: '70M' },
                    { x: new Date(2017, 11, 27), y: 75, text: '74M' }, { x: new Date(2018, 0, 2), y: 82, text: '82M' },
                    { x: new Date(2018, 0, 3), y: 53, text: '53M' }, { x: new Date(2018, 0, 4), y: 54, text: '54M' },
                    { x: new Date(2018, 0, 5), y: 53, text: '53M' }, { x: new Date(2018, 0, 8), y: 45, text: '45M' }
                ],
                xName: 'x', yName: 'y', name: 'Product', marker: { dataLabel: { name: 'text', enableRotation: ej.base.Browser.isDevice ? true : false, angle: ej.base.Browser.isDevice ? -90 : 0, position: 'Top', visible: true } }
            },
        ],
        width: ej.base.Browser.isDevice ? '100%' : '75%',
        legendSettings: { visible: false },
        title: 'Sales Comparison of a Product',
        annotations: [
            {
                x: new Date(2017, 11, 22), y: 90, coordinateUnits: 'Point',
                content: '<div style="color:#0000FF;font-family: bold; font-weight: 600">Christmas Offer<br> Dec 2017</div>',
            },
            {
                x: new Date(2018, 0, 4), y: 90, coordinateUnits: 'Point',
                content: '<div style="color:#0000FF;font-family: bold; font-weight: 800">New Year Offer<br> Jan 2018</div>',
            }
        ],
         // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
            if (selectedTheme === 'highcontrast') {
                args.chart.annotations[0].content = '<div style="color:#ffffff;font-family: bold; font-weight: 600">Christmas Offer<br> Dec 2017</div>';
                args.chart.annotations[1].content = '<div style="color:#ffffff;font-family: bold; font-weight: 600">New Year Offer<br> Jan 2018</div>';
            }
        }
         // custom code end
    });
    chart.appendTo('#container');
};