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
                                "text": "List of text alignment options",
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
                            "bold": true,
                            "fontSize": 14.0,
                            "fontFamily": "Calibri"
                        },
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Left-aligned",
                                "characterFormat": {
                                    "bold": true,
                                    "fontSize": 14.0,
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
                            "afterSpacing": 18.0,
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ",
                                "characterFormat": {
                                    "fontFamily": "Calibri"
                                }
                            },
                            {
                                "text": "consequat.",
                                "characterFormat": {
                                    "fontFamily": "Calibri"
                                }
                            }
                        ]
                    },
                    {
                        "characterFormat": {
                            "bold": true,
                            "fontSize": 14.0,
                            "fontFamily": "Calibri"
                        },
                        "paragraphFormat": {
                            "beforeSpacing": 18.0,
                            "textAlignment": "Center",
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Centered",
                                "characterFormat": {
                                    "bold": true,
                                    "fontSize": 14.0,
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
                            "afterSpacing": 18.0,
                            "textAlignment": "Center",
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                                "characterFormat": {
                                    "fontFamily": "Calibri"
                                }
                            }
                        ]
                    },
                    {
                        "characterFormat": {
                            "bold": true,
                            "fontSize": 14.0,
                            "fontFamily": "Calibri"
                        },
                        "paragraphFormat": {
                            "beforeSpacing": 18.0,
                            "textAlignment": "Right",
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Right-",
                                "characterFormat": {
                                    "bold": true,
                                    "fontSize": 14.0,
                                    "fontFamily": "Calibri"
                                }
                            },
                            {
                                "text": "aligned",
                                "characterFormat": {
                                    "bold": true,
                                    "fontSize": 14.0,
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
                            "afterSpacing": 18.0,
                            "textAlignment": "Right",
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a",
                                "characterFormat": {
                                    "fontFamily": "Calibri"
                                }
                            },
                            {
                                "text": "liquip ex ea commodo consequat.",
                                "characterFormat": {
                                    "fontFamily": "Calibri"
                                }
                            }
                        ]
                    },
                    {
                        "characterFormat": {
                            "bold": true,
                            "fontSize": 14.0,
                            "fontFamily": "Calibri"
                        },
                        "paragraphFormat": {
                            "beforeSpacing": 18.0,
                            "textAlignment": "Justify",
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Justified",
                                "characterFormat": {
                                    "bold": true,
                                    "fontSize": 14.0,
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
                            "afterSpacing": 18.0,
                            "textAlignment": "Justify",
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
                                "characterFormat": {
                                    "fontFamily": "Calibri"
                                }
                            },
                            {
                                "text": ".",
                                "characterFormat": {
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
                            "afterSpacing": 8.0,
                            "lineSpacing": 1.0791666507720947,
                            "lineSpacingType": "Multiple",
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": " ",
                                "characterFormat": {
                                    "fontFamily": "Calibri"
                                }
                            }
                        ]
                    },
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
                                "text": "List of indentation options",
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
                            "bold": true,
                            "fontSize": 14.0,
                            "fontFamily": "Calibri"
                        },
                        "paragraphFormat": {
                            "leftIndent": 36.0,
                            "textAlignment": "Justify",
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Left indent is 48 pixels",
                                "characterFormat": {
                                    "bold": true,
                                    "fontSize": 14.0,
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
                            "leftIndent": 36.0,
                            "afterSpacing": 18.0,
                            "textAlignment": "Justify",
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                                "characterFormat": {
                                    "fontFamily": "Calibri"
                                }
                            },
                            {
                                "text": " consequat.",
                                "characterFormat": {
                                    "fontFamily": "Calibri"
                                }
                            }
                        ]
                    },
                    {
                        "characterFormat": {
                            "bold": true,
                            "fontSize": 14.0,
                            "fontFamily": "Calibri"
                        },
                        "paragraphFormat": {
                            "rightIndent": 36.0,
                            "textAlignment": "Justify",
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Right",
                                "characterFormat": {
                                    "bold": true,
                                    "fontSize": 14.0,
                                    "fontFamily": "Calibri"
                                }
                            },
                            {
                                "text": " indent is 48 pixels",
                                "characterFormat": {
                                    "bold": true,
                                    "fontSize": 14.0,
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
                            "rightIndent": 36.0,
                            "afterSpacing": 18.0,
                            "textAlignment": "Justify",
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                                "characterFormat": {
                                    "fontFamily": "Calibri"
                                }
                            }
                        ]
                    },
                    {
                        "characterFormat": {
                            "bold": true,
                            "fontSize": 14.0,
                            "fontFamily": "Calibri"
                        },
                        "paragraphFormat": {
                            "firstLineIndent": 36.0,
                            "textAlignment": "Justify",
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "First line ",
                                "characterFormat": {
                                    "bold": true,
                                    "fontSize": 14.0,
                                    "fontFamily": "Calibri"
                                }
                            },
                            {
                                "text": "indent is 48 pixels",
                                "characterFormat": {
                                    "bold": true,
                                    "fontSize": 14.0,
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
                            "firstLineIndent": 36.0,
                            "afterSpacing": 18.0,
                            "textAlignment": "Justify",
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                                "characterFormat": {
                                    "fontFamily": "Calibri"
                                }
                            }
                        ]
                    },
                    {
                        "characterFormat": {
                            "bold": true,
                            "fontSize": 14.0,
                            "fontFamily": "Calibri"
                        },
                        "paragraphFormat": {
                            "leftIndent": 36.0,
                            "firstLineIndent": -36.0,
                            "textAlignment": "Justify",
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Hanging",
                                "characterFormat": {
                                    "bold": true,
                                    "fontSize": 14.0,
                                    "fontFamily": "Calibri"
                                }
                            },
                            {
                                "text": " indent is 48 pixels",
                                "characterFormat": {
                                    "bold": true,
                                    "fontSize": 14.0,
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
                            "leftIndent": 36.0,
                            "firstLineIndent": -36.0,
                            "afterSpacing": 18.0,
                            "textAlignment": "Justify",
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                                "characterFormat": {
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
                            "afterSpacing": 8.0,
                            "lineSpacing": 1.0791666507720947,
                            "lineSpacingType": "Multiple",
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": " ",
                                "characterFormat": {
                                    "fontFamily": "Calibri"
                                }
                            }
                        ]
                    },
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
                                "text": "List of line spacing options",
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
                            "bold": true,
                            "fontSize": 14.0,
                            "fontFamily": "Calibri"
                        },
                        "paragraphFormat": {
                            "lineSpacing": 2.0,
                            "lineSpacingType": "Multiple",
                            "textAlignment": "Justify",
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Double line spacing",
                                "characterFormat": {
                                    "bold": true,
                                    "fontSize": 14.0,
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
                            "afterSpacing": 18.0,
                            "lineSpacing": 2.0,
                            "lineSpacingType": "Multiple",
                            "textAlignment": "Justify",
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali",
                                "characterFormat": {
                                    "fontFamily": "Calibri"
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
                                "text": "quip ex ea commodo consequat.",
                                "characterFormat": {
                                    "fontFamily": "Calibri"
                                }
                            }
                        ]
                    },
                    {
                        "characterFormat": {
                            "bold": true,
                            "fontSize": 14.0,
                            "fontFamily": "Calibri"
                        },
                        "paragraphFormat": {
                            "lineSpacing": 18.0,
                            "lineSpacingType": "AtLeast",
                            "textAlignment": "Justify",
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Line spacing",
                                "characterFormat": {
                                    "bold": true,
                                    "fontSize": 14.0,
                                    "fontFamily": "Calibri"
                                }
                            },
                            {
                                "text": " is",
                                "characterFormat": {
                                    "bold": true,
                                    "fontSize": 14.0,
                                    "fontFamily": "Calibri"
                                }
                            },
                            {
                                "text": " at least",
                                "characterFormat": {
                                    "bold": true,
                                    "fontSize": 14.0,
                                    "fontFamily": "Calibri"
                                }
                            },
                            {
                                "text": " ",
                                "characterFormat": {
                                    "bold": true,
                                    "fontSize": 14.0,
                                    "fontFamily": "Calibri"
                                }
                            },
                            {
                                "text": "24",
                                "characterFormat": {
                                    "bold": true,
                                    "fontSize": 14.0,
                                    "fontFamily": "Calibri"
                                }
                            },
                            {
                                "text": " pixels",
                                "characterFormat": {
                                    "bold": true,
                                    "fontSize": 14.0,
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
                            "afterSpacing": 18.0,
                            "lineSpacing": 18.0,
                            "lineSpacingType": "AtLeast",
                            "textAlignment": "Justify",
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                                "characterFormat": {
                                    "fontFamily": "Calibri"
                                }
                            }
                        ]
                    },
                    {
                        "characterFormat": {
                            "bold": true,
                            "fontSize": 14.0,
                            "fontFamily": "Calibri"
                        },
                        "paragraphFormat": {
                            "lineSpacing": 15.0,
                            "lineSpacingType": "Exactly",
                            "textAlignment": "Justify",
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Line spacing",
                                "characterFormat": {
                                    "bold": true,
                                    "fontSize": 14.0,
                                    "fontFamily": "Calibri"
                                }
                            },
                            {
                                "text": " is ",
                                "characterFormat": {
                                    "bold": true,
                                    "fontSize": 14.0,
                                    "fontFamily": "Calibri"
                                }
                            },
                            {
                                "text": "exactly 20",
                                "characterFormat": {
                                    "bold": true,
                                    "fontSize": 14.0,
                                    "fontFamily": "Calibri"
                                }
                            },
                            {
                                "text": " pixels",
                                "characterFormat": {
                                    "bold": true,
                                    "fontSize": 14.0,
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
                            "afterSpacing": 18.0,
                            "lineSpacing": 15.0,
                            "lineSpacingType": "Exactly",
                            "textAlignment": "Justify",
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                                "characterFormat": {
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
                            "leftIndent": 36.0,
                            "afterSpacing": 18.0,
                            "lineSpacing": 15.0,
                            "lineSpacingType": "Exactly",
                            "textAlignment": "Justify",
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": " "
                            }
                        ]
                    },
                    {
                        "characterFormat": {
                            "fontColor": "#4472C4FF"
                        },
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "List of paragraph",
                                "characterFormat": {
                                    "fontSize": 18.0,
                                    "fontFamily": "Monotype Corsiva",
                                    "fontColor": "#4472C4FF"
                                }
                            },
                            {
                                "text": " ",
                                "characterFormat": {
                                    "fontSize": 18.0,
                                    "fontFamily": "Monotype Corsiva",
                                    "fontColor": "#4472C4FF"
                                }
                            },
                            {
                                "text": "spacing options",
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
                            "bold": true,
                            "fontSize": 14.0,
                            "fontFamily": "Calibri"
                        },
                        "paragraphFormat": {
                            "beforeSpacing": 18.0,
                            "afterSpacing": 12.0,
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Spacing before the paragraph is 24 pixels and after the paragraph is 16 pixels",
                                "characterFormat": {
                                    "bold": true,
                                    "fontSize": 14.0,
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
                            "beforeSpacing": 18.0,
                            "afterSpacing": 12.0,
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                                "characterFormat": {
                                    "fontFamily": "Calibri"
                                }
                            }
                        ]
                    },
                    {
                        "characterFormat": {
                            "bold": true,
                            "fontSize": 14.0,
                            "fontFamily": "Calibri"
                        },
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "No spacing before and after the paragraph",
                                "characterFormat": {
                                    "bold": true,
                                    "fontSize": 14.0,
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
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                                "characterFormat": {
                                    "fontFamily": "Calibri"
                                }
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
                    "fontFamily": "Times New Roman"
                },
                "paragraphFormat": {
                    "afterSpacing": 0.0,
                    "lineSpacing": 1.0,
                    "lineSpacingType": "Multiple"
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
                    "afterSpacing": 6.0
                }
            }
        ]
    };
    var waitingPopUp = document.getElementById('waiting-popup');
    container.documentEditor.open(JSON.stringify(defaultDocument));    
    container.documentEditor.documentName = 'Paragraph Formatting';    
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