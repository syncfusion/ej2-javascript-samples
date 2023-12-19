
this.default = function () {
    // define the array of data
    var ComboBoxRecords = [];
    for (var i = 1; i <= 150; i++) {
        var comboItem = {};
        comboItem.id = 'id' + i;
        comboItem.text = "Item ".concat(i);
        var randomGroup = Math.floor(Math.random() * 4) + 1;
        switch (randomGroup) {
            case 1:
                comboItem.group = 'Group A';
                break;
            case 2:
                comboItem.group = 'Group B';
                break;
            case 3:
                comboItem.group = 'Group C';
                break;
            case 4:
                comboItem.group = 'Group D';
                break;
            default:
                break;
        }
        ComboBoxRecords.push(comboItem);
    }
    var remoteComboData = new ej.data.DataManager({
        url: 'https://services.syncfusion.com/js/production/api/orders',
        adaptor: new ej.data.WebApiAdaptor(),
        crossDomain: true
    });
    var remoteComboFields = { text: 'OrderID', value: 'OrderID' };
    // initialize ComboBox component
    var localObj = new ej.dropdowns.ComboBox({
        //set the data to dataSource property
        dataSource: ComboBoxRecords,
        //enable the virtualization property
        enableVirtualization: true,
        popupHeight: '200px',
        allowFiltering: true,
        fields: { text: 'text', value: 'id' },
        // set the placeholder to ComboBox input element
        placeholder: 'e.g. Item 1'
    });
    localObj.appendTo('#local');
    var remoteObj = new ej.dropdowns.ComboBox({
        dataSource: remoteComboData,
        fields: remoteComboFields,
        enableVirtualization: true,
        allowFiltering: true,
        popupHeight: '200px',
        placeholder: 'OrderID'
    });
    remoteObj.appendTo('#remote');
    var groupObj = new ej.dropdowns.ComboBox({
        dataSource: ComboBoxRecords,
        enableVirtualization: true,
        allowFiltering: true,
        popupHeight: '200px',
        fields: { groupBy: 'group', text: 'text', value: 'text' },
        placeholder: 'e.g. Item 1'
    });
    groupObj.appendTo('#group');
};