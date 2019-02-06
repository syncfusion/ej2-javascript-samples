this.default = function () {
    // Render the TreeView with editing option
    var treeObj = new ej.navigations.TreeView({
        fields: { dataSource: window.treeData, id: 'id', text: 'name', child: 'child' },
        allowEditing: true,
    });
    treeObj.appendTo('#tree');
};