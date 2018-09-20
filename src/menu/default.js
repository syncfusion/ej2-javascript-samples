/**
 * Menu default sample.
 */
this.default = function() {

    //Menu items definition 
    var menuItems = [
        {
            text: 'File',
            iconCss: 'e-icons e-file',
            items: [
                { text: 'Open', iconCss: 'e-icons e-open' },
                { text: 'Save', iconCss: 'e-icons e-save' },
                { separator: true },
                { text: 'Exit' }
            ]
        },
        {
            text: 'Edit',
            iconCss: 'e-icons e-edit',
            items: [
                { text: 'Cut', iconCss: 'e-icons e-cut' },
                { text: 'Copy', iconCss: 'e-icons e-copy' },
                { text: 'Paste', iconCss: 'e-icons e-paste' }
            ]
        },
        {
            text: 'View',
            items: [
                {
                    text: 'Toolbars',
                    items: [
                        { text: 'Menu Bar' },
                        { text: 'Bookmarks Toolbar' },
                        { text: 'Customize' },
                    ]
                },
                {
                    text: 'Zoom',
                    items: [
                        { text: 'Zoom In' },
                        { text: 'Zoom Out' },
                        { text: 'Reset' },
                    ]
                },
                { text: 'Full Screen' }
            ]
        },
        {
            text: 'Tools',
            items: [
                { text: 'Spelling & Grammar' },
                { text: 'Customize' },
                { separator: true },
                { text: 'Options' }
            ]
        },
        {
            text: 'Help'
        }
    ];

    //Menu model definition 
    var menuOptions = {
        items: menuItems
    };

    //Menu initialization
    var menuObj = new ej.navigations.Menu(menuOptions, '#menu');

};
