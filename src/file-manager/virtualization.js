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
        view: 'Details',
        virtualizationSettings: {
            enable: true,
            detailsViewItemsCount: 30,
            largeIconsViewItemsCount: 50
        },
        beforeSend: function(args) {
            var data = JSON.parse(args.ajaxSettings.data);  
            // Add custom parameter rootFolderName  
             data.rootFolderName = "FileBrowser"; 
            // Add custom parameter in ajax settings  
             args.ajaxSettings.data = JSON.stringify(data);  
        },
    });
    fileObject.appendTo('#filemanager');
};