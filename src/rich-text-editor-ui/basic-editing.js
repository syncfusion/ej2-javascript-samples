this.default = function () {
    var basicEditor = null;

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

    loadJson('./src/rich-text-editor-ui/data/basic-editing-content.json', function (data) {
        basicEditor = new ej.richtexteditorui.RichTextEditorUI({
            value: data,
            toolbarSettings: {
                items: [
                    'Undo', 'Redo', '|', 'Bold', 'Italic', 'Underline', 'Strikethrough', 'Subscript', 'Superscript', '|', 'Formats', 'Alignment', '|', 'Link', 'Image', '|', 'FontColor', 'BackgroundColor', '|' , 'NumberedList', 'BulletList', '|', 'ClearFormat'
                ]
            },
            placeholder: 'Type something.'
        });

        basicEditor.appendTo('#editor');
    }, function (message) {
        reportError('Failed to load basic-editing-content.json: ' + message);
    });
};