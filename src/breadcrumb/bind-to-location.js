this.default = function() {
    new ej.navigations.Breadcrumb({ 
        enableNavigation: false
     }, '#bind-to-location');

     var url = 'https://ej2.syncfusion.com/javascript/demos/#/bootstrap5/breadcrumb/bind-to-location.html',
        themeName = url.split('/')[6];

    new ej.navigations.Breadcrumb({
        url: url,
        beforeItemRender: function(args) {
            if (args.item.text == 'demos') {
                args.item.url = args.item.url + '/#/' + themeName;
            }
            else if (args.item.text == 'breadcrumb') {
                args.item.url = 'https://ej2.syncfusion.com/javascript/demos/#/bootstrap5/breadcrumb/default.html';
            }
            else if (args.item.text == '#' || args.item.text == themeName || args.item.text == 'javascript') {
                args.cancel = true;
            }
        }
    }, '#url-binding');

    // To refresh Breadcrumb control state when reset button clicked
    new ej.buttons.Button({ cssClass: 'e-small' }, '#reset').element.onclick = function() {
        var breadcrumb, breadcrumbInst, breadcrumbs = document.querySelector('.content-wrapper').getElementsByClassName("e-breadcrumb");
        for (var i = 0; i < breadcrumbs.length; i++) {
            breadcrumb = breadcrumbs[i];
            breadcrumbInst = ej.base.getComponent(breadcrumb, 'breadcrumb');
            breadcrumbInst.activeItem = breadcrumbInst.items[breadcrumbInst.items.length - 1].text;
        }
    };
};
