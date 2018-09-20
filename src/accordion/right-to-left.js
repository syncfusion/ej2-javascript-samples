/**
 * Accordion RTL Sample
 */
this.default = function () {
    //Initialize Accordion component
    var accordion = new ej.navigations.Accordion({
        enableRtl: true,
        items: window.data
    });
    //Render initialized Accordion component
    accordion.appendTo('#Accordion_rtl');
};