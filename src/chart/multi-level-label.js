/**
 * Sample for Smart Axis Labels
 */
var labelRender = function (args) {
    var selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    if (selectedTheme && selectedTheme.indexOf('fabric') > -1) {
        args.fill = window.fabricColors[args.point.index % 10];
    }
    else if (selectedTheme === 'material') {
        args.fill = window.materialColors[args.point.index % 10];
    }
    else if(selectedTheme === 'highcontrast') {
        args.fill = window.highcontrastColors[args.point.index % 10];
    }
    else {
        args.fill = window.bootstrapColors[args.point.index % 10];
    }
};

this.default = function () {
    var chart = new ej.charts.Chart({

        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category', labelRotation: 90,
            border: { width: 1, type: 'Rectangle' },
            isIndexed: true, interval: 1, majorGridLines: { width: 0 },
            multiLevelLabels : (ej.base.Browser.isDevice ? ([
                {
                    border: { type: 'Rectangle' },
                    categories: [
                        { start: -0.5, end: 2.5, text: 'In Season', },
                        { start: 2.5, end: 5.5, text: 'Out of Season', },
                        { start: 5.5, end: 7.5, text: 'In Season', },
                        { start: 7.5, end: 9.5, text: 'Out of Season', },
                    ]
                }, {
                    border: { type: 'Rectangle' },
                    textStyle: { fontWeight: 'Bold' },
                    categories: [
                        { start: -0.5, end: 5.5, text: 'Fruits', },
                        { start: 5.5, end: 9.5, text: 'Vegetables', },
                    ]
                }]) : [
                    {
                        border: { type: 'Rectangle' },
                        categories: [
                            { start: -0.5, end: 0.5, text: 'Seedless', },
                            { start: 0.5, end: 2.5, text: 'Seeded', },
                            { start: 2.5, end: 3.5, text: 'Seedless', },
                            { start: 3.5, end: 5.5, text: 'Seeded', },
                            { start: 5.5, end: 6.5, text: 'Seedless', },
                            { start: 6.5, end: 7.5, text: 'Seeded', },
                            { start: 7.5, end: 8.5, text: 'Seedless', },
                            { start: 8.5, end: 9.5, text: 'Seeded', }
                        ]
                    }, {
                        border: { type: 'Rectangle' },
                        categories: [
                            { start: -0.5, end: 2.5, text: 'In Season', },
                            { start: 2.5, end: 5.5, text: 'Out of Season', },
                            { start: 5.5, end: 7.5, text: 'In Season', },
                            { start: 7.5, end: 9.5, text: 'Out of Season', },
                        ]
                    }, {
                        border: { type: 'Rectangle' },
                        textStyle: { fontWeight: 'Bold' },
                        categories: [
                            { start: -0.5, end: 5.5, text: 'Fruits', },
                            { start: 5.5, end: 9.5, text: 'Vegetables', },
                        ]
                    }])
        },
        chartArea: {
            border: { width: 0 }
        },
        //Initializing Primary Y Axis
        primaryYAxis:
            {
                minimum: 0, maximum: 120, interval: 30,
                majorTickLines: { width: 0 }, lineStyle: { width: 0 }, labelStyle: { color: 'transparent' }
            },

        //Initializing Chart Series
        series: [
            {
                type: 'Column', xName: 'x', yName: 'y',
                dataSource: [
                    { x: 'Grapes', y: 28 }, { x: 'Apples', y: 87 },
                    { x: 'Pears', y: 42 }, { x: 'Grapes', y: 13 },
                    { x: 'Apples', y: 13 }, { x: 'Pears', y: 10 },
                    { x: 'Tomato', y: 31 }, { x: 'Potato', y: 96 },
                    { x: 'Cucumber', y: 41 }, { x: 'Onion', y: 59 }],
                marker: {
                    dataLabel: {
                        visible: true, position: 'Outer'
                    }
                }
            },
        ],
        //Initializing Chart title
        title: 'Fruits and Vegetables - Season',
        pointRender: labelRender,
        legendSettings: { visible: false },
        width: ej.base.Browser.isDevice ? '100%' : '80%',
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