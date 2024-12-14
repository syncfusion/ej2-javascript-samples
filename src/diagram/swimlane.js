/**
 * Default Swimlane sample
 */
ej.diagrams.Diagram.Inject(ej.diagrams.UndoRedo);

this.default = function () {
    //Create and add ports for node.
    var port = [
        { id: 'Port1', offset: { x: 0, y: 0.5 }, visibility: ej.diagrams.PortVisibility.Connect | ej.diagrams.PortVisibility.Hover, constraints: ej.diagrams.PortConstraints.Default | ej.diagrams.PortConstraints.Draw },
        { id: 'Port2', offset: { x: 0.5, y: 0 }, visibility: ej.diagrams.PortVisibility.Connect | ej.diagrams.PortVisibility.Hover, constraints: ej.diagrams.PortConstraints.Default | ej.diagrams.PortConstraints.Draw },
        { id: 'Port3', offset: { x: 1, y: 0.5 }, visibility: ej.diagrams.PortVisibility.Connect | ej.diagrams.PortVisibility.Hover, constraints: ej.diagrams.PortConstraints.Default | ej.diagrams.PortConstraints.Draw },
        { id: 'Port4', offset: { x: 0.5, y: 1 }, visibility: ej.diagrams.PortVisibility.Connect | ej.diagrams.PortVisibility.Hover, constraints: ej.diagrams.PortConstraints.Default | ej.diagrams.PortConstraints.Draw }
    ];

    //To enhance the functionality of a webpage for mobile devices by adding a click event listener 
    function addEvents() {
        var isMobileDevice = window.matchMedia('(max-width:550px)').matches;
        if (isMobileDevice) {
            var paletteIcons = document.getElementById('palette-icon');
            if (paletteIcons) {
                paletteIcons.addEventListener('click', openPalette, false);
            }
        }
    }
    //To manage the visibility state of the palette space on a webpage for mobile devices
    function openPalette() {
        var paletteSpaces = document.getElementById('palette-space');
        isMobileDevice = window.matchMedia('(max-width:550px)').matches;
        if (isMobileDevice) {
            if (!paletteSpaces.classList.contains('sb-mobile-palette-open')) {
                paletteSpaces.classList.add('sb-mobile-palette-open');
            }
            else {
                paletteSpaces.classList.remove('sb-mobile-palette-open');
            }
        }
    }

    var bounds = document.getElementById('diagram-space').getBoundingClientRect();
    var pathData = 'M 120 24.9999 C 120 38.8072 109.642 50 96.8653 50 L 23.135' +
        ' 50 C 10.3578 50 0 38.8072 0 24.9999 L 0 24.9999 C' +
        '0 11.1928 10.3578 0 23.135 0 L 96.8653 0 C 109.642 0 120 11.1928 120 24.9999 Z';
    // Initialize the nodes for the diagram.
    var nodes = [
        {
            id: 'swimlane',
            shape: {
                type: 'SwimLane',
                orientation: 'Horizontal',
                header: {
                    annotation: { content: 'SALES PROCESS FLOW CHART', style: { fill: 'transparent' } },
                    height: 50, style: { fontSize: 11 },
                },
                lanes: [
                    {
                        id: 'stackCanvas1',
                        header: {
                            annotation: { content: 'Consumer' }, width: 50,
                            style: { fontSize: 11 }
                        },
                        height: 100,
                        children: [
                            {
                                id: 'node1',
                                annotations: [
                                    {
                                        content: 'Consumer learns \n of product',
                                        style: { fontSize: 11 }
                                    }
                                ],
                                margin: { left: 60, top: 30 },
                                height: 40, width: 100, ports: port
                            },
                            {
                                id: 'node2',
                                shape: { type: 'Flow', shape: 'Decision' },
                                annotations: [
                                    {
                                        content: 'Does \n Consumer want \nthe product',
                                        style: { fontSize: 11 }
                                    }
                                ],
                                margin: { left: 200, top: 20 },
                                height: 60, width: 120, ports: port
                            },
                            {
                                id: 'node3',
                                annotations: [
                                    {
                                        content: 'No sales lead',
                                        style: { fontSize: 11 }
                                    }
                                ],
                                margin: { left: 380, top: 30 }, shape: { type: 'Path', data: pathData },
                                height: 40, width: 100, ports: port
                            },
                            {
                                id: 'node4',
                                annotations: [
                                    {
                                        content: 'Sell to consumer',
                                        style: { fontSize: 11 }
                                    }
                                ],
                                margin: { left: 510, top: 30 },
                                height: 40, width: 100, ports: port
                            }
                        ],
                    },
                    {
                        id: 'stackCanvas2',
                        header: {
                            annotation: { content: 'Marketing' }, width: 50,
                            style: { fontSize: 11 }
                        },
                        height: 100,
                        children: [
                            {
                                id: 'node5',
                                annotations: [{ content: 'Create marketing campaigns' }],
                                margin: { left: 60, top: 20 },
                                height: 40, width: 100, ports: port
                            },
                            {
                                id: 'node6',
                                annotations: [{ content: 'Marketing finds sales leads' }],
                                margin: { left: 210, top: 20 },
                                height: 40, width: 100, ports: port
                            }
                        ],
                    },
                    {
                        id: 'stackCanvas3',
                        header: {
                            annotation: { content: 'Sales' }, width: 50,
                            style: { fontSize: 11 }
                        },
                        height: 100,
                        children: [
                            {
                                id: 'node7',
                                annotations: [{ content: 'Sales receives lead' }],
                                margin: { left: 210, top: 30 },
                                height: 40, width: 100, ports: port
                            }
                        ],
                    },
                    {
                        id: 'stackCanvas4',
                        header: {
                            annotation: { content: 'Success' }, width: 50,
                            style: { fontSize: 11 }
                        },
                        height: 100,
                        children: [
                            {
                                id: 'node8',
                                annotations: [{ content: 'Success helps \n retain consumer \n as a customer' }],
                                margin: { left: 510, top: 20 },
                                height: 50, width: 100, ports: port
                            }
                        ],
                    },
                ],
                phases: [
                    {
                        id: 'phase1', offset: 170,
                        header: { annotation: { content: 'Phase' } }
                    }
                ],
                phaseSize: 20,
            },
            offsetX: bounds.width / 2, offsetY: bounds.height / 2,
            height: 100,
            width: 650
        },
    ];
    //Set the default values of a node.
    function getNodeDefaults(node) {
        node.style.strokeColor = '#717171';
        node.style.strokeWidth = 1;
        return node;
    }
    //Set the default values of a Connector.
    function getConnectorDefaults(connector) {
        if ((connector.id.indexOf("straight") !== -1) || (connector.id.indexOf("straightdashed") !== -1)) {
            connector.type = 'Straight';
        }
        else {
            connector.type = 'Orthogonal';
        }
        setConnectorStyles(connector, '#717171');
        return connector;
    }
    //set styles for connector
    function setConnectorStyles(connector, color) {
        connector.targetDecorator.style.strokeColor = color;
        connector.targetDecorator.style.fill = color;
        connector.style.strokeColor = color;
        connector.style.strokeWidth = 1;
    }
    //Initialize the Connectors for the diagram
    var connectors = [
        {
            id: 'connector1', sourceID: 'node1',
            targetID: 'node2'
        },
        {
            id: 'connector2', sourceID: 'node2',
            targetID: 'node3', annotations: [{ content: 'No', style: { fill: 'white' } }]
        },
        {
            id: 'connector3', sourceID: 'node4',
            targetID: 'node8'
        },
        {
            id: 'connector4', sourceID: 'node2',
            targetID: 'node6', annotations: [{ content: 'Yes', style: { fill: 'white' } }]
        },
        {
            id: 'connector5', sourceID: 'node5',
            targetID: 'node1'
        },
        {
            id: 'connector6', sourceID: 'node6',
            targetID: 'node7'
        },
        {
            id: 'connector7', sourcePortID: 'Port1', targetPortID: 'Port3', sourceID: 'node4',
            targetID: 'node7'
        },
    ];
    //Initializes diagram control
    var diagram = new ej.diagrams.Diagram({
        // sets the height and width of the diagram.
        width: '100%', height: '100%',
        // sets the nodes and connectors of the diagram.
        nodes: nodes, connectors: connectors,
        getNodeDefaults: getNodeDefaults,
        getConnectorDefaults: getConnectorDefaults,
        snapSettings: {
            constraints: ej.diagrams.SnapConstraints.All & ~ej.diagrams.SnapConstraints.ShowLines
        },

        //Define custom menu items
        contextMenuSettings: {
            show: true, items: [
                {
                    text: 'Copy', id: 'Copy', target: '.e-diagramcontent', iconCss: 'e-menu-icon e-icons e-copy'
                },
                {
                    text: 'Cut', id: 'Cut', target: '.e-diagramcontent', iconCss: 'e-menu-icon e-icons e-cut'
                },
                {
                    text: 'Paste', id: 'Paste', target: '.e-diagramcontent', iconCss: 'e-menu-icon e-icons e-paste'
                },
                {
                    text: 'InsertLaneBefore', id: 'InsertLaneBefore', target: '.e-diagramcontent',
                },
                {
                    text: 'InsertLaneAfter', id: 'InsertLaneAfter', target: '.e-diagramcontent',
                }],
            showCustomMenuOnly: true,
        },
        //Open the context menu 
        contextMenuOpen: function (args) {
            for (var i = 0; i < args.items.length; i++) {
                var item = args.items[i];
                if ((diagram.selectedItems.connectors.length + diagram.selectedItems.nodes.length) > 0) {
                    if (item.id === 'InsertLaneBefore' || item.id === 'InsertLaneAfter') {
                        if (diagram.selectedItems.connectors.length || (diagram.selectedItems.nodes.length && !(diagram.selectedItems.nodes[0]).isLane)) {
                            args.hiddenItems.push(item.text);
                        }
                    }
                } else {
                    args.hiddenItems.push(item.text);
                }
            }
        },
        //Handle click event for menu items.
        contextMenuClick: function (args) {
            if (args.item.id === 'InsertLaneBefore' || args.item.id === 'InsertLaneAfter') {
                if (diagram.selectedItems.nodes.length > 0 && (diagram.selectedItems.nodes[0]).isLane) {
                    var index;
                    var node = diagram.selectedItems.nodes[0];
                    var swimlane = diagram.getObject((diagram.selectedItems.nodes[0]).parentId);
                    var shape = swimlane.shape;
                    var existingLane = ej.diagrams.cloneObject(shape.lanes[0]);
                    var newLane = {
                        id: ej.diagrams.randomId(),
                        header: {
                            width: existingLane.header.width, height: existingLane.header.height,
                            style: existingLane.header.style
                        },
                        style: existingLane.style,
                        height: existingLane.height, width: existingLane.width,
                    };

                    if (shape.orientation === 'Horizontal') {
                        var exclude = 0;
                        exclude += (shape.header) ? 1 : 0;
                        exclude += (shape.phases.length) ? 1 : 0;
                        index = node.rowIndex - exclude;
                        newLane.header.width = existingLane.header.width;
                        newLane.header.height = existingLane.height;
                    } else {
                        index = node.columnIndex - (shape.phases.length) ? 1 : 0;
                        newLane.header.width = existingLane.width;
                        newLane.header.height = existingLane.header.height;
                    }
                    if (args.item.id === 'InsertLaneBefore') {
                        diagram.addLanes(swimlane, [newLane], index);
                    } else {
                        diagram.addLanes(swimlane, [newLane], index + 1);
                    }
                    diagram.clearSelection();
                }
            } else if (args.item.id === 'Cut') {
                diagram.cut();
            } else if (args.item.id === 'Copy') {
                diagram.copy();
            } else if (args.item.id === 'Paste') {
                diagram.paste();
            }
        },
        //Set the node style for the DragEnter element.
        dragEnter: function (args) {
            var obj = args.element;
            if (obj instanceof ej.diagrams.Node) {
                var shape = obj.shape;
                if (shape.isLane) {
                    if (shape.orientation === 'Horizontal') {
                        shape.lanes[0].height = 100;
                        shape.lanes[0].width = 400;
                    } else if (shape.orientation === 'Vertical') {
                        shape.lanes[0].height = 400;
                        shape.lanes[0].width = 100;
                    }
                }
            }
        },
        selectedItems: { constraints: ej.diagrams.SelectorConstraints.All & ~ej.diagrams.SelectorConstraints.Rotate }

    });
    diagram.appendTo('#diagram');
    // Check if the current environment is a device and fit diagram to page if true
    if (ej.base.Browser.isDevice) {
        diagram.fitToPage();
    }
    // Initializes the palettes for display in the symbol palette 
    var palettes = [
        {
            // Initialize flowshapes for the palettes 
            id: 'flow', expanded: true, title: 'Flow Shapes', symbols: [
                {
                    id: 'Terminator', width: 50, height: 60, addInfo: { tooltip: 'Terminator' }, shape: { type: 'Flow', shape: 'Terminator' }, ports: port
                },
                {
                    id: 'Process', addInfo: { tooltip: 'Process' }, width: 50, height: 60, shape: { type: 'Flow', shape: 'Process' }, ports: port
                },
                {
                    id: 'Decision', addInfo: { tooltip: 'Decision' }, width: 50, height: 50, shape: { type: 'Flow', shape: 'Decision' }, ports: port
                },
                {
                    id: 'Document', addInfo: { tooltip: 'Document' }, width: 50, height: 50, shape: { type: 'Flow', shape: 'Document' }, ports: port
                },
                {
                    id: 'PreDefinedProcess', addInfo: { tooltip: 'Predefined process' }, width: 50, height: 50, shape: { type: 'Flow', shape: 'PreDefinedProcess' }, ports: port
                },
                {
                    id: 'data', addInfo: { tooltip: 'Data' }, width: 50, height: 50, shape: { type: 'Flow', shape: 'Data' }, ports: port,
                },
            ]
        },
        {
            // Initialize Swimlane for the palettes 
            id: 'swimlaneShapes', expanded: true,
            title: 'Swimlane Shapes',
            symbols: [
                {
                    id: 'horizontalSwimlane', addInfo: { tooltip: 'Horizontal swimlane' },
                    shape: {
                        type: 'SwimLane', lanes: [
                            {
                                id: 'lane1',
                                height: 60, width: 150,
                                header: { width: 50, height: 50, style: { fontSize: 11 } },
                            }
                        ],
                        orientation: 'Horizontal', isLane: true
                    },
                    height: 60,
                    width: 140,
                    offsetX: 70,
                    offsetY: 30,
                }, {
                    id: 'verticalSwimlane', addInfo: { tooltip: 'Vertical swimlane' },
                    shape: {
                        type: 'SwimLane',
                        lanes: [
                            {
                                id: 'lane1',
                                height: 150, width: 60,
                                header: { width: 50, height: 50, style: { fontSize: 11 } },
                            }
                        ],
                        orientation: 'Vertical', isLane: true
                    },
                    height: 140,
                    width: 60,
                    offsetX: 70,
                    offsetY: 30,
                }, {
                    id: 'verticalPhase', addInfo: { tooltip: 'Vertical phase' },
                    shape: {
                        type: 'SwimLane',
                        phases: [{ style: { strokeWidth: 1, strokeDashArray: '3,3' } }],
                        annotations: [{ text: '' }],
                        orientation: 'Vertical', isPhase: true
                    },
                    height: 60,
                    width: 140
                }, {
                    id: 'horizontalPhase', addInfo: { tooltip: 'Horizontal phase' },
                    shape: {
                        type: 'SwimLane',
                        phases: [{ style: { strokeWidth: 1, strokeDashArray: '3,3' } }],
                        annotations: [{ text: '' }],
                        orientation: 'Horizontal', isPhase: true
                    },
                    height: 60,
                    width: 140,
                }
            ]
        },
        {
            // Initialize connectors for the palettes 
            id: 'connectors', expanded: true, symbols: [
                {
                    id: 'orthogonal', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 40, y: 40 }
                },
                {
                    id: 'orthogonaldashed', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 40, y: 40 },
                    style: { strokeDashArray: '4 4' }
                },
                {
                    id: 'straight', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
                },
                {
                    id: 'straightdashed', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
                    style: { strokeDashArray: '4 4' }
                }
            ], title: 'Connectors'
        }
    ];
    //Initializes the symbol palette
    var palette = new ej.diagrams.SymbolPalette({
        expandMode: 'Multiple',
        palettes: palettes,
        width: '100%', height: '100%',
        symbolMargin: { left: 8, right: 8, top: 8, bottom: 8 },
        symbolHeight: 48, symbolWidth: 48,
        getNodeDefaults: getNodeDefaults,
        getConnectorDefaults: getConnectorDefaults,
        getSymbolInfo: function (symbol) {
            return { tooltip: symbol.addInfo ? symbol.addInfo.tooltip : symbol.id };
        },

    });

    palette.appendTo('#symbolpalette');
    addEvents();
};

