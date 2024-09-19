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
            },
            toolbarSettings: { items: ['NewFolder', 'SortBy', 'Refresh', 'Cut', 'Copy', 'Paste', 'Delete', 'Download', 'Rename', 'Selection', 'View', 'Details'] },
            contextMenuSettings: {
                layout: ["SortBy", "View", "Refresh", "|", "Paste", "|", "NewFolder", "|", "Details", "|", "SelectAll"],
                file: [ "Cut", "Copy", "|", "Delete", "Download", "Rename", "|", "Details"],
                visible: true
            }
        });
    fileObject.appendTo('#filemanager');
};