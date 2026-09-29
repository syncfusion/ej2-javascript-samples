this.default = function () {
    var editorObj;

    var dialogObj = new ej.popups.Dialog({
        header: 'Compose Message',
        target: document.querySelector('.sample-container'),
        animationSettings: { effect: 'None' },
        showCloseIcon: true,
        width: '600px',
        height: '300px',
        buttons: [
            {
                click: dlgButtonClick,
                buttonModel: {
                    content: 'Send',
                    isPrimary: true
                }
            },
            {
                click: dlgCancel,
                buttonModel: {
                    content: 'Cancel'
                }
            }
        ],
        open: dialogOpen,
        close: dialogClose
    });

    dialogObj.appendTo('#editorDialog');

    function initializeEditor() {

        if (!editorObj) {

            var contentDiv = document.createElement('div');
            contentDiv.id = 'dialogEditorContent';

            var dialogContent =
                document.querySelector('#editorDialog .e-dlg-content');

            if (dialogContent) {

                dialogContent.appendChild(contentDiv);

                editorObj = new ej.richtexteditorui.RichTextEditorUI({
                    placeholder: 'Write your message...',
                    toolbarSettings: {
                        items: [
                            'Bold',
                            'Italic',
                            'Underline',
                            '|',
                            'Formats',
                            'BulletFormatList',
                            'NumberFormatList',
                            '|',
                            'Link',
                            'Undo',
                            'Redo'
                        ]
                    }
                });

                editorObj.appendTo('#dialogEditorContent');
            }
        }
    }

    var button = new ej.buttons.Button({});
    button.appendTo('#dialogBtn');

    document.getElementById('dialogBtn').onclick = function () {
        dialogObj.show();
    };

    function dlgButtonClick() {

        var content = editorObj.getHtml();

        if (content && content.replace(/<[^>]*>/g, '').trim()) {

            alert(
                'Message sent:\n\n' +
                content.replace(/<[^>]*>/g, '')
            );

            editorObj.value = '';
            editorObj.dataBind();

            dialogObj.hide();
        }
    }

    function dlgCancel() {

        if (editorObj) {
            editorObj.value = '';
            editorObj.dataBind();
        }

        dialogObj.hide();
    }

    function dialogClose() {
        document.getElementById('dialogBtn').style.display = 'block';
    }

    function dialogOpen() {

        document.getElementById('dialogBtn').style.display = 'none';

        setTimeout(function () {

            var dialogElement =
                document.querySelector('#editorDialog .e-dialog');

            if (dialogElement && !dialogElement.id) {
                dialogElement.id = 'mainDialog';
            }

            var dialogHeader =
                document.querySelector('#editorDialog .e-dlg-header');

            if (dialogHeader && !dialogHeader.id) {
                dialogHeader.id = 'dialogHeader';
            }

            var dialogContent =
                document.querySelector('#editorDialog .e-dlg-content');

            if (dialogContent && !dialogContent.id) {
                dialogContent.id = 'dialogContent';
            }

            var dialogFooter =
                document.querySelector('#editorDialog .e-footer-content');

            if (dialogFooter && !dialogFooter.id) {
                dialogFooter.id = 'dialogFooter';
            }

        }, 0);

        initializeEditor();

        if (editorObj) {
            var editableEl = document.querySelector('#dialogEditorContent .e-rte-content, #dialogEditorContent [contenteditable="true"]');
            if (editableEl) {
                editableEl.focus();
            }
        }
    }
};