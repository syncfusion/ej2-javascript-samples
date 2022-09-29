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
            title:'Message',
            iconCss:'speeddial-icons speeddial-icon-message'
        },
        {
            title:'Search',
            iconCss:'speeddial-icons speeddial-icon-search'
        }        
    ];
    var speedDial = new ej.buttons.SpeedDial(
        {
        openIconCss:'speeddial-icons speeddial-icon-menu',
        closeIconCss:'speeddial-icons speeddial-icon-close',
        items:items,
        target: '#target',
        position:'BottomCenter'
    });
    speedDial.appendTo('#btn1');
};
