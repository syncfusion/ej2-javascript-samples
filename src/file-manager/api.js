/**
 * File Manager API sample
 */
this.default = function () {
    var hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';
    var fileObject = new ej.filemanager.FileManager({
        ajaxSettings: {
            url: hostUrl + 'api/FileManager/FileOperations',
            getImageUrl: hostUrl + 'api/FileManager/GetImage',
            uploadUrl: hostUrl + 'api/FileManager/Upload',
            downloadUrl: hostUrl + 'api/FileManager/Download'
        },
        navigationPaneSettings: { visible: false },
        contextMenuSettings: {
            layout: ["SortBy", "View", "Refresh", "|", "Paste", "|", "NewFolder", "|", "Details", "|", "SelectAll"],
            visible: true
        },
        toolbarSettings: { items: ['NewFolder', 'SortBy', 'Refresh', 'Cut', 'Copy', 'Paste', 'Delete', 'Download', 'Rename', 'Selection', 'View', 'Details'] },
        view: 'LargeIcons'
    });
    fileObject.appendTo('#filemanager');

    checkBoxObj = new ej.buttons.CheckBox({ checked: true, change: onToolbarChange });
    checkBoxObj.appendTo('#toolbar');
    multiSelectObj = new ej.buttons.CheckBox({ checked: true, change: onToolbarChange });
    multiSelectObj.appendTo('#multiSelect');
    fileExtendObj = new ej.buttons.CheckBox({ checked: true, change: onToolbarChange });
    fileExtendObj.appendTo('#fileExtension');
    thumbnailObj = new ej.buttons.CheckBox({ checked: true, change: onToolbarChange });
    thumbnailObj.appendTo('#thumbnail');
    var items = ['NewFolder', 'Cut', 'Copy', 'Paste', 'Download', 'Delete', 'Refresh', 'Selection', 'View', 'Details'];
    disableObj = new ej.dropdowns.DropDownList({ dataSource: items, placeholder: "Select item", change: onItemChange });
    disableObj.appendTo('#disable');
    enableObj = new ej.dropdowns.DropDownList({ dataSource: items, placeholder: "Select item" ,change: onItemChange });
    enableObj.appendTo('#enable');

    function onToolbarChange(args) {
        if (this.element.id == "toolbar") {
            fileObject.toolbarSettings.visible = args.checked;
        }
        if (this.element.id == "multiSelect") {
            fileObject.allowMultiSelection = args.checked;
        }
        if (this.element.id == "fileExtension") {
            fileObject.showFileExtension = args.checked;
        }
        if (this.element.id == "thumbnail") {
            fileObject.showThumbnail = args.checked;
        }
    }

    function onItemChange(args) {
        var changedItem = args.itemData.value;
        if (args.element.id == "enable") {
            fileObject.enableToolbarItems([changedItem]);
        }
        else {
            fileObject.disableToolbarItems([changedItem]);
        }
    }
};
