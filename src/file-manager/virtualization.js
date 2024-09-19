/**
 * File Manager virtualization sample
 */
this.default = function() {
    var hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';
    // Initialize the FileManager component
    var fileObject = new ej.filemanager.FileManager({
        ajaxSettings: {
            url: hostUrl + 'api/Virtualization/FileOperations',
            getImageUrl: hostUrl + 'api/Virtualization/GetImage',
            uploadUrl: hostUrl + 'api/Virtualization/Upload',
            downloadUrl: hostUrl + 'api/Virtualization/Download'    
        },
        toolbarSettings: { items: ['NewFolder', 'SortBy', 'Refresh', 'Cut', 'Copy', 'Paste', 'Delete', 'Download', 'Rename', 'View', 'Details'] },
        contextMenuSettings: {
            file: [ "Cut", "Copy", "|", "Delete", "Download", "Rename", "|", "Details"],
                layout: ["SortBy", "View", "Refresh", "|", "Paste", "|", "NewFolder", "|", "Details", "|", "SelectAll"],
                visible: true
            },
        view: 'Details',
        enableVirtualization: true
    });
    fileObject.appendTo('#filemanager');
};