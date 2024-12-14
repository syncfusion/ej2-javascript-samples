/**
 * Sample for Update Data Source.
 */
var updatedData = [
    { x: 'Jewellery', y: 75 },
    { x: 'Shoes', y: 45 },
    { x: 'Footwear', y: 73 },
    { x: 'Pet Services', y: 53 },
    { x: 'Business Clothing', y: 85},
    { x: 'Office Supplies', y: 68 },
    { x: 'Food', y: 45 }
];
var labelRender = function(args) {
    var selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
    var materialColors = ['#00bdae', '#404041', '#357cd2', '#e56590', '#f8b883', '#70ad47', '#dd8abd', '#7f84e8', '#7bb4eb',
        '#ea7a57', '#404041', '#00bdae'];
    var fabricColors = ['#4472c4', '#ed7d31', '#ffc000', '#70ad47', '#5b9bd5',
        '#c1c1c1', '#6f6fe2', '#e269ae', '#9e480e', '#997300', '#4472c4', '#70ad47', '#ffc000', '#ed7d31'];
    var bootstrapColors = ['#a16ee5', '#f7ce69', '#55a5c2', '#7ddf1e', '#ff6ea6',
        '#7953ac', '#b99b4f', '#407c92', '#5ea716', '#b91c52'];
    var highcontrastColors = ['#79ECE4', '#E98272', '#DFE6B6', '#C6E773', '#BA98FF',
        '#FA83C3', '#00C27A', '#43ACEF', '#D681EF', '#D8BC6E'];
    var fluentColors = ["#1AC9E6", "#DA4CB2", "#EDBB40", "#AF4BCF", "#FF7266", "#1BD565", "#EE993D", "#5887FF", "#EC548D",
    "#7D39C0"];
    var fluent2Colors = ["#6200EE", "#09AF74", "#0076E5", "#CB3587", "#E7910F", "#0364DE", "#66CD15", "#F3A93C", "#107C10",
        "#C19C00"];
    var fluent2HighContrastColors = ["#9BB449", "#2A72D5", "#43B786", "#3F579A", "#584EC6", "#E85F9C", "#6E7A89", "#EA6266",
        "#0B6A0B", "#C19C00"];
    var pointTailwind3Colors = ['#2F4074', '#03B4B4', '#0D72DE', '#FF5733', '#D63384', '#F39C12', '#EF291F', '#91C822', '#2F4074', '#03B4B4'];
    var pointTailwind3DarkColors = ['#8029F1', '#1ABC9C', '#0D72DE', '#FF5733', '#D63384', '#F39C12', '#EF291F', '#91C822', '#8029F1', '#1ABC9C'];
    if (selectedTheme && selectedTheme.indexOf('fabric') > -1) {
        args.fill = fabricColors[args.point.index % 10];
    } else if (selectedTheme === 'material') {
        args.fill = materialColors[args.point.index % 10];
    } else if (selectedTheme === 'highcontrast') {
        args.fill = highcontrastColors[args.point.index % 10];
    } else if (selectedTheme === 'fluent2') {
        args.fill = fluent2Colors[args.point.index % 10];
    } else if (selectedTheme === 'fluent2-highcontrast' || selectedTheme === 'fluent2-dark') {
        args.fill = fluent2HighContrastColors[args.point.index % 10];
    } else if (selectedTheme === 'tailwind3') {
        args.fill = pointTailwind3Colors[args.point.index % 10];
    } else if (selectedTheme === 'tailwind3-dark') {
        args.fill = pointTailwind3DarkColors[args.point.index % 10];
    } else {
        args.fill = bootstrapColors[args.point.index % 10];
    }
};
var intervalId;
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X and Y Axis
        primaryXAxis: {
            valueType: 'Category', majorGridLines: { width: 0 }, labelStyle: { size: ej.base.Browser.isDevice ? '11px' : '12px' }, labelIntersectAction: 'Rotate90'
        },
        chartArea: { border: { width: 0 } },
        primaryYAxis:
        {
            title: 'Sales (in percentage)', labelFormat: '{value}%', lineStyle: { width: 0 }, majorTickLines: { width: 0 }, interval: 5, minimum: 0, maximum: 100
        },
        //Initializing Chart Series
        series: [
            {
                dataSource: updatedData, xName: 'x', yName: 'y', type: 'Column', marker: {visible: false, dataLabel: {visible: true, position: 'Top', format: '{value}%', font: { color: '#ffffff' }}},
                cornerRadius: { topLeft: ej.base.Browser.isDevice ? 10 : 15, topRight: ej.base.Browser.isDevice ? 10 : 15 }, columnWidth: 0.5
            }
        ],
        width: ej.base.Browser.isDevice ? '100%' : '75%',
        title: 'Sales by product',
        pointRender: labelRender,
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
            args.chart.updateClearInterval();

            intervalId = setInterval(function() {
                var container = document.getElementById('UpdateData');
                if (container && container.id === args.chart.element.id) {
                    var newData = updatedData.map(function(item) {
                        var value = getRandomInt(10, 90);
                        return { x: item.x, y: value };
                    });
                    if (chart.series.length > 0) {
                        chart.series[0].setData(newData, 500);
                    }
                }
                else {
                    args.chart.updateClearInterval();
                }
            }, 1500);
        },
        updateClearInterval: function() {
            if (intervalId) {
                clearInterval(intervalId);
                intervalId = null;
            }
        },
        axisRangeCalculated: function (args) {
            if (args.axis.name === 'primaryYAxis') {
                args.maximum = args.maximum > 100 ? 100 : args.maximum;
                if (args.maximum > 80) {
                    args.interval = 20;
                } 
                else if (args.maximum > 40) {
                    args.interval = 10;
                }
            }
        }
    });
    chart.appendTo('#UpdateData');
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};

