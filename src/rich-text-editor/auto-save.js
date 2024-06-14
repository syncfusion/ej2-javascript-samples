/*jshint esversion: 6 */
/**
 * Rich Text Editor auto-save sample
 */
this.default = function() {
    var switchObj;
    var defaultRTE;

    function create() {
        switchObj = new ejs.buttons.Switch({ checked: true, change: onChange });
        switchObj.appendTo('#checked');
    }

    function onChange(e) {
        if (e.checked) {
            defaultRTE.saveInterval = 5000;
        } else {
            defaultRTE.saveInterval = 0;
            setTimeout(() => {
                document.getElementById('saving').style.display = 'none';
                document.getElementById('saved').style.display = 'none';
            }, 500);
        }
    }

    defaultRTE = new ej.richtexteditor.RichTextEditor({
        toolbarSettings: {
            items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', 'Blockquote',
                'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', '|', 'SourceCode', 'Undo', 'Redo'
            ]
        },
        saveInterval: 5000,
        created: create,
        change: updateStatus,
        placeholder: 'Start to type a content to save',

    });
    defaultRTE.appendTo('#defaultRTE');

    function updateStatus() {
        document.getElementById('saving').style.display = 'block';
        document.getElementById('saved').style.display = 'none';
        setTimeout(() => {
            if (!ej.base.isNullOrUndefined(document.getElementById('saving')) && !ej.base.isNullOrUndefined(document.getElementById('saved'))) {
                document.getElementById('saving').style.display = 'none';
                document.getElementById('saved').style.display = 'block';
            }
        }, 500);
    }
};