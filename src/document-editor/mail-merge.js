this.default = function () {

    //Documenteditor control rendering starts
    var waitingPopUp;
    var inActiveDiv;
    var hostUrl = 'https://services.syncfusion.com/js/production/api/documenteditor/';
    var container = new ej.documenteditor.DocumentEditorContainer({ serviceUrl:hostUrl,enableToolbar: true, height: '590px',documentEditorSettings: { showRuler: true },
    toolbarItems: [
           'New', 'Open', 'Separator', 'Undo',
           'Redo',
           'Separator',
           {
               prefixIcon: 'sf-icon-InsertMergeField',
               tooltipText: 'Insert Field',
               text: onWrapText('Insert Field'),
               id: 'InsertField'
           },
           {
               prefixIcon: 'sf-icon-FinishMerge',
               tooltipText: 'Merge Document',
               text: onWrapText('Merge Document'),
               id: 'MergeDocument'
           },
           'Separator',
           'Image',
           'Table',
           'Hyperlink',
           'Bookmark',
           'TableOfContents',
           'Separator',
           'Header',
           'Footer',
           'PageSetup',
           'PageNumber',
           'Break',
           'Separator',
           'Find',
           'Separator',
           'Comments',
           'TrackChanges',
           'Separator',
           'LocalClipboard',
           'RestrictEditing',
           'Separator',
           'FormFields',
           'UpdateFields',
       ]
    });
    ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar);
    container.appendTo('#container');
    
    function onWrapText(text) {
        var content = '';
        var index = text.lastIndexOf(' ');
        content = text.slice(0, index);
        text.slice(index);
        content += '<div class="e-de-text-wrap">' + text.slice(index) + '</div>';
        return content;
    }
    container.toolbarClick = function(args) {
        switch (args.item.id) {
            case 'MergeDocument':
                mergeDocument();
                break;
            case 'InsertField':
                showInsertFielddialog();
                break;
        }
    };
    
    var listData = [
        {
            text: 'ProductName',
            category: 'Drag or click the field to insert.',
            htmlAttributes: { draggable: true }
        },
        {
            text: 'ShipName',
            category: 'Drag or click the field to insert.',
            htmlAttributes: { draggable: true }
        },
        {
            text: 'CustomerID',
            category: 'Drag or click the field to insert.',
            htmlAttributes: { draggable: true }
        },
        {
            text: 'Quantity',
            category: 'Drag or click the field to insert.',
            htmlAttributes: { draggable: true }
        },
        {
            text: 'UnitPrice',
            category: 'Drag or click the field to insert.',
            htmlAttributes: { draggable: true }
        },
        {
            text: 'Discount',
            category: 'Drag or click the field to insert.',
            htmlAttributes: { draggable: true }
        },
        {
            text: 'ShipAddress',
            category: 'Drag or click the field to insert.',
            htmlAttributes: { draggable: true }
        },
        {
            text: 'ShipCity',
            category: 'Drag or click the field to insert.',
            htmlAttributes: { draggable: true }
        },
        {
            text: 'ShipCountry',
            category: 'Drag or click the field to insert.',
            htmlAttributes: { draggable: true }
        },
        {
            text: 'OrderId',
            category: 'Drag or click the field to insert.',
            htmlAttributes: { draggable: true }
        },
        {
            text: 'OrderDate',
            category: 'Drag or click the field to insert.',
            htmlAttributes: { draggable: true }
        }
    ];
    var listDivElement = document.getElementById('listview');
    var listView = new ej.lists.ListView({
        dataSource: listData,
        fields: { tooltip: 'category' },
        select: onselect
    });
    listView.appendTo(listDivElement);
    document.getElementById('listview').addEventListener('dragstart', function(event) {
        event.dataTransfer.setData('Text', event.target.innerText);
        event.target.classList.add('de-drag-target');
    });
    function onselect(args) {
        var fieldName = args.text;
        listView.selectItem(undefined);
        insertField(fieldName);
    }
    function insertField(fieldName) {
        var fileName = fieldName.replace(/\n/g, '').replace(/\r/g, '').replace(/\r\n/g, '');
        var fieldCode = 'MERGEFIELD  ' + fileName + '  \\* MERGEFORMAT ';
        container.documentEditor.editor.insertField(fieldCode, '«' + fieldName + '»');
        container.documentEditor.focusIn();
    }
    
    // Prevent default drag over for document editor element
    document.getElementById('container').addEventListener('dragover', function(event) {
        event.preventDefault();
    });
    
    // Drop Event for document editor element
    document.getElementById('container').addEventListener('drop', function(e) {
        var text = e.dataTransfer.getData('Text');
        container.documentEditor.selection.select({ x: e.offsetX, y: e.offsetY, extend: false });
        insertField(text);
    });
    
    document.addEventListener('dragend', function(event){
        if (event.target.classList.contains('de-drag-target')) {
            event.target.classList.remove('de-drag-target');
        }
    });
    function showInsertFielddialog() {
        var instance = this;
        if (document.getElementById('insert_merge_field') === null || document.getElementById('insert_merge_field') === undefined) {
            var fieldcontainer = document.createElement('div');
            fieldcontainer.id = 'insert_merge_field';
            document.body.appendChild(fieldcontainer);
            insertFieldDialogObj.appendTo('#insert_merge_field');
            fieldcontainer.parentElement.style.position = 'fixed';
            fieldcontainer.style.width = 'auto';
            fieldcontainer.style.height = 'auto';
        }
        insertFieldDialogObj.close = function() { container.documentEditor.focusIn(); };
        insertFieldDialogObj.beforeOpen = function() { container.documentEditor.focusIn(); };
        insertFieldDialogObj.show();
        var fieldNameTextBox = document.getElementById('field_text');
        fieldNameTextBox.value = '';
    }
    function closeFieldDialog() {
        insertFieldDialogObj.hide();
        container.documentEditor.focusIn();
    }
    var insertFieldDialogObj = new ej.popups.Dialog({
        header: 'Merge Field',
        content:
            '<div class="dialogContent">' + 
            // tslint:disable-next-line:max-line-length
            '<label class="e-insert-field-label">Name:</label></br><input type="text" id="field_text" class="e-input" placeholder="Type a field to insert eg. FirstName">' +
            '</div>',
        showCloseIcon: true,
        isModal: true,
        width: 'auto',
        height: 'auto',
        close: closeFieldDialog,
        buttons: [
            {
                'click': function() {
                    var fieldNameTextBox = document.getElementById('field_text');
                    var fieldName = fieldNameTextBox.value;
                    if (fieldName !== '') {
                        container.documentEditor.editor.insertField('MERGEFIELD ' + fieldName + ' \\* MERGEFORMAT');
                    }
                    insertFieldDialogObj.hide();
                    container.documentEditor.focusIn();
                },
                buttonModel: {
                    content: 'Ok',
                    cssClass: 'e-flat',
                    isPrimary: true,
                },
            },
            {
                'click': function(){
                    insertFieldDialogObj.hide();
                    container.documentEditor.focusIn();
                },
                buttonModel: {
                    content: 'Cancel',
                    cssClass: 'e-flat',
                },
            },
        ],
    });
    
    
    function mergeDocument() {
        container.documentEditor.saveAsBlob('Docx').then(function(blob) {
            var exportedDocumment = blob;
            var fileReader = new FileReader();
            fileReader.onload = function () {
                var base64String = fileReader.result;
                var responseData = {
                    fileName: container.documentEditor.documentName + '.docx',
                    documentData: base64String
                };
                waitingPopUp = document.getElementById('waiting-popup');
                inActiveDiv = document.getElementById('popup-overlay');
                showHideWaitingIndicator(true);
                var baseUrl = 'https://services.syncfusion.com/js/production/api/documenteditor/MailMerge';
                var httpRequest = new XMLHttpRequest();
                httpRequest.open('POST', baseUrl, true);
                httpRequest.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
                httpRequest.onreadystatechange = function () {
                    if (httpRequest.readyState === 4) {
                        if (httpRequest.status === 200 || httpRequest.status === 304) {
                            container.documentEditor.open(httpRequest.responseText);
                        } else {
                            // Failed to merge document
                            ej.popups.DialogUtility.alert({
                                title: 'Information',
                                content: 'failure to merge document',
                                showCloseIcon: true,
                                closeOnEscape: true,
                            });
                        }
                        showHideWaitingIndicator(false);
                    }
                };
                httpRequest.send(JSON.stringify((responseData)));
            };
            fileReader.readAsDataURL(blob);
        });
    }
    
    function showHideWaitingIndicator(show) {
        inActiveDiv.style.display = show ? 'block' : 'none';
        waitingPopUp.style.display = show ? 'block' : 'none';
    }
    
    var defaultDocument = {"sfdt":"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"};
    waitingPopUp = document.getElementById('waiting-popup');
    container.documentEditor.open(JSON.stringify(defaultDocument));    
    container.documentEditor.documentName = 'Mail Merge';    
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
