/**
 * File Manager Directory upload feature sample
 */
this.default = function() {
    var hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';
    var buttonTemplate = '<button id="dropButton" class="e-tbar-btn e-tbtn-txt"> <span class="e-tbar-btn-text">Upload</span> </button>';
    // Initialize the FileManager component
    var fileObject = new ej.filemanager.FileManager({
            ajaxSettings: {
                url: hostUrl + 'api/FileManager/FileOperations',
                getImageUrl: hostUrl + 'api/FileManager/GetImage',
                uploadUrl: hostUrl + 'api/FileManager/Upload',
                downloadUrl: hostUrl + 'api/FileManager/Download'    
            },
            contextMenuSettings: {
                file: [ "Cut", "Copy", "|", "Delete", "Download", "Rename", "|", "Details"],
                visible: true
            },
            toolbarItems: [{ name: 'NewFolder' }, 
                { template: buttonTemplate, name: 'Upload' },
                { name: 'SortBy' },
                { name: 'Refresh' },
                { name: 'Cut' },
                { name: 'Copy' },
                { name: 'Paste' },
                { name: 'Delete' },
                { name: 'Download' },
                { name: 'Rename' },
                { name: 'Selection' },
                { name: 'View' },
                { name: 'Details' }],
            success: onSuccess
    });
    fileObject.appendTo('#file');
    function onSuccess() {
        if (!document.getElementById('dropButton').classList.contains('e-dropdown-btn')) {
        var items = [{ text: 'Folder' }, { text: 'Files' }];
        var drpDownBtn = new ej.splitbuttons.DropDownButton({
            items: items,
            iconCss: 'e-icons e-fe-upload',
            select: function (args) {
                if (args.item.text === 'Folder') {
                    fileObject.uploadSettings.directoryUpload = true;
                } else {
                    fileObject.uploadSettings.directoryUpload = false;
                }
                setTimeout(function () {
                    var uploadBtn = document.querySelector('.e-file-select-wrap button');
                    uploadBtn.click();
                }, 100);
            }
        });
        drpDownBtn.appendTo('#dropButton');
        document.getElementById('dropButton').onclick = function (args) {
            args.stopPropagation();
        };   
        }
    }
    
};
