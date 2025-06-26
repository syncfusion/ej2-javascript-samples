this.default = function () {

    //Documenteditor control rendering starts
    var hostUrl = 'https://services.syncfusion.com/js/production/api/documenteditor/';
    var container = new ej.documenteditor.DocumentEditorContainer({ toolbarMode: 'Ribbon',serviceUrl:hostUrl,height:'590px',documentEditorSettings: { showRuler: true } });
    ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar, ej.documenteditor.Ribbon);
    container.appendTo('#container');
    var defaultDocument = {"sfdt":"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"};
    var waitingPopUp = document.getElementById('waiting-popup');
    container.documentEditor.open(JSON.stringify(defaultDocument));    
    container.documentEditor.documentName = 'Headers and Footers';    
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