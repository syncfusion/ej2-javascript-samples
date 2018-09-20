/**
 * Markdown editor sample
 */
var textArea;
var mdsource;
this.default = function () {
    var defaultRTE = new ej.richtexteditor.RichTextEditor({
        height: '250px',
        toolbarSettings: {
            items: ['Bold', 'Italic', 'StrikeThrough', '|',
                'Formats', 'OrderedList', 'UnorderedList', '|',
                'CreateLink', 'Image', '|',
                {
                    tooltipText: 'Preview',
                    template: '<button id="preview-code" class="e-tbar-btn e-control e-btn e-icon-btn">' +
                        '<span class="e-btn-icon e-md-preview e-icons"></span></button>'
                }, '|', 'Undo', 'Redo']
        },
        editorMode: 'Markdown',
        created: function () {
            textArea = defaultRTE.contentModule.getEditPanel();
            textArea.addEventListener('keyup', function (e) {
                markDownConversion();
            });
            mdsource = document.getElementById('preview-code');
            mdsource.addEventListener('click', function (e) {
                fullPreview();
                if (e.currentTarget.classList.contains('e-active')) {
                    defaultRTE.disableToolbarItem(['Bold', 'Italic', 'StrikeThrough', 'OrderedList',
                        'UnorderedList', 'CreateLink', 'Image', 'Formats', 'Undo', 'Redo']);
                }
                else {
                    defaultRTE.enableToolbarItem(['Bold', 'Italic', 'StrikeThrough', 'OrderedList',
                        'UnorderedList', 'CreateLink', 'Image', 'Formats', 'Undo', 'Redo']);
                }
            });
        }
    });
    function fullPreview() {
        var id = defaultRTE.getID() + 'html-preview';
        var htmlPreview = defaultRTE.element.querySelector('#' + id);
        if (mdsource.classList.contains('e-active')) {
            mdsource.classList.remove('e-active');
            mdsource.parentElement.title = 'Preview';
            textArea.style.display = 'block';
            htmlPreview.style.display = 'none';
        }
        else {
            mdsource.classList.add('e-active');
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
    defaultRTE.appendTo('#defaultRTE');
    loadExternalFile();
    // Dynamically load the marked.js file
    function loadExternalFile() {
      var script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.19/marked.js';
      document.getElementsByTagName('head')[0].appendChild(script);
    }
};
