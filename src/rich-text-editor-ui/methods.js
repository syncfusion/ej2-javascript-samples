this.default = function () {
    var editor = new ej.richtexteditorui.RichTextEditorUI({
        placeholder: 'Type or paste content here to try the API methods...',
        toolbarSettings: {
            items: [
                'Bold', 'Italic', 'Underline', '|',
                'FontColor', 'BackgroundColor', '|',
                'Formats', '|',
                'NumberFormatList', 'BulletFormatList', '|',
                'Undo', 'Redo'
            ]
        }
    });

    editor.appendTo('#editor');

    var output = document.getElementById('methods-output');

    var log = function (value) {
        var text;
        if (value === undefined || value === null) {
            text = String(value);
        } else if (typeof value === 'string') {
            text = value;
        } else {
            text = JSON.stringify(value);
        }
        output.textContent = '' + text;
    };

    document.getElementById('btn-getHtml').onclick = function () {
        log(editor.getHtml());
    };

    document.getElementById('btn-getText').onclick = function () {
        log(editor.getText());
    };

    document.getElementById('btn-getDocument').onclick = function () {
        log(editor.getDocument());
    };

    document.getElementById('btn-focus').onclick = function () {
        editor.focus();
        log('editor focused');
    };

    document.getElementById('btn-blur').onclick = function () {
        editor.blur();
        log('editor blurred');
    };
};