this.default = function() {
    var breadcrumbItems = [
        {
            iconCss: 'e-bicons e-picture'
        },
        {
            text: 'This PC'
        },
        {
            text: 'Local Disk (C:)'
        },
        {
            text: 'Users'
        },
        {
            text: 'Admin'
        },
        {
            text: 'Pictures'
        }
    ];

    var initialBreadcrumbItems = [].slice.call(breadcrumbItems);

    var items = [
        {
            text: 'OneDrive', type: 'onedrive',
            items: [
                { text: 'Documents', type: 'folder' },
                { text: 'Email attachments', type: 'folder' },
                { text: 'Music', type: 'folder' },
                { text: 'Pictures', type: 'folder' }
            ]
        },
        {
            text: 'This PC', type: 'desktop',
            items: [
                { text: 'Desktop', type: 'desktop' },
                { text: 'Documents', type: 'documents', items: [
                    { text: 'IISExpress', type: 'folder', items: [
                        { text: 'config', type: 'folder' }
                    ] },
                    { text: 'Visual Studio 2019', type: 'folder', items: [
                        { text: 'Code Snippets', type: 'folder' },
                        { text: 'Templates', type: 'folder' },
                        { text: 'Visualizers', type: 'folder' }
                    ] }
                ] },
                { text: 'Downloads', type: 'downloads' },
                {
                    text: 'Local Disk (C:)', type: 'folder', items: [
                        {
                            text: 'Microsoft', type: 'folder'
                        },
                        { text: 'Program Files', type: 'folder', items: [ 
                            { text: 'Git', type: 'folder', items: [
                                { text: 'bin', type: 'folder' },
                                { text: 'cmd', type: 'folder' },
                                { text: 'dev', type: 'folder' }
                            ] },
                            { text: 'Google', type: 'folder', items:[
                                { text: 'Chrome', type: 'folder' }
                            ] },
                            { text: 'Internet Explorer', type: 'folder', items:[
                                { text: 'en-US', type: 'folder' }
                            ] }
                        ] },
                        { text: 'Program Files (x86)', type: 'folder', items:[
                            { text: 'Microsoft', type: 'folder', items: [
                                { text: 'Edge', type: 'folder' }
                            ] },
                            { text: 'MSBuild', type: 'folder' },
                            { text: 'Windows Defender', type: 'folder' }
                        ] },
                        {
                            text: 'Users', type: 'folder', items: [
                                {
                                    text: 'Admin', type: 'folder', items: [
                                        { text: 'Desktop', type: 'desktop' },
                                        { text: 'Documents', type: 'documents' },
                                        { text: 'Downloads', type: 'downloads' },
                                        { text: 'Pictures', type: 'picture' }
                                    ]
                                },
                                { text: 'Public', type: 'folder' }
                            ]
                        },
                        { text: 'Windows', type: 'folder', items: [
                            { text: 'Boot', type: 'folder' },
                            { text: 'System32', type: 'folder', items: [
                                { text: 'Configuration', type: 'folder' },
                                { text: 'LogFiles', type: 'folder' }
                            ] }
                        ] }
                    ]
                },
                { text: 'Local Disk (D:)', type: 'folder' }
            ]
        },
        { text: 'Libraries', type: 'folder' },
        { text: 'Network', type: 'network' },
        { text: 'Recycle Bin', type: 'recyclebin' }
    ];

    var breadcrumbObj = new ej.navigations.Breadcrumb({
        cssClass: 'e-custom-breadcrumb',
        itemTemplate: '#itemTemplate',
        separatorTemplate: '#separatorTemplate',
        items: breadcrumbItems,
        beforeItemRender: beforeItemRenderHanlder
     }, '#address-bar');

     function beforeItemRenderHanlder(args) {
        if (args.element.classList.contains('e-breadcrumb-separator')) {
            var previousItemText = args.item.previousItem.text;
            if (previousItemText !== 'LastItem' && getItems(previousItemText)[0].items) {
                new ej.navigations.Menu({
                    items: getItems(previousItemText),
                    showItemOnClick: true,
                    select: function (args) {
                        if (!args.element.parentElement.classList.contains('e-menu') && this.items[0] && this.items[0].items) {
                            var idx;
                            for (var i = 0; i < this.items[0].items.length; i++) {
                                for (var j = 0; j < breadcrumbItems.length; j++) {
                                    if (this.items[0].items[i].text === breadcrumbItems[j].text) {
                                        idx = j;
                                        break;
                                    }
                                }
                            }
                            if (idx) {
                                breadcrumbItems = breadcrumbItems.slice(0, idx);
                            }
                            breadcrumbItems[0].iconCss = 'e-bicons e-' + args.item.type;
                            if (breadcrumbItems[breadcrumbItems.length - 1].text === 'LastItem') {
                                breadcrumbItems.pop();
                            }
                            breadcrumbItems.push({ text: args.item.text });
                            breadcrumbItems.push({ text: 'LastItem' });
                            breadcrumbObj.items = breadcrumbItems;
                        }
                    },
                    beforeOpen: function () {
                        this.element.classList.add('e-open');
                    },
                    onClose: function () {
                        this.element.classList.remove('e-open');
                    }
                }, args.element.querySelector('ul'));
            }
        } else {
            if (args.item.text === 'LastItem') {
                args.element.style.display = 'none';
                return;
            }
            new ej.navigations.Menu({
                items: [{
                    text: args.item.text, iconCss: args.item.iconCss
                }],
                select: function (args) {
                    for (var i = 0; i < breadcrumbItems.length; i++) {
                        if (breadcrumbItems[i].text === args.item.text) {
                            breadcrumbItems = breadcrumbItems.slice(0, i + 1);
                            breadcrumbItems[0].iconCss = 'e-bicons e-' + getItems(args.item.text, true)[0].items.type;
                            breadcrumbObj.items = breadcrumbItems;
                            break;
                        }
                    }
                    breadcrumbObj.items.push({ text: 'LastItem' });
                    breadcrumbObj.activeItem = 'LastItem';
                }
            }, args.element.querySelector('ul'));
        }
    }

     function getItems(text, needParent) {
        var mItems = [].slice.call(items);
        var isBreaked;
        if (!text) {
            mItems = getSubMenuItems(mItems);
        }
        else {
            for (var i = 1; i < breadcrumbItems.length; i++) {
                for (var j = 0; j < mItems.length; j++) {
                    if (mItems[j].text === breadcrumbItems[i].text) {
                        if (mItems[j].text === text) {
                            if (needParent) {
                                mItems = mItems[j];
                            } else {
                                mItems = getSubMenuItems(mItems[j].items);
                            }
                            isBreaked = true;
                        } else {
                            mItems = mItems[j].items;
                            j = 0;
                        }
                        break;
                    }
                }
                if (isBreaked) {
                    break;
                }
            }
        }
        return [{ items: mItems }];
    }

    function getSubMenuItems(mItems) {
        var subItems;
        if (mItems) {
            subItems = [];
            for (var i = 0; i < mItems.length; i++) {
                subItems.push({ text: mItems[i].text, type: mItems[i].type });
            }
        }
        return subItems;
    }

    // To refresh Breadcrumb control state when reset button clicked
    new ej.buttons.Button({ cssClass: 'e-small' }, '#reset').element.onclick = function() {
        var breadcrumb = document.getElementById('address-bar');
        var breadcrumbInst = ej.base.getComponent(breadcrumb, 'breadcrumb');
        breadcrumbInst.items = initialBreadcrumbItems;
        breadcrumbItems = initialBreadcrumbItems;
    };
};
