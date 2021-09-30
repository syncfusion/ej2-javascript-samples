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
            url: "../"
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
};
