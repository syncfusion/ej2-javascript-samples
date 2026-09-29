this.default = function () {
    var id;
    var apiBlockEditor = null; // will be set after JSON loads

    var escapeHtml = function (html) {
        return String(html)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    };

    // Reusable predefined dialog helper (single place to show alerts)
    var openDialog = function (title, content, isHtml) {
        var updatedContent = isHtml ? escapeHtml(content) : content;
        var dlg = ej.popups.DialogUtility.alert({
            title: title,
            content: '<pre style="white-space: pre-wrap;">' + updatedContent + '</pre>',
            okButton: { text: 'OK', click: function () { dlg.close(); } },
            isModal: true,
            position: { X: 'center', Y: 'center' },
            height: '400px',
            width: '500px',
            closeOnEscape: true
        });
    };

    // Safeguard: block actions before the editor is ready
    var requireEditor = function (fn) {
        return function () {
            if (!apiBlockEditor) {
                openDialog('Please wait', 'Editor is still loading data. Try again in a moment.');
                return;
            }
            fn.apply(this, arguments);
        };
    };

    // Load JSON via XHR (ES5-safe)
    var loadJson = function (url, onSuccess, onError) {
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
    };

    // Adjust this path if your folder structure differs
    loadJson('./src/block-editor/data/api.json', function (data) {
        // data has key: blockDataAPI
        // Initialize BlockEditor with JSON blocks
        apiBlockEditor = new ej.blockeditor.BlockEditor({
            blocks: data.blockDataAPI,
            height: '600px',
            focus: function (args) {
                id = args.blockId;
            }
        });

        apiBlockEditor.appendTo('#api-blockeditor');

        // Initialize UI controls after editor is ready
        var readonly = new ej.buttons.CheckBox({
            checked: false,
            change: function (args) {
                apiBlockEditor.readOnly = args.checked;
            }
        });
        readonly.appendTo('#readonly');

        var enableDragDrop = new ej.buttons.CheckBox({
            checked: true,
            change: function (args) {
                apiBlockEditor.enableDragAndDrop = args.checked;
            }
        });
        enableDragDrop.appendTo('#enableDragDrop');

        // Wire button actions
        document.getElementById('getJson').onclick = requireEditor(function () {
            var jsonData = apiBlockEditor.getDataAsJson();
            openDialog('JSON Data', JSON.stringify(jsonData, null, 2));
        });

        document.getElementById('getHtml').onclick = requireEditor(function () {
            var htmlData = apiBlockEditor.getDataAsHtml();
            openDialog('Editor HTML', htmlData, true);
        });

        document.getElementById('getBlockCount').onclick = requireEditor(function () {
            var dialog = ej.popups.DialogUtility.alert({
                title: 'Block Count',
                content: '<div>Total blocks: <b>' + apiBlockEditor.getBlockCount() + '</b></div>',
                okButton: { text: 'OK', click: function () { dialog.close(); } },
                isModal: true,
                position: { X: 'center', Y: 'center' },
                width: '250px',
                closeOnEscape: true
            });
        });

        document.getElementById('selectall').onclick = requireEditor(function () {
            apiBlockEditor.selectAllBlocks();
        });

        document.getElementById('print').onclick = requireEditor(function () {
            apiBlockEditor.print();
        });
    }, function (message) {
        if (window.console && console.error) {
            console.error('Failed to load api.json:', message);
        }
        openDialog('Load Error', 'Unable to load api.json. ' +
            'Ensure the file is served over HTTP and the path is correct.\n\nDetails: ' + message);
    });
};