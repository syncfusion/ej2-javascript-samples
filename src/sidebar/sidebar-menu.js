this.default = function () {

    // Sidebar Initialization
    var sidebarInstance = new ej.navigations.Sidebar({
        width: '250px',
        type: 'Over'
    });
    sidebarInstance.appendTo('#sidebar-menu');
    //end of Sidebar initialization

    var dataList = [
        { text: 'Home' }, { text: 'About' }, { text: 'Careers' }, { text: 'FAQs' },
        { text: 'Blog' }, { text: 'Uses' }, { text: 'Contact' }
    ];

    //Initialize the ListView component
    var listviewInstance = new ej.lists.ListView({
        dataSource: dataList,
        fields: { tooltip: 'text' },
        select: onSelect
    });
    listviewInstance.appendTo('#menulist');

    // open new tab
    document.getElementById('newTab').setAttribute('href', location.href.split('#')[0] + 'samples/sidebar/sidebar-menu/index.html');

    // Expand the Sidebar
    document.getElementById('hamburger').addEventListener('click', function () {
        sidebarInstance.show();
    });

    // Close the Sidebar
    document.getElementById('close').addEventListener('click', function () {
        sidebarInstance.hide();
    });

    function onSelect(args) {
        //Listview select event handler
        document.querySelector('.content').textContent = args.text + ' Page Content';
        sidebarInstance.hide();
    }

};
