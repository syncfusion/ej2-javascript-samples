/**
 * Sample for Area Series with empty points
 */
 this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'DateTime',
            majorGridLines: { width: 0 },
            edgeLabelPlacement: 'Shift',
            minimum:new Date(2017, 0, 1), maximum: new Date(2021, 0, 1), intervalType: 'Years'
        },
        //Initializing Primary Y Axis
        primaryYAxis: {         
            labelFormat: '${value}',interval: 2000, maximum: 8000, minimum: -4000,
            lineStyle: { width: 0},
            majorTickLines: { width: 0}
        },
        chartArea: {
            border: {
                width: 0
            }
        },//Initializing Chart Series
        series: [
            {
                type: 'Area',
                dataSource: [
                    { x: new Date(2017, 0, 1), y: 3000 }, { x: new Date(2018, 0, 1), y: 4000 },
                { x: new Date(2019, 0, 1), y: -4000 }, { x: new Date(2020, 0, 1), y: -2000 },
                { x: new Date(2021, 0, 1), y: 5000 }
                ],
                xName: 'x',
                width: 2,
                yName: 'y',marker: { visible : true,isFilled : true , width : 7 , height : 7 , shape : "Circle"},
                name: 'Company A',
                opacity: 0.75,border: { width: 2 },
            },
            {
                type: 'Area',
                dataSource: [
                    { x: new Date(2017, 0, 1), y: 2000 }, { x: new Date(2018, 0, 1), y: 3000 },
                { x: new Date(2019, 0, 1), y: 4000 }, { x: new Date(2020, 0, 1), y: 2000 },
                { x: new Date(2021, 0, 1), y: 3000 }
                ],
                xName: 'x',
                width: 2,
                yName: 'y',
                name: 'Company B',marker: {visible:true, isFilled : true , width : 7 , height : 7 , shape : "Diamond"},
                opacity: 0.75,border: { width: 2 },
            },
            {
                type: 'Area',
                dataSource: [
                    { x: new Date(2017, 0, 1), y: 2000 }, { x: new Date(2018, 0, 1), y: -1000 },
                { x: new Date(2019, 0, 1), y: -3000 }, { x: new Date(2020, 0, 1), y: 4000 },
                { x: new Date(2021, 0, 1), y: 1000 }
                ],
                xName: 'x', 
                width: 2,
                yName: 'y',
                name: 'Company C',marker: {visible:true, isFilled : true , width : 5 , height : 5 , shape : "Rectangle"},
                opacity: 0.75,border: { width: 2 },
            },
        ],
        //Initializing Chart Title
        title: 'Profit and Loss',
        tooltip: {
            enable: true
        },
        legendSettings: { enableHighlight: true },
        width: ej.base.Browser.isDevice ? '100%' : '75%',
        // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        },
        // custom code end
    });
    chart.appendTo('#area-container');
};