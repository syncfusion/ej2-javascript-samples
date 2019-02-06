/**
 * Accordion Icon Sample
 */
this.default = function () {
    //Initialize Accordion component
    var accordion = new ej.navigations.Accordion({
       items: window.data
    });
    //Render initialized Accordion component
    accordion.appendTo('#Accordion_icon');
};