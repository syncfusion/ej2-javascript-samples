this.default = function() {

    //ContextMenu items definition
    var menuItems = [
        {
            text: 'Cut',
            iconCss: 'e-cm-icons e-cut'
        },
        {
            text: 'Copy',
            iconCss: 'e-cm-icons e-copy'
        },
        {
            text: 'Paste',
            iconCss: 'e-cm-icons e-paste',
            items: [
                {
                    text: 'Paste Text',
                    iconCss: 'e-cm-icons e-pastetext'
                },
                {
                    text: 'Paste Special',
                    iconCss: 'e-cm-icons e-pastespecial'
                }
            ]
        },
        {
            separator: true
        },
        {
            text: 'Link',
            iconCss: 'e-cm-icons e-link'
        },
        {
            text: 'New Comment',
            iconCss: 'e-cm-icons e-comment'
        }
    ];

    //ContextMenu model definition
    var menuOptions = {
        target: '#contextmenutarget',
        items: menuItems,
        // Event triggers while rendering each menu item where “Link” menu item is disabled
        beforeItemRender: function (args) {
            if (args.item.text === 'Link') {
                args.element.classList.add('e-disabled');
            }
        }
    };
    
    var menuObj = new ej.navigations.ContextMenu(menuOptions, '#contextmenu');
    if (ej.base.Browser.isDevice) {
        ej.base.select('#contextmenutarget').textContent = 'Touch hold to open the ContextMenu';
        menuObj.animationSettings.effect = 'ZoomIn';
    }
    else {
        ej.base.select('#contextmenutarget').textContent = 'Right click/Touch hold to open the ContextMenu';
        menuObj.animationSettings.effect = 'SlideDown';
    }
};
