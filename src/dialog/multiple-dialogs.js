this.default = function () {
    ej.base.enableRipple(true);
    var dialogObj = new ej.popups.Dialog({
        header: 'First Dialog',
        target: document.getElementById('target'),
        animationSettings: { effect: 'None' },
        showCloseIcon: true,
        width: 330,
        buttons: [{
                click: dlgButtonClick,
                buttonModel: { content: 'Next', isPrimary: true }
            }],
        open: dialogOpen,
        close: dialogClose
    });
    dialogObj.appendTo('#defaultDialog');
    var dialogObj2 = new ej.popups.Dialog({
        header: 'Second Dialog',
        target: document.getElementById('target'),
        animationSettings: { effect: 'None' },
        visible: false,
        isModal: true,
        showCloseIcon: true,
        width: 285,
        buttons: [{
                click: dlg2ButtonClick,
                buttonModel: { content: 'Close', isPrimary: true }
            }],
        open: dialogOpen,
        close: dialogClose2
    });
    dialogObj2.appendTo('#secondDialog');
    // Button has been created to open the Dialog
    var button = new ej.buttons.Button({});
    button.appendTo('#dialogBtn');
    document.getElementById('dialogBtn').onclick = function () {
        dialogObj.show();
    };

    function dlgButtonClick() {
        dialogObj2.show();
    }
    function dlg2ButtonClick() {
        dialogObj2.hide();
    }
    // 'Open' Button will be shown, if Dialog is closed
    function dialogClose() {
        document.getElementById('dialogBtn').style.display = 'block';
    }
    function dialogClose2() {
        document.getElementById('dialogBtn').style.display = 'none';
    }
    // 'Open' Button will be hidden, if Dialog is opened
    function dialogOpen() {
        document.getElementById('dialogBtn').style.display = 'none';
    }
};