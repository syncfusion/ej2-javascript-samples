/**
 * Sample for bar customization.
 */
this.default = function () {
    var chart = new ej.charts.BulletChart({
        tooltip: { enable: true },
        dataSource: [{ value: 270, target: 250 }],
        valueField: 'value',
        targetField: 'target',
        animation: { enable: false },
        ranges: [{ end: 150 },
        { end: 250 },
        { end: 300 }
        ],
        minimum: 0, maximum: 300, interval: 50,
        title: 'New Customers',
        subtitle: 'in Thousands',
        titlePosition: ej.base.Browser.isDevice ? 'Top' : 'Left',
        titleStyle: { textAlignment: 'Center', },
        orientation: 'Horizontal',
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.bulletChart.theme = (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/light/i, 'Light').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
    });
    chart.appendTo('#dotCustomization');

    var actualValueSlider;
    var targetValueSlider;

    function refreshPropertyControls() {
        if (actualValueSlider) {
            actualValueSlider.refresh();
        }
        if (targetValueSlider) {
            targetValueSlider.refresh();
        }
    }

    var colorPicker = new ej.inputs.ColorPicker({
        value:  '#000000',
        mode: 'Palette',
        change : function(args) {
            chart.valueFill = args.currentValue.hex;
            chart.refresh();
        }
    });
    colorPicker.appendTo('#color-picker');

    var colorPicker1 = new ej.inputs.ColorPicker({
        value:  '#000000',
        mode: 'Palette',
        change : function(args) {
            chart.targetColor = args.currentValue.hex;
            chart.refresh();
        }
    });
    colorPicker1.appendTo('#color-picker1');

    var featureType = new ej.dropdowns.DropDownList({
        dataSource: ['Rect', 'Dot'],
        value: 'Rect',
        change : function(args) {
            chart.type = args.value;
            chart.refresh();
        }
    });
    featureType.appendTo('#featureType');

    actualValueSlider = new ej.inputs.Slider({
        value: 270,
        min: 0,
        max: 300,
        step: 10,
        width: '100%',
        tooltip: { isVisible: true},
        change : function(args) {
            chart.dataSource[0].value = args.value;
            chart.refresh();
        }
    });
    actualValueSlider.appendTo('#actualValue');

    targetValueSlider = new ej.inputs.Slider({
        value: 250,
        min: 0,
        max: 300,
        step: 10,
        width: '100%',
        tooltip: { isVisible: true},
        change : function(args) {
            chart.dataSource[0].target = args.value;
            chart.refresh();
        }
    });
    targetValueSlider.appendTo('#targetValue');

    if (ej.base.Browser.isDevice) {
        window.addEventListener('orientationchange', function () {
            setTimeout(refreshPropertyControls, 200);
        });
        window.addEventListener('resize', function () {
            setTimeout(refreshPropertyControls, 200);
        });
        var mobilePropertyButton = document.querySelector('.sb-mobile-setting');
        if (mobilePropertyButton) {
            mobilePropertyButton.addEventListener('click', function () {
                setTimeout(refreshPropertyControls, 200);
            });
        }
        setTimeout(refreshPropertyControls, 0);
    }
};