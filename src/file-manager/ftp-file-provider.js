/**
 * File Manager sample with File Transfer Protocol
 */
this.default = function() {
    var hostUrl = 'https://ej2-ftp-aspcore-service.azurewebsites.net/';
    var fileObject = new ej.filemanager.FileManager({
            ajaxSettings: {
                url: hostUrl + 'api/FTPProvider/FTPFileOperations',
                getImageUrl: hostUrl + 'api/FTPProvider/FTPGetImage',
                uploadUrl: hostUrl + 'api/FTPProvider/FTPUpload',
                downloadUrl: hostUrl + 'api/FTPProvider/FTPDownload'
            },
            toolbarSettings: { items: ['NewFolder', 'SortBy', 'Refresh', 'Cut', 'Copy', 'Paste', 'Delete', 'Download', 'Rename', 'Selection', 'View', 'Details'] }
    });
    fileObject.appendTo('#ftpFilemanager');
};