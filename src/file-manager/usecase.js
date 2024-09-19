/**
 * File Manager real time use case sample
 */
this.default = function() {
    
    // Initialize the Uploader component
    var uploadObject = new ej.inputs.Uploader({});
    uploadObject.appendTo('#fileupload');

    // Initialize the Button component
    var btnObj = new ej.buttons.Button({});
    btnObj.appendTo('#openBtn');

    // Initialize the Dialog component
    var dialogObj = new ej.popups.Dialog({
        header: 'Select a file',
        showCloseIcon: true,
        closeOnEscape: false,
        width: '850px',
        visible: false,
        target: document.getElementById('target'),
        animationSettings: { effect: 'None' },
        open: dialogOpen,
        close: dialogClose
    });
    dialogObj.appendTo('#dialog');

    var hostUrl = 'https://services.syncfusion.com/filemanager/production/';

    // Initialize the FileManager component
    var filemanagerInstance = new ej.filemanager.FileManager({
        ajaxSettings: {
            url: hostUrl + 'api/FileManager/FileOperations',
            getImageUrl: hostUrl + 'api/FileManager/GetImage',
            uploadUrl: hostUrl + 'api/FileManager/Upload',
            downloadUrl: hostUrl + 'api/FileManager/Download'
        },
        toolbarSettings: {
            items: ['NewFolder', 'Upload', 'Delete', 'Cut', 'Copy', 'Rename', 'SortBy', 'Refresh', 'Selection', 'View', 'Details']
        },
        allowMultiSelection: false,
        contextMenuSettings: {
            file: [ "Cut", "Copy", "|", "Delete", "Download", "Rename", "|", "Details"],
            visible: true
        },
        fileOpen : onFileOpen
    });
    filemanagerInstance.appendTo('#filemanager');

    document.getElementById('openBtn').onclick = function() {
        dialogObj.show();
        dialogOpen();
        filemanagerInstance.path = '/';
        filemanagerInstance.selectedItems = [];
        filemanagerInstance.refresh();
    };

    // 'Uploader' will be shown, if Dialog is closed
    function dialogClose() {
        document.getElementById('container').style.display = 'block';
    }

    // 'Uploader' will be hidden, if Dialog is opened
    function dialogOpen() {
        document.getElementById('container').style.display = 'none';
    }

    // File Manager's fileOpen event function
    function onFileOpen(args) {
        var file = args.fileDetails;
        if (file.isFile) {
            args.cancel = true;
            if (file.size <= 0 ) { file.size = 10000; }
            uploadObject.files = [{name: file.name, size: file.size, type: file.type }];
            dialogObj.hide();
        }
    }
};