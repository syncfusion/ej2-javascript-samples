/**
 * ListBox Checkbox sample
 */

this.default = function () {

    // Initialize the ListBox component.
    var listObj = new ej.dropdowns.ListBox({
        // Set the dataSource property.
        dataSource: window.info,
      
        // Set the selection settings with showCheckbox as enabled.
        selectionSettings: { showCheckbox: true }
       
    });
   
    listObj.appendTo('#multi-select-listbox');
   

}; 