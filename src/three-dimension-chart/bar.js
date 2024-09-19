/**
 * Sample for Bar Series
 */
this.default = function () {
    var chart3D = new ej.charts.Chart3D({
        primaryXAxis: {
            valueType: 'Category', 
            labelPlacement: 'BetweenTicks'
        },
        primaryYAxis:
        {
            labelFormat: '{value}%',
            maximum: ej.base.Browser.isDevice ? 8 : 7, interval: ej.base.Browser.isDevice ? 2 : 1,
            edgeLabelPlacement: 'Shift'
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Bar',
                dataSource: [
                    { x: 'Japan', y: 1.71 }, { x: 'France', y: 1.82 },
                    { x: 'India', y: 6.68 }, { x: 'Germany', y: 2.22 }, { x: 'Italy', y: 1.50 }, { x: 'Canada', y: 3.05 }
                ],
                xName: 'x',
                yName: 'y', name: 'GDP', columnSpacing: 0.1,
            },
            {
                type: 'Bar',
                dataSource: [
                    { x: 'Japan', y: 6.02 }, { x: 'France', y: 3.19 },
                    { x: 'India', y: 3.28 }, { x: 'Germany', y: 4.56 }, { x: 'Italy', y: 2.40 }, { x: 'Canada', y: 2.04 }
                ],
                xName: 'x',
                yName: 'y', name: "Share in World's GDP", columnSpacing: 0.1,
            }
        ],
        // Initializing the tooltip
        tooltip: {
            enable: true
        },
        rotation: 22,
        depth: 100,
        height: '400',
        enableRotation: true,
        width: ej.base.Browser.isDevice ? '100%' : '70%',
        legendSettings: { enableHighlight: true },
        //Initializing Chart title
        title: 'GDP Percentage by Country in 2017',
         // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        },
         // custom code end
    });
    chart3D.appendTo('#bar-container');
};