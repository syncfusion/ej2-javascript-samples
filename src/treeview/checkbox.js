this.default = function () {
    // Render the TreeView with checkboxes
   var treeObj = new ej.navigations.TreeView({
        fields: { dataSource: window.checkBoxData, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' },
        showCheckBox: true,
    });
    treeObj.appendTo('#tree');
};