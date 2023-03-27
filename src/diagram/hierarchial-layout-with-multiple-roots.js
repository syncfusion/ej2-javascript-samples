ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding, ej.diagrams.HierarchicalTree, ej.diagrams.LayoutAnimation);

var data = [
    { id: 1, Label: 'Production Manager' },
    { id: 2, Label: 'Control Room', parentId: 1 },
    { id: 3, Label: 'Plant Operator', parentId: 1 },
    { id: 4, Label: 'Foreman', parentId: 2 },
    { id: 5, Label: 'Foreman', parentId: 3 },
    { id: 6, Label: 'Craft Personnel', parentId: 4 },
    { id: 7, Label: 'Craft Personnel', parentId: 4 },
    { id: 8, Label: 'Craft Personnel', parentId: 5 },
    { id: 9, Label: 'Craft Personnel', parentId: 5 },
    { id: 10, Label: 'Administrative Officer' },
    { id: 11, Label: 'Security Supervisor', parentId: 10 },
    { id: 12, Label: 'HR Supervisor', parentId: 10 },
    { id: 13, Label: 'Reception Supervisor', parentId: 10 },
    { id: 14, Label: 'Securities', parentId: 11 },
    { id: 15, Label: 'HR Officer', parentId: 12 },
    { id: 16, Label: 'Receptionist', parentId: 13 },
    { id: 17, Label: 'Maintainence Manager' },
    { id: 18, Label: 'Electrical Supervisor', parentId: 17 },
    { id: 19, Label: 'Mechanical Supervisor', parentId: 17 },
    { id: 20, Label: 'Craft Personnel', parentId: 18 },
    { id: 21, Label: 'Craft Personnel', parentId: 19 },
];
var items = new ej.data.DataManager(data, new ej.data.Query().take(7));

this.default = function () {
//rendering of diagram
var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '499px', snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
    //configures data source settings
    dataSourceSettings: {
        id: 'id', parentId: 'parentId',
        dataSource: items,
        doBinding: function (nodeModel, data, diagram) {
            nodeModel.shape = { type: 'Text', content: data.Label };
        }
    },
    //Disables all interactions except zoom/pan
    tool: ej.diagrams.DiagramTools.ZoomPan,
    //Configures automatic layout
    layout: {
        type: 'HierarchicalTree', verticalSpacing: 30, horizontalSpacing: 40,
        enableAnimation: true
    },
      //Defines the default node and connector properties
    getNodeDefaults: function (obj, diagram) {
        if(obj.data.id === 1 |obj.data.id === 10 |obj.data.id === 17){
            obj.style = { fill: '#1c5b9b', strokeColor: 'none', color: 'white', strokeWidth: 2 };
            obj.borderColor = '#1c5b9b';
            obj.backgroundColor = '#1c5b9b';
         }
         else if(obj.data.id === 2 |obj.data.id === 3 |obj.data.id === 11 |obj.data.id ===12 |obj.data.id === 13|obj.data.id === 18|obj.data.id === 19) {
            obj.style = { fill: '#18c1be', strokeColor: '#18c1be', color: 'white', strokeWidth: 2 };
            obj.borderColor = '#18c1be';
            obj.backgroundColor = '#18c1be';
         }
         else if(obj.data.id === 4|obj.data.id === 5 |obj.data.id === 14 |obj.data.id === 15|obj.data.id ===16|obj.data.id ===20|obj.data.id ===21) {
            obj.style = { fill: '#17a573', strokeColor: 'none', color: 'white', strokeWidth: 2 };
            obj.borderColor = '#17a573';
            obj.backgroundColor = '#17a573';
         }
         else {
            obj.style = { fill: '#73bb34', strokeColor: 'none', color: 'white', strokeWidth: 2 };
            obj.borderColor = '#73bb34';
            obj.backgroundColor = '#73bb34';
         }
        obj.width = 75;
        obj.height =35;
        obj.shape.margin = { left: 5, right: 5, bottom: 5, top: 5 };
        return obj;
    },
    getConnectorDefaults: function (connector, diagram) {
        connector.type = 'Orthogonal';
        return connector;
    }
});
diagram.appendTo('#diagram');
};