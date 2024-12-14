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
            title:'Search',
            iconCss:'e-icons e-search'
        },
        {
            title:'Message',
            iconCss:'e-icons e-comment-show'
        }
    ];
    var speedDial = new ej.buttons.SpeedDial(
        {
            openIconCss:'e-icons e-justify',
            closeIconCss:'e-icons e-close',
            items: items,
            target: '#target',
            position: 'BottomCenter',
            modal: true
        });
    speedDial.appendTo('#btn1');
};
