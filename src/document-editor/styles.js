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
                        "paragraphFormat": {
                            "styleName": "Title"
                        },
                        "inlines": [
                            {
                                "text": "Styles"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Subtitle"
                        },
                        "inlines": [
                            {
                                "text": "A"
                            },
                            {
                                "text": " style is a collection of formatting instructions"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "to provide a consistent look of the document"
                            },
                            {
                                "text": "."
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": []
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Quote"
                        },
                        "inlines": [
                            {
                                "text": "The quick brown fox jumps over the lazy dog"
                            },
                            {
                                "text": " [Quote]"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
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
                            "styleName": "Heading 1"
                        },
                        "inlines": [
                            {
                                "text": "The quick brown fox jumps over the lazy dog "
                            },
                            {
                                "text": "["
                            },
                            {
                                "text": "Heading 1"
                            },
                            {
                                "text": "]"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": []
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Heading 2"
                        },
                        "inlines": [
                            {
                                "text": "The quick brown fox jumps over the lazy dog "
                            },
                            {
                                "text": "["
                            },
                            {
                                "text": "Heading 2"
                            },
                            {
                                "text": "]"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": []
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Heading 3"
                        },
                        "inlines": [
                            {
                                "text": "The quick brown fox jumps over the lazy dog"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "["
                            },
                            {
                                "text": "Heading 3"
                            },
                            {
                                "text": "]"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": []
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Heading 4"
                        },
                        "inlines": [
                            {
                                "text": "The quick brown fox jumps over the lazy dog "
                            },
                            {
                                "text": "[Heading 4"
                            },
                            {
                                "text": "]"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": []
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Heading 5"
                        },
                        "inlines": [
                            {
                                "text": "The quick brown fox jumps over the lazy dog "
                            },
                            {
                                "text": "["
                            },
                            {
                                "text": "Heading 5"
                            },
                            {
                                "text": "]"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": []
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
                    "fontSize": 12.0,
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
                "name": "Quote",
                "basedOn": "Normal",
                "next": "Normal",
                "link": "Quote Char",
                "characterFormat": {
                    "italic": true,
                    "fontColor": "#404040FF"
                },
                "paragraphFormat": {
                    "leftIndent": 43.200000762939453,
                    "rightIndent": 43.200000762939453,
                    "beforeSpacing": 10.0,
                    "textAlignment": "Center"
                }
            },
            {
                "type": "Character",
                "name": "Quote Char",
                "basedOn": "Default Paragraph Font",
                "characterFormat": {
                    "italic": true,
                    "fontColor": "#404040FF"
                }
            },
            {
                "type": "Paragraph",
                "name": "Title",
                "basedOn": "Normal",
                "next": "Normal",
                "link": "Title Char",
                "characterFormat": {
                    "fontSize": 28.0,
                    "fontFamily": "Calibri Light"
                },
                "paragraphFormat": {
                    "afterSpacing": 0.0,
                    "lineSpacing": 1.0,
                    "lineSpacingType": "Multiple"
                }
            },
            {
                "type": "Character",
                "name": "Title Char",
                "basedOn": "Default Paragraph Font",
                "characterFormat": {
                    "fontSize": 28.0,
                    "fontFamily": "Calibri Light"
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
                "type": "Paragraph",
                "name": "Intense Quote",
                "basedOn": "Normal",
                "next": "Normal",
                "link": "Intense Quote Char",
                "characterFormat": {
                    "italic": true,
                    "fontColor": "#4472C4FF"
                },
                "paragraphFormat": {
                    "leftIndent": 43.200000762939453,
                    "rightIndent": 43.200000762939453,
                    "beforeSpacing": 18.0,
                    "afterSpacing": 18.0,
                    "textAlignment": "Center"
                }
            },
            {
                "type": "Character",
                "name": "Intense Quote Char",
                "basedOn": "Default Paragraph Font",
                "characterFormat": {
                    "italic": true,
                    "fontColor": "#4472C4FF"
                }
            },
            {
                "type": "Paragraph",
                "name": "Subtitle",
                "basedOn": "Normal",
                "next": "Normal",
                "link": "Subtitle Char",
                "characterFormat": {
                    "fontColor": "#5A5A5AFF"
                },
                "paragraphFormat": {
                    "listFormat": {
                        "listLevelNumber": 1
                    }
                }
            },
            {
                "type": "Character",
                "name": "Subtitle Char",
                "basedOn": "Default Paragraph Font",
                "characterFormat": {
                    "fontColor": "#5A5A5AFF"
                }
            }
        ]
    };
    var waitingPopUp = document.getElementById('waiting-popup');
    container.documentEditor.open(JSON.stringify(defaultDocument));    
    container.documentEditor.documentName = 'Styles';    
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