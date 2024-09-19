/**
 * Sample for Waterfall series
 */
this.default = function () {
    var chartData = [
        { x: 'JAN', y: 55 },
        { x: 'MAR', y: 42 },
        { x: 'JUNE', y: -12 },
        { x: 'AUG', y: 40 },
        { x: 'OCT', y: -26 },
        { x: 'DEC', y: 45 },
        { x: '2023' }
    ];
    var chart = new ej.charts.Chart({
        primaryXAxis: {
            valueType: 'Category',
            edgeLabelPlacement: 'Shift',
            majorGridLines: { width: 1 },
            majorTickLines: { width: 0 },
            isInversed: true
        },
        primaryYAxis: {
            minimum: 0, maximum: 150, interval: 25,
            labelFormat: '{value}K',
            edgeLabelPlacement: 'Shift',
            majorGridLines: { width: 1 },
            majorTickLines: { width: 1 }
        }, isTransposed: true,
        series: [{
            border: { width: 0.2, color: 'Black' }, columnWidth: 0.5, negativeFillColor: '#e56590',
            dataSource: chartData, width: 2,
            xName: 'x', yName: 'y',
            name: 'Increases',
            // Series type as StepLine
            sumIndexes: [6],
            type: 'Waterfall', animation: { enable: true }, connector: { width: 0.8, dashArray: '1,2', color: '#5F6A6A' }, cornerRadius: { topLeft: 3, bottomLeft: 3, bottomRight: 3, topRight: 3 },
            marker: {
                dataLabel: { visible: true, position: 'Middle' }
            }

        }],
        width: ej.base.Browser.isDevice ? '100%' : '70%',
        tooltip: {
            enable: true, header: '', format: "<b>${point.x}</b> <br> Product Revenue : <b>${point.y}</b>"
        },
        title: 'Revenue Variation',
        legendSettings: { mode: 'Point', toggleVisibility: false },
        legendRender: function (args) {
            if (args.text === 'JAN') {
                args.text = 'Increase';
            }
            else if (args.text === 'OCT') {
                args.text = 'Decrease';
                args.fill = '#e56590';
            }
            else if (args.text === '2023') {
                args.text = 'Total';
                args.fill = '#4E81BC';
            }
            else {
                args.cancel = true;
            }
        },
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = selectedTheme && (selectedTheme.charAt(0).toUpperCase() + 
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
           // custom code end
    });
    chart.appendTo('#horizontal-waterfall');
};