/**
 * Markdown editor preview sample
 */

var textArea;
var srcArea;
var myCodeMirror;
var defaultRTE;
var splitObj;
this.default = function () {
    splitObj = new ej.layouts.Splitter({
        height: '450px',
        resizing: onResizing,
        created: updateOrientation,
        width: '100%',
        paneSettings: [{
            resizable: true,
            size: '50%', min: '40%',
        }, { min: '40%' }],
    });
    splitObj.appendTo('#splitter-rte-markdown-preview');
    defaultRTE = new ej.richtexteditor.RichTextEditor({
        height: '100%',
        placeholder : "Enter your text here...",
        floatingToolbarOffset: 0,
        editorMode: 'Markdown',
        toolbarSettings: {
            type: 'Expand',
            enableFloating: false,
            items: ['Bold', 'Italic', 'StrikeThrough', '|', 'Formats', 'Blockquote', 'OrderedList',
                'UnorderedList', '|', 'CreateLink', 'Image', 'CreateTable',
                '|', 'Undo', 'Redo'
            ]
        },
        saveInterval: 1, actionComplete: updateValue, change: onChange,
        showCharCount: true, maxLength: 5000, created: onCreate,
    });
    defaultRTE.appendTo('#defaultRTE');

    function onChange() {
        updateValue();
    }
    function onResizing() {
        defaultRTE.refreshUI();
    }
    function onCreate() {
        loadExternalFile();
        textArea = defaultRTE.contentModule.getEditPanel();
        srcArea = document.querySelector('.source-code');
    }
    function updateValue() {
        srcArea.innerHTML = marked(defaultRTE.contentModule.getEditPanel().value);
    }
    function updateOrientation() {
        if (ej.base.Browser.isDevice) {
            splitObj.orientation = 'Vertical';
            document.body.querySelector('.heading').style.width = 'auto';
        }
    }
    function loadExternalFile() {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.19/marked.js';
        script.onload = function () {
            updateValue();
        };
        document.getElementsByTagName('head')[0].appendChild(script);
    }
};