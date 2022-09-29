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
			imageEditorObj.open('src/image-editor/images/bridge.png');
		}
		imageEditorObj.theme = window.location.href.split('#')[1].split('/')[1];
	}
  });
  imageEditorObj.appendTo('#imageeditor');
};
