this.default = function () {
    // Render the TreeView using template option
    var treeObj = new ej.navigations.TreeView({
        fields: { dataSource: window.mailBox, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' },
        nodeTemplate: '#treeTemplate'
    });
    treeObj.appendTo('#tree');
};