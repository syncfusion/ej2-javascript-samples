this.default = function () {
    var dialog = new ej.popups.Dialog({
        // Set Dialog position
        position: { X: 'center', Y: 'center' },
        // Disable the Esc key option to hide the Dialog
        closeOnEscape: false,
        // Enables the close icon button in header
        showCloseIcon: true,
        // Enables the header
        header: 'Choose a Dialog Position',
        // The dialog shows within the target element
        target: document.getElementById("target"),
        // Dialog width
        width: '452px',
        open: dialogOpen,
        close: dialogClose,
        //Dialog footerTemplate
        footerTemplate: '<span id="posvalue" style="float:left;margin-left:8px;padding:10px;">Position: { X: "Center", Y: "Center" }</span>'
    });
    // Render initialized Dialog
    dialog.appendTo('#dialog');
    var onChangeHandler = function (args) {
        dialog.position.X = args.value.split(" ")[0];
        dialog.position.Y = args.value.split(" ")[1];
        var txt = args.event.target.parentElement.querySelector('.e-label').innerText.split(" ");
        document.getElementById("posvalue").innerHTML = 'Position: { X: "' + txt[0] + '", Y: "' + txt[1] + '" }';
    };
    var radioButton = new ej.buttons.RadioButton({ label: 'Left Top', value: 'left top', change: onChangeHandler });
    radioButton.appendTo('#radio1');
    radioButton = new ej.buttons.RadioButton({ label: 'Center Top', value: 'center top', change: onChangeHandler });
    radioButton.appendTo('#radio2');
    radioButton = new ej.buttons.RadioButton({ label: 'Right Top', value: 'right top', change: onChangeHandler });
    radioButton.appendTo('#radio3');
    radioButton = new ej.buttons.RadioButton({ label: 'Left Center', value: 'left center', change: onChangeHandler });
    radioButton.appendTo('#radio4');
    radioButton = new ej.buttons.RadioButton({ label: 'Center Center', value: 'center center', change: onChangeHandler, checked: true });
    radioButton.appendTo('#radio5');
    radioButton = new ej.buttons.RadioButton({ label: 'Right Center', value: 'right center', change: onChangeHandler });
    radioButton.appendTo('#radio6');
    radioButton = new ej.buttons.RadioButton({ label: 'Left Bottom', value: 'left bottom', change: onChangeHandler });
    radioButton.appendTo('#radio7');
    radioButton = new ej.buttons.RadioButton({ label: 'Center Bottom', value: 'center bottom', change: onChangeHandler });
    radioButton.appendTo('#radio8');
    radioButton = new ej.buttons.RadioButton({ label: 'Right Bottom', value: 'right bottom', change: onChangeHandler });
    radioButton.appendTo('#radio9');
    // Sample level code to handle the button click action
    document.getElementById('dialogBtn').onclick = function () {
        // Call the show method to open the Dialog
        dialog.show();
    };
    function dialogOpen() {
        document.getElementById('dialogBtn').style.display = 'none';
    }
    function dialogClose() {
        document.getElementById('dialogBtn').style.display = 'block';
    }
};
