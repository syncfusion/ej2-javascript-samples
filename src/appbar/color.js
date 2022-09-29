this.default = function () {
    var productDropDownButtonItems = [
        { text: 'Developer' },
        { text: 'Analytics' },
        { text: 'Reporting' },
        { text: 'E-Signature' },
        { text: 'Help Desk' }
    ];

    var companyDropDownButtonItems = [
        { text: 'About Us' },
        { text: 'Customers' },
        { text: 'Blog' },
        { text: 'Careers' }
    ];

    var verticalMenuItems = [
        {
            iconCss: 'e-icons e-more-vertical-1',
            items: [
                { text: 'Home' },
                {
                    text: 'Products',
                    items: [
                        { text: 'Developer' },
                        { text: 'Analytics' },
                        { text: 'Reporting' },
                        { text: 'E-Signature' },
                        { text: 'Help Desk' }
                    ]
                },
                {
                    text: 'Company',
                    items: [
                        { text: 'About Us' },
                        { text: 'Customers' },
                        { text: 'Blog' },
                        { text: 'Careers' }
                    ]
                },
                { text: 'Login' }
            ]
        }
    ];

    var lightAppBarObj = new ej.navigations.AppBar({
        colorMode: 'Light'
    });
    lightAppBarObj.appendTo('#lightAppBar');

    var lightButtonMenuObj = new ej.buttons.Button({ cssClass: 'e-inherit menu', iconCss: 'e-icons e-menu' });
    lightButtonMenuObj.appendTo('#lightButtonMenu');

    lightButtonMenuObj.element.setAttribute("aria-label", "menu");

    var lightButtonHomeObj = new ej.buttons.Button({ cssClass: 'e-inherit home e-appbar-menu', content: 'Home' });
    lightButtonHomeObj.appendTo('#lightButtonHome');

    var lightProductDropDownButtonObj = new ej.splitbuttons.DropDownButton({ cssClass: 'e-inherit e-light e-appbar-menu', items: productDropDownButtonItems });
    lightProductDropDownButtonObj.appendTo('#lightProductDropDownButton');

    var lightCompanyDropDownButtonObj = new ej.splitbuttons.DropDownButton({ cssClass: 'e-inherit e-light e-appbar-menu', items: companyDropDownButtonItems });
    lightCompanyDropDownButtonObj.appendTo('#lightCompanyDropDownButton');

    var lightButtonLoginObj = new ej.buttons.Button({ isPrimary: true, cssClass: 'login', content: 'Login' });
    lightButtonLoginObj.appendTo('#lightButtonLogin');

    var lightVerticalMenuObj = new ej.navigations.Menu({ cssClass: 'e-inherit e-light e-appbar-icon-menu', items: verticalMenuItems, beforeItemRender: itemRender });
    lightVerticalMenuObj.appendTo('#lightVerticalMenu');

    var darkAppBarObj = new ej.navigations.AppBar({
        colorMode: 'Dark'
    });
    darkAppBarObj.appendTo('#darkAppBar');

    var darkButtonMenuObj = new ej.buttons.Button({ cssClass: 'e-inherit menu', iconCss: 'e-icons e-menu' });
    darkButtonMenuObj.appendTo('#darkButtonMenu');

    darkButtonMenuObj.element.setAttribute("aria-label", "menu");

    var darkButtonHomeObj = new ej.buttons.Button({ cssClass: 'e-inherit home e-appbar-menu', content: 'Home' });
    darkButtonHomeObj.appendTo('#darkButtonHome');

    var darkProductDropDownButtonObj = new ej.splitbuttons.DropDownButton({ cssClass: 'e-inherit e-dark e-appbar-menu', items: productDropDownButtonItems });
    darkProductDropDownButtonObj.appendTo('#darkProductDropDownButton');

    var darkCompanyDropDownButtonObj = new ej.splitbuttons.DropDownButton({ cssClass: 'e-inherit e-dark e-appbar-menu', items: companyDropDownButtonItems });
    darkCompanyDropDownButtonObj.appendTo('#darkCompanyDropDownButton');

    var darkButtonLoginObj = new ej.buttons.Button({ cssClass: 'e-inherit login', content: 'Login' });
    darkButtonLoginObj.appendTo('#darkButtonLogin');

    var darkVerticalMenuObj = new ej.navigations.Menu({ cssClass: 'e-inherit e-dark e-appbar-icon-menu', items: verticalMenuItems, beforeItemRender: itemRender });
    darkVerticalMenuObj.appendTo('#darkVerticalMenu');

    var primaryAppBarObj = new ej.navigations.AppBar({
        colorMode: 'Primary'
    });
    primaryAppBarObj.appendTo('#primaryAppBar');

    var primaryButtonMenuObj = new ej.buttons.Button({ cssClass: 'e-inherit menu', iconCss: 'e-icons e-menu' });
    primaryButtonMenuObj.appendTo('#primaryButtonMenu');

    primaryButtonMenuObj.element.setAttribute("aria-label", "menu");

    var primaryButtonHomeObj = new ej.buttons.Button({ cssClass: 'e-inherit home e-appbar-menu', content: 'Home' });
    primaryButtonHomeObj.appendTo('#primaryButtonHome');

    var primaryProductDropDownButtonObj = new ej.splitbuttons.DropDownButton({ cssClass: 'e-inherit e-primary e-appbar-menu', items: productDropDownButtonItems });
    primaryProductDropDownButtonObj.appendTo('#primaryProductDropDownButton');

    var primaryCompanyDropDownButtonObj = new ej.splitbuttons.DropDownButton({ cssClass: 'e-inherit e-primary e-appbar-menu', items: companyDropDownButtonItems });
    primaryCompanyDropDownButtonObj.appendTo('#primaryCompanyDropDownButton');

    var primaryButtonLoginObj = new ej.buttons.Button({ cssClass: 'e-inherit login', content: 'Login' });
    primaryButtonLoginObj.appendTo('#primaryButtonLogin');

    var primaryVerticalMenuObj = new ej.navigations.Menu({ cssClass: 'e-inherit e-primary e-appbar-icon-menu', items: verticalMenuItems, beforeItemRender: itemRender });
    primaryVerticalMenuObj.appendTo('#primaryVerticalMenu');

    var inheritAppBarObj = new ej.navigations.AppBar({
        colorMode: 'Inherit'
    });
    inheritAppBarObj.appendTo('#inheritAppBar');

    var inheritButtonMenuObj = new ej.buttons.Button({ cssClass: 'e-inherit menu', iconCss: 'e-icons e-menu' });
    inheritButtonMenuObj.appendTo('#inheritButtonMenu');

    inheritButtonMenuObj.element.setAttribute("aria-label", "menu");

    var inheritButtonHomeObj = new ej.buttons.Button({ cssClass: 'e-inherit home e-appbar-menu', content: 'Home' });
    inheritButtonHomeObj.appendTo('#inheritButtonHome');

    var inheritProductDropDownButtonObj = new ej.splitbuttons.DropDownButton({ cssClass: 'e-inherit e-appbar-menu', items: productDropDownButtonItems });
    inheritProductDropDownButtonObj.appendTo('#inheritProductDropDownButton');

    var inheritCompanyDropDownButtonObj = new ej.splitbuttons.DropDownButton({ cssClass: 'e-inherit e-appbar-menu', items: companyDropDownButtonItems });
    inheritCompanyDropDownButtonObj.appendTo('#inheritCompanyDropDownButton');

    var inheritButtonLoginObj = new ej.buttons.Button({ isPrimary: true, cssClass: 'login', content: 'Login' });
    inheritButtonLoginObj.appendTo('#inheritButtonLogin');

    var inheritVerticalMenuObj = new ej.navigations.Menu({ cssClass: 'e-inherit e-appbar-icon-menu', items: verticalMenuItems, beforeItemRender: itemRender });
    inheritVerticalMenuObj.appendTo('#inheritVerticalMenu');

    var inputElement = document.querySelectorAll('.color-appbar-section .e-input-group .e-input');

    for (var i = 0; i < inputElement.length; i++) {
        inputElement[i].addEventListener("focus", function () {
            var parentElement = this.parentNode;
            if (parentElement.classList.contains('e-input-in-wrap')) {
                parentElement.parentNode.classList.add('e-input-focus');
            } else {
                this.parentNode.classList.add('e-input-focus');
            }
        });
        inputElement[i].addEventListener("blur", function () {
            var parentElement = this.parentNode;
            if (parentElement.classList.contains('e-input-in-wrap')) {
                parentElement.parentNode.classList.remove('e-input-focus');
            } else {
                this.parentNode.classList.remove('e-input-focus');
            }
        });
    }
    function itemRender(args) {
        if (args.element.children.length > 0 && args.element.children[0].classList.contains("e-more-vertical-1")) {
            args.element.setAttribute('aria-label', 'more vertical');
        }
    }
};