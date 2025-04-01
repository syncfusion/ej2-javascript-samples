this.default = function () {

var fontIcon = new ej.inputs.Rating({
    emptyTemplate: '<span class="custom-font sf-icon-heart"></span>',
    value: 3.0
});
fontIcon.appendTo('#rating1');

var svgIcon = new ej.inputs.Rating({
    emptyTemplate: '#emptyTemplate',
    fullTemplate: '#fullTemplate',
    enableAnimation: false,
    value: 3.0
});
svgIcon.appendTo('#rating2');

var emojiIcon = new ej.inputs.Rating({
    emptyTemplate: '#template',
    enableSingleSelection: true,
    enableAnimation: false,
    value: 3.0
});
emojiIcon.appendTo('#rating3');

var custom = new ej.inputs.Rating({
    cssClass:'custom-icon',
    value: 3.0,
    enableAnimation: false
});
custom.appendTo('#rating4');
    
if (document.getElementById('right-pane')) {
    document.getElementById('right-pane').addEventListener('scroll', hideToolTipOnScroll);
  }
function hideToolTipOnScroll() {
    var tooltipElement = document.querySelector('.e-rating-tooltip');
    if (tooltipElement && ej.base.Browser.isDevice) {
        tooltipElement.style.display = 'none';
    }
}
};
