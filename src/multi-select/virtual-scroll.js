
this.default = function () {
    // define the array of data
    var records = [];
    for (var i = 1; i <= 150; i++) {
        var multiItem = {};
        multiItem.id = 'id' + i;
        multiItem.text = "Item ".concat(i);
        var randomAutoGroup = Math.floor(Math.random() * 4) + 1;
        switch (randomAutoGroup) {
            case 1:
                multiItem.group = 'Group D';
                break;
            case 2:
                multiItem.group = 'Group C';
                break;
            case 3:
                multiItem.group = 'Group B';
                break;
            case 4:
                multiItem.group = 'Group A';
                break;
            default:
                break;
        }
        records.push(multiItem);
    }

    // initialize MultiSelect component
    var localObj = new ej.dropdowns.MultiSelect({
        //set the local data to dataSource property
        dataSource: records,
        mode: 'Box',        
        //enable the virtualization property
        enableVirtualization: true,
        popupHeight: '200px',
        allowFiltering: true,
        allowCustomValue: true,
        showDropDownIcon:true,
        hideSelectedItem: true,
        closePopupOnSelect: true,
        fields: { text: 'text', value: 'id' },
        placeholder: 'e.g. Item 1'
    });
    localObj.appendTo('#local');

    var remoteObj = new ej.dropdowns.MultiSelect({
        //set the remote data to dataSource property
        dataSource: new ej.data.DataManager({
            url: 'https://services.syncfusion.com/js/production/api/orders',
            adaptor: new ej.data.WebApiAdaptor(),
            crossDomain: true
        }),
        fields: { text: 'OrderID', value: 'OrderID' },
        //enable the virtualization property
        enableVirtualization: true,
        allowFiltering: true,
        mode: 'Delimiter', 
        // set true to enable the custom value support.
        allowCustomValue: true,
        hideSelectedItem: true,
        closePopupOnSelect: true,
        showDropDownIcon:true,
        popupHeight: '200px',
        // set the placeholder to DropDownList component
        placeholder: 'OrderID'
    });
    remoteObj.appendTo('#remote');

    var databindObj = new ej.dropdowns.MultiSelect({
        //set the remote data to dataSource property
        dataSource: new ej.data.DataManager({
            url: 'https://services.syncfusion.com/js/production/api/orders',
            adaptor: new ej.data.WebApiAdaptor(),
            crossDomain: true
        }),
        fields: { text: 'OrderID', value: 'OrderID' },
        //enable the virtualization property
        enableVirtualization: true,
        popupHeight: '200px',
        mode: 'Default', 
        value: ["20003", "10025", "10044", "custom"],
        allowFiltering: true,
        allowCustomValue: true,
        hideSelectedItem: true,
        closePopupOnSelect: true,
        showDropDownIcon:true,
        placeholder: 'e.g. Item 1'
    });
    databindObj.appendTo('#databind');

    var groupObj = new ej.dropdowns.MultiSelect({
        //set the local data to dataSource property
        dataSource: records,
        //enable the virtualization property
        enableVirtualization: true,
        popupHeight: '200px',
        mode: 'CheckBox', 
        allowFiltering: true,
        allowCustomValue: true,
        showDropDownIcon:true,
        enableSelectionOrder: false,
        fields: { groupBy: 'group', text: 'text', value: 'id' },
        placeholder: 'e.g. Item 1'
    });
    groupObj.appendTo('#group');

    var templateObj = new ej.dropdowns.MultiSelect({
        //set the local data to dataSource property
        dataSource: records,
        //enable the virtualization property
        enableVirtualization: true,
        popupHeight: '200px',
        mode: 'Default', 
        allowFiltering: true,
        allowCustomValue: true,
        hideSelectedItem: true,
        closePopupOnSelect: true,
        showDropDownIcon:true,
        headerTemplate:
        '<div class="header"><span style="margin-left:17px">Items Info</span></div>',
        // set the template content for list items
        itemTemplate: '<div class="ename" style="height: 40px"> ${text} </div>',
        // set the template content for displays the selected items in input element.
        valueTemplate: '<div class="name"> ${text} </div>',
        fields: { text: 'text', value: 'id' },
        placeholder: 'e.g. Item 1'
    });
    templateObj.appendTo('#template');

    // Initialize the CheckBox component
    var checkBoxObj = new ej.buttons.CheckBox({
        // set true for enable the checked state at initial rendering
        checked: true,
        // set text value for check box element.
        label: 'AllowFiltering',
        // bind change event
        change: function(args) {
            // enable or disable the allowFiltering in multiselect on CheckBox checked state
            localObj.allowFiltering = args.checked;
            remoteObj.allowFiltering = args.checked;
            databindObj.allowFiltering = args.checked;
            groupObj.allowFiltering = args.checked;
            templateObj.allowFiltering = args.checked;
        }
    });
    checkBoxObj.appendTo('#filter');
    // Initialize the CheckBox component
    checkBoxObj = new ej.buttons.CheckBox({
        checked: true,
        label: 'AllowCustomValue',
        change: function(args) {
            localObj.allowCustomValue = args.checked;
            remoteObj.allowCustomValue = args.checked;
            databindObj.allowCustomValue = args.checked;
            groupObj.allowCustomValue = args.checked;
            templateObj.allowCustomValue = args.checked;
        }
    });
    checkBoxObj.appendTo('#custom');

    // Initialize the CheckBox component
     checkBoxObj = new ej.buttons.CheckBox({
        checked: true,
        label: 'HideSelectedItem',
        change: function(args) {
            localObj.hideSelectedItem = args.checked;
            remoteObj.hideSelectedItem = args.checked;
            databindObj.hideSelectedItem = args.checked;
            templateObj.hideSelectedItem = args.checked;
        }
    });
    checkBoxObj.appendTo('#hide');

     // Initialize the CheckBox component
     checkBoxObj = new ej.buttons.CheckBox({
        checked: true,
        label: 'ClosePopupOnSelect',
        change: function(args) {
            localObj.closePopupOnSelect = args.checked;
            remoteObj.closePopupOnSelect = args.checked;
            databindObj.closePopupOnSelect = args.checked;
            templateObj.closePopupOnSelect = args.checked;
        }
    });
    checkBoxObj.appendTo('#close');
};