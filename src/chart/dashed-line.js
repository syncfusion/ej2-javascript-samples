/**
 * Sample for line series with dashed line
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            majorGridLines: { width: 0 },
            interval: 1, majorTickLines: {width : 0},
            minorTickLines: {width: 0},
            labelRotation: ej.base.Browser.isDevice ? -45 : 0,
            labelIntersectAction: ej.base.Browser.isDevice ? 'None' : 'Trim',
        },
        //Initializing Primary X Axis
        primaryYAxis: {
            labelFormat: '{value}k',
            rangePadding: 'None',
            lineStyle: { width: 0 },
            minimum: 0,
            maximum: 300,
            interval: 50,
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 },
        },
        annotations: [{
            content: "<div>Actual</div>",
            region: "Series",
            x: "15%",
            y: "55%",
        }, {
            content: "<div>Forecast</div>",
            region: "Series",
            x: "65%",
            y: "30%",
        }],
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Line',
                dataSource: [
                    { x: 'Jan', y: 100 },
                    { x: 'Feb', y: 110 },
                    { x: 'Mar', y: 125 },
                    { x: 'Apr', y: 150 },
                    { x: 'May', y: 140 },
                    { x: 'Jun', y: 160 },
                ],
                xName: 'x', width: 2, marker: { visible: false, width: 7, height: 7 },
                yName: 'y'
            },
            {
                type: 'Line',
                dataSource: [
                    { x: 'Jun', y: 160 },
                    { x: 'Jul', y: 170 },
                    { x: 'Aug', y: 180 },
                    { x: 'Sep', y: 190 },
                    { x: 'Oct', y: 200 },
                    { x: 'Nov', y: 230 },
                    { x: 'Dec', y: 270 },
                ],
                xName: 'x', width: 2, marker: {
                    visible: false,
                    width: 10,
                    height: 10,
                    shape: 'Diamond',
                  
                },
                dashArray: '10',
                yName: 'y'
            }
        ],
        //Initializing Chart Title
        title: 'Fruits Production Statistics',
        //Initializing Tootlip
        tooltip: {
            enable: true,
            shared: true,
            format: '${point.x} : <b>${point.y}</b>',
            header: '<b>Fruits Production</b>'
        },
        //Initializing Crosshair
        crosshair: {
            enable: false,
            line: {
                color: 'rgba(204,214,235,0.25)',
                width: ej.base.Browser.isDevice ? 50 : 20,
            },
            lineType: 'Vertical'
        },
        width: ej.base.Browser.isDevice ? '100%' : '75%',
        load: function (args) {
            var annotationColor = 'light';
            args.chart.annotations[0].content = '<div style="color:black; font-weight:bold;">Actual</div>';
            args.chart.annotations[1].content = '<div style="color:black; font-weight:bold;">Forecast</div>';
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).
                replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
            if (selectedTheme && selectedTheme.indexOf('fabric-dark') > -1) {
                annotationColor = 'dark';
            }
            else if (selectedTheme && selectedTheme.indexOf('fabric') > -1) {
                annotationColor = 'light';
            }
            else if (selectedTheme === 'material-dark') {
                annotationColor = 'dark';
            }
            else if (selectedTheme === 'material') {
                annotationColor = 'light';
            }
            else if (selectedTheme === 'bootstrap5-dark') {
                annotationColor = 'dark';
            }
            else if (selectedTheme === 'bootstrap5') {
                annotationColor = 'light';
            }
            else if (selectedTheme === 'bootstrap-dark') {
                annotationColor = 'dark';
            }
            else if (selectedTheme === 'bootstrap') {
                annotationColor = 'light';
            }
            else if (selectedTheme === 'highcontrast') {
                annotationColor = 'dark';
            }
            else if (selectedTheme === 'fluent-dark') {
                annotationColor = 'dark';
            }
            else if (selectedTheme === 'fluent') {
                annotationColor = 'light';
            }
            else if (selectedTheme === 'tailwind-dark') {
                annotationColor = 'dark';
            }
            else if (selectedTheme === 'tailwind') {
                annotationColor = 'light';
            }
            else if (selectedTheme === 'material3-dark') {
                annotationColor = 'dark';
            }
            else if (selectedTheme === 'material3') {
                annotationColor = 'light';
            }
            else if (selectedTheme === 'fluent2') {
                annotationColor = 'light';
            } 
            else if (selectedTheme === 'fluent2-highcontrast' || selectedTheme === 'fluent2-dark') {
                annotationColor = 'dark';
            }
            else {
                annotationColor = 'light';
            }
            if (annotationColor == 'light') {
                args.chart.annotations[0].content = '<div style="color:black; font-weight:bold;">Actual</div>';
                args.chart.annotations[1].content = '<div style="color:black; font-weight:bold;">Forecast</div>';
            }
            else {
                args.chart.annotations[0].content = '<div style="color:whitesmoke; font-weight:bold;">Actual</div>';
                args.chart.annotations[1].content = '<div style="color:whitesmoke; font-weight:bold;">Forecast</div>';
            }
        },
         // custom code start
  
         // custom code end
    });
    chart.appendTo('#container');
};