/*jshint esversion: 6 */
/**
 * RichTextEditor Custom toolbar sample
 */
this.default = function() {
    var defaultRTE = new ej.richtexteditor.RichTextEditor({
        toolbarSettings: {
            items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', 'OrderedList',
                'UnorderedList', '|', 'CreateLink', 'Image', '|', 'SourceCode',
                {
                    tooltipText: 'Insert Symbol',
                    template: '<button class="e-tbar-btn e-btn" tabindex="-1" id="custom_tbar"  style="width:100%"><div class="e-tbar-btn-text" style="font-weight: 500;"> &#937;</div></button>'
                }, '|', 'Undo', 'Redo'
            ]
        },
        created: onCreate
    });
    defaultRTE.appendTo('#defaultRTE');
    var selection = new ej.richtexteditor.NodeSelection();
    var ranges;
    function onCreate() {
        var customBtn = defaultRTE.element.querySelector('#custom_tbar');
        var dialogCtn = document.getElementById('rteSpecial_char');
        // Initialization of Dialog
        var dialog = new ej.popups.Dialog({
            header: 'Special Characters',
            content: dialogCtn,
            target: document.getElementById('rteSection'),
            showCloseIcon: false,
            isModal: true,
            height: 'auto',
            overlayClick: dialogOverlay,
            buttons: [{ buttonModel: { content: "Insert", isPrimary: true }, click: onInsert }, { buttonModel: { content: 'Cancel' }, click: dialogOverlay }]
        });
        // Render initialized Dialog
        dialog.appendTo('#customTbarDialog');
        dialog.hide();
        customBtn.onclick = function (e) {
            dialog.element.style.display = '';
            ranges = selection.getRange(document);
            dialog.width = '43%';
            dialog.dataBind();
            dialog.show();
            var dialogCtn = document.getElementById('rteSpecial_char');
            dialogCtn.onclick = function (e) {
                var target = e.target;
                var activeEle = dialog.element.querySelector('.char_block.e-active');
                if (target.classList.contains('char_block')) {
                    target.classList.add('e-active');
                    if (activeEle) {
                        activeEle.classList.remove('e-active');
                    }
                }
            };
            customBtn.onclick = function (e) {
                defaultRTE.focusIn();
                dialog.element.style.display = '';
                ranges = selection.getRange(document);
                dialog.width = defaultRTE.element.offsetWidth * 0.5;
                dialog.dataBind();
                dialog.show();
            };
        };
        function onInsert() {
            var activeEle = dialog.element.querySelector('.char_block.e-active');
            if (activeEle) {
                if (defaultRTE.formatter.getUndoRedoStack().length === 0) {
                    defaultRTE.formatter.saveData();
                }
                defaultRTE.executeCommand('insertText', activeEle.textContent);
                defaultRTE.formatter.saveData();
                defaultRTE.formatter.enableUndo(defaultRTE);
            }
            dialogOverlay();
        }
        function dialogOverlay() {
            var activeEle = dialog.element.querySelector('.char_block.e-active');
            if (activeEle) {
                activeEle.classList.remove('e-active');
            }
            dialog.hide();
        }
    }
};
    