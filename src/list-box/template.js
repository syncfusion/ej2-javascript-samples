/**
 * ListBox Template Sample
 */

 this.default = function() {

    // Initialize ListBox component.
    var listObj= new ej.dropdowns.ListBox({ 
        // Set the info to the data source property.
        dataSource: window.template,
        // set the template content for list items.
        itemTemplate:  '<div class="list-wrapper">' +
        '<span class="${pic} e-avatar e-avatar-xlarge e-avatar-circle"></span>' +
        '<span class="text">${text}</span><span class="description">' +
        '${description}</span></div>'
    });
    listObj.appendTo('#listbox');

};
