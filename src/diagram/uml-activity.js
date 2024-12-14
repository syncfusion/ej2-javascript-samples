/* jshint esversion: 9 */
/**
 * UMLActivity Diagram for customer service
 */



// Default function to initialize the diagram and symbol palette
this.default = function () {
    // Function to define ports for a node based on its ID
    function getNodePorts(node) {
        if (node.id === 'ForkNode' || node.id === 'JoinNode') {
            var node2Ports = [
                { id: 'port1', offset: { x: 0.2, y: 1 } },
                { id: 'port2', offset: { x: 0.8, y: 1 } },
                { id: 'port3', offset: { x: 0.2, y: 0 } },
                { id: 'port4', offset: { x: 0.8, y: 0 } },
            ];
            return node2Ports;
        } else {
            var ports = [
                { id: 'portLeft', offset: { x: 0, y: 0.5 } },
                { id: 'portRight', offset: { x: 1, y: 0.5 } },
                { id: 'portBottom', offset: { x: 0.5, y: 1 } },
                { id: 'portTop', offset: { x: 0.5, y: 0 } },
            ];
            return ports;
        }
    }

    // Function to generate  connector symbols for the symbol palette
    function getConnectors() {
        // Define the target decorator for connectors
        var targetDecorator = { shape: 'Arrow', style: { fill: '#757575', strokeColor: '#757575' } };
        // Define source and target points for connectors
        var sourcePoint = { x: 0, y: 0 };
        var targetPoint = { x: 40, y: 40 };
        // Define connector symbols with different styles and types
        var connectorSymbols = [
            {
                id: 'Link2', sourcePoint: sourcePoint, targetPoint: targetPoint,
                type: 'Orthogonal', style: getConnectorStyle(true), targetDecorator: targetDecorator,
            },
            {
                id: 'Link1', sourcePoint: sourcePoint, targetPoint: targetPoint,
                type: 'Orthogonal', style: getConnectorStyle(), targetDecorator: targetDecorator,
            },
            {
                id: 'Link3', sourcePoint: sourcePoint, targetPoint: targetPoint,
                type: 'Straight', style: getConnectorStyle(), targetDecorator: targetDecorator,
            }
        ];
        return connectorSymbols;
    }

    // Function to sets style for the connector symbols for the symbol palette
    function getConnectorStyle(dashArrayed) {
        var style = {};
        if (dashArrayed) {
            style = { strokeWidth: 2, strokeColor: '#757575', strokeDashArray: '4 4', };
        } else {
            style = { strokeWidth: 2, strokeColor: '#757575' };
        }
        return style;
    }

    // Function to sets the default values for the symbols in the symbol palette
    function setPaletteNodeDefaults(symbol) {
        if (symbol.id === 'JoinNode') {
            symbol.width = 20; symbol.height = 50;
        } else if (symbol.id === 'ForkNode') {
            symbol.width = 50; symbol.height = 20;
        } else if (symbol.id === 'Decision' || symbol.id === 'MergeNode') {
            symbol.width = 50; symbol.height = 40;
        } else {
            symbol.width = 50; symbol.height = 50;
        }
        if (symbol.id === 'InitialNode' || symbol.id === 'FinalNode' || symbol.id === 'JoinNode' || symbol.id === 'ForkNode') {
            symbol.style.fill = '#757575';
        }
        symbol.style.strokeColor = '#757575';
    }

    // Function to add event listeners
    function addEvents() {
        var isMobile = window.matchMedia('(max-width:550px)').matches;
        if (isMobile) {
            var paletteIcon = document.getElementById('palette-icon');
            if (paletteIcon) {
                paletteIcon.addEventListener('click', openPalette, false);
            }
        }
    }

    // Function to open or close the palette on mobile devices
    function openPalette() {
        var paletteSpace = document.getElementById('palette-space');
        isMobile = window.matchMedia('(max-width:550px)').matches;
        if (isMobile) {
            if (!paletteSpace.classList.contains('sb-mobile-palette-open')) {
                paletteSpace.classList.add('sb-mobile-palette-open');
            }
            else {
                paletteSpace.classList.remove('sb-mobile-palette-open');
            }
        }
    }
    var bounds = document.getElementById('diagram-space').getBoundingClientRect();
    var centerX = bounds.width / 2;
    var middle = centerX - 50;
    var left = middle - 120;
    var right = middle + 120;

    // Common function to get default node properties
    function getDefaultNode(id, height, width, offsetX, offsetY, type, shapeType, annotations) {
        return {
            id: id,
            height: height,
            width: width,
            offsetX: offsetX,
            offsetY: offsetY,
            shape: { type: type, shape: shapeType },
            annotations: annotations
        };
    }

    // Node configurations 
    //Initializes the nodes for the diagram.
    var nodes = [
        getDefaultNode("Start", 40, 40, 300, 20, "UmlActivity", "InitialNode"),
        getDefaultNode("ReceiveCall", 40, 105, 300, 100, "UmlActivity", "Action", [{ content: "Receive Customer Call" }]),
        getDefaultNode("ForkNode", 10, 70, 300, 170, "UmlActivity", "ForkNode"),
        getDefaultNode("Determine", 40, 105, 190, 250, "UmlActivity", "Action", [{ content: "Determine Type of Call" }]),
        getDefaultNode("Log", 40, 105, 410, 250, "UmlActivity", "Action", [{ content: "Customer Logging a Call" }]),
        getDefaultNode("Decision", 50, 50, 190, 350, "UmlActivity", "Decision"),
        getDefaultNode("transfer_sales", 40, 105, 100, 450, "UmlActivity", "Action", [{ content: "Transfer the Call to Sales" }]),
        getDefaultNode("transfer_desk", 40, 105, 280, 450, "UmlActivity", "Action", [{ content: "Transfer the Call to Help Desk" }]),
        getDefaultNode("MergeNode", 50, 50, 190, 540, "UmlActivity", "MergeNode"),
        getDefaultNode("JoinNode", 10, 70, 300, 630, "UmlActivity", "JoinNode"),
        getDefaultNode("CloseCall", 40, 105, 300, 710, "UmlActivity", "Action", [{ content: "Close Call", margin: { left: 25, right: 25 } }]),
        getDefaultNode("FinalNode", 40, 40, 300, 800, "UmlActivity", "FinalNode")
    ];

    // Common function to get default connector properties
    function getDefaultConnector(id, sourceID, targetID, additionalProps) {
        return {
            id: id,
            sourceID: sourceID,
            targetID: targetID,
            ...additionalProps
        };
    }

    // Connector configurations
    //Initializes the connector for the diagram.
    var connectors = [
        getDefaultConnector("connector1", "Start", "ReceiveCall"),
        getDefaultConnector("connector2", "ReceiveCall", "ForkNode"),
        getDefaultConnector("connector3", "ForkNode", "Determine", {
            sourcePortID: "port1",
            targetPortID: "portTop",
            segments: [
                { type: "Orthogonal", length: 20, direction: "Bottom" },
                { type: "Orthogonal", length: 50, direction: "Left" }
            ]
        }),
        getDefaultConnector("connector4", "ForkNode", "Log", {
            sourcePortID: "port2",
            targetPortID: "portTop",
            segments: [
                { type: "Orthogonal", length: 20, direction: "Bottom" },
                { type: "Orthogonal", length: 50, direction: "Right" }
            ]
        }),
        getDefaultConnector("connector5", "Determine", "Decision"),
        getDefaultConnector("connector6", "Decision", "transfer_sales", {
            sourcePortID: "portLeft",
            targetPortID: "portTop",
            shape: { type: "UmlActivity", flow: "Association" },
            annotations: [{
                id: "connector6Label", content: "type=New Customer", offset: 0.715,
                style: { fill: "white", color: "black", textWrapping: 'NoWrap' }
            }]
        }),
        getDefaultConnector("connector7", "Decision", "transfer_desk", {
            sourcePortID: "portRight",
            targetPortID: "portTop",
            shape: { type: "UmlActivity", flow: "Association" },
            annotations: [{
                id: "connector7Label", content: "type=Existing Customer", offset: 0.75,
                style: { fill: "white", color: "black", textWrapping: 'NoWrap' }
            }]
        }),
        getDefaultConnector("connector8", "transfer_sales", "MergeNode", {
            sourcePortID: "portBottom",
            targetPortID: "portLeft",
            segments: [{ type: "Orthogonal", length: 50, direction: "Bottom" }]
        }),
        getDefaultConnector("connector9", "transfer_desk", "MergeNode", {
            sourcePortID: "portBottom",
            targetPortID: "portRight",
            segments: [{ type: "Orthogonal", length: 50, direction: "Bottom" }]
        }),
        getDefaultConnector("connector10", "MergeNode", "JoinNode", {
            sourcePortID: "portBottom",
            targetPortID: "port3"
        }),
        getDefaultConnector("connector11", "Log", "JoinNode", {
            sourcePortID: "portBottom",
            targetPortID: "port4",
            segments: [
                { type: "Orthogonal", length: 265, direction: "Bottom" },
                { type: "Orthogonal", length: 50, direction: "Left" }
            ]
        }),
        getDefaultConnector("connector12", "JoinNode", "CloseCall"),
        getDefaultConnector("connector13", "CloseCall", "FinalNode")
    ];


    // initializes the uml activity symbols to the UML Shapes in the symbol palette
    var umlActivityShapes = [
        { id: 'Action', shape: { type: 'UmlActivity', shape: 'Action' } },
        { id: 'Decision', shape: { type: 'UmlActivity', shape: 'Decision' } },
        { id: 'MergeNode', shape: { type: 'UmlActivity', shape: 'MergeNode' } },
        { id: 'InitialNode', shape: { type: 'UmlActivity', shape: 'InitialNode' } },
        { id: 'FinalNode', shape: { type: 'UmlActivity', shape: 'FinalNode' } },
        { id: 'ForkNode', shape: { type: 'UmlActivity', shape: 'ForkNode' } },
        { id: 'JoinNode', shape: { type: 'UmlActivity', shape: 'JoinNode' } },
        { id: 'TimeEvent', shape: { type: 'UmlActivity', shape: 'TimeEvent' } },
        { id: 'AcceptingEvent', shape: { type: 'UmlActivity', shape: 'AcceptingEvent' } },
        { id: 'SendSignal', shape: { type: 'UmlActivity', shape: 'SendSignal' } },
        { id: 'ReceiveSignal', shape: { type: 'UmlActivity', shape: 'ReceiveSignal' } },
        { id: 'StructuredNode', shape: { type: 'UmlActivity', shape: 'StructuredNode' } },
        { id: 'Note', shape: { type: 'UmlActivity', shape: 'Note' } }
    ];

    //Initializes diagram control
    var diagram = new ej.diagrams.Diagram({
        // sets the height and width of the diagram
        width: '100%', height: '100%',
        // sets the nodes and connectors of the diagram
        nodes: nodes, connectors: connectors,
        // sets snap settings to the diagram
        snapSettings: {
            constraints: ej.diagrams.SnapConstraints.None
        },
        //Sets the default values of a node
        getNodeDefaults: function (node) {
            node.ports = getNodePorts(node);
            if (node.ports) {
                for (var i = 0; i < node.ports.length; i++) {
                    node.ports[i].visibility = ej.diagrams.PortVisibility.Hidden;
                }
            }
            if (node.id === 'Start' || node.id === 'ForkNode' || node.id === 'JoinNode' || node.id === 'FinalNode') {
                node.style.fill = '#444';
            }
            node.style.strokeColor = '#444';
            return node;
        },
        //Sets the default values of a Connector.
        getConnectorDefaults: function (connector) {
            if (connector.id.indexOf('connector') !== -1) {
                connector.type = 'Orthogonal'; connector.cornerRadius = 10;
                connector.targetDecorator = { shape: 'OpenArrow', style: { strokeColor: '#444', fill: '#444' } };
            }
        },
        created: function () {
            addEvents();
        }
    });
    diagram.appendTo('#diagram');
    //Initializes symbol palette
    var palette = new ej.diagrams.SymbolPalette({
        // sets the expandable mode of the symbol palette
        expandMode: 'Multiple',
        // sets the height and wodth of the symbol palette
        width: '100%', height: '100%',
        // sets the default values for the symbols in the symbol palette
        getNodeDefaults: setPaletteNodeDefaults,
        // sets the height and width of the symbols
        symbolHeight: 55, symbolWidth: 55,
        // sets the margin for the symbol
        symbolMargin: { left: 10, right: 10, top: 10, bottom: 10 },
        // sets the palettes to be displayed in the symbol palette
        palettes: [
            { id: 'umlActivity', expanded: true, symbols: umlActivityShapes, title: 'UML Shapes' },
            { id: 'Connector', expanded: true, symbols: getConnectors(), title: 'Connectors' },
        ],
        getSymbolInfo: function (symbol) { return { fit: true }; }
    });
    palette.appendTo('#symbolPalette');
};
