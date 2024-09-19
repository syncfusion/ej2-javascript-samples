var chartData = [
    {
        "type": "Column", "xName": "x", "width": 2, "yName": "y","name":"Cereals", 
        "dataSource": [{ "x": "2014", "y": 2.9 }, { "x": "2015", "y": 5.2 }, { "x": "2016", "y": 3.4 },{ "x": "2017", "y": 5.6 },{ "x": "2018", "y": 4.4 }],
        "marker": { "dataLabel": { "visible": false } }
    },
    {
        "type": "Column", "xName": "x", "width": 2, "yName": "y","name":"Meat", 
        "dataSource": [{ "x": "2014", "y": 6.6 }, { "x": "2015", "y": 4.8 }, { "x": "2016", "y": 8 },{ "x": "2017", "y": 3.9 },{ "x": "2018", "y": 6.5 }],
        "marker": { "dataLabel": { "visible": false } }
    },
    {
        "type": "Column", "xName": "x", "width": 2, "yName": "y","name":"Spices", 
        "dataSource": [{ "x": "2014", "y": 5.1 }, { "x": "2015", "y": 4.6 }, { "x": "2016", "y": 5.4 },{ "x": "2017", "y": 3.9 },{ "x": "2018", "y": 4.3 }],
        "marker": { "dataLabel": { "visible": false } }
    },
    {
        "type": "Column", "xName": "x", "width": 2, "yName": "y","name":"Tea",
        "dataSource": [{ "x": "2014", "y": 5.2 }, { "x": "2015", "y": 4.3 }, { "x": "2016", "y": 3.9 },{ "x": "2017", "y": 6.2 },{ "x": "2018", "y": 6.4 }],
        "marker": { "dataLabel": { "visible": false } }
    },
    {
        "type": "Column", "xName": "x", "width": 2, "yName": "y","name":"Edible Oil",
        "dataSource": [{ "x": "2014", "y": 7 }, { "x": "2015", "y": 3 }, { "x": "2016", "y": 1.9 },{ "x": "2017", "y": 5.9 },{ "x": "2018", "y": 3.5 }],
        "marker": { "dataLabel": { "visible": false } }
    },
    {
        "type": "Column", "xName": "x", "width": 2, "yName": "y","name":"Dairy Products",
        "dataSource": [{ "x": "2014", "y": 7.8 }, { "x": "2015", "y": 5.9 }, { "x": "2016", "y": 3.9 },{ "x": "2017", "y": 4.3 },{ "x": "2018", "y": 4.5 }],
        "marker": { "dataLabel": { "visible": false } }
    },
    {
        "type": "Column", "xName": "x", "width": 2, "yName": "y","name":"Wheat",
        "dataSource": [{ "x": "2014", "y": 6.5 }, { "x": "2015", "y": 4.3 }, { "x": "2016", "y": 3.9 },{ "x": "2017", "y": 5.2 },{ "x": "2018", "y": 3.9 }],
        "marker": { "dataLabel": { "visible": false } }
    }
];
this.default = function () { 
    var heatmap = new ej.heatmap.HeatMap({
        titleSettings:{
            text:'Top export products 2014-2018, Value in USD million',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'inherit'
            }
        },
        xAxis: {
            labels: ['Cereals', 'Meat', 'Spices', 'Tea', 'Edible Oil', 'Dairy Products', 'Wheat'],
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        yAxis: {
            labels:['2014','2015','2016','2017','2018'],
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        allowSelection: true,
        dataSource: [
            [2.9, 5.2, 3.4, 5.6, 4.4],
            [6.6, 4.8, 8, 3.9, 6.5],
            [5.1, 4.6, 5.4, 3.9, 4.3],
            [5.2, 4.3, 3.9, 6.2, 6.4],
            [7, 3, 1.9, 5.9, 3.5],
            [7.8, 5.9, 3.9, 4.3, 4.3],
            [6.5, 4.3, 3.9, 5.2, 3.9]
        ],
        paletteSettings: {
            palette: [
                {color: '#3C5E62 '},
                {color: '#86C843 '}
            ],
        },
        cellSettings: {
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        legendSettings: {
            visible:false,
        },
        tooltipSettings:{
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        showTooltip: true,
        load: function (args) {
            // custom code start
            var cellSelectionTheme = location.hash.split('/')[1];
            cellSelectionTheme = cellSelectionTheme ? cellSelectionTheme : 'Material';
            args.heatmap.theme = (cellSelectionTheme.charAt(0).toUpperCase() +
            cellSelectionTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i,  'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
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
    series: chartData,
    tooltip: {
        enable: true
    },
    load: function(args) {
        // custom code start
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i,  'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
        // custom code end
    }
    });
    chart.appendTo('#container1');
    var button = new ej.buttons.Button();
    button.appendTo('#clearSelection');
    document.getElementById('clearSelection').onclick = function () {
        heatmap.clearSelection();
        chart.series = chartData;
        chart.refresh();
    };

};