/**
 * File Manager sample with IBM Cloud Object Storage service
 */
this.default = function() {
    var hostUrl = 'https://ej2-ibm-cos-node-file-provider.azurewebsites.net/';
    var fileObject = new ej.filemanager.FileManager({
            ajaxSettings: {
                url: hostUrl,
                getImageUrl: hostUrl + 'GetImage',
                uploadUrl: hostUrl + 'Upload',
                downloadUrl: hostUrl + 'Download'
            },
            rootAliasName: 'Files'
    });
    fileObject.appendTo('#filemanager');
};