this.default = function () {
    var defaultObj = new ej.inputs.Slider({
        value: 30,
        showButtons: true,
        tooltip: { placement: 'Before', isVisible: true, showOn: 'Focus' }
    });
    defaultObj.appendTo('#default');
    var rangeObj = new ej.inputs.Slider({
        value: [30, 70],
        type: 'Range',
        showButtons: true,
        tooltip: { placement: 'Before', isVisible: true, showOn: 'Focus' }
    });
    rangeObj.appendTo('#range');
    var placementObj = new ej.dropdowns.DropDownList({
        index: 0,
        popupHeight: '200px',
        change: function () {
            defaultObj.tooltip = { placement: placementObj.value };
            defaultObj.dataBind();
            rangeObj.tooltip = { placement: placementObj.value };
            rangeObj.dataBind();
        }
    });
    placementObj.appendTo('#placement');

    var showonObj = new ej.dropdowns.DropDownList({
        index: 1,
        popupHeight: '200px',
        change: function () {
            defaultObj.tooltip = { showOn: showonObj.value };
            defaultObj.dataBind();
            rangeObj.tooltip = { showOn: showonObj.value };
            rangeObj.dataBind();
        }
    });
    showonObj.appendTo('#showon');

    if (document.getElementById('right-pane')) {
        document.getElementById('right-pane').addEventListener('scroll', onScroll);
    }

    // Handler used to reposition the tooltip on page scroll
    function onScroll() {
        var slider = [defaultObj, rangeObj];
        slider.forEach(function (slider) {
            // Refreshing each slider tooltip object position
            slider.refreshTooltip(slider.tooltipTarget);
        });
    }

};