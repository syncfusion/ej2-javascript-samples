this.default = function () {
    // Initialize Dropdown Tree component
    var checkList = new ej.dropdowns.DropDownTree({
        fields: { dataSource: window.countries, value: 'id', parentValue: 'pid', text: 'name', hasChildren: 'hasChild', },
        showCheckBox: true,
        placeholder: 'Select items',
        popupHeight: '200px',
        mode: 'Delimiter',
    });
    checkList.appendTo('#checkbox');
    var checkObj = new ej.buttons.CheckBox({
        label: 'Auto Check',
        change: function(args) {
            checkList.treeSettings.autoCheck = args.checked;
        }
    });
    checkObj.appendTo('#check');
};
