this.default = function() {

    //Primary
    var fabObj1 = new ej.buttons.Fab({
        iconCss: 'fab-icons fab-icon-shopping',
        position: 'BottomCenter',
        target: '#target1',
    });
    fabObj1.appendTo('#fab1');

    //Normal
    var fabObj2= new ej.buttons.Fab({
        iconCss: 'fab-icons fab-icon-shopping',
        isPrimary: false,
        position: 'BottomCenter',
        target: '#target2',
    });
    fabObj2.appendTo('#fab2');

    //Outline
    var fabObj3= new ej.buttons.Fab({
        iconCss: 'fab-icons fab-icon-shopping',
        cssClass: 'e-outline',
        position: 'BottomCenter',
        target: '#target3',
    });
    fabObj3.appendTo('#fab3');

    //Success
    var fabObj4= new ej.buttons.Fab({
        iconCss: 'fab-icons fab-icon-shopping',
        cssClass: 'e-success',
        position: 'BottomCenter',
        target: '#target4',
    });
    fabObj4.appendTo('#fab4');

    //Warning
    var fabObj5= new ej.buttons.Fab({
        iconCss: 'fab-icons fab-icon-shopping',
        cssClass: 'e-warning',
        position: 'BottomCenter',
        target: '#target5',
    });
    fabObj5.appendTo('#fab5');

    //Danger
    var fabObj6= new ej.buttons.Fab({
        iconCss: 'fab-icons fab-icon-shopping',
        cssClass: 'e-danger',
        position: 'BottomCenter',
        target: '#target6',
    });
    fabObj6.appendTo('#fab6');

    //Info
    var fabObj7= new ej.buttons.Fab({
        iconCss: 'fab-icons fab-icon-shopping',
        cssClass: 'e-info',
        position: 'BottomCenter',
        target: '#target7',
    });
    fabObj7.appendTo('#fab7');

    //On hover
    var fabObj8= new ej.buttons.Fab({
        iconCss: 'fab-icons fab-icon-shopping',
        position: 'BottomCenter',
        content:'<span class="text-container"><span class="textEle">Shopping</span></span>',
        cssClass: 'fab-hover',
        target: '#target8',
    });
    fabObj8.appendTo('#fab8');

};