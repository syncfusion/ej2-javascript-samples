/**
 * Sample for StripLine
 */
var fontSize = ej.base.Browser.isDevice ? '14px' : '18px';

this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'DateTimeCategory', majorGridLines: { width: 0}, labelFormat : 'E dd/MM', labelRotation: -90,
            labelIntersectAction: ej.base.Browser.isDevice ? 'Rotate90' : 'None',
            //Initializing StripLines
            majorTickLines: { width: 0 }
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            minimum: 0, maximum: 30, interval: 10, rangePadding: 'None', majorTickLines: { width: 0 }, title: 'Wind Speed and Gust (km/h)', lineStyle: { width: 0 }, majorGridLines: { width: 0},
            stripLines: [
                {
                    start: 0, end: 5, text: 'Calm', color: 'rgba(68, 170, 213, 0.1)', visible: true, horizontalAlignment: 'Start',
                    textStyle: { size: '13px' }, border: { width: 0 },
                }, 
                {
                    start: 5, end: 8, text: 'Light Air', color: 'rgba(0, 0, 0, 0)', visible: true, horizontalAlignment: 'Start',
                    textStyle: { size: '13px'}, border: { width: 0 },
                },
                {
                    start: 8, end: 11, text: 'Light Breeze', visible: true, horizontalAlignment: 'Start',
                    textStyle: { size: '13px' }, border: { width: 0 }, color: 'rgba(68, 170, 213, 0.1)'
                },
                {
                    start: 11, end: 18, text: 'Gentle Breeze', color: 'rgba(0, 0, 0, 0)', visible: true, horizontalAlignment: 'Start',
                    textStyle: { size: '13px' }, border: { width: 0 },
                }, 
                {
                    start: 18, end: 28, text: 'Moderate Breeze', visible: true, horizontalAlignment: 'Start',
                    textStyle: { size: '13px' }, border: { width: 0 }, color: 'rgba(68, 170, 213, 0.1)'
                },
                {
                    start: 28, end: 30, text: 'Fresh Breeze', visible: true, horizontalAlignment: 'Start',
                    textStyle: { size: '13px' }, border: { width: 0 }, color: 'rgba(0, 0, 0, 0)'
                }
            ]
        },
        chartArea: {
            border: { width: 0 }
        },
        //Initializing Chart Series
        series: [
            {
                dataSource: [
                      { x: new Date(2023, 4, 1), wind : 19 },
                      { x: new Date(2023, 4, 2), wind : 17 },
                      { x: new Date(2023, 4, 3), wind : 14 },
                      { x: new Date(2023, 4, 4), wind : 9 },
                      { x: new Date(2023, 4, 5), wind : 10 },
                      { x: new Date(2023, 4, 6), wind : 8 },
                      { x: new Date(2023, 4, 7), wind : 8 },
                      { x: new Date(2023, 4, 8), wind : 16 },
                      { x: new Date(2023, 4, 9), wind : 9 },
                      { x: new Date(2023, 4, 10), wind : 13 },
                      { x: new Date(2023, 4, 11), wind : 7 },
                      { x: new Date(2023, 4, 12), wind : 12 },
                      { x: new Date(2023, 4, 13), wind : 10 },
                      { x: new Date(2023, 4, 14), wind : 5 },
                      { x: new Date(2023, 4, 15), wind : 8 }],
                xName: 'x', width: 4, yName: 'wind', type: 'Spline', name: 'Wind Speed (km/h)', legendShape:'HorizontalLine'
            },
            {
                dataSource: [
                    { x: new Date(2023, 4, 1), gust : 30 },
                    { x: new Date(2023, 4, 2), gust : 28 },
                    { x: new Date(2023, 4, 3), gust : 26 },
                    { x: new Date(2023, 4, 4), gust : 19 },
                    { x: new Date(2023, 4, 5), gust : 21 },
                    { x: new Date(2023, 4, 6), gust : 14 },
                    { x: new Date(2023, 4, 7), gust : 13 },
                    { x: new Date(2023, 4, 8), gust : 29 },
                    { x: new Date(2023, 4, 9), gust : 19 },
                    { x: new Date(2023, 4, 10), gust : 20 },
                    { x: new Date(2023, 4, 11), gust : 15 },
                    { x: new Date(2023, 4, 12), gust : 25 },
                    { x: new Date(2023, 4, 13), gust : 20 },
                    { x: new Date(2023, 4, 14), gust : 10 },
                    { x: new Date(2023, 4, 15), gust : 15 }],
                xName: 'x', width: 4, yName: 'gust', type: 'Spline', name: 'Wind Gust (km/h)',  legendShape:'HorizontalLine'
            }
        ],
        //Initializing Chart Title
        title: 'Wind Speed and Gust (km/h)',
        //Initializing Tooltip
        tooltip: {
            enable: true, header: '', format: '<b>${point.x}</b> <br> ${series.name} : <b>${point.y}</b>', enableMarker: false, enableHighlight: true, showNearestTooltip: true
        },
        legendSettings: { visible: true, enableHighlight: true, shapeHeight: 6, shapeWidth: 15 },
        width: ej.base.Browser.isDevice ? '100%' : '75%',
        titleStyle: { position : 'Bottom', textAlignment:'Far' },
        subTitle: 'WorldWeatherOnline.com',
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