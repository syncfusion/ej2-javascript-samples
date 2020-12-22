this.default = function () {
    ej.base.enableRipple(true);
    // Render the resizable Dialog
    var resizeDialogObj = new ej.popups.Dialog({
        header: 'Resize Me',
        content: '<span>This is a dialog with resizable support.</span>',
        showCloseIcon: true, closeOnEscape: false, width: '300px',
        enableResize: true,
        resizeHandles: ['All'],
        allowDragging: true,
        target: document.getElementById('target'),
        animationSettings: { effect: 'None' },
        open: dialogOpen, close: dialogClose
    });
    resizeDialogObj.appendTo('#resizeDialog');
    // Create Button to open the resizable Dialog
    var resizeBtn = new ej.buttons.Button({});
    resizeBtn.appendTo('#resizeBtn');
    document.getElementById('resizeBtn').onclick = function () {
        resizeDialogObj.show();
        dialogOpen();
    };
    // Buttons will be shown when Dialog is closed
    function dialogClose() {
        document.querySelectorAll('.dlgbtn')[0].classList.remove('e-btn-hide');
    }
    // Buttons will be hidden when Dialog is opened
    function dialogOpen() {
        document.querySelectorAll('.dlgbtn')[0].classList.add('e-btn-hide');
    }
};