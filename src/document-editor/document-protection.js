this.default = function () {

    //Documenteditor control rendering starts
    var userList = ['engineer@mycompany.com','manager@mycompany.com'];
    var hostUrl = 'https://ej2services.syncfusion.com/production/web-services/';
    var container = new ej.documenteditor.DocumentEditorContainer({ height:'590px' });
    ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar);
    container.serviceUrl = hostUrl + 'api/documenteditor/';
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

    var defaultDocument = {
        "sections": [
            {
                "blocks": [
                    {
                        "characterFormat": {
                            "fontSize": 14.0,
                            "fontSizeBidi": 14.0
                        },
                        "paragraphFormat": {
                            "lineSpacing": 32.0,
                            "lineSpacingType": "Exactly",
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Name",
                                "characterFormat": {
                                    "bold": true,
                                    "fontSize": 14.0,
                                    "boldBidi": true,
                                    "fontSizeBidi": 14.0
                                }
                            },
                            {
                                "text": ":",
                                "characterFormat": {
                                    "fontSize": 14.0,
                                    "fontSizeBidi": 14.0
                                }
                            }
                        ]
                    },
                    {
                        "rows": [
                            {
                                "rowFormat": {
                                    "allowBreakAcrossPages": true,
                                    "isHeader": false,
                                    "height": 20.0,
                                    "heightType": "AtLeast",
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
                                    }
                                },
                                "cells": [
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "editRangeId": "1348272392",
                                                        "columnFirst": 0,
                                                        "columnLast": 0,
                                                        "user": "engineer@mycompany.com"
                                                    },
                                                    {
                                                        "text": "Enter name"
                                                    },
                                                    {
                                                        "editRangeId": "1348272392",
                                                        "editableRangeStart": {
                                                            "editRangeId": "1348272392",
                                                            "columnFirst": 0,
                                                            "columnLast": 0,
                                                            "user": "engineer@mycompany.com"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 467.5,
                                            "preferredWidthType": "Point",
                                            "verticalAlignment": "Center",
                                            "isSamePaddingAsTable": true,
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
                                            }
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
                                    "hasNoneStyle": false
                                },
                                "right": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false
                                },
                                "top": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false
                                },
                                "bottom": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false
                                },
                                "vertical": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false
                                },
                                "horizontal": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
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
                            "bidi": false
                        }
                    },
                    {
                        "characterFormat": {
                            "bold": true,
                            "fontSize": 14.0,
                            "boldBidi": true,
                            "fontSizeBidi": 14.0
                        },
                        "paragraphFormat": {
                            "lineSpacing": 32.0,
                            "lineSpacingType": "Exactly",
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Designation:",
                                "characterFormat": {
                                    "bold": true,
                                    "fontSize": 14.0,
                                    "boldBidi": true,
                                    "fontSizeBidi": 14.0
                                }
                            }
                        ]
                    },
                    {
                        "rows": [
                            {
                                "rowFormat": {
                                    "allowBreakAcrossPages": true,
                                    "isHeader": false,
                                    "height": 20.0,
                                    "heightType": "AtLeast",
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
                                    }
                                },
                                "cells": [
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "editRangeId": "808933422",
                                                        "columnFirst": 0,
                                                        "columnLast": 0,
                                                        "user": "engineer@mycompany.com"
                                                    },
                                                    {
                                                        "text": "Enter designation"
                                                    },
                                                    {
                                                        "editRangeId": "808933422",
                                                        "editableRangeStart": {
                                                            "editRangeId": "808933422",
                                                            "columnFirst": 0,
                                                            "columnLast": 0,
                                                            "user": "engineer@mycompany.com"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 467.5,
                                            "preferredWidthType": "Point",
                                            "verticalAlignment": "Center",
                                            "isSamePaddingAsTable": true,
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
                                            }
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
                                    "hasNoneStyle": false
                                },
                                "right": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false
                                },
                                "top": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false
                                },
                                "bottom": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false
                                },
                                "vertical": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false
                                },
                                "horizontal": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
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
                            "bidi": false
                        }
                    },
                    {
                        "characterFormat": {
                            "bold": true,
                            "fontSize": 14.0,
                            "boldBidi": true,
                            "fontSizeBidi": 14.0
                        },
                        "paragraphFormat": {
                            "lineSpacing": 32.0,
                            "lineSpacingType": "Exactly",
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Email Address:",
                                "characterFormat": {
                                    "bold": true,
                                    "fontSize": 14.0,
                                    "boldBidi": true,
                                    "fontSizeBidi": 14.0
                                }
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
                        "rows": [
                            {
                                "rowFormat": {
                                    "allowBreakAcrossPages": true,
                                    "isHeader": false,
                                    "height": 20.0,
                                    "heightType": "AtLeast",
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
                                    }
                                },
                                "cells": [
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "editRangeId": "810441411",
                                                        "columnFirst": 0,
                                                        "columnLast": 0,
                                                        "user": "engineer@mycompany.com"
                                                    },
                                                    {
                                                        "text": "Enter email address"
                                                    },
                                                    {
                                                        "editRangeId": "810441411",
                                                        "editableRangeStart": {
                                                            "editRangeId": "810441411",
                                                            "columnFirst": 0,
                                                            "columnLast": 0,
                                                            "user": "engineer@mycompany.com"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 467.5,
                                            "preferredWidthType": "Point",
                                            "verticalAlignment": "Center",
                                            "isSamePaddingAsTable": true,
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
                                            }
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
                                    "hasNoneStyle": false
                                },
                                "right": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false
                                },
                                "top": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false
                                },
                                "bottom": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false
                                },
                                "vertical": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false
                                },
                                "horizontal": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
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
                            "bidi": false
                        }
                    },
                    {
                        "characterFormat": {
                            "bold": true,
                            "fontSize": 14.0,
                            "boldBidi": true,
                            "fontSizeBidi": 14.0
                        },
                        "paragraphFormat": {
                            "lineSpacing": 32.0,
                            "lineSpacingType": "Exactly",
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Feedbacks:",
                                "characterFormat": {
                                    "bold": true,
                                    "fontSize": 14.0,
                                    "boldBidi": true,
                                    "fontSizeBidi": 14.0
                                }
                            }
                        ]
                    },
                    {
                        "rows": [
                            {
                                "rowFormat": {
                                    "allowBreakAcrossPages": true,
                                    "isHeader": false,
                                    "height": 20.0,
                                    "heightType": "AtLeast",
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
                                    }
                                },
                                "cells": [
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "editRangeId": "1016946268",
                                                        "columnFirst": 0,
                                                        "columnLast": 0,
                                                        "user": "manager@mycompany.com"
                                                    },
                                                    {
                                                        "text": "Enter the feedbacks"
                                                    },
                                                    {
                                                        "editRangeId": "1016946268",
                                                        "editableRangeStart": {
                                                            "editRangeId": "1016946268",
                                                            "columnFirst": 0,
                                                            "columnLast": 0,
                                                            "user": "manager@mycompany.com"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 467.5,
                                            "preferredWidthType": "Point",
                                            "verticalAlignment": "Center",
                                            "isSamePaddingAsTable": true,
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
                                            }
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
                                    "hasNoneStyle": false
                                },
                                "right": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false
                                },
                                "top": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false
                                },
                                "bottom": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false
                                },
                                "vertical": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false
                                },
                                "horizontal": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
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
                            "bidi": false
                        }
                    },
                    {
                        "characterFormat": {
                            "bold": true,
                            "fontSize": 14.0,
                            "boldBidi": true,
                            "fontSizeBidi": 14.0
                        },
                        "paragraphFormat": {
                            "lineSpacing": 32.0,
                            "lineSpacingType": "Exactly",
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Review comments:",
                                "characterFormat": {
                                    "bold": true,
                                    "fontSize": 14.0,
                                    "boldBidi": true,
                                    "fontSizeBidi": 14.0
                                }
                            }
                        ]
                    },
                    {
                        "rows": [
                            {
                                "rowFormat": {
                                    "allowBreakAcrossPages": true,
                                    "isHeader": false,
                                    "height": 20.0,
                                    "heightType": "AtLeast",
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
                                    }
                                },
                                "cells": [
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "editRangeId": "1373703080",
                                                        "columnFirst": 0,
                                                        "columnLast": 0,
                                                        "user": "manager@mycompany.com"
                                                    },
                                                    {
                                                        "text": "Enter the comments"
                                                    },
                                                    {
                                                        "editRangeId": "1373703080",
                                                        "editableRangeStart": {
                                                            "editRangeId": "1373703080",
                                                            "columnFirst": 0,
                                                            "columnLast": 0,
                                                            "user": "manager@mycompany.com"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 467.5,
                                            "preferredWidthType": "Point",
                                            "verticalAlignment": "Center",
                                            "isSamePaddingAsTable": true,
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
                                            }
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
                                    "hasNoneStyle": false
                                },
                                "right": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false
                                },
                                "top": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false
                                },
                                "bottom": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false
                                },
                                "vertical": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false
                                },
                                "horizontal": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
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
                            "bidi": false
                        }
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": []
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
                                        "text": "Employee’s Details "
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
                    "leftMargin": 72.0,
                    "rightMargin": 72.0,
                    "topMargin": 72.0,
                    "bottomMargin": 72.0,
                    "differentFirstPage": false,
                    "differentOddAndEvenPages": false,
                    "bidi": false
                }
            }
        ],
        "characterFormat": {
            "fontSize": 11.0,
            "fontFamily": "Calibri",
            "fontSizeBidi": 11.0,
            "fontFamilyBidi": "Calibri"
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
                "type": "Character",
                "name": "Default Paragraph Font"
            },
            {
                "type": "Paragraph",
                "name": "List Paragraph",
                "basedOn": "Normal",
                "paragraphFormat": {
                    "leftIndent": 36.0,
                    "contextualSpacing": true
                }
            },
            {
                "type": "Paragraph",
                "name": "Header",
                "basedOn": "Normal",
                "next": "Normal",
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
            }
        ],
        "defaultTabWidth": 36.0,
        "formatting": false,
        "protectionType": "ReadOnly",
        "enforcement": true,
        "hashValue": "TQGuJuLceQCe234Ygx4q6NFgHpRMfi1hjFTojyKzbQOkwk+ckEM9CjNIdkiUhSR/e/7sfMxO4sbPcg/DBzztMg==",
        "saltValue": "FXbkr1RtDIIIZfwlM71dMg=="
    };
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