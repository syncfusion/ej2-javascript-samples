this.default = function () {

    //Documenteditor control rendering starts
    var userList = ['engineer@mycompany.com','manager@mycompany.com'];
    var hostUrl = 'https://services.syncfusion.com/js/production/api/documenteditor/';
    var container = new ej.documenteditor.DocumentEditorContainer({ serviceUrl:hostUrl,height:'590px' });
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
             { text: 'Microsoft Word (.docx)', id: 'word' },
             { text: 'Syncfusion Document Text (.sfdt)', id: 'sfdt' },
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
         }
     }
     function save(format) {
         container.documentEditor.save(container.documentEditor.documentName === '' ? 'sample' : container.documentEditor.documentName, format);
     }
     function setTooltipForPopup() {
         document.getElementById('documenteditor-share-popup').querySelectorAll('li')[0].setAttribute('title', 'Download a copy of this document to your computer as a DOCX file.');
         document.getElementById('documenteditor-share-popup').querySelectorAll('li')[1].setAttribute('title', 'Download a copy of this document to your computer as an SFDT file.');
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