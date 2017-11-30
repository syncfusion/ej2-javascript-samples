this.default = function () {

    // Render the TreeView using template option
    var treeObj = new ej.navigations.TreeView({
        fields: { dataSource: window.employeeData, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' },
        cssClass: 'custom',
        nodeTemplate: '#treeTemplate'
    });
    treeObj.appendTo('#tree');
};