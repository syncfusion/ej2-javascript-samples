/**
 * ListView Call history Sample
 */

// tslint:disable-next-line:max-func-body-length
this.default = function () {
    if (!ej.base.Browser.isDevice.isDevice) {
        document.getElementsByClassName('layoutWrapper')[0].classList.add('e-device-layout');
    } else {
        document.getElementsByClassName('tabContainer')[0].classList.add('e-visbile-layer');
    }
    //Define an array of JSON data

    // Template of the list item
    var template = '<div class="e-list-wrapper e-list-avatar e-list-multi-line">' +
        '<span class="e-avatar e-icon"></span><span class="e-list-item-header">${text}</span> <span class="${type} e-list-content">' +
        '${group}, ${time}</span></div>';

    //Initialize ListView component
    var listObj1 = new ej.lists.ListView({
        // Set the datasource
        dataSource: window.callHistoryData,
        // Map the fields from the datasource into fields property
        fields: { text: 'text', groupBy: 'category' },
        cssClass: 'e-list-template',
        //Map the template for list items
        template: template,
    });
    listObj1.appendTo('#all');

    var listObj2 = new ej.lists.ListView({
        // Set the datasource
        dataSource: window.callHistoryData,
        // Map the fields from the datasource into fields property
        fields: { text: 'text', groupBy: 'category' },
        cssClass: 'e-list-template',
        //Map the template for list items
        template: template,
    });
    listObj2.appendTo('#received');

    var newData = [];

    var listObj3 = new ej.lists.ListView({
        // Set the datasource
        dataSource: window.callHistoryData,
        // Map the fields from the datasource into fields property
        fields: { text: 'text', groupBy: 'category' },
        cssClass: 'e-list-template',
        //Map the template for list items
        template: template,

    });
    listObj3.appendTo('#missed');

    // Method used to filter the dataSource based on the given arguments
    function filterData(dataSource, value) {
        var newData = [];
        dataSource.filter(function (data) {
            if ((data.id).indexOf(value) !== -1) {
                newData.push(data);
            }
        });
        return newData;
    }

    var types = ['', 'received', 'missed'];
    var listObjects = [listObj1, listObj2, listObj3];
    // Intialize Tab component
    var tabObj = new ej.navigations.Tab({
        items: [
            {
                header: { 'text': 'All' }, content: '#all'
            },
            {
                header: { 'text': 'Received' }, content: '#received'
            },
            {
                header: { 'text': 'Missed' }, content: '#missed'
            }
        ],
        selected: function (args) {
            var newData;
            newData = filterData(window.callHistoryData, types[args.selectedIndex]);
            listObjects[args.selectedIndex].dataSource = newData;
        }
    });
    tabObj.appendTo('#tab');
};
