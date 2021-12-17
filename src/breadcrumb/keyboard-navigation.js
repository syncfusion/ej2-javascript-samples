this.default = function() {
    new ej.navigations.Breadcrumb({
        enableNavigation: false
     }, '#keyboard-navigation');

     // To refresh Breadcrumb control state when reset button clicked
     new ej.buttons.Button({ cssClass: 'e-small' }, '#reset').element.onclick = function() {
        var breadcrumb = document.getElementById('keyboard-navigation');
        var breadcrumbInst = ej.base.getComponent(breadcrumb, 'breadcrumb');
        breadcrumbInst.activeItem = breadcrumbInst.items[breadcrumbInst.items.length - 1].text;
    };
};
