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
        toolbarSettings: { items: ['NewFolder', 'SortBy', 'Refresh', 'Cut', 'Copy', 'Paste', 'Delete', 'Download', 'Rename', 'Selection', 'View', 'Details'] },
        view: 'LargeIcons',
        contextMenuSettings: {
            file: [ "Cut", "Copy", "|", "Delete", "Download", "Rename", "|", "Details"],
            layout: ["SortBy", "View", "Refresh", "|", "Paste", "|", "NewFolder", "|", "Details", "|", "SelectAll"],
            visible: true
        },
        enableRangeSelection: true
    });
    fileObject.appendTo('#filemanager');

    rangeSelectionObj = new ej.buttons.CheckBox({ checked: true, change: onToolbarChange });
    rangeSelectionObj.appendTo('#rangeSelection');
    checkBoxObj = new ej.buttons.CheckBox({ checked: true, change: onToolbarChange });
    checkBoxObj.appendTo('#toolbar');
    fileExtendObj = new ej.buttons.CheckBox({ checked: true, change: onToolbarChange });
    fileExtendObj.appendTo('#fileExtension');
    thumbnailObj = new ej.buttons.CheckBox({ checked: true, change: onToolbarChange });
    thumbnailObj.appendTo('#thumbnail');
    var items = ['NewFolder', 'Cut', 'Copy', 'Paste', 'Download', 'Delete', 'Refresh', 'Selection', 'View', 'Details'];
    disableObj = new ej.dropdowns.DropDownList({ dataSource: items, placeholder: "Select item", change: onDisableItemChange });
    disableObj.appendTo('#disable');
    enableObj = new ej.dropdowns.DropDownList({ dataSource: items, placeholder: "Select item" ,change: onEnableItemChange });
    enableObj.appendTo('#enable');

    function onToolbarChange(args) {
        if (this.element.id == "toolbar") {
            fileObject.toolbarSettings.visible = args.checked;
        }
        if (this.element.id == "fileExtension") {
            fileObject.showFileExtension = args.checked;
        }
        if (this.element.id == "thumbnail") {
            fileObject.showThumbnail = args.checked;
        }
        if (this.element.id == "rangeSelection") {
            fileObject.enableRangeSelection = args.checked;
        }
    }

    function onDisableItemChange(args) {
        if (args.itemData != null){
            fileObject.disableToolbarItems([args.itemData.value]);
            if(args.value === enableObj.value){
                enableObj.value = null;
            }
        }
    }
    
    function onEnableItemChange(args) {
        if (args.itemData != null){
            fileObject.enableToolbarItems([args.itemData.value]);
            if(args.value === disableObj.value){
                disableObj.value = null;
            }
        }
    }
};
