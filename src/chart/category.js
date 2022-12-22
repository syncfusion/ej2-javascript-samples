
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
    var fluentColors = ["#614570", "#4C6FB1", "#CC6952", "#3F579A", "#4EA09B", "#6E7A89", "#D4515C", "#E6AF5D", "#639751",
    "#9D4D69"];
    var fluentDarkColors = ["#8AB113", "#2A72D5", "#43B786", "#584EC6", "#E85F9C", "#6E7A89", "#EA6266", "#EBA844", "#26BC7A", 
    "#BC4870"];
    if (selectedTheme && selectedTheme.indexOf('fabric') > -1) {
        args.fill = fabricColors[args.point.index % 10];
    }
    else if (selectedTheme === 'material') {
        args.fill = materialColors[args.point.index % 10];
    }
    else if (selectedTheme === 'highcontrast') {
        args.fill = highContrastColors[args.point.index % 10];
    }
    else if (selectedTheme === 'fluent') {
        args.fill = fluentColors[args.point.index % 10];
    } 
    else if (selectedTheme === 'fluent-dark') {
        args.fill = fluentDarkColors[args.point.index % 10];
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
            valueType: 'Category',
            majorGridLines: { width: 0 },
            enableTrim: false,
            majorTickLines: {width : 0},
            minorTickLines: {width: 0},
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            minimum: 0,
            maximum: 800,
            labelFormat: ej.base.Browser.isDevice?'{value}':'{value}M',
            edgeLabelPlacement: 'Shift',
            majorGridLines: { width: 0 },
            majorTickLines: {width : 0},
            minorTickLines: {width: 0},
            lineStyle: { width: 0 },
            labelStyle: {
                color: 'transparent'
            }
        },
        width: ej.base.Browser.isDevice ? '100%' : '75%',
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
                    { x: 'Russia', y: 103, country: 'RUS: 103'},
                    { x: 'Brazil', y: 139, country: 'BRZ: 139'},
                    { x: 'India', y: 462, country: 'IND: 462'},
                    { x: 'China', y: 721, country: 'CHN: 721'},
                    { x: 'United States <br> Of America', y: 286, country: 'USA: 286'},
                    { x: 'Great Britain', y: 115, country: 'GBR: 115'},
                    { x: 'Nigeria', y: 97, country: 'NGR: 97'},
                ],
                xName: 'x', width: 2,
                yName: 'y', marker: {
                    dataLabel: {
                        visible: true,
                        position:  ej.base.Browser.isDevice ? 'Outer' : 'Top', font: {
                            fontWeight: '600',
                            color: ej.base.Browser.isDevice ? '' : '#ffffff',
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