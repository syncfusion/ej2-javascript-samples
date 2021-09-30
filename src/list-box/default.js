/**
 * ListBox Default Sample
 */

this.default = function() {

    // Initialize ListBox component.
    var listObj= new ej.dropdowns.ListBox({ 
        // Set the info to the data source property.
        dataSource: window.info
    });
    listObj.appendTo('#listbox');

};