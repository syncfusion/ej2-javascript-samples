// Sample for basic filemanager.
this.default = function () {
    var hostUrl = 'https://ng2jq.syncfusion.com/ej2services/';
    var fileObject = new ej.filemanager.FileManager({
        ajaxSettings: {
            url: hostUrl + 'api/FileManager/FileOperations',
            getImageUrl: hostUrl + 'api/FileManager/GetImage',
            uploadUrl: hostUrl + 'api/FileManager/Upload',
            downloadUrl: hostUrl + 'api/FileManager/Download',
        },
        showThumbnail: false,
        view: 'LargeIcons'
    });
    fileObject.appendTo('#filemanager');
};
