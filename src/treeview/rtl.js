this.default = function () {
    // Render the TreeView in RTL format
    var treeObj = new ej.navigations.TreeView({
        fields: { dataSource: window.rtlData, id: 'id', text: 'name', child: 'child' },
        enableRtl: true,
    });
    treeObj.appendTo('#tree');
};