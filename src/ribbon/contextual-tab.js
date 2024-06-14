this.default = function () {
    var fontSize = ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72', '96'];
    var fontStyle = ['Algerian', 'Arial', 'Calibri', 'Cambria', 'Cambria Math', 'Courier New', 'Candara', 'Georgia', 'Impact', 'Segoe Print', 'Segoe Script', 'Segoe UI', 'Symbol', 'Times New Roman', 'Verdana', 'Windings'
    ];
    var selectedCell;
    var ribbonTabs = [{
        header: "Home",
        groups: [{
            showLauncherIcon: true,
            header: "Clipboard",
            groupIconCss: 'e-icons e-paste',
            id: "clipboardGroup",
            collections: [{
                items: [{
                    allowedSizes: ej.ribbon.RibbonItemSize.Large,
                    type: 'SplitButton',
                    id: 'pastebtn',
                    disabled: true,
                    splitButtonSettings: {
                        iconCss: 'e-icons e-paste',
                        content: 'Paste',
                        items: [{ text: 'Keep Source Format' }, { text: 'Merge Format' }, { text: 'Keep Text Only' }],
                        select: function (args) { updateContent("Paste -> " + args.item.text); },
                        click: function () { updateContent("Paste"); }
                    }
                }]
            }, {
                items: [{
                    type: 'Button',
                    buttonSettings: {
                        clicked: function () { updateContent("Cut"); enablePaste(); },
                        iconCss: 'e-icons e-cut',
                        content: 'Cut'
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
                        clicked: function () { updateContent("Format Painter"); },
                        content: 'Format Painter',
                        iconCss: 'e-icons e-format-painter'
                    }
                }]
            }]
        }, {
            isCollapsible: false,
            header: "Font",
            enableGroupOverflow: true,
            groupIconCss: 'e-icons e-bold',
            overflowHeader: 'More Font Options',
            orientation: 'Row',
            cssClass: 'font-group',
            collections: [{
                items: [{
                    type: 'ComboBox',
                    comboBoxSettings: {
                        dataSource: fontStyle,
                        label: 'Font Style',
                        width: '115px',
                        popupWidth: '150px',
                        index: 3,
                        change: function (args) {
                            if (args.itemData) {
                                updateContent("Font Style -> " + args.itemData.text );
                            }
                        },
                        allowFiltering: true
                    }
                }, {
                    
                    type: 'ComboBox',
                    comboBoxSettings: {
                        dataSource: fontSize,
                        label: 'Font Size',
                        popupWidth: '85px',
                        change: function (args) {
                            if (args.itemData) {
                                updateContent("Font Size -> " + args.itemData.text );
                            }
                        },
                        allowFiltering: true,
                        width: '65px',
                        index: 3
                    }
                }]
            }, {
                items: [{
                    allowedSizes: ej.ribbon.RibbonItemSize.Small,
                    type: 'GroupButton',
                    groupButtonSettings: {
                        header: 'Format Styles',
                        selection: ej.ribbon.RibbonGroupButtonSelection.Multiple,
                        items: [{
                            content: 'Bold',
                            iconCss: 'e-icons e-bold',
                            click: function () { updateContent("Bold"); },
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
                    allowedSizes: ej.ribbon.RibbonItemSize.Small,
                    type: 'ColorPicker',
                    displayOptions: ej.ribbon.DisplayMode.Simplified | ej.ribbon.DisplayMode.Classic,
                    colorPickerSettings: {
                        value: '#123456',
                        change: function (args) { updateContent(args.currentValue.hex + " color"); }
                    },
                }]
            }]
        }, {
            header: "Paragraph",
            id: 'paragraph',
            groupIconCss: 'e-icons e-align-center',
            orientation: 'Row',
            collections: [{
                items: [
                {
                    allowedSizes: ej.ribbon.RibbonItemSize.Small,
                    type: "Button",
                    buttonSettings: {
                        clicked: function () { updateContent("Cut"); },
                        content: 'Decrease Indent',
                        iconCss: 'e-icons e-decrease-indent'
                    }
                }, {
                    allowedSizes: ej.ribbon.RibbonItemSize.Small,
                    type: "Button",
                    buttonSettings: {
                        clicked: function () { updateContent("Increase Indent"); },
                        content: 'Increase Indent',
                        iconCss: 'e-icons e-increase-indent'
                    }
                }, {
                    allowedSizes: ej.ribbon.RibbonItemSize.Small,
                    type: "Button",
                    buttonSettings: {
                        clicked: function () { updateContent("Paragraph"); },
                        iconCss: 'e-icons e-paragraph',
                        content: 'Paragraph'
                    }
                }
            ]
            }, {
                items: [{
                    type: 'GroupButton',
                    allowedSizes: ej.ribbon.RibbonItemSize.Small,
                    groupButtonSettings: {
                        items: [{
                            selected: true,
                            iconCss: 'e-icons e-align-left',
                            click: function ()  { updateContent("Align Left"); }
                        },
                        {
                            iconCss: 'e-icons e-align-center',
                            click: function ()  { updateContent("Align Center"); },
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
            orientation: 'Column',
            header: "Editing",
            groupIconCss: 'e-icons e-edit',
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
            enableGroupOverflow: true,
            header: 'Illustrations',
            id: 'illustration',
            showLauncherIcon: true,
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
            id: 'header_footer',
            header: 'Header & Footer',
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
            isCollapsible: false,
            header: 'Comments',
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
            isCollapsible: false,
            header: 'Links',
            groupIconCss: 'e-icons e-link',
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
            orientation: 'Row',
            header: 'Views',
            groupIconCss: 'e-icons e-print',
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
                        iconCss: 'e-print e-icons',
                        content: 'Print Layout',
                        clicked: function () { updateContent("Print Layout"); }
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
            groupIconCss: 'e-icons e-zoom-to-fit',
            header: 'Zoom',
            orientation: 'Row',
            collections: [{
                items: [{
                    type: 'Button',
                    buttonSettings: {
                        content: 'Zoom In',
                        iconCss: 'e-icons e-zoom-in',
                        clicked: function () { updateContent("Zoom In"); }
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
    var tableContextualTab = ({
        visible: true,
        tabs: [{
            id: 'TableDesign',
            header: 'Table Design',
            groups: [{
                header: 'Table Style',
                groupIconCss: 'e-icons e-field-settings',
                collections: [{
                    items: [{
                        type: 'DropDown',
                        allowedSizes: ej.ribbon.RibbonItemSize.Large,
                        dropDownSettings: {
                            content: 'Table Style',
                            iconCss: 'e-icons e-field-settings',
                            items: [{ text: 'Header Row' },
                            { text: 'Banded Rows' },
                            { text: 'Banded Columns' }
                        ],
                        select: function (args) { updateContent("Table Style -> " + args.item.text); }
                        }
                    }]
                }]
            },{
                header: 'Borders style',
                groupIconCss: 'e-icons e-field-settings',
                collections: [{
                    items: [{
                        type: 'DropDown',
                        allowedSizes: ej.ribbon.RibbonItemSize.Large,
                        dropDownSettings: {
                            content: 'Borders',
                            iconCss: 'e-icons e-border-all',
                            items: [
                            { text: 'Border Right', iconCss: 'e-icons e-border-right' },
                            { text: 'Border Left', iconCss: 'e-icons e-border-left' },
                            { text: 'Border Bottom', iconCss: 'e-icons e-border-bottom' },
                            { text: 'Border Top', iconCss: 'e-icons e-border-top' }
                        ],
                        select: function (args) { updateContent("Borders -> " + args.item.text); }
                        }
                    }]
                }]
            }]
        },
        {
            header: 'Table Layout',
            id: 'TableLayout',
            groups: [{
                header: 'Data',
                groupIconCss: 'e-icons e-sort-ascending',
                collections: [{
                    items: [{
                        type: 'Button',
                        allowedSizes: ej.ribbon.RibbonItemSize.Large,
                        buttonSettings: {
                            iconCss: 'e-icons e-sort-ascending',
                            content: 'Sort Table Ascending',
                            clicked: function () { updateContent("Sort Table Ascending"); }
                        }
                    }]
                }, {
                    items: [{
                        type: 'Button',
                        allowedSizes: ej.ribbon.RibbonItemSize.Large,
                        buttonSettings: {
                            iconCss: 'e-icons e-sort-descending',
                            content: 'Sort Table Descending',
                            clicked: function () { updateContent("Sort Table Descending"); }
                        }
                    }]
                }]
            }, {
                header: 'Merge',
                groupIconCss: 'e-icons e-merge-cells',
                collections: [{
                    items: [{
                        type: 'DropDown',
                        allowedSizes: ej.ribbon.RibbonItemSize.Large,
                        dropDownSettings: {
                            content: 'Merge',
                            iconCss: 'e-icons e-merge-cells',
                            items: [{ text: 'Merge Cells', iconCss: 'e-icons e-merge-cells' },
                            { text: 'Split Cells', iconCss: 'e-icons e-split-horizontal' }
                        ],
                        select: function (args) { updateContent("Merge -> " + args.item.text); }
                        }
                    }]
                }]
            }]
        }]
    });
    var imageContextualTab = ({
        visible: false,
        tabs: [{
            id: 'Format',
            header: 'Picture Format',
            groups: [{
                header: 'Background',
                groupIconCss: 'e-icons e-image',
                collections: [{
                    items: [{
                        type: ej.ribbon.RibbonItemType.Button,
                        allowedSizes: ej.ribbon.RibbonItemSize.Large,
                        buttonSettings: {
                            iconCss: 'e-icons e-image',
                            content: 'Remove Background',
                            clicked: function () { updateContent("Remove Background"); }
                        }
                    }]
                }]
            }]
        }]
    });
    var listView = new ej.lists.ListView({
        showHeader: true,
        headerTitle: 'Insert Picture From',
        dataSource: ['Stock Images', 'This Device', 'Online Images'],
        select: function (args) { updateContent("Pictures -> " + args.text); }
    });
    listView.appendTo('#pictureList');
    var fileMenuItems = [
        { text: 'New', id: 'new', iconCss: 'e-icons e-file-new' },
        { id: 'open', text: 'Open', iconCss: 'e-icons e-folder-open' },
        { id: 'rename', text: 'Rename', iconCss: 'e-icons e-rename' },
        {
            id: 'save',
            text: 'Save as',
            iconCss: 'e-icons e-save',
            items: [
                { id: 'newword', text: 'Microsoft Word (.docx)', iconCss: 'sf-icon-word' },
                { id: 'oldword', text: 'Microsoft Word 97-2003(.doc)', iconCss: 'sf-icon-word' },
                { id: 'pdf', text: 'Download as PDF', iconCss: 'e-icons e-export-pdf' }
            ],
        }
    ];
    var ribbonFiles = ({
        visible: true,
        menuItems: fileMenuItems,
        select: function (args) {
            if (args.item.id === "oldword" || args.item.id === "newword" || args.item.id === "pdf") {
                updateContent("File -> Save as -> " + args.item.text );
            }
            else {
                updateContent("File -> " + args.item.text );
            }
        }
    });

    var ribbon = new ej.ribbon.Ribbon({
        tabs: ribbonTabs,
        contextualTabs: [tableContextualTab, imageContextualTab],
        fileMenu: ribbonFiles,
        launcherIconClick: function (args) {
            if (args.groupId == "clipboardGroup") {
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
        width: 'auto',
        timeOut: 2000,
        target: '#ribbonPlaceHolder',
        height: 25,
        newestOnTop: true,
        cssClass: 'e-toast-info',
        showCloseButton: true,
        animation: { show: { effect: 'FadeIn' }, hide: { effect: 'FadeOut' } },
        position: { X: "Right" }
    });
    toast.appendTo('#toast');

    function updateContent(args) {
        toast.show({ content: "Last clicked item is " + args } );
    }

    var isPasteDisabled = true;
    
    function enablePaste() { 
        if (!isPasteDisabled) { return; }        
        ribbon.enableItem('pastebtn');
        isPasteDisabled = false;
    }

    document.querySelector('.table-body').onclick = (args) => {
        ribbon.showTab('TableDesign', true);
        ribbon.showTab('TableLayout', true);
        ribbon.selectTab('TableDesign');
        ribbon.hideTab('Format', true);
        if (selectedCell) {
            selectedCell.classList.remove('e-table-selected');
        }
        args.target.classList.add('e-table-selected');
        selectedCell = args.currentTarget.querySelector('.e-table-selected');
        document.querySelector('#ribbonImage').classList.remove('e-image-selected');
    }
    document.getElementById('ribbonImage').onclick = () => {
        ribbon.showTab('Format', true);
        ribbon.selectTab('Format');
        ribbon.hideTab('TableDesign', true);
        ribbon.hideTab('TableLayout', true);
        updateSelectedState('Image');
    }
    document.getElementById('ribbonPlaceHolder').onclick = (args) => {
        if ((args.target).nodeName !== 'TD' && (args.target).nodeName !== 'IMG') {
            ribbon.hideTab('TableDesign', true);
            ribbon.hideTab('TableLayout', true);
            ribbon.hideTab('Format', true);
            updateSelectedState('Table');
        }
    }
    function updateSelectedState(args) {
        if (selectedCell) {
            selectedCell.classList.remove('e-table-selected');
            selectedCell = null;
        }
        document.querySelector('#ribbonImage').classList[args === 'Image' ? 'add' : 'remove' ]('e-image-selected');
    }
};
