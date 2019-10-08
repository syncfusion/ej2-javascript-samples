/**
 * Sample for Chart Symbols
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            title: 'Countries', valueType: 'Category',
            interval: 1, labelIntersectAction: 'Rotate45',
            majorGridLines: { width: 0 },
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            title: 'Penetration', rangePadding: 'None',
            labelFormat: '{value}%', minimum: 0,
            lineStyle: { width: 0 },
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
                dataSource: [{ x: 'WW', y: 12, text: 'World Wide' },
                    { x: 'EU', y: 9.9, text: 'Europe' },
                    { x: 'APAC', y: 4.4, text: 'Asia Pacific' },
                    { x: 'LATAM', y: 6.4, text: 'Latin America' },
                    { x: 'MEA', y: 30, text: 'Middle East Africa' },
                    { x: 'NA', y: 25.3, text: 'North America' }],
                name: 'December 2007',
                marker: {
                    visible: true, width: 10, height: 10,
                    shape: 'Diamond', dataLabel: { name: 'text' }
                },
                xName: 'x', width: 2,
                yName: 'y',
            },
            {
                type: 'Line',
                dataSource: [{ x: 'WW', y: 22, text: 'World Wide' },
                    { x: 'EU', y: 26, text: 'Europe' },
                    { x: 'APAC', y: 9.3, text: 'Asia Pacific' },
                    { x: 'LATAM', y: 28, text: 'Latin America' },
                    { x: 'MEA', y: 45.7, text: 'Middle East Africa' },
                    { x: 'NA', y: 35.9, text: 'North America' }],
                xName: 'x', width: 2,
                marker: {
                    visible: true, width: 10, height: 10,
                    shape: 'Pentagon', dataLabel: { name: 'text' }
                },
                yName: 'y', name: 'December 2008',
            },
            {
                type: 'Line',
                dataSource: [{ x: 'WW', y: 38.3, text: 'World Wide' },
                    { x: 'EU', y: 45.2, text: 'Europe' },
                    { x: 'APAC', y: 18.2, text: 'Asia Pacific' },
                    { x: 'LATAM', y: 46.7, text: 'Latin America' },
                    { x: 'MEA', y: 61.5, text: 'Middle East Africa' },
                    { x: 'NA', y: 64, text: 'North America' }],
                xName: 'x', width: 2,
                marker: {
                    visible: true,
                    width: 10, height: 10,
                    shape: 'Triangle',
                    dataLabel: { name: 'text' }
                },
                yName: 'y', name: 'December 2009',
            }
        ],
        //Initializing Chart Title
        title: 'FB Penetration of Internet Audience',
        //Initializing Tooltip
        tooltip: {
            enable: true
        },
        legendSettings: { visible: false },
        width: ej.base.Browser.isDevice ? '100%' : '60%',
         // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme  :'Material';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + 
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        }
         // custom code end
    });
    chart.appendTo('#marker-container');
};