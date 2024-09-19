/**
 * Sample for Sorting
 */
this.default = function () {
    var dataValues = [
        { x: 'Asia', car: 120, trucks: 90, bike: 180, cycle: 90 },
        { x: 'Canada', car: 100, trucks: 80, bike: 90, cycle: 80 },
        { x: 'Europe', car: 80, trucks: 90, bike: 60, cycle: 50 },
        { x: 'Africa', car: 40, trucks: 20, bike: 30, cycle: 30 },
        { x: 'Mexico', car: 40, trucks: 50, bike: 80, cycle: 50 },
        { x: 'US', car: 140, trucks: 90, bike: 75, cycle: 70 }
    ];
    var chart = new ej.charts.Chart({
        primaryXAxis: {
            majorGridLines: { width: 0 }, minorGridLines: { width: 0 },
            majorTickLines: { width: 0 }, minorTickLines: { width: 0 },
            interval: 1, lineStyle: { width: 0 },
            labelIntersectAction: 'Rotate45', valueType: 'Category'
        },
        primaryYAxis: {
            title: 'Sales', lineStyle: { width: 0 },
            majorTickLines: { width: 0 }, majorGridLines: { width: 1 },
            minorGridLines: { width: 1 }, minorTickLines: { width: 0 },
            labelFormat: '{value}K',
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        series: [
            {
                type: 'StackingColumn', dataSource: dataValues,
                xName: 'x', width: 2, yName: 'car', name: 'Car'
            },
            {
                type: 'StackingColumn', dataSource: dataValues,
                xName: 'x', width: 2, yName: 'trucks', name: 'Trucks'
            },
            {
                type: 'StackingColumn', dataSource: dataValues,
                xName: 'x', width: 2, yName: 'bike', name: 'Bike'
            },
            {
                type: 'StackingColumn', dataSource: dataValues,
                xName: 'x', width: 2, yName: 'cycle', name: 'Cycle' 
            }
        ],
        title: 'Vehicle Sales by Region',
        tooltip: {
            enable: true
        },
           // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + 
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
           // custom code end
    });
    chart.appendTo('#container');
    var sortMode = new ej.dropdowns.DropDownList({
        index: 0, placeholder: 'Select Range Bar Color',
        width: 120,
        change: function () {
            sortDataSource(sortMode.value + '');
        }
    });
    sortMode.appendTo('#sortMode');
    document.getElementById('decending').onchange = function () {
        sortDataSource(sortMode.value + '');
    };
    function sortDataSource(value) {
        var element = document.getElementById('decending');
        var isDecending = element.checked;
        element.disabled = false;
        var sortData;
        if (value === 'X') {
            sortData = ej.charts.sort(dataValues, ['x'], isDecending);
        } else if (value === 'Y') {
            sortData = ej.charts.sort(dataValues, ['car', 'trucks', 'bike', 'cycle'], isDecending);
        } else {
            element.disabled = true;
            sortData = dataValues;
        }
        chart.series[0].animation.enable = false;
        chart.series[1].animation.enable = false;
        chart.series[2].animation.enable = false;
        chart.series[3].animation.enable = false;
        chart.series[0].dataSource = sortData;
        chart.series[1].dataSource = sortData;
        chart.series[2].dataSource = sortData;
        chart.series[3].dataSource = sortData;
        chart.refresh();
    }
};