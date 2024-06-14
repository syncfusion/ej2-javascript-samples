this.default = function () {
    var fontStyle = ['Algerian', 'Arial', 'Cambria', 'Calibri', 'Cambria Math', 'Candara', 'Courier New', 'Georgia', 'Impact', 'Segoe Script', 'Segoe Print', 'Segoe UI', 'Symbol', 'Times New Roman', 'Verdana', 'Windings'
    ];
    var fontSize = ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72', '96'];
    var tabs = [{
        header: "Home",
        groups: [{
            header: "Clipboard",
            groupIconCss: 'e-icons e-paste',
            showLauncherIcon: true,
            id: 'clipboard',
            collections: [{
                items: [{
                    type: 'SplitButton',
                    allowedSizes: ej.ribbon.RibbonItemSize.Large,
                    disabled: true,
                    id: 'pastebtn',
                    splitButtonSettings: {
                        content: 'Paste',
                        iconCss: 'e-icons e-paste',
                        items: [{ text: 'Keep Source Format' }, { text: 'Merge Format' }, { text: 'Keep Text Only' }],
                        select: function (args) { updateContent("Paste -> " + args.item.text); },
                        click: function () { updateContent("Paste"); }
                    }
                }]
            }, {
                items: [{
                    type: 'Button',
                    buttonSettings: {
                        content: 'Cut',
                        iconCss: 'e-icons e-cut',
                        clicked: function () { updateContent("Cut"); enablePaste(); }
                    }
                }, {
                    type: 'Button',
                    buttonSettings: {
                        content: 'Copy',
                        iconCss: 'e-icons e-copy',
                        clicked: function () { updateContent("Copy"); enablePaste(); }
                    }
                }, {
                    type: 'Button',
                    buttonSettings: {
                        content: 'Format Painter',
                        iconCss: 'e-icons e-format-painter',
                        clicked: function () { updateContent("Format Painter"); }
                    }
                }]
            },]
        }, {
            header: "Font",
            orientation: 'Row',
            groupIconCss: 'e-icons e-bold',
            isCollapsible: false,
            enableGroupOverflow: true,
            overflowHeader: 'More Font Options',
            cssClass: 'font-group',
            collections: [{
                items: [{
                    type: 'ComboBox',
                    comboBoxSettings: {
                        width: '115px',
                        popupWidth: '150px',
                        allowFiltering: true,
                        dataSource: fontStyle,
                        label: 'Font Style',
                        index: 2,
                        change: function (args) {
                            if (args.itemData) {
                                updateContent("Font Style -> " + args.itemData.text);
                            }
                        }
                    }
                }, {
                    type: 'ComboBox',
                    comboBoxSettings: {
                        dataSource: fontSize,
                        label: 'Font Size',
                        allowFiltering: true,
                        index: 4,
                        width: '65px',
                        popupWidth: '85px',
                        change: function (args) {
                            if (args.itemData) {
                                updateContent("Font Size -> " + args.itemData.text);
                            }
                        }
                    }
                }]
            }, {
                items: [{
                    type: 'GroupButton',
                    allowedSizes: ej.ribbon.RibbonItemSize.Small,
                    groupButtonSettings: {
                        selection: ej.ribbon.RibbonGroupButtonSelection.Multiple,
                        header: 'Format Styles',
                        items: [
                        {
                            iconCss: 'e-icons e-bold',
                            content: 'Bold',
                            click: function () { updateContent("Bold"); }
                        }, {
                            iconCss: 'e-icons e-italic',
                            content: 'Italic',
                            click: function () { updateContent("Italic"); }
                        }, {
                            iconCss: 'e-icons e-underline',
                            content: 'Underline',
                            click: function () { updateContent("Underline"); }
                        }, {
                            iconCss: 'e-icons e-strikethrough',
                            content: 'Strikethrough',
                            click: function () { updateContent("Strikethrough"); }
                        }, {
                            iconCss: 'e-icons e-change-case',
                            content: 'Change Case',
                            click: function () { updateContent("Change Case"); }
                        }]
                    }
                }, {
                    type: 'ColorPicker',
                    allowedSizes: ej.ribbon.RibbonItemSize.Small,
                    colorPickerSettings: {
                        change: function (args) { updateContent(args.currentValue.hex + " color"); },
                        value: '#123456'
                    },
                    displayOptions: ej.ribbon.DisplayMode.Simplified | ej.ribbon.DisplayMode.Classic,
                }]
            }]
        }, {
            id: 'paragraph',
            orientation: 'Row',
            header: "Paragraph",
            groupIconCss: 'e-icons e-align-center',
            collections: [{
                items: [{
                    type: "Button",
                    allowedSizes: ej.ribbon.RibbonItemSize.Small,
                    buttonSettings: {
                        iconCss: 'e-icons e-decrease-indent',
                        content: 'Decrease Indent',
                        clicked: function () { updateContent("Cut"); }
                    }
                }, {
                    type: "Button",
                    allowedSizes: ej.ribbon.RibbonItemSize.Small,
                    buttonSettings: {
                        iconCss: 'e-icons e-increase-indent',
                        content: 'Increase Indent',
                        clicked: function () { updateContent("Increase Indent"); }
                    }
                }, {
                    type: "Button",
                    allowedSizes: ej.ribbon.RibbonItemSize.Small,
                    buttonSettings: {
                        iconCss: 'e-icons e-paragraph',
                        content: 'Paragraph',
                        clicked: function () { updateContent("Paragraph"); }
                    }
                }]
            }, {
                items: [
                    {
                    type: 'GroupButton',
                    allowedSizes: ej.ribbon.RibbonItemSize.Small,
                    groupButtonSettings: {
                        selection: ej.ribbon.RibbonGroupButtonSelection.Single,
                        header: 'Alignment',
                        items: [{
                            selected: true,
                            iconCss: 'e-icons e-align-left',
                            click: function ()  { updateContent("Align Left"); }
                        }, {
                            iconCss: 'e-icons e-align-center',
                            click: function ()  { updateContent("Align Center"); }
                        }, {
                            iconCss: 'e-icons e-align-right',
                            click: function ()  { updateContent("Align Right"); }
                        }, {
                            iconCss: 'e-icons e-justify',
                            click: function ()  { updateContent("Justify"); }
                        }
                    ]
                    }
                }]
            }]
        }, {
            header: "Editing",
            orientation: 'Column',
            groupIconCss: 'e-icons e-edit',
            collections: [{
                items: [{
                    type: 'SplitButton',
                    splitButtonSettings: {
                        content: 'Find',
                        iconCss: 'e-icons e-search',
                        items: [{ text: 'Find', iconCss: 'e-icons e-search' },
                        { text: 'Advanced Find', iconCss: 'e-icons e-search' },
                        { text: 'Go to', iconCss: 'e-icons e-arrow-right' }],
                        select: function (args) { updateContent("Find -> " + args.item.text); },
                        click: function () { updateContent("Find"); }
                    }
                }, {
                    type: 'Button',
                    buttonSettings: {
                        content: 'Replace',
                        iconCss: 'e-icons e-replace',
                        clicked: function () { updateContent("Replace"); }
                    }
                }, {
                    type: 'SplitButton',
                    splitButtonSettings: {
                        content: 'Select',
                        iconCss: 'e-icons e-mouse-pointer',
                        items: [{ text: 'Select All' },
                        { text: 'Select Objects' }],
                        select: function (args) { updateContent("Select -> " + args.item.text); },
                        click: function () { updateContent("Select"); }
                    }
                }]
            }]
        }, {
            header: "Voice",
            isCollapsible: false,
            groupIconCss: 'sf-icon-dictate',
            collections: [{
                items: [{
                    type: 'SplitButton',
                    allowedSizes: ej.ribbon.RibbonItemSize.Large,
                    splitButtonSettings: {
                        content: 'Dictate',
                        iconCss: 'sf-icon-dictate',
                        items: [{ text: 'Chinese' }, { text: 'English' }, { text: 'German' }, { text: 'French' }],
                        select: function (args) { updateContent("Dictate -> " + args.item.text); },
                        click: function () { updateContent("Dictate"); }
                    }
                }]
            }]
        }, {
            header: "Editor",
            isCollapsible: false,
            groupIconCss: 'sf-icon-editor',
            collections: [{
                items: [{
                    type: 'Button',
                    allowedSizes: ej.ribbon.RibbonItemSize.Large,
                    buttonSettings: {
                        content: 'Editor',
                        iconCss: 'sf-icon-editor',
                        clicked: function () { updateContent("Editor"); }
                    }
                }]
            }]
        }, {
            header: "Reuse Files",
            isCollapsible: false,
            groupIconCss: 'sf-icon-reuse',
            collections: [{
                items: [{
                    type: 'Button',
                    allowedSizes: ej.ribbon.RibbonItemSize.Large,
                    disabled: true,
                    buttonSettings: {
                        content: 'Reuse Files',
                        iconCss: 'sf-icon-reuse',
                        clicked: function () { updateContent("Reuse Files"); }
                    }
                }]
            }]
        }]
    }, {
        header: 'Insert',
        groups: [{
            header: 'Tables',
            isCollapsible: false,
            collections: [{
                items: [{
                    type: 'DropDown',
                    allowedSizes: ej.ribbon.RibbonItemSize.Large,
                    dropDownSettings: {
                        content: 'Table',
                        iconCss: 'e-icons e-table',
                        items: [
                            { text: 'Insert Table' }, { text: 'Draw Table' },
                            { text: 'Convert Table' }, { text: 'Excel SpreadSheet' }
                        ],
                        select: function (args) { updateContent("Table -> " + args.item.text); }
                    }
                }]
            }]
        }, {
            header: 'Illustrations',
            showLauncherIcon: true,
            id: 'illustration',
            orientation: 'Row',
            enableGroupOverflow: true,
            overflowHeader: 'Illustrations',
            groupIconCss: 'e-icons e-image',
            collections: [{
                items: [{
                    id: 'pictureddl',
                    type: 'DropDown',
                    dropDownSettings: {
                        content: 'Pictures',
                        iconCss: 'e-icons e-image',
                        target: '#pictureList'
                    }
                }, {
                    type: 'DropDown',
                    dropDownSettings: {
                        iconCss: 'sf-icon-shapes',
                        content: 'Shapes',
                        items: [{ text: 'Lines' }, { text: 'Rectangles' }, { text: 'Basic Arrows' }, { text: 'Basic Shapes' }, { text: 'FlowChart' }],
                        select: function (args) { updateContent("Shapes -> " + args.item.text); }
                    }
                }, {
                    type: 'Button',
                    buttonSettings: {
                        content: '3D Models',
                        iconCss: 'sf-icon-3d-model',
                        clicked: function () { updateContent("3D Models"); }
                    }
                }, {
                    type: 'Button',
                    buttonSettings: {
                        content: 'SmartArt',
                        iconCss: 'sf-icon-smart-art',
                        clicked: function () { updateContent("SmartArt"); }
                    }
                }, {
                    type: 'Button',
                    buttonSettings: {
                        content: 'Chart',
                        iconCss: 'sf-icon-chart',
                        clicked: function () { updateContent("Chart"); }
                    }
                }, {
                    type: 'Button',
                    buttonSettings: {
                        content: 'Screenshot',
                        iconCss: 'sf-icon-screenshot',
                        clicked: function () { updateContent("Screenshot"); }
                    }
                }]
            }]
        }, {
            header: 'Header & Footer',
            showLauncherIcon: true,
            orientation: 'Column',
            id: 'header_footer',
            groupIconCss: 'e-icons e-table',
            collections: [{
                items: [{
                    type: 'DropDown',
                    dropDownSettings: {
                        content: 'Header',
                        iconCss: 'e-icons e-header',
                        items: [{ text: 'Insert Header' }, { text: 'Edit Header' }, { text: 'Remove Header' }],
                        select: function (args) { updateContent("Header -> " + args.item.text); }
                    }
                }, {
                    type: 'DropDown',
                    dropDownSettings: {
                        content: 'Footer',
                        iconCss: 'e-icons e-footer',
                        items: [{ text: 'Insert Footer' }, { text: 'Edit Footer' }, { text: 'Remove Footer' }],
                        select: function (args) { updateContent("Footer -> " + args.item.text); }
                    }
                }, {
                    type: 'DropDown',
                    dropDownSettings: {
                        iconCss: 'e-icons e-page-numbering',
                        content: 'Page Number',
                        items: [{ text: 'Insert Top of page' }, { text: 'Insert Bottom of page' }, { text: 'Format Page Number' }, { text: 'Remove Page Number' }],
                        select: function (args) { updateContent("Page Number -> " + args.item.text); }
                    }
                }]
            }]
        },
        {
            header: 'Comments',
            isCollapsible: false,
            collections: [{
                items: [{
                    type: 'Button',
                    allowedSizes: ej.ribbon.RibbonItemSize.Large,
                    buttonSettings: {
                        iconCss: 'e-icons e-comment-add',
                        content: 'New Comment',
                        clicked: function () { updateContent("New Comment"); }
                    }
                }]
            }]
        }, {
            header: 'Links',
            groupIconCss: 'e-icons e-link',
            isCollapsible: false,
            collections: [{
                items: [{
                    type: 'DropDown',
                    allowedSizes: ej.ribbon.RibbonItemSize.Large,
                    dropDownSettings: {
                        iconCss: 'e-icons e-link',
                        content: 'Link',
                        items: [{ text: 'Insert Link', iconCss: 'e-icons e-link' },
                        { text: 'Recent Links', iconCss: 'e-icons e-clock' },
                        { text: 'Bookmarks', iconCss: 'e-icons e-bookmark' }],
                        select: function (args) { updateContent("Link -> " + args.item.text); }
                    }
                }]
            }]
        }]
    }, {
        header: 'View',
        groups: [{
            header: 'Views',
            orientation: 'Row',
            groupIconCss: 'e-icons e-print',
            collections: [{
                items: [{
                    type: 'Button',
                    buttonSettings: {
                        iconCss: 'sf-icon-read',
                        content: 'Read Mode',
                        clicked: function () { updateContent("Read Mode"); }
                    }
                }, {
                    type: 'Button',
                    buttonSettings: {
                        iconCss: 'e-print e-icons',
                        content: 'Print Layout',
                        clicked: function () { updateContent("Print Layout"); }
                    }
                }, {
                    type: 'Button',
                    buttonSettings: {
                        iconCss: 'sf-icon-web-layout',
                        content: 'Web Layout',
                        clicked: function () { updateContent("Web Layout"); }
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
                        iconCss: 'e-icons e-zoom-in',
                        content: 'Zoom In',
                        clicked: function () { updateContent("Zoom In"); }
                    }
                }, {
                    type: 'Button',
                    buttonSettings: {
                        iconCss: 'e-icons e-zoom-out',
                        content: 'Zoom Out',
                        clicked: function () { updateContent("Zoom Out"); }
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
                        change: function () { updateContent("Ruler"); }
                    }
                }, {
                    type: 'CheckBox',
                    checkBoxSettings: {
                        label: 'Gridlines',
                        checked: false,
                        change: function () { updateContent("Gridlines"); }
                    }
                }, {
                    type: 'CheckBox',
                    checkBoxSettings: {
                        label: 'Navigation Pane',
                        checked: true,
                        change: function () { updateContent("Navigation Pane"); }
                    }
                }]
            }]
        }, {
            header: 'Dark Mode',
            isCollapsible: false,
            collections: [{
                items: [{
                    type: 'Button',
                    allowedSizes: ej.ribbon.RibbonItemSize.Large,
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
        showHeader: true,
        id: 'listview',
        headerTitle: 'Insert Picture From',
        dataSource: ['This Device', 'Stock Images', 'Online Images'],
        select: function (args) { updateContent("Picture -> " + args.text); }
    });
    list.appendTo('#pictureList');

    var menuItems = [
        { id: 'new', text: 'New', iconCss: 'e-icons e-file-new' },
        { id: 'open', text: 'Open', iconCss: 'e-icons e-folder-open' },
        { id: 'rename', text: 'Rename', iconCss: 'e-icons e-rename' },
        {
            id: 'save',
            iconCss: 'e-icons e-save',
            text: 'Save as',
            items: [
                { text: 'Microsoft Word (.docx)', iconCss: 'sf-icon-word', id: 'word' },
                { text: 'Microsoft Word 97-2003(.doc)', iconCss: 'sf-icon-word', id: 'word97' },
                { text: 'Download as PDF', iconCss: 'e-icons e-export-pdf', id: 'pdf' },
            ]
        }
    ];

    var files = ({
        menuItems: menuItems,
        visible: true,
        select: function (args) {
            if (args.item.id == "word" || args.item.id == "word97" || args.item.id == "pdf") {
                updateContent("File -> Save as -> " + args.item.text);
            }
            else {
                updateContent("File -> " + args.item.text);
            }
        }
    });

    var ribbon = new ej.ribbon.Ribbon({
        tabs: tabs,
        activeLayout: 'Simplified',
        fileMenu: files,
        launcherIconClick: function (args) {
            if (args.groupId == "clipboard") {
                updateContent("Clipboard Launcher Icon");
            }
            else if (args.groupId == "illustration") {
                updateContent("Illustration Launcher Icon");
            }
            else if (args.groupId == "header_footer") {
                updateContent("Header & Footer Launcher Icon");
            }
        }
    });
    ribbon.appendTo("#ribbon");

    var toast = new ej.notifications.Toast({
        target: '#ribbonPlaceHolder',
        cssClass: 'e-toast-info',
        newestOnTop: true,
        height: 25,
        width: 'auto',
        timeOut: 2000,
        showCloseButton: true,
        animation: { show: { effect: 'FadeIn' }, hide: { effect: 'FadeOut' } },
        position: { X: "Right" },
    });
    toast.appendTo('#toast');

    function updateContent(args) {
        toast.show({ content: "Last clicked item is " + args });
    }

    var isPasteDisabled = true;    
    function enablePaste() { 
        if (!isPasteDisabled) { return; }        
        ribbon.enableItem('pastebtn');
        isPasteDisabled = false;
    }
};
