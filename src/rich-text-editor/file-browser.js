/*jshint esversion: 6 */
/**
 * Rich Text Editor FileBrowser sample
 */
this.default = function () {
    var hostUrl = 'https://services.syncfusion.com/js/production/';
    
    var defaultRTE = new ej.richtexteditor.RichTextEditor({
        toolbarSettings: {
            items: ['FileManager', 'Image']
        },
        fileManagerSettings: {
            enable: true,
            ajaxSettings: {
                url: hostUrl + 'api/RichTextEditor/FileOperations',
                getImageUrl: hostUrl + 'api/RichTextEditor/GetImage',
                uploadUrl: hostUrl + 'api/RichTextEditor/Upload',
                downloadUrl: hostUrl + 'api/RichTextEditor/Download'
            }
        }
    });
    defaultRTE.appendTo('#defaultRTE');
};