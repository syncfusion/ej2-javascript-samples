this.default = function () {
    // Render Dialog in RTL format by setting 'enableRtl' as true
    var rtlContent = "<div>Are you sure you want to delete sea.jpg?</div>";
    var rtlObj = new ej.popups.Dialog({
        header: 'Delete File',
        content: rtlContent,
        showCloseIcon: true,
        buttons: [{
                click: dlgButtonClick,
                buttonModel: { content: 'Yes', cssClass: 'e-flat', isPrimary: true }
            },
            {
                click: dlgButtonClick,
                buttonModel: { content: 'No', cssClass: 'e-flat' }
            }],
        target: document.getElementById('target'),
        width: '300px',
        enableRtl: true,
        open: dialogOpen,
        close: dialogClose,
        animationSettings: { effect: 'Zoom' }
    });
    rtlObj.appendTo('#dialog');
    document.getElementById('dialogButton').focus();
    var button = new ej.buttons.Button({});
    button.appendTo('#dialogButton');
    document.getElementById('dialogButton').onclick = function () {
        rtlObj.show();
    };
    function dlgButtonClick() {
        rtlObj.hide();
    }
    function dialogClose() {
        document.getElementById('dialogButton').style.display = 'block';
    }
    function dialogOpen() {
        document.getElementById('dialogButton').style.display = 'none';
    }
};
