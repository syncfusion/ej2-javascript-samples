/**
 * Limits sample
 */
this.default = function () {
    var minRangeObj = new ej.inputs.Slider({
        min: 0,
        value: 25,
        max: 100,
        type: 'MinRange',
        ticks: { placement: 'After', largeStep: 20, smallStep: 5, showSmallTicks: true },
        tooltip: { isVisible: true, placement: 'Before' },
        limits: { enabled: true, minStart: 10, minEnd: 40 }
    });
    minRangeObj.appendTo('#minRange');
    var rangeObj = new ej.inputs.Slider({
        min: 0,
        value: [25, 75],
        max: 100,
        type: 'Range',
        ticks: { placement: 'After', largeStep: 20, smallStep: 5, showSmallTicks: true },
        tooltip: { isVisible: true, placement: 'Before' },
        limits: { enabled: true, minStart: 10, minEnd: 40, maxStart: 60, maxEnd: 90 }
    });
    rangeObj.appendTo('#range');

    // Initialize NumericTextBox
    var minStart = new ej.inputs.NumericTextBox({
        value: 10,
        min: 0,
        max: 100,
        change: minStartChange
    });
    minStart.appendTo('#minStart');

    var minEnd = new ej.inputs.NumericTextBox({
        value: 40,
        min: 0,
        max: 100,
        change: minEndChange
    });
    minEnd.appendTo('#minEnd');

    var maxStart = new ej.inputs.NumericTextBox({
        value: 60,
        min: 0,
        max: 100,
        change: maxStartChange
    });
    maxStart.appendTo('#maxStart');

    var maxEnd = new ej.inputs.NumericTextBox({
        value: 90,
        min: 0,
        max: 100,
        change: maxEndChange
    });
    maxEnd.appendTo('#maxEnd');

    // Initialize Checkbox
    var fixedOne = new ej.buttons.CheckBox({ change: fixOne });
    fixedOne.appendTo('#fixedOne');

    var fixedSecond = new ej.buttons.CheckBox({ change: fixSecond });
    fixedSecond.appendTo('#fixedSecond');

    // Eventlisteners to lock first handle of the both sliders
    function fixOne(args) {
        minRangeObj.limits.startHandleFixed = args.checked;
        rangeObj.limits.startHandleFixed = args.checked;
    }

    // Eventlisteners to lock second handle of the both sliders
    function fixSecond(args) {
        minRangeObj.limits.endHandleFixed = args.checked;
        rangeObj.limits.endHandleFixed = args.checked;
    }

    // Eventlisteners to change limit values for both sliders
    function minStartChange(args) {
        minRangeObj.limits.minStart = args.value;
        rangeObj.limits.minStart = args.value;
    }

    function minEndChange(args) {
        minRangeObj.limits.minEnd = args.value;
        rangeObj.limits.minEnd = args.value;
    }

    function maxStartChange(args) {
        minRangeObj.limits.maxStart = args.value;
        rangeObj.limits.maxStart = args.value;
    }

    function maxEndChange(args) {
        minRangeObj.limits.maxEnd = args.value;
        rangeObj.limits.maxEnd = args.value;
    }

    if (document.getElementById('right-pane')) {
        document.getElementById('right-pane').addEventListener('scroll', onScroll);
    }

    function onScroll() {
        var slider = [minRangeObj, rangeObj];
        slider.forEach(function (slider) {
            // Refreshing each slider tooltip object position
            slider.refreshTooltip(slider.tooltipTarget);
        });
    }
};