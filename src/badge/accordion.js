/**
 *  Sample for CSS Accordion Integration
 */

this.default = function () {
    // Assigning badge data
    var badgeContent = ['7 New', '27 New', '2 New', '14 New'];

    var template = '<div><li class="msg"><span class="e-acrdn-icons e-content-icon people">' +
        '</span>Message Thread</li><li class="msg"><span class="e-acrdn-icons e-content-icon people"></span>Message Thread</li></div>';
    //Initialize Accordion component
    var acrdnObj = new ej.navigations.Accordion({
        // Assigning accordion data 
        items: [
            { header: 'Robert', iconCss: 'e-people e-acrdn-icons', content: template, expanded: true },
            { header: 'Kevin', iconCss: 'e-people e-acrdn-icons', content: template },
            { header: 'Eric', iconCss: 'e-people e-acrdn-icons', content: template },
            { header: 'Peter', iconCss: 'e-people e-acrdn-icons', content: template }
        ],
        created: function () {
            // Appending Badge component after the accordion rendered in created event
            var element = document.getElementById('accordion');
            var iconElement = Array.prototype.slice.call((element).querySelectorAll('.e-toggle-icon'));
            for (var i = 0; i < iconElement.length; i++) {
                // Success Badge Element
                var badge = ej.base.createElement('span', { className: 'e-badge e-badge-success' });
                badge.textContent = badgeContent[i];
                iconElement[i].appendChild(badge);
            }
        }
    });
    //Render initialized Accordion component
    acrdnObj.appendTo('#accordion');
};