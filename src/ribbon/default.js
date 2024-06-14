this.default = function () {
    var fontSize = ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72', '96'];
    var fontStyle = ['Algerian', 'Arial', 'Calibri', 'Cambria', 'Cambria Math', 'Courier New', 'Candara', 'Georgia', 'Impact', 'Segoe Print', 'Segoe Script', 'Segoe UI', 'Symbol', 'Times New Roman', 'Verdana', 'Windings'
    ];
    var tabs = [{
        header: "Home",
        groups: [{
            header: "Clipboard",
            id: "clipboard",
            showLauncherIcon: true,
            groupIconCss: 'e-icons e-paste',
            collections: [{
                items: [{
                    type: 'SplitButton',
                    allowedSizes: ej.ribbon.RibbonItemSize.Large,
                    disabled: true,
                    id: 'pastebtn',
                    splitButtonSettings: {
                        iconCss: 'e-icons e-paste',
                        items: [{ text: 'Keep Source Format' }, { text: 'Merge Format' }, { text: 'Keep Text Only' }],
                        select: function (args) { updateContent("Paste -> " + args.item.text); },
                        click: function () { updateContent("Paste"); },
                        content: 'Paste'
                    }
                }]
            }, {
                items: [{
                    type: 'Button',
                    buttonSettings: {
                        content: 'Cut',
                        clicked: function () { updateContent("Cut"); enablePaste(); },
                        iconCss: 'e-icons e-cut'
                    }
                }, {
                    type: 'Button',
                    buttonSettings: {
                        content: 'Copy',
                        clicked: function () { updateContent("Copy"); enablePaste(); },
                        iconCss: 'e-icons e-copy'
                    }
                }, {
                    type: 'Button',
                    buttonSettings: {
                        content: 'Format Painter',
                        clicked: function () { updateContent("Format Painter"); },
                        iconCss: 'e-icons e-format-painter'
                    }
                }]
            }]
        }, {
            header: "Font",
            isCollapsible: false,
            enableGroupOverflow: true,
            overflowHeader: 'More Font Options',
            orientation: 'Row',
            groupIconCss: 'e-icons e-bold',
            cssClass: 'font-group',
            collections: [{
                items: [{
                    type: 'ComboBox',
                    comboBoxSettings: {
                        dataSource: fontStyle,
                        label: 'Font Style',
                        index: 3,
                        width: '115px',
                        popupWidth: '150px',
                        change: function (args) {
                            if (args.itemData) {
                                updateContent("Font Style -> " + args.itemData.text);
                            }
                        },
                        allowFiltering: true
                    }
                }, {
                    type: 'ComboBox',
                    comboBoxSettings: {
                        dataSource: fontSize,
                        label: 'Font Size',
                        width: '65px',
                        popupWidth: '85px',
                        change: function (args) {
                            if (args.itemData) {
                                updateContent("Font Size -> " + args.itemData.text);
                            }
                        },
                        index: 3,
                        allowFiltering: true
                    }
                }]
            }, {
                items: [{
                    type: 'GroupButton',
                    allowedSizes: ej.ribbon.RibbonItemSize.Small,
                    groupButtonSettings: {
                        selection: ej.ribbon.RibbonGroupButtonSelection.Multiple,
                        header: 'Format Styles',
                        items: [{
                            iconCss: 'e-icons e-bold',
                            click: function () { updateContent("Bold"); },
                            content: 'Bold'
                        }, {
                            content: 'Italic',
                            click: function () { updateContent("Italic"); },
                            iconCss: 'e-icons e-italic'
                        }, {
                            content: 'Underline',
                            click: function () { updateContent("Underline"); },
                            iconCss: 'e-icons e-underline'
                        }, {
                            content: 'Strikethrough',
                            click: function () { updateContent("Strikethrough"); },
                            iconCss: 'e-icons e-strikethrough'
                        }, {
                            content: 'Change Case',
                            click: function () { updateContent("Change Case"); },
                            iconCss: 'e-icons e-change-case'
                        }]
                    }
                }, {
                    type: 'ColorPicker',
                    allowedSizes: ej.ribbon.RibbonItemSize.Small,
                    displayOptions: ej.ribbon.DisplayMode.Simplified | ej.ribbon.DisplayMode.Classic,
                    colorPickerSettings: {
                        change: function (args) { updateContent(args.currentValue.hex + " color"); },
                        value: '#123456'
                    },
                }]
            }]
        }, {
            id: 'paragraph',
            header: "Paragraph",
            orientation: 'Row',
            groupIconCss: 'e-icons e-align-center',
            collections: [{
                items: [
                {
                    allowedSizes: ej.ribbon.RibbonItemSize.Small,
                    type: "Button",
                    buttonSettings: {
                        clicked: function () { updateContent("Cut"); },
                        iconCss: 'e-icons e-decrease-indent',
                        content: 'Decrease Indent',
                    }
                }, {
                    allowedSizes: ej.ribbon.RibbonItemSize.Small,
                    type: "Button",
                    buttonSettings: {
                        clicked: function () { updateContent("Increase Indent"); },
                        iconCss: 'e-icons e-increase-indent',
                        content: 'Increase Indent',
                    }
                }, {
                    allowedSizes: ej.ribbon.RibbonItemSize.Small,
                    type: "Button",
                    buttonSettings: {
                        clicked: function () { updateContent("Paragraph"); },
                        iconCss: 'e-icons e-paragraph',
                        content: 'Paragraph',
                    }
                }
            ]
            }, {
                items: [{
                    allowedSizes: ej.ribbon.RibbonItemSize.Small,
                    type: 'GroupButton',
                    groupButtonSettings: {
                        items: [{
                            selected: true,
                            click: function ()  { updateContent("Align Left"); },
                            iconCss: 'e-icons e-align-left'
                        },
                        {
                            click: function ()  { updateContent("Align Center"); },
                            iconCss: 'e-icons e-align-center'
                        },
                        {
                            click: function ()  { updateContent("Align Right"); },
                            iconCss: 'e-icons e-align-right'
                        },
                        {
                            click: function ()  { updateContent("Justify"); },
                            iconCss: 'e-icons e-justify'
                        }],
                        selection: ej.ribbon.RibbonGroupButtonSelection.Single,
                        header: 'Alignment'
                    }
                }]
            }]
        }, {
            header: "Editing",
            groupIconCss: 'e-icons e-edit',
            orientation: 'Column',
            collections: [{
                items: [{
                    type: 'SplitButton',
                    splitButtonSettings: {
                        iconCss: 'e-icons e-search',
                        content: 'Find',
                        items: [
                            { text: 'Find', iconCss: 'e-icons e-search' },
                            { text: 'Advanced Find', iconCss: 'e-icons e-search' },
                            { text: 'Go to', iconCss: 'e-icons e-arrow-right' }
                        ],
                        click: function () { updateContent("Find"); },
                        select: function (args) { updateContent("Find -> " + args.item.text); }
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
                        iconCss: 'e-icons e-mouse-pointer',
                        items: [{ text: 'Select All' },
                        { text: 'Select Objects' }],
                        select: function (args) { updateContent("Select -> " + args.item.text); },
                        content: 'Select',
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
                    disabled: true,
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
            header: 'Tables',
            isCollapsible: false,
            collections: [{
                items: [{
                    type: 'DropDown',
                    allowedSizes: ej.ribbon.RibbonItemSize.Large,
                    dropDownSettings: {
                        content: 'Table',
                        items: [
                            { text: 'Insert Table' }, { text: 'Draw Table' },
                            { text: 'Convert Table' }, { text: 'Excel SpreadSheet' }
                        ],
                        select: function (args) { updateContent("Table -> " + args.item.text); },
                        iconCss: 'e-icons e-table',
                    }
                }]
            }]
        }, {
            header: 'Illustrations',
            id: 'illustration',
            showLauncherIcon: true,
            enableGroupOverflow: true,
            overflowHeader: 'Illustrations',
            groupIconCss: 'e-icons e-image',
            orientation: 'Row',
            collections: [{
                items: [{
                    type: 'DropDown',
                    id: 'pictureddl',
                    dropDownSettings: {
                        content: 'Pictures',
                        iconCss: 'e-icons e-image',
                        target: '#pictureList',
                    }
                }, {
                    type: 'DropDown',
                    dropDownSettings: {
                        content: 'Shapes',
                        items: [{ text: 'Lines' }, { text: 'Rectangles' }, { text: 'Basic Arrows' }, { text: 'Basic Shapes' }, { text: 'FlowChart' }],
                        select: function (args) { updateContent("Shapes -> " + args.item.text); },
                        iconCss: 'sf-icon-shapes'
                    }
                }, {
                    type: 'Button',
                    buttonSettings: {
                        iconCss: 'sf-icon-3d-model',
                        clicked: function () { updateContent("3D Models"); },
                        content: '3D Models'
                    }
                }, {
                    type: 'Button',
                    buttonSettings: {
                        iconCss: 'sf-icon-smart-art',
                        clicked: function () { updateContent("SmartArt"); },
                        content: 'SmartArt',
                    }
                }, {
                    type: 'Button',
                    buttonSettings: {
                        iconCss: 'sf-icon-chart',
                        clicked: function () { updateContent("Chart"); },
                        content: 'Chart'
                    }
                }, {
                    type: 'Button',
                    buttonSettings: {
                        iconCss: 'sf-icon-screenshot',
                        clicked: function () { updateContent("Screenshot"); },
                        content: 'Screenshot',
                    }
                }]
            }]
        }, {
            header: 'Header & Footer',
            id: 'header_footer',
            showLauncherIcon: true,
            orientation: 'Column',
            groupIconCss: 'e-icons e-table',
            collections: [{
                items: [{
                    type: 'DropDown',
                    dropDownSettings: {
                        content: 'Header',
                        items: [{ text: 'Insert Header' }, { text: 'Edit Header' }, { text: 'Remove Header' }],
                        select: function (args) { updateContent("Header -> " + args.item.text); },
                        iconCss: 'e-icons e-header'
                    }
                }, {
                    type: 'DropDown',
                    dropDownSettings: {
                        content: 'Footer',
                        items: [{ text: 'Insert Footer' }, { text: 'Edit Footer' }, { text: 'Remove Footer' }],
                        select: function (args) { updateContent("Footer -> " + args.item.text); },
                        iconCss: 'e-icons e-footer'
                    }
                }, {
                    type: 'DropDown',
                    dropDownSettings: {
                        content: 'Page Number',
                        items: [{ text: 'Insert Top of page' }, { text: 'Insert Bottom of page' }, { text: 'Format Page Number' }, { text: 'Remove Page Number' }],
                        select: function (args) { updateContent("Page Numbering -> " + args.item.text); },
                        iconCss: 'e-icons e-page-numbering'
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
                        content: 'New Comment',
                        iconCss: 'e-icons e-comment-add',
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
                        content: 'Link',
                        iconCss: 'e-icons e-link',
                        select: function (args) { updateContent("Link -> " + args.item.text); },
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
            header: 'Views',
            groupIconCss: 'e-icons e-print',
            orientation: 'Row',
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
                        content: 'Print Layout',
                        clicked: function () { updateContent("Print Layout"); },
                        iconCss: 'e-print e-icons'
                    }
                }, {
                    type: 'Button',
                    buttonSettings: {
                        iconCss: 'sf-icon-web-layout',
                        clicked: function () { updateContent("Web Layout"); },
                        content: 'Web Layout'
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
                        clicked: function () { updateContent("Zoom In"); },
                        content: 'Zoom In'
                    }
                }, {
                    type: 'Button',
                    buttonSettings: {
                        iconCss: 'e-icons e-zoom-out',
                        clicked: function () { updateContent("Zoom Out"); },
                        content: 'Zoom Out'
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
                        change: function () { updateContent("Ruler"); },
                        checked: false
                    }
                }, {
                    type: 'CheckBox',
                    checkBoxSettings: {
                        checked: false,
                        change: function () { updateContent("Gridlines"); },
                        label: 'Gridlines'
                    }
                }, {
                    type: 'CheckBox',
                    checkBoxSettings: {
                        label: 'Navigation Pane',
                        change: function () { updateContent("Navigation Pane"); },
                        checked: true
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
                        content: 'Dark Mode',
                        iconCss: 'sf-icon-mode',
                        clicked: function () { updateContent("Dark Mode"); }
                    }
                }]
            }]
        }]
    }];
    var list = new ej.lists.ListView({
        headerTitle: 'Insert Picture From',
        dataSource: ['Stock Images', 'This Device', 'Online Images'],
        showHeader: true,
        select: function (args) { updateContent("Pictures -> " + args.text); }
    });
    list.appendTo('#pictureList');
    var menuItems = [
        { text: 'New', iconCss: 'e-icons e-file-new', id: 'new' },
        { text: 'Open', iconCss: 'e-icons e-folder-open', id: 'open' },
        { text: 'Rename', iconCss: 'e-icons e-rename', id: 'rename' },
        {
            text: 'Save as',
            iconCss: 'e-icons e-save',
            id: 'save',
            items: [
                { text: 'Microsoft Word (.docx)', iconCss: 'sf-icon-word', id: 'newword' },
                { text: 'Microsoft Word 97-2003(.doc)', iconCss: 'sf-icon-word', id: 'oldword' },
                { text: 'Download as PDF', iconCss: 'e-icons e-export-pdf', id: 'pdf' }
            ],
        }
    ];
    var files = ({
        menuItems: menuItems,
        visible: true,
        select: function (args) {
            if (args.item.id === "newword" || args.item.id === "oldword" || args.item.id === "pdf") {
                updateContent("File -> Save as -> " + args.item.text);
            }
            else {
                updateContent("File -> " + args.item.text);
            }
        }
    });

    var ribbon = new ej.ribbon.Ribbon({
        enablePersistence: true,
        tabs: tabs,
        fileMenu: files,
        launcherIconClick: function (args) {
            if (args.groupId == "clipboard") {
                updateContent("Clipboard Launcher Icon");
            }
            else if (args.groupId == "header_footer") {
                updateContent("Header & Footer Launcher Icon");
            }
            else if (args.groupId == "illustration") {
                updateContent("Illustration Launcher Icon");
            }
        }
    });
    ribbon.appendTo("#ribbon");

    var toast = new ej.notifications.Toast({
        height: 25,
        width: 'auto',
        timeOut: 2000,
        target: '#ribbonPlaceHolder',
        cssClass: 'e-toast-info',
        newestOnTop: true,
        animation: { show: { effect: 'FadeIn' }, hide: { effect: 'FadeOut' } },
        position: { X: "Right" },
        showCloseButton: true,
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
