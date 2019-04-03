
/**
 * ListBox sorting sample.
 */

this.default = function() {
    

    // Initialize ListBox component.
    var listObj= new ej.dropdowns.ListBox({
        // Set the vegetableData to the data source.
        dataSource: window.vegetableData,

        // Map the appropriate columns to fields property along with groupBy option.
        fields: { groupBy: 'Category', text: 'Name', value: 'Id' },
    });
    listObj.appendTo('#listbox-group');

    // Initialize DropDownList component.
    var ddlObj = new ej.dropdowns. DropDownList(
        {
            value: 'None',
            popupHeight: '200px',
            // Change event of the Dropdownlist.
            change:function (e){
                        
                listObj.sortOrder = e.value  ; 
            }
        });
    ddlObj.appendTo('#ddl');

    var ddlObj1 = new ej.dropdowns.DropDownList(
        {
            value: 'Multiple',
            popupHeight: '200px',
            // Change event of the Dropdownlist.
            change:function (e){
                listObj.selectionSettings.mode = e.value;
            }
        });
    ddlObj1.appendTo('#mode');

};