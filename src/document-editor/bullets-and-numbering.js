this.default = function () {

    //Documenteditor control rendering starts
    var hostUrl = 'https://services.syncfusion.com/js/production/api/documenteditor/';
    var container = new ej.documenteditor.DocumentEditorContainer({ serviceUrl:hostUrl,height:'590px',documentEditorSettings: { showRuler: true } });
    ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar);
    container.appendTo('#container');
    var defaultDocument = {"sfdt":"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"};
    var waitingPopUp = document.getElementById('waiting-popup');
    container.documentEditor.open(JSON.stringify(defaultDocument));    
    container.documentEditor.documentName = 'Bullets and Numbering';    
    // TitleBar sample starts
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
            { text: 'Syncfusion® Document Text (*.sfdt)', id: 'sfdt' },
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
};