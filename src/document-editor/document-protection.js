this.default = function () {

    //Documenteditor control rendering starts
    var userList = ['engineer@mycompany.com','manager@mycompany.com'];
    var hostUrl = 'https://services.syncfusion.com/js/production/api/documenteditor/';
    var container = new ej.documenteditor.DocumentEditorContainer({ serviceUrl:hostUrl,height:'590px',documentEditorSettings: { showRuler: true } });
    ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar);
    container.appendTo('#container');
    container.showPropertiesPane = false;
    container.documentEditor.currentUser = 'engineer@mycompany.com';
    var dropDownListObject = new ej.dropdowns.DropDownList({
        dataSource: userList,
        change: function (e) {
            container.documentEditor.currentUser = e.value;
        }
    });
    dropDownListObject.appendTo('#ddlelement');
    dropDownListObject.value = 'engineer@mycompany.com';

    var colorPicker = new ej.inputs.ColorPicker({
        value: container.documentEditor.userColor,
        change: function (e) {
            container.documentEditor.userColor = e.currentValue.hex;
        }
    });
    colorPicker.appendTo('#color-picker');

    var defaultDocument = {"sfdt":"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"};
    var waitingPopUp = document.getElementById('waiting-popup');
    container.documentEditor.open(JSON.stringify(defaultDocument));    
    container.documentEditor.documentName = 'Document Protection';    
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
};