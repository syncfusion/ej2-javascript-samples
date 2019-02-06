this.default = function () {
    // Render the TreeView by mapping its fields property with data source properties
    var treeObj = new ej.navigations.TreeView({
        fields: { dataSource: window.hierarchicalData, id: 'id', text: 'name', child: 'subChild' }
    });
    treeObj.appendTo('#tree');
};