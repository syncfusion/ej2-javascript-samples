// Sample for basic filemanager.
this.default = function () {
    var hostUrl = 'https://ng2jq.syncfusion.com/ej2services/';
    var fileObject = new ej.filemanager.FileManager({
        ajaxSettings: {
            url: hostUrl + 'api/FileManager/FileOperations',
            getImageUrl: hostUrl + 'api/FileManager/GetImage',
            uploadUrl: hostUrl + 'api/FileManager/Upload',
            downloadUrl: hostUrl + 'api/FileManager/Download'
        },
        toolbarSettings: { visible: true },
        navigationPaneSettings: { visible: false },
        view: 'LargeIcons'
    });
    fileObject.appendTo('#filemanager');

    checkBoxObj = new ej.buttons.CheckBox({ checked: true, change: onToolbarChange });
    checkBoxObj.appendTo('#toolbar');

    function onToolbarChange(args) {
        fileObject.toolbarSettings.visible = args.checked;
    }
};