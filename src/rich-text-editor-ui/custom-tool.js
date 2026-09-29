this.default = function () {
    var range;
    var dialog;
    var customBtn;
    var dialogCtn;
    var saveSelection;

    var defaultRTE = new ej.richtexteditorui.RichTextEditorUI({
        value: '<p style="margin-right:10px">The custom command "insert special character" is configured as the last item of the toolbar. Click on the command and choose the special character you want to include from the popup.</p>',
        valueFormat: 'html',
        toolbarSettings: {
            items: [
                'Bold', 'Italic', 'Underline', '|',
                'Formats', 'Alignment',
                'NumberFormatList', 'BulletFormatList', '|',
                'Link', 'Image', '|',
                {
                    id: 'custom_tbar',
                    tooltipText: 'Insert Symbol',
                    actionId: 'insertSymbol',
                    template:
                        '<button class="e-tbar-btn e-btn" tabindex="-1" id="custom_tbar" style="width:100%">' +
                        '<div class="e-tbar-btn-text" style="font-weight:400;">Ω</div>' +
                        '</button>'
                },
                '|',
                'Undo',
                'Redo'
            ]
        },
        created: onCreate,
        actionComplete: onActionComplete
    });

    defaultRTE.appendTo('#defaultRTE');

    function onActionComplete(args) {
        if (args.requestType === 'SourceCode') {
            defaultRTE.toolbarModule.element
                .querySelector('#custom_tbar')
                .parentElement.classList.add('e-overlay');
        } else if (args.requestType === 'Preview') {
            defaultRTE.toolbarModule.element
                .querySelector('#custom_tbar')
                .parentElement.classList.remove('e-overlay');
        }
    }

    function onCreate() {

        customBtn = defaultRTE.element.querySelector('#custom_tbar');
        dialogCtn = document.getElementById('rteSpecial_char');

        dialog = new ej.popups.Dialog({
            header: 'Special Characters',
            content: dialogCtn,
            target: document.getElementById('rteSection'),
            showCloseIcon: false,
            isModal: true,
            width: '45%',
            height: 'auto',
            visible: false,
            overlayClick: dialogOverlay,
            buttons: [
                {
                    buttonModel: {
                        content: 'Insert',
                        isPrimary: true
                    },
                    click: onInsert
                },
                {
                    buttonModel: {
                        content: 'Cancel'
                    },
                    click: dialogOverlay
                }
            ],
            created: onDialogCreate
        });

        dialog.appendTo('#customTbarDialog');
        dialog.hide();

        customBtn.onclick = function () {

            defaultRTE.focus();

            dialog.element.style.display = '';

            var sel = window.getSelection();

            if (sel && sel.rangeCount > 0) {
                range = sel.getRangeAt(0);
            }

            saveSelection = range ? range.cloneRange() : null;

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

        if (activeEle && saveSelection && defaultRTE.inputElement) {

            defaultRTE.focus();

            var select = window.getSelection();

            select.removeAllRanges();
            select.addRange(saveSelection);

            defaultRTE.baseEditorCore.editor.commands.insertText(
                activeEle.textContent
            );
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
};