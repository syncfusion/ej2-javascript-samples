/**
 * Sample for customization of bullet chart.
 */
this.default = function () {
    var chart = new ej.charts.BulletChart({
        width: ej.base.Browser.isDevice ? '100%' : '100%',
        tooltip: { enable: true },
        dataSource: [{ value: 1.7, target: 2.5 }],
        valueField: 'value',
        targetField: 'target',
        animation: { enable: false },
        ranges: [{ end: 1.5, color: '#599C20' },
        { end: 2.5, color: '#EFC820' },
        { end: 3, color: '#CA4218' }
        ],
        minimum: 0, maximum: 3, interval: 0.5,
        title: 'Package Downloads',
        subtitle: 'in Thousands',
        minorTickLines: { width: 0},
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.bulletChart.theme = (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/light/i, 'Light').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
    });
    chart.appendTo('#container');

    var colorPicker1 = new ej.inputs.ColorPicker({
        value:  '#599C20',
        mode: 'Palette',
        change : function(args) {
            chart.ranges[0].color = args.currentValue.hex;
            chart.refresh();
        }
    });
    colorPicker1.appendTo('#color-picker1');

    var colorPicker2 = new ej.inputs.ColorPicker({
        value:  '#EFC820',
        mode: 'Palette',
        change : function(args) {
            chart.ranges[1].color = args.currentValue.hex;
            chart.refresh();
        }
    });
    colorPicker2.appendTo('#color-picker2');

    var colorPicker3 = new ej.inputs.ColorPicker({
        value:  '#CA4218',
        mode: 'Palette',
        change : function(args) {
            chart.ranges[2].color = args.currentValue.hex;
            chart.refresh();
        }
    });
    colorPicker3.appendTo('#color-picker3');

    var rangeColor = new ej.buttons.CheckBox({
        checked: false,
        change : function(args) {
            chart.majorTickLines.useRangeColor = args.checked;
            chart.minorTickLines.useRangeColor = args.checked;
            chart.labelStyle.useRangeColor = args.checked;
            chart.refresh();
        }
    });
    rangeColor.appendTo('#rangeColor');

    var position = new ej.buttons.CheckBox({
        checked: false,
        change : function(args) {
            chart.opposedPosition = args.checked;
            chart.refresh();
        }
    });
    position.appendTo('#position');
};