/**
 * File Manager sample with Firebase Realtime Database service
 */
this.default = function () {
    var hostUrl = 'https://realtime-firebase.azurewebsites.net/api/FirebaseProvider/';
    var fileObject = new ej.filemanager.FileManager({
        ajaxSettings: {
            url: hostUrl + 'FirebaseRealtimeFileOperations',
            getImageUrl: hostUrl + 'FirebaseRealtimeGetImage',
            uploadUrl: hostUrl + 'FirebaseRealtimeUpload',
            downloadUrl: hostUrl + 'FirebaseRealtimeDownload'
        },
        contextMenuSettings: {
            layout: ["SortBy", "View", "Refresh", "|", "Paste", "|", "NewFolder", "|", "Details", "|", "SelectAll"],
            visible: true,
            file: [ "Cut", "Copy", "|", "Delete", "Download", "Rename", "|", "Details"]
        },
        toolbarSettings: { items: ['NewFolder', 'SortBy', 'Refresh', 'Cut', 'Copy', 'Paste', 'Delete', 'Download', 'Rename', 'Selection', 'View', 'Details'] }
    });
    fileObject.appendTo('#filemanager');
};