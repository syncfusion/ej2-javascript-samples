
var labelRender = function (args) {
    var selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    var materialColors = ['#00bdae', '#404041', '#357cd2', '#e56590', '#f8b883', '#70ad47', '#dd8abd', '#7f84e8', '#7bb4eb',
        '#ea7a57', '#404041', '#00bdae'];
    var fabricColors = ['#4472c4', '#ed7d31', '#ffc000', '#70ad47', '#5b9bd5',
        '#c1c1c1', '#6f6fe2', '#e269ae', '#9e480e', '#997300', '#4472c4', '#70ad47', '#ffc000', '#ed7d31'];
    var bootstrapColors = ['#a16ee5', '#f7ce69', '#55a5c2', '#7ddf1e', '#ff6ea6',
        '#7953ac', '#b99b4f', '#407c92', '#5ea716', '#b91c52'];
    var highContrastColors = ['#79ECE4', '#E98272', '#DFE6B6', '#C6E773', '#BA98FF',
    '#FA83C3', '#00C27A', '#43ACEF', '#D681EF', '#D8BC6E'];
    if (selectedTheme && selectedTheme.indexOf('fabric') > -1) {
        args.fill = fabricColors[args.point.index % 10];
    }
    else if (selectedTheme === 'material') {
        args.fill = materialColors[args.point.index % 10];
    }
    else if (selectedTheme === 'highcontrast') {
        args.fill = highContrastColors[args.point.index % 10];
    }
    else {
        args.fill = bootstrapColors[args.point.index % 10];
    }
};

/**
 * Sample for Catergory Axis
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            title: 'Country',
            valueType: 'Category',
            majorGridLines: { width: 0 },
            enableTrim: false
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            minimum: 0,
            maximum: 800,
            labelFormat: '{value}M',
            edgeLabelPlacement: 'Shift',
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            labelStyle: {
                color: 'transparent'
            }
        },
        width: ej.base.Browser.isDevice ? '100%' : '60%',
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Bar', tooltipMappingName: 'country',
                dataSource: [
                    { x: 'Germany', y: 72, country: 'GER: 72'},
                    { x: 'Russia', y: 103.1, country: 'RUS: 103.1'},
                    { x: 'Brazil', y: 139.1, country: 'BRZ: 139.1'},
                    { x: 'India', y: 462.1, country: 'IND: 462.1'},
                    { x: 'China', y: 721.4, country: 'CHN: 721.4'},
                    { x: 'United States <br> Of America', y: 286.9, country: 'USA: 286.9'},
                    { x: 'Great Britain', y: 115.1, country: 'GBR: 115.1'},
                    { x: 'Nigeria', y: 97.2, country: 'NGR: 97.2'},
                ],
                xName: 'x', width: 2,
                yName: 'y', marker: {
                    dataLabel: {
                        visible: true,
                        position: 'Top', font: {
                            fontWeight: '600',
                            color: '#ffffff'
                        }
                    }
                },
                name: 'Users'
            }
        ],
        legendSettings: {
            visible: false
        },
        pointRender: labelRender,
         // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        },
         // custom code end
        //Initializing Chart Title
        title: 'Internet Users – 2016',
        //Initializing Tooltip
        tooltip: { enable: true, format: '${point.tooltip}' }
    });
    chart.appendTo('#category-container');
};