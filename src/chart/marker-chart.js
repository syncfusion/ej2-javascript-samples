var chartData = [
    { x: "World Wide", y1: 12, y2: 22, y3: 38.3, text: "World Wide" },
    { x: "Europe", y1: 9.9, y2: 26, y3: 45.2, text: "Europe" },
    { x: "Asia Pacific", y1: 6.4, y2: 9.6, y3: 18.2, text: "Asia Pacific" },
    { x: "Latin America", y1: 4.4, y2: 28, y3: 46.7, text: "Latin America" },
    { x: "Middle East Africa", y1: 30, y2: 45.7, y3: 61.5, text: "Middle East Africa" },
    { x: "North America", y1: 25.3, y2: 35.9, y3: 64, text: "North America" }];
/**
 * Sample for Chart Symbols
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category', labelRotation: ej.base.Browser.isDevice ? -45 : 0,
            interval: 1, labelIntersectAction: ej.base.Browser.isDevice ? 'None' : 'Rotate45',
            majorGridLines: { width: 0 }, majorTickLines: { width: 0 }
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            rangePadding: 'None',title: 'Penetration',
            labelFormat: '{value}%', minimum: 0,
            lineStyle: { width: 0 }, majorTickLines: { width: 0 },
            maximum: 75, interval: 15
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Line',
                dataSource: chartData,
                name: '2007',
                marker: {
                    visible: true, width: 8, height: 8, isFilled: true,
                    shape: 'Diamond', dataLabel: { name: 'text' }
                },
                xName: 'x', width: 2,
                yName: 'y1',
            },
            {
                type: 'Line',
                dataSource: chartData,
                xName: 'x', width: 2,
                marker: {
                    visible: true, width: 8, height: 8, isFilled: true,
                    shape: 'Pentagon', dataLabel: { name: 'text' }
                },
                yName: 'y2', name: '2008',
            },
            {
                type: 'Line',
                dataSource: chartData,
                xName: 'x', width: 2,
                marker: {
                    visible: true,
                    width: 8, height: 8, isFilled: true, 
                    shape: 'Triangle',
                    dataLabel: { name: 'text' }
                },
                yName: 'y3', name: '2009',
            }
        ],
        //Initializing Chart Title
        title: 'FB Penetration of Internet Audience',
        //Initializing Tooltip
        tooltip: {
            enable: true, header: '', format: '<b>${point.x}</b> <br> ${series.name} : <b>${point.y}</b>'
        },
        legendSettings: { visible: true, enableHighlight: true },
        width: ej.base.Browser.isDevice ? '100%' : '75%',
         // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme  :'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + 
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
         // custom code end
    });
    chart.appendTo('#marker-container');
};