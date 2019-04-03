this.default = function () {
    // Initialize Slider component
    var currencyObj = new ej.inputs.Slider({
        // Set the initial range values for slider
        value: [20, 80],
        // Set slider minimum and maximum values
        min: 0, max: 100,
        // Initialize tooltip with placement and format
        tooltip: {
            placement: 'Before', isVisible: true,
            // Formatting tooltip value in currency with 2-decimal specifier.
            format: 'c2'
        },
        // Initialize ticks with placement, largestep, smallstep and format
        ticks: {
            placement: 'After', largeStep: 25, smallStep: 5, showSmallTicks: true,
            // Formatting ticks value in currency with 3-decimal specifier.
            format: 'c1'
        },
        // Set the type to render range slider
        type: 'Range'
    });
    currencyObj.appendTo('#currency');

    // Initialize Slider component
    var kilometerObj = new ej.inputs.Slider({
        // Set the initial range values for slider
        value: [1100, 1850],
        // Set slider minimum and maximum values
        min: 900, max: 2100,
        // Initialize tooltip with placement and format
        tooltip: {
            isVisible: true,
            placement: 'Before',
            /**
             * Formatting tooltip value in numeric with 2-decimal specifier if the any decimal values occurred.
             * Zeros will be filled if the values are not in 4-digits in the fractional part.
             */
            format: '00##.## km'
        },
        // Initialize ticks with placement, largestep, smallstep and format
        ticks: {
            placement: 'After',
            largeStep: 400,
            smallStep: 100,
            showSmallTicks: true,
            /**
             * Formatting ticks value in numeric with 2-decimal specifier if the any decimal values occurred.
             * Zeros will be filled if the values are not in 4-digits in the fractional part.
             */
            format: '00##.## km'
        },
        // Set the type to render range slider
        type: 'Range'
    });
    kilometerObj.appendTo('#kilometer');

    // Initialize Slider component
    var timeObj = new ej.inputs.Slider({
        // Set slider minimum and maximum values
        // new Date(Year, Month, day, hours, minutes, seconds, millseconds)
        min: new Date(2013, 6, 13, 11).getTime(), max: new Date(2013, 6, 13, 23).getTime(),
        // 3600000 milliseconds = 1 Hour, 3600000 / 6 milliseconds = 10 Minutes
        step: 3600000 / 6,
        // Set the initial range values for slider
        value: [new Date(2013, 6, 13, 12).getTime(), new Date(2013, 6, 13, 18).getTime()],
        // Bind Tooltip change event for custom formatting
        tooltipChange: tooltipChangeHandler,
        // Initialize tooltip with placement
        tooltip: {
            placement: 'Before', isVisible: true
        },
        // Bind ticks event for custom formatting
        renderingTicks: renderingTicksHandler,
        // Initialize ticks with placement, largestep, smallstep
        ticks: {
            placement: 'After',
            // 3 * 3600000 milliseconds = 3 Hour
            largeStep: 3 * 3600000,
            smallStep: 3600000, showSmallTicks: true
        },
        // Set the type to render range slider
        type: 'Range'
    });
    timeObj.appendTo('#time');

    function tooltipChangeHandler(args) {
        // Splitting the range values from the tooltip using space into an array.
        var totalMiliSeconds = args.text.split(' ');
        // First part is the first handle value
        var firstPart = totalMiliSeconds[0];
        // Second part is the second handle value
        var secondPart = totalMiliSeconds[2];
        /**
         * toLocaleTimeString is predefined javascript date function, which is used to
         * customize the date in different format
         */
        var custom = { hour: '2-digit', minute: '2-digit' };
        firstPart = new Date(Number(firstPart)).toLocaleTimeString('en-us', custom);
        secondPart = new Date(Number(secondPart)).toLocaleTimeString('en-us', custom);
        // Assigning our custom text to the tooltip value.
        args.text = firstPart + ' - ' + secondPart;
    }

    function renderingTicksHandler(args) {
        var totalMiliSeconds = Number(args.value);
        /**
         * toLocaleTimeString is predefined javascript date function, which is used to
         * customize the date in different format
         */
        var custom = { hour: '2-digit', minute: '2-digit' };
        // Assigning our custom text to the tick value.
        args.text = new Date(totalMiliSeconds).toLocaleTimeString('en-us', custom);
    }

    if (document.getElementById('right-pane')) {
        document.getElementById('right-pane').addEventListener('scroll', onScroll);
    }

    // Handler used to reposition the tooltip on page scroll
    function onScroll() {
        var slider = [currencyObj, kilometerObj, timeObj];
        slider.forEach(function (slider) {
            // Refreshing each slider tooltip object position
            slider.refreshTooltip(slider.tooltipTarget);
        });
    }

};
