/**
 * Default Image Editor sample
 */

this.default = function () {
  var imageEditorObj = new ej.imageeditor.ImageEditor({
    width: '100%',
    height: '100%',
	created: function () {
		if (ej.base.Browser.isDevice) {
			imageEditorObj.open('src/image-editor/images/flower.png');
		} else {
			imageEditorObj.open('src/image-editor/images/default.png');
		}
		if (imageEditorObj.theme && window.location.href.split('#')[1]) {
			imageEditorObj.theme = window.location.href.split('#')[1].split('/')[1];
		}	
	}
  });
    if (document.getElementById('right-pane')) {
        document.getElementById('right-pane').addEventListener('scroll', onScroll);
    }
    // Handler used to reposition the tooltip on page scroll
    function onScroll() {
        if (document.getElementById('imageeditor_sliderWrapper')) {
            var slider = ej.base.getComponent(document.getElementById('imageeditor_sliderWrapper'), 'slider');
            slider.refreshTooltip(slider.tooltipTarget);
        }
    }
  imageEditorObj.appendTo('#imageeditor');
};
