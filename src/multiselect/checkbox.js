/**
 * MultiSelect Checkbox Samples
 */
// initialize MultiSelect component
this.default = function () {
    
var checkList = new ej.dropdowns.MultiSelect({
    // set the country data to dataSource property
    dataSource: window.ddCountryData,
    // map the appropriate columns to fields property
    fields: { text: 'Name', value: 'Code' },
    // set the placeholder to MultiSelect input element
    placeholder: 'Select countries',
    // set the type of mode for checkbox to visualized the checkbox added in li element.
    mode: 'CheckBox',
    // set true for enable the selectAll support.
    showSelectAll: true,
    // set true for enable the dropdown icon.
    showDropDownIcon: true,
    // set the placeholder to MultiSelect filter input element
    filterBarPlaceholder: 'Search countries',
    // set the MultiSelect popup height
    popupHeight: '350px'
});
checkList.appendTo('#checkbox');
// Initialize the CheckBox component
    var checkBoxObj = new ej.buttons.CheckBox({
        // set true for enable the checked state at initial rendering
        checked: true,
        // set text value for check box element.
        label: 'Show Select All',
        // bind change event
        change: function(args) {
            // enable or disable the SelectAll in multiselect on CheckBox checked state
            checkList.showSelectAll = args.checked;
        }
    });
    checkBoxObj.appendTo('#selectall');
    // Initialize the CheckBox component
    checkBoxObj = new ej.buttons.CheckBox({
        // set true for enable the checked state at initial rendering
        checked: true,
        // set text value for check box element.
        label: 'DropDown Button',
        // bind change event
        change: function(args) {
            // enable or disable the SelectAll in multiselect on CheckBox checked state
            checkList.showDropDownIcon = args.checked;
        }
    });
    checkBoxObj.appendTo('#dropicon');
    // Initialize the CheckBox component
    checkBoxObj = new ej.buttons.CheckBox({
        // set true for enable the checked state at initial rendering
        checked: true,
        // set text value for check box element.
        label: 'Selection Reorder',
        // bind change event
        change: function(args) {
            // enable or disable the SelectAll in multiselect on CheckBox checked state
            checkList.enableSelectionOrder = args.checked;
        }
    });
    checkBoxObj.appendTo('#reorder');
};