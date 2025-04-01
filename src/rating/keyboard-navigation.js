this.default = function () {

var basic = new ej.inputs.Rating({ value:3.0, allowReset:true });
basic.appendTo('#rating1');

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


