this.default = function () {
    var fontStyle = [ 'Arial', 'Calibri', 'Cambria', 'Cambria Math', 'Courier New', 'Candara', 'Georgia', 'Impact', 'Segoe Print', 'Segoe Script', 'Segoe UI', 'Symbol', 'Times New Roman', 'Verdana', 'Windings'];
    var fontSize = [ '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72', '96'];
    var tabs = [{
        id: 'home',
        header: "Home",
        groups: [{
            header: "Clipboard",
            id: "clipboard",
            showLauncherIcon: true,
            groupIconCss: 'e-icons e-paste',
            collections: [{
                items: [{
                    id: 'pastebtn',
                    type: 'SplitButton',
                    allowedSizes: ej.ribbon.RibbonItemSize.Large,
                    disabled: true,
                    splitButtonSettings: {
                        iconCss: 'e-icons e-paste',
                        items: [{ text: 'Keep Source Format' }, { text: 'Merge Format' }, { text: 'Keep Text Only' }],
                        content: 'Paste',
                        click: function () { updateContent("Paste"); },
                        select: function (args) { updateContent("Paste -> " + args.item.text); },
                    }
                }]
            }, {
                items: [{
                    type: 'Button',
                    buttonSettings: {
                        iconCss: 'e-icons e-cut',
                        content: 'Cut',
                        clicked: function () { updateContent("Cut"); enablePaste(); },
                    }
                }, {
                    type: 'Button',
                    buttonSettings: {
                        iconCss: 'e-icons e-copy',
                        content: 'Copy',
                        clicked: function () { updateContent("Copy"); enablePaste(); },
                    }
                }, {
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
            overflowHeader: 'More Font Options',
            orientation: 'Row',
            collections: [{
                items: [{
                    type: 'ComboBox',
                    comboBoxSettings: {
                        dataSource: fontStyle,
                        label: 'Font Style',
                        width: '115px',
                        popupWidth: '150px',
                        index: 3,
                        allowFiltering: true,
                        change: function (args) {
                            if (args.itemData) {
                                updateContent("Font Style -> " + args.itemData.text);
                            }
                        },
                    }
                }, {
                    type: 'ComboBox',
                    comboBoxSettings: {
                        dataSource: fontSize,
                        label: 'Font Size',
                        popupWidth: '85px',
                        width: '65px',
                        allowFiltering: true,
                        index: 3,
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
                    allowedSizes: ej.ribbon.RibbonItemSize.Small,
                    displayOptions: ej.ribbon.DisplayMode.Simplified | ej.ribbon.DisplayMode.Classic,
                    colorPickerSettings: {
                        change: function (args) { updateContent(args.currentValue.hex + " color"); },
                        value: '#123456'
                    },
                }, {
                    type: 'Button',
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
                    buttonSettings: {
                        isToggle: true,
                        content: 'Italic',
                        clicked: function () { updateContent("Italic"); },
                        iconCss: 'e-icons e-italic',
                    }
                }, {
                    type: 'Button',
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
                    buttonSettings: {
                        iconCss: 'e-icons e-strikethrough',
                        content: 'Strikethrough',
                        isToggle: true,
                        clicked: function () { updateContent("Strikethrough"); }
                    }
                }, {
                    allowedSizes: ej.ribbon.RibbonItemSize.Small,
                    type: 'Button',
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
            orientation: 'Row',
            header: "Paragraph",
            groupIconCss: 'e-icons e-align-center',
            collections: [{
                items: [
                {
                    type: "Button",
                    allowedSizes: ej.ribbon.RibbonItemSize.Small,
                    buttonSettings: {
                        iconCss: 'e-icons e-decrease-indent',
                        content: 'Decrease Indent',
                        clicked: function () { updateContent("Cut"); },
                    }
                }, {
                    type: "Button",
                    allowedSizes: ej.ribbon.RibbonItemSize.Small,
                    buttonSettings: {
                        iconCss: 'e-icons e-increase-indent',
                        content: 'Increase Indent',
                        clicked: function () { updateContent("Increase Indent"); },
                    }
                }, {
                    type: "Button",
                    allowedSizes: ej.ribbon.RibbonItemSize.Small,
                    buttonSettings: {
                        iconCss: 'e-icons e-paragraph',
                        content: 'Paragraph',
                        clicked: function () { updateContent("Paragraph"); },
                    }
                }
            ]
            }, {
                items: [{
                    type: 'GroupButton',
                    allowedSizes: ej.ribbon.RibbonItemSize.Small,
                    groupButtonSettings: {
                        selection: ej.ribbon.RibbonGroupButtonSelection.Single,
                        header: 'Alignment',
                        items: [{
                            iconCss: 'e-icons e-align-left',
                            selected: true,
                            click: function ()  { updateContent("Align Left"); },
                        },
                        {
                            iconCss: 'e-icons e-align-center',
                            click: function ()  { updateContent("Align Center"); },
                        },
                        {
                            iconCss: 'e-icons e-align-right',
                            click: function ()  { updateContent("Align Right"); },
                        },
                        {
                            iconCss: 'e-icons e-justify',
                            click: function ()  { updateContent("Justify"); },
                        }],
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
                    splitButtonSettings: {
                        content: 'Dictate',
                        iconCss: 'sf-icon-dictate',
                        items: [{ text: 'Chinese' }, { text: 'English' }, { text: 'German' }, { text: 'French' }],
                        click: function () { updateContent("Dictate"); },
                        select: function (args) { updateContent("Dictate -> " + args.item.text); }
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
                        iconCss: 'e-icons e-search',
                        content: 'Find',
                        items: [
                            { text: 'Find', iconCss: 'e-icons e-search' },
                            { text: 'Advanced Find', iconCss: 'e-icons e-search' },
                            { text: 'Go to', iconCss: 'e-icons e-arrow-right' }
                        ],
                        select: function (args) { updateContent("Find -> " + args.item.text); },
                        click: function () { updateContent("Find"); },
                    }
                }, {
                    type: 'Button',
                    buttonSettings: {
                        iconCss: 'e-icons e-replace',
                        content: 'Replace',
                        clicked: function () { updateContent("Replace"); }
                    }
                }, {
                    id: "mouse",
                    type: 'SplitButton',
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
            id: 'editing',
            header: "Editor",
            isCollapsible: false,
            groupIconCss: 'sf-icon-editor',
            collections: [{
                items: [{
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
        id: 'insertTab',
        header: 'Insert',
        groups: [{
            id: 'table',
            header: 'Tables',
            isCollapsible: false,
            collections: [{
                items: [{
                    type: 'DropDown',
                    id:'table_item',
                    allowedSizes: ej.ribbon.RibbonItemSize.Large,
                    dropDownSettings: {
                        content: 'Table',
                        iconCss: 'e-icons e-table',
                        items: [
                            { text: 'Insert Table' }, 
                            { text: 'Draw Table' }, 
                            { text: 'Convert Table' }, 
                            { text: 'Excel Spreadsheet' }
                        ],
                        select: function (args) { updateContent("Table -> " + args.item.text); },
                    }
                }]
            }]
        }, {
            id: 'illustration',
            header: 'Illustrations',
            enableGroupOverflow: true,
            overflowHeader: 'Illustrations',
            showLauncherIcon: true,
            orientation: 'Row',
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
                    id: 'shapes_item',
                    type: 'DropDown',
                    dropDownSettings: {
                        iconCss: 'sf-icon-shapes',
                        content: 'Shapes',
                        items: [
                            { text: 'Lines' }, 
                            { text: 'Rectangles' }, 
                            { text: 'Basic Arrows' }, 
                            { text: 'Basic Shapes' }, 
                            { text: 'FlowChart' }
                        ],
                        select: function (args) { updateContent("Shapes -> " + args.item.text); },
                    }
                }, {
                    type: 'Button',
                    buttonSettings: {
                        iconCss: 'sf-icon-3d-model',
                        content: '3D Models',
                        clicked: function () { updateContent("3D Models"); },
                    }
                }, {
                    type: 'Button',
                    buttonSettings: {
                        content: 'SmartArt',
                        iconCss: 'sf-icon-smart-art',
                        clicked: function () { updateContent("SmartArt"); },
                    }
                }, {
                    type: 'Button',
                    buttonSettings: {
                        content: 'Chart',
                        iconCss: 'sf-icon-chart',
                        clicked: function () { updateContent("Chart"); },
                    }
                }, {
                    type: 'Button',
                    buttonSettings: {
                        content: 'Screenshot',
                        iconCss: 'sf-icon-screenshot',
                        clicked: function () { updateContent("Screenshot"); },
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
                        content: 'Header',
                        iconCss: 'e-icons e-header',
                        items: [{ text: 'Insert Header' }, { text: 'Edit Header' }, { text: 'Remove Header' }],
                        select: function (args) { updateContent("Header -> " + args.item.text); },
                    }
                }, {
                    type: 'DropDown',
                    dropDownSettings: {
                        content: 'Footer',
                        iconCss: 'e-icons e-footer',
                        items: [{ text: 'Insert Footer' }, { text: 'Edit Footer' }, { text: 'Remove Footer' }],
                        select: function (args) { updateContent("Footer -> " + args.item.text); },
                    }
                }, {
                    id: 'page_item',
                    type: 'DropDown',
                    dropDownSettings: {
                        content: 'Page Number',
                        iconCss: 'e-icons e-page-numbering',
                        items: [
                            { text: 'Insert Top of page' }, 
                            { text: 'Insert Bottom of page' }, 
                            { text: 'Format Page Number' }, 
                            { text: 'Remove Page Number' }
                        ],
                        select: function (args) { updateContent("Page Numbering -> " + args.item.text); },
                    }
                }]
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
            header: 'Links',
            groupIconCss: 'e-icons e-link',
            collections: [{
                items: [{
                    allowedSizes: ej.ribbon.RibbonItemSize.Large,
                    type: 'DropDown',
                    id: 'link_item',
                    dropDownSettings: {
                        content: 'Link',
                        iconCss: 'e-icons e-link',
                        items: [
                            { text: 'Insert Link', iconCss: 'e-icons e-link' },
                            { text: 'Recent Links', iconCss: 'e-icons e-clock' },
                            { text: 'Bookmarks', iconCss: 'e-icons e-bookmark' }
                        ],
                        select: function (args) { updateContent("Link -> " + args.item.text); },
                    }
                }]
            }]
        }]
    }, {
        id: 'view',
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
                        content: 'Print Layout',
                        iconCss: 'e-print e-icons',
                        clicked: function () { updateContent("Print Layout"); },
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
            groupIconCss: 'e-icons e-zoom-to-fit',
            orientation: 'Row',
            collections: [{
                items: [{
                    type: 'Button',
                    buttonSettings: {
                        iconCss: 'e-icons e-zoom-in',
                        content: 'Zoom In',
                        clicked: function () { updateContent("Zoom In"); },
                    }
                }, {
                    type: 'Button',
                    buttonSettings: {
                        iconCss: 'e-icons e-zoom-out',
                        content: 'Zoom Out',
                        clicked: function () { updateContent("Zoom Out"); },
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
                        change: function () { 
                            updateContent("Ruler"); 
                        },
                    }
                }, {
                    id: 'gridline',
                    type: 'CheckBox',
                    checkBoxSettings: {
                        checked: false,
                        label: 'Gridlines',
                        change: function () { 
                            updateContent("Gridlines"); 
                        },
                    }
                }, {
                    id: 'nav_pane',
                    type: 'CheckBox',
                    checkBoxSettings: {
                        label: 'Navigation Pane',
                        checked: true,
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
                    id: 'darkmode_item',
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
        dataSource: ['Stock Images', 'This Device', 'Online Images'],
        showHeader: true,
        headerTitle: 'Insert Picture From',
        select: function (args) { updateContent("Pictures -> " + args.text); }
    });
    list.appendTo('#pictureList');
    var menuItems = [
        { id: 'home', text: 'Home', iconCss: 'e-icons e-home', content: getBackstageContent('home') },
        { id: 'new', text: 'New', iconCss: 'e-icons e-file-new', content: getBackstageContent('new') },
        { id: 'open', text: 'Open', iconCss: 'e-icons e-folder-open', content: getBackstageContent('open') },
        { separator: true },
        { text: 'Info', content: getBackstageContent('info') },
        { text: 'Save as', content: getBackstageContent('save') },
        { text: 'Export', content: getBackstageContent('export') },
        { text: 'Print', backStageItemClick: backstageClickHandler },
        { text: 'Share', content: getBackstageContent('share') },
        { separator: true, isFooter: true },
        { text: 'Account', isFooter: true, content: getBackstageContent('account') },
        { text: 'Feedback', isFooter: true, content: getBackstageContent('feedback') }
    ];
    var ribbon = new ej.ribbon.Ribbon({
        tabs: tabs,
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
            visible: true,
            items: menuItems,
            backButton: {
                text: 'Close',
            }
        }
    });
    ribbon.appendTo("#ribbon");

    var toast = new ej.notifications.Toast({
        width: 'auto',
        height: 25,
        target: '#ribbonPlaceHolder',
        timeOut: 2000,
        newestOnTop: true,
        cssClass: 'e-toast-info',
        animation: { show: { effect: 'FadeIn' }, hide: { effect: 'FadeOut' } },
        showCloseButton: true,
        position: { X: "Right" },
    });
    toast.appendTo('#toast');

    var isBackstageOpened = false;
    function handleClickInsideBackstageContent(e) {
        e.stopPropagation();
        var cName = e.target.className;
        if (cName !== "section-title" && cName !== "home-wrapper" && cName !== "new-wrapper" && cName !== "block-wrapper" && cName !== "e-ribbon-backstage-content") {
            ribbon.ribbonBackstageModule.hideBackstage();
            toast.show({ content: 'Backstage content is interacted and closed.' });
            ribbon.element.querySelector('.e-ribbon-backstage-content').removeEventListener('click', handleClickInsideBackstageContent);
        }
    }
    if (!isBackstageOpened) {
        ribbon.element.querySelector('.e-ribbon-backstage').addEventListener('click', function () {
            isBackstageOpened = true;
            ribbon.element.querySelector('.e-ribbon-backstage-content').addEventListener('click', handleClickInsideBackstageContent);
        });
    }

    function backstageClickHandler() {
        ribbon.ribbonBackstageModule.hideBackstage(); 
        toast.show({ content: 'Print action is selected' });
    }

    var isPasteDisabled = true;    
    function enablePaste() {
        if (!isPasteDisabled) { return; }        
        ribbon.enableItem('pastebtn');
        isPasteDisabled = false;
    }

    function updateContent(args) {
        toast.show({ content: "Last clicked item is " + args });
    }

    function getBackstageContent(item) {
        var homeContentTemplate = "<div class='home-wrapper'>{{newSection}}{{recentSection}}</div>";
        var newSection = "<div class='new-wrapper'><div class='section-title'> New </div><div class='category_container'><div class='doc_category_image'></div> <span class='doc_category_text'> New document </span></div></div>";
        var recentSection = "<div class='block-wrapper'><div class='section-title'> Recent </div>{{recentWrapper}}</div>";
        var recentWrapper = "<div class='section-content'><table><tbody><tr><td> <span class='doc_icon e-icons {{icon}}'></span> </td><td><span style='display: block; font-size: 14px'> {{title}} </span><span style='font-size: 12px'> {{description}} </span></td></tr></tbody></table></div>";
        var blockSection = "<div class='block-wrapper'> <div class='section-title'> {{blockTitle}} </div> {{blockSection}} </div>";
        var content = "";
        var recentDocUpdatedString = "";
        switch (item) {
            case 'home': {
                window.recentDocuments.slice(0,3).forEach(function(doc) { recentDocUpdatedString += recentWrapper.replace(/{{icon}}/g, 'e-notes').replace(/{{title}}/g, doc.fileName).replace(/{{description}}/g, doc.location); });
                var updatedRecentSection = recentSection.replace(/{{recentWrapper}}/g, recentDocUpdatedString);
                content = homeContentTemplate.replace(/{{newSection}}/g, newSection).replace(/{{recentSection}}/g, updatedRecentSection);
                break;
            }
            case 'new': {
                content = newSection;
                break;
            }
            case 'open': {
                window.recentDocuments.forEach(function(doc) { recentDocUpdatedString += recentWrapper.replace(/{{icon}}/g, 'e-notes').replace(/{{title}}/g, doc.fileName).replace(/{{description}}/g, doc.location); });
                content = recentSection.replace(/{{recentWrapper}}/g, recentDocUpdatedString);
                break;
            }
            default:
                window.dataOptions[item].forEach(function(doc) { recentDocUpdatedString += recentWrapper.replace(/{{icon}}/g, doc.icon).replace(/{{title}}/g, doc.title).replace(/{{description}}/g, doc.description); });
                content = blockSection.replace(/{{blockSection}}/g, recentDocUpdatedString).replace(/{{blockTitle}}/g, (item.charAt(0).toUpperCase() + item.slice(1)));
                break;
        }
        return content;
    }
};
