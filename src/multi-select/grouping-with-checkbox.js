/**
 * MultiSelect Checkbox Samples
 */
// initialize MultiSelect component
this.default = function () {
    
    var checkList = new ej.dropdowns.MultiSelect({
        // set the vegetables data to dataSource property
        dataSource: window.ddVegetableData,
        // map the appropriate columns to fields property
        fields: { groupBy: 'Category', text: 'Vegetable', value: 'Id' },
        // set the placeholder to MultiSelect input element
        placeholder: 'Select Vegetables',
        // set the type of mode for checkbox to visualized the checkbox added in li element.
        mode: 'CheckBox',
        // set true for enable the selectAll support.
        showSelectAll: true,
        // set false for enableSelectionOrder
        enableSelectionOrder: false,
        // set true for enable the dropdown icon.
        showDropDownIcon: true,
        // set the placeholder to MultiSelect filter input element
        filterBarPlaceholder: 'Search Vegetables',
        // set true for checkbox grouping support
        enableGroupCheckBox: true
    });
    checkList.appendTo('#checkbox');
};