var dataManager = new ej.data.DataManager({
    url: 'https://ej2services.syncfusion.com/production/web-services/api/Orders'
});
var query = new ej.data.Query().take(5).where('Estimate', 'lessThan', 3, false);
var labelRender = function (args) {
    if (args.axis.orientation === 'Horizontal') {
        args.text = args.text.split(' ')[0];
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
var fluentColors = ["#614570", "#4C6FB1", "#CC6952", "#3F579A", "#4EA09B", "#6E7A89", "#D4515C", "#E6AF5D", "#639751",
    "#9D4D69"];
var fluentDarkColors = ["#8AB113", "#2A72D5", "#43B786", "#584EC6", "#E85F9C", "#6E7A89", "#EA6266", "#EBA844", "#26BC7A", 
    "#BC4870"];
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
            title: 'Assignee',
            rangePadding: 'Additional',
            majorGridLines: { width: 0 },
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            labelStyle: {
                color: 'transparent'
            }
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
                name: 'Story Point',
                animation: { enable: false },
                marker: {
                    dataLabel: {
                        visible: true,
                        position: 'Top',
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
        width: ej.base.Browser.isDevice ? '100%' : '60%',
           // custom code start
        load: function (args) {
            var div = document.getElementById('waitingpopup');
            div.style.display = 'block';
            var width = args.chart.element.offsetWidth;
            var height = args.chart.element.offsetHeight;
            div.style.top = (height ? height : 300 / 2 - 25) + 'px';
            div.style.left = (width / 2 - 25) + 'px';
            div.style.display = '';
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + 
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        },
           // custom code end
        title: 'Sprint Task Analysis', legendSettings: { visible: false },
        tooltip: {
            enable: true
        }
    });
    chart.appendTo('#remote-container');
};