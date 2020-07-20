this.default = function () {
    var ddtreeObj = new ej.dropdowns.DropDownTree({
        fields: {
            dataSource: window.treeViewData, value: 'nodeId', text: 'nodeText', child: 'nodeChild', iconCss: 'icon',
            imageUrl: 'image'
        },
        popupHeight: '200px',
        placeholder: 'Select a folder or file',
        cssClass: "dropdowntree-icon",
    });
    ddtreeObj.appendTo('#icons');
};

