this.default = function () {

    // Sidebar Initialization
    var sidebarMenu = new ej.navigations.Sidebar({
        width: '220px',
        mediaQuery: '(min-width: 600px)',
        target: '.main-content',
        dockSize: '50px',
        enableDock: true
    });
    sidebarMenu.appendTo('#sidebar-menu');
    //end of Sidebar initialization
    // Toggle the Sidebar
    document.getElementById('hamburger').addEventListener('click', function () {
        sidebarMenu.toggle();
    });
    // open new tab
    var URL = location.href.replace(location.search, '');
    document.getElementById('newTab').setAttribute('href', URL.split('#')[0] + 'sidebar/sidebar-menu/index.html');
    var mainMenuItems = [
        {
            text: 'Overview',
            iconCss: 'icon-globe icon',
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
                { text: 'Add Mobil Number' },
                { text: 'Add Imaage' },
            ]
        },
        {
            text: 'Users ',
            iconCss: 'icon-user icon',
            items: [
                { text: 'Mobile1' },
                { text: 'Mobile2' },
                { text: 'Telephone' }
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
        },
        {
            text: 'Info',
            iconCss: 'icon-tag icon',
            items: [
                { text: 'Facebook' },
                { text: 'Mobile' },
            ]
        },
    ];
    var mainMenuObj =
        new ej.navigations.Menu({ items: mainMenuItems, orientation: 'Vertical', cssClass: 'dock-menu' }, '#main-menubar');
      var accountMenuItem = [
        {
            text: 'Account',
            items: [
                { text: 'Profile' },
                { text: 'Sign out' },
            ]
        },
    ];
    // horizontal-menubar initialization
    var horizontalMenuobj =
       new ej.navigations.Menu({ items: accountMenuItem, orientation: 'Horizontal', cssClass: 'dock-menu' }, '#horizontal-menubar');

};
