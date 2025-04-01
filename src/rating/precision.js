this.default = function () {
    
var full = new ej.inputs.Rating({ value: 3.0 });
full.appendTo('#rating1');

var half = new ej.inputs.Rating({ precision: 'Half', value:2.5});
half.appendTo('#rating2');

var quarter = new ej.inputs.Rating({ precision: 'Quarter', value:2.75});
quarter.appendTo('#rating3');

var exact = new ej.inputs.Rating({ precision: 'Exact', value:2.3});
exact.appendTo('#rating4');
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

