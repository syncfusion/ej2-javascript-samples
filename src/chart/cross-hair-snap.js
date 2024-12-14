/**
 * Sample for Crosshair Snap in chart
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            interval: 1,
            crosshairTooltip: { enable: true },
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            title: 'Year'
        },
        primaryYAxis: {
            title: "Price (24 Karat per Ounce)",
            labelFormat: '${value}',
            crosshairTooltip: { enable: true },
            minimum: 1000,
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 }
        },
        series: [{
            dataSource: [
                { x: 2015, y: 1160.06 },
                { x: 2016, y: 1250.74 },
                { x: 2017, y: 1257.12 },
                { x: 2018, y: 1268.93 },
                { x: 2019, y: 1393.34 },
                { x: 2020, y: 1770.35 },
                { x: 2021, y: 1798.53 },
                { x: 2022, y: 1800.79 },
                { x: 2023, y: 1923.48 },
                { x: 2024, y: 2003.10 }

            ],
            width: 2,
            xName: "x",
            yName: "y",
            name: "India",
            marker: { visible: true,isFilled: true },
            type: "Line",
            animation: { enable: false },
        }],
        tooltip: {
            enable: false,
            shared: false
        },
        crosshair: {
            enable: true,
            snapToData: true,
            dashArray: '5,5' 
        },
        title: "Historical Gold Prices in USA: 2015 to 2024,",
        chartArea: {
            border: { width: 0 }
        },
        width: ej.base.Browser.isDevice ? '100%' : '75%',
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        },
         // custom code end
    });
    chart.appendTo('#crosshair-container');
};