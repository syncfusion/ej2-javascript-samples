/*jshint esversion: 6 */
/**
 * RichTextEditor Image sample
 */
this.default = function () {
    var defaultRTE = new ej.richtexteditor.RichTextEditor({
        quickToolbarSettings: {
            image: [
                'Replace', 'Align', 'Caption', 'Remove', 'InsertLink', 'OpenImageLink', '-',
                'EditImageLink', 'RemoveImageLink', 'Display', 'AltText', 'Dimension',
                {
                    tooltipText: 'Rotate Left',
                    template: '<button class="e-tbar-btn e-btn" id="roatateLeft"><span class="e-btn-icon e-icons e-rotate-left"></span>'
                },
                {
                    tooltipText: 'Rotate Right',
                    template: '<button class="e-tbar-btn e-btn" id="roatateRight"><span class="e-btn-icon e-icons e-rotate-right"></span>'
                }
            ]
        },
        toolbarClick: onToolbarClick,
    });
    defaultRTE.appendTo('#defaultRTE');
    function onToolbarClick(e) {
        var nodeObj = new ej.richtexteditor.NodeSelection();
        var range = nodeObj.getRange(defaultRTE.contentModule.getDocument());
        var imgEle = nodeObj.getNodeCollection(range)[0];
        var transform;
        if (e.item.tooltipText === 'Rotate Right') {
            transform = (imgEle.style.transform === '') ? 0 :
                parseInt(imgEle.style.transform.split('(')[1].split(')')[0], 10);
            imgEle.style.transform = 'rotate(' + (transform + 90) + 'deg)';
        }
        else if (e.item.tooltipText === 'Rotate Left') {
            transform = (imgEle.style.transform === '') ? 0 :
                Math.abs(parseInt(imgEle.style.transform.split('(')[1].split(')')[0], 10));
            imgEle.style.transform = 'rotate(-' + (transform + 90) + 'deg)';
        }
    }
};