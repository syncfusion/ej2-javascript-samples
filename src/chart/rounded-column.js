var labelRender = function (args) {
    var selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    if (selectedTheme && selectedTheme.indexOf('fabric') > -1) {
        args.fill = window.fabricColors[args.point.index % 10];
    }
    else if (selectedTheme === 'material') {
        args.fill = window.materialColors[args.point.index % 10];
    }
    else if (selectedTheme === 'highcontrast') {
        args.fill = window.highcontrastColors[args.point.index % 10];
    }
    else {
        args.fill = window.bootstrapColors[args.point.index % 10];
    }
};
/**
 * Sample for Column series with rounded corners
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category', interval: 1, majorGridLines: { width: 0 },
            tickPosition: 'Inside',
            labelPosition: 'Inside', labelStyle: { color: '#ffffff' }
        },
        chartArea: { border: { width: 0 } },
        //Initializing Primary Y Axis
        primaryYAxis: {
            minimum: 0, maximum: 300, interval: 50, majorGridLines: { width: 0 },
            majorTickLines: { width: 0 }, lineStyle: { width: 0 }, labelStyle: { color: 'transparent' }
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Column', xName: 'x', width: 2, yName: 'y',
                dataSource: [
                    { x: 'BGD', y: 106, text: 'Bangaladesh' },
                    { x: 'BTN', y: 103, text: 'Bhutn' },
                    { x: 'NPL', y: 198, text: 'Nepal' },
                    { x: 'THA', y: 189, text: 'Thiland' },
                    { x: 'MYS', y: 250, text: 'Malaysia' }
                ], name: 'Tiger',
                cornerRadius: {
                    bottomLeft: 10, bottomRight: 10, topLeft: 10, topRight: 10
                },
                marker: { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } }
            }
        ],
        legendSettings: { visible: false },
        title: 'Tiger Population - 2016', tooltip: { enable: true },
        pointRender: labelRender,
        width: ej.base.Browser.isDevice ? '100%' : '60%',
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
        },
        tooltipRender: function (args) {
            var tooltip = args.text;
            if (tooltip.indexOf('BGD') > -1) {
                tooltip = tooltip.replace('BGD', 'Bangladesh');
            }
            else if (tooltip.indexOf('BTN') > -1) {
                tooltip = tooltip.replace('BTN', 'Bhutan');
            }
            else if (tooltip.indexOf('NPL') > -1) {
                tooltip = tooltip.replace('NPL', 'Nepal');
            }
            else if (tooltip.indexOf('THA') > -1) {
                tooltip = tooltip.replace('THA', 'Thailand');
            }
            else {
                tooltip = tooltip.replace('MYS', 'Malaysia');
            }
            args.text = tooltip;
        }
    });
    chart.appendTo('#container');
};