this.default = function () {
    var dropElement = document.getElementsByClassName('control-fluid')[0];
    // Initialize the control with file validation
    var uploadObj = new ej.inputs.Uploader({
        autoUpload: false,
        minFileSize: 10000,
        allowedExtensions: '.doc, .docx, .xls, .xlsx',
        asyncSettings: {
            saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
            removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
        },
        selected: onFileSelected,
        removing: onFileRemove,        
        dropArea: dropElement
    });
    uploadObj.appendTo('#validation');
    
    function onFileRemove(args) {
        args.postRawFile = false;
    }
    function onFileSelected(args) {
         // Filter the 5 files only to showcase
        args.filesData.splice(5);
        var filesData = uploadObj.getFilesData();
        var allFiles = filesData.concat(args.filesData);
        if (allFiles.length > 5) {
            for (var i = 0; i < allFiles.length; i++) {
                if (allFiles.length > 5) {
                    allFiles.shift();
                }
            }
            args.filesData = allFiles;
            // set the modified custom data
            args.modifiedFilesData = args.filesData;
        }
        args.isModified = true;
    }    
};