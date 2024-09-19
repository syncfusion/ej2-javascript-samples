var dataManager = new ej.data.DataManager({
    url: 'https://services.syncfusion.com/js/production/api/orders'
});
var query = new ej.data.Query().take(5).where('Estimate', 'lessThan', 3, false);
var labelRender = function (args) {
    if (args.axis.name === 'primaryYAxis') {
        args.text = '' + args.value * 1000;
    }
};
var loaded = 1;
var loadedChart = function (args) {
    var div = document.getElementById('waitingpopup');
    div.style.display = 'none';
    if (loaded) {
        loaded = 0;
        args.chart.refresh();
    }
};
var fabricColors = ['#4472c4', '#ed7d31', '#ffc000', '#70ad47', '#5b9bd5',
'#c1c1c1', '#6f6fe2', '#e269ae', '#9e480e', '#997300', '#4472c4', '#70ad47', '#ffc000', '#ed7d31'];
var materialColors = ['#00bdae', '#404041', '#357cd2', '#e56590', '#f8b883', '#70ad47', '#dd8abd', '#7f84e8', '#7bb4eb',
    '#ea7a57', '#404041', '#00bdae'];
var bootstrapColors = ['#a16ee5', '#f7ce69', '#55a5c2', '#7ddf1e', '#ff6ea6',
    '#7953ac', '#b99b4f', '#407c92', '#5ea716', '#b91c52'];
var highcontrastColors = ['#79ECE4', '#E98272', '#DFE6B6', '#C6E773', '#BA98FF',
    '#FA83C3', '#00C27A', '#43ACEF', '#D681EF', '#D8BC6E'];
var fluentColors = ["#1AC9E6", "#DA4CB2", "#EDBB40", "#AF4BCF", "#FF7266", "#1BD565", "#EE993D", "#5887FF", "#EC548D",
    "#7D39C0"];
var fluentDarkColors =  ["#1AC9E6", "#DA4CB2", "#EDBB40", "#AF4BCF", "#FF7266", "#1BD565", "#EE993D", "#5887FF", "#EC548D",
"#7D39C0"];
var fluent2Colors = ["#6200EE", "#09AF74", "#0076E5", "#CB3587", "#E7910F", "#0364DE", "#66CD15", "#F3A93C", "#107C10",
    "#C19C00"];
var fluent2HighContrastColors = ["#9BB449", "#2A72D5", "#43B786", "#3F579A", "#584EC6", "#E85F9C", "#6E7A89", "#EA6266",
    "#0B6A0B", "#C19C00"];
var bootstrap5Colors = ['#FD7E14', '#6610F2', '#6F42C1', '#D63384', '#DC3545',
    '#FFC107', '#198754', '#0DCAF0','#FD7E14', '#6610F2'];
var pointRender = function (args) {
    var dataTheme = location.hash.split('/')[1];
    if (dataTheme && dataTheme.indexOf('fabric') > -1) {
        args.fill = fabricColors[args.point.index % 10];
    }
    else if (dataTheme === 'material') {
        args.fill = materialColors[args.point.index % 10];
    }
    else if (dataTheme === 'highcontrast') {
        args.fill = highcontrastColors[args.point.index % 10];
    }
    else if (dataTheme === 'fluent') {
        args.fill = fluentColors[args.point.index % 10];
    } 
    else if (dataTheme === 'fluent-dark') {
        args.fill = fluentDarkColors[args.point.index % 10];
    }
    else if (dataTheme === 'fluent2') {
        args.fill = fluent2Colors[args.point.index % 10];
    } 
    else if (dataTheme === 'fluent2-highcontrast' || dataTheme === 'fluent2-dark') {
        args.fill = fluent2HighContrastColors[args.point.index % 10];
    }
    else if (dataTheme === 'bootstrap5' || dataTheme === 'bootstrap5-dark') {
        args.fill = bootstrap5Colors[args.point.index % 10];
    }
    else {
        args.fill = bootstrapColors[args.point.index % 10];
    }
};
/**
 * Samples for remote data binding
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            rangePadding: 'Additional',
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: {width: 0}
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            majorGridLines: { width: 1 },
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            labelFormat: "{value}00",
            title: 'Freight rate in U.S dollars',
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Chart Sample
        series: [
            {
                type: 'Column',
                dataSource: dataManager,
                xName: 'CustomerID', yName: 'Freight', query: query,
                animation: { enable: false },
                marker: {
                    dataLabel: {
                        visible: true,
                        position: 'Top',
                        format: '{value}K',
                        font: {
                            fontWeight: '600',
                            color: '#ffffff'
                        }
                    }
                }
            }
        ],
        pointRender: pointRender,
        axisLabelRender: labelRender,
        loaded: loadedChart,
        width: ej.base.Browser.isDevice ? '100%' : '75%',
        title: "Container freight rate", legendSettings: { visible: false },
        tooltip: {
            enable: true,
            header: '<b>Freight rate</b>' 
        },
        tooltipRender: function (args)  {
            args.text =  args.data.pointX + ': ' + '<b>$' + args.data.pointY * 1000;
        },
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        },
    });
    chart.appendTo('#remote-container');
};