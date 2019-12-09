/**
 * File Manager sample with Azure service
 */
this.default = function() {
    var hostUrl = 'https://ej2-azure-aspcore-service.azurewebsites.net/';
    var fileObject = new ej.filemanager.FileManager({
            ajaxSettings: {
                url: hostUrl + 'api/AzureFileManager/AzureFileOperations',
                getImageUrl: hostUrl + 'api/AzureFileManager/AzureGetImage',
                uploadUrl: hostUrl + 'api/AzureFileManager/AzureUpload',
                downloadUrl: hostUrl + 'api/AzureFileManager/AzureDownload'
            }
    });
    fileObject.appendTo('#filemanager');
};