/**
 * Markdown Custom format sample
 */
var textArea;
var mdPreview;
var mdsource;
var tooltipObj;
this.default = function () {
    var defaultRTE = new ej.richtexteditor.RichTextEditor({
        height: '260px',
        placeholder : "Enter your text here...",
        toolbarSettings: {
            items: ['Bold', 'Italic', 'StrikeThrough', '|',
                'Formats', 'Blockquote', 'OrderedList', 'UnorderedList', '|',
                'CreateLink', 'Image', '|',
                {
                    template:
                      '<button id="preview-code" class="e-tbar-btn e-control e-btn e-icon-btn" aria-label="Preview Code">' +
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
            tooltipObj = new ej.popups.Tooltip({
                content: "Preview",  
                target: "#preview-code"  
              });
            tooltipObj.appendTo("#preview-code");
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
            defaultRTE.enableToolbarItem(defaultRTE.toolbarSettings.items);
            textArea.style.display = 'block';
            htmlPreview.style.display = 'none';
            tooltipObj.content = "Preview";
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
            tooltipObj.content = "Codeview";
        }
    }
};