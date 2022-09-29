this.default = function () {

    //Documenteditor control rendering starts
    var waitingPopUp;
    var inActiveDiv;
    var hostUrl = 'https://ej2services.syncfusion.com/production/web-services/';
    var container = new ej.documenteditor.DocumentEditorContainer({enableToolbar: true, height: '590px',
    toolbarItems: [
           'New', 'Open', 'Separator', 'Undo',
           'Redo',
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
       ]
   });
    ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar);
    container.serviceUrl = hostUrl + 'api/documenteditor/';
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
        container.documentEditor.saveAsBlob('Docx').then((blob) = function() {
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
                var baseUrl = hostUrl + 'api/documenteditor/MailMerge';
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
   
    var defaultDocument = {
        "sections": [
            {
                "blocks": [
                    {
                        "rows": [
                            {
                                "rowFormat": {
                                    "allowBreakAcrossPages": true,
                                    "isHeader": false,
                                    "height": 83.5999984741211,
                                    "heightType": "AtLeast",
                                    "borders": {
                                        "left": {
                                            "lineStyle": "None",
                                            "lineWidth": 0.0,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": true
                                        },
                                        "right": {
                                            "lineStyle": "None",
                                            "lineWidth": 0.0,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": true
                                        },
                                        "top": {
                                            "lineStyle": "None",
                                            "lineWidth": 0.0,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": true
                                        },
                                        "bottom": {
                                            "lineStyle": "None",
                                            "lineWidth": 0.0,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": true
                                        },
                                        "vertical": {
                                            "lineStyle": "None",
                                            "lineWidth": 0.0,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": true
                                        },
                                        "horizontal": {
                                            "lineStyle": "None",
                                            "lineWidth": 0.0,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": true
                                        },
                                        "diagonalDown": {
                                            "lineStyle": "None",
                                            "lineWidth": 0.0,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false
                                        },
                                        "diagonalUp": {
                                            "lineStyle": "None",
                                            "lineWidth": 0.0,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false
                                        }
                                    }
                                },
                                "cells": [
                                    {
                                        "blocks": [
                                            {
                                                "characterFormat": {
                                                    "fontFamily": "Calibri"
                                                },
                                                "paragraphFormat": {
                                                    "styleName": "Header",
                                                    "tabs": [
                                                        {
                                                            "tabJustification": "Left",
                                                            "position": 0.0,
                                                            "tabLeader": "None",
                                                            "deletePosition": 234.0
                                                        },
                                                        {
                                                            "tabJustification": "Left",
                                                            "position": 0.0,
                                                            "tabLeader": "None",
                                                            "deletePosition": 468.0
                                                        }
                                                    ]
                                                },
                                                "inlines": [
                                                    {
                                                        "hasFieldEnd": true,
                                                        "fieldType": 0
                                                    },
                                                    {
                                                        "text": " MERGEFIELD  TableStart:Orders  \\* MERGEFORMAT ",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 2
                                                    },
                                                    {
                                                        "text": "«TableStart:Orders»",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 1
                                                    }
                                                ]
                                            },
                                            {
                                                "characterFormat": {
                                                    "bold": true,
                                                    "fontSize": 24.0,
                                                    "fontSizeBidi": 24.0
                                                },
                                                "paragraphFormat": {
                                                    "styleName": "Header",
                                                    "tabs": [
                                                        {
                                                            "tabJustification": "Left",
                                                            "position": 0.0,
                                                            "tabLeader": "None",
                                                            "deletePosition": 234.0
                                                        },
                                                        {
                                                            "tabJustification": "Left",
                                                            "position": 0.0,
                                                            "tabLeader": "None",
                                                            "deletePosition": 468.0
                                                        }
                                                    ]
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "INVOICE",
                                                        "characterFormat": {
                                                            "bold": true,
                                                            "fontSize": 24.0,
                                                            "fontSizeBidi": 24.0
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Header",
                                                    "tabs": [
                                                        {
                                                            "tabJustification": "Left",
                                                            "position": 0.0,
                                                            "tabLeader": "None",
                                                            "deletePosition": 234.0
                                                        },
                                                        {
                                                            "tabJustification": "Left",
                                                            "position": 0.0,
                                                            "tabLeader": "None",
                                                            "deletePosition": 468.0
                                                        }
                                                    ]
                                                },
                                                "inlines": [
                                                    {
                                                        "imageString": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM4AAAAJCAYAAAB68hPIAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAA+SURBVFhH7dgxEQAwDAOxgCuiYiyiEEgxxLN8Jwi/uMbM1qvuHmCnzn0D7AgHAsKBgHAgIBwICAcC7mhY6/kc4VEEyn2PzAAAAABJRU5ErkJggg==",
                                                        "length": 1,
                                                        "width": 103.0,
                                                        "height": 4.499999523162842,
                                                        "isInlineImage": true,
                                                        "isMetaFile": false
                                                    }
                                                ]
                                            },
                                            {
                                                "characterFormat": {
                                                    "bold": true,
                                                    "fontFamily": "Calibri"
                                                },
                                                "paragraphFormat": {
                                                    "styleName": "Header",
                                                    "tabs": [
                                                        {
                                                            "tabJustification": "Left",
                                                            "position": 0.0,
                                                            "tabLeader": "None",
                                                            "deletePosition": 234.0
                                                        },
                                                        {
                                                            "tabJustification": "Left",
                                                            "position": 0.0,
                                                            "tabLeader": "None",
                                                            "deletePosition": 468.0
                                                        }
                                                    ]
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Invoice to:",
                                                        "characterFormat": {
                                                            "bold": true,
                                                            "fontFamily": "Calibri"
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                "characterFormat": {
                                                    "fontFamily": "Calibri"
                                                },
                                                "paragraphFormat": {
                                                    "styleName": "Header",
                                                    "tabs": [
                                                        {
                                                            "tabJustification": "Left",
                                                            "position": 0.0,
                                                            "tabLeader": "None",
                                                            "deletePosition": 234.0
                                                        },
                                                        {
                                                            "tabJustification": "Left",
                                                            "position": 0.0,
                                                            "tabLeader": "None",
                                                            "deletePosition": 468.0
                                                        }
                                                    ]
                                                },
                                                "inlines": [
                                                    {
                                                        "hasFieldEnd": true,
                                                        "fieldType": 0
                                                    },
                                                    {
                                                        "text": " MERGEFIELD  ShipName  \\* MERGEFORMAT ",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 2
                                                    },
                                                    {
                                                        "text": "«ShipName»",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 1
                                                    }
                                                ]
                                            },
                                            {
                                                "characterFormat": {
                                                    "fontFamily": "Calibri"
                                                },
                                                "paragraphFormat": {
                                                    "styleName": "Header",
                                                    "tabs": [
                                                        {
                                                            "tabJustification": "Left",
                                                            "position": 0.0,
                                                            "tabLeader": "None",
                                                            "deletePosition": 234.0
                                                        },
                                                        {
                                                            "tabJustification": "Left",
                                                            "position": 0.0,
                                                            "tabLeader": "None",
                                                            "deletePosition": 468.0
                                                        }
                                                    ]
                                                },
                                                "inlines": [
                                                    {
                                                        "hasFieldEnd": true,
                                                        "fieldType": 0
                                                    },
                                                    {
                                                        "text": " MERGEFIELD  ShipAddress  \\* MERGEFORMAT ",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 2
                                                    },
                                                    {
                                                        "text": "«ShipAddress»",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 1
                                                    }
                                                ]
                                            },
                                            {
                                                "characterFormat": {
                                                    "fontFamily": "Calibri"
                                                },
                                                "paragraphFormat": {
                                                    "styleName": "Header",
                                                    "tabs": [
                                                        {
                                                            "tabJustification": "Left",
                                                            "position": 0.0,
                                                            "tabLeader": "None",
                                                            "deletePosition": 234.0
                                                        },
                                                        {
                                                            "tabJustification": "Left",
                                                            "position": 0.0,
                                                            "tabLeader": "None",
                                                            "deletePosition": 468.0
                                                        }
                                                    ]
                                                },
                                                "inlines": [
                                                    {
                                                        "hasFieldEnd": true,
                                                        "fieldType": 0
                                                    },
                                                    {
                                                        "text": " MERGEFIELD  ShipCity  \\* MERGEFORMAT ",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 2
                                                    },
                                                    {
                                                        "text": "«ShipCity»",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 1
                                                    },
                                                    {
                                                        "text": " - ",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri"
                                                        }
                                                    },
                                                    {
                                                        "hasFieldEnd": true,
                                                        "fieldType": 0
                                                    },
                                                    {
                                                        "text": " MERGEFIELD  ShipPostalCode  \\* MERGEFORMAT ",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 2
                                                    },
                                                    {
                                                        "text": "«ShipPostalCode»",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 1
                                                    }
                                                ]
                                            },
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Header",
                                                    "tabs": [
                                                        {
                                                            "tabJustification": "Left",
                                                            "position": 0.0,
                                                            "tabLeader": "None",
                                                            "deletePosition": 234.0
                                                        },
                                                        {
                                                            "tabJustification": "Left",
                                                            "position": 0.0,
                                                            "tabLeader": "None",
                                                            "deletePosition": 468.0
                                                        }
                                                    ]
                                                },
                                                "inlines": [
                                                    {
                                                        "hasFieldEnd": true,
                                                        "fieldType": 0
                                                    },
                                                    {
                                                        "text": " MERGEFIELD  ShipCountry  \\* MERGEFORMAT ",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 2
                                                    },
                                                    {
                                                        "text": "«",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri"
                                                        }
                                                    },
                                                    {
                                                        "text": "ShipCountry",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri"
                                                        }
                                                    },
                                                    {
                                                        "text": "»",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 1
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "leftMargin": 5.400000095367432,
                                            "rightMargin": 5.400000095367432,
                                            "topMargin": 0.0,
                                            "bottomMargin": 0.0,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 347.1000061035156,
                                            "preferredWidthType": "Point",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": false,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "right": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "top": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "bottom": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "vertical": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "horizontal": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "diagonalDown": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "diagonalUp": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                }
                                            },
                                            "shading": {
                                                "texture": "TextureNone",
                                                "backgroundColor": "#FFFFFFFF"
                                            },
                                            "cellWidth": 347.1000061035156
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Header",
                                                    "tabs": [
                                                        {
                                                            "tabJustification": "Left",
                                                            "position": 0.0,
                                                            "tabLeader": "None",
                                                            "deletePosition": 234.0
                                                        },
                                                        {
                                                            "tabJustification": "Left",
                                                            "position": 0.0,
                                                            "tabLeader": "None",
                                                            "deletePosition": 468.0
                                                        }
                                                    ]
                                                },
                                                "inlines": []
                                            },
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Header",
                                                    "tabs": [
                                                        {
                                                            "tabJustification": "Left",
                                                            "position": 0.0,
                                                            "tabLeader": "None",
                                                            "deletePosition": 234.0
                                                        },
                                                        {
                                                            "tabJustification": "Left",
                                                            "position": 0.0,
                                                            "tabLeader": "None",
                                                            "deletePosition": 468.0
                                                        }
                                                    ]
                                                },
                                                "inlines": []
                                            },
                                            {
                                                "paragraphFormat": {
                                                    "afterSpacing": 0.0,
                                                    "styleName": "Normal"
                                                },
                                                "inlines": []
                                            },
                                            {
                                                "characterFormat": {
                                                    "fontFamily": "Calibri"
                                                },
                                                "paragraphFormat": {
                                                    "afterSpacing": 0.0,
                                                    "styleName": "Normal"
                                                },
                                                "inlines": []
                                            },
                                            {
                                                "characterFormat": {
                                                    "bold": true,
                                                    "fontFamily": "Calibri"
                                                },
                                                "paragraphFormat": {
                                                    "styleName": "Header",
                                                    "tabs": [
                                                        {
                                                            "tabJustification": "Left",
                                                            "position": 0.0,
                                                            "tabLeader": "None",
                                                            "deletePosition": 234.0
                                                        },
                                                        {
                                                            "tabJustification": "Left",
                                                            "position": 0.0,
                                                            "tabLeader": "None",
                                                            "deletePosition": 468.0
                                                        }
                                                    ]
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Order ID         ",
                                                        "characterFormat": {
                                                            "bold": true,
                                                            "fontFamily": "Calibri"
                                                        }
                                                    },
                                                    {
                                                        "text": "  :",
                                                        "characterFormat": {
                                                            "bold": true,
                                                            "fontFamily": "Calibri"
                                                        }
                                                    },
                                                    {
                                                        "text": " ",
                                                        "characterFormat": {
                                                            "bold": true,
                                                            "fontFamily": "Calibri"
                                                        }
                                                    },
                                                    {
                                                        "hasFieldEnd": true,
                                                        "fieldType": 0
                                                    },
                                                    {
                                                        "text": " MERGEFIELD  OrderID  \\* MERGEFORMAT ",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 2
                                                    },
                                                    {
                                                        "text": "«OrderID»",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 1
                                                    }
                                                ]
                                            },
                                            {
                                                "characterFormat": {
                                                    "fontFamily": "Calibri"
                                                },
                                                "paragraphFormat": {
                                                    "styleName": "Header",
                                                    "tabs": [
                                                        {
                                                            "tabJustification": "Left",
                                                            "position": 0.0,
                                                            "tabLeader": "None",
                                                            "deletePosition": 234.0
                                                        },
                                                        {
                                                            "tabJustification": "Left",
                                                            "position": 0.0,
                                                            "tabLeader": "None",
                                                            "deletePosition": 468.0
                                                        }
                                                    ]
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Order",
                                                        "characterFormat": {
                                                            "bold": true,
                                                            "fontFamily": "Calibri"
                                                        }
                                                    },
                                                    {
                                                        "text": " Date    ",
                                                        "characterFormat": {
                                                            "bold": true,
                                                            "fontFamily": "Calibri"
                                                        }
                                                    },
                                                    {
                                                        "text": "  :",
                                                        "characterFormat": {
                                                            "bold": true,
                                                            "fontFamily": "Calibri"
                                                        }
                                                    },
                                                    {
                                                        "text": " ",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri"
                                                        }
                                                    },
                                                    {
                                                        "hasFieldEnd": true,
                                                        "fieldType": 0
                                                    },
                                                    {
                                                        "text": " MERGEFIELD  OrderDate \\@ \"dd-MMM-yyyy\" \\* MERGEFORMAT ",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 2
                                                    },
                                                    {
                                                        "text": "«OrderDate»",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 1
                                                    }
                                                ]
                                            },
                                            {
                                                "characterFormat": {
                                                    "bold": true,
                                                    "fontFamily": "Calibri"
                                                },
                                                "paragraphFormat": {
                                                    "styleName": "Header",
                                                    "tabs": [
                                                        {
                                                            "tabJustification": "Left",
                                                            "position": 0.0,
                                                            "tabLeader": "None",
                                                            "deletePosition": 234.0
                                                        },
                                                        {
                                                            "tabJustification": "Left",
                                                            "position": 0.0,
                                                            "tabLeader": "None",
                                                            "deletePosition": 468.0
                                                        }
                                                    ]
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Customer ID  ",
                                                        "characterFormat": {
                                                            "bold": true,
                                                            "fontFamily": "Calibri"
                                                        }
                                                    },
                                                    {
                                                        "text": "  :",
                                                        "characterFormat": {
                                                            "bold": true,
                                                            "fontFamily": "Calibri"
                                                        }
                                                    },
                                                    {
                                                        "text": " ",
                                                        "characterFormat": {
                                                            "bold": true,
                                                            "fontFamily": "Calibri"
                                                        }
                                                    },
                                                    {
                                                        "hasFieldEnd": true,
                                                        "fieldType": 0
                                                    },
                                                    {
                                                        "text": " MERGEFIELD  CustomerID  \\* MERGEFORMAT ",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 2
                                                    },
                                                    {
                                                        "text": "«CustomerID»",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 1
                                                    }
                                                ]
                                            },
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Header",
                                                    "tabs": [
                                                        {
                                                            "tabJustification": "Left",
                                                            "position": 0.0,
                                                            "tabLeader": "None",
                                                            "deletePosition": 234.0
                                                        },
                                                        {
                                                            "tabJustification": "Left",
                                                            "position": 0.0,
                                                            "tabLeader": "None",
                                                            "deletePosition": 468.0
                                                        }
                                                    ]
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Shipped Date  : ",
                                                        "characterFormat": {
                                                            "bold": true,
                                                            "fontFamily": "Calibri"
                                                        }
                                                    },
                                                    {
                                                        "hasFieldEnd": true,
                                                        "fieldType": 0
                                                    },
                                                    {
                                                        "text": " MERGEFIELD  ShippedDate \\@ \"dd-MMM-yyyy\" \\* MERGEFORMAT ",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 2
                                                    },
                                                    {
                                                        "text": "«ShippedDate»",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 1
                                                    },
                                                    {
                                                        "text": " ",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri"
                                                        }
                                                    },
                                                    {
                                                        "hasFieldEnd": true,
                                                        "fieldType": 0
                                                    },
                                                    {
                                                        "text": " MERGEFIEL",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri"
                                                        }
                                                    },
                                                    {
                                                        "text": "D  TableEnd:Orders  \\* MERGEFORMAT ",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 2
                                                    },
                                                    {
                                                        "text": "«TableEnd:Orders»",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 1
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "leftMargin": 5.400000095367432,
                                            "rightMargin": 5.400000095367432,
                                            "topMargin": 0.0,
                                            "bottomMargin": 0.0,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 203.6999969482422,
                                            "preferredWidthType": "Point",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": false,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "right": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "top": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "bottom": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "vertical": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "horizontal": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "diagonalDown": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "diagonalUp": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                }
                                            },
                                            "shading": {
                                                "texture": "TextureNone",
                                                "backgroundColor": "#FFFFFFFF"
                                            },
                                            "cellWidth": 203.6999969482422
                                        }
                                    }
                                ]
                            }
                        ],
                        "title": null,
                        "description": null,
                        "tableFormat": {
                            "allowAutoFit": false,
                            "leftIndent": 0.0,
                            "tableAlignment": "Left",
                            "preferredWidthType": "Auto",
                            "borders": {
                                "left": {
                                    "lineStyle": "None",
                                    "lineWidth": 0.0,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": true
                                },
                                "right": {
                                    "lineStyle": "None",
                                    "lineWidth": 0.0,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": true
                                },
                                "top": {
                                    "lineStyle": "None",
                                    "lineWidth": 0.0,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": true
                                },
                                "bottom": {
                                    "lineStyle": "None",
                                    "lineWidth": 0.0,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": true
                                },
                                "vertical": {
                                    "lineStyle": "None",
                                    "lineWidth": 0.0,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": true
                                },
                                "horizontal": {
                                    "lineStyle": "None",
                                    "lineWidth": 0.0,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": true
                                },
                                "diagonalDown": {
                                    "lineStyle": "None",
                                    "lineWidth": 0.0,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false
                                },
                                "diagonalUp": {
                                    "lineStyle": "None",
                                    "lineWidth": 0.0,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false
                                }
                            },
                            "bidi": false
                        }
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": []
                    },
                    {
                        "rows": [
                            {
                                "rowFormat": {
                                    "allowBreakAcrossPages": true,
                                    "isHeader": false,
                                    "height": 1.0,
                                    "heightType": "AtLeast",
                                    "borders": {
                                        "left": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#FFFFFFFF"
                                        },
                                        "right": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#FFFFFFFF"
                                        },
                                        "top": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#FFFFFFFF"
                                        },
                                        "bottom": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#FFFFFFFF"
                                        },
                                        "vertical": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#FFFFFFFF"
                                        },
                                        "horizontal": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#FFFFFFFF"
                                        },
                                        "diagonalDown": {
                                            "lineStyle": "None",
                                            "lineWidth": 0.0,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false
                                        },
                                        "diagonalUp": {
                                            "lineStyle": "None",
                                            "lineWidth": 0.0,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false
                                        }
                                    }
                                },
                                "cells": [
                                    {
                                        "blocks": [
                                            {
                                                "characterFormat": {
                                                    "bold": true,
                                                    "fontFamily": "Calibri",
                                                    "fontColor": "#FFFFFFFF",
                                                    "boldBidi": true,
                                                    "fontFamilyBidi": "Arial"
                                                },
                                                "paragraphFormat": {
                                                    "textAlignment": "Center",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Product",
                                                        "characterFormat": {
                                                            "bold": true,
                                                            "fontFamily": "Calibri",
                                                            "fontColor": "#FFFFFFFF",
                                                            "boldBidi": true,
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "text": " ID",
                                                        "characterFormat": {
                                                            "bold": true,
                                                            "fontFamily": "Calibri",
                                                            "fontColor": "#FFFFFFFF",
                                                            "boldBidi": true,
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "leftMargin": 5.400000095367432,
                                            "rightMargin": 5.400000095367432,
                                            "topMargin": 0.0,
                                            "bottomMargin": 0.0,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 107.9000015258789,
                                            "preferredWidthType": "Point",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": false,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "right": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "top": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "bottom": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "vertical": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "horizontal": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "diagonalDown": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "diagonalUp": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                }
                                            },
                                            "shading": {
                                                "texture": "TextureNone",
                                                "backgroundColor": "#2E74B5FF"
                                            },
                                            "cellWidth": 107.9000015258789
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "characterFormat": {
                                                    "bold": true,
                                                    "fontFamily": "Calibri",
                                                    "fontColor": "#FFFFFFFF",
                                                    "boldBidi": true,
                                                    "fontFamilyBidi": "Arial"
                                                },
                                                "paragraphFormat": {
                                                    "textAlignment": "Center",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Quantity",
                                                        "characterFormat": {
                                                            "bold": true,
                                                            "fontFamily": "Calibri",
                                                            "fontColor": "#FFFFFFFF",
                                                            "boldBidi": true,
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "leftMargin": 5.400000095367432,
                                            "rightMargin": 5.400000095367432,
                                            "topMargin": 0.0,
                                            "bottomMargin": 0.0,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 107.9000015258789,
                                            "preferredWidthType": "Point",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": false,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "right": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "top": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "bottom": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "vertical": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "horizontal": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "diagonalDown": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "diagonalUp": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                }
                                            },
                                            "shading": {
                                                "texture": "TextureNone",
                                                "backgroundColor": "#2E74B5FF"
                                            },
                                            "cellWidth": 107.9000015258789
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "characterFormat": {
                                                    "bold": true,
                                                    "fontFamily": "Calibri",
                                                    "fontColor": "#FFFFFFFF",
                                                    "boldBidi": true,
                                                    "fontFamilyBidi": "Arial"
                                                },
                                                "paragraphFormat": {
                                                    "textAlignment": "Center",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Unit ",
                                                        "characterFormat": {
                                                            "bold": true,
                                                            "fontFamily": "Calibri",
                                                            "fontColor": "#FFFFFFFF",
                                                            "boldBidi": true,
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "text": "Price",
                                                        "characterFormat": {
                                                            "bold": true,
                                                            "fontFamily": "Calibri",
                                                            "fontColor": "#FFFFFFFF",
                                                            "boldBidi": true,
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "leftMargin": 5.400000095367432,
                                            "rightMargin": 5.400000095367432,
                                            "topMargin": 0.0,
                                            "bottomMargin": 0.0,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 107.9000015258789,
                                            "preferredWidthType": "Point",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": false,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "right": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "top": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "bottom": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "vertical": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "horizontal": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "diagonalDown": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "diagonalUp": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                }
                                            },
                                            "shading": {
                                                "texture": "TextureNone",
                                                "backgroundColor": "#2E74B5FF"
                                            },
                                            "cellWidth": 107.9000015258789
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "characterFormat": {
                                                    "bold": true,
                                                    "fontFamily": "Calibri",
                                                    "fontColor": "#FFFFFFFF",
                                                    "boldBidi": true,
                                                    "fontFamilyBidi": "Arial"
                                                },
                                                "paragraphFormat": {
                                                    "textAlignment": "Center",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Discount",
                                                        "characterFormat": {
                                                            "bold": true,
                                                            "fontFamily": "Calibri",
                                                            "fontColor": "#FFFFFFFF",
                                                            "boldBidi": true,
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "leftMargin": 5.400000095367432,
                                            "rightMargin": 5.400000095367432,
                                            "topMargin": 0.0,
                                            "bottomMargin": 0.0,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 107.9000015258789,
                                            "preferredWidthType": "Point",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": false,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "right": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "top": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "bottom": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "vertical": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "horizontal": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "diagonalDown": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "diagonalUp": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                }
                                            },
                                            "shading": {
                                                "texture": "TextureNone",
                                                "backgroundColor": "#2E74B5FF"
                                            },
                                            "cellWidth": 107.9000015258789
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "characterFormat": {
                                                    "bold": true,
                                                    "fontFamily": "Calibri",
                                                    "fontColor": "#FFFFFFFF",
                                                    "boldBidi": true,
                                                    "fontFamilyBidi": "Arial"
                                                },
                                                "paragraphFormat": {
                                                    "textAlignment": "Center",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Price",
                                                        "characterFormat": {
                                                            "bold": true,
                                                            "fontFamily": "Calibri",
                                                            "fontColor": "#FFFFFFFF",
                                                            "boldBidi": true,
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "leftMargin": 5.400000095367432,
                                            "rightMargin": 5.400000095367432,
                                            "topMargin": 0.0,
                                            "bottomMargin": 0.0,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 107.9000015258789,
                                            "preferredWidthType": "Point",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": false,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "right": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "top": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "bottom": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "vertical": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "horizontal": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "diagonalDown": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "diagonalUp": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                }
                                            },
                                            "shading": {
                                                "texture": "TextureNone",
                                                "backgroundColor": "#2E74B5FF"
                                            },
                                            "cellWidth": 107.9000015258789
                                        }
                                    }
                                ]
                            },
                            {
                                "rowFormat": {
                                    "allowBreakAcrossPages": true,
                                    "isHeader": false,
                                    "height": 1.0,
                                    "heightType": "AtLeast",
                                    "borders": {
                                        "left": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#FFFFFFFF"
                                        },
                                        "right": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#FFFFFFFF"
                                        },
                                        "top": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#FFFFFFFF"
                                        },
                                        "bottom": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#FFFFFFFF"
                                        },
                                        "vertical": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#FFFFFFFF"
                                        },
                                        "horizontal": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#FFFFFFFF"
                                        },
                                        "diagonalDown": {
                                            "lineStyle": "None",
                                            "lineWidth": 0.0,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false
                                        },
                                        "diagonalUp": {
                                            "lineStyle": "None",
                                            "lineWidth": 0.0,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false
                                        }
                                    }
                                },
                                "cells": [
                                    {
                                        "blocks": [
                                            {
                                                "characterFormat": {
                                                    "fontFamily": "Calibri",
                                                    "fontFamilyBidi": "Arial"
                                                },
                                                "paragraphFormat": {
                                                    "textAlignment": "Center",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "hasFieldEnd": true,
                                                        "fieldType": 0
                                                    },
                                                    {
                                                        "text": " MERGEFIELD  TableStart:Order  \\* MERGEFORMAT ",
                                                        "characterFormat": {
                                                            "bold": true,
                                                            "fontFamily": "Calibri",
                                                            "boldBidi": true,
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 2
                                                    },
                                                    {
                                                        "text": "«",
                                                        "characterFormat": {
                                                            "bold": true,
                                                            "fontFamily": "Calibri",
                                                            "boldBidi": true,
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "text": "TableStart:Order",
                                                        "characterFormat": {
                                                            "bold": true,
                                                            "fontFamily": "Calibri",
                                                            "boldBidi": true,
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "text": "»",
                                                        "characterFormat": {
                                                            "bold": true,
                                                            "fontFamily": "Calibri",
                                                            "boldBidi": true,
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 1
                                                    },
                                                    {
                                                        "text": " ",
                                                        "characterFormat": {
                                                            "bold": true,
                                                            "fontFamily": "Calibri",
                                                            "boldBidi": true,
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "hasFieldEnd": true,
                                                        "fieldType": 0
                                                    },
                                                    {
                                                        "text": " MERGEFIELD  ProductName  \\* MERGEFORMAT ",
                                                        "characterFormat": {
                                                            "bold": true,
                                                            "fontFamily": "Calibri",
                                                            "boldBidi": true,
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 2
                                                    },
                                                    {
                                                        "text": "«",
                                                        "characterFormat": {
                                                            "bold": true,
                                                            "fontFamily": "Calibri",
                                                            "boldBidi": true,
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "text": "ProductName",
                                                        "characterFormat": {
                                                            "bold": true,
                                                            "fontFamily": "Calibri",
                                                            "boldBidi": true,
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "text": "»",
                                                        "characterFormat": {
                                                            "bold": true,
                                                            "fontFamily": "Calibri",
                                                            "boldBidi": true,
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 1
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "leftMargin": 5.400000095367432,
                                            "rightMargin": 5.400000095367432,
                                            "topMargin": 0.0,
                                            "bottomMargin": 0.0,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 107.9000015258789,
                                            "preferredWidthType": "Point",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": false,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "right": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "top": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "bottom": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "vertical": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "horizontal": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "diagonalDown": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "diagonalUp": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                }
                                            },
                                            "shading": {
                                                "texture": "TextureNone",
                                                "backgroundColor": "#E7E6E6FF"
                                            },
                                            "cellWidth": 107.9000015258789
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "characterFormat": {
                                                    "fontFamily": "Calibri",
                                                    "fontFamilyBidi": "Arial"
                                                },
                                                "paragraphFormat": {
                                                    "textAlignment": "Center",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "hasFieldEnd": true,
                                                        "fieldType": 0
                                                    },
                                                    {
                                                        "text": " MERGEFIELD  Quantity  \\* MERGEFORMAT ",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 2
                                                    },
                                                    {
                                                        "text": "«",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "text": "Quantity",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "text": "»",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 1
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "leftMargin": 5.400000095367432,
                                            "rightMargin": 5.400000095367432,
                                            "topMargin": 0.0,
                                            "bottomMargin": 0.0,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 107.9000015258789,
                                            "preferredWidthType": "Point",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": false,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "right": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "top": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "bottom": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "vertical": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "horizontal": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "diagonalDown": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "diagonalUp": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                }
                                            },
                                            "shading": {
                                                "texture": "TextureNone",
                                                "backgroundColor": "#E7E6E6FF"
                                            },
                                            "cellWidth": 107.9000015258789
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "characterFormat": {
                                                    "fontFamily": "Calibri",
                                                    "fontFamilyBidi": "Arial"
                                                },
                                                "paragraphFormat": {
                                                    "textAlignment": "Center",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "$",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "hasFieldEnd": true,
                                                        "fieldType": 0
                                                    },
                                                    {
                                                        "text": " MERGEFIELD  UnitPrice  \\* MERGEFORMAT ",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 2
                                                    },
                                                    {
                                                        "text": "«",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "text": "UnitPrice",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "text": "»",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 1
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "leftMargin": 5.400000095367432,
                                            "rightMargin": 5.400000095367432,
                                            "topMargin": 0.0,
                                            "bottomMargin": 0.0,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 107.9000015258789,
                                            "preferredWidthType": "Point",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": false,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "right": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "top": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "bottom": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "vertical": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "horizontal": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "diagonalDown": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "diagonalUp": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                }
                                            },
                                            "shading": {
                                                "texture": "TextureNone",
                                                "backgroundColor": "#E7E6E6FF"
                                            },
                                            "cellWidth": 107.9000015258789
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "characterFormat": {
                                                    "fontFamily": "Calibri",
                                                    "fontFamilyBidi": "Arial"
                                                },
                                                "paragraphFormat": {
                                                    "textAlignment": "Center",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "hasFieldEnd": true,
                                                        "fieldType": 0
                                                    },
                                                    {
                                                        "text": " MERGEFIELD  Discount  \\* MERGEFORMAT ",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 2
                                                    },
                                                    {
                                                        "text": "«",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "text": "Discount",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "text": "»",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 1
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "leftMargin": 5.400000095367432,
                                            "rightMargin": 5.400000095367432,
                                            "topMargin": 0.0,
                                            "bottomMargin": 0.0,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 107.9000015258789,
                                            "preferredWidthType": "Point",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": false,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "right": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "top": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "bottom": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "vertical": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "horizontal": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "diagonalDown": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "diagonalUp": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                }
                                            },
                                            "shading": {
                                                "texture": "TextureNone",
                                                "backgroundColor": "#E7E6E6FF"
                                            },
                                            "cellWidth": 107.9000015258789
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "characterFormat": {
                                                    "fontFamily": "Calibri",
                                                    "fontFamilyBidi": "Arial"
                                                },
                                                "paragraphFormat": {
                                                    "textAlignment": "Center",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "$",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "hasFieldEnd": true,
                                                        "fieldType": 0
                                                    },
                                                    {
                                                        "text": " MERGEFIELD  ExtendedPrice  \\* MERGEFORMAT ",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 2
                                                    },
                                                    {
                                                        "text": "«",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "text": "ExtendedPrice",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "text": "»",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 1
                                                    },
                                                    {
                                                        "text": " ",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "hasFieldEnd": true,
                                                        "fieldType": 0
                                                    },
                                                    {
                                                        "text": " MERGEFIELD  TableEnd:Order  \\* ME",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "text": "RGEFORMAT ",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 2
                                                    },
                                                    {
                                                        "text": "«",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "text": "TableEnd:Order",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "text": "»",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 1
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "leftMargin": 5.400000095367432,
                                            "rightMargin": 5.400000095367432,
                                            "topMargin": 0.0,
                                            "bottomMargin": 0.0,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 107.9000015258789,
                                            "preferredWidthType": "Point",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": false,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "right": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "top": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "bottom": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "vertical": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "horizontal": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "diagonalDown": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "diagonalUp": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                }
                                            },
                                            "shading": {
                                                "texture": "TextureNone",
                                                "backgroundColor": "#E7E6E6FF"
                                            },
                                            "cellWidth": 107.9000015258789
                                        }
                                    }
                                ]
                            }
                        ],
                        "title": null,
                        "description": null,
                        "tableFormat": {
                            "allowAutoFit": true,
                            "leftIndent": 0.0,
                            "tableAlignment": "Left",
                            "preferredWidthType": "Auto",
                            "borders": {
                                "left": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false,
                                    "color": "#FFFFFFFF"
                                },
                                "right": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false,
                                    "color": "#FFFFFFFF"
                                },
                                "top": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false,
                                    "color": "#FFFFFFFF"
                                },
                                "bottom": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false,
                                    "color": "#FFFFFFFF"
                                },
                                "vertical": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false,
                                    "color": "#FFFFFFFF"
                                },
                                "horizontal": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false,
                                    "color": "#FFFFFFFF"
                                },
                                "diagonalDown": {
                                    "lineStyle": "None",
                                    "lineWidth": 0.0,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false
                                },
                                "diagonalUp": {
                                    "lineStyle": "None",
                                    "lineWidth": 0.0,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false
                                }
                            },
                            "bidi": false
                        }
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": []
                    },
                    {
                        "rows": [
                            {
                                "rowFormat": {
                                    "allowBreakAcrossPages": true,
                                    "isHeader": false,
                                    "height": 1.0,
                                    "heightType": "AtLeast",
                                    "borders": {
                                        "left": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#FFFFFFFF"
                                        },
                                        "right": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#FFFFFFFF"
                                        },
                                        "top": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#FFFFFFFF"
                                        },
                                        "bottom": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#FFFFFFFF"
                                        },
                                        "vertical": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#FFFFFFFF"
                                        },
                                        "horizontal": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#FFFFFFFF"
                                        },
                                        "diagonalDown": {
                                            "lineStyle": "None",
                                            "lineWidth": 0.0,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false
                                        },
                                        "diagonalUp": {
                                            "lineStyle": "None",
                                            "lineWidth": 0.0,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false
                                        }
                                    }
                                },
                                "cells": [
                                    {
                                        "blocks": [
                                            {
                                                "characterFormat": {
                                                    "fontFamily": "Calibri",
                                                    "fontFamilyBidi": "Arial"
                                                },
                                                "paragraphFormat": {
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Sub Total",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "leftMargin": 5.400000095367432,
                                            "rightMargin": 5.400000095367432,
                                            "topMargin": 0.0,
                                            "bottomMargin": 0.0,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidthType": "Auto",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": false,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "right": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "top": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "bottom": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "vertical": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "horizontal": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "diagonalDown": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "diagonalUp": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                }
                                            },
                                            "shading": {
                                                "texture": "TextureNone",
                                                "backgroundColor": "#E7E6E6FF"
                                            },
                                            "cellWidth": 56.349998474121097
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "characterFormat": {
                                                    "fontFamily": "Calibri",
                                                    "fontFamilyBidi": "Arial"
                                                },
                                                "paragraphFormat": {
                                                    "textAlignment": "Right",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "hasFieldEnd": true,
                                                        "fieldType": 0
                                                    },
                                                    {
                                                        "text": " MERGEFIELD  TableStart:OrderTotals  \\* MERGEFORMAT ",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 2
                                                    },
                                                    {
                                                        "text": "«",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "text": "TableStart:OrderTotals",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "text": "»",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 1
                                                    },
                                                    {
                                                        "text": " ",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "name": "_GoBack",
                                                        "bookmarkType": 0
                                                    },
                                                    {
                                                        "name": "_GoBack",
                                                        "bookmarkType": 1
                                                    },
                                                    {
                                                        "text": "$",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "hasFieldEnd": true,
                                                        "fieldType": 0
                                                    },
                                                    {
                                                        "text": " MERGEFIELD  Subtotal  \\* MERGEFORMAT ",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 2
                                                    },
                                                    {
                                                        "text": "«Subtotal»",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 1
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "leftMargin": 5.400000095367432,
                                            "rightMargin": 5.400000095367432,
                                            "topMargin": 0.0,
                                            "bottomMargin": 0.0,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidthType": "Auto",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": false,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "right": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "top": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "bottom": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "vertical": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "horizontal": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "diagonalDown": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "diagonalUp": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                }
                                            },
                                            "shading": {
                                                "texture": "TextureNone",
                                                "backgroundColor": "#E7E6E6FF"
                                            },
                                            "cellWidth": 134.39999389648438
                                        }
                                    }
                                ]
                            },
                            {
                                "rowFormat": {
                                    "allowBreakAcrossPages": true,
                                    "isHeader": false,
                                    "height": 1.0,
                                    "heightType": "AtLeast",
                                    "borders": {
                                        "left": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#FFFFFFFF"
                                        },
                                        "right": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#FFFFFFFF"
                                        },
                                        "top": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#FFFFFFFF"
                                        },
                                        "bottom": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#FFFFFFFF"
                                        },
                                        "vertical": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#FFFFFFFF"
                                        },
                                        "horizontal": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#FFFFFFFF"
                                        },
                                        "diagonalDown": {
                                            "lineStyle": "None",
                                            "lineWidth": 0.0,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false
                                        },
                                        "diagonalUp": {
                                            "lineStyle": "None",
                                            "lineWidth": 0.0,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false
                                        }
                                    }
                                },
                                "cells": [
                                    {
                                        "blocks": [
                                            {
                                                "characterFormat": {
                                                    "fontFamily": "Calibri",
                                                    "fontFamilyBidi": "Arial"
                                                },
                                                "paragraphFormat": {
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Freight",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "leftMargin": 5.400000095367432,
                                            "rightMargin": 5.400000095367432,
                                            "topMargin": 0.0,
                                            "bottomMargin": 0.0,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidthType": "Auto",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": false,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "right": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "top": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "bottom": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "vertical": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "horizontal": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "diagonalDown": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "diagonalUp": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                }
                                            },
                                            "shading": {
                                                "texture": "TextureNone",
                                                "backgroundColor": "#E7E6E6FF"
                                            },
                                            "cellWidth": 56.349998474121097
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "characterFormat": {
                                                    "fontFamily": "Calibri",
                                                    "fontFamilyBidi": "Arial"
                                                },
                                                "paragraphFormat": {
                                                    "textAlignment": "Right",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "$",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "hasFieldEnd": true,
                                                        "fieldType": 0
                                                    },
                                                    {
                                                        "text": " MERGEFIELD  Freight  \\* MERGEFORMAT ",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 2
                                                    },
                                                    {
                                                        "text": "«",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "text": "Freight",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "text": "»",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 1
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "leftMargin": 5.400000095367432,
                                            "rightMargin": 5.400000095367432,
                                            "topMargin": 0.0,
                                            "bottomMargin": 0.0,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidthType": "Auto",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": false,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "right": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "top": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "bottom": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "vertical": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "horizontal": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "diagonalDown": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "diagonalUp": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                }
                                            },
                                            "shading": {
                                                "texture": "TextureNone",
                                                "backgroundColor": "#E7E6E6FF"
                                            },
                                            "cellWidth": 134.39999389648438
                                        }
                                    }
                                ]
                            },
                            {
                                "rowFormat": {
                                    "allowBreakAcrossPages": true,
                                    "isHeader": false,
                                    "height": 1.0,
                                    "heightType": "AtLeast",
                                    "borders": {
                                        "left": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#FFFFFFFF"
                                        },
                                        "right": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#FFFFFFFF"
                                        },
                                        "top": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#FFFFFFFF"
                                        },
                                        "bottom": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#FFFFFFFF"
                                        },
                                        "vertical": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#FFFFFFFF"
                                        },
                                        "horizontal": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#FFFFFFFF"
                                        },
                                        "diagonalDown": {
                                            "lineStyle": "None",
                                            "lineWidth": 0.0,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false
                                        },
                                        "diagonalUp": {
                                            "lineStyle": "None",
                                            "lineWidth": 0.0,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false
                                        }
                                    }
                                },
                                "cells": [
                                    {
                                        "blocks": [
                                            {
                                                "characterFormat": {
                                                    "fontFamily": "Calibri",
                                                    "fontFamilyBidi": "Arial"
                                                },
                                                "paragraphFormat": {
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Total",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "leftMargin": 5.400000095367432,
                                            "rightMargin": 5.400000095367432,
                                            "topMargin": 0.0,
                                            "bottomMargin": 0.0,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidthType": "Auto",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": false,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "right": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "top": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "bottom": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "vertical": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "horizontal": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "diagonalDown": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "diagonalUp": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                }
                                            },
                                            "shading": {
                                                "texture": "TextureNone",
                                                "backgroundColor": "#E7E6E6FF"
                                            },
                                            "cellWidth": 56.349998474121097
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "characterFormat": {
                                                    "fontFamily": "Calibri",
                                                    "fontFamilyBidi": "Arial"
                                                },
                                                "paragraphFormat": {
                                                    "textAlignment": "Right",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "$",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "hasFieldEnd": true,
                                                        "fieldType": 0
                                                    },
                                                    {
                                                        "text": " MERGEFIELD  Total  \\* MERGEFORMAT ",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 2
                                                    },
                                                    {
                                                        "text": "«Total»",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 1
                                                    },
                                                    {
                                                        "text": " ",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "hasFieldEnd": true,
                                                        "fieldType": 0
                                                    },
                                                    {
                                                        "text": " MERGEFIELD  TableEnd:OrderTotals  \\* MERGEFORMAT ",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 2
                                                    },
                                                    {
                                                        "text": "«",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "text": "TableEnd:OrderTotals",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "text": "»",
                                                        "characterFormat": {
                                                            "fontFamily": "Calibri",
                                                            "fontFamilyBidi": "Arial"
                                                        }
                                                    },
                                                    {
                                                        "fieldType": 1
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "leftMargin": 5.400000095367432,
                                            "rightMargin": 5.400000095367432,
                                            "topMargin": 0.0,
                                            "bottomMargin": 0.0,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidthType": "Auto",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": false,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "right": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "top": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "bottom": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "vertical": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "horizontal": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "diagonalDown": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "diagonalUp": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                }
                                            },
                                            "shading": {
                                                "texture": "TextureNone",
                                                "backgroundColor": "#E7E6E6FF"
                                            },
                                            "cellWidth": 134.39999389648438
                                        }
                                    }
                                ]
                            }
                        ],
                        "title": null,
                        "description": null,
                        "tableFormat": {
                            "allowAutoFit": true,
                            "leftIndent": 0.0,
                            "tableAlignment": "Right",
                            "preferredWidthType": "Auto",
                            "borders": {
                                "left": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false,
                                    "color": "#FFFFFFFF"
                                },
                                "right": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false,
                                    "color": "#FFFFFFFF"
                                },
                                "top": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false,
                                    "color": "#FFFFFFFF"
                                },
                                "bottom": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false,
                                    "color": "#FFFFFFFF"
                                },
                                "vertical": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false,
                                    "color": "#FFFFFFFF"
                                },
                                "horizontal": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false,
                                    "color": "#FFFFFFFF"
                                },
                                "diagonalDown": {
                                    "lineStyle": "None",
                                    "lineWidth": 0.0,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false
                                },
                                "diagonalUp": {
                                    "lineStyle": "None",
                                    "lineWidth": 0.0,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false
                                }
                            },
                            "shading": {
                                "texture": "TextureNone",
                                "backgroundColor": "#E7E6E6FF"
                            },
                            "bidi": false
                        }
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": []
                    },
                    {
                        "characterFormat": {
                            "fontSize": 16.0,
                            "fontSizeBidi": 16.0
                        },
                        "paragraphFormat": {
                            "textAlignment": "Center",
                            "styleName": "Normal"
                        },
                        "inlines": []
                    },
                    {
                        "characterFormat": {
                            "fontSize": 16.0,
                            "fontFamily": "Calibri",
                            "fontSizeBidi": 16.0
                        },
                        "paragraphFormat": {
                            "textAlignment": "Center",
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Thank you for doing business with us!",
                                "characterFormat": {
                                    "fontSize": 16.0,
                                    "fontFamily": "Calibri",
                                    "fontSizeBidi": 16.0
                                }
                            }
                        ]
                    }
                ],
                "headersFooters": {
                    "header": {
                        "blocks": [
                            {
                                "paragraphFormat": {
                                    "styleName": "Header"
                                },
                                "inlines": [
                                    {
                                        "shapeId": 2,
                                        "name": "Rectangle 2",
                                        "alternativeText": null,
                                        "title": null,
                                        "visible": true,
                                        "width": 614.8,
                                        "height": 15.05,
                                        "widthScale": 100.0,
                                        "heightScale": 100.0,
                                        "lineFormat": {
                                            "lineFormatType": "Solid",
                                            "color": "#000000FF",
                                            "weight": 1.0,
                                            "lineStyle": "Solid"
                                        },
                                        "verticalPosition": -183.55,
                                        "verticalOrigin": "Paragraph",
                                        "verticalAlignment": "None",
                                        "horizontalPosition": -74.45,
                                        "horizontalOrigin": "Column",
                                        "horizontalAlignment": "None",
                                        "zOrderPosition": 251657728,
                                        "allowOverlap": true,
                                        "layoutInCell": true,
                                        "lockAnchor": false,
                                        "autoShapeType": "Rectangle",
                                        "textFrame": {
                                            "textVerticalAlignment": "Top",
                                            "leftMargin": 7.087,
                                            "rightMargin": 7.087,
                                            "topMargin": 3.685,
                                            "bottomMargin": 3.685,
                                            "blocks": [
                                                {
                                                    "paragraphFormat": {
                                                        "styleName": "Normal"
                                                    },
                                                    "inlines": []
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                },
                "sectionFormat": {
                    "headerDistance": 36.0,
                    "footerDistance": 36.0,
                    "pageWidth": 612.0,
                    "pageHeight": 792.0,
                    "leftMargin": 36.0,
                    "rightMargin": 36.0,
                    "topMargin": 36.0,
                    "bottomMargin": 36.0,
                    "differentFirstPage": false,
                    "differentOddAndEvenPages": false,
                    "bidi": false,
                    "restartPageNumbering": false,
                    "pageStartingNumber": 0
                }
            }
        ],
        "characterFormat": {
            "fontSize": 11.0,
            "fontFamily": "Times New Roman",
            "fontColor": "#000000FF",
            "fontSizeBidi": 11.0,
            "fontFamilyBidi": "Times New Roman"
        },
        "background": {
            "color": "#FFFFFFFF"
        },
        "styles": [
            {
                "type": "Paragraph",
                "name": "Normal",
                "next": "Normal",
                "characterFormat": {
                    "fontSize": 12.0,
                    "fontSizeBidi": 12.0
                },
                "paragraphFormat": {
                    "afterSpacing": 8.0,
                    "lineSpacing": 1.0791666507720948,
                    "lineSpacingType": "Multiple"
                }
            },
            {
                "type": "Paragraph",
                "name": "Heading 1",
                "basedOn": "Normal",
                "next": "Normal",
                "link": "Heading 1 Char",
                "characterFormat": {
                    "fontSize": 16.0,
                    "fontFamily": "Calibri Light",
                    "fontColor": "#2F5496FF"
                },
                "paragraphFormat": {
                    "beforeSpacing": 12.0,
                    "afterSpacing": 0.0,
                    "outlineLevel": "Level1"
                }
            },
            {
                "type": "Paragraph",
                "name": "Heading 2",
                "basedOn": "Normal",
                "next": "Normal",
                "link": "Heading 2 Char",
                "characterFormat": {
                    "fontSize": 13.0,
                    "fontFamily": "Calibri Light",
                    "fontColor": "#2F5496FF"
                },
                "paragraphFormat": {
                    "beforeSpacing": 2.0,
                    "afterSpacing": 0.0,
                    "outlineLevel": "Level2"
                }
            },
            {
                "type": "Paragraph",
                "name": "Heading 3",
                "basedOn": "Normal",
                "next": "Normal",
                "link": "Heading 3 Char",
                "characterFormat": {
                    "fontFamily": "Calibri Light",
                    "fontColor": "#1F3763FF"
                },
                "paragraphFormat": {
                    "beforeSpacing": 2.0,
                    "afterSpacing": 0.0,
                    "outlineLevel": "Level3"
                }
            },
            {
                "type": "Paragraph",
                "name": "Heading 4",
                "basedOn": "Normal",
                "next": "Normal",
                "link": "Heading 4 Char",
                "characterFormat": {
                    "italic": true,
                    "fontFamily": "Calibri Light",
                    "fontColor": "#2F5496FF"
                },
                "paragraphFormat": {
                    "beforeSpacing": 2.0,
                    "afterSpacing": 0.0,
                    "outlineLevel": "Level4"
                }
            },
            {
                "type": "Paragraph",
                "name": "Heading 5",
                "basedOn": "Normal",
                "next": "Normal",
                "link": "Heading 5 Char",
                "characterFormat": {
                    "fontFamily": "Calibri Light",
                    "fontColor": "#2F5496FF"
                },
                "paragraphFormat": {
                    "beforeSpacing": 2.0,
                    "afterSpacing": 0.0,
                    "outlineLevel": "Level5"
                }
            },
            {
                "type": "Paragraph",
                "name": "Heading 6",
                "basedOn": "Normal",
                "next": "Normal",
                "link": "Heading 6 Char",
                "characterFormat": {
                    "fontFamily": "Calibri Light",
                    "fontColor": "#1F3763FF"
                },
                "paragraphFormat": {
                    "beforeSpacing": 2.0,
                    "afterSpacing": 0.0,
                    "outlineLevel": "Level6"
                }
            },
            {
                "type": "Character",
                "name": "Default Paragraph Font"
            },
            {
                "type": "Paragraph",
                "name": "Header",
                "basedOn": "Normal",
                "next": "Header",
                "link": "Header Char",
                "paragraphFormat": {
                    "afterSpacing": 0.0,
                    "lineSpacing": 1.0,
                    "lineSpacingType": "Multiple",
                    "tabs": [
                        {
                            "tabJustification": "Center",
                            "position": 234.0,
                            "tabLeader": "None",
                            "deletePosition": 0.0
                        },
                        {
                            "tabJustification": "Right",
                            "position": 468.0,
                            "tabLeader": "None",
                            "deletePosition": 0.0
                        }
                    ]
                }
            },
            {
                "type": "Character",
                "name": "Header Char",
                "basedOn": "Default Paragraph Font"
            },
            {
                "type": "Paragraph",
                "name": "Footer",
                "basedOn": "Normal",
                "next": "Footer",
                "link": "Footer Char",
                "paragraphFormat": {
                    "afterSpacing": 0.0,
                    "lineSpacing": 1.0,
                    "lineSpacingType": "Multiple",
                    "tabs": [
                        {
                            "tabJustification": "Center",
                            "position": 234.0,
                            "tabLeader": "None",
                            "deletePosition": 0.0
                        },
                        {
                            "tabJustification": "Right",
                            "position": 468.0,
                            "tabLeader": "None",
                            "deletePosition": 0.0
                        }
                    ]
                }
            },
            {
                "type": "Character",
                "name": "Footer Char",
                "basedOn": "Default Paragraph Font"
            },
            {
                "type": "Character",
                "name": "Hyperlink",
                "basedOn": "Default Paragraph Font",
                "characterFormat": {
                    "underline": "Single",
                    "fontColor": "#0563C1FF"
                }
            },
            {
                "type": "Character",
                "name": "Heading 1 Char",
                "basedOn": "Default Paragraph Font",
                "characterFormat": {
                    "fontSize": 16.0,
                    "fontFamily": "Calibri Light",
                    "fontColor": "#2F5496FF"
                }
            },
            {
                "type": "Character",
                "name": "Heading 2 Char",
                "basedOn": "Default Paragraph Font",
                "characterFormat": {
                    "fontSize": 13.0,
                    "fontFamily": "Calibri Light",
                    "fontColor": "#2F5496FF"
                }
            },
            {
                "type": "Character",
                "name": "Heading 3 Char",
                "basedOn": "Default Paragraph Font",
                "characterFormat": {
                    "fontSize": 12.0,
                    "fontFamily": "Calibri Light",
                    "fontColor": "#1F3763FF"
                }
            },
            {
                "type": "Character",
                "name": "Heading 4 Char",
                "basedOn": "Default Paragraph Font",
                "characterFormat": {
                    "italic": true,
                    "fontFamily": "Calibri Light",
                    "fontColor": "#2F5496FF"
                }
            },
            {
                "type": "Character",
                "name": "Heading 5 Char",
                "basedOn": "Default Paragraph Font",
                "characterFormat": {
                    "fontFamily": "Calibri Light",
                    "fontColor": "#2F5496FF"
                }
            },
            {
                "type": "Character",
                "name": "Heading 6 Char",
                "basedOn": "Default Paragraph Font",
                "characterFormat": {
                    "fontFamily": "Calibri Light",
                    "fontColor": "#1F3763FF"
                }
            }
        ],
        "defaultTabWidth": 36.0,
        "formatting": false,
        "trackChanges": false,
        "protectionType": "NoProtection",
        "enforcement": false,
        "dontUseHTMLParagraphAutoSpacing": false
    };
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