this.default = function () {
    // Initialize Dropdown Tree component
    var checkList = new ej.dropdowns.DropDownTree({
        fields: { dataSource: window.countries, value: 'id', parentValue: 'pid', text: 'name', hasChildren: 'hasChild', },
        showCheckBox: true,
        placeholder: 'Select items',
        popupHeight: '200px',
        mode: 'Custom',
        treeSettings: { autoCheck: true },
        customTemplate: "${value.length} item(s) selected",
    });
    checkList.appendTo('#customtemplate');
};
