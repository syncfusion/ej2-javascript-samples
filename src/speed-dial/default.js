this.default = function() {
    var items =  [
        {
            title:'Home',
            iconCss:'e-icons e-home'
        },
        {
            title:'People',
            iconCss:'e-icons e-people'
        },
        {
            title:'Message',
            iconCss:'e-icons e-comment-show'
        },
        {
            title:'Search',
            iconCss:'e-icons e-search'
        }
    ];
    var speedDial = new ej.buttons.SpeedDial(
        {
        openIconCss:'e-icons e-justify',
        closeIconCss:'e-icons e-close',
        items:items,
        target: '#target',
        position:'BottomCenter'
    });
    speedDial.appendTo('#btn1');
};
