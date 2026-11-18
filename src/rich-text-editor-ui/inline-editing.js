this.default = function () {
    var inlineEditor = null;

    function loadJson(url, onSuccess, onError) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    try {
                        var data = JSON.parse(xhr.responseText);
                        onSuccess(data);
                    } catch (e) {
                        onError('Invalid JSON in ' + url + ': ' + e.message);
                    }
                } else {
                    onError('HTTP ' + xhr.status + ' while loading ' + url);
                }
            }
        };
        xhr.onerror = function () {
            onError('Network error while loading ' + url);
        };
        xhr.send(null);
    }

    loadJson('./src/rich-text-editor-ui/data/inline-editing-content.json', function (data) {
        inlineEditor = new ej.richtexteditorui.RichTextEditorUI({
            value: data,
            placeholder: 'Type something ...',
            toolbarSettings: {
                enable: false
            },
            quickToolbarSettings: {
                text: [
                    'Undo', 'Redo', '|',
                    'Bold', 'Italic', 'Underline', 'Strikethrough', '|',
                    'FontColor', 'BackgroundColor', '|',
                    'Formats', 'Alignment', '|',
                    'Table', 'Image', 'Link', '|',
                    'FontName', 'FontSize', '|',
                    'NumberFormatList', 'BulletFormatList', '|',
                    'Subscript', 'Superscript'
                ]
            }
        });

        inlineEditor.appendTo('#editor');
    }, function (message) {
        reportError('Failed to load inline-editing-content.json: ' + message);
    });
};