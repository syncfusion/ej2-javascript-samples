this.default = function () {
    var dropElement = document.getElementsByClassName('control-fluid')[0];
    // initialize the uploader component
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
        chunkFailure: onBeforeFailure,
        pausing: onPausing,
        resuming: onResuming
    });
    uploadObj.appendTo('#fileupload');

    var isInteraction = false;
    // to update flag variable value for automatic pause and resume
    function onPausing(args) {
        if (args.event !== null && !navigator.onLine) {
            isInteraction = true;
        }
        else {
            isInteraction = false;
        }
    }
    // to update flag variable for automatic pause and resume
    function onResuming(args) {
        if (args.event !== null && !navigator.onLine) {
            isInteraction = true;
        }
        else {
            isInteraction = false;
        }
    }

    function onFileRemove(args) {
        args.postRawFile = false;
    }
    // initialize dropdown component
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
    // to prevent triggering chunk-upload failure event and to pause uploading on network failure
    function onBeforeFailure(args) {
        args.cancel = !isInteraction;
        var uploadObj = document.getElementById('fileupload').ej2_instances[0];
        // interval to check network availability on every 500 milliseconds
        var clearTimeInterval = setInterval(function () {
            if (navigator.onLine && !ej.base.isNullOrUndefined(uploadObj.filesData[0]) && uploadObj.filesData[0].statusCode == 4) {
                uploadObj.resume(uploadObj.filesData);
                clearSetInterval();
            }
            else {
                if (!isInteraction && !ej.base.isNullOrUndefined(uploadObj.filesData[0]) && uploadObj.filesData[0].statusCode == 3) {
                    uploadObj.pause(uploadObj.filesData);
                }
            }
        }, 500);
        // clear Interval after when network is available.
        function clearSetInterval() {
            clearInterval(clearTimeInterval);
        }
    }
};