/**
 * AutoComplete Object Value Binding Sample
 */
var records = [];
for (var i = 1; i <= 150; i++) {
    var autoObjectItem = {};
    autoObjectItem.id = 'id' + i;
    autoObjectItem.text = "Item ".concat(i);
    var randomAutoGroup = Math.floor(Math.random() * 4) + 1;
    switch (randomAutoGroup) {
        case 1:
            autoObjectItem.group = 'Group D';
            break;
        case 2:
            autoObjectItem.group = 'Group C';
            break;
        case 3:
            autoObjectItem.group = 'Group B';
            break;
        case 4:
            autoObjectItem.group = 'Group A';
            break;
        default:
            break;
    }
    records.push(autoObjectItem);
}

this.default = function () {

    // Initialize DropDownList component
    var listObj = new ej.dropdowns.AutoComplete({
        //set the local data to dataSource property
        dataSource: records,
        // set the placeholder to DropDownList input element
        placeholder: 'Select a Item',
        allowObjectBinding: true,
        fields: { value: 'text' },
        // set the height of the popup element
        popupHeight: '200px',
        // bind the change event
        change: function (args) {
            var inputValue = document.getElementById('value');
            inputValue.value = "Selected value : "  + JSON.stringify(listObj.value);
            console.log(args.value);
        },
    });
    listObj.appendTo('#object');
};