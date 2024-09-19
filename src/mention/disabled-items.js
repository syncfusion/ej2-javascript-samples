
/**
 * Mention Disabled Item sample
 */

this.default = function () {
    // Initialize Mention component.
    var mentionObj = new ej.dropdowns.Mention({
        dataSource: window.emailData2,
        fields: { text: 'Name', disabled: 'State' },
        itemTemplate: '<div class="listItems"><img class="mentionEmpImage" src="src/mention/Employees/${Eimg}.png" alt="employee"/><span class="person">${Name}</span><span class="email">${EmailId}</span></div>',
        noRecordsTemplate: 'No item related to the search',
        displayTemplate: '${Name}',
        popupWidth: '250px',
        popupHeight: '200px'
    });
    mentionObj.appendTo('#disabledMention');
};