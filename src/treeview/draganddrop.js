this.default = function () {
    // Render the TreeView with multi selection and drag and drop option
    var treeObj = new ej.navigations.TreeView({
        fields: { dataSource: window.productTeamData, id: 'id', text: 'name', child: 'child', selected: 'isSelected' },
        allowDragAndDrop: true,
        allowMultiSelection: true,
    });
    treeObj.appendTo('#tree');
};