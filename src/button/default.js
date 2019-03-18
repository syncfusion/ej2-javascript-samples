this.default = function() {
    var button = new ej.buttons.Button({ isPrimary: true });
    button.appendTo('#primarybtn');

    button = new ej.buttons.Button({});
    button.appendTo('#normalbtn');

    button = new ej.buttons.Button({ cssClass: 'e-outline', isPrimary: true });
    button.appendTo('#outlinebtn');

    button = new ej.buttons.Button({ cssClass: 'e-flat e-primary' });
    button.appendTo('#flatbtn');

    button = new ej.buttons.Button({ cssClass: 'e-success'  });
    button.appendTo('#successbtn');

    button = new ej.buttons.Button({ cssClass: 'e-warning' });
    button.appendTo('#warningbtn');

    button = new ej.buttons.Button({ cssClass: 'e-danger' });
    button.appendTo('#dangerbtn');

    button = new ej.buttons.Button({ cssClass: 'e-info' });
    button.appendTo('#infobtn');

    button = new ej.buttons.Button({ iconCss: 'e-btn-sb-icons e-add-icon', cssClass: 'e-small e-round', isPrimary: true });
    button.appendTo('#roundbtn');

    var toggleBtn = new ej.buttons.Button({ iconCss: 'e-btn-sb-icons e-play-icon', cssClass: 'e-flat e-primary', isToggle: true });
    toggleBtn.appendTo('#togglebtn');

    button = new ej.buttons.Button({ iconCss: 'e-btn-sb-icons e-open-icon', cssClass: 'e-flat e-primary', iconPosition: 'Right' });
    button.appendTo('#openiconbtn');

    button = new ej.buttons.Button({ cssClass: 'e-small'});
    button.appendTo('#smallbtn');

    // Toggle button click event handler
    toggleBtn.element.onclick = function () {
        if (toggleBtn.element.classList.contains('e-active')) {
            toggleBtn.content = 'Pause';
            toggleBtn.iconCss = 'e-btn-sb-icons e-pause-icon';
        } else {
            toggleBtn.content = 'Play';
            toggleBtn.iconCss = 'e-btn-sb-icons e-play-icon';
        }
    };  
};