
/**
 * Sample for Error Bar
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category', interval: 1, majorGridLines: { width: 0 },
            labelIntersectAction: ej.base.Browser.isDevice ? "None" : "Rotate45",
            labelRotation: ej.base.Browser.isDevice ? -45 : 0
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Primary X Axis
        primaryYAxis: {
            minimum: 0, 
            maximum: 1250, 
            interval: 250,
            title: "Quantity",
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Column',
                dataSource: [
                    { x: "Printer", y: 750, error: 50 },
                    { x: "Desktop", y: 500, error: 70 },
                    { x: "Charger", y: 550, error: 60 },
                    { x: "Mobile", y: 575, error: 80 },
                    { x: "Keyboard", y: 400, error: 20 },
                    { x: "Power Bank", y: 450, error: 90 },
                    { x: "Laptop", y: 650, error: 40 },
                    { x: "Battery", y: 525, error: 84 }
                ],
                xName: 'x', yName: 'y', marker: { height: 7, width: 7 },
                errorBar: { visible: true, verticalError: 'error'}
            },
        ],
        //Initializing Chart title
        title: 'Quantity vs Items',
        width: ej.base.Browser.isDevice ? '100%' : '75%',
        load: function (args) {
            var errorBarTheme = location.hash.split('/')[1];
            errorBarTheme = errorBarTheme ? errorBarTheme : 'Fluent2';
            args.chart.theme = (errorBarTheme.charAt(0).toUpperCase() +
                errorBarTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
            if (errorBarTheme === 'bootstrap5' || errorBarTheme === 'fluent') {
                chart.series[0].fill = '#81CCBB';
                chart.highlightColor = '#C7E9B6';
            }
        },
        tooltipRender: function (args)  {
            args.text =  '<b>'+args.data.pointX + ' Count'  + ': ' + args.data.pointY  + '</b> (error range: ' + (args.data.pointY - args.series.visiblePoints[args.data.pointIndex].verticalError / 2 ) + '-' + (args.data.pointY + args.series.visiblePoints[args.data.pointIndex].verticalError / 2 ) + ')';
        },
        //Initializing tooltip
        tooltip: { enable: true, enableMarker: false},
        legendSettings: {
            visible: false
        }
         // custom code end
    });
    chart.appendTo('#container');
};