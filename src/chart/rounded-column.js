var pointRender = function (args) {
    var selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
    if (selectedTheme && selectedTheme.indexOf('fabric-dark') > -1) {
        if (args.series.yName == "Rate")
            args.fill = "f9fafb";
    }
    else if (selectedTheme && selectedTheme.indexOf('fabric') > -1) {
        if (args.series.yName == "Rate")
            args.fill = "grey";
    }
    else if (selectedTheme === 'material-dark') {
        if (args.series.yName == "Rate")
            args.fill = "f9fafb";
    }
    else if (selectedTheme === 'material') {
        if (args.series.yName == "Rate")
            args.fill = "grey";
    }
    else if (selectedTheme === 'bootstrap5-dark') {
        if (args.series.yName == "Rate")
            args.fill = "#f9fafb";
    }
    else if (selectedTheme === 'bootstrap5') {
        if (args.series.yName == "Rate")
            args.fill = "grey";
    }
    else if (selectedTheme === 'bootstrap-dark') {
        if (args.series.yName == "Rate")
            args.fill = "f9fafb";
    }
    else if (selectedTheme === 'bootstrap') {
        if (args.series.yName == "Rate")
            args.fill = "grey";
    }
    else if (selectedTheme === 'highcontrast') {
        if (args.series.yName == "Rate")
            args.fill = "#f9fafb";
    }
    else if (selectedTheme === 'fluent-dark') {
        if (args.series.yName == "Rate")
            args.fill = "#f9fafb";
    }
    else if (selectedTheme === 'fluent') {
        if (args.series.yName == "Rate")
            args.fill = "grey";
    }
    else if (selectedTheme === 'tailwind-dark') {
        if (args.series.yName == "Rate")
            args.fill = "#f9fafb";
    }
    else if (selectedTheme === 'tailwind') {
        if (args.series.yName == "Rate")
            args.fill = "grey";
    }
    else if (selectedTheme === 'tailwind3-dark') {
        if (args.series.yName == "Rate")
            args.fill = "#f9fafb";
    } else if (selectedTheme === 'tailwind3') {
        if (args.series.yName == "Rate")
            args.fill = "grey";
    }
    else if (selectedTheme === 'material3-dark') {
        if (args.series.yName == "Rate")
            args.fill = "#f9fafb";
    }
    else if (selectedTheme === 'material3') {
        if (args.series.yName == "Rate")
            args.fill = "grey";
    }
    else if (selectedTheme === 'fluent2-highcontrast' || selectedTheme === 'fluent2-dark') {
        if (args.series.yName == "Rate")
            args.fill = "#f9fafb";
    } 
    else if (selectedTheme === 'fluent2') {
        if (args.series.yName == "Rate")
            args.fill = "grey";
    }
    else {
        if (args.series.yName == "Rate")
            args.fill = "grey";
    }
};
/**
 * Sample for Column series with rounded corners
 */
this.default = function () {
    var count = 0;
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category', interval: 1, majorGridLines: { width: 0 },majorTickLines: {width : 0},
            minorTickLines: {width: 0}, labelPosition: 'Outside', labelRotation: ej.base.Browser.isDevice ? -45 : 0, labelIntersectAction: ej.base.Browser.isDevice ? 'None' : 'Rotate45'
        },
        chartArea: { border: { width: 0 } },
        enableSideBySidePlacement: false,
        //Initializing Primary Y Axis
        primaryYAxis: {
            minimum: 0, maximum: 100, labelFormat: '{value}%', interval: 25, majorTickLines: { width: 0 }, lineStyle: { width: 0 }
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Column', xName: 'x', width: 2, yName: 'Rate',
                dataSource: [                    
                    { x: 'Sierra Leone', y: 48.1, Rate: 100, text: "48.1%" },
                    { x: 'South Sudan', y: 26.8, Rate: 100, text: "26.8%" },
                    { x: 'Nepal', y: 64.7, Rate: 100, text: "64.7%" },
                    { x: 'Gambia', y: 55.5, Rate: 100, text: "55.5%" },
                    { x: 'Gyana', y: 88.5, Rate: 100, text: "88.5%" },
                    { x: 'Kenya', y: 78.0, Rate: 100, text: "78.0%" },
                    { x: 'Singapore', y: 96.8, Rate: 100, text: "96.8%" },
                    { x: 'Niger', y: 19.1, Rate: 100, text: "19.1%" },
                ], name: 'Tiger', enableTooltip: false, columnWidth: 0.8, opacity: 0.5,
                cornerRadius: { bottomLeft: ej.base.Browser.isDevice ? 12 : 35, bottomRight: ej.base.Browser.isDevice ? 12 : 35, topLeft: ej.base.Browser.isDevice ? 12 : 35, topRight: ej.base.Browser.isDevice ? 12 : 35, },
            },
            {
                type: 'Column', xName: 'x', width: 2, yName: 'y',
                dataSource: [                    
                    { x: 'Sierra Leone', y: 48.1, Rate: 100, text: "48.1%" },
                    { x: 'South Sudan', y: 26.8, Rate: 100, text: "26.8%" },
                    { x: 'Nepal', y: 64.7, Rate: 100, text: "64.7%" },
                    { x: 'Gambia', y: 55.5, Rate: 100, text: "55.5%" },
                    { x: 'Gyana', y: 88.5, Rate: 100, text: "88.5%" },
                    { x: 'Kenya', y: 78.0, Rate: 100, text: "78.0%" },
                    { x: 'Singapore', y: 96.8, Rate: 100, text: "96.8%" },
                    { x: 'Niger', y: 19.1, Rate: 100, text: "19.1%" },
                ], name: 'Tiger',
                cornerRadius: { bottomLeft: ej.base.Browser.isDevice ? 12 : 35, bottomRight: ej.base.Browser.isDevice ? 12 : 35, topLeft: ej.base.Browser.isDevice ? 12 : 35, topRight: ej.base.Browser.isDevice ? 12 : 35,}, columnWidth: 0.8,
                marker: { dataLabel: { visible: true, name: 'text', position: 'Top', font: { fontWeight: '600', color: '#ffffff',size: ej.base.Browser.isDevice ? '9px' : '11px' } } }
            }
        ],
        pointRender: pointRender,
        highlightColor: 'transparent',
        legendSettings: { visible: false },
        title: 'Literacy rate by Country in 2015', tooltip: { enable: true, header: "<b>${point.x}</b>", format: "Rate : <b>${point.text}</b>" },
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
    chart.appendTo('#column-container');
};