this.default = function() {
    var items =  [
        {
            title:'Home',
            iconCss:'speeddial-icons speeddial-icon-house'
        },
        {
            title:'People',
            iconCss:'speeddial-icons speeddial-icon-people'
        },
        {
            title:'Search',
            iconCss:'speeddial-icons speeddial-icon-search'
        },
        {
            title:'Message',
            iconCss:'speeddial-icons speeddial-icon-message'
        }
    ];
    var speedDial = new ej.buttons.SpeedDial(
        {
            openIconCss: 'speeddial-icons speeddial-icon-menu',
            closeIconCss: 'speeddial-icons speeddial-icon-close',
            items: items,
            target: '#target',
            position: 'BottomCenter',
            modal: true
        });
    speedDial.appendTo('#btn1');
};
