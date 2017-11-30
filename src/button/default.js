this.default = function() {
    var button = new ej.buttons.Button({ isPrimary: true });
    button.appendTo('#primarybtn');

    button = new ej.buttons.Button({});
    button.appendTo('#normalbtn');

    button = new ej.buttons.Button({ cssClass: 'e-outline', isPrimary: true });
    button.appendTo('#outlinebtn');

    button = new ej.buttons.Button({ cssClass: 'e-flat' });
    button.appendTo('#flatbtn');

    button = new ej.buttons.Button({ cssClass: 'e-success'  });
    button.appendTo('#successbtn');

    button = new ej.buttons.Button({ cssClass: 'e-warning' });
    button.appendTo('#warningbtn');

    button = new ej.buttons.Button({ cssClass: 'e-danger' });
    button.appendTo('#dangerbtn');

    button = new ej.buttons.Button({ cssClass: 'e-info' });
    button.appendTo('#infobtn');

    button = new ej.buttons.Button({ iconCss: 'e-icons e-add-icon', cssClass: 'e-small e-round', isPrimary: true });
    button.appendTo('#roundbtn');

    var toggleBtn = new ej.buttons.Button({ iconCss: 'e-icons e-play-icon', cssClass: 'e-flat', isToggle: true });
    toggleBtn.appendTo('#togglebtn');

    button = new ej.buttons.Button({ iconCss: 'e-icons e-open-icon', cssClass: 'e-flat', iconPosition: 'right' });
    button.appendTo('#openiconbtn');

    button = new ej.buttons.Button({});
    button.appendTo('#smallbtn');

    //Toggle button click event handler
    toggleBtn.element.onclick = function () {
        if (toggleBtn.element.classList.contains('e-active')) {
            toggleBtn.content = 'Pause';
            toggleBtn.iconCss = 'e-icons e-pause-icon';
        } else {
            toggleBtn.content = 'Play';
            toggleBtn.iconCss = 'e-icons e-play-icon';
        }
    };  
};