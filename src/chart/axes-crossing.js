/**
 * Axes Crossing Sample
 */

this.default = function () {
    var chart = new ej.charts.Chart({
        primaryXAxis: {
            minimum: -8, maximum: 8, interval: 2,
            valueType: 'Double',
            lineStyle: {                
                width: 2
            },
            minorTickLines: { width: 0 },
            majorTickLines: { width: 0 },
            crossesAt: 0,
            minorTicksPerInterval: 3
        },
        primaryYAxis: {
            minimum: -8, maximum: 8, interval: 2,
            lineStyle: {
                color: 'Black',
                width: 2
            },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 },
            crossesAt: 0,
            minorTicksPerInterval: 3,
        },
        series: [
            {
                type: 'Line',
                dataSource: [
                    { x: -6, y: 2 }, { x: -5, y: 0 }, { x: -4.511, y: -0.977 }, { x: -3, y: -4 }, { x: -1.348, y: -1.247 },
                    { x: -0.6, y: 0 }, { x: 0, y: 1 }, { x: 1.5, y: 3.5 }, { x: 6, y: 4.5 },
                ],
                fill: 'Blue', name: 'Linear Interpolation',
                enableTooltip: false, xName: 'x', width: 2, yName: 'y',
            },
            {
                type: 'Spline',
                dataSource: [
                    { x: -6, y: 2 }, { x: -5.291, y: 0 }, { x: -5, y: -0.774 }, { x: -3, y: -4 }, { x: -0.6, y: -0.965 },
                    { x: -0.175, y: 0 }, { x: 0, y: 0.404 }, { x: 1.5, y: 3.5 }, { x: 3.863, y: 5.163 }, { x: 6, y: 4.5 },
                ],
                fill: 'Green', name: 'Cubic Spline Interpolation',
                xName: 'x', width: 2, enableTooltip: false, yName: 'y',
            }, {
                type: 'Scatter',
                dataSource: [
                    { x: -6, y: 2 }, { x: -3, y: -4 }, { x: 1.5, y: 3.5 }, { x: 6, y: 4.5 },
                ],
                fill: 'Red', name: 'Data Points', xName: 'x', width: 2,
                yName: 'y', marker: { visible: false, width: 7, height: 7 }
            }
        ],
         // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
            args.chart.primaryYAxis.lineStyle.color = selectedTheme == 'highcontrast' ?  '#ffffff ' : '';
				
        },
         // custom code end
        tooltip: { enable: true },
        legendSettings: { enableHighlight: true },
        title: 'Spline Interpolation',
    });
    chart.appendTo('#container');
    var axes = new ej.dropdowns.DropDownList({
        index: 0, placeholder: 'Select Range Bar Color',
        width: 120,
        change: function () {
            var target = document.getElementById('axisElements');
            if (axes.index === 0) {
                target.checked = chart.primaryXAxis.placeNextToAxisLine;
                crossValue.value = +chart.primaryXAxis.crossesAt;
            }
            else {
                target.checked = chart.primaryYAxis.placeNextToAxisLine;
                crossValue.value = +chart.primaryYAxis.crossesAt;
            }
            chart.dataBind();
        }
    });
    axes.appendTo('#selectAxis');
    var crossValue = new ej.inputs.NumericTextBox({
        value: 0, min: -8,
        max: 8, width: 120,
        step: 2,
        change: function () {
            if (axes.index === 0) {
                chart.primaryXAxis.crossesAt = crossValue.value;
            }
            else {
                chart.primaryYAxis.crossesAt = crossValue.value;
            }
            chart.dataBind();
        }
    });
    crossValue.appendTo('#crossingValue');
    document.getElementById('axisElements').onchange = function (e) {
        var value = e.target.checked;
        if (axes.index === 0) {
            chart.primaryXAxis.placeNextToAxisLine = value;
        }
        else {
            chart.primaryYAxis.placeNextToAxisLine = value;
        }
        chart.dataBind();
    };
};