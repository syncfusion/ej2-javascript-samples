/**
 *  Sample for basic ButtonGroup.
 */

this.default = function() {
    var buttonElement = new ej.buttons.Button({iconCss: 'bg-icons e-btngrp-watch'});
    buttonElement.appendTo('#watch');

    buttonElement = new ej.buttons.Button({iconCss: 'bg-icons e-btngrp-star'});
    buttonElement.appendTo('#star');

    buttonElement = new ej.buttons.Button({iconCss: 'bg-icons e-btngrp-download'});
    buttonElement.appendTo('#download');

    // To enable ripple in checkbox/radio type ButtonGroup.
    var buttons = document.querySelectorAll('label.e-btn'), button;
    for (var i = 0; i < buttons.length; i++) {
        button = buttons.item(i);
        ej.base.rippleEffect(button, { selector: '.e-btn' });
    }
};
