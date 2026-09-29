this.default = function () {
    var codeMirrorObj;

    // Initialize Splitter
    var splitObj = new ej.layouts.Splitter({
        height: '450px',
        width: '100%',
        paneSettings: [
            { resizable: true, size: '50%', min: '40%' },
            { min: '40%' }
        ],
        created: handleSplitterCreated
    });

    splitObj.appendTo('#html-preview-splitter');

    // Initialize RichTextEditorUI
    var editor = new ej.richtexteditorui.RichTextEditorUI({
        height: '100%',
        valueFormat: 'html',
        value:
            '<h3>Welcome to the HTML real-time live editor!</h3>' +
            '<p>Create and edit the valid HTML code simply! You don\'t worry about the HTML syntax to format your text content. The WYSIWYG editor (left side view) provided the toolbar to make format text and insert images, tables, and more options.</p>' +
            '<h4>Don\'t worry about syntax</h4>' +
            '<p>The content editing works bi-directional, you can write the HTML code on the right-side view (code view), and changes will reflect in the WYSIWYG editor.</p>',

        toolbarSettings: {
            enableFloating: false,
            items: [
                'Bold', 'Italic', 'Underline',
                'FontName', 'FontSize',
                'FontColor', 'BackgroundColor',
                'Formats',
                'Outdent', 'Indent',
                'Link', 'Image', 'Table',
                '|', 'Undo', 'Redo'
            ]
        },

        saveInterval: 1,
        actionComplete: syncEditorToCodeMirror,
        change: syncEditorToCodeMirror,
        created: initializeCodeMirror
    });
    editor.appendTo('#editor');

    function initializeCodeMirror() {
        syncEditorToCodeMirror();
    }

    function syncEditorToCodeMirror() {
        var sourceCodeContainer = document.querySelector('.html-preview-source-pane');
        if (!sourceCodeContainer) {
            return;
        }
        var rteHtml = editor.getHtml();

        if (!codeMirrorObj) {
            codeMirrorObj = CodeMirror(sourceCodeContainer, {
                value: rteHtml,
                lineNumbers: true,
                mode: 'text/html',
                lineWrapping: true
            });
            codeMirrorObj.on('change', handleCodeMirrorChange);
        } else if (!codeMirrorObj.hasFocus() && codeMirrorObj.getValue() !== rteHtml) {
            var cursor = codeMirrorObj.getCursor();
            codeMirrorObj.setValue(rteHtml);
            codeMirrorObj.setCursor(cursor);
        }
    }

    function handleCodeMirrorChange() {
        if (codeMirrorObj && codeMirrorObj.getValue() !== editor.getHtml()) {
            editor.value = codeMirrorObj.getValue();
            editor.dataBind();
        }
    }

    function handleSplitterCreated() {
        if (ej.base.Browser.isDevice) {
            splitObj.orientation = 'Vertical';
            var headerElement = document.querySelector('.html-preview-header');
            if (headerElement) {
                headerElement.style.width = 'auto';
            }
        }
    }

    function copyHtmlToClipboard() {
        var html = codeMirrorObj ? codeMirrorObj.getValue() : editor.getHtml();
        navigator.clipboard.writeText(html).then(function () {
            ej.notifications.ToastUtility.show({
                title: 'Success',
                icon: 'e-icons e-check',
                content: 'Content copied successfully.',
                position: { X: 'Right' },
                cssClass: 'e-toast-info'
            });
        }).catch(function () {
            ej.notifications.ToastUtility.show({
                title: 'Error',
                content: 'Failed to copy content.',
                position: { X: 'Right' }
            });
        });
    }

    var copyBtn = document.getElementById('copyHtmlBtn');

    if (copyBtn) {
        copyBtn.addEventListener('click', copyHtmlToClipboard);
    }
};