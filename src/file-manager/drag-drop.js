/**
 * File Manager Drag and Drop feature sample
 */
this.default = function() {
    var hostUrl = 'https://ej2services.syncfusion.com/production/web-services/';
    // Initialize the FileManager component
    var fileObject = new ej.filemanager.FileManager({
            ajaxSettings: {
                url: hostUrl + 'api/FileManager/FileOperations',
                getImageUrl: hostUrl + 'api/FileManager/GetImage',
                uploadUrl: hostUrl + 'api/FileManager/Upload',
                downloadUrl: hostUrl + 'api/FileManager/Download'    
            },
            allowDragAndDrop: true
    });
    fileObject.appendTo('#filemanager');
};