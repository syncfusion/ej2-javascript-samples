this.default = function () {
  // Initialize Dropdown Tree component
  var dropDownTreeObj = new ej.dropdowns.DropDownTree({

    placeholder: 'Select an item',
    filterBarPlaceholder: 'Search',
    fields: { dataSource: window.localData, value: 'id', parentValue: 'pid', text: 'name', hasChildren: 'hasChild' },
    popupHeight: '250px',
    allowFiltering: true,
  });
  dropDownTreeObj.appendTo('#filtering');
};