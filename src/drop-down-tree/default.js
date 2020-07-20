this.default = function () {

    // Initialize DropDownTree component
    var ddTreeObj = new ej.dropdowns.DropDownTree({
        fields: { dataSource: window.hierarchicalData, value: 'id', text: 'name', child: 'subChild' },
        popupHeight: '200px',
        placeholder: 'Select a folder or file',
		changeOnBlur: false,
        change: function () { valueChange(); }
    });
    ddTreeObj.appendTo('#default');
    // call the change event's function after initialized the component.
    valueChange();
    function valueChange() {
        var value = document.getElementById('value');
        var text = document.getElementById('text');
        // update the text and value property values in property panel based on selected item in DropDownTree
        value.innerHTML = ddTreeObj.value;
        text.innerHTML = ddTreeObj.text;
    }
};