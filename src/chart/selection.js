/**
 * Sample for Selection
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        primaryXAxis: {
            title: 'Countries',
            valueType: 'Category',
            interval: 1,
            labelIntersectAction: 'Rotate90'
        },
        primaryYAxis: {
            title: 'Distribution',
            labelFormat: '{value}%',
            interval: 20
        },
        series: [
            {
                type: 'Column',
                dataSource: [
                    { x: 'CHN', y: 17 }, { x: 'USA', y: 19 },
                    { x: 'IDN', y: 29 }, { x: 'JAP', y: 13 },
                    { x: 'BRZ', y: 24 }
                ],
                xName: 'x', width: 2,
                yName: 'y', name: 'Age 0-14',
            },
            {
                type: 'Column',
                dataSource: [
                    { x: 'CHN', y: 54 }, { x: 'USA', y: 67 },
                    { x: 'IDN', y: 65 }, { x: 'JAP', y: 61 },
                    { x: 'BRZ', y: 68 }
                ],
                xName: 'x', width: 2,
                yName: 'y', name: 'Age 15-64',
            },
            {
                type: 'Column',
                dataSource: [
                    { x: 'CHN', y: 9 }, { x: 'USA', y: 14 },
                    { x: 'IDN', y: 6 }, { x: 'JAP', y: 26 },
                    { x: 'BRZ', y: 8 }
                ],
                xName: 'x', width: 2,
                yName: 'y', name: 'Age 65 & Above',
            }
        ],
        title: 'Age Distribution by Country', legendSettings: { visible: true, toggleVisibility: false },
        selectionMode: 'Point',
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        }
    });
    chart.appendTo('#container');
    var highlightselect = document.getElementById('highlight');
    var mode = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select Range Bar Color',
        width: 120,
        change: function () {
            chart.selectionMode = mode.value;
            if (highlightselect.checked) {
                chart.highlightMode = mode.value;
            }
            else {
                chart.highlightMode = 'None';
            }
            chart.dataBind();
        }
    });
    mode.appendTo('#selmode');
    document.getElementById('select').onchange = function () {
        var element = (document.getElementById('select'));
        chart.isMultiSelect = element.checked;
        chart.dataBind();
    };
    var pattern = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select pattern values',
        width: 120,
        change: function () {
            chart.selectionPattern = pattern.value;
            chart.dataBind();
        }
    });
    pattern.appendTo('#selpattern');
    var highLight = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select pattern values',
        width: 120,
        change: function () {
            if (highlightselect.checked) {
                chart.highlightPattern = highLight.value;
            }
            else {
                chart.highlightPattern = 'None';
            }
            chart.dataBind();
        }
    });
    highLight.appendTo('#highpattern');
    document.getElementById('highlight').onchange = function () {
        var element = (document.getElementById('highlight'));
        if (element.checked) {
            chart.highlightMode = mode.value;
            chart.highlightPattern = highLight.value;
        }
        else {
            chart.highlightMode = 'None';
            chart.highlightPattern = 'None';
        }
        chart.dataBind();
    };
    };