/**
 * Menu default sample.
 */
this.default = function() {

    // Menu items definition 
    var menuItems = [
        {
            text: 'File',
            iconCss: 'em-icons e-file',
            items: [
                { text: 'Open', iconCss: 'em-icons e-open' },
                { text: 'Save', iconCss: 'em-icons e-save' },
                { separator: true },
                { text: 'Exit' }
            ]
        },
        {
            text: 'Edit',
            iconCss: 'em-icons e-edit',
            items: [
                { text: 'Cut', iconCss: 'em-icons e-cut' },
                { text: 'Copy', iconCss: 'em-icons e-copy' },
                { text: 'Paste', iconCss: 'em-icons e-paste' }
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

    //Menu initialization
    new ej.navigations.Menu({ items: menuItems }, '#menu');

};
