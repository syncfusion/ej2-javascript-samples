/**
 * Samples for trendlines
 */
this.default = function () {
    var series1 = [
        { x: 1947, y: 4.76 },
        { x: "1967", y: 7.50 },
        { x: "1974", y: 8.10 },
        { x: "1989", y: 16.64 },
        { x: "1990", y: 17.32 },
        { x: "2000", y: 43.56 },
        { x: "2007", y: 39.27 },
        { x: "2013", y: 56.57 },
        { x: "2019", y: 71.74 },
        { x: "2020", y: 76.67 },
        { x: "2021", y: 72.75 },
    ];
    
    var chart = new ej.charts.Chart({
        primaryXAxis: {
            labelFormat:'yyyy', 
            valueType:'Category',
            majorTickLines: { width: 0 },
            majorGridLines: { width: 0 },
            edgeLabelPlacement: 'Shift', 
            lineStyle: { width:1 }
        },
        primaryYAxis: {
            title: 'Rupees against Dollars', labelFormat: "₹{value}", minimum: 0, maximum: 80,
            interval: 10, lineStyle: { width: 0 }, majorTickLines: { width: 0 }, majorGridLines: { width: 1 } 
        },
        series: [{
            dataSource: series1, xName: 'x', yName: 'y', name: 'Rupees', type: 'Spline', marker: { visible: true, height: 7, width: 7, isFilled:true },
            trendlines: [{ type: 'Linear', width: 3, name: 'Trends',  fill:  '#C64A75', enableTooltip: false }]
        }],
        chartArea: { border: { width: 0 } },
        title: 'USD to INR Rates',
        width: ej.base.Browser.isDevice ? '100%' : '75%',
        legendSettings: { visible: true, shapeHeight: 15, shapeWidth: 15 },
        tooltip: { enable: true },
           // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        },
           // custom code end
    });
    chart.appendTo('#container');
};