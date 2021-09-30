/**
 * Sample for Cell Selection
 */
this.default = function () {
 
    var heatmap = new ej.heatmap.HeatMap({
        titleSettings:{
            text:'Top export products 2014-2018, Value in USD million'
        },
        xAxis: {
            labels: ['Cereals', 'Meat', 'Spices', 'Tea', 'Edible Oil', 'Dairy Products', 'Wheat'],
        },
        yAxis: {
            labels:['2014','2015','2016','2017','2018']
        },
        allowSelection: true,
        dataSource: window.cellSelectionData,
        paletteSettings: {
            palette: [
                {color: '#3C5E62 '},
                {color: '#86C843 '}
            ],
        },
        legendSettings: {
            visible:false,
        },
        showTooltip: true,
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.heatmap.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i,  'Contrast');
        },
         cellSelected: function(args) {
            var obj = document.getElementById('container1').ej2_instances[0];
            var data  = args.data;
            var length  = data.length;
            var xAxis  = [];
            var flag  = [];
            var series = [];
            var columnData = {};
             for (var i = 0; i < length; i++) {
                 if (xAxis.indexOf(data[i].xLabel) === -1) {
                     xAxis.push(data[i].xLabel);
                     flag.push(false);
                 }
             }
             for (i = 0; i < length; i++) {
                 var index = xAxis.indexOf(data[i].xLabel);
                 if (!flag[index]) {
                     flag[index] = true;
                     var column = {};
                     column.type = 'Column';
                     column.xName = 'x';
                     column.yName = 'y';
                     column.width = 2;
                     column.name = data[i].xLabel;
                     column.marker = { dataLabel: { visible: false } };
                     column.dataSource = [];
                     columnData = {};
                     columnData.x = data[i].yLabel;
                     columnData.y = data[i].value;
                     column.dataSource.push(columnData);
                     series.push(column);
                 }
                 else {
                     columnData = {};
                     columnData.x = data[i].yLabel;
                     columnData.y = data[i].value;
                     series[index].dataSource.push(columnData);
                 }
             }
             obj.series = series;
             obj.refresh();
            },
    });
    heatmap.appendTo('#container');
    var chart = new ej.charts.Chart({
    primaryXAxis: {
        valueType: 'Category', interval: 1, majorGridLines: { width: 0 }
    },
    chartArea: { border: { width: 0 } },
    primaryYAxis:
    {
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 }, lineStyle: { width: 0 }, labelStyle: { color: 'transparent' }
    },
    series:window.chartData,
    tooltip: {
        enable: true
    },
    load: function(args) {
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i,  'Contrast');
    }
    });
    chart.appendTo('#container1');
    var button = new ej.buttons.Button();
    button.appendTo('#clearSelection');
    document.getElementById('clearSelection').onclick = function () {
        heatmap.clearSelection();
        chart.series =window.chartData;
        chart.refresh();
    };

};