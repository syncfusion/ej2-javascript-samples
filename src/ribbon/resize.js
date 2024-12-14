this.default = function () {
    var fontStyle = ['Algerian', 'Arial', 'Calibri', 'Cambria', 'Cambria Math', 'Candara', 'Courier New', 'Georgia', 'Impact', 'Segoe Print', 'Segoe Script', 'Segoe UI', 'Symbol', 'Times New Roman', 'Verdana', 'Windings'
    ];
    var fontSize = ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72', '96'];
    var tabs = [{
        header: "Home",
        groups: [{
            id: 'clipboard',
            header: "Clipboard",
            groupIconCss: 'e-icons e-paste',
            showLauncherIcon: true,
            collections: [{
                items: [{
                    type: 'SplitButton',
                    allowedSizes: ej.ribbon.RibbonItemSize.Large,
                    disabled: true,
                    id: 'pastebtn',
                    splitButtonSettings: {
                        iconCss: 'e-icons e-paste',
                        content: 'Paste',
                        items: [{ text: 'Keep Source Format' }, { text: 'Merge Format' }, { text: 'Keep Text Only' }],
                        click: function () { updateContent("Paste"); },
                        select: function (args) { updateContent("Paste -> " + args.item.text); }
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
                }]
            }, {
                items: [{
                    type: 'Button',
                    buttonSettings: {
                        content: 'Copy',
                        iconCss: 'e-icons e-copy',
                        clicked: function () { updateContent("Copy"); enablePaste(); }
                    }
                }]
            }, {
                items: [{
                    type: 'Button',
                    buttonSettings: {
                        content: 'Format Painter',
                        iconCss: 'e-icons e-format-painter',
                        clicked: function () { updateContent("Format Painter"); }
                    }
                }]
            }]
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
                        dataSource: fontStyle,
                        label: 'Font Style',
                        index: 2,
                        allowFiltering: true,
                        change: function (args) {
                            if (args.itemData) {
                                updateContent("Font Style -> " + args.itemData.text);
                            }
                        },
                        width: '115px',
                        popupWidth: '150px',
                    }
                }, {
                    type: 'ComboBox',
                    comboBoxSettings: {
                        dataSource: fontSize,
                        label: 'Font Size',
                        index: 4,
                        width: '65px',
                        popupWidth: '85px',
                        allowFiltering: true,
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
                        items: [
                        {
                            content: 'Bold',
                            iconCss: 'e-icons e-bold',
                            click: function () { updateContent("Bold"); }
                        }, {
                            content: 'Italic',
                            iconCss: 'e-icons e-italic',
                            click: function () { updateContent("Italic"); }
                        }, {
                            content: 'Underline',
                            iconCss: 'e-icons e-underline',
                            click: function () { updateContent("Underline"); }
                        }, {
                            content: 'Strikethrough',
                            iconCss: 'e-icons e-strikethrough',
                            click: function () { updateContent("Strikethrough"); }
                        }, {
                            content: 'Change Case',
                            iconCss: 'e-icons e-change-case',
                            click: function () { updateContent("Change Case"); }
                        }],
                        selection: ej.ribbon.RibbonGroupButtonSelection.Multiple,
                        header: 'Format Styles'
                    }
                }, {
                    type: 'ColorPicker',
                    displayOptions: ej.ribbon.DisplayMode.Simplified | ej.ribbon.DisplayMode.Classic,
                    allowedSizes: ej.ribbon.RibbonItemSize.Small,
                    colorPickerSettings: {
                        change: function (args) { updateContent(args.currentValue.hex + " color"); },
                        value: '#123456'
                    },
                }]
            }]
        }, {
            header: "Paragraph",
            id: 'paragraph',
            orientation: 'Row',
            groupIconCss: 'e-icons e-align-center',
            collections: [
                {
                items: [{
                    type: "Button",
                    buttonSettings: {
                        iconCss: 'e-icons e-decrease-indent',
                        content: 'Decrease Indent',
                        clicked: function () { updateContent("Cut"); }
                    },
                    allowedSizes: ej.ribbon.RibbonItemSize.Small
                }, {
                    type: "Button",
                    buttonSettings: {
                        iconCss: 'e-icons e-increase-indent',
                        content: 'Increase Indent',
                        clicked: function () { updateContent("Increase Indent"); }
                    },
                    allowedSizes: ej.ribbon.RibbonItemSize.Small
                }, {
                    type: "Button",
                    buttonSettings: {
                        iconCss: 'e-icons e-paragraph',
                        content: 'Paragraph',
                        clicked: function () { updateContent("Paragraph"); }
                    },
                    allowedSizes: ej.ribbon.RibbonItemSize.Small
                }]
            }, {
                items: [
                    {
                    type: 'GroupButton',
                    groupButtonSettings: {
                        selection: ej.ribbon.RibbonGroupButtonSelection.Single,
                        header: 'Alignment',
                        items: [{
                            iconCss: 'e-icons e-align-left',
                            click: function ()  { updateContent("Align Left"); },
                            selected: true,
                        }, {
                            click: function ()  { updateContent("Align Center"); },
                            iconCss: 'e-icons e-align-center'
                        }, {
                            iconCss: 'e-icons e-align-right',
                            click: function ()  { updateContent("Align Right"); }
                        }, {
                            click: function ()  { updateContent("Justify"); },
                            iconCss: 'e-icons e-justify'
                        }
                    ]
                    },
                    allowedSizes: ej.ribbon.RibbonItemSize.Small
                }
            ]
            }]
        }, {
            header: "Editing",
            groupIconCss: 'e-icons e-edit',
            orientation: 'Row',
            collections: [{
                items: [{
                    type: 'SplitButton',
                    splitButtonSettings: {
                        iconCss: 'e-icons e-search',
                        content: 'Find',
                        click: function () { updateContent("Find"); },
                        items: [{ text: 'Find', iconCss: 'e-icons e-search' },
                        { text: 'Advanced Find', iconCss: 'e-icons e-search' },
                        { text: 'Go to', iconCss: 'e-icons e-arrow-right' }],
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
                        content: 'Select',
                        iconCss: 'e-icons e-mouse-pointer',
                        click: function () { updateContent("Select"); },
                        items: [{ text: 'Select All' },
                        { text: 'Select Objects' }],
                        select: function (args) { updateContent("Select -> " + args.item.text); }
                    }
                }]
            }]
        }, {
            header: "Voice",
            groupIconCss: 'sf-icon-dictate',
            isCollapsible: false,
            collections: [{
                items: [{
                    type: 'SplitButton',
                    allowedSizes: ej.ribbon.RibbonItemSize.Large,
                    disabled: true,
                    splitButtonSettings: {
                        content: 'Dictate',
                        items: [{ text: 'Chinese' }, { text: 'English' }, { text: 'German' }, { text: 'French' }],
                        click: function () { updateContent("Dictate"); },
                        select: function (args) { updateContent("Dictate -> " + args.item.text); },
                        iconCss: 'sf-icon-dictate',
                    },
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
                    allowedSizes: ej.ribbon.RibbonItemSize.Large,
                    type: 'DropDown',
                    dropDownSettings: {
                        content: 'Table',
                        iconCss: 'e-icons e-table',
                        items: [
                            { text: 'Insert Table' }, { text: 'Draw Table' },
                            { text: 'Convert Table' }, { text: 'Excel SpreadSheet' }
                        ],
                        select: function (args) { updateContent("Table -> " + args.item.text); }
                    },
                }]
            }]
        }, {
            id: 'illustration',
            header: 'Illustrations',
            showLauncherIcon: true,
            orientation: 'Row',
            enableGroupOverflow: true,
            overflowHeader: 'Illustrations',
            groupIconCss: 'e-icons e-image',
            collections: [{
                items: [{
                    type: 'DropDown',
                    id: 'pictureddl',
                    dropDownSettings: {
                        content: 'Pictures',
                        target: '#pictureList',
                        iconCss: 'e-icons e-image',
                    }
                }, {
                    type: 'DropDown',
                    dropDownSettings: {
                        iconCss: 'sf-icon-shapes',
                        items: [{ text: 'Lines' }, { text: 'Rectangles' }, { text: 'Basic Arrows' }, { text: 'Basic Shapes' }, { text: 'FlowChart' }],
                        select: function (args) { updateContent("Shapes -> " + args.item.text); },
                        content: 'Shapes'
                    }
                }, {
                    type: 'Button',
                    buttonSettings: {
                        clicked: function () { updateContent("3D Models"); },
                        iconCss: 'sf-icon-3d-model',
                        content: '3D Models',
                    }
                }, {
                    type: 'Button',
                    buttonSettings: {
                        content: 'SmartArt',
                        clicked: function () { updateContent("SmartArt"); },
                        iconCss: 'sf-icon-smart-art'
                    }
                }, {
                    type: 'Button',
                    buttonSettings: {
                        content: 'Chart',
                        clicked: function () { updateContent("Chart"); },
                        iconCss: 'sf-icon-chart'
                    }
                }, {
                    type: 'Button',
                    buttonSettings: {
                        content: 'Screenshot',
                        clicked: function () { updateContent("Screenshot"); },
                        iconCss: 'sf-icon-screenshot'
                    }
                }]
            }]
        }, {
            id: 'header_footer',
            header: 'Header & Footer',
            showLauncherIcon: true,
            groupIconCss: 'e-icons e-table',
            orientation: 'Column',
            collections: [{
                items: [{
                    type: 'DropDown',
                    dropDownSettings: {
                        iconCss: 'e-icons e-header',
                        items: [{ text: 'Insert Header' }, { text: 'Edit Header' }, { text: 'Remove Header' }],
                        select: function (args) { updateContent("Header -> " + args.item.text); },
                        content: 'Header'
                    }
                }, {
                    type: 'DropDown',
                    dropDownSettings: {
                        iconCss: 'e-icons e-footer',
                        items: [{ text: 'Insert Footer' }, { text: 'Edit Footer' }, { text: 'Remove Footer' }],
                        select: function (args) { updateContent("Footer -> " + args.item.text); },
                        content: 'Footer'
                    }
                }, {
                    type: 'DropDown',
                    dropDownSettings: {
                        iconCss: 'e-icons e-page-numbering',
                        items: [{ text: 'Insert Top of page' }, { text: 'Insert Bottom of page' }, { text: 'Format Page Number' }, { text: 'Remove Page Number' }],
                        select: function (args) { updateContent("Page Number -> " + args.item.text); },
                        content: 'Page Number'
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
                        clicked: function () { updateContent("New Comment"); },
                        content: 'New Comment'
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
                        items: [{ text: 'Insert Link', iconCss: 'e-icons e-link' },
                        { text: 'Recent Links', iconCss: 'e-icons e-clock' },
                        { text: 'Bookmarks', iconCss: 'e-icons e-bookmark' }],
                        iconCss: 'e-icons e-link',
                        select: function (args) { updateContent("Link -> " + args.item.text); }
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
                        content: 'Read Mode',
                        clicked: function () { updateContent("Read Mode"); },
                        iconCss: 'sf-icon-read'
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
                        content: 'Web Layout',
                        clicked: function () { updateContent("Web Layout"); },
                        iconCss: 'sf-icon-web-layout'
                    }
                }]
            }]
        }, {
            header: 'Zoom',
            groupIconCss: 'e-icons e-zoom-to-fit',
            orientation: 'Row',
            collections: [{
                items: [{
                    type: 'Button',
                    buttonSettings: {
                        content: 'Zoom In',
                        clicked: function () { updateContent("Zoom In"); },
                        iconCss: 'e-icons e-zoom-in'
                    }
                }, {
                    type: 'Button',
                    buttonSettings: {
                        content: 'Zoom Out',
                        clicked: function () { updateContent("Zoom Out"); },
                        iconCss: 'e-icons e-zoom-out'
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
                        checked: false,
                        change: function () { updateContent("Gridlines"); },
                        label: 'Ruler',
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
                        checked: true,
                        change: function () { updateContent("Navigation Pane"); },
                        label: 'Navigation Pane'
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
                        clicked: function () { updateContent("Dark Mode"); },
                        iconCss: 'sf-icon-mode'
                    }
                }]
            }]
        }]
    }];
    var list = new ej.lists.ListView({
        showHeader: true,
        headerTitle: 'Insert Picture From',
        dataSource: ['This Device', 'Stock Images', 'Online Images'],
        select: function (args) { updateContent("Picture -> " + args.text); }
    });
    list.appendTo('#pictureList');
    var menuItems = [
        { text: 'New', iconCss: 'e-icons e-file-new' },
        { text: 'Open', iconCss: 'e-icons e-folder-open' },
        { text: 'Rename', iconCss: 'e-icons e-rename' },
        {
            text: 'Save as',
            iconCss: 'e-icons e-save',
            items: [
                { text: 'Microsoft Word (.docx)', iconCss: 'sf-icon-word', id: 'wordold' },
                { text: 'Microsoft Word 97-2003(.doc)', iconCss: 'sf-icon-word', id: 'word97new' },
                { text: 'Download as PDF', iconCss: 'e-icons e-export-pdf', id: 'aspdf' },
            ]
        }
    ];
    var files = ({
        menuItems: menuItems,
        visible: true,
        select: function (args) {
            if (args.item.id === 'wordold' || args.item.id === 'word97new' || args.item.id === 'aspdf') {
                updateContent("File -> Save as -> " + args.item.text);
            }
            else {
                updateContent("File -> " + args.item.text);
            }
        }
    });

    var container = document.getElementById('ribbonContainer');
    var slider = new ej.inputs.Slider({
        min: 350,
        max: container.offsetWidth,
        value: container.offsetWidth,
        change: onChange
    });
    slider.appendTo('#ribbonSlider');

    var ribbon = new ej.ribbon.Ribbon({
        enablePersistence: true,
        tabs: tabs,
        fileMenu: files,
        cssClass: 'ribbon-resize',
        launcherIconClick: function (args) {
            if (args.groupId == "header_footer") {
                updateContent("Header & Footer Launcher Icon");
            }
            else if (args.groupId == "illustration") {
                updateContent("Illustration Launcher Icon");
            }
            else if (args.groupId == "clipboard") {
                updateContent("Clipboard Launcher Icon");
            }
        }
    });
    ribbon.appendTo("#ribbon");

    var toast = new ej.notifications.Toast({
        target: '#ribbonPlaceHolder',
        cssClass: 'e-toast-info',
        height: 25,
        width: 'auto',
        timeOut: 2000,
        newestOnTop: true,
        animation: { show: { effect: 'FadeIn' }, hide: { effect: 'FadeOut' } },
        position: { X: "Right" },
        showCloseButton: true
    });
    toast.appendTo('#toast');

    function updateContent(args) {
        toast.show({ content: "Last clicked item is " + args });
    }

    function onChange(args) {
        var container = document.getElementById('ribbonContainer');
        container.style.width = args.value + 'px';
        ribbon.refreshLayout();
    }

    function onResize() {
        var container = document.getElementById('ribbonContainer');
        container.style.width = '100%';
        slider.max = container.offsetWidth;
        slider.value = container.offsetWidth;
        ribbon.refreshLayout();
    }

    window.addEventListener("resize", onResize);

    var isPasteDisabled = true;    
    function enablePaste() { 
        if (!isPasteDisabled) { return; }        
        ribbon.enableItem('pastebtn');
        isPasteDisabled = false;
    }

};
