this.default = function () {
    // Render the TreeView with hierarchical data source
    var treeObj = new ej.navigations.TreeView({
        fields: { dataSource: window.continentData, id: 'code', text: 'name', child: 'countries' }
    });
    treeObj.appendTo('#tree');
    
    // Render the TreeView with list data source
    var listTreeObj = new ej.navigations.TreeView({
        fields: { dataSource: window.localData, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' }
    });
    listTreeObj.appendTo('#listtree');
};