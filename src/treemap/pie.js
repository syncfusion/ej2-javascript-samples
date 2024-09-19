this.default = function () {
    var isInitial = true;
    var treemap = new ej.treemap.TreeMap({
        // custom code start
        load: function (args) {
            var pietheme = location.hash.split('/')[1];
            pietheme = pietheme ? pietheme : 'Material';
            args.treemap.theme = (pietheme.charAt(0).toUpperCase() +
            pietheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
        },
        // custom code end
        loaded: function (args) {
            setTimeout(function()  {
                var template = document.getElementById('container_Label_Template_Group');
                if (template && isInitial) {
                    isInitial = false;
                    for (var i = 0; i < template.childElementCount; i++) {
                        AccumulationChartRender(template.childNodes[i].childNodes[0].id);
                    }
                    count = 0;
                }
            }, 500);
        },
        resize: function (args) {
            for (var i = 0; i < chartCollection.length; i++) {
                chartCollection[i].destroy();
            }
            isInitial = true;
        },
        tooltipRendering: function (args) {
            if (args.item.groupIndex !== 1 ) {
                args.cancel = true;
            }
        },
        tooltipSettings: {
            visible: true,
            format: ' ${Gender} : ${Population}',
            textStyle: { fontFamily: 'Segoe UI' }
        },
        titleSettings: {
            text: 'Population of the continents based on gender and age group - 2011',
            textStyle: { size: '15px', fontFamily: 'Segoe UI' }
        },
        format: 'n', useGroupingSeparator: true,
        dataSource: window.Continent_Data,
        weightValuePath: 'Population',
        leafItemSettings: {
            labelPath: 'Gender',
            fill: '#A1317D',
            showLabels: false,
            border: { color: 'black', width: 0.5 },
            textStyle: { fontFamily: 'Segoe UI' },
            labelFormat: '${Gender} : ${Population}',
            templatePosition: 'Center',
            labelTemplate: '<div style="height:{{:PieHeight}};width:{{:PieWidth}};" id ={{:Id}}></div>',
        },
        levels: [
            {
                groupPath: 'Continent', fill: '#7E2361', border: { color: 'black', width: 1, },
                headerAlignment: 'Center', groupGap: 0, headerStyle: { size: '14px', fontFamily: 'Segoe UI' }
            }
        ]
    });
    treemap.appendTo('#container');
};
// code for pie chart
var chartCollection = [];
var count = 0;
function AccumulationChartRender(id) {
    var chartData = getData();
    var dataSource = chartData.data;
    var name = chartData.name;
    var chart = new ej.charts.AccumulationChart({
        background: 'transparent',
        tooltip: {
            enable: true,
            format: '${point.x} : ${point.y}%'
        },
        legendSettings: {
            visible: false
        },
        series: [
            {
                explode: true,
                explodeIndex: 0,
                explodeOffset: '20%',
                name: name,
                palettes: ['#1E1E1E', '#00BDAE', '#FFFFFF'],
                dataSource: dataSource,
                dataLabel: {
                    visible: false
                },
                type: 'Pie',
                xName: 'x',
                yName: 'y'
            }
        ]
    });
    chart.appendTo('#' + id);
    chartCollection.push(chart);
}
function getData() {
    var dataSource;
    var dataName;
    if (count === 0) {
        dataSource = [
            { 'x': '0-15 years', y: 40.8 }, { 'x': '15-64 years', y: 56.2 },
            { 'x': 'Above 64 years', y: 3.0 }
        ];
        dataName = 'Asia';
    }
    else if (count === 1) {
        dataSource = [
            { 'x': '0-15 years', y: 15.5 }, { 'x': '15-64 years', y: 12.9 },
            { 'x': 'Above 64 years', y: 41.4 }
        ];
        dataName = 'Asia';
    }
    else if (count === 2) {
        dataSource = [
            { 'x': '0-15 years', y: 25.1 }, { 'x': '15-64 years', y: 67.8 },
            { 'x': 'Above 64 years', y: 7.1 }
        ];
        dataName = 'Africa';
    }
    else if (count === 3) {
        dataSource = [
            { 'x': '0-15 years', y: 15.3 }, { 'x': '15-64 years', y: 68.4 },
            { 'x': 'Above 64 years', y: 16.3 }
        ];
        dataName = 'Africa';
    }
    else if (count === 4) {
        dataSource = [
            { 'x': '0-15 years', y: 22.8 }, { 'x': '15-64 years', y: 65.9 },
            { 'x': 'Above 64 years', y: 11.4 }
        ];
        dataName = 'Europe';
    }
    else if (count === 5) {
        dataSource = [
            { 'x': '0-15 years', y: 26.8 }, { 'x': '15-64 years', y: 66.1 },
            { 'x': 'Above 64 years', y: 7.1 }
        ];
        dataName = 'Europe';
    }
    else if (count === 6) {
        dataSource = [
            { 'x': '0-15 years', y: 26.8 }, { 'x': '15-64 years', y: 66.1 },
            { 'x': 'Above 64 years', y: 7.1 }
        ];
        dataName = 'South America';
    }
    else if (count === 7) {
        dataSource = [
            { 'x': '0-15 years', y: 26.8 }, { 'x': '15-64 years', y: 66.1 },
            { 'x': 'Above 64 years', y: 7.1 }
        ];
        dataName = 'South America';
    }
    else if (count === 8) {
        dataSource = [
            { 'x': '0-15 years', y: 26.8 }, { 'x': '15-64 years', y: 66.1 },
            { 'x': 'Above 64 years', y: 7.1 }
        ];
        dataName = 'Oceania';
    }
    else if (count === 9) {
        dataSource = [
            { 'x': '0-15 years', y: 26.8 }, { 'x': '15-64 years', y: 66.1 },
            { 'x': 'Above 64 years', y: 7.1 }
        ];
        dataName = 'Oceania';
    }
    else if (count === 10) {
        dataSource = [
            { 'x': '0-15 years', y: 26.8 }, { 'x': '15-64 years', y: 66.1 },
            { 'x': 'Above 64 years', y: 7.1 }
        ];
        dataName = 'North America';
    }
    else if (count === 11) {
        dataSource = [
            { 'x': '0-15 years', y: 26.8 }, { 'x': '15-64 years', y: 66.1 },
            { 'x': 'Above 64 years', y: 7.1 }
        ];
        dataName = 'North America';
    }
    else if (count === 12) {
        dataSource = [
            { 'x': '0-15 years', y: 26.8 }, { 'x': '15-64 years', y: 66.1 },
            { 'x': 'Above 64 years', y: 7.1 }
        ];
        dataName = 'South America';
    }
    count++;
    return new Object({ name: dataName, data: dataSource });
}
