this.default = function () {
    var items = [
        {
            title:'Image',
            iconCss:'speeddial-icons speeddial-icon-image'
        },
        {
            title:'Audio',
            iconCss:'speeddial-icons speeddial-icon-audio'
        },
        {
            title:'Video',
            iconCss:'speeddial-icons speeddial-icon-video'
        }
    ];
    var topLeft = new ej.buttons.SpeedDial(
        {
            openIconCss: 'speeddial-icons speeddial-icon-upload',
            items: items,
            target: '#target',
            cssClass:"e-success",
            position: 'TopLeft'
        });
    topLeft.appendTo('#btn1');

    var topCenter = new ej.buttons.SpeedDial(
        {
            openIconCss: 'speeddial-icons speeddial-icon-upload',
            items: items,
            target: '#target',
            cssClass:"e-warning",
            position: 'TopCenter'
        });
    topCenter.appendTo('#btn2');

    var topRight = new ej.buttons.SpeedDial(
        {
            openIconCss: 'speeddial-icons speeddial-icon-upload',
            items: items,
            target: '#target',
            cssClass:"e-success",
            position: 'TopRight'
        });
    topRight.appendTo('#btn3');

    var middleLeft = new ej.buttons.SpeedDial(
        {
            openIconCss: 'speeddial-icons speeddial-icon-upload',
            items: items,
            target: '#target',
            cssClass:"e-warning",
            position: 'MiddleLeft',
            direction: 'Right'
        });
    middleLeft.appendTo('#btn4');
    var middleCenter = new ej.buttons.SpeedDial(
        {
            openIconCss: 'speeddial-icons speeddial-icon-upload',
            items: items,
            target: '#target',
            position: 'MiddleCenter',
        });
    middleCenter.appendTo('#btn5');
    var middleRight = new ej.buttons.SpeedDial(
        {
            openIconCss: 'speeddial-icons speeddial-icon-upload',
            items: items,
            target: '#target',
            cssClass:"e-warning",
            position: 'MiddleRight',
            direction: 'Left'
        });
    middleRight.appendTo('#btn6');
    var bottomLeft = new ej.buttons.SpeedDial(
        {
            openIconCss: 'speeddial-icons speeddial-icon-upload',
            items: items,
            target: '#target',
            cssClass:"e-success",
            position: 'BottomLeft'
        });
    bottomLeft.appendTo('#btn7');
    var bottomCenter = new ej.buttons.SpeedDial(
        {
            openIconCss: 'speeddial-icons speeddial-icon-upload',
            items: items,
            target: '#target',
            cssClass:"e-warning",
            position: 'BottomCenter'
        });
    bottomCenter.appendTo('#btn8');
    var bottomRight = new ej.buttons.SpeedDial(
        {
            openIconCss: 'speeddial-icons speeddial-icon-upload',
            items: items,
            target: '#target',
            cssClass:"e-success",
            position: 'BottomRight'
        });
    bottomRight.appendTo('#btn9');
};
