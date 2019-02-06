
    this.default = function () {
        // Rendering modal Dialog by enabling 'isModal' as true
        var dialogObj = new ej.popups.Dialog({
            width: '335px',
            header: 'Software Update',
            content: 'Your current software version is up to date.',
            target: document.getElementById('target'),
            isModal: true,
            animationSettings: { effect: 'None' },
            buttons: [{
                    click: dlgButtonClick,
                    buttonModel: { content: 'OK', isPrimary: true }
                }],
            open: dialogOpen,
            close: dialogClose
        });
        dialogObj.appendTo('#modalDialog');
        document.getElementById('dialogBtn').focus();

        var checkBoxObj = new ej.buttons.CheckBox({ checked: false, change: onChange });
        checkBoxObj.appendTo('#checkbox');

        // Button has been created to open the modal Dialog
        var button = new ej.buttons.Button({});
        button.appendTo('#dialogBtn');
        document.getElementById('dialogBtn').onclick = function () {
            dialogObj.show();
        };
        function dlgButtonClick() {
            dialogObj.hide();
        }
        function dialogClose() {
            document.getElementById('dialogBtn').style.display = 'block';
        }
        function dialogOpen() {
            document.getElementById('dialogBtn').style.display = 'none';
        }
        // Dialog will be closed, while clicking on overlay
        function onChange(args) {
            if(args.checked) {
                dialogObj.overlayClick = function () {
                    dialogObj.hide();
                };
            }
            else {
                dialogObj.overlayClick = function () {
                    dialogObj.show();
                };
            }
        }
    };