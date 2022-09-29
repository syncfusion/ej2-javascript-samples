this.default = function () {
    var items = [
        {
            title: 'Cut',
            iconCss: 'speeddial-icons speeddial-icon-cut'
        },
        {
            title: 'Copy',
            iconCss: 'speeddial-icons speeddial-icon-copy'
        },
        {
            title: 'Paste',
            iconCss: 'speeddial-icons speeddial-icon-paste'
        },
        {
            title: 'Delete',
            iconCss: 'speeddial-icons speeddial-icon-delete'
        },
        {
            title: 'Save',
            iconCss: 'speeddial-icons speeddial-icon-save'
        }
    ];

    var radialSetting = { offset:'70px' };
    
     var topLeft = new  ej.buttons.SpeedDial(
        {
        openIconCss:'speeddial-icons speeddial-icon-edit',
        items:items,
        target: '#target',
        cssClass:"e-success",
        position:'TopLeft',
        mode:'Radial'
        });
    topLeft.appendTo('#btn1');

     var topCenter = new  ej.buttons.SpeedDial(
        {
        openIconCss:'speeddial-icons speeddial-icon-edit',
        items:items,
        target: '#target',
        cssClass:"e-warning",
        position:'TopCenter',
        radialSettings: radialSetting,
        mode:'Radial'
        });
    topCenter.appendTo('#btn2');

     var topRight = new  ej.buttons.SpeedDial(
        {
        openIconCss:'speeddial-icons speeddial-icon-edit',
        items:items,
        target: '#target',
        cssClass:"e-success",
        position:'TopRight',
        mode:'Radial'
        });
    topRight.appendTo('#btn3');

     var middleLeft = new  ej.buttons.SpeedDial(
        {
        openIconCss:'speeddial-icons speeddial-icon-edit',
        items:items,
        target: '#target',
        cssClass:"e-warning",
        position:'MiddleLeft',
        radialSettings: radialSetting,
        mode:'Radial'
        });
    middleLeft.appendTo('#btn4');

     var middleCenter = new  ej.buttons.SpeedDial(
        {
        openIconCss:'speeddial-icons speeddial-icon-edit',
        items:items,
        target: '#target',
        radialSettings: radialSetting,
        position:'MiddleCenter',
        mode:'Radial'
        });
    middleCenter.appendTo('#btn5');

     var middleRight = new  ej.buttons.SpeedDial(
        {
        openIconCss:'speeddial-icons speeddial-icon-edit',
        items:items,
        target: '#target',
        radialSettings: radialSetting,
        cssClass:"e-warning",
        position:'MiddleRight',
        mode:'Radial'
        });
    middleRight.appendTo('#btn6');

     var bottomLeft = new  ej.buttons.SpeedDial(
        {
        openIconCss:'speeddial-icons speeddial-icon-edit',
        items:items,
        target: '#target',
        cssClass:"e-success",
        position:'BottomLeft',
        mode:'Radial'
        });
    bottomLeft.appendTo('#btn7');

     var bottomCenter = new  ej.buttons.SpeedDial(
        {
        openIconCss:'speeddial-icons speeddial-icon-edit',
        items:items,
        target: '#target',
        radialSettings: radialSetting,
        cssClass:"e-warning",
        position:'BottomCenter',
        mode:'Radial'
        });
    bottomCenter.appendTo('#btn8');

     var bottomRight = new  ej.buttons.SpeedDial(
        {
        openIconCss:'speeddial-icons speeddial-icon-edit',
        items:items,
        target: '#target',
        cssClass:"e-success",
        position:'BottomRight',
        mode:'Radial'
        });
    bottomRight.appendTo('#btn9');
};
