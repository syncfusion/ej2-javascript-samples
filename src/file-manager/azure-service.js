/**
 * File Manager sample with azure service
 */
this.default = function() {
    var hostUrl = 'https://ej2services.syncfusion.com/production/web-services/';
    var fileObject = new ej.filemanager.FileManager({
            ajaxSettings: {
                url: hostUrl + 'api/AzureFileManager/AzureFileoperations',
                getImageUrl: hostUrl + 'api/AzureFileManager/AzureGetImage',
                uploadUrl: hostUrl + 'api/AzureFileManager/AzureUpload',
                downloadUrl: hostUrl + 'api/AzureFileManager/AzureDownload'
            }
    });
    fileObject.appendTo('#filemanager');
};