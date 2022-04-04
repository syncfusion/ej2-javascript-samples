this.default = function () {
    //Toolbar component template element specification
    var folderEle = '<div class= "e-folder"><div class= "e-folder-name">Navigation Pane</div></div>';
    //Toolbar component initialization
    var toolbarObj = new ej.navigations.Toolbar({
        clicked: ToolbarCliked,
        items: [
            { prefixIcon: "icon-menu", tooltipText: "Menu" },
            { template: folderEle }
        ]
    });
    toolbarObj.appendTo("#menuToolbar");
    var sidebarMenu = new ej.navigations.Sidebar({
        target: ".main-content",
        width: "220px",
        dockSize: "50px",
        enableDock: true,
        isOpen: true,
        type: 'Auto'
    });
    sidebarMenu.appendTo('#menuSidebar');
    // MainMenuItems definition
    var mainMenuItems = [
        {
            text: 'Overview',
            iconCss: 'icon-user icon',
            items: [
                { text: 'All Data' },
                { text: 'Category2' },
                { text: 'Category3' }
            ]
        },
        {
            text: 'Notification',
            iconCss: 'icon-bell-alt icon',
            items: [
                { text: 'Change Profile' },
                { text: 'Add Name' },
                { text: 'Add Details' }
            ]
        },
        {
            text: 'Info',
            iconCss: 'icon-tag icon',
            items: [
                { text: 'Message' },
                { text: 'Facebook' },
                { text: 'Twitter' }
            ]
        },
        {
            text: 'Comments',
            iconCss: 'icon-comment-inv-alt2 icon',
            items: [
                { text: 'Category1' },
                { text: 'Category2' },
                { text: 'Category3' }
            ]
        },
        {
            text: 'Bookmarks',
            iconCss: 'icon-bookmark icon',
            items: [
                { text: 'All Comments' },
                { text: 'Add Comments' },
                { text: 'Delete Comments' }
            ]
        },
        {
            text: 'Images',
            iconCss: 'icon-picture icon',
            items: [
                { text: 'Add Name' },
                { text: 'Add Mobile Number' }
            ]
        },
        {
            text: 'Users ',
            iconCss: 'icon-user icon',
            items: [
                { text: 'Mobile User' },
                { text: 'Laptop User' },
                { text: 'Desktop User' }
            ]
        },
        {
            text: 'Settings',
            iconCss: 'icon-eye icon',
            items: [
                { text: 'Change Profile' },
                { text: 'Add Name' },
                { text: 'Add Details' }
            ]
        }
    ];
    // main-menubar initialization
    var mainMenuObj = new ej.navigations.Menu({ 
        items: mainMenuItems,
        orientation: 'Vertical',
        cssClass: 'dock-menu',
    }, "#dockMenu");
    function ToolbarCliked(args) {
        if(args.item.tooltipText == "Menu") {
            sidebarMenu.toggle();
        }
    }
};
