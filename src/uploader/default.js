this.default = function () {
    var dropElement = document.getElementsByClassName('control-fluid')[0];
    // Initialize the uploader component
    var uploadObj = new ej.inputs.Uploader({
        asyncSettings: {
            saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
            removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
        },
        success: onUploadSuccess,
        dropArea: dropElement
    });
    uploadObj.appendTo('#fileupload');
    // initialize check box component
    var checkBoxObj = new ej.buttons.CheckBox({
        checked: true,
        label: 'Auto Upload',
        change: function (args) {
            uploadObj.autoUpload = args.checked;
            if (uploadObj.element.closest('.e-upload').querySelector('.e-spinner-pane')) {
                ej.base.detach((uploadObj.element.closest('.e-upload').querySelector('.e-spinner-pane')));
            }
            uploadObj.clearAll();
        }
    });
    checkBoxObj.appendTo('#checkAutoUpload');
    function onUploadSuccess(args) {
        var _this = this;
        var li = this.uploadWrapper.querySelector('[data-file-name="' + args.file.name + '"]');
        if (args.operation === 'upload') {
            li.querySelector('.e-file-delete-btn').onclick = function () {
                generateSpinner(_this.uploadWrapper);
            };
            li.querySelector('.e-file-delete-btn').onkeydown = function (e) {
                if (e.keyCode === 13) {
                    generateSpinner(e.target.closest('.e-upload'));
                }
            };
        }
        else {
            ej.popups.hideSpinner(this.uploadWrapper);
            ej.base.detach(this.uploadWrapper.querySelector('.e-spinner-pane'));
        }
    }
    function generateSpinner(targetElement) {
        ej.popups.createSpinner({ target: targetElement, width: '25px' });
        ej.popups.showSpinner(targetElement);
    }
};
