/**
 *  Sample for CSS Accordion Integration
 */

this.default = function () {

    var template = '<div><ul><li class="msg"><span class="e-acrdn-icons e-content-icon people">' +
        '</span>Message Thread</li><li class="msg"><span class="e-acrdn-icons e-content-icon people"></span>Message Thread</li></ul></div>';
    
    var headercontent1 = '<span>Robert</span><span class="e-badge e-badge-success">7 New</span>';
    var headercontent2 = '<span>Kevin</span><span class="e-badge e-badge-success">27 New</span>';
    var headercontent3 = '<span>Eric</span><span class="e-badge e-badge-success">2 New</span>';
    var headercontent4 = '<span>Peter</span><span class="e-badge e-badge-success">14 New</span>';
                
    //Initialize Accordion component
    var acrdnObj = new ej.navigations.Accordion({
        // Assigning accordion data 
        items: [
            { header: headercontent1, iconCss: 'e-people e-acrdn-icons ', content: template, expanded: true },
            { header: headercontent2, iconCss: 'e-people e-acrdn-icons', content: template },
            { header: headercontent3, iconCss: 'e-people e-acrdn-icons', content: template },
            { header: headercontent4, iconCss: 'e-people e-acrdn-icons', content: template }
        ],
    });
    //Render initialized Accordion component
    acrdnObj.appendTo('#accordion');
};
