/**
 * File Manager API sample
 */
this.default = function () {
    var hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';

    // initialize File Manager component
    var filemanagerInstance = new ej.filemanager.FileManager({
        ajaxSettings: {
            url: hostUrl + 'api/FileManagerAccess/FileOperations',
            uploadUrl: hostUrl + 'api/FileManagerAccess/Upload',
            downloadUrl: hostUrl + 'api/FileManagerAccess/Download',
            getImageUrl: hostUrl + 'api/FileManagerAccess/GetImage'
        },
    });

    // render initialized File Manager
    filemanagerInstance.appendTo('#filemanager');
};
