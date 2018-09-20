var artificialIntelligence = [
    { 'Name': 'Artificial Intelligence', 'fillColor': '#916DAF', 'branch': 'root' },
    { 'Name': 'Machine Learning', 'Category': 'Artificial Intelligence' },
    { 'Name': 'Natural Language Processing (NLP)', 'Category': 'Artificial Intelligence' },
    { 'Name': 'Speech', 'Category': 'Artificial Intelligence' },
    { 'Name': 'Planning, Scheduling, and Optimization', 'Category': 'Artificial Intelligence' },
    { 'Name': 'Robotics', 'Category': 'Artificial Intelligence' },
    { 'Name': 'Vision', 'Category': 'Artificial Intelligence' },
    { 'Name': ' Deep Learning ', 'Category': 'Machine Learning' },
    { 'Name': 'Predictive Analytics ', 'Category': 'Machine Learning' },
    { 'Name': 'Translation ', 'Category': 'Natural Language Processing (NLP)' },
    { 'Name': 'Classification', 'Category': 'Natural Language Processing (NLP)' },
    { 'Name': 'Information Extraction', 'Category': 'Natural Language Processing (NLP)' },
    { 'Name': 'Speech to Text', 'Category': 'Speech' },
    { 'Name': 'Text to Speech', 'Category': 'Speech' },
    { 'Name': 'Image Recognition ', 'Category': 'Vision' },
    { 'Name': 'Machine Vision', 'Category': 'Vision' }
];
/**
 * Sample for RTL tree
 */
ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding, ej.diagrams.HierarchicalTree);
this.default = function () {
    //Initializes diagram control
    var diagram = new ej.diagrams.Diagram({
        width: '100%', height: '600px', snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
        //Configure the data source
        dataSourceSettings: {
            id: 'Name', parentId: 'Category',
            dataManager: new ej.data.DataManager(artificialIntelligence),
            doBinding: function (nodeModel, data, diagram) {
                var nameKey = 'Name';
                nodeModel.annotations = [{ content: data[nameKey] }];
            }
        },
        //Configures the layout
        layout: {
            type: 'HierarchicalTree', orientation: 'RightToLeft',
            verticalAlignment: 'Center', horizontalAlignment: 'Center', verticalSpacing: 100,
            horizontalSpacing: -10
        },
        //Enables zoom pan tool 
        tool: ej.diagrams.DiagramTools.ZoomPan,
        //Sets the default values of a Node
        getNodeDefaults: function (obj, diagram) {
            obj.width = 120;
            obj.style = { fill: '#034d6d', strokeWidth: 1 };
            var key = 'branch';
            //set the shape of the Node.
            if (obj.data[key] === 'root') {
                obj.shape = { type: 'Basic', shape: 'Ellipse' };
                obj.height = 120;
            }
            else {
                obj.shape = {
                    type: 'Native',
                    content: '<svg width="120" height="61"><g><line x1="0" x2="120" y1="60" y2="60" stroke-width="1" stroke= "black"></line>' +
                        '<rect x="0" y="0" width="120" height="60" fill="transparent" stroke="none"></rect></g></svg>'
                };
                obj.style.strokeWidth = 0;
                obj.height = 60;
            }
            //Set ports and annotations
            obj.ports = getPorts(obj.data[key] === 'root');
            var annotation = obj.annotations[0];
            if (obj.data[key] !== 'root') {
                annotation.offset = { y: 1 };
                annotation.verticalAlignment = 'Bottom';
                annotation.margin = { bottom: 10 };
            }
            else {
                annotation.style = { color: 'white' };
            }
            return obj;
        },
        //Sets the default values of a Connector
        getConnectorDefaults: function (connector, diagram) {
            connector.type = 'Bezier';
            connector.sourcePortID = 'port1';
            connector.targetPortID = 'port2';
            connector.targetDecorator = { shape: 'None' };
            return connector;
        },
    });
    diagram.appendTo('#diagram');
    //Create and add ports for Node.
    function getPorts(root) {
        var ports = [
            {
                id: 'port1', shape: 'Circle', offset: { x: 0, y: 0.5 }, horizontalAlignment: 'Left',
                verticalAlignment: 'Bottom', margin: { right: -2, bottom: -5.5 }
            },
            {
                id: 'port2', shape: 'Circle', offset: { x: 1, y: 0.99 }, horizontalAlignment: 'Right',
                verticalAlignment: 'Bottom', margin: { right: -2, bottom: -5.5 }
            }
        ];
        if (!root) {
            ports[0].offset.y = 1;
        }
        else {
            ports[0].verticalAlignment = 'Center';
            ports[0].horizontalAlignment = 'Center';
        }
        return ports;
    }
};