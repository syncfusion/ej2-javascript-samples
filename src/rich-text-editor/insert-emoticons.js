/*jshint esversion: 6 */
/**
 * RichTextEditor insert emoticons sample
 */
this.default = function() {
    var tabObj;
    var selection = new ej.richtexteditor.NodeSelection();
    var range;
    var dialog;
    var customBtn;
    var dialogCtn;
    var saveSelection;
    var defaultRTE = new ej.richtexteditor.RichTextEditor({
        toolbarSettings: {
            items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', 'OrderedList',
                'UnorderedList', '|', 'CreateLink', 'Image', '|', 'SourceCode',
                {
                    tooltipText: 'Insert Emoticon',
                    template: '<button class="e-tbar-btn e-btn" tabindex="-1" id="emot_tbar"  style="width:100%"><div class="e-tbar-btn-text" style="font-weight: 500;">&#128578;</div></button>'
                }, '|', 'Undo', 'Redo'
            ]
        },
        created: onCreate,
        actionComplete: actionCompleteHandler
    });
    defaultRTE.appendTo('#defaultRTE');

    function onCreate() {
        customBtn = defaultRTE.element.querySelector('#emot_tbar');
        dialogCtn =  '<div id="emotIcons"></div>';
        dialog = new ej.popups.Dialog({
            header: 'Custom Emoticons',
            content: dialogCtn,
            target: document.getElementById('rteSection'),
            showCloseIcon: false,
            isModal: true,
            width: '43%',
            height: 'auto',
            overlayClick: dialogOverlay,
            buttons: [
                { buttonModel: { content: "Insert", isPrimary: true }, click: onInsert },
                { buttonModel: { content: 'Cancel' }, click: dialogOverlay }
            ],
            created: onDialogCreate,
            open : onOpen
        });
        dialog.appendTo('#emoticonTbarDialog');
        dialog.hide();
        customBtn.onclick = function (e) {
            
            defaultRTE.contentModule.getEditPanel().focus();
            dialog.element.style.display = '';
            range = selection.getRange(document);
            saveSelection = selection.save(range, document);
            dialog.show();
        };
    }
    function createTab() {
        tabObj = new ej.navigations.Tab({
            items: [
                {
                    header: { 'text': '&#128578;' },
                    content:  '#rteEmoticons-smiley'
                },
                {
                    header: { 'text': '&#128053;' },
                    content: '#rteEmoticons-animal'
                }
            ]
        });
        tabObj.appendTo('#emotIcons');
    }
    function onDialogCreate() {
            createTab();
        var dialogCtn = document.getElementById('emoticonTbarDialog');
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
    function onOpen() {
        document.getElementById("emotIcons").ej2_instances[0].refresh();
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
          defaultRTE.getToolbar().querySelector('#emot_tbar').parentElement.classList.add('e-overlay');
        } else if (e.requestType === 'Preview') {
          defaultRTE.getToolbar().querySelector('#emot_tbar').parentElement.classList.remove('e-overlay');
        }
    }
};      