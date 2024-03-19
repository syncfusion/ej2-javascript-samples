/**
 * ComboBox Object Value Binding Sample
 */
var records = [];
for (var i = 1; i <= 150; i++) {
    var comboObjectItem = {};
    comboObjectItem.id = 'id' + i;
    comboObjectItem.text = "Item ".concat(i);
    var randomAutoGroup = Math.floor(Math.random() * 4) + 1;
    switch (randomAutoGroup) {
        case 1:
            comboObjectItem.group = 'Group D';
            break;
        case 2:
            comboObjectItem.group = 'Group C';
            break;
        case 3:
            comboObjectItem.group = 'Group B';
            break;
        case 4:
            comboObjectItem.group = 'Group A';
            break;
        default:
            break;
    }
    records.push(comboObjectItem);
}

this.default = function () {
    // initialize ComboBox component
    var comboBoxObj = new ej.dropdowns.ComboBox({
        // set the height of the popup element
        popupHeight: '200px',
        dataSource: records,
        allowObjectBinding: true,
        fields: { text: 'text', value: 'id' },
        // set the placeholder to ComboBox input element
        placeholder: 'Select a Item',
        // bind the change event
        change: function (args) {
            var inputValue = document.getElementById('value');
            inputValue.value = "Selected value : "  + JSON.stringify(comboBoxObj.value);
            console.log(args.value);
        },
    });
    comboBoxObj.appendTo('#object');
};