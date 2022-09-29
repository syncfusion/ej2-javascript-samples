this.default = function () {
    var defaultAppBarObj = new ej.navigations.AppBar({
        colorMode: 'Primary'
    });
    defaultAppBarObj.appendTo('#defaultAppBar');

    var defaultButtonMenuObj = new ej.buttons.Button({ cssClass: 'e-inherit menu', iconCss: 'e-icons e-menu' });
    defaultButtonMenuObj.appendTo('#defaultButtonMenu');

    defaultButtonMenuObj.element.setAttribute("aria-label", "menu");

    var defaultButtonLoginObj = new ej.buttons.Button({ cssClass: 'e-inherit login', content: 'FREE TRIAL' });
    defaultButtonLoginObj.appendTo('#defaultButtonLogin');

    var prominentAppBarObj = new ej.navigations.AppBar({
        cssClass: 'prominent-appbar',
        colorMode: 'Primary',
        mode: 'Prominent'
    });
    prominentAppBarObj.appendTo('#prominentAppBar');

    var prominentButtonMenuObj = new ej.buttons.Button({ cssClass: 'e-inherit menu', iconCss: 'e-icons e-menu' });
    prominentButtonMenuObj.appendTo('#prominentButtonMenu');

    prominentButtonMenuObj.element.setAttribute("aria-label", "menu");

    var prominentButtonLoginObj = new ej.buttons.Button({ cssClass: 'e-inherit login', content: 'FREE TRIAL' });
    prominentButtonLoginObj.appendTo('#prominentButtonLogin');

    var denseAppBarObj = new ej.navigations.AppBar({
        colorMode: 'Primary',
        mode: 'Dense'
    });
    denseAppBarObj.appendTo('#denseAppBar');

    var denseButtonMenuObj = new ej.buttons.Button({ cssClass: 'e-inherit menu', iconCss: 'e-icons e-menu' });
    denseButtonMenuObj.appendTo('#denseButtonMenu');

    denseButtonMenuObj.element.setAttribute("aria-label", "menu");

    var denseButtonLoginObj = new ej.buttons.Button({ cssClass: 'e-inherit login', content: 'FREE TRIAL' });
    denseButtonLoginObj.appendTo('#denseButtonLogin');
};