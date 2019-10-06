/**
 * Sample for Waterfall series
 */
this.default = function () {
    var chartData = [
        { x: 'Income', y: 4711 }, { x: 'Sales', y: -1015 },
        { x: 'Development', y: -688 },
        { x: 'Revenue', y: 1030 }, { x: 'Balance' },
        { x: 'Expense', y: -361 }, { x: 'Tax', y: -695 },
        { x: 'Net Profit' }
    ];
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            majorGridLines: { width: 0 },
            plotOffset: 20
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            minimum: 0, maximum: 5000, interval: 1000,
            majorGridLines: { width: 0 },
            title: 'Expenditure'
        },
        //Initializing Chart Series
        series: [{
                dataSource: chartData, width: 2, negativeFillColor: '#e56590',
                xName: 'x', yName: 'y', intermediateSumIndexes: [4], sumIndexes: [7],
                columnWidth: 0.9,
                type: 'Waterfall', animation: { enable: true },
                marker: {
                    dataLabel: { visible: true, font: { color: '#ffffff' } }
                }, connector: { color: '#5F6A6A', width: 2 }
            }],
        chartArea: { border: { width: 0 } },
        //Initializing Tooltip
        tooltip: {
            enable: true
        },
        //Initializing Chart Title
        title: 'Company Revenue and Profit',
        legendSettings: { visible: false },
        axisLabelRender: function (args) {
            if (args.axis.name === 'primaryYAxis') {
                args.text = '$' + Number(args.text) / 1000 + 'B';
            }
        },
        width: ej.base.Browser.isDevice ? '100%' : '80%',
        textRender: function (args) {
            var value = Number(args.text) / 1000;
            value = Math.round((value * 100)) / 100;
            args.text = value.toString();
        },
           // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            args.chart.theme = selectedTheme && (selectedTheme.charAt(0).toUpperCase() + 
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        }
           // custom code end
    });
    chart.appendTo('#waterFall-container');
};