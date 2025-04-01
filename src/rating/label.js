this.default = function () {

var rightLabelPosition = new ej.inputs.Rating({
    showLabel: true,
    value: 3.0
});
rightLabelPosition.appendTo('#rating1');

var leftLabelPosition = new ej.inputs.Rating({
    showLabel: true,
    labelPosition: 'Left',
    value: 3.0
});
leftLabelPosition.appendTo('#rating2');

var template = new ej.inputs.Rating({
    showLabel: true,
    labelTemplate: '<span>${value} out of 5</span>',
    value: 3.0
});
template.appendTo('#rating3');

var topLabelPosition = new ej.inputs.Rating({
    showLabel: true,
    labelPosition: 'Top',
    value: 3.0
});
topLabelPosition.appendTo('#rating4');

var bottomLabelPosition = new ej.inputs.Rating({
    showLabel: true,
    labelPosition: 'Bottom',
    value: 3.0
});
bottomLabelPosition.appendTo('#rating5');
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

