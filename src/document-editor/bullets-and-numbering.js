this.default = function () {

    //Documenteditor control rendering starts
    var hostUrl = 'https://ej2services.syncfusion.com/production/web-services/';
    var container = new ej.documenteditor.DocumentEditorContainer();
    ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar);
    container.serviceUrl = hostUrl + 'api/documenteditor/';
    container.appendTo('#container');
    container.height = '590px';
    var defaultDocument = {
        "sections": [
            {
                "blocks": [
                    {
                        "characterFormat": {
                            "fontColor": "#4472C4FF"
                        },
                        "paragraphFormat": {
                            "afterSpacing": 36.0,
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Types of Animals",
                                "characterFormat": {
                                    "fontSize": 18.0,
                                    "fontFamily": "Monotype Corsiva",
                                    "fontColor": "#4472C4FF"
                                }
                            }
                        ]
                    },
                    {
                        "characterFormat": {
                            "bold": true
                        },
                        "paragraphFormat": {
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 0,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "Mammals",
                                "characterFormat": {
                                    "bold": true
                                }
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 1,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "body covered by hair or fur"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 1,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "warm-blooded"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 1,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "have a backbone"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 1,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "produce milk"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 1,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "Examples"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 2,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "Tiger"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 2,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "Bat"
                            }
                        ]
                    },
                    {
                        "characterFormat": {
                            "bold": true
                        },
                        "paragraphFormat": {
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 0,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "Reptiles",
                                "characterFormat": {
                                    "bold": true
                                }
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 1,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "body covered by scales"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 1,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "cold-blooded"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 1,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "have a backbone"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 1,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "most lay "
                            },
                            {
                                "text": "hard-shelled"
                            },
                            {
                                "text": " eggs on land"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 1,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "Examples"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 2,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "Snake"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 2,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "Lizard"
                            }
                        ]
                    },
                    {
                        "characterFormat": {
                            "bold": true
                        },
                        "paragraphFormat": {
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 0,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "Birds",
                                "characterFormat": {
                                    "bold": true
                                }
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 1,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "body covered by feathers"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 1,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "warm-blooded"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 1,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "have a backbone"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 1,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "lay eggs"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 1,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "Examples"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 2,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "Pigeon"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 2,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "Hen"
                            }
                        ]
                    },
                    {
                        "characterFormat": {
                            "bold": true
                        },
                        "paragraphFormat": {
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 0,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "Insects",
                                "characterFormat": {
                                    "bold": true
                                }
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 1,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "most are small air-breathing animals"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 1,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "6 legs"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 1,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "2 antennae"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 1,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "3 body sections (head, thorax, abdomen)"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 1,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "Examples"
                            },
                            {
                                "name": "_GoBack",
                                "bookmarkType": 0
                            },
                            {
                                "name": "_GoBack",
                                "bookmarkType": 1
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 2,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "Butterfly"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 2,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "Spider"
                            }
                        ]
                    },
                    {
                        "characterFormat": {
                            "bold": true
                        },
                        "paragraphFormat": {
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 0,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "Aquatic Animals",
                                "characterFormat": {
                                    "bold": true
                                }
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 1,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "most have gills"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 1,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "found in lakes, rivers, and oceans"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 1,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "Examples"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 2,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "Blue Shark"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 2,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "Fish"
                            }
                        ]
                    }
                ],
                "headersFooters": {},
                "sectionFormat": {
                    "headerDistance": 36.0,
                    "footerDistance": 36.0,
                    "pageWidth": 612.0,
                    "pageHeight": 792.0,
                    "leftMargin": 72.0,
                    "rightMargin": 72.0,
                    "topMargin": 72.0,
                    "bottomMargin": 72.0,
                    "differentFirstPage": false,
                    "differentOddAndEvenPages": false
                }
            }
        ],
        "characterFormat": {
            "fontSize": 11.0,
            "fontFamily": "Calibri"
        },
        "paragraphFormat": {
            "afterSpacing": 8.0,
            "lineSpacing": 1.0791666507720947,
            "lineSpacingType": "Multiple"
        },
        "lists": [
            {
                "listId": 0,
                "abstractListId": 0
            }
        ],
        "abstractLists": [
            {
                "abstractListId": 0,
                "levels": [
                    {
                        "startAt": 1,
                        "restartLevel": 0,
                        "listLevelPattern": "Arabic",
                        "followCharacter": "Tab",
                        "numberFormat": "%1.",
                        "characterFormat": {
                            "bold": true,
                            "italic": false
                        },
                        "paragraphFormat": {
                            "leftIndent": 18.0,
                            "firstLineIndent": -18.0
                        }
                    },
                    {
                        "startAt": 1,
                        "restartLevel": 1,
                        "listLevelPattern": "Arabic",
                        "followCharacter": "Tab",
                        "numberFormat": "%1.%2.",
                        "characterFormat": {
                            "bold": false,
                            "italic": true
                        },
                        "paragraphFormat": {
                            "leftIndent": 39.599998474121094,
                            "firstLineIndent": -21.600000381469727
                        }
                    },
                    {
                        "listLevelPattern": "Bullet",
                        "followCharacter": "Tab",
                        "numberFormat": "",
                        "characterFormat": {
                            "fontFamily": "Symbol"
                        },
                        "paragraphFormat": {
                            "leftIndent": 61.200000762939453,
                            "firstLineIndent": -25.200000762939453
                        }
                    },
                    {
                        "startAt": 1,
                        "restartLevel": 3,
                        "listLevelPattern": "Arabic",
                        "followCharacter": "Tab",
                        "numberFormat": "%1.%2.%3.%4.",
                        "paragraphFormat": {
                            "leftIndent": 86.4000015258789,
                            "firstLineIndent": -32.400001525878906
                        }
                    },
                    {
                        "startAt": 1,
                        "restartLevel": 4,
                        "listLevelPattern": "Arabic",
                        "followCharacter": "Tab",
                        "numberFormat": "%1.%2.%3.%4.%5.",
                        "paragraphFormat": {
                            "leftIndent": 111.59999847412109,
                            "firstLineIndent": -39.599998474121094
                        }
                    },
                    {
                        "startAt": 1,
                        "restartLevel": 5,
                        "listLevelPattern": "Arabic",
                        "followCharacter": "Tab",
                        "numberFormat": "%1.%2.%3.%4.%5.%6.",
                        "paragraphFormat": {
                            "leftIndent": 136.80000305175781,
                            "firstLineIndent": -46.799999237060547
                        }
                    },
                    {
                        "startAt": 1,
                        "restartLevel": 6,
                        "listLevelPattern": "Arabic",
                        "followCharacter": "Tab",
                        "numberFormat": "%1.%2.%3.%4.%5.%6.%7.",
                        "paragraphFormat": {
                            "leftIndent": 162.0,
                            "firstLineIndent": -54.0
                        }
                    },
                    {
                        "startAt": 1,
                        "restartLevel": 7,
                        "listLevelPattern": "Arabic",
                        "followCharacter": "Tab",
                        "numberFormat": "%1.%2.%3.%4.%5.%6.%7.%8.",
                        "paragraphFormat": {
                            "leftIndent": 187.19999694824219,
                            "firstLineIndent": -61.200000762939453
                        }
                    },
                    {
                        "startAt": 1,
                        "restartLevel": 8,
                        "listLevelPattern": "Arabic",
                        "followCharacter": "Tab",
                        "numberFormat": "%1.%2.%3.%4.%5.%6.%7.%8.%9.",
                        "paragraphFormat": {
                            "leftIndent": 216.0,
                            "firstLineIndent": -72.0
                        }
                    }
                ]
            }
        ],
        "background": {
            "color": "#FFFFFFFF"
        },
        "styles": [
            {
                "type": "Paragraph",
                "name": "Normal",
                "next": "Normal"
            },
            {
                "type": "Character",
                "name": "Default Paragraph Font"
            },
            {
                "type": "Paragraph",
                "name": "Notes",
                "basedOn": "Normal",
                "next": "Normal",
                "characterFormat": {
                    "bold": true
                },
                "paragraphFormat": {
                    "afterSpacing": 6.0,
                    "lineSpacing": 1.0,
                    "lineSpacingType": "Multiple"
                }
            },
            {
                "type": "Paragraph",
                "name": "List Paragraph",
                "basedOn": "Normal",
                "next": "List Paragraph",
                "paragraphFormat": {
                    "leftIndent": 36.0
                }
            }
        ]
    };
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