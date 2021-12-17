this.default = function () {
    var overflowItems = [
        {
            text: "Home",
            url: "./"
        },
        {
            text: "Breadcrumb",
            url: "./breadcrumb"
        },
        {
            text: "Default",
            url: "./breadcrumb/default"
        },
        {
            text: "Icons",
            url: "./breadcrumb/icons"
        },
        {
            text: "Navigation",
            url: "./breadcrumb/navigation"
        },
        {
            text: "Overflow",
            url: "./breadcrumb/overflow"
        }
    ];

    new ej.navigations.Breadcrumb({
        items: overflowItems,
        maxItems: 3,
        overflowMode: 'Hidden',
        enableNavigation: false
    }, '#default-mode');

    new ej.navigations.Breadcrumb({
        items: overflowItems,
        maxItems: 3,
        overflowMode: 'Menu',
        enableNavigation: false
    }, '#menu-mode');

    new ej.navigations.Breadcrumb({
        items: overflowItems,
        maxItems: 3,
        overflowMode: 'Collapsed',
        enableNavigation: false
    }, '#collapsed-mode');

    new ej.navigations.Breadcrumb({
        items: overflowItems,
        overflowMode: 'Wrap',
        enableNavigation: false
    }, '#wrap-mode');

    new ej.navigations.Breadcrumb({
        items: overflowItems,
        overflowMode: 'Scroll',
        enableNavigation: false
    }, '#scroll-mode');

    // To refresh all Breadcrumb control state when reset button clicked
    new ej.buttons.Button({ cssClass: 'e-small' }, '#reset').element.onclick = function() {
        var breadcrumb, breadcrumbInst, breadcrumbs = document.querySelector('.content-wrapper').getElementsByClassName("e-breadcrumb");
        for (var j = 0; j < breadcrumbs.length; j++) {
            breadcrumb = breadcrumbs[j];
            breadcrumbInst = ej.base.getComponent(breadcrumb, 'breadcrumb');
            breadcrumbInst.activeItem = breadcrumbInst.items[breadcrumbInst.items.length - 1].text;
        }
    };
};