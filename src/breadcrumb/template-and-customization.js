this.default = function () {
    var items = [
        {
            text: "Cart"
        },
        {
            text: "Billing"
        },
        {
            text: "Shipping"
        },
        {
            text: "Payment"
        }
    ];
    var iconItems = [
        {
            text: "Program Files",
            iconCss: "e-bicons e-folder"
        },
        {
            text: "Commom Files",
            iconCss: "e-bicons e-folder"
        },
        {
            text: "Services",
            iconCss: "e-bicons e-folder"
        },
        {
            text: "Config.json",
            iconCss: "e-bicons e-file"
        }
    ];

    var specificTemplateItems = [
        {
            text: "Home",
            url: "https://ej2.syncfusion.com/demos",
        },
        {
            text: "Components",
            url: "https://ej2.syncfusion.com/demos/#/material/grid/grid-overview",
        },
        {
            text: "Navigations",
            url: "https://ej2.syncfusion.com/demos/#/material/menu/default",
        },
        {
            text: "Breadcrumb",
            url: "./breadcrumb/default",
        }
    ];

    new ej.navigations.Breadcrumb({
        items: items,
        cssClass: 'e-breadcrumb-chips',
        itemTemplate: '#chipTemplate'
    }, '#item-template');

    new ej.navigations.Breadcrumb({
        items: specificTemplateItems,
        itemTemplate: '#specificItemTemplate',
        cssClass: 'e-specific-item-template'
    }, '#specific-item-template');

    new ej.navigations.Breadcrumb({
        items: items,
        separatorTemplate: '<span class="e-icons e-arrow"></span>'
    }, '#separator-template');

    new ej.navigations.Breadcrumb({
        items: items,
        cssClass: 'e-custom-breadcrumb',
        itemTemplate: '#customTemplate',
        separatorTemplate: '<div class="e-custom-separator"></div>'
    }, '#both-template');

    new ej.navigations.Breadcrumb({
        items: iconItems
    }, '#icons');

    new ej.navigations.Breadcrumb({
        items: iconItems,
        beforeItemRender: function(args) {
            if(args.item.text !== 'Program Files') {
                args.item.disabled = true;
            }
        }
    }, '#disabled');

    // To refresh all Breadcrumb control state when reset button clicked
    new ej.buttons.Button({ cssClass: 'e-small' }, '#reset').element.onclick = function() {
        var breadcrumb, breadcrumbInst, breadcrumbs = document.querySelector('.content-wrapper').getElementsByClassName("e-breadcrumb");
        for (var k = 0; k < breadcrumbs.length; k++) {
            breadcrumb = breadcrumbs[k];
            breadcrumbInst = ej.base.getComponent(breadcrumb, 'breadcrumb');
            breadcrumbInst.activeItem = breadcrumbInst.items[breadcrumbInst.items.length - 1].text;
        }
    };
};
