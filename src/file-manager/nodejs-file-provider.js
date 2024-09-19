/**
 * File Manager sample with Node.js service
 */
this.default = function() {
    var hostUrl = 'https://ej2-nodejs-service.azurewebsites.net/';
    var fileObject = new ej.filemanager.FileManager({
            ajaxSettings: {
                url: hostUrl,
                getImageUrl: hostUrl + 'GetImage',
                uploadUrl: hostUrl + 'Upload',
                downloadUrl: hostUrl + 'Download'
            },
            contextMenuSettings: {
                layout: ["SortBy", "View", "Refresh", "|", "Paste", "|", "NewFolder", "|", "Details", "|", "SelectAll"],
                file: [ "Cut", "Copy", "|", "Delete", "Download", "Rename", "|", "Details"],
                visible: true
            },
            toolbarSettings: { items: ['NewFolder', 'SortBy', 'Refresh', 'Cut', 'Copy', 'Paste', 'Delete', 'Download', 'Rename', 'Selection', 'View', 'Details'] },
        });
    fileObject.appendTo('#filemanager');
};