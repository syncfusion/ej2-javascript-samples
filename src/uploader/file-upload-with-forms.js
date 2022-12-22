this.default = function () {
    ej.base.enableRipple(true);
        var uploadObj = new ej.inputs.Uploader({
            autoUpload: false,
            multiple: false,
			allowedExtensions: 'image/*',
            selected: onFileSelect
        });
        uploadObj.appendTo('#fileupload');
        document.getElementById('browse').onclick = function () {
            document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button').click();
            return false;
        };
        function onFileSelect(args) {
            var inputElement = document.getElementById('upload');
            inputElement.value = args.filesData[0].name;
            formObj.validate('upload');
        }
        var options = {
            customPlacement: function (inputElement, errorElement) {
                inputElement = inputElement.closest('.form-group').querySelector('.error');
                inputElement.parentElement.appendChild(errorElement);
            },
            rules: {
                'name': {
                    required: true
                },
                'email': {
                    required: true
                },
                'upload': {
                    required: true
                }
            }
        };
        var formObj = new ej.inputs.FormValidator('#form1', options);
        function onFormSubmit() {
            var formStatus = formObj.validate();
            if (formStatus) {
                formObj.element.reset();
                confirm.show();
            }
        }
        var confirm = new ej.popups.Dialog({
            width: '335px',
            visible: false,
            header: 'Success',
            content: 'Your details have been updated successfully, Thank you.',
            target: document.getElementById('control_wrapper'),
            showCloseIcon: true,
            isModal: true,
            animationSettings: {
                effect: 'Zoom'
            }
        });
        confirm.appendTo('#confirmationDialog');
        document.getElementById('submit-btn').onclick = function (args) {
            onFormSubmit();
            args.preventDefault();
        };
};
