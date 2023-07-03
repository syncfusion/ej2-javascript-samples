/**
 * Accordion Fetch Sample
 */
var acrdnObj,nestAcrdn;
this.default = function () {
    var fetchApi = new ej.base.Fetch('./src/accordion/fetch-content.html', 'GET');
    fetchApi.send().then();
    fetchApi.onSuccess = function (data) {
        //Initialize Accordion component
        acrdnObj = new ej.navigations.Accordion({
            expandMode: 'Single',
            expanding: expand,
            items: [
                { header: 'Network & Connectivity', content: data, expanded: true },
                { header: 'Feature', content: '<div id="nested_Acc"></div>' },
                { header: 'Hardware & Software', content: '#Hard_Soft_features' }
            ]
        });
        //Render initialized Accordion component
        acrdnObj.appendTo('#Accordion_Nested');
    };
};
//Expanding Event function for Accordion component.
function expand(e) {
    if (e.isExpanded && [].indexOf.call(this.items, e.item) === 1) {
        if (e.element.querySelectorAll('.e-accordion').length > 0) {
            return;
        }
        //Initialize Nested Accordion component
        nestAcrdn = new ej.navigations.Accordion({
            expandMode: 'Single',
            items: [
                { header: 'Sensor', content: '#Sensor_features' },
                { header: 'Camera', content: '#Camera_features' },
                { header: 'Video Recording', content: '#Video_Rec_features' },
            ]
        });
        //Render initialized Nested Accordion component
        nestAcrdn.appendTo('#nested_Acc');
    }
}


   