
this.default = function () {
    // define the array of data
    var autoCompleteRecords = [];
    for (var i = 1; i <= 150; i++) {
        var autoItem = {};
        autoItem.id = 'id' + i;
        autoItem.text = "Item ".concat(i);
        var randomGroup = Math.floor(Math.random() * 4) + 1;
        switch (randomGroup) {
            case 1:
                autoItem.group = 'Group A';
                break;
            case 2:
                autoItem.group = 'Group B';
                break;
            case 3:
                autoItem.group = 'Group C';
                break;
            case 4:
                autoItem.group = 'Group D';
                break;
            default:
                break;
        }
        autoCompleteRecords.push(autoItem);
    }

    // initialize AutoComplete component
    var localObj = new ej.dropdowns.AutoComplete({
        //set the data to dataSource property
        dataSource: autoCompleteRecords,
        //enable the virtualization property
        enableVirtualization: true,
        popupHeight: '200px',
        fields: { value: 'text' },
        // set the placeholder to AutoComplete input element
        placeholder: 'e.g. Item 1'
    });
    localObj.appendTo('#local');
    var remoteObj = new ej.dropdowns.AutoComplete({
        dataSource: new ej.data.DataManager({
            url: 'https://services.syncfusion.com/js/production/api/VirtualDropdownData',
            adaptor: new ej.data.UrlAdaptor(),
            crossDomain: true
        }),
        fields: { value: 'OrderID' },
        enableVirtualization: true,
        popupHeight: '200px',
        placeholder: 'OrderID'
    });
    remoteObj.appendTo('#remote');
    var groupObj = new ej.dropdowns.AutoComplete({
        dataSource: autoCompleteRecords,
        enableVirtualization: true,
        popupHeight: '200px',
        fields: { groupBy: 'group', value: 'text'},
        placeholder: 'e.g. Item 1'
    });
    groupObj.appendTo('#group');
};