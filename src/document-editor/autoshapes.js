/*jshint esversion: 6 */
this.default = function () {

    //Documenteditor control rendering starts
    var hostUrl = 'https://services.syncfusion.com/js/production/api/documenteditor/';
    var container = new ej.documenteditor.DocumentEditorContainer({ serviceUrl:hostUrl,height:'590px', documentEditorSettings: { showRuler: true}});
    ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar);
    container.appendTo('#container');
    var defaultDocument = {"sfdt":"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"};
    var waitingPopUp = document.getElementById('waiting-popup');
    container.documentEditor.open(JSON.stringify(defaultDocument));    
    container.documentEditor.documentName = 'Auto Shapes';    
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