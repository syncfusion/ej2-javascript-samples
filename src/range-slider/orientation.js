this.default = function () {
    var defaultObj = new ej.inputs.Slider({
        value: 30,
        orientation: 'Vertical',
        ticks : { placement:  'Before' , largeStep: 20, smallStep: 5, showSmallTicks: true },
        tooltip : { isVisible: true, placement: 'Before' }
    });
    defaultObj.appendTo('#default');
    var minRangeObj = new ej.inputs.Slider({
        value: 30,
        type: 'MinRange',
        orientation: 'Vertical',
        ticks : { placement:  'Before' , largeStep: 20, smallStep: 5, showSmallTicks: true },
        tooltip : { isVisible: true, placement: 'Before' }
    });
    minRangeObj.appendTo('#minrange');
    var rangeObj = new ej.inputs.Slider({
        value: [30, 70],
        type: 'Range',
        orientation: 'Vertical',
        ticks : { placement:  'Before' , largeStep: 20, smallStep: 5, showSmallTicks: true },
        tooltip : { isVisible: true, placement: 'Before' }
    });
    rangeObj.appendTo('#range');
    var reverseObj = new ej.inputs.Slider({
        value: [30, 70],
        min:100,
        max:0,
        type: 'Range',
        orientation: 'Vertical',
        ticks : { placement:  'Before' , largeStep: 20, smallStep: 5, showSmallTicks: true },
        tooltip : { isVisible: true, placement: 'Before' }
    });
    reverseObj.appendTo('#reversible');
    // Initialize Checkbox components
    var enableTicks = new ej.buttons.CheckBox({ checked: true, change: enableDisableTicks });
    enableTicks.appendTo('#ticks');

    var enableTooltip = new ej.buttons.CheckBox({ checked: true, change: enableDisableTooltip });
    enableTooltip.appendTo('#tooltip');

    // Array of slider objects
    var sliders = [defaultObj, minRangeObj, rangeObj, reverseObj];

    // Checkbox change handlers
    function enableDisableTicks(args) {
        sliders.forEach(function (slider) {
            // Assigning ticks values to each slider
            slider.ticks.placement = args.checked ? 'Before' : 'None';
        });
    }

    function enableDisableTooltip(args) {
        sliders.forEach(function (slider) {
            // Assigning tooltip values to each slider
            slider.tooltip.isVisible = args.checked;
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