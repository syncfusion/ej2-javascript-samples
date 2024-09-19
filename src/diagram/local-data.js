/**
 * Local Data Binding sample
 */
ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding, ej.diagrams.HierarchicalTree);
this.default = function () {
    //Initializes diagram control
    var diagram = new ej.diagrams.Diagram({
        width: '100%', height: '350px',
        //Configures data source
        dataSourceSettings: {
            id: 'Name', parentId: 'Category', dataSource: new ej.data.DataManager(window.species),
            //binds the external data with node
            doBinding: function (nodeModel, data) {
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
