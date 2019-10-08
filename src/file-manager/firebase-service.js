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
        }
    });
    fileObject.appendTo('#filemanager');
};