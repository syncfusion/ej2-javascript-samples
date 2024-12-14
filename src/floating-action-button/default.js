this.default = function () {
    //Icon and isPrimary is false
    var fabObj1 = new ej.buttons.Fab({
        iconCss: 'e-icons e-people',
        position:'MiddleCenter',
        isPrimary: false,
        target: '#target1'
    });
    fabObj1.appendTo('#fab1');

    //Icon with Label
    var fabObj3 = new ej.buttons.Fab({
        iconCss: 'e-icons e-people',
        position:'MiddleCenter',
        content: "Contact",
        target: '#target2'
    });
    fabObj3.appendTo('#fab2');

    //Icon with Disabled true
    var fabObj2 = new ej.buttons.Fab({
        content: 'Disabled',
        disabled: true,
        position:'MiddleCenter',
        iconCss: 'e-icons e-people',
        target: '#target3',
    });
    fabObj2.appendTo('#fab3');

    //Label only
    var fabObj4 = new ej.buttons.Fab({
        content: 'Text Content',
        position:'MiddleCenter',
        cssClass: 'e-warning',
        target: '#target4'
    });
    fabObj4.appendTo('#fab4');
};