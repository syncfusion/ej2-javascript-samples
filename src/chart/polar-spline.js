/**
 * Sample for Polar Series with DrawType Spline
 */
this.default = function () {
    var cardData = [];
    var biDirData = [];
    var omniDirData = [];
    var point1;
    var point2;
    for (var x = -180; x < 180; x++) {
        point1 = { x: x, y: -12.6 * (1 - Math.cos(x * 3.14 / 180)) };
        cardData.push(point1);
        point2 = { x: x, y: -3 };
        omniDirData.push(point2);
    }
    for (var x1 = -180; x1 < -90; x1++) {
        point1 = { x: x1, y: -26 * (1 + Math.cos(x1 * 3.14 / 180)) };
        biDirData.push(point1);
    }
    for (var x2 = -90; x2 < 90; x2++) {
        point1 = { x: x2, y: -26 * (1 - Math.cos(x2 * 3.14 / 180)) };
        biDirData.push(point1);
    }
    for (var x3 = 90; x3 < 180; x3++) {
        point1 = { x: x3, y: -26 * (1 + Math.cos(x3 * 3.14 / 180)) };
        biDirData.push(point1);
    }
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            minimum: -180,
            maximum: 180,
            interval: 30,
            labelFormat: '{value}°',
            coefficient: ej.base.Browser.isDevice ? 80 : 100
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Polar', drawType: 'Spline', dataSource: cardData,
                animation: { enable: true }, width: 2, isClosed: false,
                xName: 'x', yName: 'y', name: 'Cardioid (unidirectional)', dashArray: '5 5 2'
            },
            {
                type: 'Polar', drawType: 'Spline', dataSource: omniDirData,
                animation: { enable: true }, dashArray: '2', width: 2,
                xName: 'x', yName: 'y', name: 'Omnidirectional', isClosed: false
            },
            {
                type: 'Polar', drawType: 'Spline', dataSource: biDirData,
                animation: { enable: true }, width: 2, isClosed: false,
                xName: 'x', yName: 'y', name: 'Bidirectional'
            },
        ],
        //Initializing Chart Title
        title: 'Microphone Types Polar Patterns',
        //Initializing Tooltip
        tooltip: {
            enable: true
        }, legendSettings: { enableHighlight: true },
           // custom code start
        load: function (args) {
            var polarSplineTheme = location.hash.split('/')[1];
            polarSplineTheme = polarSplineTheme ? polarSplineTheme : 'Fluent2';
            args.chart.theme = (polarSplineTheme.indexOf('fabric') > -1) ? 'Fabric' : 'Fluent2';
            args.chart.theme = (polarSplineTheme.charAt(0).toUpperCase() + 
                polarSplineTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
           // custom code end
    });
    chart.appendTo('#polar-spline-container');
    var polarType = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select Range Bar Color',
        width: 120,
        change: function () {
            chart.series[0].type = polarType.value;
            chart.series[1].type = polarType.value;
            chart.series[2].type = polarType.value;
            chart.series[0].animation.enable = false;
            chart.series[1].animation.enable = false;
            chart.series[2].animation.enable = false;
            chart.refresh();
        }
    });
    polarType.appendTo('#seriestype');
};