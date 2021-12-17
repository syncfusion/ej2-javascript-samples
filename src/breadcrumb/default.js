this.default = function () {
    var items = [
        {
            iconCss: 'e-icons e-home',
            url: "https://ej2.syncfusion.com/javascript/demos",
        },
        {
            text: "Components",
            url: "https://ej2.syncfusion.com/javascript/demos/#/material/grid/grid-overview",
        },
        {
            text: "Navigations",
            url: "https://ej2.syncfusion.com/javascript/demos/#/material/grid/menu/default",
        },
        {
            text: "Breadcrumb",
            url: "./breadcrumb/default",
        }
    ];

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

    var activeItems = [
        {
            iconCss: 'e-icons e-home',
            url: "https://ej2.syncfusion.com/javascript/demos",
        },
        {
            text: "All Components",
            url: "https://ej2.syncfusion.com/javascript/demos/#/material/grid/grid-overview",
        },
        {
            text: "Breadcrumb",
            url: "./breadcrumb/default",
        }
    ];

    new ej.navigations.Breadcrumb({ 
        items: items,
        enableNavigation: false
    }, '#default');

    new ej.navigations.Breadcrumb({
        items: overflowItems,
        enableNavigation: false,
        maxItems: 3,
        separatorTemplate: '<span class="e-bicons e-arrow"></span>'
    }, '#overflow');

    new ej.navigations.Breadcrumb({
        items: activeItems,
        enableNavigation: false,
        enableActiveItemNavigation: true
    }, '#active-item');

    // To refresh all Breadcrumb control state when reset button clicked
    new ej.buttons.Button({ cssClass: 'e-small' }, '#reset').element.onclick = function() {
        var breadcrumb, breadcrumbObj, breadcrumbs = document.querySelector('.content-wrapper').getElementsByClassName("e-breadcrumb");
        for (var i = 0; i < breadcrumbs.length; i++) {
            breadcrumb = breadcrumbs[i];
            breadcrumbObj = ej.base.getComponent(breadcrumb, 'breadcrumb');
            breadcrumbObj.activeItem = breadcrumbObj.items[breadcrumbObj.items.length - 1].text;
        }
    };
};
