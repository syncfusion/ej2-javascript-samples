this.default = function () {
    var dropElement = document.getElementsByClassName('control-fluid')[0];
    // Initialize the uploader component
    var uploadObj = new ej.inputs.Uploader({
        asyncSettings: {
            saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
            removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
        },
        removing: onFileRemove,
        dropArea: dropElement
    });
    uploadObj.appendTo('#fileupload');

    function onFileRemove(args) {
        args.postRawFile = false;
    }
    // initialize check box component
    var checkBoxObj = new ej.buttons.CheckBox({
        checked: true,
        label: 'Auto Upload',
        change: function (args) {
            uploadObj.autoUpload = args.checked;           
            uploadObj.clearAll();
        }
    });
    checkBoxObj.appendTo('#checkAutoUpload');

    var checkBoxObj1 = new ej.buttons.CheckBox({
        checked: false,
        label: 'Sequential Upload',
        change: function (args) {
            uploadObj.sequentialUpload = args.checked;           
            uploadObj.clearAll();
        }
    });
    checkBoxObj1.appendTo('#sequentialUpload');
};
