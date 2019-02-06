this.default = function() {

    // Initialize DropDownList component
    var listObj = new ej.dropdowns.DropDownList({
        // set the index value to select an item based on index at initial rendering
        index: 2,
        // set the placeholder to DropDownList input element
        placeholder: 'Select a game',
        // set the height of the popup element
        popupHeight: '200px',
        // bind the change event
        change: function () { valueChange(); }
    });
    listObj.appendTo('#games');
    // call the change event's function after initialized the component.
    valueChange();
    function valueChange() {
        var value = document.getElementById('value');
        var text = document.getElementById('text');
        // update the text and value property values in property panel based on selected item in DropDownList
        value.innerHTML = listObj.value;
        text.innerHTML = listObj.text;
    }
};