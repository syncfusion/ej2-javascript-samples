var species = [
    { 'Name': 'Species', 'fillColor': '#3DD94A' },
    { 'Name': 'Plants', 'Category': 'Species' },
    { 'Name': 'Fungi', 'Category': 'Species' },
    { 'Name': 'Lichens', 'Category': 'Species' },
    { 'Name': 'Animals', 'Category': 'Species' },
    { 'Name': 'Mosses', 'Category': 'Plants' },
    { 'Name': 'Ferns', 'Category': 'Plants' },
    { 'Name': 'Gymnosperms', 'Category': 'Plants' },
    { 'Name': 'Dicotyledens', 'Category': 'Plants' },
    { 'Name': 'Monocotyledens', 'Category': 'Plants' },
    { 'Name': 'Invertebrates', 'Category': 'Animals' },
    { 'Name': 'Vertebrates', 'Category': 'Animals' },
    { 'Name': 'Insects', 'Category': 'Invertebrates' },
    { 'Name': 'Molluscs', 'Category': 'Invertebrates' },
    { 'Name': 'Crustaceans', 'Category': 'Invertebrates' },
    { 'Name': 'Others', 'Category': 'Invertebrates' },
    { 'Name': 'Fish', 'Category': 'Vertebrates' },
    { 'Name': 'Amphibians', 'Category': 'Vertebrates' },
    { 'Name': 'Reptiles', 'Category': 'Vertebrates' },
    { 'Name': 'Birds', 'Category': 'Vertebrates' },
    { 'Name': 'Mammals', 'Category': 'Vertebrates' }
];

/**
 * Local Data Binding sample
 */
ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding, ej.diagrams.HierarchicalTree);
this.default = function () {
    //Initializes diagram control
    var diagram = new ej.diagrams.Diagram({
        width: '100%', height: 490,
        //Configures data source
        dataSourceSettings: {
            id: 'Name', parentId: 'Category', dataManager: new ej.data.DataManager(species),
            //binds the external data with node
            doBinding: function (nodeModel, data, diagram) {
                nodeModel.annotations = [{
                    content: data.Name, style: { color: 'black' }
                }];
                nodeModel.style = { fill: '#ffeec7', strokeColor: '#f5d897', strokeWidth: 1 };
            }
        },
        //Configrues HierarchicalTree layout
        layout: {
            type: 'HierarchicalTree', horizontalSpacing: 15, verticalSpacing: 50,
            margin: { top: 10, left: 10, right: 10, bottom: 0 },
        },
        //Sets the default values of nodes
        getNodeDefaults: function (obj) {
            obj.shape = { type: 'Basic', shape: 'Rectangle' };
            obj.style = { strokeWidth: 1 };
            obj.width = 95;
            obj.height = 30;
        },
        //Sets the default values of connectors.
        getConnectorDefaults: function (connector) {
            connector.type = 'Orthogonal';
            connector.style.strokeColor = '#4d4d4d';
            connector.targetDecorator.shape = 'None';
        },
        //Disables all interactions except zoom/pan
        tool: ej.diagrams.DiagramTools.ZoomPan,
        snapSettings: { constraints: 0 }
    });
    diagram.appendTo('#diagram');
};
