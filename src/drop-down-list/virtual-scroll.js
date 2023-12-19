
this.default = function () {
    // define the array of data
    var records = [];
        for (var i = 1; i <= 150; i++) {
            var dropdownsItem = {};
            dropdownsItem.id = 'id' + i;
            dropdownsItem.text = "Item ".concat(i);
            var randomAutoGroup = Math.floor(Math.random() * 4) + 1;
            switch (randomAutoGroup) {
                case 1:
                    dropdownsItem.group = 'Group D';
                    break;
                case 2:
                    dropdownsItem.group = 'Group C';
                    break;
                case 3:
                    dropdownsItem.group = 'Group B';
                    break;
                case 4:
                    dropdownsItem.group = 'Group A';
                    break;
                default:
                    break;
            }
            records.push(dropdownsItem);
        }
    var remoteData = new ej.data.DataManager({
        url: 'https://services.syncfusion.com/js/production/api/orders',
        adaptor: new ej.data.WebApiAdaptor(),
        crossDomain: true
    });
    var remoteFields = { text: 'OrderID', value: 'OrderID' };
    // initialize DropDownList component
    var localObj = new ej.dropdowns.DropDownList({
        //set the data to dataSource property
        dataSource: records,
        //enable the virtualization property
        enableVirtualization: true,
        popupHeight: '200px',
        allowFiltering: false,
        fields: { text: 'text', value: 'id' },
        // set the placeholder to DropDownList input element
        placeholder: 'e.g. Item 1'
    });
    localObj.appendTo('#local');
    var remoteObj = new ej.dropdowns.DropDownList({
        dataSource: remoteData,
        fields: remoteFields,
        enableVirtualization: true,
        allowFiltering: true,
        popupHeight: '200px',
        placeholder: 'OrderID'
    });
    remoteObj.appendTo('#remote');
    var groupObj = new ej.dropdowns.DropDownList({
        dataSource: records,
        enableVirtualization: true,
        allowFiltering: true,
        popupHeight: '200px',
        fields: { groupBy: 'group', text: 'text', value: 'text' },
        placeholder: 'e.g. Item 1'
    });
    groupObj.appendTo('#group');
};