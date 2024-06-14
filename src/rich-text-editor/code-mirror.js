/**
 * Rich Text Editor code-mirror sample
 */
var defaultRTE;
var divPreview;
this.default = function () {
    defaultRTE = new ej.richtexteditor.RichTextEditor({
        toolbarSettings: {
            items: [{
                    template: '<button id="DIV_Preview" class="e-tbar-btn e-control e-btn e-icon-btn">' +
                        '<span class="e-btn-icon e-code-mirror e-icons"></span></button>'
                }, 'Bold', 'Italic', 'Underline',
                'Alignments', 'OrderedList', 'UnorderedList',
                'CreateLink', 'Image', '|', 'Undo', 'Redo']
        },
        created: onCreated
    });
    defaultRTE.appendTo('#defaultRTE');
    function onCreated() {
        defaultRTE.disableToolbarItem(['Bold', 'Italic', 'Underline',
            'Alignments', 'OrderedList', 'UnorderedList',
            'CreateLink', 'Image', '|', 'Undo', 'Redo']);
        setTimeout(function () { mirrorConversion(); }, 100);
    }
    divPreview = document.getElementById('DIV_Preview');
    var textArea = defaultRTE.contentModule.getEditPanel();
    var myCodeMirror;
    divPreview.addEventListener('click', function (e) {
        mirrorConversion();
        if (e.target.parentElement.classList.contains('e-active')) {
            defaultRTE.disableToolbarItem(['Bold', 'Italic', 'Underline',
                'Alignments', 'OrderedList', 'UnorderedList',
                'CreateLink', 'Image', '|', 'Undo', 'Redo']);
        }
        else {
            defaultRTE.enableToolbarItem(['Bold', 'Italic', 'Underline',
                'Alignments', 'OrderedList', 'UnorderedList',
                'CreateLink', 'Image', '|', 'Undo', 'Redo']);
        }
    });
    function mirrorConversion() {
        var id = defaultRTE.getID() + 'mirror-view';
        var mirrorView = defaultRTE.element.querySelector('#' + id);
        var iconEle = divPreview.querySelector('span');
        if (divPreview.classList.contains('e-active')) {
            divPreview.classList.remove('e-active');
            iconEle.classList.add('e-html-preview');
            iconEle.classList.remove('e-code-mirror');
            textArea.style.display = 'block';
            mirrorView.style.display = 'none';
            defaultRTE.value = myCodeMirror.getValue();
            defaultRTE.dataBind();
        }
        else {
            divPreview.classList.add('e-active');
            iconEle.classList.remove('e-html-preview');
            iconEle.classList.add('e-code-mirror');
            if (!mirrorView) {
                mirrorView = ej.base.createElement('div', { className: 'e-content' });
                mirrorView.id = id;
                textArea.parentNode.appendChild(mirrorView);
            }
            else {
                mirrorView.innerHTML = '';
            }
            textArea.style.display = 'none';
            mirrorView.style.display = 'block';
            renderCodeMirror(mirrorView, defaultRTE.value);
        }
    }
    function renderCodeMirror(mirrorView, content) {
        myCodeMirror = CodeMirror(mirrorView, {
            value: content,
            lineNumbers: true,
            mode: 'text/html',
            lineWrapping: true,
        });
    }
    function loadExternalFile() {
        var script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.37.0/codemirror.js';
        document.getElementsByTagName('head')[0].appendChild(script);
    }
};
