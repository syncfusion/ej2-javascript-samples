this.default = function () {
    //Render Button components
    var zoom = new ej.buttons.Button({ cssClass: 'e-outline', isPrimary: true });
    zoom.appendTo('#Zoom');
    var flipXDown = new ej.buttons.Button({ cssClass: 'e-outline', isPrimary: true });
    flipXDown.appendTo('#FlipXDown');
    var flipXUp = new ej.buttons.Button({ cssClass: 'e-outline', isPrimary: true });
    flipXUp.appendTo('#FlipXUp');
    var flipYLeft = new ej.buttons.Button({ cssClass: 'e-outline', isPrimary: true });
    flipYLeft.appendTo('#FlipYLeft');
    var flipYRight = new ej.buttons.Button({ cssClass: 'e-outline', isPrimary: true });
    flipYRight.appendTo('#FlipYRight');
    ej.base.enableRipple(true);
    // Initialization of Dialog component
    var dialog = new ej.popups.Dialog({
        // Enables the header
        header: 'Animation Dialog',
        // Enables the close icon button in header
        showCloseIcon: true,
        // Dialog content
        content: '<span>The dialog is configured with animation effect. It is opened or closed with "Zoom In or Out" animation.</span>',
        // The Dialog shows within the target element
        target: document.getElementById("target"),
        width: '285px',
        isModal: true,
        animationSettings: { effect: 'Zoom' },
        buttons: [{
                click: dlgButtonClick,
                buttonModel: { content: 'Hide', isPrimary: true }
            }],
    });
    // Render initialized Dialog
    dialog.appendTo('#dialog');

    function dlgButtonClick() {
        dialog.hide();
    }
    var list = document.getElementsByClassName('btn-animate');
    var animationfn = function (index) {
        return function () {
            var effects = list[index].id;
            var txt = list[index].parentElement.innerText;
            txt = (txt == "Zoom In/Out") ? "Zoom In or Out" : txt;
            dialog.content = 'The dialog is configured with animation effect. It is opened or closed with "' + txt + '" animation.';
            dialog.animationSettings = { effect: effects, duration: 400 };
            dialog.show();
        };
    };

    for (var i = 0; i < list.length; i++) {
        list[i].addEventListener('click', animationfn(i));
    }
};