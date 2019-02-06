this.default = function () {
    // Render the TreeView with node multi select option
    var treeObj = new ej.navigations.TreeView({
        fields: { dataSource: window.countries, id: 'id', parentID: 'parentId', text: 'name', hasChildren: 'hasChild', selected: 'isSelected' },
        allowMultiSelection: true,
    });
    treeObj.appendTo('#tree');
};