/**
 * File Manager Sequential upload feature sample
 */
this.default = function() {
    var hostUrl = 'https://physical-service.syncfusion.com/';
    // Initialize the FileManager component
    var fileObject = new ej.filemanager.FileManager({
        ajaxSettings: {
            url: hostUrl + 'api/FileManager/FileOperations',
            getImageUrl: hostUrl + 'api/FileManager/GetImage',
            uploadUrl: hostUrl + 'api/FileManager/Upload',
            downloadUrl: hostUrl + 'api/FileManager/Download'    
        },
        uploadSettings: { sequentialUpload: true, directoryUpload: true },
        toolbarItems: [{ name: 'NewFolder' }, 
            { name: 'Upload' },
            { name: 'SortBy' },
            { name: 'Refresh' },
            { name: 'Cut' },
            { name: 'Copy' },
            { name: 'Paste' },
            { name: 'Download' },
            { name: 'Delete' },
            { name: 'Rename' },
            { name: 'Selection' },
            { name: 'View' },
            { name: 'Details' }],
    });
    fileObject.appendTo('#filemanager');
};
