/**
 * Markdown editor overview sample
 */
var textArea;
var mdsource;
var markdownConverter = ej.markdownconverter.MarkdownConverter;
this.default = function() {
    var defaultRTE = new ej.richtexteditor.RichTextEditor({
        height: '520px',
        placeholder : "Enter your text here...",
        formatter: new ej.richtexteditor.MarkdownFormatter({ listTags: { 'OL': '1., 2., 3.' } }),
        toolbarSettings: {
            items: ['Bold', 'Italic', 'StrikeThrough', '|',
                'Formats', 'Blockquote', 'OrderedList', 'UnorderedList', 'SuperScript', 'SubScript', '|',
                'CreateLink', 'Image', 'CreateTable', '|',
                {
                    tooltipText: 'Preview',
                    template: '<button id="preview-code" class="e-tbar-btn e-control e-btn e-icon-btn"  aria-label="Preview Code">' +
                        '<span class="e-btn-icon e-md-preview e-icons"></span></button>'
                }, '|', 'Undo', 'Redo'
            ]

        },
        editorMode: 'Markdown',
        created: function() {
            textArea = defaultRTE.contentModule.getEditPanel();
            textArea.addEventListener('keyup', function(e) {
                markdownConversion();
            });
            mdsource = document.getElementById('preview-code');
            mdsource.addEventListener('click', function(e) {
                fullPreview();
                if (e.currentTarget.classList.contains('e-active')) {
                    defaultRTE.disableToolbarItem(['Bold', 'Italic', 'StrikeThrough', 'OrderedList',
                        'UnorderedList', 'SuperScript', 'SubScript', 'CreateLink', 'Image', 'CreateTable', 'Formats', 'Blockquote', 'Undo', 'Redo'
                    ]);
                } else {
                    defaultRTE.enableToolbarItem(['Bold', 'Italic', 'StrikeThrough', 'OrderedList',
                        'UnorderedList', 'SuperScript', 'SubScript', 'CreateLink', 'Image', 'CreateTable', 'Formats', 'Blockquote', 'Undo', 'Redo'
                    ]);
                }
            });
        }
    });

    function markdownConversion() {
        if (mdsource.classList.contains('e-active')) {
            var id = defaultRTE.getID() + 'html-view';
            var htmlPreview = document.body.querySelector('#defaultRTEhtml-preview');
            htmlPreview.innerHTML = markdownConverterr.toHtml(defaultRTE.contentModule.getEditPanel().value, { lineBreak: true });
        }
    }
    function fullPreview() {
        var id = defaultRTE.getID() + 'html-preview';
        var htmlPreview = defaultRTE.element.querySelector('#' + id);
        var previewTextArea = defaultRTE.element.querySelector('.e-rte-content');
        if (mdsource.classList.contains('e-active')) {
            mdsource.classList.remove('e-active');
            mdsource.parentElement.title = 'Preview';
            textArea.style.display = 'block';
            htmlPreview.style.display = 'none';
            previewTextArea.style.overflow = 'hidden';
        }
        else {
            mdsource.classList.add('e-active');
            if (!htmlPreview) {
                htmlPreview = ej.base.createElement('div', { className: 'e-content e-pre-source' });
                htmlPreview.id = id;
                textArea.parentNode.appendChild(htmlPreview);
                previewTextArea.style.overflow = 'auto';
            }
            if(previewTextArea.style.overflow === 'hidden') {
                previewTextArea.style.overflow = 'auto';
            }
            textArea.style.display = 'none';
            htmlPreview.style.display = 'block';
            htmlPreview.innerHTML = markdownConverter.toHtml(defaultRTE.contentModule.getEditPanel().value, { lineBreak: true });
            mdsource.parentElement.title = 'Code View';
        }
    }
    defaultRTE.appendTo('#defaultRTE');
};