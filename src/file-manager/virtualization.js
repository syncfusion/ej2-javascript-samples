/**
 * File Manager virtualization sample
 */
this.default = function() {
    var hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';
    // Initialize the FileManager component
    var fileObject = new ej.filemanager.FileManager({
        ajaxSettings: {
            url: hostUrl + 'api/FileManager/FileOperations',
            getImageUrl: hostUrl + 'api/FileManager/GetImage',
            uploadUrl: hostUrl + 'api/FileManager/Upload',
            downloadUrl: hostUrl + 'api/FileManager/Download'    
        },
        toolbarSettings: { items: ['NewFolder', 'SortBy', 'Refresh', 'Cut', 'Copy', 'Paste', 'Delete', 'Download', 'Rename', 'View', 'Details'] },
        contextMenuSettings: {
                layout: ["SortBy", "View", "Refresh", "|", "Paste", "|", "NewFolder", "|", "Details", "|", "SelectAll"],
                visible: true
            },
        view: 'Details',
        enableVirtualization: true,
        beforeSend: function(args) {
            args.ajaxSettings.beforeSend = function (args) {
                args.httpRequest.setRequestHeader('Authorization', 'FileBrowser');
            };
        },
        beforeImageLoad: function(args) {
            args.imageUrl = args.imageUrl + '&rootName=' + 'FileBrowser';
        },
        beforeDownload: function(args) {
            args.data.rootFolderName = 'FileBrowser';
        },
    });
    fileObject.appendTo('#filemanager');
};