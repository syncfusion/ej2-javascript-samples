
this.default = function () {

    // initialize MultiSelect component
    var listObj = new ej.dropdowns.MultiSelect({
        // set the placeholder to MultiSelect input element
        placeholder: 'Favorite Sports',
        // set the type of mode for how to visualized the selected items in input element.
        mode: 'box'
    });
    listObj.appendTo('#box');

    // initialize MultiSelect component
    var listObj1 = new ej.dropdowns.MultiSelect({
        // set the placeholder to MultiSelect input element
        placeholder: 'Favorite Sports',
        // set the type of mode for how to visualized the selected items in input element.
        mode: 'default'
    });
    listObj1.appendTo('#default');

    // initialize MultiSelect component
    var listObj2 = new ej.dropdowns.MultiSelect({
        // set the placeholder to MultiSelect input element
        placeholder: 'Favorite Sports',
        // set the type of mode for how to visualized the selected items in input element.
        mode: 'delimiter'
    });
    listObj2.appendTo('#delimiter');
};