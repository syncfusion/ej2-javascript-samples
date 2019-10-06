/**
 * File Manager sample with sql service
 */
this.default = function() {
    var hostUrl = 'https://ng2jq.syncfusion.com/ej2-sql-service/';
    var fileObject = new ej.filemanager.FileManager({
            ajaxSettings: {
                url: hostUrl + 'api/FileManager/Fileoperations',
                getImageUrl: hostUrl + 'api/FileManager/GetImage',
                uploadUrl: hostUrl + 'api/FileManager/Upload',
                downloadUrl: hostUrl + 'api/FileManager/Download'
            }
    });
    fileObject.appendTo('#filemanager');
};