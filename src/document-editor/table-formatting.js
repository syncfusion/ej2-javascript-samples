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
                        "rows": [
                            {
                                "rowFormat": {
                                    "allowBreakAcrossPages": true,
                                    "isHeader": false,
                                    "height": 8.6000003814697266,
                                    "heightType": "AtLeast",
                                    "borders": {
                                        "left": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#000000FF"
                                        },
                                        "right": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#000000FF"
                                        },
                                        "top": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#000000FF"
                                        },
                                        "bottom": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#000000FF"
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
                                                    "bold": true
                                                },
                                                "paragraphFormat": {
                                                    "textAlignment": "Center",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Bill To:",
                                                        "characterFormat": {
                                                            "bold": true
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 4,
                                            "preferredWidth": 78.0,
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
                                            },
                                            "shading": {
                                                "texture": "TextureNone",
                                                "backgroundColor": "#FFFFFFFF"
                                            }
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Hanari"
                                                    },
                                                    {
                                                        "text": " Carnes"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 78.0,
                                            "preferredWidthType": "Point",
                                            "verticalAlignment": "Top",
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
                                            },
                                            "shading": {
                                                "texture": "TextureNone",
                                                "backgroundColor": "#FFFFFFFF"
                                            }
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "characterFormat": {
                                                    "bold": true
                                                },
                                                "paragraphFormat": {
                                                    "textAlignment": "Center",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Ship To:",
                                                        "characterFormat": {
                                                            "bold": true
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 4,
                                            "preferredWidth": 78.0,
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
                                            },
                                            "shading": {
                                                "texture": "TextureNone",
                                                "backgroundColor": "#FFFFFFFF"
                                            }
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Hanari"
                                                    },
                                                    {
                                                        "text": " Carnes"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 95.75,
                                            "preferredWidthType": "Point",
                                            "verticalAlignment": "Top",
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
                                            },
                                            "shading": {
                                                "texture": "TextureNone",
                                                "backgroundColor": "#FFFFFFFF"
                                            }
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "rightIndent": 32.099998474121094,
                                                    "textAlignment": "Center",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Invoice No:",
                                                        "characterFormat": {
                                                            "bold": true
                                                        }
                                                    },
                                                    {
                                                        "text": "10250"
                                                    }
                                                ]
                                            },
                                            {
                                                "paragraphFormat": {
                                                    "rightIndent": 32.099998474121094,
                                                    "textAlignment": "Center",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Date:",
                                                        "characterFormat": {
                                                            "bold": true
                                                        }
                                                    },
                                                    {
                                                        "text": "7/12/1996"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 4,
                                            "preferredWidth": 138.25,
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
                                            },
                                            "shading": {
                                                "texture": "TextureNone",
                                                "backgroundColor": "#FFFFFFFF"
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                "rowFormat": {
                                    "allowBreakAcrossPages": true,
                                    "isHeader": false,
                                    "height": 0.0,
                                    "heightType": "AtLeast",
                                    "borders": {
                                        "left": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#000000FF"
                                        },
                                        "right": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#000000FF"
                                        },
                                        "top": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#000000FF"
                                        },
                                        "bottom": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#000000FF"
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
                                                "paragraphFormat": {
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Rua"
                                                    },
                                                    {
                                                        "text": " do "
                                                    },
                                                    {
                                                        "text": "Paço"
                                                    },
                                                    {
                                                        "text": ", 67"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 78.0,
                                            "preferredWidthType": "Point",
                                            "verticalAlignment": "Top",
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
                                            },
                                            "shading": {
                                                "texture": "TextureNone",
                                                "backgroundColor": "#FFFFFFFF"
                                            }
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Rua"
                                                    },
                                                    {
                                                        "text": " do "
                                                    },
                                                    {
                                                        "text": "Paço"
                                                    },
                                                    {
                                                        "text": ", 67"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 95.75,
                                            "preferredWidthType": "Point",
                                            "verticalAlignment": "Top",
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
                                            },
                                            "shading": {
                                                "texture": "TextureNone",
                                                "backgroundColor": "#FFFFFFFF"
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                "rowFormat": {
                                    "allowBreakAcrossPages": true,
                                    "isHeader": false,
                                    "height": 0.0,
                                    "heightType": "AtLeast",
                                    "borders": {
                                        "left": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#000000FF"
                                        },
                                        "right": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#000000FF"
                                        },
                                        "top": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#000000FF"
                                        },
                                        "bottom": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#000000FF"
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
                                                "paragraphFormat": {
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Rio de Janeiro"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 78.0,
                                            "preferredWidthType": "Point",
                                            "verticalAlignment": "Top",
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
                                            },
                                            "shading": {
                                                "texture": "TextureNone",
                                                "backgroundColor": "#FFFFFFFF"
                                            }
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Rio de Janeiro"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 95.75,
                                            "preferredWidthType": "Point",
                                            "verticalAlignment": "Top",
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
                                            },
                                            "shading": {
                                                "texture": "TextureNone",
                                                "backgroundColor": "#FFFFFFFF"
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                "rowFormat": {
                                    "allowBreakAcrossPages": true,
                                    "isHeader": false,
                                    "height": 0.0,
                                    "heightType": "AtLeast",
                                    "borders": {
                                        "left": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#000000FF"
                                        },
                                        "right": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#000000FF"
                                        },
                                        "top": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#000000FF"
                                        },
                                        "bottom": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#000000FF"
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
                                                "paragraphFormat": {
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Brazil"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 78.0,
                                            "preferredWidthType": "Point",
                                            "verticalAlignment": "Top",
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
                                            },
                                            "shading": {
                                                "texture": "TextureNone",
                                                "backgroundColor": "#FFFFFFFF"
                                            }
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Brazil"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 95.75,
                                            "preferredWidthType": "Point",
                                            "verticalAlignment": "Top",
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
                                            },
                                            "shading": {
                                                "texture": "TextureNone",
                                                "backgroundColor": "#FFFFFFFF"
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
                            "leftMargin": 0.5,
                            "rightMargin": 0.5,
                            "leftIndent": 0.0,
                            "tableAlignment": "Left",
                            "preferredWidth": 468.0,
                            "preferredWidthType": "Point",
                            "borders": {
                                "left": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false,
                                    "color": "#000000FF"
                                },
                                "right": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false,
                                    "color": "#000000FF"
                                },
                                "top": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false,
                                    "color": "#000000FF"
                                },
                                "bottom": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false,
                                    "color": "#000000FF"
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
                            }
                        }
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": []
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": []
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
                                    "height": 19.5,
                                    "heightType": "Exactly",
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
                                                "paragraphFormat": {
                                                    "textAlignment": "Center",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Ship Name",
                                                        "characterFormat": {
                                                            "bold": true,
                                                            "fontSize": 10.0,
                                                            "fontFamily": "Segoe UI",
                                                            "fontColor": "#FFFFFFFF"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 109.69999694824219,
                                            "preferredWidthType": "Point",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": true,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "right": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "top": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "bottom": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
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
                                                "backgroundColor": "#4B88BAFF"
                                            }
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "textAlignment": "Center",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Ship Address",
                                                        "characterFormat": {
                                                            "bold": true,
                                                            "fontSize": 10.0,
                                                            "fontFamily": "Segoe UI",
                                                            "fontColor": "#FFFFFFFF"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 86.6500015258789,
                                            "preferredWidthType": "Point",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": true,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "right": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "top": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "bottom": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
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
                                                "backgroundColor": "#4B88BAFF"
                                            }
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "textAlignment": "Center",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Freight",
                                                        "characterFormat": {
                                                            "bold": true,
                                                            "fontSize": 10.0,
                                                            "fontFamily": "Segoe UI",
                                                            "fontColor": "#FFFFFFFF"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 50.349998474121094,
                                            "preferredWidthType": "Point",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": true,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "right": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "top": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "bottom": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
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
                                                "backgroundColor": "#4B88BAFF"
                                            }
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "textAlignment": "Center",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Shipped Date",
                                                        "characterFormat": {
                                                            "bold": true,
                                                            "fontSize": 10.0,
                                                            "fontFamily": "Segoe UI",
                                                            "fontColor": "#FFFFFFFF"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 76.8499984741211,
                                            "preferredWidthType": "Point",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": true,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "right": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "top": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "bottom": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
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
                                                "backgroundColor": "#4B88BAFF"
                                            }
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "textAlignment": "Center",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Ship City",
                                                        "characterFormat": {
                                                            "bold": true,
                                                            "fontSize": 10.0,
                                                            "fontFamily": "Segoe UI",
                                                            "fontColor": "#FFFFFFFF"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 56.549999237060547,
                                            "preferredWidthType": "Point",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": true,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "right": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "top": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "bottom": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
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
                                                "backgroundColor": "#4B88BAFF"
                                            }
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "textAlignment": "Center",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Ship Country",
                                                        "characterFormat": {
                                                            "bold": true,
                                                            "fontSize": 10.0,
                                                            "fontFamily": "Segoe UI",
                                                            "fontColor": "#FFFFFFFF"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 86.5999984741211,
                                            "preferredWidthType": "Point",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": true,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "right": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "top": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "bottom": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
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
                                                "backgroundColor": "#4B88BAFF"
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                "rowFormat": {
                                    "allowBreakAcrossPages": true,
                                    "isHeader": false,
                                    "height": 32.25,
                                    "heightType": "Exactly",
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
                                                "paragraphFormat": {
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Hanari",
                                                        "characterFormat": {
                                                            "fontSize": 10.0,
                                                            "fontFamily": "Segoe UI",
                                                            "fontColor": "#000000FF"
                                                        }
                                                    },
                                                    {
                                                        "text": " Carnes",
                                                        "characterFormat": {
                                                            "fontSize": 10.0,
                                                            "fontFamily": "Segoe UI",
                                                            "fontColor": "#000000FF"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 109.69999694824219,
                                            "preferredWidthType": "Point",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": true,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "right": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "top": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "bottom": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
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
                                                "texture": "TextureNone"
                                            }
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Rua",
                                                        "characterFormat": {
                                                            "fontSize": 10.0,
                                                            "fontFamily": "Segoe UI",
                                                            "fontColor": "#000000FF"
                                                        }
                                                    },
                                                    {
                                                        "text": " do ",
                                                        "characterFormat": {
                                                            "fontSize": 10.0,
                                                            "fontFamily": "Segoe UI",
                                                            "fontColor": "#000000FF"
                                                        }
                                                    },
                                                    {
                                                        "text": "Paço",
                                                        "characterFormat": {
                                                            "fontSize": 10.0,
                                                            "fontFamily": "Segoe UI",
                                                            "fontColor": "#000000FF"
                                                        }
                                                    },
                                                    {
                                                        "text": ", 67",
                                                        "characterFormat": {
                                                            "fontSize": 10.0,
                                                            "fontFamily": "Segoe UI",
                                                            "fontColor": "#000000FF"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 86.6500015258789,
                                            "preferredWidthType": "Point",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": true,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "right": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "top": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "bottom": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
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
                                                "texture": "TextureNone"
                                            }
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "textAlignment": "Right",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "$65.83",
                                                        "characterFormat": {
                                                            "fontSize": 10.0,
                                                            "fontFamily": "Segoe UI",
                                                            "fontColor": "#000000FF"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 50.349998474121094,
                                            "preferredWidthType": "Point",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": true,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "right": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "top": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "bottom": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
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
                                                "texture": "TextureNone"
                                            }
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "textAlignment": "Center",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "7/12/1996",
                                                        "characterFormat": {
                                                            "fontSize": 10.0,
                                                            "fontFamily": "Segoe UI",
                                                            "fontColor": "#000000FF"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 76.8499984741211,
                                            "preferredWidthType": "Point",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": true,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "right": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "top": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "bottom": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
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
                                                "texture": "TextureNone"
                                            }
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Rio de Janeiro",
                                                        "characterFormat": {
                                                            "fontSize": 10.0,
                                                            "fontFamily": "Segoe UI",
                                                            "fontColor": "#000000FF"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 56.549999237060547,
                                            "preferredWidthType": "Point",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": true,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "right": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "top": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "bottom": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
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
                                                "texture": "TextureNone"
                                            }
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Brazil",
                                                        "characterFormat": {
                                                            "fontSize": 10.0,
                                                            "fontFamily": "Segoe UI",
                                                            "fontColor": "#000000FF"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 86.5999984741211,
                                            "preferredWidthType": "Point",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": true,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "right": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "top": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "bottom": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
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
                                                "texture": "TextureNone"
                                            }
                                        }
                                    }
                                ]
                            }
                        ],
                        "title": null,
                        "description": null,
                        "tableFormat": {
                            "allowAutoFit": false,
                            "leftMargin": 5.0,
                            "rightMargin": 5.0,
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
                            }
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
                                    "height": 19.5,
                                    "heightType": "Exactly",
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
                                                "paragraphFormat": {
                                                    "textAlignment": "Center",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "ID",
                                                        "characterFormat": {
                                                            "bold": true,
                                                            "fontSize": 10.0,
                                                            "fontFamily": "Segoe UI",
                                                            "fontColor": "#FFFFFFFF"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 8.880000114440918,
                                            "preferredWidthType": "Percent",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": true,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "right": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "top": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "bottom": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
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
                                                "backgroundColor": "#4B88BAFF"
                                            }
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "textAlignment": "Center",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Product Name",
                                                        "characterFormat": {
                                                            "bold": true,
                                                            "fontSize": 10.0,
                                                            "fontFamily": "Segoe UI",
                                                            "fontColor": "#FFFFFFFF"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 38.540000915527344,
                                            "preferredWidthType": "Percent",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": true,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "right": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "top": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "bottom": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
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
                                                "backgroundColor": "#4B88BAFF"
                                            }
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "textAlignment": "Center",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Quantity",
                                                        "characterFormat": {
                                                            "bold": true,
                                                            "fontSize": 10.0,
                                                            "fontFamily": "Segoe UI",
                                                            "fontColor": "#FFFFFFFF"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 12.859999656677246,
                                            "preferredWidthType": "Percent",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": true,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "right": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "top": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "bottom": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
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
                                                "backgroundColor": "#4B88BAFF"
                                            }
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "textAlignment": "Center",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Unit Price",
                                                        "characterFormat": {
                                                            "bold": true,
                                                            "fontSize": 10.0,
                                                            "fontFamily": "Segoe UI",
                                                            "fontColor": "#FFFFFFFF"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 12.859999656677246,
                                            "preferredWidthType": "Percent",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": true,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "right": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "top": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "bottom": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
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
                                                "backgroundColor": "#4B88BAFF"
                                            }
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "textAlignment": "Center",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Discount",
                                                        "characterFormat": {
                                                            "bold": true,
                                                            "fontSize": 10.0,
                                                            "fontFamily": "Segoe UI",
                                                            "fontColor": "#FFFFFFFF"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 12.859999656677246,
                                            "preferredWidthType": "Percent",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": true,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "right": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "top": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "bottom": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
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
                                                "backgroundColor": "#4B88BAFF"
                                            }
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "textAlignment": "Center",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Price",
                                                        "characterFormat": {
                                                            "bold": true,
                                                            "fontSize": 10.0,
                                                            "fontFamily": "Segoe UI",
                                                            "fontColor": "#FFFFFFFF"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 14.0,
                                            "preferredWidthType": "Percent",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": true,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "right": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "top": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "bottom": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
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
                                                "backgroundColor": "#4B88BAFF"
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                "rowFormat": {
                                    "allowBreakAcrossPages": true,
                                    "isHeader": false,
                                    "height": 19.5,
                                    "heightType": "Exactly",
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
                                                "paragraphFormat": {
                                                    "textAlignment": "Center",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "41",
                                                        "characterFormat": {
                                                            "fontSize": 10.0,
                                                            "fontFamily": "Segoe UI",
                                                            "fontColor": "#000000FF"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 8.880000114440918,
                                            "preferredWidthType": "Percent",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": true,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "right": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "top": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "bottom": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
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
                                                "texture": "TextureNone"
                                            }
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Jack's New England Clam Chowder",
                                                        "characterFormat": {
                                                            "fontSize": 10.0,
                                                            "fontFamily": "Segoe UI",
                                                            "fontColor": "#000000FF"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 38.540000915527344,
                                            "preferredWidthType": "Percent",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": true,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "right": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "top": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "bottom": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
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
                                                "texture": "TextureNone"
                                            }
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "textAlignment": "Right",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "10",
                                                        "characterFormat": {
                                                            "fontSize": 10.0,
                                                            "fontFamily": "Segoe UI",
                                                            "fontColor": "#000000FF"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 12.859999656677246,
                                            "preferredWidthType": "Percent",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": true,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "right": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "top": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "bottom": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
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
                                                "texture": "TextureNone"
                                            }
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "textAlignment": "Right",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "$7.70",
                                                        "characterFormat": {
                                                            "fontSize": 10.0,
                                                            "fontFamily": "Segoe UI",
                                                            "fontColor": "#000000FF"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 12.859999656677246,
                                            "preferredWidthType": "Percent",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": true,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "right": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "top": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "bottom": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
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
                                                "texture": "TextureNone"
                                            }
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "textAlignment": "Right",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "0.00%",
                                                        "characterFormat": {
                                                            "fontSize": 10.0,
                                                            "fontFamily": "Segoe UI",
                                                            "fontColor": "#000000FF"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 12.859999656677246,
                                            "preferredWidthType": "Percent",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": true,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "right": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "top": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "bottom": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
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
                                                "texture": "TextureNone"
                                            }
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "textAlignment": "Right",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "$77.00",
                                                        "characterFormat": {
                                                            "fontSize": 10.0,
                                                            "fontFamily": "Segoe UI",
                                                            "fontColor": "#000000FF"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 14.0,
                                            "preferredWidthType": "Percent",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": true,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "right": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "top": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "bottom": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
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
                                                "texture": "TextureNone"
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                "rowFormat": {
                                    "allowBreakAcrossPages": true,
                                    "isHeader": false,
                                    "height": 19.5,
                                    "heightType": "Exactly",
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
                                                "paragraphFormat": {
                                                    "textAlignment": "Center",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "51",
                                                        "characterFormat": {
                                                            "fontSize": 10.0,
                                                            "fontFamily": "Segoe UI",
                                                            "fontColor": "#000000FF"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 8.880000114440918,
                                            "preferredWidthType": "Percent",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": true,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "right": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "top": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "bottom": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
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
                                                "texture": "TextureNone"
                                            }
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Manjimup",
                                                        "characterFormat": {
                                                            "fontSize": 10.0,
                                                            "fontFamily": "Segoe UI",
                                                            "fontColor": "#000000FF"
                                                        }
                                                    },
                                                    {
                                                        "text": " Dried Apples",
                                                        "characterFormat": {
                                                            "fontSize": 10.0,
                                                            "fontFamily": "Segoe UI",
                                                            "fontColor": "#000000FF"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 38.540000915527344,
                                            "preferredWidthType": "Percent",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": true,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "right": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "top": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "bottom": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
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
                                                "texture": "TextureNone"
                                            }
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "textAlignment": "Right",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "35",
                                                        "characterFormat": {
                                                            "fontSize": 10.0,
                                                            "fontFamily": "Segoe UI",
                                                            "fontColor": "#000000FF"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 12.859999656677246,
                                            "preferredWidthType": "Percent",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": true,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "right": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "top": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "bottom": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
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
                                                "texture": "TextureNone"
                                            }
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "textAlignment": "Right",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "$42.40",
                                                        "characterFormat": {
                                                            "fontSize": 10.0,
                                                            "fontFamily": "Segoe UI",
                                                            "fontColor": "#000000FF"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 12.859999656677246,
                                            "preferredWidthType": "Percent",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": true,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "right": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "top": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "bottom": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
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
                                                "texture": "TextureNone"
                                            }
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "textAlignment": "Right",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "15.00%",
                                                        "characterFormat": {
                                                            "fontSize": 10.0,
                                                            "fontFamily": "Segoe UI",
                                                            "fontColor": "#000000FF"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 12.859999656677246,
                                            "preferredWidthType": "Percent",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": true,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "right": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "top": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "bottom": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
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
                                                "texture": "TextureNone"
                                            }
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "textAlignment": "Right",
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
                                                    },
                                                    {
                                                        "text": "$1,484.00",
                                                        "characterFormat": {
                                                            "fontSize": 10.0,
                                                            "fontFamily": "Segoe UI",
                                                            "fontColor": "#000000FF"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 14.0,
                                            "preferredWidthType": "Percent",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": true,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "right": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "top": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "bottom": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
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
                                                "texture": "TextureNone"
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                "rowFormat": {
                                    "allowBreakAcrossPages": true,
                                    "isHeader": false,
                                    "height": 19.5,
                                    "heightType": "Exactly",
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
                                                "paragraphFormat": {
                                                    "textAlignment": "Center",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "65",
                                                        "characterFormat": {
                                                            "fontSize": 10.0,
                                                            "fontFamily": "Segoe UI",
                                                            "fontColor": "#000000FF"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 8.880000114440918,
                                            "preferredWidthType": "Percent",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": true,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "right": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "top": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "bottom": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
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
                                                "texture": "TextureNone"
                                            }
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Louisiana Fiery Hot Pepper Sauce",
                                                        "characterFormat": {
                                                            "fontSize": 10.0,
                                                            "fontFamily": "Segoe UI",
                                                            "fontColor": "#000000FF"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 38.540000915527344,
                                            "preferredWidthType": "Percent",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": true,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "right": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "top": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "bottom": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
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
                                                "texture": "TextureNone"
                                            }
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "textAlignment": "Right",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "15",
                                                        "characterFormat": {
                                                            "fontSize": 10.0,
                                                            "fontFamily": "Segoe UI",
                                                            "fontColor": "#000000FF"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 12.859999656677246,
                                            "preferredWidthType": "Percent",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": true,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "right": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "top": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "bottom": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
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
                                                "texture": "TextureNone"
                                            }
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "textAlignment": "Right",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "$16.80",
                                                        "characterFormat": {
                                                            "fontSize": 10.0,
                                                            "fontFamily": "Segoe UI",
                                                            "fontColor": "#000000FF"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 12.859999656677246,
                                            "preferredWidthType": "Percent",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": true,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "right": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "top": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "bottom": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
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
                                                "texture": "TextureNone"
                                            }
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "textAlignment": "Right",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "15.00%",
                                                        "characterFormat": {
                                                            "fontSize": 10.0,
                                                            "fontFamily": "Segoe UI",
                                                            "fontColor": "#000000FF"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 12.859999656677246,
                                            "preferredWidthType": "Percent",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": true,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "right": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "top": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "bottom": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
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
                                                "texture": "TextureNone"
                                            }
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "textAlignment": "Right",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "$252.00",
                                                        "characterFormat": {
                                                            "fontSize": 10.0,
                                                            "fontFamily": "Segoe UI",
                                                            "fontColor": "#000000FF"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 14.0,
                                            "preferredWidthType": "Percent",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": true,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "right": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "top": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "bottom": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
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
                                                "texture": "TextureNone"
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                "rowFormat": {
                                    "allowBreakAcrossPages": true,
                                    "isHeader": false,
                                    "height": 19.5,
                                    "heightType": "Exactly",
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
                                                    "fontSize": 10.0,
                                                    "fontFamily": "Segoe UI",
                                                    "fontColor": "#000000FF"
                                                },
                                                "paragraphFormat": {
                                                    "textAlignment": "Right",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Total",
                                                        "characterFormat": {
                                                            "bold": true,
                                                            "fontSize": 10.0,
                                                            "fontFamily": "Arial",
                                                            "fontColor": "#000000FF"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 5,
                                            "rowSpan": 1,
                                            "preferredWidth": 86.0,
                                            "preferredWidthType": "Percent",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": true,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "right": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "top": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "bottom": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
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
                                                "texture": "TextureNone"
                                            }
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "characterFormat": {
                                                    "fontSize": 10.0,
                                                    "fontFamily": "Segoe UI",
                                                    "fontColor": "#000000FF"
                                                },
                                                "paragraphFormat": {
                                                    "textAlignment": "Right",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "$1,813.00",
                                                        "characterFormat": {
                                                            "fontSize": 10.0,
                                                            "fontFamily": "Arial",
                                                            "fontColor": "#000000FF"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 14.0,
                                            "preferredWidthType": "Percent",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": true,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "right": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "top": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
                                                },
                                                "bottom": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.25,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#D3D3D3FF"
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
                                                "texture": "TextureNone"
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
                            "leftMargin": 5.0,
                            "rightMargin": 5.0,
                            "leftIndent": 0.0,
                            "tableAlignment": "Left",
                            "preferredWidth": 100.0,
                            "preferredWidthType": "Percent",
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
                                "rows": [
                                    {
                                        "rowFormat": {
                                            "allowBreakAcrossPages": true,
                                            "isHeader": false,
                                            "height": 0.0,
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
                                                            "styleName": "Header"
                                                        },
                                                        "inlines": [
                                                            {
                                                                "text": "Northwind Traders",
                                                                "characterFormat": {
                                                                    "bold": true,
                                                                    "fontSize": 18.0,
                                                                    "fontFamily": "Segoe UI",
                                                                    "fontColor": "#4B88BAFF"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ],
                                                "cellFormat": {
                                                    "columnSpan": 1,
                                                    "rowSpan": 1,
                                                    "preferredWidth": 233.75,
                                                    "preferredWidthType": "Point",
                                                    "verticalAlignment": "Top",
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
                                                            "lineStyle": "Single",
                                                            "lineWidth": 0.5,
                                                            "shadow": false,
                                                            "space": 0.0,
                                                            "hasNoneStyle": false,
                                                            "color": "#A5A5A5FF"
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
                                            },
                                            {
                                                "blocks": [
                                                    {
                                                        "paragraphFormat": {
                                                            "textAlignment": "Right",
                                                            "styleName": "Header"
                                                        },
                                                        "inlines": [
                                                            {
                                                                "text": "Invoice",
                                                                "characterFormat": {
                                                                    "bold": true,
                                                                    "fontSize": 18.0,
                                                                    "fontFamily": "Segoe UI",
                                                                    "fontColor": "#4B88BAFF"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ],
                                                "cellFormat": {
                                                    "columnSpan": 1,
                                                    "rowSpan": 1,
                                                    "preferredWidth": 233.75,
                                                    "preferredWidthType": "Point",
                                                    "verticalAlignment": "Top",
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
                                                            "lineStyle": "Single",
                                                            "lineWidth": 0.5,
                                                            "shadow": false,
                                                            "space": 0.0,
                                                            "hasNoneStyle": false,
                                                            "color": "#A5A5A5FF"
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
                                    },
                                    {
                                        "rowFormat": {
                                            "allowBreakAcrossPages": true,
                                            "isHeader": false,
                                            "height": 0.0,
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
                                                        "inlines": []
                                                    }
                                                ],
                                                "cellFormat": {
                                                    "columnSpan": 1,
                                                    "rowSpan": 1,
                                                    "preferredWidth": 233.75,
                                                    "preferredWidthType": "Point",
                                                    "verticalAlignment": "Top",
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
                                                            "lineStyle": "Single",
                                                            "lineWidth": 0.5,
                                                            "shadow": false,
                                                            "space": 0.0,
                                                            "hasNoneStyle": false,
                                                            "color": "#A5A5A5FF"
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
                                            },
                                            {
                                                "blocks": [
                                                    {
                                                        "characterFormat": {
                                                            "bold": true
                                                        },
                                                        "paragraphFormat": {
                                                            "beforeSpacing": 6.0,
                                                            "textAlignment": "Right",
                                                            "styleName": "Normal"
                                                        },
                                                        "inlines": [
                                                            {
                                                                "text": "July 1996",
                                                                "characterFormat": {
                                                                    "fontFamily": "Segoe UI",
                                                                    "fontColor": "#4B88BAFF"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ],
                                                "cellFormat": {
                                                    "columnSpan": 1,
                                                    "rowSpan": 1,
                                                    "preferredWidth": 233.75,
                                                    "preferredWidthType": "Point",
                                                    "verticalAlignment": "Top",
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
                                                            "lineStyle": "Single",
                                                            "lineWidth": 0.5,
                                                            "shadow": false,
                                                            "space": 0.0,
                                                            "hasNoneStyle": false,
                                                            "color": "#A5A5A5FF"
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
                                    }
                                }
                            },
                            {
                                "paragraphFormat": {
                                    "styleName": "Header"
                                },
                                "inlines": []
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
        ]
    };
    var waitingPopUp = document.getElementById('waiting-popup');
    container.documentEditor.open(JSON.stringify(defaultDocument));    
    container.documentEditor.documentName = 'Table Formatting';    
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