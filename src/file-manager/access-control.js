/**
 * File Manager API sample
 */
this.default = function () {
    var hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';

    // initialize File Manager component
    var filemanagerInstance = new ej.filemanager.FileManager({
        ajaxSettings: {
            url: hostUrl + 'api/FileAccess/FileOperations',
            uploadUrl: hostUrl + 'api/FileAccess/Upload',
            downloadUrl: hostUrl + 'api/FileAccess/Download',
            getImageUrl: hostUrl + 'api/FileAccess/GetImage'
        },
        toolbarSettings: { items: ['NewFolder', 'SortBy', 'Refresh', 'Cut', 'Copy', 'Paste', 'Delete', 'Download', 'Rename', 'Selection', 'View', 'Details'] },
        contextMenuSettings: {
            visible: true,
            file: [ "Cut", "Copy", "|", "Delete", "Download", "Rename", "|", "Details"],
            layout: ["SortBy", "View", "Refresh", "|", "Paste", "|", "NewFolder", "|", "Details", "|", "SelectAll"],
        }
    });

    // render initialized File Manager
    filemanagerInstance.appendTo('#filemanager');
};
