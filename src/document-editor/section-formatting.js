this.default = function () {

    //Documenteditor control rendering starts
    var hostUrl = 'https://services.syncfusion.com/js/production/api/documenteditor/';
    var container = new ej.documenteditor.DocumentEditorContainer({ toolbarMode: 'Ribbon',serviceUrl:hostUrl, height:'590px',documentEditorSettings: { showRuler: true } });
    ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar, ej.documenteditor.Ribbon);
    container.appendTo('#container');
    var defaultDocument = {"sfdt":"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"};
    var waitingPopUp = document.getElementById('waiting-popup');
    container.documentEditor.open(JSON.stringify(defaultDocument));    
    container.documentEditor.documentName = 'Section Formatting';    
    // TitleBar sample starts
    var switchObj = new ejs.buttons.Switch({ checked: true, cssClass: 'buttonSwitch' });
    switchObj.appendTo('#toolbarSwitch');

    switchObj.change = function (args) {
        if (args.checked) {
            container.toolbarMode = 'Ribbon';
        }
        else {
            container.toolbarMode = 'Toolbar';
        }
        showButtons(container.toolbarMode !== 'Ribbon');
    };
titleBarDiv = document.getElementById('documenteditor_titlebar');
    initializeTitleBar(true); 
    updateDocumentTitle();
    wireEventsInTitleBar();
    container.documentChange = function () {
        updateDocumentTitle();
    };
     var documentTitle;
     var documentTitleContentEditor;
     var titleBarDiv;
     var print;
     var openBtn;
     var download;
     var isPropertiesPaneEnabled;
     function initializeTitleBar(isShareNeeded) {
         documentTitle = ej.base.createElement('label', { id: 'documenteditor_title_name', styles: 'text-transform:capitalize;font-weight:400;text-overflow:ellipsis;white-space:pre;overflow:hidden;user-select:none;cursor:text' });
         documentTitleContentEditor = ej.base.createElement('div', { id: 'documenteditor_title_contentEditor', className: 'single-line' });
         documentTitleContentEditor.appendChild(documentTitle);
         titleBarDiv.appendChild(documentTitleContentEditor);
         documentTitleContentEditor.setAttribute('title', 'Document Name. Click or tap to rename this document.');
         var btnStyles = 'float:right;background: transparent;box-shadow:none; font-family: inherit;border-color: transparent;' +
             'border-radius: 2px;color:inherit;font-size:12px;text-transform:capitalize;margin-top:4px;height:28px;font-weight:400';
         print = addButton('e-de-icon-Print e-de-padding-right', 'Print', btnStyles, 'de-print', 'Print this document (Ctrl+P).', false);
         openBtn = addButton('e-de-icon-Open e-de-padding-right', 'open', btnStyles, 'de-open', 'Open', false);
         var items = [
            { text: 'Syncfusion Document Text (*.sfdt)', id: 'sfdt' },
            { text: 'Word Document (*.docx)', id: 'word' },
            { text: 'Word Template (*.dotx)', id: 'dotx'},
            { text: 'Plain Text (*.txt)', id: 'txt'},
        ];
         download = addButton('e-de-icon-Download e-de-padding-right', 'Download', btnStyles, 'documenteditor-share', 'Download this document.', true, items);
         if (!isShareNeeded) {
             download.element.style.display = 'none';
         }
         else {
             openBtn.element.style.display = 'none';
         }
     }
     function wireEventsInTitleBar() {
         print.element.addEventListener('click', onPrint);
         openBtn.element.addEventListener('click', function (e) {
             if (e.target.id === 'de-open') {
                 var fileUpload = document.getElementById('uploadfileButton');
                 fileUpload.value = '';
                 fileUpload.click();
             }
         });
         documentTitleContentEditor.addEventListener('keydown', function (e) {
             if (e.keyCode === 13) {
                 e.preventDefault();
                 documentTitleContentEditor.contentEditable = 'false';
                 if (documentTitleContentEditor.textContent === '') {
                     documentTitleContentEditor.textContent = 'Document1';
                 }
             }
         });
         documentTitleContentEditor.addEventListener('blur', function () {
             if (documentTitleContentEditor.textContent === '') {
                 documentTitleContentEditor.textContent = 'Document1';
             }
             documentTitleContentEditor.contentEditable = 'false';
             container.documentEditor.documentName = documentTitle.textContent;
         });
         documentTitleContentEditor.addEventListener('click', function () {
             updateDocumentEditorTitle();
         });
     }
     function updateDocumentEditorTitle() {
         documentTitleContentEditor.contentEditable = 'true';
         documentTitleContentEditor.focus();
         window.getSelection().selectAllChildren(documentTitleContentEditor);
     }
     function updateDocumentTitle() {
         if (container.documentEditor.documentName === '') {
             container.documentEditor.documentName = 'Untitled';
         }
         documentTitle.textContent = container.documentEditor.documentName;
     }
     function onPrint() {
         container.documentEditor.print();
     }
     function onExportClick(args) {
         var value = args.item.id;
         switch (value) {
             case 'word':
                 save('Docx');
                 break;
             case 'sfdt':
                 save('Sfdt');
                 break;
            case 'txt':
                save('Txt');
                break;
            case 'dotx':
                save('Dotx');
                break;
         }
     }
     function save(format) {
         container.documentEditor.save(container.documentEditor.documentName === '' ? 'sample' : container.documentEditor.documentName, format);
     }
     function setTooltipForPopup() {
        document.getElementById('documenteditor-share-popup').querySelectorAll('li')[0].setAttribute('title', 'Download a copy of this document to your computer as an SFDT file.');
        document.getElementById('documenteditor-share-popup').querySelectorAll('li')[1].setAttribute('title', 'Download a copy of this document to your computer as a DOCX file.');
        document.getElementById('documenteditor-share-popup').querySelectorAll('li')[2].setAttribute('title', 'Download a copy of this document to your computer as a DOTX file.');
        document.getElementById('documenteditor-share-popup').querySelectorAll('li')[3].setAttribute('title', 'Download a copy of this document to your computer as a TXT file.');
    }
     function addButton(iconClass, btnText, styles, id, tooltipText, isDropDown, items) {
         var button = ej.base.createElement('button', { id: id, styles: styles });
         titleBarDiv.appendChild(button);
         button.setAttribute('title', tooltipText);
         if (isDropDown) {
             var dropButton = new ej.splitbuttons.DropDownButton({ select: onExportClick, items: items, iconCss: iconClass, cssClass: 'e-caret-hide', content: btnText, open: function () { setTooltipForPopup(); } }, button);
             return dropButton;
         }
         else {
             var ejButton = new ej.buttons.Button({ iconCss: iconClass, content: btnText }, button);
             return ejButton;
         }
     } 
      function showButtons(show) {
        var displayStyle = show ? 'block' : 'none';

        if (print) {
            print.element.style.display = displayStyle;
        }
        if (download) {
            download.element.style.display = displayStyle;
        }
    }

    showButtons(false); 
};