/**
 * Sample for Smart Axis Labels
 */
var labelRender = function (args) {
    var selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
    var fluent2Colors = ["#6200EE", "#09AF74", "#0076E5", "#CB3587", "#E7910F", "#0364DE", "#66CD15", "#F3A93C", "#107C10",
        "#C19C00"];
    var fluent2HighContrastColors = ["#9BB449", "#2A72D5", "#43B786", "#3F579A", "#584EC6", "#E85F9C", "#6E7A89", "#EA6266",
        "#0B6A0B", "#C19C00"];
    var pointTailwindColors = ["#5A61F6", "#65A30D", "#334155", "#14B8A6", "#8B5CF6", "#0369A1", "#F97316", "#9333EA", "#F59E0B", "#15803D"];
    var pointTailwindDarkColors = ["#8B5CF6", "#22D3EE", "#F87171", "#4ADE80", "#E879F9", "#FCD34D", "#F97316", "#2DD4BF", "#F472B6", "#10B981"];
    var pointTailwind3Colors = ['#2F4074', '#03B4B4', '#0D72DE', '#FF5733', '#D63384', '#F39C12', '#EF291F', '#91C822', '#2F4074', '#03B4B4'];
    var pointTailwind3DarkColors = ['#8029F1', '#1ABC9C', '#0D72DE', '#FF5733', '#D63384', '#F39C12', '#EF291F', '#91C822', '#8029F1', '#1ABC9C'];
    if (selectedTheme && selectedTheme.indexOf('fabric') > -1) {
        args.fill = window.fabricColors[args.point.index % 10];
    }
    else if (selectedTheme === 'material') {
        args.fill = window.materialColors[args.point.index % 10];
    }
    else if (selectedTheme === 'highcontrast') {
        args.fill = window.highcontrastColors[args.point.index % 10];
    }
    else if (selectedTheme === 'fluent' || selectedTheme === 'fluent-dark') {
        args.fill = window.fluentColors[args.point.index % 10];
    }
    else if (selectedTheme === 'fluent2') {
        args.fill = fluent2Colors[args.point.index % 10];
    } 
    else if (selectedTheme === 'fluent2-highcontrast' || selectedTheme === 'fluent2-dark') {
        args.fill = fluent2HighContrastColors[args.point.index % 10];
    } else if (selectedTheme === 'tailwind') {
        args.fill = pointTailwindColors[args.point.index % 10];
    } else if (selectedTheme === 'tailwind-dark') {
        args.fill = pointTailwindDarkColors[args.point.index % 10];
    } else if (selectedTheme === 'tailwind3') {
        args.fill = pointTailwind3Colors[args.point.index % 10];
    } else if (selectedTheme === 'tailwind3-dark') {
        args.fill = pointTailwind3DarkColors[args.point.index % 10];
    }
    else {
        args.fill = window.bootstrapColors[args.point.index % 10];
    }
};

this.default = function () {
    var chart = new ej.charts.Chart({

        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category', labelRotation: 90, labelIntersectAction : ej.base.Browser.isDevice ? 'Rotate90' : 'Trim',
            border: { width: 1, type: 'Rectangle' },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 },
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
        width: ej.base.Browser.isDevice ? '100%' : '75%',
         // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + 
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
         // custom code end
    });
    chart.appendTo('#container');
};