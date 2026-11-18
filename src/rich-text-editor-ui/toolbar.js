this.default = function () {
    var toolbarRTE = null;

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

    function setupControls(editor) {
        var toolbarTypeData = [
            { text: 'Expanded', value: 'Expanded' },
            { text: 'MultiRow', value: 'MultiRow' },
            { text: 'Scrollable', value: 'Scrollable' }
        ];

        var toolbarPositionData = [
            { text: 'Top', value: 'Top' },
            { text: 'Bottom', value: 'Bottom' }
        ];

        var toolbarTypeDropdown = new ej.dropdowns.DropDownList({
            dataSource: toolbarTypeData,
            fields: { text: 'text', value: 'value' },
            value: 'Expanded',
            popupHeight: '200px',
            floatLabelType: 'Auto',
            change: function (args) {
                editor.toolbarSettings.type = args.value;
                editor.dataBind();
            }
        });

        toolbarTypeDropdown.appendTo('#toolbarType');

        var toolbarPositionDropdown = new ej.dropdowns.DropDownList({
            dataSource: toolbarPositionData,
            fields: { text: 'text', value: 'value' },
            value: 'Top',
            popupHeight: '150px',
            floatLabelType: 'Auto',
            change: function (args) {
                editor.toolbarSettings.position = args.value;
                editor.dataBind();
            }
        });

        toolbarPositionDropdown.appendTo('#toolbarPosition');

        var float = new ej.buttons.CheckBox({
            checked: true,
            label: 'Enable Floating',
            change: function (args) {
                editor.toolbarSettings.enableFloating = args.checked;
                editor.dataBind();
            }
        });

        float.appendTo('#float');
    }

    loadJson('./src/rich-text-editor-ui/data/toolbar-content.json', function (data) {
        toolbarRTE = new ej.richtexteditorui.RichTextEditorUI({
            value: data,
            height: '350px',
            toolbarSettings: {
                items: [
                    'Undo', 'Redo', '|',
                    'Bold', 'Italic', 'Underline', 'Strikethrough', '|',
                    'FontColor', 'BackgroundColor', '|',
                    'Formats', 'Alignment', '|',
                    'Table', 'Image', 'Link', '|',
                    'FontName', 'FontSize', '|',
                    'NumberFormatList', 'BulletFormatList', '|',
                    'Subscript', 'Superscript', '|',
                    'ClearFormat'
                ],
                type: 'Expanded',
                position: 'Top'
            }
        });

        toolbarRTE.appendTo('#editor');
        setupControls(toolbarRTE);
    }, function (message) {
        reportError('Failed to load toolbar-content.json: ' + message);
    });
};