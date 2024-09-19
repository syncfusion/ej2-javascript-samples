/**
 * File Manager sample with Amazon S3 service
 */
this.default = function() {
    var hostUrl = 'https://amazons3.azurewebsites.net/api/AmazonS3Provider/';
    var fileObject = new ej.filemanager.FileManager({
            ajaxSettings: {
                url: hostUrl + 'AmazonS3FileOperations',
                getImageUrl: hostUrl + 'AmazonS3GetImage',
                uploadUrl: hostUrl + 'AmazonS3Upload',
                downloadUrl: hostUrl + 'AmazonS3Download'
            },
            toolbarSettings: { items: ['NewFolder', 'SortBy', 'Refresh', 'Cut', 'Copy', 'Paste', 'Delete', 'Download', 'Rename', 'Selection', 'View', 'Details'] },            
            contextMenuSettings: {
                file: [ "Cut", "Copy", "|", "Delete", "Download", "Rename", "|", "Details"],
                layout: ["SortBy", "View", "Refresh", "|", "Paste", "|", "NewFolder", "|", "Details", "|", "SelectAll"],
                visible: true
            }
    });
    fileObject.appendTo('#filemanager');
};