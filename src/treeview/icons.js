this.default = function () {
    // Render the TreeView with image icons
    var treeObj = new ej.navigations.TreeView({
        fields: { dataSource: window.treeViewData, id: 'nodeId', text: 'nodeText', child: 'nodeChild', iconCss: 'icon', imageUrl: 'image' },
        sortOrder: 'Ascending'
    });
    treeObj.appendTo('#tree');
};