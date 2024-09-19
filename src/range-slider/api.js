this.default = function () {
    var sliderObj = new ej.inputs.Slider({
        value: 30,
        min: 0,
        max: 100,
        tooltip: { isVisible: true, placement: 'Before', showOn: 'Hover' },
        ticks: { placement: 'After', largeStep: 20 },
        type: 'MinRange',
        change: function (args) {
            sliderValue.value =  args.value;
        }
    });
    sliderObj.appendTo('#slider');


    var sliderValue = new ej.inputs.NumericTextBox({
        value: 30,
        format: 'n0',
        change: function (args) {
            sliderObj.value = args.value;
        }
    });
    sliderValue.appendTo('#value');

    var sliderMin = new ej.inputs.NumericTextBox({
        value: 0,
        format: 'n0',
        change: function (args) {
            sliderObj.min = args.value;
        }
    });
    sliderMin.appendTo('#min');

    var sliderMax = new ej.inputs.NumericTextBox({
        value: 100,
        format: 'n0',
        change: function (args) {
            sliderObj.max = args.value;
        }
    });
    sliderMax.appendTo('#max');

    var sliderStep = new ej.inputs.NumericTextBox({
        value: 1,
        format: 'n0',
        change: function (args) {
            sliderObj.step = args.value;
        }
    });
    sliderStep.appendTo('#step');

    var button = new ej.buttons.CheckBox({
        checked: false,
        label: 'Show Buttons',
        change: function (args) {
            sliderObj.showButtons = args.checked;
        }
    });
    button.appendTo('#button');

    var buttonMb = new ej.buttons.CheckBox({
        checked: false,
        change: function (args) {
            sliderObj.showButtons = args.checked;
        }
    });
    buttonMb.appendTo('#mb-button');

    var orientationMb = new ej.buttons.CheckBox({
        checked: false,
        change: function (args) {
            sliderObj.orientation = args.checked ? 'Vertical' : 'Horizontal';
        }
    });
    orientationMb.appendTo('#mb-orientation');

    var readOnlyMb = new ej.buttons.CheckBox({
        checked: false,
        change: function (args) {
            sliderObj.readonly = args.checked;
        }
    });
    readOnlyMb.appendTo('#mb-readOnly');

    var disabledMb = new ej.buttons.CheckBox({
        checked: false,
        change: function (args) {
            sliderObj.enabled = !args.checked;
        }
    });
    disabledMb.appendTo('#mb-disabled');

    var orientation = new ej.buttons.CheckBox({
        checked: false,
        label: 'Vertical Orientation',
        change: function (args) {
            sliderObj.orientation = args.checked ? 'Vertical' : 'Horizontal';
        }
    });
    orientation.appendTo('#orientation');

    var readOnly = new ej.buttons.CheckBox({
        checked: false,
        label: 'Readonly',
        change: function (args) {
            sliderObj.readonly = args.checked;
        }
    });
    readOnly.appendTo('#readOnly');

    var disabled = new ej.buttons.CheckBox({
        checked: false,
        label: 'Disabled',
        change: function (args) {
            sliderObj.enabled = !args.checked;
        }
    });
    disabled.appendTo('#disabled');

    if (document.getElementById('right-pane')) {
        document.getElementById('right-pane').addEventListener('scroll', onScroll);
    }

    function onScroll() {
        var slider = [sliderObj];
        slider.forEach(function (slider) {
            // Refreshing each slider tooltip object position
            slider.refreshTooltip(slider.tooltipTarget);
        });
    }
};
