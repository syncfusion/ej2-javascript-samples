/**
 * Markdown editor preview sample
 */
var textArea;
var mdsource;
var mdSplit;
var htmlPreview;
this.default = function () {
    var defaultRTE = new ej.richtexteditor.RichTextEditor({
        height: '300px', editorMode: 'Markdown', actionBegin: handleFullScreen,
        toolbarSettings: {
            items: ['Bold', 'Italic', 'StrikeThrough', '|', 'Formats', 'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', 'CreateTable', '|',
                { tooltipText: 'Preview', template: '<button id="preview-code" class="e-tbar-btn e-control e-btn e-icon-btn">' +
                        '<span class="e-btn-icon e-md-preview e-icons"></span></button>' },
                { tooltipText: 'Split Editor', template: '<button id="MD_Preview" class="e-tbar-btn e-control e-btn e-icon-btn">' +
                        '<span class="e-btn-icon e-view-side e-icons"></span></button>' }, 'FullScreen', '|', 'Undo', 'Redo']
        },
        created: function () {
            textArea = defaultRTE.contentModule.getEditPanel();
            textArea.addEventListener('keyup', function (e) { markdownConversion(); });
            var rteObj = defaultRTE;
            mdsource = document.getElementById('preview-code');
            mdsource.addEventListener('click', function (e) {
                fullPreview({ mode: true, type: 'preview' });
                if (e.currentTarget.classList.contains('e-active')) {
                    defaultRTE.disableToolbarItem(['Bold', 'Italic', 'StrikeThrough', '|',
                        'Formats', 'OrderedList', 'UnorderedList', '|',
                        'CreateLink', 'Image', 'CreateTable', 'Undo', 'Redo']);
                    e.currentTarget.parentElement.nextElementSibling.classList.add('e-overlay');
                }
                else {
                    defaultRTE.enableToolbarItem(['Bold', 'Italic', 'StrikeThrough', '|',
                        'Formats', 'OrderedList', 'UnorderedList', '|',
                        'CreateLink', 'Image', 'CreateTable', 'Undo', 'Redo']);
                    e.currentTarget.parentElement.nextElementSibling.classList.remove('e-overlay');
                }
            });
            mdSplit = document.getElementById('MD_Preview');
            mdSplit.addEventListener('click', function (e) {
                if (defaultRTE.element.classList.contains('e-rte-full-screen')) {
                    fullPreview({ mode: true, type: '' });
                }
                mdsource.classList.remove('e-active');
                if (!defaultRTE.element.classList.contains('e-rte-full-screen')) {
                    defaultRTE.showFullScreen();
                }
            });
        },
        actionComplete: function (e) {
            if (e.targetItem === 'Maximize' && ej.base.isNullOrUndefined(e.args)) {
                fullPreview({ mode: true, type: '' });
            }
            else if (!mdSplit.parentElement.classList.contains('e-overlay')) {
                if (e.targetItem === 'Minimize') {
                    textArea.style.display = 'block';
                    textArea.style.width = '100%';
                    if (htmlPreview) {
                        htmlPreview.style.display = 'none';
                    }
                    mdSplit.classList.remove('e-active');
                    mdsource.classList.remove('e-active');
                }
                markdownConversion();
            }
            setTimeout(function () { defaultRTE.toolbarModule.refreshToolbarOverflow(); }, 400);
        }
    });
    function markdownConversion() {
        if (mdSplit.classList.contains('e-active')) {
            var id = defaultRTE.getID() + 'html-view';
            var htmlPreview = document.body.querySelector('#defaultRTEhtml-preview');
            htmlPreview.innerHTML = marked(defaultRTE.contentModule.getEditPanel().value);
        }
    }
    function fullPreview(e) {
        var id = defaultRTE.getID() + 'html-preview';
        htmlPreview = document.body.querySelector('#defaultRTEhtml-preview');
        if ((mdsource.classList.contains('e-active') || mdSplit.classList.contains('e-active')) && e.mode) {
            mdsource.classList.remove('e-active');
            mdSplit.classList.remove('e-active');
            mdsource.parentElement.title = 'Preview';
            textArea.style.display = 'block';
            textArea.style.width = '100%';
            htmlPreview.style.display = 'none';
        }
        else {
            mdsource.classList.add('e-active');
            mdSplit.classList.add('e-active');
            if (!htmlPreview) {
                htmlPreview = ej.base.createElement('div', { className: 'e-content' });
                htmlPreview.id = id;
                textArea.parentNode.appendChild(htmlPreview);
            }
            if (e.type === 'preview') {
                textArea.style.display = 'none';
                htmlPreview.classList.add('e-pre-source');
            }
            else {
                htmlPreview.classList.remove('e-pre-source');
                textArea.style.width = '50%';
            }
            htmlPreview.style.display = 'block';
            htmlPreview.innerHTML = marked(defaultRTE.contentModule.getEditPanel().value);
            mdsource.parentElement.title = 'Code View';
        }
    }
    defaultRTE.appendTo('#defaultRTE');
    function handleFullScreen(e) {
        var sbCntEle = document.querySelector('.sb-content.e-view');
        var sbHdrEle = document.querySelector('.sb-header.e-view');
        var leftBar;
        var transformElement;
        if (ej.base.Browser.isDevice) {
            leftBar = document.querySelector('#right-sidebar');
            transformElement = document.querySelector('.sample-browser.e-view.e-content-animation');
        }
        else {
            leftBar = document.querySelector('#left-sidebar');
            transformElement = document.querySelector('#right-pane');
        }
        if (e.targetItem === 'Maximize') {
            if (ej.base.Browser.isDevice &&  ej.base.Browser.isIos) {
                ej.base.addClass([sbCntEle, sbHdrEle], ['hide-header']);
            }
            ej.base.addClass([leftBar], ['e-close']);
            ej.base.removeClass([leftBar], ['e-open']);
            if (!ej.base.Browser.isDevice) {
                transformElement.style.marginLeft = '0px';
            }
            transformElement.style.transform = 'inherit';
        }
        else if (e.targetItem === 'Minimize') {
            if (ej.base.Browser.isDevice &&  ej.base.Browser.isIos) {
                ej.base.removeClass([sbCntEle, sbHdrEle], ['hide-header']);
            }
            ej.base.removeClass([leftBar], ['e-close']);
            if (!ej.base.Browser.isDevice) {
                ej.base.addClass([leftBar], ['e-open']);
                transformElement.style.marginLeft = leftBar.offsetWidth + 'px';
            }
            transformElement.style.transform = 'translateX(0px)';
        }
    }
    loadExternalFile();
    // Dynamically load the marked.js file
    function loadExternalFile() {
      var script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.19/marked.js';
      document.getElementsByTagName('head')[0].appendChild(script);
    }
};