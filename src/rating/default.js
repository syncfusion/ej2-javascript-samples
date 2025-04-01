this.default = function () {

var basic = new ej.inputs.Rating({});
basic.appendTo('#rating1');

var reset = new ej.inputs.Rating({
    allowReset: true,
    value: 3.0
});
reset.appendTo('#rating2');

var single = new ej.inputs.Rating({
    enableSingleSelection: true,
    value: 3.0
});
single.appendTo('#rating3');

var read = new ej.inputs.Rating({
    readOnly: true,
    value: 3.0
});
read.appendTo('#rating4');

var disable = new ej.inputs.Rating({
    disabled: true,
    value: 3.0
});
disable.appendTo('#rating5');

var itemCount = new ej.inputs.Rating({
    itemsCount: 8,
    value: 3.0
});
itemCount.appendTo('#rating6');
if (document.getElementById('right-pane')) {
    document.getElementById('right-pane').addEventListener('scroll', hideTooltipOnScroll);
  }

function hideTooltipOnScroll() {
    var tooltipElement = document.querySelector('.e-rating-tooltip');
    if (tooltipElement && ej.base.Browser.isDevice) {
        tooltipElement.style.display = 'none';
    }
}
};
