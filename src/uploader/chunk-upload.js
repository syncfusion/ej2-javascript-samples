this.default = function () {
    var dropElement = document.getElementsByClassName('control-fluid')[0];
    // Initialize the uploader component
    var uploadObj = new ej.inputs.Uploader({
        maxFileSize: 104857600,
        asyncSettings: {
            saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
            removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove',
            chunkSize: 500000
        },
        autoUpload: false,
        removing: onFileRemove,
        dropArea: dropElement,
    });
    uploadObj.appendTo('#fileupload');

    function onFileRemove(args) {
        args.postRawFile = false;
    }

    var listObj = new ej.dropdowns.DropDownList({
        // set the index value to select an item based on index at initial rendering
        index: 0,
        // set the placeholder to DropDownList input element
        placeholder: 'Select chunk size',
        // set the height of the popup element
        popupHeight: '200px',
        // bind the change event
         change: function (e) {
            uploadObj.asyncSettings.chunkSize = parseInt(e.itemData.value, 10);
         }
    });
    listObj.appendTo('#chunk-sizes');
};

