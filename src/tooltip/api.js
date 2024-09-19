/**
 * Tooltip API sample
 */
this.default = function() {
    //Initialize Button component
    var button = new ej.buttons.Button();
    //Render initialized Button component
    button.appendTo('#default');

    // defined the array of data
    var data = ['Hover', 'Click', 'Auto'];

    //Initialize CheckBox component
    var check = new ej.buttons.CheckBox({
        checked: false,
        change: stickyChange
    });
    //Render initialized CheckBox component
    check.appendTo('#sticky');

    // initialize DropDownList component
    var dropDownListObject = new ej.dropdowns.DropDownList({
        //set the data to dataSource property
        dataSource: data,
        // set placeholder to DropDownList input element
        placeholder: 'Select mode',
        // set change event for mode change in Tooltip
        change: onModeChange
    });
    // render initialized DropDownList
    dropDownListObject.appendTo('#ddlelement');

    // initialize the Numeric Textbox for height
    var height = new ej.inputs.NumericTextBox({
        //set height for Tooltip
        value: 45,
        // set change event for height change in Tooltip
        change: onHeightChange
    });
    // render initialized Numeric Textbox
    height.appendTo('#height');

    // initialize the Numeric Textbox for width
    var width = new ej.inputs.NumericTextBox({
        //set width for Tooltip
        value: 100,
        // set change event for width change in Tooltip
        change: onWidthChange
    });
    // render initialized Numeric Textbox
    width.appendTo('#width');

    //Initialize Tooltip component
    var tooltip = new ej.popups.Tooltip({
        //Set tooltip content
        content: 'Tooltip content',
        //Set open mode for Tooltip
        opensOn: 'Click',
        //Set tooltip position
        position: 'TopCenter',
        windowCollision: true
    });
    //Render initialized Tooltip component
    tooltip.appendTo('#default');

    //change event handler for height change in Tooltip
    function onHeightChange(args) {
        tooltip.height = args.value;
        tooltip.refresh(tooltip.element);
    }

    //change event handler for width change in Tooltip
    function onWidthChange(args) {
        tooltip.width = args.value;
        tooltip.refresh(tooltip.element);
    }

    //change event handler for mode change in Tooltip
    function onModeChange(args) {
        tooltip.opensOn = args.value;
        tooltip.close();
    }

    //change event handler for sticky mode in Tooltip
    function stickyChange(args) {
        tooltip.isSticky = args.checked;
        tooltip.close();
    }

    var rightPane = document.getElementById('right-pane');
    var tooltipWrap = document.getElementsByClassName('e-tooltip-wrap');
    var contentField = document.querySelector('#tooltipContentValue');

    //Attached scroll and click event listners in right pane
    if (rightPane) {
        rightPane.addEventListener('click', onClick);
        rightPane.addEventListener('scroll', onScroll);
    }

    //scroll event handler to close Tooltip while perfomring page scroll
    function onScroll() {
        if (tooltipWrap.length > 0) {
            tooltip.close();
        }
    }

    //click event handler to close Tooltip while navigating to other tabs in right pane
    function onClick(args) {
        if (args.target.parentNode.className === 'e-tab-text') {
            if (tooltipWrap.length > 0) {
                tooltip.close();
            }
        }
    }

    //change event handler for content change
    contentField.addEventListener('change', function() {
        tooltip.content = this.value;
        tooltip.refresh(tooltip.element);
    });
};
