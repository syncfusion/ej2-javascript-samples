this.default = function () {
    // Initialize Dropdown Tree component
    var ddTreeObj = new ej.dropdowns.DropDownTree({

        fields: { dataSource: window.countries, value: 'id', parentValue: 'pid', text: 'name', hasChildren: 'hasChild', },
        allowMultiSelection: true,
        placeholder: 'Select items',
        popupHeight: '200px',
    });
    ddTreeObj.appendTo('#multiselection');
};
