this.default = function () {
    ej.base.enableRipple(true);
    // Render the draggable Dialog
    var confirmDialogObj = new ej.popups.Dialog({
        header: 'Drag Me!!!',
        content: '<span>This is a dialog with draggable support.</span>',
        showCloseIcon: true, closeOnEscape: false, width: '300px',height: '120px',
        allowDragging: true, isModal: true,
        target: document.getElementById('target'),
        animationSettings: { effect: 'None' },
        open: dialogOpen, close: dialogClose
    });
    confirmDialogObj.appendTo('#confirmDialog');
    // Create Button to open the draggable Dialog
    var confirmBtn = new ej.buttons.Button({});
    confirmBtn.appendTo('#confirmBtn');
    document.getElementById('confirmBtn').onclick = function () {
        confirmDialogObj.show();
        dialogOpen();
    };
    function confirmDlgBtnClick() {
        confirmDialogObj.hide();
    }
    // Buttons will be shown when Dialog is closed
    function dialogClose() {
        document.querySelectorAll('.dlgbtn')[0].classList.remove('e-btn-hide');
    }
    // Buttons will be hidden when Dialog is opened
    function dialogOpen() {
        document.querySelectorAll('.dlgbtn')[0].classList.add('e-btn-hide');
    }
};