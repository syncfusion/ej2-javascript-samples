/**
 * ListBox dual list box sample.
 */

this.default = function() {

    // Initialize ListBox component.
    var listObj1= new ej.dropdowns.ListBox({ 
        // Set the groupa data to the data source.
        dataSource: window.groupa,

        // Map the appropriate columns to fields property.
        fields: { text:'Country'},

        height: '330px',

        // Set the scope of the ListBox.
        scope: '#listbox2',
        // Set the tool settings with set of items.
        toolbarSettings: { items: ['moveUp', 'moveDown', 'moveTo', 'moveFrom', 'moveAllTo', 'moveAllFrom']},
        // set the no record template
        noRecordsTemplate: '<div class= "e-list-nrt"><span>NO DATA AVAILABLE</span></div>'
    });
    
    listObj1.appendTo('#listbox1');

    // Initialize ListBox component.
    var listObj2= new ej.dropdowns.ListBox({ 
        // Set the groupa data to the data source.
        dataSource: window.groupb,

        height: '330px',

        // Set field property with text as `Name`.
        fields: { text:'Country'},
        // set the no record template
        noRecordsTemplate: '<div class= "e-list-nrt"><span>NO DATA AVAILABLE</span></div>'
    });

    listObj2.appendTo('#listbox2');

};