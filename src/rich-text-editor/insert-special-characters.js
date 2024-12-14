/*jshint esversion: 6 */
/**
 * Rich Text Editor insert special characters sample
 */
this.default = function() {
    var selection = new ej.richtexteditor.NodeSelection();
    var range;
    var dialog;
    var customBtn;
    var dialogCtn;
    var saveSelection;
    var defaultRTE = new ej.richtexteditor.RichTextEditor({
        toolbarSettings: {
            items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', 'Blockquote', 'OrderedList',
                'UnorderedList', '|', 'CreateLink', 'Image', '|', 'SourceCode',
                {
                    tooltipText: 'Insert Symbol',
                    template: '<button class="e-tbar-btn e-btn" tabindex="-1" id="custom_tbar"  style="width:100%"><div class="e-tbar-btn-text" style="font-weight: 400;"> &#937;</div></button>'
                }, '|', 'Undo', 'Redo'
            ]
        },
        created: onCreate,
        actionComplete: actionCompleteHandler
    });
    defaultRTE.appendTo('#defaultRTE');

    function onCreate() {
        customBtn = defaultRTE.element.querySelector('#custom_tbar');
        dialogCtn = document.getElementById('rteSpecial_char');
        dialog = new ej.popups.Dialog({
            header: 'Special Characters',
            content: dialogCtn,
            target: document.getElementById('rteSection'),
            showCloseIcon: false,
            isModal: true,
            width: '43%',
            height: 'auto',
            visible: false,
            overlayClick: dialogOverlay,
            buttons: [
                { buttonModel: { content: "Insert", isPrimary: true }, click: onInsert },
                { buttonModel: { content: 'Cancel' }, click: dialogOverlay }
            ],
            created: onDialogCreate,
        });
        dialog.appendTo('#customTbarDialog');
        dialog.hide();
        customBtn.onclick = function (e) {
            defaultRTE.contentModule.getEditPanel().focus();
            dialog.element.style.display = '';
            range = selection.getRange(document);
            saveSelection = selection.save(range, document);
            dialog.show();
        };
    }
    function onDialogCreate() {
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
    }
    function onInsert() {
        var activeEle = dialog.element.querySelector('.char_block.e-active');
        if (activeEle) {
            if (defaultRTE.formatter.getUndoRedoStack().length === 0) {
                defaultRTE.formatter.saveData();
            }
            saveSelection.restore();
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
    function actionCompleteHandler(e) {
        if (e.requestType === 'SourceCode') {
          defaultRTE.getToolbar().querySelector('#custom_tbar').parentElement.classList.add('e-overlay');
        } else if (e.requestType === 'Preview') {
          defaultRTE.getToolbar().querySelector('#custom_tbar').parentElement.classList.remove('e-overlay');
        }
    }
};
    