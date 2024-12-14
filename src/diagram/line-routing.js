/**
 * Getting started -  Html Node
 */
ej.diagrams.Diagram.Inject(ej.diagrams.UndoRedo, ej.diagrams.LineRouting, ej.diagrams.ConnectorBridging);

// tslint:disable-next-line:max-func-body-length
this.default = function () {
    
    var nodes = [
        {
            id: 'start', offsetX: 115, offsetY: 110, shape: { type: 'Flow', shape: 'Terminator' },
            ports: [{ id: 'port1', offset: { x: 0.5, y: 0 }, visibility: ej.diagrams.PortVisibility.Hidden }],
            style: { fill: '#D5535D' }, annotations: [{ content: 'Start', style: { color: 'white' } }]
        },
        {
            id: 'process', offsetX: 115, offsetY: 255, shape: { type: 'Flow', shape: 'Process' },
            style: { fill: '#65B091' }, annotations: [{ content: 'Process', style: { color: 'white' } }]
        },
        {
            id: 'document', offsetX: 115, offsetY: 400, shape: { type: 'Flow', shape: 'Document' },
            ports: [{ id: 'port1', offset: { x: 0, y: 0.5 }, visibility: ej.diagrams.PortVisibility.Hidden }],
            annotations: [{ content: 'Document', style: { color: 'white' } }], style: { fill: '#5BA5F0' }
        },
        {
            id: 'decision', offsetX: 390, offsetY: 110, shape: { type: 'Flow', shape: 'Decision' },
            style: { fill: '#9A8AF7' }, annotations: [{ content: 'Decision', style: { color: 'white' } }]
        },
        {
            id: 'document2', offsetX: 390, offsetY: 255, shape: { type: 'Flow', shape: 'Document' },
            style: { fill: '#5BA5F0' }, annotations: [{ content: 'Document', style: { color: 'white' } }]
        },
        {
            id: 'end', offsetX: 390, offsetY: 400, shape: { type: 'Flow', shape: 'Terminator' },
            style: { fill: '#D5535D' }, annotations: [{ content: 'End', style: { color: 'white' } }]
        },
        {
            id: 'process2', offsetX: 640, offsetY: 110, shape: { type: 'Flow', shape: 'Process' },
            style: { fill: '#65B091' }, annotations: [{ content: 'Process', style: { color: 'white' } }]
        },
        {
            id: 'card', offsetX: 640, offsetY: 255,
            shape: { type: 'Flow', shape: 'Card' },
            style: { fill: '#76C3F0' },
            annotations: [{ content: 'Card', style: { color: 'white' } }],
            ports: [
                { id: 'port1', offset: { x: 1, y: 0.5 }, visibility: ej.diagrams.PortVisibility.Hidden },
                { id: 'port2', offset: { x: 0.5, y: 1 }, visibility: ej.diagrams.PortVisibility.Hidden }
            ],
        }
    ];
    var connectors = [
        { id: 'Connector1', sourceID: 'start', targetID: 'process', },
        { id: 'Connector2', sourceID: 'process', targetID: 'document' },
        { id: 'Connector3', sourceID: 'document', targetID: 'end' },
        { id: 'Connector4', sourceID: 'start', targetID: 'decision' },
        { id: 'Connector5', sourceID: 'decision', targetID: 'process2' },
        { id: 'Connector6', sourceID: 'process2', targetID: 'card' },
        { id: 'Connector7', sourceID: 'process', targetID: 'document2' },
        { id: 'Connector8', sourceID: 'document2', targetID: 'card' },
        { id: 'Connector9', sourceID: 'start', sourcePortID: 'port1', targetID: 'card', targetPortID: 'port1' },
        { id: 'Connector10', sourceID: 'card', sourcePortID: 'port2', targetID: 'document', targetPortID: 'port1' }
    ];
    // Used to set default values of nodes
    function getNodeDefaults(node) {
        node.height = 50;
        if(node.id === 'decision') {
            node.height = 70;
        }
        node.width = 120;
        node.style = { strokeColor: 'transparent' };
        return node;
    }
    // Used to set default values of connector
    function getConnectorDefaults(connector) {
        connector.type = 'Orthogonal';
        connector.style = { strokeColor: '#707070 ', strokeWidth: 1.25 };
        connector.targetDecorator = { style: { fill: '#707070 ', strokeColor: '#707070 ' } };
        return connector;
    }

    //initialize the diagram control
    var diagram = new ej.diagrams.Diagram({
        width: '100%', height: '500px', nodes: nodes, connectors: connectors,
        // Set diagram constraints to include bridging and line routing
        constraints: ej.diagrams.DiagramConstraints.Default | (ej.diagrams.DiagramConstraints.Bridging | ej.diagrams.DiagramConstraints.LineRouting),
        // Disable snapping for diagram elements
        snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
        // Define default settings for nodes
        getNodeDefaults: getNodeDefaults,
        // Define default settings for connectors
        getConnectorDefaults: getConnectorDefaults,
         // Callback function triggered when the diagram is created
        created: onCreated,
    });
    // Append the diagram to the element with id 'diagram'
    diagram.appendTo('#diagram');
    // Function called when the diagram is created
    function onCreated() {
        // Fit the diagram to the page after it is created
        diagram.fitToPage();
    }
};
