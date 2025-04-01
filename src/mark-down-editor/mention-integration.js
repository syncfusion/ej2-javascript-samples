/**
 * Markdown editor overview sample
 */
var textArea;
var mdsource;
this.default = function() {
    var markdownMention = new ej.richtexteditor.RichTextEditor({
        height: '250px',
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
        value:'Hello [@Maria](mailto:maria@gmail.com)\n\nWelcome to the mention integration with markdown editor demo. Type @ character and tag user from the suggestion list.',
        created: function() {
            textArea = markdownMention.contentModule.getEditPanel();
            textArea.addEventListener('keyup', function(e) {
                markdownConversion();
            });
            mdsource = document.getElementById('preview-code');
            mdsource.addEventListener('click', function(e) {
                fullPreview();
                if (e.currentTarget.classList.contains('e-active')) {
                    markdownMention.disableToolbarItem(['Bold', 'Italic', 'StrikeThrough', 'OrderedList',
                        'UnorderedList', 'SuperScript', 'SubScript', 'CreateLink', 'Image', 'CreateTable', 'Formats', 'Blockquote', 'Undo', 'Redo'
                    ]);
                } else {
                    markdownMention.enableToolbarItem(['Bold', 'Italic', 'StrikeThrough', 'OrderedList',
                        'UnorderedList', 'SuperScript', 'SubScript', 'CreateLink', 'Image', 'CreateTable', 'Formats', 'Blockquote', 'Undo', 'Redo'
                    ]);
                }
            });
        }
    });
    function markdownConversion() {
        if (mdsource.classList.contains('e-active')) {
            var id = markdownMention.getID() + 'html-view';
            var htmlPreview = document.body.querySelector('#markdownMentionhtml-preview');
            htmlPreview.innerHTML = marked(markdownMention.contentModule.getEditPanel().value);
        }
    }
    function fullPreview() {
        var id = markdownMention.getID() + 'html-preview';
        var htmlPreview = markdownMention.element.querySelector('#' + id);
        var previewTextArea = markdownMention.element.querySelector('.e-rte-content');
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
            htmlPreview.innerHTML = marked(markdownMention.contentModule.getEditPanel().value);
            mdsource.parentElement.title = 'Code View';
        }
    }
    markdownMention.appendTo('#markdownMention');
    var emailData = [
        { name: "Selma Rose", initial: 'SR', email: "selma@gmail.com", color: '#FAFDFF', bgColor: '#01579B' },
        { name: "Maria", initial: 'MA', email: "maria@gmail.com", color: '#004378', bgColor: '#ADDBFF' },
        { name: "Russo Kay", initial: 'RK', email: "russo@gmail.com", color: '#F9DEDC', bgColor: '#8C1D18' },
        { name: "Robert", initial: 'RO', email: "robert@gmail.com", color: '#FFD6F7', bgColor: '#37003A' },
        { name: "Camden Kate", initial: 'CK', email: "camden@gmail.com", color: '#FFFFFF', bgColor: '#464ECF' },
        { name: "Garth", initial: 'GA', email: "garth@gmail.com", color: '#FFFFFF', bgColor: '#008861' },
        { name: "Andrew James", initial: 'AJ', email: "james@gmail.com", color: '#FFFFFF', bgColor: '#53CA17' },
        { name: "Olivia", initial: 'OL', email: "olivia@gmail.com", color: '#FFFFFF', bgColor: '#8C1D18' },
        { name: "Sophia", initial: 'SO', email: "sophia@gmail.com", color: '#000000', bgColor: '#D0BCFF' },
        { name: "Margaret", initial: 'MA', email: "margaret@gmail.com", color: '#000000', bgColor: '#F2B8B5' },
        { name: "Ursula Ann", initial: 'UA', email: "ursula@gmail.com", color: '#000000', bgColor: '#47ACFB' },
        { name: "Laura Grace", initial: 'LG', email: "laura@gmail.com", color: '#000000', bgColor: '#FFE088' },
        { name: "Albert", initial: 'AL', email: "albert@gmail.com", color: '#FFFFFF', bgColor: '#00335B' },
        { name: "William", initial: 'WA', email: "william@gmail.com", color: '#FFFFFF', bgColor: '#163E02' }
    ];
    var mention = new ej.dropdowns.Mention({
        dataSource: emailData,
        fields: { text: 'name' },
        displayTemplate: '[@${name}](mailto:${email})',
        itemTemplate: '<div class="editor-mention-item-template"><div class="em-header"><div class="em-avatar" style="background-color: ${bgColor}; color: ${color}"><div class="em-initial">${initial}</div></div></div><div class="em-content"><div class="em-name">${name}</div><div class="em-email">${email}</div></div></div>',
        popupWidth: '250px',
        popupHeight: '200px',
        sortOrder: 'Ascending',
        target: markdownMention.inputElement,
        allowSpaces: true,
        suffixText: '&nbsp;'
    });
    mention.appendTo('#editorMention');
    loadExternalFile();
    // Dynamically load the marked.js file
    function loadExternalFile() {
      var script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.19/marked.js';
      document.getElementsByTagName('head')[0].appendChild(script);
    }
};