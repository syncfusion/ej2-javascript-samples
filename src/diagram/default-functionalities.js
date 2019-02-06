/**
 * Default FlowShape sample
 */
ej.diagrams.Diagram.Inject(ej.diagrams.UndoRedo);

//Create and add ports for node.
function getNodePorts(obj) {
    var ports = [
        { id: 'nport1', shape: 'Circle', offset: { x: 0, y: 0.5 } },
        { id: 'nport2', shape: 'Circle', offset: { x: 0.5, y: 1 } },
        { id: 'nport3', shape: 'Circle', offset: { x: 1, y: 0.5 } },
        { id: 'nport4', shape: 'Circle', offset: { x: 0.5, y: 0 } }
    ];
    return ports;
}

function addEvents() {
    var isMobile = window.matchMedia('(max-width:550px)').matches;
    if (isMobile) {
        var pIcon = document.getElementById('palette-icon');
        if (pIcon) {
            pIcon.addEventListener('click', openPalette, false);
        }
    }
}

function openPalette() {
    var pSpace = document.getElementById('palette-space');
    isMobile = window.matchMedia('(max-width:550px)').matches;
    if (isMobile) {
        if (!pSpace.classList.contains('sb-mobile-palette-open')) {
            pSpace.classList.add('sb-mobile-palette-open');
        }
        else {
            pSpace.classList.remove('sb-mobile-palette-open');
        }
    }
}

this.default = function () {
    var bounds = document.getElementById('diagram-space').getBoundingClientRect();
    var centerX = bounds.width / 2;
    //Initializes the nodes for the diagram
    var nodes = [{
        id: 'NewIdea', height: 60, offsetX: centerX - 50, offsetY: 80,
        shape: { type: 'Flow', shape: 'Terminator' },
        annotations: [{
            content: 'Place Order'
        }]
    }, {
        id: 'Meeting', height: 60, offsetX: centerX - 50, offsetY: 160,
        shape: { type: 'Flow', shape: 'Process' },
        annotations: [{
            content: 'Start Transaction'
        }]
    }, {
        id: 'BoardDecision', height: 60, offsetX: centerX - 50, offsetY: 240,
        shape: { type: 'Flow', shape: 'Process' },
        annotations: [{
            content: 'Verification'
        }]
    }, {
        id: 'Project', height: 60, offsetX: centerX - 50, offsetY: 330,
        shape: { type: 'Flow', shape: 'Decision' },
        annotations: [{
            content: 'Credit card valid?'
        }]
    }, {
        id: 'End', height: 60, offsetX: centerX - 50, offsetY: 430,
        shape: { type: 'Flow', shape: 'Decision' },
        annotations: [{
            content: 'Funds available?'
        }]
    }, {
        id: 'node11', height: 60, offsetX: (centerX - 50) + 230, offsetY: 330,
        shape: { type: 'Flow', shape: 'Process' },
        annotations: [{
            content: 'Enter payment method'
        }]
    }, {
        id: 'transaction_entered', height: 60, offsetX: (centerX - 50), offsetY: 630,
        shape: { type: 'Flow', shape: 'Terminator' },
        annotations: [{
            content: 'Log transaction'
        }]
    }, {
        id: 'node12', height: 60, offsetX: (centerX - 50) + 180, offsetY: 630,
        shape: { type: 'Flow', shape: 'Process' },
        annotations: [{
            content: 'Reconcile the entries'
        }]
    }, {
        id: 'transaction_completed', height: 60, offsetX: (centerX - 50), offsetY: 530,
        shape: { type: 'Flow', shape: 'Process' },
        annotations: [{
            content: 'Complete Transaction'
        }]
    }, {
        id: 'data', height: 45, offsetX: (centerX - 50) - 190, offsetY: 530,
        shape: { type: 'Flow', shape: 'Data' },
        annotations: [{
            content: 'Send e-mail', margin: { left: 25, right: 25 }
        }]
    }, {
        id: 'node10', height: 70, offsetX: (centerX - 50) + 175, offsetY: 530,
        shape: { type: 'Flow', shape: 'DirectData' },
        annotations: [{ content: 'Customer Database', margin: { left: 25, right: 25 } }]
    }];
    //Initializes the Connectors for the diagram
    var connectors = [
        {
            id: 'connector1', sourceID: 'NewIdea', targetID: 'Meeting'
        },
        { id: 'connector2', sourceID: 'Meeting', targetID: 'BoardDecision' },
        { id: 'connector3', sourceID: 'BoardDecision', targetID: 'Project' },
        {
            id: 'connector4', sourceID: 'Project',
            annotations: [{ content: 'Yes', style: { fill: 'white' } }], targetID: 'End'
        },
        {
            id: 'connector5', sourceID: 'End',
            annotations: [{ content: 'Yes', style: { fill: 'white' } }], targetID: 'transaction_completed'
        },
        { id: 'connector6', sourceID: 'transaction_completed', targetID: 'transaction_entered' },
        { id: 'connector7', sourceID: 'transaction_completed', targetID: 'data' },
        { id: 'connector8', sourceID: 'transaction_completed', targetID: 'node10' },
        {
            id: 'connector9', sourceID: 'node11', targetID: 'Meeting',
            segments: [{ direction: 'Top', type: 'Orthogonal', length: 120 }]
        },
        {
            id: 'connector10', sourceID: 'End', annotations: [{ content: 'No', style: { fill: 'white' } }],
            targetID: 'node11', segments: [{ direction: 'Right', type: 'Orthogonal', length: 100 }]
        },
        {
            id: 'connector11', sourceID: 'Project', annotations: [{ content: 'No', style: { fill: 'white' } }],
            targetID: 'node11'
        },
        {
            id: 'connector12', style: { strokeDashArray: '2,2' },
            sourceID: 'transaction_entered', targetID: 'node12'
        }
    ];
    var interval = [1, 9, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75];
    var gridlines = { lineColor: '#e0e0e0', lineIntervals: interval };
    //Initializes diagram control
    var diagram = new ej.diagrams.Diagram({
        width: '100%', height: '700px', nodes: nodes, connectors: connectors,
        snapSettings: { horizontalGridlines: gridlines, verticalGridlines: gridlines },
        //Sets the default values of a node
        getNodeDefaults: function (node) {
            var obj = {};
            if (obj.width === undefined) {
                obj.width = 145;
            } else {
                var ratio = 100 / obj.width;
                obj.width = 100;
                obj.height *= ratio;
            }
            obj.style = { fill: '#357BD2', strokeColor: 'white' };
            obj.annotations = [{ style: { color: 'white', fill: 'transparent' } }];
            obj.ports = getNodePorts(node);
            return obj;
        },
        //Sets the default values of a Connector.
        getConnectorDefaults: function (obj) {
            if (obj.id.indexOf('connector') !== -1) {
                obj.type = 'Orthogonal';
                obj.targetDecorator = { shape: 'Arrow', width: 10, height: 10 };
            }
        },
        //Sets the Node style for DragEnter element.
        dragEnter: function (args) {
            var obj = args.element;
            if (obj instanceof ej.diagrams.Node) {
                var oWidth = obj.width;
                var oHeight = obj.height;
                var ratio = 100 / obj.width;
                obj.width = 100;
                obj.height *= ratio;
                obj.offsetX += (obj.width - oWidth) / 2;
                obj.offsetY += (obj.height - oHeight) / 2;
                obj.style = { fill: '#357BD2', strokeColor: 'white' };
            }
        }
    });
    diagram.appendTo('#diagram');
    //Initialize the flowshapes for the symbol palatte
    var shapes = [
        { id: 'terminator', shape: { type: 'Flow', shape: 'Terminator' } },
        { id: 'process', shape: { type: 'Flow', shape: 'Process' } },
        { id: 'decision', shape: { type: 'Flow', shape: 'Decision' } },
        { id: 'document', shape: { type: 'Flow', shape: 'Document' } },
        { id: 'preDefinedProcess', shape: { type: 'Flow', shape: 'PreDefinedProcess' } },
        { id: 'paperTap', shape: { type: 'Flow', shape: 'PaperTap' } },
        { id: 'directData', shape: { type: 'Flow', shape: 'DirectData' } },
        { id: 'sequentialData', shape: { type: 'Flow', shape: 'SequentialData' } },
        { id: 'sort', shape: { type: 'Flow', shape: 'Sort' } },
        { id: 'multiDocument', shape: { type: 'Flow', shape: 'MultiDocument' } },
        { id: 'collate', shape: { type: 'Flow', shape: 'Collate' } },
        { id: 'summingJunction', shape: { type: 'Flow', shape: 'SummingJunction' } },
        { id: 'or', shape: { type: 'Flow', shape: 'Or' } },
        { id: 'internalStorage', shape: { type: 'Flow', shape: 'InternalStorage' } },
        { id: 'extract', shape: { type: 'Flow', shape: 'Extract' } },
        { id: 'manualOperation', shape: { type: 'Flow', shape: 'ManualOperation' } },
        { id: 'merge', shape: { type: 'Flow', shape: 'Merge' } },
        { id: 'offPageReference', shape: { type: 'Flow', shape: 'OffPageReference' } },
        { id: 'sequentialAccessStorage', shape: { type: 'Flow', shape: 'SequentialAccessStorage' } },
        { id: 'annotation', shape: { type: 'Flow', shape: 'Annotation' } },
        { id: 'annotation2', shape: { type: 'Flow', shape: 'Annotation2' } },
        { id: 'data', shape: { type: 'Flow', shape: 'Data' } },
        { id: 'card', shape: { type: 'Flow', shape: 'Card' } },
        { id: 'delay', shape: { type: 'Flow', shape: 'Delay' } },
    ];
    //Initializes connector symbols for the symbol palette
    var connectorSymbols = [
        {
            id: 'Link1', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
            targetDecorator: { shape: 'Arrow' }, style: { strokeWidth: 1 }
        },
        {
            id: 'link3', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
            style: { strokeWidth: 1 }, targetDecorator: { shape: 'None' }
        },
        {
            id: 'Link21', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
            targetDecorator: { shape: 'Arrow' }, style: { strokeWidth: 1 }
        },
        {
            id: 'link23', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
            style: { strokeWidth: 1 }, targetDecorator: { shape: 'None' }
        },
        {
            id: 'link33', type: 'Bezier', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
            style: { strokeWidth: 1 }, targetDecorator: { shape: 'None' }
        },
    ];
    //Initializes the symbol palette
    var palette = new ej.diagrams.SymbolPalette({
        expandMode: 'Multiple',
        palettes: [
            { id: 'flow', expanded: true, symbols: shapes, iconCss: 'e-ddb-icons e-flow', title: 'Flow Shapes' },
            { id: 'connectors', expanded: true, symbols: connectorSymbols, iconCss: 'e-ddb-icons e-connector', title: 'Connectors' }
        ],
        width: '100%', height: '700px', symbolHeight: 60, symbolWidth: 60,
        getNodeDefaults: function (symbol) {
            if (symbol.id === 'terminator' || symbol.id === 'process') {
                symbol.width = 80;
                symbol.height = 40;
            }
            else if (symbol.id === 'decision' || symbol.id === 'document' || symbol.id === 'preDefinedProcess' ||
                symbol.id === 'paperTap' || symbol.id === 'directData' || symbol.id === 'multiDocument' || symbol.id === 'data') {
                symbol.width = 50;
                symbol.height = 40;
            }
            else {
                symbol.width = 50;
                symbol.height = 50;
            }
        },
        symbolMargin: { left: 15, right: 15, top: 15, bottom: 15 },
        getSymbolInfo: function (symbol) {
            return { fit: true };
        }
    });
    palette.appendTo('#symbolpalette');
    addEvents();
};

