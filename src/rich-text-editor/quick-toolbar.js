/*jshint esversion: 6 */
/**
 * Rich Text Editor Quick toolbar sample
 */
this.default = function() {
    var defaultRTE = new ej.richtexteditor.RichTextEditor({
        quickToolbarSettings: {
            image: [
                'Replace', 'Align', 'Caption', 'Remove', 'InsertLink', '|', 'Display', 'AltText', 'Dimension',
                {
                    tooltipText: 'Rotate Left',
                    template: '<button class="e-tbar-btn e-btn" id="roatateLeft"><span class="e-btn-icon e-icons e-roatate-left"></span>'
                },
                {
                    tooltipText: 'Rotate Right',
                    template: '<button class="e-tbar-btn e-btn" id="roatateRight"><span class="e-btn-icon e-icons e-roatate-right"></span>'
                }
            ]
        },
        created: oncreate
    });
    defaultRTE.appendTo('#defaultRTE');
    function oncreate() {
        document.getElementById('rteImageID').onclick = function (e) {
            var rotateLeft = document.getElementById('roatateLeft');
            var rotateRight = document.getElementById('roatateRight');
            rotateLeft.onclick = function (e) {
                var imgEle = document.getElementById('rteImageID');
                var transform = Math.abs(parseInt(imgEle.style.transform.split('(')[1].split(')')[0], 10));
                imgEle.style.transform = 'rotate(-' + (transform + 90) + 'deg)';
            };
            rotateRight.onclick = function (e) {
                var imgEle = document.getElementById('rteImageID');
                var transform = parseInt(imgEle.style.transform.split('(')[1].split(')')[0], 10);
                imgEle.style.transform = 'rotate(' + (transform + 90) + 'deg)';
            };
        };
    }
};
    