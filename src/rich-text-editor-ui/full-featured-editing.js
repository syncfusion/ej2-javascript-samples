ej.richtexteditorui.RichTextEditorUI.Inject(
    ej.richtexteditorui.SlashCommand
);

this.default = function () {
    var fullFeaturedEditor = null;

    // XHR JSON loader (ES5)
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

    // Load JSON and initialize editor
    loadJson('./src/rich-text-editor-ui/data/full-featured-content.json', function (data) {
        fullFeaturedEditor = new ej.richtexteditorui.RichTextEditorUI({
            value: data,
            toolbarSettings: {
                items: [
                    'Undo', 'Redo', '|', 'Formats', '|', 'Bold', 'Italic', 'Underline', 'Strikethrough', 'InlineCode', '|', 'FontName', 'FontSize', '|', 'LowerCase', 'UpperCase', '|', 'Superscript', 'Subscript' , '|', 'FontColor', 'BackgroundColor', '|', 'BulletFormatList', 'NumberFormatList', '|', 'Link', 'Image', 'Table', '|', 'Indent', 'Outdent', '|', 'Alignment', '|', 'HorizontalLine', 'Quote', 'CodeBlock', '|', 'ClearFormat'
                ]
            },
            slashCommandSettings: {
                enable: true
            },
            placeholder: 'Type something...'
        });

        fullFeaturedEditor.appendTo('#editor');
    },function (message) {
        reportError('Failed to load basic-editing-content.json: ' + message);
    });
};