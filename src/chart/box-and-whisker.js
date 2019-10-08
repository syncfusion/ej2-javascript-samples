/**
 * Sample for Box and Whisker Series 
 */
this.default = function () {
    var labelRender = function (args) {
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        if (selectedTheme && selectedTheme.indexOf('fabric') > -1) {
            args.fill = window.fabricColors[args.point.index % 10];
        }
        else if (selectedTheme === 'material') {
            args.fill = window.materialColors[args.point.index % 10];
        }
        else {
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
            edgeLabelPlacement: 'Shift'
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
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 }
        },
        pointRender: labelRender,
        //Initializing Chart Series
        series: [
            {
                type: 'BoxAndWhisker',
                dataSource: [
                    { x: 'Development', y: [22, 22, 23, 25, 25, 25, 26, 27, 27, 28, 28, 29, 30, 32, 34, 32, 34, 36, 35, 38] },
                    { x: 'Testing', y: [22, 33, 23, 25, 26, 28, 29, 30, 34, 33, 32, 31, 50] },
                    { x: 'HR', y: [22, 24, 25, 30, 32, 34, 36, 38, 39, 41, 35, 36, 40, 56] },
                    { x: 'Finance', y: [26, 27, 28, 30, 32, 34, 35, 37, 35, 37, 45] },
                    { x: 'R&D', y: [26, 27, 29, 32, 34, 35, 36, 37, 38, 39, 41, 43, 58] },
                    { x: 'Sales', y: [27, 26, 28, 29, 29, 29, 32, 35, 32, 38, 53] },
                    { x: 'Inventory', y: [21, 23, 24, 25, 26, 27, 28, 30, 34, 36, 38] },
                    { x: 'Graphics', y: [26, 28, 29, 30, 32, 33, 35, 36, 52] },
                    { x: 'Training', y: [28, 29, 30, 31, 32, 34, 35, 36] }
                ],
                xName: 'x',
                yName: 'y',
                marker: {
                    visible: true,
                    width: 10,
                    height: 10
                },
                name: 'Department'
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
         // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        },
         // custom code end
    });
    chart.appendTo('#box-container');
    var mode = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select Range Bar Color',
        width: 120,
        change: function () {
            chart.series[0].boxPlotMode = mode.value;
            chart.series[0].animation.enable = false;
            chart.refresh();
        }
    });
    mode.appendTo('#mode');
    document.getElementById('mean').onchange = function () {
        var element = ej.charts.getElement('mean');
        chart.series[0].showMean = element.checked;
        chart.series[0].animation.enable = false;
        chart.refresh();
    };
};