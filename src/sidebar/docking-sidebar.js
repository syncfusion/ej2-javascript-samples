this.default = function () {
    var dockBar = new ej.navigations.Sidebar({
        width: '220px',
        dockSize: '72px',
        enableDock: true
    });
    dockBar.appendTo('#dockSidebar');

    //radiobutton initialization
    var leftbutton = new ej.buttons.RadioButton({ label: 'Left', name: 'state', checked: true, change: positionChange });
    leftbutton.appendTo('#left');

    var rightbutton = new ej.buttons.RadioButton({ label: 'Right', name: 'state', change: positionChange });
    rightbutton.appendTo('#right');

    //open new tab
    var URL = location.href.replace(location.search, '');
    document.getElementById('newTab').setAttribute('href', URL.split('#')[0] + 'sidebar/docking-sidebar/index.html');

    function positionChange(args) {
        //radio button change event handler
        dockBar.position = (args.event.target.id === 'left') ? 'Left' : 'Right';
    }
    //switch the expand and collapse state
    document.getElementById('toggle').onclick = function () {
        dockBar.toggle();
    };
};