this.default = function () {
    // Render the DropDownTree with hierarchical data source
    var ddTreeObj = new ej.dropdowns.DropDownTree({
        fields: { dataSource: window.continentData, value: 'code', text: 'name', child: 'countries' },
        placeholder: 'Select an item',
        popupHeight: '200px'
    });
    ddTreeObj.appendTo('#ddtlocal');
    // Render the DropDownTree with self-referential data source
    var ddListTreeObj = new ej.dropdowns.DropDownTree({
        fields: { dataSource: window.localData, value: 'id', parentValue: 'pid',
        text: 'name', hasChildren: 'hasChild' },
        placeholder: 'Select an item',
        popupHeight: '200px'
    });
    ddListTreeObj.appendTo('#ddtlist');
};