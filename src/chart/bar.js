/**
 * Sample for Bar Series
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            majorGridLines: { width: 0 }
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            labelFormat: '{value}%',
            title: 'GDP (In Percentage)',
            edgeLabelPlacement: 'Shift',
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Bar',
                dataSource: [
                    { x: 'Japan', y: 1.71 }, { x: 'France', y: 1.82 },
                    { x: 'India', y: 6.68 }, { x: 'Germany', y: 2.22 }, { x: 'Italy', y: 1.50 }, { x: 'Canada', y: 3.05 }
                ],
                xName: 'x', width: 2, name:'GDP' ,
                yName: 'y', columnSpacing: 0.1
            },
            {
                type: 'Bar',
                dataSource: [
                    { x: 'Japan', y: 6.02 }, { x: 'France', y: 3.19 },
                    { x: 'India', y: 3.28 }, { x: 'Germany', y: 4.56 }, { x: 'Italy', y: 2.40 }, { x: 'Canada', y: 2.04 }
                ],
                xName: 'x', width: 2,name: "Share in World's GDP",
                yName: 'y',columnSpacing: 0.1
            }
        ],
        //Initializing Tooltip
        tooltip: {
            enable: true
        },
        width: ej.base.Browser.isDevice ? '100%' : '75%',
        legendSettings: { enableHighlight :true },
        //Initializing Chart Title
        title: 'GDP by Country in 2017',
         // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        },
         // custom code end
    });
    chart.appendTo('#bar-container');
};