/**
 * File Manager sample with firebase realtime database service
 */
this.default = function() {
    var hostUrl = 'https://realtime-firebase.azurewebsites.net/';
    var fileObject = new ej.filemanager.FileManager({
            ajaxSettings: {
                url: hostUrl + 'api/FirebaseProvider/FirebaseRealtimeFileOperations',
                getImageUrl: hostUrl + 'api/FirebaseProvider/FirebaseRealtimeGetImage',
                uploadUrl: hostUrl + 'api/FirebaseProvider/FirebaseRealtimeUpload',
                downloadUrl: hostUrl + 'api/FirebaseProvider/FirebaseRealtimeDownload'
            }
    });
    fileObject.appendTo('#filemanager');
};