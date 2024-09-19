this.default = function () {
    var tabs = [{
        header: "Home",
        groups: [{
            id: "clipboard_grp",
            header: "Clipboard",
            groupIconCss: 'e-icons e-paste',
            showLauncherIcon: true,
            collections: [{
                items: [{
                    allowedSizes: ej.ribbon.RibbonItemSize.Large,
                    type: 'SplitButton',
                    id: 'pastebtn',
                    disabled: true,
                    splitButtonSettings: {
                        items: [{ text: 'Keep Source Format' }, { text: 'Merge Format' }, { text: 'Keep Text Only' }],
                        iconCss: 'e-icons e-paste',
                        click: function () { updateContent("Paste"); },
                        content: 'Paste',
                        select: function (args) { updateContent("Paste -> " + args.item.text); },
                    }
                }]
            }, {
                items: [{
                    type: 'Button',
                    buttonSettings: {
                        content: 'Cut',
                        clicked: function () { updateContent("Cut"); enablePasteBtn(); },
                        iconCss: 'e-icons e-cut'
                    }
                }, {
                    type: 'Button',
                    buttonSettings: {
                        content: 'Copy',
                        clicked: function () { updateContent("Copy"); enablePasteBtn(); },
                        iconCss: 'e-icons e-copy'
                    }
                }, {
                    type: 'Button',
                    buttonSettings: {
                        content: 'Format Painter',
                        iconCss: 'e-icons e-format-painter',
                        clicked: function () { updateContent("Format Painter"); },
                    }
                }]
            }]
        },  {
            header: "Gallery",
            showLauncherIcon:true,
            groupIconCss: 'e-icons e-paste',
            collections: [{
                items: [{
                    type: 'Gallery',
                    gallerySettings: {
                        popupWidth: "544px",
                        itemCount: 3,
                        select: function (args) { updateContent("Gallery -> " + args.currentItem.content); },
                        groups: [{
                                itemWidth: '100',
                                itemHeight: '40',
                                header: 'Title and Headings',
                                items: [
                                    {
                                        content: 'Heading 1',
                                        cssClass: 'heading_1'
                                    },
                                    {
                                        content: 'Heading 2',
                                        cssClass: 'heading_2'
                                    }, {
                                        content: 'Heading 3',
                                        cssClass: 'heading_3'
                                    }, {
                                        content: 'Heading 4',
                                        cssClass: 'heading_4'
                                    }, {
                                        content: 'Title',
                                        cssClass: 'title'
                                    }, {
                                        content: 'Total',
                                        cssClass: 'total'
                                    }
                                ]
                            }, {
                                itemWidth: '100',
                                itemHeight: '40',
                                header: 'Data and Model',
                                items: [
                                    {
                                        content: 'Calculation',
                                        cssClass: 'calculation'
                                    },
                                    {
                                        content: 'Check Cell',
                                        cssClass: 'check-cell'
                                    }, {
                                        content: 'Hyperlink',
                                        cssClass: 'hyperlink'
                                    }, {
                                        content: 'Input',
                                        cssClass: 'input'
                                    }, {
                                        content: 'Linked Cell',
                                        cssClass: 'linked-cell'
                                    }, {
                                        content: 'Note',
                                        cssClass: 'note'
                                    }
                                ]
                            }, {
                                itemWidth: '100',
                                itemHeight: '40',
                                header: 'Good, Bad and Neutral',
                                items: [{
                                        content: 'Normal',
                                        cssClass: 'normal'
                                    }, {
                                        content: 'Bad',
                                        cssClass: 'bad'
                                    }, {
                                        content: 'Good',
                                        cssClass: 'good'
                                    }, {
                                        content: 'Neutral',
                                        cssClass: 'neutral'
                                    }
                                ]
                            }]
                    }
                }]
            }]
        }, {
            header: "Voice",
            isCollapsible: false,
            groupIconCss: 'sf-icon-dictate',
            collections: [{
                items: [{
                    allowedSizes: ej.ribbon.RibbonItemSize.Large,
                    type: 'SplitButton',
                    splitButtonSettings: {
                        iconCss: 'sf-icon-dictate',
                        items: [{ text: 'Chinese' }, { text: 'English' }, { text: 'German' }, { text: 'French' }],
                        click: function () { updateContent("Dictate"); },
                        content: 'Dictate',
                        select: function (args) { updateContent("Dictate -> " + args.item.text); }
                    }
                }]
            }]
        }, {
            header: "Editor",
            groupIconCss: 'sf-icon-editor',
            isCollapsible: false,
            collections: [{
                items: [{
                    type: 'Button',
                    allowedSizes: ej.ribbon.RibbonItemSize.Large,
                    buttonSettings: {
                        content: 'Editor',
                        clicked: function () { updateContent("Editor"); },
                        iconCss: 'sf-icon-editor',
                    }
                }]
            }]
        }, {
            header: "Reuse Files",
            groupIconCss: 'sf-icon-reuse',
            isCollapsible: false,
            collections: [{
                items: [{
                    type: 'Button',
                    allowedSizes: ej.ribbon.RibbonItemSize.Large,
                    buttonSettings: {
                        content: 'Reuse Files',
                        clicked: function () { updateContent("Reuse Files"); },
                        iconCss: 'sf-icon-reuse'
                    }
                }]
            }]
        }]
    }, {
        header: 'Insert',
        groups: [{
            isCollapsible: false,
            header: 'Tables',
            collections: [{
                items: [{
                    allowedSizes: ej.ribbon.RibbonItemSize.Large,
                    type: 'DropDown',
                    dropDownSettings: {
                        items: [
                            { text: 'Insert Table' }, { text: 'Draw Table' },
                            { text: 'Convert Table' }, { text: 'Excel SpreadSheet' }
                        ],
                        content: 'Table',
                        select: function (args) { updateContent("Table -> " + args.item.text); },
                        iconCss: 'e-icons e-table',
                    }
                }]
            }]
        }, {
            header: 'Illustrations',
            id: 'illustrations',
            groupIconCss: 'e-icons e-image',
            showLauncherIcon: true,
            overflowHeader: 'Illustrations',
            orientation: 'Row',
            enableGroupOverflow: true,
            collections: [{
                items: [{
                    type: 'DropDown',
                    id: 'pictureddl',
                    dropDownSettings: {
                        iconCss: 'e-icons e-image',
                        content: 'Pictures',
                        target: '#pictureList',
                    }
                }, {
                    type: 'DropDown',
                    dropDownSettings: {
                        items: [{ text: 'Lines' }, { text: 'Rectangles' }, { text: 'Basic Arrows' }, { text: 'Basic Shapes' }, { text: 'FlowChart' }],
                        select: function (args) { updateContent("Shapes -> " + args.item.text); },
                        content: 'Shapes',
                        iconCss: 'sf-icon-shapes'
                    }
                }, {
                    type: 'Button',
                    buttonSettings: {
                        clicked: function () { updateContent("3D Models"); },
                        iconCss: 'sf-icon-3d-model',
                        content: '3D Models'
                    }
                }, {
                    type: 'Button',
                    buttonSettings: {
                        clicked: function () { updateContent("SmartArt"); },
                        iconCss: 'sf-icon-smart-art',
                        content: 'SmartArt',
                    }
                }, {
                    type: 'Button',
                    buttonSettings: {
                        iconCss: 'sf-icon-chart',
                        content: 'Chart',
                        clicked: function () { updateContent("Chart"); },
                    }
                }, {
                    type: 'Button',
                    buttonSettings: {
                        iconCss: 'sf-icon-screenshot',
                        content: 'Screenshot',
                        clicked: function () { updateContent("Screenshot"); },
                    }
                }]
            }]
        }, {
            id: 'header-footer',
            showLauncherIcon: true,
            header: 'Header & Footer',
            orientation: 'Column',
            groupIconCss: 'e-icons e-table',
            collections: [{
                items: [{
                    type: 'DropDown',
                    dropDownSettings: {
                        iconCss: 'e-icons e-header',
                        content: 'Header',
                        select: function (args) { updateContent("Header -> " + args.item.text); },
                        items: [{ text: 'Insert Header' }, { text: 'Edit Header' }, { text: 'Remove Header' }],
                    }
                }, {
                    type: 'DropDown',
                    dropDownSettings: {
                        iconCss: 'e-icons e-footer',
                        content: 'Footer',
                        select: function (args) { updateContent("Footer -> " + args.item.text); },
                        items: [{ text: 'Insert Footer' }, { text: 'Edit Footer' }, { text: 'Remove Footer' }],
                    }
                }, {
                    type: 'DropDown',
                    dropDownSettings: {
                        iconCss: 'e-icons e-page-numbering',
                        content: 'Page Number',
                        select: function (args) { updateContent("Page Numbering -> " + args.item.text); },
                        items: [{ text: 'Insert Top of page' }, { text: 'Insert Bottom of page' }, { text: 'Format Page Number' }, { text: 'Remove Page Number' }],
                    }
                }]
            }]
        },
        {
            header: 'Comments',
            isCollapsible: false,
            collections: [{
                items: [{
                    allowedSizes: ej.ribbon.RibbonItemSize.Large,
                    type: 'Button',
                    buttonSettings: {
                        iconCss: 'e-icons e-comment-add',
                        content: 'New Comment',
                        clicked: function () { updateContent("New Comment"); }
                    }
                }]
            }]
        }, {
            header: 'Links',
            isCollapsible: false,
            groupIconCss: 'e-icons e-link',
            collections: [{
                items: [{
                    allowedSizes: ej.ribbon.RibbonItemSize.Large,
                    type: 'DropDown',
                    dropDownSettings: {
                        iconCss: 'e-icons e-link',
                        select: function (args) { updateContent("Link -> " + args.item.text); },
                        content: 'Link',
                        items: [{ text: 'Insert Link', iconCss: 'e-icons e-link' },
                        { text: 'Recent Links', iconCss: 'e-icons e-clock' },
                        { text: 'Bookmarks', iconCss: 'e-icons e-bookmark' }
                        ]
                    }
                }]
            }]
        }]
    }, {
        header: 'View',
        groups: [{
            groupIconCss: 'e-icons e-print',
            header: 'Views',
            orientation: 'Row',
            collections: [{
                items: [{
                    type: 'Button',
                    buttonSettings: {
                        content: 'Read Mode',
                        iconCss: 'sf-icon-read',
                        clicked: function () { updateContent("Read Mode"); }
                    }
                }, {
                    type: 'Button',
                    buttonSettings: {
                        clicked: function () { updateContent("Print Layout"); },
                        iconCss: 'e-print e-icons',
                        content: 'Print Layout',
                    }
                }, {
                    type: 'Button',
                    buttonSettings: {
                        iconCss: 'sf-icon-web-layout',
                        content: 'Web Layout',
                        clicked: function () { updateContent("Web Layout"); },
                    }
                }]
            }]
        }, {
            header: 'Zoom',
            orientation: 'Row',
            groupIconCss: 'e-icons e-zoom-to-fit',
            collections: [{
                items: [{
                    type: 'Button',
                    buttonSettings: {
                        content: 'Zoom In',
                        iconCss: 'e-icons e-zoom-in',
                        clicked: function () { updateContent("Zoom In"); },
                    }
                }, {
                    type: 'Button',
                    buttonSettings: {
                        iconCss: 'e-icons e-zoom-out',
                        clicked: function () { updateContent("Zoom Out"); },
                        content: 'Zoom Out',
                    }
                }]
            }]
        }, {
            header: 'Show',
            isCollapsible: false,
            collections: [{
                items: [{
                    type: 'CheckBox',
                    checkBoxSettings: {
                        label: 'Ruler',
                        checked: false,
                        change: function () { updateContent("Ruler"); },
                    }
                }, {
                    type: 'CheckBox',
                    checkBoxSettings: {
                        checked: false,
                        label: 'Gridlines',
                        change: function () { updateContent("Gridlines"); },
                    }
                }, {
                    type: 'CheckBox',
                    checkBoxSettings: {
                        checked: true,
                        label: 'Navigation Pane',
                        change: function () { updateContent("Navigation Pane"); },
                    }
                }]
            }]
        }, {
            header: 'Dark Mode',
            isCollapsible: false,
            collections: [{
                items: [{
                    allowedSizes: ej.ribbon.RibbonItemSize.Large,
                    type: 'Button',
                    buttonSettings: {
                        iconCss: 'sf-icon-mode',
                        content: 'Dark Mode',
                        clicked: function () { updateContent("Dark Mode"); }
                    }
                }]
            }]
        }]
    }];
    var list = new ej.lists.ListView({
        dataSource: ['Stock Images', 'This Device', 'Online Images'],
        headerTitle: 'Insert Picture From',
        select: function (args) { updateContent("Pictures -> " + args.text); },
        showHeader: true,
    });
    list.appendTo('#pictureList');
    var menuItems = [
        { text: 'New', iconCss: 'e-icons e-file-new', id: 'itemNew' },
        { text: 'Open', iconCss: 'e-icons e-folder-open', id: 'itemOpen' },
        { text: 'Rename', iconCss: 'e-icons e-rename', id: 'itemRename' },
        {
            iconCss: 'e-icons e-save',
            text: 'Save as',
            id: 'save',
            items: [
                { text: 'Microsoft Word (.docx)', iconCss: 'sf-icon-word', id: 'new_word' },
                { text: 'Microsoft Word 97-2003(.doc)', iconCss: 'sf-icon-word', id: 'old_word' },
                { text: 'Download as PDF', iconCss: 'e-icons e-export-pdf', id: 'download_pdf' }
            ],
        }
    ];
    var files = ({
        visible: true,
        menuItems: menuItems,
        select: function (args) {
            if (args.item.id === "new_word" || args.item.id === "old_word" || args.item.id === "download_pdf") {
                updateContent("File -> Save as -> " + args.item.text);
            }
            else {
                updateContent("File -> " + args.item.text);
            }
        }
    });

    var ribbon = new ej.ribbon.Ribbon({
        fileMenu: files,
        tabs: tabs,
        cssClass: 'ribbonGallery',
        launcherIconClick: function (args) {
            if (args.groupId == "clipboard_grp") {
                updateContent("Clipboard Launcher Icon");
            }
            else if (args.groupId == "header-footer") {
                updateContent("Header & Footer Launcher Icon");
            }
            else if (args.groupId == "illustrations") {
                updateContent("Illustration Launcher Icon");
            }
        }
    });
    ribbon.appendTo("#ribbon");
    var toast = new ej.notifications.Toast({
        width: 'auto',
        timeOut: 2000,
        height: 25,
        cssClass: 'e-toast-info',
        newestOnTop: true,
        target: '#ribbonPlaceHolder',
        animation: { show: { effect: 'FadeIn' }, hide: { effect: 'FadeOut' } },
        showCloseButton: true,
        position: { X: "Right" },
    });
    toast.appendTo('#toast');

    function updateContent(args) {
        toast.show({ content: "Last clicked item is " + args });
    }

    var isPasteDisabled = true;    
    function enablePasteBtn() { 
        if (!isPasteDisabled) { return; }        
        ribbon.enableItem('pastebtn');
        isPasteDisabled = false;
    }
};