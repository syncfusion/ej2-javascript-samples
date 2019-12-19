/**
 * Markdown Custom format sample
 */
var textArea;
var mdPreview;
var mdsource;
this.default = function () {
    var defaultRTE = new ej.richtexteditor.RichTextEditor({
        height: '260px',
        toolbarSettings: {
            items: ['Bold', 'Italic', 'StrikeThrough', '|',
                'Formats', 'OrderedList', 'UnorderedList', '|',
                'CreateLink', 'Image', '|',
                {
                    tooltipText: 'Preview',
                    template: '<button id="preview-code" class="e-tbar-btn e-control e-btn e-icon-btn">' +
                        '<span class="e-btn-icon e-icons e-md-preview"></span></button>'
                }, 'Undo', 'Redo']
        },
        editorMode: 'Markdown',
        formatter: new ej.richtexteditor.MarkdownFormatter({
            listTags: { 'OL': '2. ', 'UL': '+ ' },
            formatTags: {
                'Blockquote': '> '
            },
            selectionTags: { 'Bold': '__', 'Italic': '_' }
        }),
        created: function () {
            mdPreview = document.getElementById('MD_Preview');
            textArea = defaultRTE.contentModule.getEditPanel();
            textArea.addEventListener('keyup', function (e) {
                markdownConversion();
            });
            mdsource = document.getElementById('preview-code');
            mdsource.addEventListener('click', function (e) {
                fullPreview();
            });
        }
    });
    defaultRTE.appendTo('#defaultRTE');
    loadExternalFile();
    // Dynamically load the marked.js file
    function loadExternalFile() {
      var script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.19/marked.js';
      document.getElementsByTagName('head')[0].appendChild(script);
    }
    function markdownConversion() {
        if (mdPreview && mdPreview.classList.contains('e-active')) {
            var id = defaultRTE.getID() + 'html-view';
            var htmlPreview = defaultRTE.element.querySelector('#' + id);
            htmlPreview.innerHTML = marked(defaultRTE.contentModule.getEditPanel().value);
        }
    }
    function fullPreview() {
        var id = defaultRTE.getID() + 'html-preview';
        var htmlPreview = defaultRTE.element.querySelector('#' + id);
        if (mdsource.classList.contains('e-active')) {
            mdsource.classList.remove('e-active');
            mdsource.parentElement.title = 'Preview';
            defaultRTE.enableToolbarItem(defaultRTE.toolbarSettings.items);
            textArea.style.display = 'block';
            htmlPreview.style.display = 'none';
        }
        else {
            mdsource.classList.add('e-active');
            defaultRTE.disableToolbarItem(defaultRTE.toolbarSettings.items);
            if (!htmlPreview) {
                htmlPreview = ej.base.createElement('div', { className: 'e-content e-pre-source' });
                htmlPreview.id = id;
                textArea.parentNode.appendChild(htmlPreview);
            }
            textArea.style.display = 'none';
            htmlPreview.style.display = 'block';
            htmlPreview.innerHTML = marked(defaultRTE.contentModule.getEditPanel().value);
            mdsource.parentElement.title = 'Code View';
        }
    }
};
