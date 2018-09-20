this.default = function () {
    // List data source for TreeView component
    var countries = [
        { id: 1, name: 'Australia', hasChild: true, expanded: true },
        { id: 2, parentId: 1, name: 'New South Wales' },
        { id: 3, parentId: 1, name: 'Victoria', isSelected: true },
        { id: 4, parentId: 1, name: 'South Australia', isSelected: true },
        { id: 6, parentId: 1, name: 'Western Australia' },
        { id: 7, name: 'Brazil', hasChild: true },
        { id: 8, parentId: 7, name: 'Paraná' },
        { id: 9, parentId: 7, name: 'Ceará' },
        { id: 10, parentId: 7, name: 'Acre' },
        { id: 11, name: 'China', hasChild: true },
        { id: 12, parentId: 11, name: 'Guangzhou' },
        { id: 13, parentId: 11, name: 'Shanghai' },
        { id: 14, parentId: 11, name: 'Beijing' },
        { id: 15, parentId: 11, name: 'Shantou' },
        { id: 16, name: 'France', hasChild: true },
        { id: 17, parentId: 16, name: 'Pays de la Loire' },
        { id: 18, parentId: 16, name: 'Aquitaine' },
        { id: 19, parentId: 16, name: 'Brittany' },
        { id: 20, parentId: 16, name: 'Lorraine' },
        { id: 21, name: 'India', hasChild: true },
        { id: 22, parentId: 21, name: 'Assam' },
        { id: 23, parentId: 21, name: 'Bihar' },
        { id: 24, parentId: 21, name: 'Tamil Nadu' },
        { id: 25, parentId: 21, name: 'Punjab' }
    ];
    // Render the TreeView with node multi select option
    var treeObj = new ej.navigations.TreeView({
        fields: { dataSource: countries, id: 'id', parentID: 'parentId', text: 'name', hasChildren: 'hasChild', selected: 'isSelected' },
        allowMultiSelection: true,
    });
    treeObj.appendTo('#tree');
};