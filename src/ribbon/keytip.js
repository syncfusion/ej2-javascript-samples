this.default = function () {
    var fontSize = [ '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72', '96' ];
    var fontStyle = [ 'Arial', 'Calibri', 'Cambria', 'Cambria Math', 'Courier New', 'Candara', 'Georgia', 'Impact', 'Segoe Print', 'Segoe Script', 'Segoe UI', 'Symbol', 'Times New Roman', 'Verdana', 'Windings'];
    var tabs = [{
        id: 'home',
        header: "Home",
        keyTip: 'H',
        groups: [{
            header: "Clipboard",
            id: "clipboard",
            groupIconCss: 'e-icons e-paste',
            collections: [{
                items: [{
                    keyTip: 'V',
                    id: 'pastebtn',
                    type: 'SplitButton',
                    allowedSizes: ej.ribbon.RibbonItemSize.Large,
                    disabled: true,
                    splitButtonSettings: {
                        items: [{ text: 'Keep Source Format' }, { text: 'Merge Format' }, { text: 'Keep Text Only' }],
                        iconCss: 'e-icons e-paste',
                        content: 'Paste',
                        click: function () { updateContent("Paste"); },
                        select: function (args) { updateContent("Paste -> " + args.item.text); },
                    }
                }]
            }, {
                items: [{
                    keyTip: 'X',
                    type: 'Button',
                    buttonSettings: {
                        iconCss: 'e-icons e-cut',
                        content: 'Cut',
                        clicked: function () { updateContent("Cut"); enablePasteBtn(); },
                    }
                }, {
                    type: 'Button',
                    keyTip: 'C',
                    buttonSettings: {
                        iconCss: 'e-icons e-copy',
                        content: 'Copy',
                        clicked: function () { updateContent("Copy"); enablePasteBtn(); },
                    }
                }, {
                    keyTip: 'FP',
                    type: 'Button',
                    buttonSettings: {
                        iconCss: 'e-icons e-format-painter',
                        content: 'Format Painter',
                        clicked: function () { updateContent("Format Painter"); },
                    }
                }]
            }]
        }, {
            header: "Font",
            groupIconCss: 'e-icons e-bold',
            cssClass: 'font-group',
            enableGroupOverflow: true,
            launcherIconKeyTip: 'FJ',
            showLauncherIcon: true,
            overflowHeader: 'More Font Options',
            orientation: 'Row',
            collections: [{
                items: [{
                    keyTip: 'FF',
                    type: 'ComboBox',
                    comboBoxSettings: {
                        dataSource: fontStyle,
                        label: 'Font Style',
                        allowFiltering: true,
                        width: '115px',
                        popupWidth: '150px',
                        index: 3,
                        change: function (args) {
                            if (args.itemData) {
                                updateContent("Font Style -> " + args.itemData.text);
                            }
                        },
                    }
                }, {
                    keyTip: 'FS',
                    type: 'ComboBox',
                    comboBoxSettings: {
                        allowFiltering: true,
                        dataSource: fontSize,
                        label: 'Font Size',
                        popupWidth: '85px',
                        index: 3,
                        width: '65px',
                        change: function (args) {
                            if (args.itemData) {
                                updateContent("Font Size -> " + args.itemData.text);
                            }
                        },
                    }
                }]
            }, {
                items: [{
                    type: 'ColorPicker',
                    keyTip: 'CP',
                    allowedSizes: ej.ribbon.RibbonItemSize.Small,
                    displayOptions: ej.ribbon.DisplayMode.Simplified | ej.ribbon.DisplayMode.Classic,
                    colorPickerSettings: {
                        change: function (args) { updateContent(args.currentValue.hex + " color"); },
                        value: '#123456'
                    },
                }, {
                    type: 'Button',
                    keyTip: '1',
                    allowedSizes: ej.ribbon.RibbonItemSize.Small,
                    buttonSettings: {
                        content: 'Bold',
                        isToggle: true,
                        iconCss: 'e-icons e-bold',
                        clicked: function () { updateContent("Bold"); }
                    }
                }, {
                    type: 'Button',
                    allowedSizes: ej.ribbon.RibbonItemSize.Small,
                    keyTip: '2',
                    buttonSettings: {
                        content: 'Italic',
                        iconCss: 'e-icons e-italic',
                        clicked: function () { updateContent("Italic"); },
                        isToggle: true,
                    }
                }, {
                    type: 'Button',
                    keyTip: '3',
                    allowedSizes: ej.ribbon.RibbonItemSize.Small,
                    buttonSettings: {
                        isToggle: true,
                        content: 'Underline',
                        clicked: function () { updateContent("Underline"); },
                        iconCss: 'e-icons e-underline',
                    }
                }, {
                    allowedSizes: ej.ribbon.RibbonItemSize.Small,
                    type: 'Button',
                    keyTip: '4',
                    buttonSettings: {
                        iconCss: 'e-icons e-strikethrough',
                        content: 'Strikethrough',
                        isToggle: true,
                        clicked: function () { updateContent("Strikethrough"); }
                    }
                }, {
                    allowedSizes: ej.ribbon.RibbonItemSize.Small,
                    type: 'Button',
                    keyTip: '5',
                    buttonSettings: {
                        iconCss: 'e-icons e-change-case',
                        content: 'Change Case',
                        isToggle: true,
                        clicked: function () { updateContent("Change Case"); }
                    }
                }]
            }]
        }, {
            id: 'paragraph_group',
            launcherIconKeyTip: 'PG',
            orientation: 'Row',
            header: "Paragraph",
            showLauncherIcon: true,
            groupIconCss: 'e-icons e-align-center',
            collections: [{
                items: [{
                    allowedSizes: ej.ribbon.RibbonItemSize.Small,
                    keyTip: 'AO',
                    type: "Button",
                    buttonSettings: {
                        clicked: function () { updateContent("Cut"); },
                        content: 'Decrease Indent',
                        iconCss: 'e-icons e-decrease-indent',
                    }
                }, 
                {
                    type: "Button",
                    allowedSizes: ej.ribbon.RibbonItemSize.Small,
                    buttonSettings: {
                        clicked: function () { updateContent("Increase Indent"); },
                        iconCss: 'e-icons e-increase-indent',
                        content: 'Increase Indent',
                    },
                    keyTip: 'AI',
                }, 
                {
                    type: "Button",
                    allowedSizes: ej.ribbon.RibbonItemSize.Small,
                    keyTip: 'FM',
                    buttonSettings: {
                        content: 'Paragraph',
                        clicked: function () { updateContent("Paragraph"); },
                        iconCss: 'e-icons e-paragraph',
                    }
                }
            ]
            }, {
                items: [{
                    allowedSizes: ej.ribbon.RibbonItemSize.Small,
                    type: 'GroupButton',
                    groupButtonSettings: {
                        header: 'Alignment',
                        selection: ej.ribbon.RibbonGroupButtonSelection.Single,
                        items: [{
                            iconCss: 'e-icons e-align-left',
                            keyTip: 'AL',
                            selected: true,
                            click: function ()  { updateContent("Align Left"); },
                        }, {
                            keyTip: 'AC',
                            iconCss: 'e-icons e-align-center',
                            click: function ()  { updateContent("Align Center"); },
                        }, {
                            iconCss: 'e-icons e-align-right',
                            keyTip: 'AR',
                            click: function ()  { updateContent("Align Right"); },
                        }, {
                            keyTip: 'AJ',
                            iconCss: 'e-icons e-justify',
                            click: function ()  { updateContent("Justify"); },
                        }],
                    }
                }]
            }
        ]
        }, {
            orientation: 'Column',
            groupIconCss: 'e-icons e-edit',
            header: "Editing",
            collections: [{
                items: [{
                    type: 'SplitButton',
                    keyTip: 'FD',
                    splitButtonSettings: {
                        content: 'Find',
                        iconCss: 'e-icons e-search',
                        items: [
                            { text: 'Find', iconCss: 'e-icons e-search' },
                            { text: 'Advanced Find', iconCss: 'e-icons e-search' },
                            { text: 'Go to', iconCss: 'e-icons e-arrow-right' }
                        ],
                        click: function () { updateContent("Find"); },
                        select: function (args) { updateContent("Find -> " + args.item.text); },
                    }
                }, {
                    keyTip: 'R',
                    type: 'Button',
                    buttonSettings: {
                        iconCss: 'e-icons e-replace',
                        content: 'Replace',
                        clicked: function () { updateContent("Replace"); }
                    }
                }, {
                    type: 'SplitButton',
                    keyTip: 'S',
                    splitButtonSettings: {
                        content: 'Select',
                        iconCss: 'e-icons e-mouse-pointer',
                        items: [{ text: 'Select All' },{ text: 'Select Objects' }],
                        click: function () { updateContent("Select"); },
                        select: function (args) { updateContent("Select -> " + args.item.text); },
                    }
                }]
            }]
        }, {
            header: "Voice",
            groupIconCss: 'sf-icon-dictate',
            isCollapsible: false,
            collections: [{
                items: [{
                    allowedSizes: ej.ribbon.RibbonItemSize.Large,
                    type: 'SplitButton',
                    keyTip: 'D',
                    splitButtonSettings: {
                        iconCss: 'sf-icon-dictate',
                        content: 'Dictate',
                        click: function () { updateContent("Dictate"); },
                        items: [{ text: 'Chinese' }, { text: 'English' }, { text: 'German' }, { text: 'French' }],
                        select: function (args) { updateContent("Dictate -> " + args.item.text); }
                    }
                }]
            }]
        }, {
            header: "Editor",
            id: 'editing',
            isCollapsible: false,
            groupIconCss: 'sf-icon-editor',
            collections: [{
                items: [{
                    keyTip: 'SU',
                    type: 'Button',
                    allowedSizes: ej.ribbon.RibbonItemSize.Large,
                    buttonSettings: {
                        iconCss: 'sf-icon-editor',
                        content: 'Editor',
                        clicked: function () { updateContent("Editor"); },
                    }
                }]
            }]
        }, {
            header: "Reuse Files",
            isCollapsible: false,
            groupIconCss: 'sf-icon-reuse',
            collections: [{
                items: [{
                    keyTip: 'RF',
                    type: 'Button',
                    allowedSizes: ej.ribbon.RibbonItemSize.Large,
                    disabled: true,
                    buttonSettings: {
                        content: 'Reuse Files',
                        iconCss: 'sf-icon-reuse',
                        clicked: function () { updateContent("Reuse Files"); },
                    }
                }]
            }]
        }]
    }, {
        keyTip: 'N',
        id: 'insertTab',
        header: 'Insert',
        groups: [{
            id: 'table',
            header: 'Tables',
            isCollapsible: false,
            collections: [{
                items: [
                {
                    id:'table_item',
                    type: 'DropDown',
                    keyTip: 'T',
                    allowedSizes: ej.ribbon.RibbonItemSize.Large,
                    dropDownSettings: {
                        content: 'Table',
                        items: [
                            { text: 'Insert Table' }, 
                            { text: 'Draw Table' }, 
                            { text: 'Convert Table' }, 
                            { text: 'Excel Spreadsheet' }
                        ],
                        select: function (args) { updateContent("Table -> " + args.item.text); },
                        iconCss: 'e-icons e-table',
                    }
                }
                ]
            }]
        }, 
        {
            id: 'illustration',
            header: 'Illustrations',
            enableGroupOverflow: true,
            overflowHeader: 'Illustrations',
            orientation: 'Row',
            groupIconCss: 'e-icons e-image',
            collections: [{
                items: [{
                    type: 'DropDown',
                    id: 'pictureddl',
                    keyTip: 'P',
                    dropDownSettings: {
                        content: 'Pictures',
                        target: '#pictureList',
                        iconCss: 'e-icons e-image',
                    }
                }, {
                    id: 'shapes_item',
                    keyTip: 'SA',
                    type: 'DropDown',
                    dropDownSettings: {
                        content: 'Shapes',
                        iconCss: 'sf-icon-shapes',
                        select: function (args) { updateContent("Shapes -> " + args.item.text); },
                        items: [
                            { text: 'Lines' }, 
                            { text: 'Rectangles' }, 
                            { text: 'Basic Arrows' }, 
                            { text: 'Basic Shapes' }, 
                            { text: 'FlowChart' }
                        ],
                    }
                }, {
                    keyTip: '3D',
                    type: 'Button',
                    buttonSettings: {
                        iconCss: 'sf-icon-3d-model',
                        content: '3D Models',
                        clicked: function () { updateContent("3D Models"); },
                    }
                }, {
                    type: 'Button',
                    keyTip: 'M',
                    buttonSettings: {
                        content: 'SmartArt',
                        iconCss: 'sf-icon-smart-art',
                        clicked: function () { updateContent("SmartArt"); },
                    }
                }, {
                    type: 'Button',
                    keyTip: 'CC',
                    buttonSettings: {
                        content: 'Chart',
                        iconCss: 'sf-icon-chart',
                        clicked: function () { updateContent("Chart"); },
                    }
                }, {
                    keyTip: 'SS',
                    type: 'Button',
                    buttonSettings: {
                        clicked: function () { updateContent("Screenshot"); },
                        content: 'Screenshot',
                        iconCss: 'sf-icon-screenshot',
                    }
                }]
            }]
        }, {
            id: 'header_footer',
            header: 'Header & Footer',
            groupIconCss: 'e-icons e-table',
            orientation: 'Column',
            collections: [{
                items: [{
                    type: 'DropDown',
                    dropDownSettings: {
                        select: function (args) { updateContent("Header -> " + args.item.text); },
                        content: 'Header',
                        iconCss: 'e-icons e-header',
                        items: [{ text: 'Insert Header' }, { text: 'Edit Header' }, { text: 'Remove Header' }],
                    },
                    keyTip: 'H',
                }, {
                    type: 'DropDown',
                    keyTip: 'HF',
                    dropDownSettings: {
                        select: function (args) { updateContent("Footer -> " + args.item.text); },
                        iconCss: 'e-icons e-footer',
                        content: 'Footer',
                        items: [{ text: 'Insert Footer' }, { text: 'Edit Footer' }, { text: 'Remove Footer' }],
                    }
                }, {
                    keyTip: 'NU',
                    id: 'page_item',
                    type: 'DropDown',
                    dropDownSettings: {
                        select: function (args) { updateContent("Page Numbering -> " + args.item.text); },
                        content: 'Page Number',
                        iconCss: 'e-icons e-page-numbering',
                        items: [
                            { text: 'Insert Top of page' }, 
                            { text: 'Insert Bottom of page' }, 
                            { text: 'Format Page Number' }, 
                            { text: 'Remove Page Number' }
                        ],
                    }
                }
            ]
            }]
        },
        {
            id: 'comments_tab',
            isCollapsible: false,
            header: 'Comments',
            collections: [{
                items: [{
                    id:'new_cmnt_item',
                    type: 'Button',
                    allowedSizes: ej.ribbon.RibbonItemSize.Large,
                    keyTip: 'C',
                    buttonSettings: {
                        iconCss: 'e-icons e-comment-add',
                        content: 'New Comment',
                        clicked: function () { 
                            updateContent("New Comment"); 
                        }
                    }
                }]
            }]
        }, {
            id: 'linkGroup',
            groupIconCss: 'e-icons e-link',
            header: 'Links',
            collections: [{
                items: [{
                    allowedSizes: ej.ribbon.RibbonItemSize.Large,
                    type: 'DropDown',
                    keyTip: 'L2',
                    id: 'link_item',
                    dropDownSettings: {
                        iconCss: 'e-icons e-link',
                        content: 'Link',
                        select: function (args) { updateContent("Link -> " + args.item.text); },
                        items: [
                            { text: 'Insert Link', iconCss: 'e-icons e-link' },
                            { text: 'Recent Links', iconCss: 'e-icons e-clock' },
                            { text: 'Bookmarks', iconCss: 'e-icons e-bookmark' }
                        ],
                    }
                }]
            }]
        }]
    }, {
        id: 'view',
        keyTip: 'W',
        header: 'View',
        groups: [{
            header: 'Views',
            orientation: 'Row',
            groupIconCss: 'e-icons e-print',
            collections: [{
                items: [{
                    type: 'Button',
                    keyTip: 'F',
                    buttonSettings: {
                        iconCss: 'sf-icon-read',
                        content: 'Read Mode',
                        clicked: function () { updateContent("Read Mode"); }
                    }
                }, {
                    type: 'Button',
                    keyTip: 'LP',
                    buttonSettings: {
                        content: 'Print Layout',
                        iconCss: 'e-print e-icons',
                        clicked: function () { updateContent("Print Layout"); },
                    }
                }, {
                    type: 'Button',
                    keyTip: 'W',
                    buttonSettings: {
                        iconCss: 'sf-icon-web-layout',
                        content: 'Web Layout',
                        clicked: function () { updateContent("Web Layout"); },
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
                    keyTip: 'Q',
                    buttonSettings: {
                        iconCss: 'e-icons e-zoom-in',
                        content: 'Zoom In',
                        clicked: function () { updateContent("Zoom In"); },
                    }
                }, {
                    type: 'Button',
                    keyTip: 'J',
                    buttonSettings: {
                        clicked: function () { updateContent("Zoom Out"); },
                        iconCss: 'e-icons e-zoom-out',
                        content: 'Zoom Out',
                    },
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
                        change: function () { 
                            updateContent("Ruler"); 
                        },
                        checked: false,
                    },
                    keyTip: 'VR',
                }, {
                    type: 'CheckBox',
                    id: 'gridline',
                    keyTip: 'VG',
                    checkBoxSettings: {
                        checked: false,
                        change: function () { 
                            updateContent("Gridlines"); 
                        },
                        label: 'Gridlines',
                    }
                }, {
                    id: 'nav_pane',
                    type: 'CheckBox',
                    keyTip: 'VN',
                    checkBoxSettings: {
                        checked: true,
                        label: 'Navigation Pane',
                        change: function () { 
                            updateContent("Navigation Pane"); 
                        },
                    }
                }]
            }]
        }, {
            id: 'darkmode_group',
            header: 'Dark Mode',
            collections: [{
                items: [{
                    id: 'darkmodeItem',
                    keyTip: 'D',
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
        dataSource: ['Stock Images', 'This Device', 'Online Images'],
        headerTitle: 'Insert Picture From',
        showHeader: true,
        select: function (args) { updateContent("Pictures -> " + args.text); }
    });
    list.appendTo('#pictureList');
    var menuItems = [
        { id: 'home', text: 'Home', iconCss: 'e-icons e-home', content: fetchBackstageContent('home'), keyTip: 'H' },
        { id: 'new', text: 'New', iconCss: 'e-icons e-file-new', content: fetchBackstageContent('new'), keyTip: 'N' },
        { id: 'open', text: 'Open', iconCss: 'e-icons e-folder-open', content: fetchBackstageContent('open'), keyTip: 'O' },
        { separator: true },
        { id: 'info', text: 'Info', content: fetchBackstageContent('info'), keyTip: 'I' },
        { id: 'saveAs', text: 'Save as', content: fetchBackstageContent('save'), keyTip: 'S' },
        { id: 'export', text: 'Export', content: fetchBackstageContent('export'), keyTip: 'M' },
        { id: 'print', text: 'Print', backStageItemClick: backstageClickHandler, keyTip: 'P' },
        { id: 'share', text: 'Share', content: fetchBackstageContent('share'), keyTip: 'Z' },
        { separator: true, isFooter: true },
        { id: 'account', text: 'Account', isFooter: true, content: fetchBackstageContent('account'), keyTip: 'D' },
        { id: 'feedback', text: 'Feedback', isFooter: true, content: fetchBackstageContent('feedback'), keyTip: 'K' }
    ];
    var ribbon = new ej.ribbon.Ribbon({
        tabs: tabs,
        enableKeyTips: true,
        layoutSwitcherKeyTip: 'ZR',
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
        },
        backStageMenu: {
            text: 'File',
            keyTip: 'F',
            visible: true,
            items: menuItems,
            backButton: {
                text: 'Close',
            }
        },
        created: function() {
            ribbon.ribbonKeyTipModule.showKeyTips();
        }
    });
    ribbon.appendTo("#ribbon");

    var toast = new ej.notifications.Toast({
        height: 25,
        width: 'auto',
        target: '#ribbonPlaceHolder',
        newestOnTop: true,
        timeOut: 2000,
        animation: { show: { effect: 'FadeIn' }, hide: { effect: 'FadeOut' } },
        cssClass: 'e-toast-info',
        position: { X: "Right" },
        showCloseButton: true,
    });
    toast.appendTo('#toast');

    var checkBackstageOpen = false;
    function handleBackstageContentClick(e) {
        e.stopPropagation();
        var contentName = e.target.className;
        if (contentName !== "section-title" && contentName !== "home-wrapper" && contentName !== "new-wrapper" && contentName !== "block-wrapper" && contentName !== "e-ribbon-backstage-content"){
            ribbon.ribbonBackstageModule.hideBackstage();
            toast.show({content: 'Backstage content is interacted and closed.'});
            ribbon.element.querySelector('.e-ribbon-backstage-content').removeEventListener('click', handleBackstageContentClick);
        }
    }
    if (!checkBackstageOpen) {
        ribbon.element.querySelector('.e-ribbon-backstage').addEventListener('click', function () {
            checkBackstageOpen = true;
            ribbon.element.querySelector('.e-ribbon-backstage-content').addEventListener('click', handleBackstageContentClick);
        });
    }
    function backstageClickHandler() {
        ribbon.ribbonBackstageModule.hideBackstage(); 
        toast.show({ content: 'Print action is selected' });
    }
    var isPasteDisabled = true;    
    function enablePasteBtn() {
        if (!isPasteDisabled) { return; }        
        ribbon.enableItem('pastebtn');
        isPasteDisabled = false;
    }
    function updateContent(args) {
        toast.show({content: "Last clicked item is " + args});
    }
    function fetchBackstageContent(item) {
        var homeContentTemplate = "<div class='home-wrapper'>{{newSection}}{{recentSection}}</div>";
        var newSection = "<div class='new-wrapper'><div class='section-title'> New </div><div class='category_container'><div class='doc_category_image'></div> <span class='doc_category_text'> New document </span></div></div>";
        var recentSection = "<div class='block-wrapper'><div class='section-title'> Recent </div>{{recentWrapper}}</div>";
        var recentWrapper = "<div class='section-content'><table><tbody><tr><td> <span class='doc_icon e-icons {{icon}}'></span> </td><td><span style='display: block; font-size: 14px'> {{title}} </span><span style='font-size: 12px'> {{description}} </span></td></tr></tbody></table></div>";
        var blockSection = "<div class='block-wrapper'> <div class='section-title'> {{blockTitle}} </div> {{blockSection}} </div>";
        var content = "";
        var updatedRecentDocsString = "";
        switch (item) {
            case 'home': {
                window.recentDocuments.slice(0,3).forEach(function(doc) { updatedRecentDocsString += recentWrapper.replace(/{{icon}}/g, 'e-notes').replace(/{{title}}/g, doc.fileName).replace(/{{description}}/g, doc.location); });
                var updatedRecentSection = recentSection.replace(/{{recentWrapper}}/g, updatedRecentDocsString);
                content = homeContentTemplate.replace(/{{newSection}}/g, newSection).replace(/{{recentSection}}/g, updatedRecentSection);
                break;
            }
            case 'new': {
                content = newSection;
                break;
            }
            case 'open': {
                window.recentDocuments.forEach(function(doc) { updatedRecentDocsString += recentWrapper.replace(/{{icon}}/g, 'e-notes').replace(/{{title}}/g, doc.fileName).replace(/{{description}}/g, doc.location); });
                content = recentSection.replace(/{{recentWrapper}}/g, updatedRecentDocsString);
                break;
            }
            default:
                window.dataOptions[item].forEach(function(doc) { updatedRecentDocsString += recentWrapper.replace(/{{icon}}/g, doc.icon).replace(/{{title}}/g, doc.title).replace(/{{description}}/g, doc.description); });
                content = blockSection.replace(/{{blockSection}}/g, updatedRecentDocsString).replace(/{{blockTitle}}/g, (item.charAt(0).toUpperCase() + item.slice(1)));
                break;
        }
        return content;
    }
};
