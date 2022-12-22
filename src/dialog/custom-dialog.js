this.default = function () {
    var alertContent = '<div>10% of battery remaining</div>';
    var confirmContent = '<span>Are you sure you want to permanently delete these items ?</span>';
    // Render the alert Dialog 
    var alertDialogObj = new ej.popups.Dialog({
        header: 'Low Battery',
        content: alertContent,
        showCloseIcon: false,
        buttons: [{
                click: alertDlgBtnClick, buttonModel: { content: 'Dismiss', isPrimary: true }
            }],
        closeOnEscape: false,
        target: document.getElementById('target'),
        width: '250px',
        visible: false,
        animationSettings: { effect: 'None' },
        open: dialogOpen,
        close: dialogClose
    });
    alertDialogObj.appendTo('#alertDialog');
    document.getElementById('alertBtn').focus();
    // Render the confirmation Dialog
    var confirmDialogObj = new ej.popups.Dialog({
        header: 'Delete Multiple Items',
        visible: false,
        content: confirmContent,
        showCloseIcon: true,
        closeOnEscape: false,
        buttons: [{
                click: confirmDlgBtnClick,
                buttonModel: { content: 'Yes', isPrimary: true }
            },
            { click: confirmDlgBtnClick, buttonModel: { content: 'No' } }],
        width: '400px',
        target: document.getElementById('target'),
        animationSettings: { effect: 'None' },
        open: dialogOpen,
        close: dialogClose
    });
    confirmDialogObj.appendTo('#confirmDialog');
    // Render the prompt Dialog 
    var promptDialogObj = new ej.popups.Dialog({
        header: 'Join Wi-Fi network',
        visible: false,
        showCloseIcon: false,
        closeOnEscape: false,
        buttons: [{
                click: promptDlgBtnClick, buttonModel: { content: 'Connect', isPrimary: true }
            },
            {
                click: promptDlgBtnClick, buttonModel: { content: 'Cancel' }
            }],
        width: '330px',
        target: document.getElementById('target'),
        animationSettings: { effect: 'None' },
        open: dialogOpen,
        close: dialogClose
    });
    promptDialogObj.appendTo('#promptDialog');
    // Create Button to open the alert Dialog
    var alertBtn = new ej.buttons.Button({});
    alertBtn.appendTo('#alertBtn');
    document.getElementById('alertBtn').onclick = function () {
        alertDialogObj.show();
        dialogOpen();
    };
    // Create Button to open the confirmation Dialog
    var confirmBtn = new ej.buttons.Button({});
    confirmBtn.appendTo('#confirmBtn');
    document.getElementById('confirmBtn').onclick = function () {
        confirmDialogObj.show();
        dialogOpen();
    };
    function alertDlgBtnClick() {
        alertDialogObj.hide();
    }
    function confirmDlgBtnClick() {
        confirmDialogObj.hide();
    }
    function promptDlgBtnClick() {
        promptDialogObj.hide();
    }
    // Create Button to open the prompt Dialog
    var promptBtn = new ej.buttons.Button({});
    promptBtn.appendTo('#promptBtn');
    document.getElementById('promptBtn').onclick = function () {
        promptDialogObj.show();
        dialogOpen();
    };
    // Buttons will be shown when Dialog is closed
    function dialogClose() {
        document.querySelectorAll('.dlgbtn')[0].classList.remove('e-btn-hide');
        document.querySelectorAll('.dlgbtn')[1].classList.remove('e-btn-hide');
        document.querySelectorAll('.dlgbtn')[2].classList.remove('e-btn-hide');
    }
    // Buttons will be hidden when Dialog is opened
    function dialogOpen() {
        document.querySelectorAll('.dlgbtn')[0].classList.add('e-btn-hide');
        document.querySelectorAll('.dlgbtn')[1].classList.add('e-btn-hide');
        document.querySelectorAll('.dlgbtn')[2].classList.add('e-btn-hide');
    }
    // Styles will be added, while password field of prompt Dialog has been focused
    document.getElementById('password').addEventListener('focus', function () {
        this.parentElement.classList.add('e-input-focus');
    });
    // Styles will be removed, while password field of prompt Dialog has been focused out
    document.getElementById('password').addEventListener('blur', function () {
        this.parentElement.classList.remove('e-input-focus');
    });
};