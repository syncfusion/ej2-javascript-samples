this.default = function () {
    var defaultObj = new ej.inputs.Slider({
        min: 10,
        value: 30,
        max: 90,
        step: 5,
        ticks: { placement: 'Before', largeStep: 20, smallStep: 5, showSmallTicks: true }
    });
    defaultObj.appendTo('#default');
    var rangeObj = new ej.inputs.Slider({
        min: 10,
        max: 90,
        value: [30, 70],
        step: 5,
        type: 'Range',
        ticks: { placement: 'Before', largeStep: 20, smallStep: 5, showSmallTicks: true }
    });
    rangeObj.appendTo('#range');
    var listObj = new ej.dropdowns.DropDownList({
        index: 0,
        popupHeight: '200px',
        change: function () {
            defaultObj.ticks = { placement: listObj.value };
            defaultObj.dataBind();
            rangeObj.ticks = { placement: listObj.value };
            rangeObj.dataBind();
        }
    });
    listObj.appendTo('#drop');

      // Initialize CheckBox Component
      var checkBoxObj = new ej.buttons.CheckBox({
        checked: false,
        // Bind change event
        change: onChange
    });
    checkBoxObj.appendTo('#disabled');

    // Handler used to enable or disable sliders
    function onChange(args) {
        defaultObj.enabled = !args.checked;
        rangeObj.enabled = !args.checked;
    }
};