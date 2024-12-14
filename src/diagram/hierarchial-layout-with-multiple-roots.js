ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding, ej.diagrams.HierarchicalTree);
//initializes the data



this.default = function () {
    var data = [
        { id: 1, Label: 'Production Manager',color :'#1c5b9b'},
        { id: 2, Label: 'Control Room', parentId: 1,color :'#18c1be' },
        { id: 3, Label: 'Plant Operator', parentId: 1,color :'#18c1be' },
        { id: 4, Label: 'Foreman', parentId: 2 ,color:'#17a573'},
        { id: 5, Label: 'Foreman', parentId: 3 ,color:'#17a573'},
        { id: 6, Label: 'Craft Personnel', parentId: 4 ,color:'#73bb34'},
        { id: 7, Label: 'Craft Personnel', parentId: 4 ,color:'#73bb34'},
        { id: 8, Label: 'Craft Personnel', parentId: 5 ,color:'#73bb34'},
        { id: 9, Label: 'Craft Personnel', parentId: 5 ,color:'#73bb34'},
        { id: 10, Label: 'Administrative Officer',color :'#1c5b9b' },
        { id: 11, Label: 'Security Supervisor', parentId: 10 ,color :'#18c1be'},
        { id: 12, Label: 'HR Supervisor', parentId: 10 ,color :'#18c1be'},
        { id: 13, Label: 'Reception Supervisor', parentId: 10 ,color :'#18c1be'},
        { id: 14, Label: 'Securities', parentId: 11 ,color:'#17a573'},
        { id: 15, Label: 'HR Officer', parentId: 12 ,color:'#17a573' },
        { id: 16, Label: 'Receptionist', parentId: 13 ,color:'#17a573' },
        { id: 17, Label: 'Maintainence Manager',color :'#1c5b9b' },
        { id: 18, Label: 'Electrical Supervisor', parentId: 17 ,color :'#18c1be'},
        { id: 19, Label: 'Mechanical Supervisor', parentId: 17 ,color :'#18c1be'},
        { id: 20, Label: 'Craft Personnel', parentId: 18 ,color:'#17a573'},
        { id: 21, Label: 'Craft Personnel', parentId: 19 ,color:'#17a573'},
    ];
    var items = new ej.data.DataManager(data, new ej.data.Query().take(7));
//Render the diagram
var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '499px', snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
    //configure data source settings
    dataSourceSettings: {
        id: 'id', parentId: 'parentId',
        dataSource: items,
        doBinding: function (nodeModel, data) {
            nodeModel.shape = { type: 'Text', content: data.Label };
        }
    },
    //Disable all interactions except zoom and pan
    tool: ej.diagrams.DiagramTools.ZoomPan,
    //Configure automatic layout
    layout: {
        type: 'HierarchicalTree', verticalSpacing: 30, horizontalSpacing: 40,
    },
      //Define the default node properties
    getNodeDefaults: function (obj) {
        obj.backgroundColor = obj.data.color;
        obj.style.fill = obj.data.color;
        obj.style.color = 'white';
        obj.style.strokeWidth = 2;
        obj.width = 75;
        obj.height = 35;
        obj.shape.margin = { left: 5, right: 5, bottom: 5, top: 5 };
        return obj;
    },
     //Define the default connector properties
    getConnectorDefaults: function (connector) {
        connector.type = 'Orthogonal';
        connector.style = { strokeColor: 'CornflowerBlue' };
        connector.targetDecorator = { shape: 'Arrow', height: 10, width: 10, style: { fill: 'CornflowerBlue', strokeColor: 'white' } };
        return connector;
    }
});
diagram.appendTo('#diagram');
};