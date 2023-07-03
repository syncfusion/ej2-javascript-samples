
/**
 * Mention multiple-list sample
 */

this.default = function () {
    // Initialize Mention component.
    var mentionOdataObj = new ej.dropdowns.Mention({
        mentionChar: '@',
        dataSource: new ej.data.DataManager({
            url: 'https://services.syncfusion.com/js/production/api/Employees',
            adaptor: new ej.data.WebApiAdaptor(),
            crossDomain: true
        }),
        query: new ej.data.Query().select(['FirstName', 'EmployeeID']).requiresCount(),
        suggestionCount: 15,
        popupWidth: '250px',
        popupHeight : '250px',
        fields: { text: 'FirstName', value: 'FirstName' },
        allowSpaces: true
    });
    mentionOdataObj.appendTo('#multipleList');

    var mentionProjectObj = new ej.dropdowns.Mention({
        mentionChar: '#',
        dataSource: window.projects,
        fields: { text: 'Value' },
        displayTemplate: '<span class="e-success">${Value}</span>',
    });
    mentionProjectObj.appendTo('#multipleList');

    var mentionUserObj = new ej.dropdowns.Mention({
        mentionChar: '$',
        dataSource: window.useCosts,
        fields: { text: 'Value' },
        displayTemplate: '<span class="e-error">${Value}</span>',
    });
    mentionUserObj.appendTo('#multipleList');

    var mentionStatusObj = new ej.dropdowns.Mention({
        mentionChar: '%',
        dataSource: window.jirastatus,
        fields: { text: 'Value' },
        displayTemplate: '<span class="e-warning">${Value}</span>',
    });
    mentionStatusObj.appendTo('#multipleList');
};
