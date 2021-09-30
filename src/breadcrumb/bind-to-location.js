this.default = function() {
    new ej.navigations.Breadcrumb({ 
        enableNavigation: false
     }, '#bind-to-location');

    new ej.navigations.Breadcrumb({
        enableNavigation: false, 
        url: "https://ej2.syncfusion.com/javascript/demos/breadcrumb/navigation" 
    }, '#url-binding');
};
