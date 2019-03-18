this.default = function () {
    var timeObj = new ej.inputs.Slider({
        // Set slider minimum and maximum values
        // 3600000 milliseconds = 1 Hour, 3600000 / 6 milliseconds = 10 Minutes
        step: 3600000 / 6,
        // Bind Tooltip change event for custom formatting
        tooltipChange: tooltipChangeHandler,
        // new Date(Year, Month, day, hours, minutes, seconds, millseconds)
        min: new Date(2013, 6, 13, 11).getTime(), max: new Date(2013, 6, 13, 23).getTime(),
        // Set the initial range values for slider
        value: [new Date(2013, 6, 13, 12).getTime(), new Date(2013, 6, 13, 18).getTime()],
        // Initialize tooltip with placement
        tooltip: {
            placement: 'Before', isVisible: true, cssClass: 'e-tooltip-cutomization'
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
    timeObj.appendTo('#default');

    var outObj = new ej.inputs.Slider({
        // Set slider minimum and maximum values
        // new Date(Year, Month, day, hours, minutes, seconds, millseconds)
        min: new Date(2013, 6, 13, 11).getTime(), max: new Date(2013, 6, 13, 23).getTime(),
        // 3600000 milliseconds = 1 Hour, 3600000 / 6 milliseconds = 10 Minutes
        step: 3600000 / 6,
        // Set the initial range values for slider
        value: new Date(2013, 6, 13, 17).getTime(),
        // Bind Tooltip change event for custom formatting
        tooltipChange: tooltipChangeHandler,
        // Initialize tooltip with placement
        tooltip: {
            placement: 'Before', isVisible: true, cssClass: 'e-tooltip-cutomization'
        },
        // Bind ticks event for custom formatting
        renderingTicks: renderingTicksHandler,
        created: function (args) {
            outObj.keyUp({ keyCode: 9, target: outObj.firstHandle });
            outObj.firstHandle.focus();
        },
        // Initialize ticks with placement, largestep, smallstep
        ticks: {
            placement: 'After',
            // 3 * 3600000 milliseconds = 3 Hour
            largeStep: 3 * 3600000,
            smallStep: 3600000, showSmallTicks: true
        },
        // Set the type to render range slider
        type: 'MinRange'
    });
    outObj.appendTo('#out');

    function tooltipChangeHandler(args) {
        /**
          * toLocaleTimeString is predefined javascript date function, which is used to
          * customize the date in different format
          */
        var custom = { hour: '2-digit', minute: '2-digit' };
        // Splitting the range values from the tooltip using space into an array.
        if (args.text.indexOf('-') !== -1) {
            var totalMiliSeconds = args.text.split(' ');
            // First part is the first handle value
            var firstPart = totalMiliSeconds[0];
            // Second part is the second handle value
            var secondPart = totalMiliSeconds[2];

            firstPart = new Date(Number(firstPart)).toLocaleTimeString('en-us', custom);
            secondPart = new Date(Number(secondPart)).toLocaleTimeString('en-us', custom);
            // Assigning our custom text to the tooltip value.
            args.text = firstPart + ' - ' + secondPart;
        } else {
            args.text = 'Until ' + new Date(Number(args.text)).toLocaleTimeString('en-us', custom);
        }
    }

    function renderingTicksHandler(args) {
        var totalMiliSeconds = args.value;
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
        timeObj.refreshTooltip(timeObj.tooltipTarget);
        outObj.refreshTooltip(outObj.tooltipTarget);
    }
};