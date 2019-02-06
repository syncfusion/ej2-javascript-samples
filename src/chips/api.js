/**
 * Api Chip sample
 */

var colorCss = '';
var outlineCss = '';
var chip;

this.default = function () {
    // initalizing chips
    chip = new ej.buttons.ChipList({}, '#chip');

    // initalizing drop-down list
    var colorObj = new ej.dropdowns.DropDownList({
        index: 0,
        popupHeight: '200px',
        change: colorHandler
    });
    colorObj.appendTo('#chip-color');

    // initalizing checkbox
    var leadingIconObj = new ej.buttons.CheckBox({
        checked: false,
        change: iconHandler
    });
    leadingIconObj.appendTo('#chip-leadingicon');

    // initalizing drop-down list
    var avatarObj = new ej.dropdowns.DropDownList({
        index: 0,
        popupHeight: '200px',
        change: avatarHandler
    });
    avatarObj.appendTo('#chip-avatar');

    // initalizing checkbox
    var trailingIconObj = new ej.buttons.CheckBox({
        checked: false,
        change: deleteIconHandler
    });
    trailingIconObj.appendTo('#chip-trailingicon');

    // initalizing checkbox
    var variantObj = new ej.buttons.CheckBox({
        checked: false,
        change: variantHandler
    });
    variantObj.appendTo('#chip-outline');

};

// drop-down list change handler for chip color
function colorHandler(e) {
    chip.cssClass = 'e-' + e.value + ' ' + outlineCss.trim();
    colorCss = 'e-' + e.value;
}

// checkbox change handler for chip leading icon
function iconHandler(e) {
    chip.leadingIconCss = e.checked ? 'janet' : '';
}

// drop-down list change handler for chip avatar
function avatarHandler(e) {
    chip.avatarIconCss = (e.value === 'icon') ? 'e-icon' : (e.value === 'image') ? 'janet' : '';
    chip.avatarText = (e.value === 'letter' ? 'JL' : '');
}

// checkbox change handler for chip trailing icon
function deleteIconHandler(e) {
    chip.trailingIconCss = e.checked ? 'e-dlt-btn' : '';
}

// checkbox change handler for chip outline
function variantHandler(e) {
    outlineCss = e.checked ? 'e-outline' : '';
    chip.cssClass = colorCss + ' ' + outlineCss;
}
