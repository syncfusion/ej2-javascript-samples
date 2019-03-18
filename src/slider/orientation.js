this.default = function () {
    var defaultObj = new ej.inputs.Slider({
        value: 30,
        orientation: 'Vertical'
    });
    defaultObj.appendTo('#default');
    var minRangeObj = new ej.inputs.Slider({
        value: 30,
        type: 'MinRange',
        orientation: 'Vertical'
    });
    minRangeObj.appendTo('#minrange');
    var rangeObj = new ej.inputs.Slider({
        value: [30, 70],
        type: 'Range',
        orientation: 'Vertical'
    });
    rangeObj.appendTo('#range');
    // Initialize Checkbox components
    var enableTicks = new ej.buttons.CheckBox({ checked: false, change: enableDisableTicks });
    enableTicks.appendTo('#ticks');

    var enableTooltip = new ej.buttons.CheckBox({ checked: false, change: enableDisableTooltip });
    enableTooltip.appendTo('#tooltip');

    // Array of slider objects
    var sliders = [defaultObj, minRangeObj, rangeObj];

    // Checkbox change handlers
    function enableDisableTicks(args) {
        var ticks = { placement: args.checked ? 'Before' : 'None', largeStep: 20, smallStep: 5, showSmallTicks: true };
        sliders.forEach(function (slider) {
            // Assigning ticks values to each slider
            slider.ticks = ticks;
        });
    }

    function enableDisableTooltip(args) {
        var tooltip = { isVisible: args.checked, placement: 'Before' };
        sliders.forEach(function (slider) {
            // Assigning tooltip values to each slider
            slider.tooltip = tooltip;
        });
    }

    if (document.getElementById('right-pane')) {
        document.getElementById('right-pane').addEventListener('scroll', onScroll);
    }

    function onScroll() {
        var slider = [defaultObj, minRangeObj, rangeObj];
        slider.forEach(function (slider) {
            // Refreshing each slider tooltip object position
            slider.refreshTooltip(slider.tooltipTarget);
        });
    }
};