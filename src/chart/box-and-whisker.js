/**
 * Sample for Box and Whisker Series 
 */
this.default = function () {
    var labelRender = function (args) {
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        var fluent2Colors = ["#6200EE", "#09AF74", "#0076E5", "#CB3587", "#E7910F", "#0364DE", "#66CD15", "#F3A93C", "#107C10", "#C19C00"];
        var fluent2HighContrastColors = ["#9BB449", "#2A72D5", "#43B786", "#3F579A", "#584EC6", "#E85F9C", "#6E7A89", "#EA6266", "#0B6A0B", "#C19C00"];
        var bootstrap5Colors = ['#FD7E14', '#6610F2', '#6F42C1', '#D63384', '#DC3545',
            '#FFC107', '#198754', '#0DCAF0', '#FD7E14', '#6610F2'];
        var pointTailwind3Colors = ['#2F4074', '#03B4B4', '#0D72DE', '#FF5733', '#D63384', '#F39C12', '#EF291F', '#91C822', '#2F4074', '#03B4B4'];
        var pointTailwind3DarkColors = ['#8029F1', '#1ABC9C', '#0D72DE', '#FF5733', '#D63384', '#F39C12', '#EF291F', '#91C822', '#8029F1', '#1ABC9C'];
        if (selectedTheme && selectedTheme.indexOf('fabric') > -1) {
            args.fill = window.fabricColors[args.point.index % 10];
        }
        else if (selectedTheme === 'material') {
            args.fill = window.materialColors[args.point.index % 10];
        }
        else if (selectedTheme === 'fluent') {
            args.fill = window.fluentColors[args.point.index % 10];
        }
        else if (selectedTheme === 'fluent-dark') {
            args.fill = window.fluentDarkColors[args.point.index % 10];
        }
        else if (selectedTheme === 'fluent2') {
            args.fill = fluent2Colors[args.point.index % 10];
        } 
        else if (selectedTheme === 'fluent2-highcontrast' || selectedTheme === 'fluent2-dark') {
            args.fill = fluent2HighContrastColors[args.point.index % 10];
        }
        else if (selectedTheme === 'bootstrap5' || selectedTheme === 'bootstrap5-dark') {
            args.fill = bootstrap5Colors[args.point.index % 10];
        } else if (selectedTheme === 'tailwind3-dark') {
            args.fill = pointTailwind3DarkColors[args.point.index % 10];
        } else if (selectedTheme === 'tailwind3') {
            args.fill = pointTailwind3Colors[args.point.index % 10];
        } else {
            args.fill = window.bootstrapColors[args.point.index % 10];
        }
        args.border.color = ej.charts.getSaturationColor(args.fill, -0.6);
    };
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            labelIntersectAction: ej.base.Browser.isDevice ? 'None' : 'Rotate45',
            labelRotation: ej.base.Browser.isDevice ? -45 : 0,
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            title: 'Age',
            minimum: 10,
            maximum: 60,
            interval: 10,
            majorGridLines: { width: 1 },
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 }
        },
        pointRender: labelRender,
        //Initializing Chart Series
        series: [
            {
                type: 'BoxAndWhisker',
                dataSource: [
                    { x: 'Development', y: [22, 22, 23, 25, 25, 25, 26, 27, 27, 28, 28, 29, 30, 32, 34, 32, 34, 36, 35, 38] },
                    { x: 'Testing', y: [22, 33, 23, 25, 26, 28, 29, 30, 34, 33, 32, 31, 50] },
                    { x: 'Finance', y: [26, 27, 28, 30, 32, 34, 35, 37, 35, 37, 45] },
                    { x: 'R&D', y: [26, 27, 29, 32, 34, 35, 36, 37, 38, 39, 41, 43, 58] },
                    { x: 'Sales', y: [27, 26, 28, 29, 29, 29, 32, 35, 32, 38, 53] },
                    { x: 'Inventory', y: [21, 23, 24, 25, 26, 27, 28, 30, 34, 36, 38] },
                    { x: 'Graphics', y: [26, 28, 29, 30, 32, 33, 35, 36, 52] },
                    { x: 'Training', y: [28, 29, 30, 31, 32, 34, 35, 36] },
                    { x: 'HR', y: [22, 24, 25, 30, 32, 34, 36, 38, 39, 41, 35, 36, 40, 56] }
                ],
                xName: 'x',
                yName: 'y',
                marker: {
                    visible: true,
                    width: 7,
                    height: 7
                }, boxPlotMode: "Normal", showMean: true,
            }
        ],
        tooltip: {
            enable: true
        },
        legendSettings: {
            visible: false
        },
        //Initializing Chart Title
        title: 'Employee Age Group in Various Department',
        width: ej.base.Browser.isDevice ? '100%' : '70%',
         // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        },
         // custom code end
    });
    chart.appendTo('#container');
};