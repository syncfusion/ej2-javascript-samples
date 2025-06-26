/* jshint esversion: 6 */
/**
 * Default FlowShape sample
 */
ej.diagrams.Diagram.Inject(ej.diagrams.UndoRedo, ej.diagrams.PrintAndExport);



this.default = function () {
    //Adds EventListener based on device's viewport width.
    function addEvents() {
        var isMobile = window.matchMedia('(max-width:550px)').matches;
        if (isMobile) {
            var paletteIcon = document.getElementById('palette-icon');
            if (paletteIcon) {
                paletteIcon.addEventListener('click', openPalette, false);
            }
        }
    }

    //Toggles the visibility of the palette space on mobile devices when the palette icon is clicked.
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
    //custom code start
    if (window.location.href) {
        if (window.location.href.includes('bootstrap5')) {
            document.getElementById('change_themes').href = '../../src/diagram/styles/Diagram_Builder_EJ2_Icon/Font/Bootstrap5_Diagram_Builder/style.css';
        }
        else if (window.location.href.includes('bootstrap4')) {
            document.getElementById('change_themes').href = '../../src/diagram/styles/Diagram_Builder_EJ2_Icon/Font/bootstrap4_Diagram_Builder/style.css';
        }
        else if (window.location.href.includes('bootstrap')) {
            document.getElementById('change_themes').href = '../../src/diagram/styles/Diagram_Builder_EJ2_Icon/Font/Bootstrap_Diagram_Builder/style.css';
        }
        else if (window.location.href.includes('material3')) {
            document.getElementById('change_themes').href = '../../src/diagram/styles/Diagram_Builder_EJ2_Icon/Font/Material3_Diagram_Builder/style.css';
        }
        else if (window.location.href.includes('material')) {
            document.getElementById('change_themes').href = '../../src/diagram/styles/Diagram_Builder_EJ2_Icon/Font/Material_Diagram_Builder/style.css';
        }
        else if (window.location.href.includes('fabric')) {
            document.getElementById('change_themes').href = '../../src/diagram/styles/Diagram_Builder_EJ2_Icon/Font/fabric_Diagram_Builder/style.css';
        }
        else if (window.location.href.includes('tailwind')) {
            document.getElementById('change_themes').href = '../../src/diagram/styles/Diagram_Builder_EJ2_Icon/Font/Tailwind_Diagram_Builder/style.css';
        }
        else if (window.location.href.includes('fusion')) {
            document.getElementById('change_themes').href = '../../src/diagram/styles/Diagram_Builder_EJ2_Icon/Font/Fusion_Diagram_Builder/style.css';
        }
        else if (window.location.href.includes('highcontrast')) {
            document.getElementById('change_themes').href = '../../src/diagram/styles/Diagram_Builder_EJ2_Icon/Font/HighContrast_Diagram_Builder/style.css';
        }
        else if (window.location.href.includes('fluent')) {
            document.getElementById('change_themes').href = '../../src/diagram/styles/Diagram_Builder_EJ2_Icon/Font/Fluent_Diagram_Builder/style.css';
        }

    }
    //custom code end
    var bounds = document.getElementById('diagram-space').getBoundingClientRect();
    var centerX = bounds.width / 2;

    // Function to create a node with given properties
    function createNode(id, height, offsetX, offsetY, shape, content, margin) {
        return {
            id: id,
            height: height,
            offsetX: offsetX,
            offsetY: offsetY,
            shape: { type: 'Flow', shape: shape },
            annotations: [{ content: content, margin: margin }]
        };
    }
    // Initializing the nodes for the diagram
    var nodes = [
        createNode('NewIdea', 60, centerX - 50, 80, 'Terminator', 'Place Order'),
        createNode('Meeting', 60, centerX - 50, 160, 'Process', 'Start Transaction'),
        createNode('BoardDecision', 60, centerX - 50, 240, 'Process', 'Verification'),
        createNode('Project', 60, centerX - 50, 330, 'Decision', 'Credit card valid?'),
        createNode('End', 60, centerX - 50, 430, 'Decision', 'Funds available?'),
        createNode('Payment_method', 60, (centerX - 50) + 230, 330, 'Process', 'Enter payment method'),
        createNode('transaction_entered', 60, (centerX - 50), 630, 'Terminator', 'Log transaction'),
        createNode('Reconcile_entries', 60, (centerX - 50) + 180, 630, 'Process', 'Reconcile the entries'),
        createNode('transaction_completed', 60, (centerX - 50), 530, 'Process', 'Complete Transaction'),
        createNode('data', 45, (centerX - 50) - 190, 530, 'Data', 'Send e-mail', { left: 25, right: 25 }),
        createNode('Database', 70, (centerX - 50) + 175, 530, 'DirectData', 'Customer Database', { left: 25, right: 25 })
    ];
    // Function to create a connector with given properties
    function createConnector(id, sourceID, targetID, type = 'Straight', annotations = [], style = {}, segments = []) {
        return {
            id: id,
            sourceID: sourceID,
            targetID: targetID,
            type: type,
            annotations: annotations,
            style: style,
            segments: segments
        };
    }

    // Initializes the connectors for the diagram
    var connectors = [
        createConnector('connector1', 'NewIdea', 'Meeting'),
        createConnector('connector2', 'Meeting', 'BoardDecision'),
        createConnector('connector3', 'BoardDecision', 'Project'),
        createConnector('connector4', 'Project', 'End', 'Straight', [{ content: 'Yes', style: { fill: 'white' } }]),
        createConnector('connector5', 'End', 'transaction_completed', 'Straight', [{ content: 'Yes', style: { fill: 'white' } }]),
        createConnector('connector6', 'transaction_completed', 'transaction_entered'),
        createConnector('connector7', 'transaction_completed', 'data'),
        createConnector('connector8', 'transaction_completed', 'Database'),
        createConnector('connector9', 'Payment_method', 'Meeting', 'Orthogonal', [], {},
            [{ direction: 'Top', type: 'Orthogonal', length: 120 }]),
        createConnector('connector10', 'End', 'Payment_method', 'Orthogonal',
            [{ content: 'No', style: { fill: 'white' } }], {}, [{ direction: 'Right', type: 'Orthogonal', length: 100 }]),
        createConnector('connector11', 'Project', 'Payment_method', 'Orthogonal', [{ content: 'No', style: { fill: 'white' } }]),
        createConnector('connector12', 'transaction_entered', 'Reconcile_entries', 'Straight', [], { strokeDashArray: '2,2' })
    ];

    var interval = [1, 9, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75];
    var gridlines = { lineColor: '#e0e0e0', lineIntervals: interval };
    //Initializes diagram control
    var diagram = new ej.diagrams.Diagram({
        width: '100%', height: '700px', nodes: nodes, connectors: connectors,
        drawingObject: {},
        selectionChange: function (args) { selectionChange(args); },
        historyChange: function (args) { historyChange(args); },
        tool: ej.diagrams.DiagramTools.Default,
        snapSettings: { horizontalGridlines: gridlines, verticalGridlines: gridlines },
        //Sets the default values of a node
        getNodeDefaults: function (node) {
            if (node.width === undefined) {
                node.width = 145;
            }
            if (node.shape.type !== 'Text') {
                node.style = { fill: '#357BD2', strokeColor: 'white' };
            }
            for (var i = 0; i < node.annotations.length; i++) {
                node.annotations[i].style = {
                    color: 'white',
                    fill: 'transparent',
                };
            }
            //Set ports
            node.ports = [
                { id: 'pointPort1', shape: 'Circle', offset: { x: 0, y: 0.5 } },
                { id: 'pointPort2', shape: 'Circle', offset: { x: 0.5, y: 1 } },
                { id: 'pointPort3', shape: 'Circle', offset: { x: 1, y: 0.5 } },
                { id: 'pointPort4', shape: 'Circle', offset: { x: 0.5, y: 0 } }
            ];
            return node;
        },
        //Sets the default values of a Connector.
        getConnectorDefaults: function (obj) {
            if (obj.id.indexOf('connector') !== -1) {
                obj.targetDecorator = { shape: 'Arrow', width: 10, height: 10 };
            }
        },
        scrollChange: function (args) {
            if (args.panState !== 'Start') {
                var zoomCurrentValue = document.getElementById("btnZoomIncrement").ej2_instances[0];
                zoomCurrentValue.content = Math.round(diagram.scrollSettings.currentZoom * 100) + ' %';
            }
        },
        //Sets the Node style for DragEnter element.
        dragEnter: function (args) {
            var obj = args.element;
            if (obj instanceof ej.diagrams.Node) {
                var objWidth = obj.width;
                var objHeight = obj.height;
                var ratio = 100 / obj.width;
                obj.width = 100;
                obj.height *= ratio;
                obj.offsetX += (obj.width - objWidth) / 2;
                obj.offsetY += (obj.height - objHeight) / 2;
                obj.style = { fill: '#357BD2', strokeColor: 'white' };
            }
        },
        textEdit: function (args) {
            var obj = args.element;
            obj.annotations[0].style = {
                color: 'white',
                fill: 'transparent',
            };
        }
    });
    diagram.appendTo('#diagram');

    //To enable and disable the toolbar items based on selection.
    function selectionChange(args) {
        if (args.state === 'Changed') {
            var selectedItems = diagram.selectedItems.nodes;
            selectedItems = selectedItems.concat(diagram.selectedItems.connectors);
            if (selectedItems.length === 0) {
                const itemIds = ['Cut', 'Copy', 'Lock', 'Delete', 'Order', 'Rotate', 'Flip'];
                itemIds.forEach(itemId => {
                    const item = toolbarObj.items.find(item => item.id === itemId);
                    if (item) {
                        item.disabled = true;
                    }
                });
                disableMultiselectedItems();
            }
            if (selectedItems.length === 1) {
                enableItems();
                disableMultiselectedItems();

                var groupIndex = toolbarObj.items.findIndex(item => item.id === 'Group');
                if (selectedItems[0].children !== undefined && selectedItems[0].children.length > 0) {
                    if (groupIndex !== -1) {
                        toolbarObj.items[groupIndex].disabled = false;
                    }
                }
                else {
                    if (groupIndex !== -1) {
                        toolbarObj.items[groupIndex].disabled = true;
                    }
                }

            }

            if (selectedItems.length > 1) {
                enableItems();
                const itemIds = ['Align_objects', 'Group'];
                itemIds.forEach(itemId => {
                    const item = toolbarObj.items.find(item => item.id === itemId);
                    if (item) {
                        item.disabled = false;
                    }
                });
                var index = toolbarObj.items.findIndex(item => item.id === 'Distribute_objects');
                //To enable distribute objcets when selected items length is greater than 2
                if (selectedItems.length > 2) {
                    if (index !== -1) {
                        toolbarObj.items[index].disabled = false;
                    }
                }
                else {
                    if (index !== -1) {
                        toolbarObj.items[index].disabled = true;
                    }
                }
            }

        }
    }


    // To enable and disable undo/redo button
    function historyChange(args) {
        const undoItem = toolbarObj.items.find(item => item.id === 'Undo');
        if (undoItem) {
            undoItem.disabled = diagram.historyManager.undoStack.length > 0 ? false : true;
        }
        const redoItem = toolbarObj.items.find(item => item.id === 'Redo');
        if (redoItem) {
            redoItem.disabled = diagram.historyManager.redoStack.length > 0 ? false : true;
        }
    }

    //To enable toolbar items.
    function enableItems() {
        const itemIds = ['Cut', 'Copy', 'Lock', 'Delete', 'Order', 'Rotate', 'Flip'];
        itemIds.forEach(itemId => {
            const item = toolbarObj.items.find(item => item.id === itemId);
            if (item) {
                item.disabled = false;
            }
        });
    }

    //To disable toolbar items while multiselection.
    function disableMultiselectedItems() {
         var selectedItems = diagram.selectedItems.nodes;
        selectedItems = selectedItems.concat(diagram.selectedItems.connectors);
        let isSelectedItemLocked = false;
        if (selectedItems && selectedItems.length > 0) {
            var obj = selectedItems[0];
            if (obj instanceof ej.diagrams.Node) {
                if (obj.constraints === (ej.diagrams.NodeConstraints.PointerEvents | ej.diagrams.NodeConstraints.Select | ej.diagrams.NodeConstraints.ReadOnly)) {
                    isSelectedItemLocked = true;
                }
                else {
                    isSelectedItemLocked = false;
                }
            }
            else if (obj instanceof ej.diagrams.Connector) {
                if (obj.constraints === (ej.diagrams.ConnectorConstraints.PointerEvents | ej.diagrams.ConnectorConstraints.Select | ej.diagrams.ConnectorConstraints.ReadOnly)) {
                    isSelectedItemLocked = true;
                }
                else {
                    isSelectedItemLocked = false;
                }
            }
        }
            const itemIds = ['Cut', 'Copy', 'Lock', 'Delete', 'Order', 'Rotate', 'Flip'];
            itemIds.forEach(itemId => {
                const item = toolbarObj.items.find(item => item.id === itemId);
                if (item) {
                    item.disabled = isSelectedItemLocked;
                }
            });
    }

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
            style: { strokeWidth: 1, strokeColor: '#757575' }, targetDecorator: { shape: 'Arrow', style: { strokeColor: '#757575', fill: '#757575' } }
        },
        {
            id: 'link2', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
            targetDecorator: { shape: 'None' }, style: { strokeWidth: 1, strokeColor: '#757575' }
        },
        {
            id: 'Link3', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
            style: { strokeWidth: 1, strokeColor: '#757575' }, targetDecorator: { shape: 'Arrow', style: { strokeColor: '#757575', fill: '#757575' } }
        },
        {
            id: 'link4', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
            targetDecorator: { shape: 'None' }, style: { strokeWidth: 1, strokeColor: '#757575' },
        },
        {
            id: 'link5', type: 'Bezier', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
            targetDecorator: { shape: 'None' }, style: { strokeWidth: 1, strokeColor: '#757575' },
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
            symbol.style.strokeColor = '#757575';
        },
        enableSearch: true,
        symbolMargin: { left: 15, right: 15, top: 15, bottom: 15 },
        getSymbolInfo: function (symbol) {
            return { fit: true };
        }
    });
    palette.appendTo('#symbolpalette');
    addEvents();

    //Initializes toolbar Items.
    function toolbarItems() {
        var items = [
            { prefixIcon: 'e-icons e-circle-add', tooltipText: 'New Diagram', id: 'New_Diagram' },
            { prefixIcon: 'e-icons e-folder-open', tooltipText: 'Open Diagram', id: 'Open_diagram' },
            { prefixIcon: 'e-icons e-save', tooltipText: 'Save Diagram', id: 'Save' },
            { prefixIcon: 'e-print e-icons', tooltipText: 'Print Diagram', id: 'Print' },
            { type: 'Input', tooltipText: 'Export Diagram', template: '<button id="exportBtn" style="width:100%;"></button>', id: 'Export' },

            { type: 'Separator' },

            { disabled: true, prefixIcon: 'e-cut e-icons', tooltipText: 'Cut', cssClass: 'tb-item-middle tb-item-lock-category', id: 'Cut' },
            { disabled: true, prefixIcon: 'e-copy e-icons', tooltipText: 'Copy', cssClass: 'tb-item-middle tb-item-lock-category', id: 'Copy' },
            { prefixIcon: 'e-icons e-paste', tooltipText: 'Paste', disabled: true, id: 'Paste' },

            { type: 'Separator' },

            { disabled: true, prefixIcon: 'e-icons e-undo tb-icons', tooltipText: 'Undo', cssClass: 'tb-item-start tb-item-undo', id: 'Undo' },
            { disabled: true, prefixIcon: 'e-icons e-redo tb-icons', tooltipText: 'Redo', cssClass: 'tb-item-end tb-item-redo', id: 'Redo' },

            { type: 'Separator' },

            { prefixIcon: 'e-pan e-icons', tooltipText: 'Pan Tool', cssClass: 'tb-item-start pan-item', id: 'Pan_tool' },
            { prefixIcon: 'e-mouse-pointer e-icons', tooltipText: 'Select Tool', cssClass: 'tb-item-middle tb-item-selected', id: 'Select_tool' },
            { tooltipText: 'Draw Connectors', template: '<button id="conTypeBtn" style="width:100%;"></button>', cssClass: 'tb-item-middle', id: 'Draw_con' },
            { tooltipText: 'Draw Shapes', template: '<button id="shapesBtn" style="width:100%;"></button>', cssClass: 'tb-item-middle', id: 'Draw_shapes' },
            { prefixIcon: 'e-caption e-icons', tooltipText: 'Text Tool', cssClass: 'tb-item-end', id: 'Text_tool' },

            { type: 'Separator' },

            { disabled: true, prefixIcon: 'e-icons e-lock', tooltipText: 'Lock', cssClass: 'tb-item-middle tb-item-lock-category', id: 'Lock' },
            { disabled: true, prefixIcon: 'e-trash e-icons', tooltipText: 'Delete', cssClass: 'tb-item-middle tb-item-lock-category', id: 'Delete' },

            { type: 'Separator', align: 'Center' },

            { disabled: true, type: 'Input', tooltipText: 'Align Objects', template: '<button id="alignBtn" style="width:100%;"></button>', cssClass: 'tb-item-middle  tb-item-align-category', id: 'Align_objects' },
            { disabled: true, type: 'Input', tooltipText: 'Distribute Objects', template: '<button id="distributeBtn" style="width:100%;"></button>', cssClass: 'tb-item-middle tb-item-space-category', id: 'Distribute_objects' },

            { type: 'Separator' },

            { disabled: true, type: 'Input', tooltipText: 'Order Commands', template: '<button id="orderBtn" style="width:100%;"></button>', cssClass: 'tb-item-middle tb-item-lock-category', id: 'Order' },

            { type: 'Separator' },

            { disabled: true, type: 'Input', tooltipText: 'Group/Ungroup', template: '<button id="groupBtn" style="width:100%;"></button>', cssClass: 'tb-item-middle tb-item-align-category', id: 'Group' },

            { type: 'Separator' },

            { disabled: true, type: 'Input', tooltipText: 'Rotate', template: '<button id="rotateBtn" style="width:100%;"></button>', cssClass: 'tb-item-middle tb-item-lock-category', id: 'Rotate' },

            { type: 'Separator' },

            { disabled: true, type: 'Input', tooltipText: 'Flip', template: '<button id="flipBtn" style="width:100%;"></button>', cssClass: 'tb-item-middle tb-item-lock-category', id: 'Flip' },

            { type: 'Separator' },

            { cssClass: 'tb-item-end tb-zoom-dropdown-btn', template: '<button id="btnZoomIncrement"></button>', id: 'Zoom' },
        ];
        return items;
    }
    var conTypeBtn = new ej.splitbuttons.DropDownButton({
        items: conTypeItems, iconCss: 'e-ddb-icons e-connector e-icons',
        select: function (args) { onConnectorSelect(args); }
    });
    conTypeBtn.appendTo('#conTypeBtn');

    var shapesBtn = new ej.splitbuttons.DropDownButton({
        items: shapesItems, iconCss: 'e-shapes e-icons',
        select: function (args) { onShapesSelect(args); }
    });
    shapesBtn.appendTo('#shapesBtn');

    var btnZoomIncrement = new ej.splitbuttons.DropDownButton({
        items: zoomMenuItems, content: Math.round(diagram.scrollSettings.currentZoom * 100) + ' %', select: zoomChange,
    });
    btnZoomIncrement.appendTo('#btnZoomIncrement');

    var exportBtn = new ej.splitbuttons.DropDownButton({
        items: exportItems, iconCss: 'e-ddb-icons e-export', select: onselectExport,
    });
    exportBtn.appendTo('#exportBtn');

    var groupBtn = new ej.splitbuttons.DropDownButton({
        items: groupItems, iconCss: 'e-icons e-group-1', select: onSelectGroup
    });
    groupBtn.appendTo('#groupBtn');

    var alignBtn = new ej.splitbuttons.DropDownButton({
        items: alignItems, iconCss: 'sf-icon-align-center-1', select: onSelectAlignObjects
    });
    alignBtn.appendTo('#alignBtn');

    var distributeBtn = new ej.splitbuttons.DropDownButton({
        items: distributeItems, iconCss: 'sf-icon-distribute-vertical', select: onSelectDistributeObjects
    });
    distributeBtn.appendTo('#distributeBtn');

    var orderBtn = new ej.splitbuttons.DropDownButton({
        items: orderItems, iconCss: 'sf-icon-order', select: onSelectOrder
    });
    orderBtn.appendTo('#orderBtn');

    var rotateBtn = new ej.splitbuttons.DropDownButton({
        items: rotateItems, iconCss: 'e-icons e-repeat', select: onSelectRotate
    });
    rotateBtn.appendTo('#rotateBtn');

    var flipBtn = new ej.splitbuttons.DropDownButton({
        items: flipItems, iconCss: 'sf-icon-flip-horizontal', select: onSelectFlip
    });
    flipBtn.appendTo('#flipBtn');

    var rotateItems = [
        { iconCss: 'e-icons e-transform-right', text: 'Rotate Clockwise' },
        { iconCss: 'e-icons e-transform-left', text: 'Rotate Counter-Clockwise' }
    ];
    var flipItems = [
        { iconCss: 'e-icons e-flip-horizontal', text: 'Flip Horizontal' },
        { iconCss: 'e-icons e-flip-vertical', text: 'Flip Vertical' }
    ];
    var alignItems = [
        { iconCss: 'sf-icon-align-left-1', text: 'Align Left' },
        { iconCss: 'sf-icon-align-center-1', text: 'Align Center' },
        { iconCss: 'sf-icon-align-right-1', text: 'Align Right' },
        { iconCss: 'sf-icon-align-top-1', text: 'Align Top' },
        { iconCss: 'sf-icon-align-middle-1', text: 'Align Middle' },
        { iconCss: 'sf-icon-align-bottom-1', text: 'Align Bottom' },
    ];
    var distributeItems = [
        { iconCss: 'sf-icon-distribute-vertical', text: 'Distribute Objects Vertically', },
        { iconCss: 'sf-icon-distribute-horizontal', text: 'Distribute Objects Horizontally', },
    ];
    var orderItems = [
        { iconCss: 'e-icons e-bring-forward', text: 'Bring Forward' },
        { iconCss: 'e-icons e-bring-to-front', text: 'Bring To Front' },
        { iconCss: 'e-icons e-send-backward', text: 'Send Backward' },
        { iconCss: 'e-icons e-send-to-back', text: 'Send To Back' }
    ];
    var zoomMenuItems = [
        { text: 'Zoom In' }, { text: 'Zoom Out' }, { text: 'Zoom to Fit' }, { text: 'Zoom to 50%' },
        { text: 'Zoom to 100%' }, { text: 'Zoom to 200%' }];

    var conTypeItems = [
        { text: 'Straight', iconCss: 'e-icons e-line' },
        { text: 'Orthogonal', iconCss: 'sf-icon-orthogonal' },
        { text: 'Bezier', iconCss: 'sf-icon-bezier' }];

    var shapesItems = [
        { text: 'Rectangle', iconCss: 'e-rectangle e-icons' },
        { text: 'Ellipse', iconCss: ' e-circle e-icons' },
        { text: 'Polygon', iconCss: 'e-line e-icons' }];

    var exportItems = [
        { text: 'JPG' }, { text: 'PNG' }, { text: 'SVG' }];

    var groupItems = [
        { text: 'Group', iconCss: 'e-icons e-group-1' }, { text: 'Ungroup', iconCss: 'e-icons e-ungroup-1' }];

    //Initialize Toolbar component
    var toolbarObj = new ej.navigations.Toolbar({
        clicked: function (args) { toolbarClick(args); },
        created: function (args) {
            if (diagram !== undefined) {
                var conTypeBtn = new ej.splitbuttons.DropDownButton({
                    items: conTypeItems, iconCss: 'e-ddb-icons e-connector e-icons',
                    select: function (args) { onConnectorSelect(args); }
                });
                conTypeBtn.appendTo('#conTypeBtn');
                var btnZoomIncrement = new ej.splitbuttons.DropDownButton({
                    items: zoomMenuItems, content: Math.round(diagram.scrollSettings.currentZoom * 100) + ' %', select: zoomChange,
                });
                btnZoomIncrement.appendTo('#btnZoomIncrement');
                var shapesBtn = new ej.splitbuttons.DropDownButton({
                    items: shapesItems, iconCss: 'e-shapes e-icons',
                    select: function (args) { onShapesSelect(args); }
                });
                shapesBtn.appendTo('#shapesBtn');
                var exportBtn = new ej.splitbuttons.DropDownButton({
                    items: exportItems, iconCss: 'e-ddb-icons e-export', select: function (args) { onselectExport(args); },
                });
                exportBtn.appendTo('#exportBtn');

                var groupBtn = new ej.splitbuttons.DropDownButton({
                    items: groupItems, iconCss: 'e-icons e-group-1', select: function (args) { onSelectGroup(args); }
                });
                groupBtn.appendTo('#groupBtn');
                var alignBtn = new ej.splitbuttons.DropDownButton({
                    items: alignItems, iconCss: 'sf-icon-align-center-1', select: function (args) { onSelectAlignObjects(args); }
                });
                alignBtn.appendTo('#alignBtn');

                var distributeBtn = new ej.splitbuttons.DropDownButton({
                    items: distributeItems, iconCss: 'sf-icon-distribute-vertical', select: function (args) { onSelectDistributeObjects(args); }
                });
                distributeBtn.appendTo('#distributeBtn');
                var orderBtn = new ej.splitbuttons.DropDownButton({
                    items: orderItems, iconCss: 'e-icons e-order', select: function (args) { onSelectOrder(args); }
                });
                orderBtn.appendTo('#orderBtn');
                var rotateBtn = new ej.splitbuttons.DropDownButton({
                    items: rotateItems, iconCss: 'e-icons e-repeat', select: function (args) { onSelectRotate(args); }
                });
                rotateBtn.appendTo('#rotateBtn');
                var flipBtn = new ej.splitbuttons.DropDownButton({
                    items: flipItems, iconCss: 'e-icons e-flip-horizontal', select: function (args) { onSelectFlip(args); }
                });
                flipBtn.appendTo('#flipBtn');
                toolbarObj.refreshOverflow();
            }

        },
        items: toolbarItems(),
        overflowMode: 'Scrollable',
        width: '100%'
    });

    toolbarObj.appendTo('#toolbarEditor');

    // To perform zoom operation.
    function zoomChange(args) {
        var zoomCurrentValue = document.getElementById("btnZoomIncrement").ej2_instances[0];
        var currentZoom = diagram.scrollSettings.currentZoom;
        var zoom = {};
        switch (args.item.text) {
            case 'Zoom In':
                diagram.zoomTo({ type: 'ZoomIn', zoomFactor: 0.2 });
                zoomCurrentValue.content = (diagram.scrollSettings.currentZoom * 100).toFixed() + '%';
                break;
            case 'Zoom Out':
                diagram.zoomTo({ type: 'ZoomOut', zoomFactor: 0.2 });
                zoomCurrentValue.content = (diagram.scrollSettings.currentZoom * 100).toFixed() + '%';
                break;
            case 'Zoom to Fit':
                zoom.zoomFactor = 1 / currentZoom - 1;
                diagram.zoomTo(zoom);
                zoomCurrentValue.content = diagram.scrollSettings.currentZoom;
                break;
            case 'Zoom to 50%':
                if (currentZoom === 0.5) {
                    currentZoom = 0;
                    zoom.zoomFactor = (0.5 / currentZoom) - 1;
                    diagram.zoomTo(zoom);
                } else {
                    zoom.zoomFactor = (0.5 / currentZoom) - 1;
                    diagram.zoomTo(zoom);
                }
                break;
            case 'Zoom to 100%':
                if (currentZoom === 1) {
                    currentZoom = 0;
                    zoom.zoomFactor = (1 / currentZoom) - 1;
                    diagram.zoomTo(zoom);
                }
                else {
                    zoom.zoomFactor = (1 / currentZoom) - 1;
                    diagram.zoomTo(zoom);
                }
                break;
            case 'Zoom to 200%':
                if (currentZoom === 2) {
                    currentZoom = 0;
                    zoom.zoomFactor = (2 / currentZoom) - 1;
                    diagram.zoomTo(zoom);
                }
                else {
                    zoom.zoomFactor = (2 / currentZoom) - 1;
                    diagram.zoomTo(zoom);
                }
                break;
        }

        zoomCurrentValue.content = Math.round(diagram.scrollSettings.currentZoom * 100) + ' %';

    }

    //To handle selection of connectors.
    function onConnectorSelect(args) {
        diagram.clearSelection();
        diagram.drawingObject = { type: args.item.text };
        diagram.tool = ej.diagrams.DiagramTools.ContinuousDraw;
        diagram.selectedItems.userHandles = [];
        diagram.dataBind();
    }

    //To handle selection of shapes.
    function onShapesSelect(args) {
        diagram.clearSelection();
        diagram.drawingObject = { shape: { shape: args.item.text } };
        diagram.tool = ej.diagrams.DiagramTools.ContinuousDraw;
        diagram.selectedItems.userHandles = [];
        diagram.dataBind();
    }
    //Export the diagraming object based on the format.
    function onselectExport(args) {
        var exportOptions = {};
        exportOptions.format = args.item.text;
        exportOptions.mode = 'Download';
        exportOptions.region = 'PageSettings';
        exportOptions.fileName = 'Export';
        exportOptions.margin = { left: 0, top: 0, bottom: 0, right: 0 };
        diagram.exportDiagram(exportOptions);
    }

    //To perform group and ungroup diagram objects.
    function onSelectGroup(args) {
        if (args.item.text === 'Group') {
            diagram.group();
        }
        else if (args.item.text === 'Ungroup') {
            diagram.unGroup();
        }
    }

    //To align selelcted diagram objects.
    function onSelectAlignObjects(args) {
        var item = args.item.text;
        var alignType = item.replace('Align', '');
        var alignType1 = alignType.charAt(0).toUpperCase() + alignType.slice(1);
        diagram.align(alignType1.trim());
    }

    //To distribute selected objects horizontally and vertically.
    function onSelectDistributeObjects(args) {

        diagram.distribute(args.item.text === 'Distribute Objects Vertically' ? 'BottomToTop' : 'RightToLeft');
    }

    //To execute order commands.
    function onSelectOrder(args) {
        switch (args.item.text) {
            case 'Bring Forward':
                diagram.moveForward();
                break;
            case 'Bring To Front':
                diagram.bringToFront();
                break;
            case 'Send Backward':
                diagram.sendBackward();
                break;
            case 'Send To Back':
                diagram.sendToBack();
                break;
        }
    }

    //To Rotate the selected diagram objects.
    function onSelectRotate(args) {
        diagram.rotate(diagram.selectedItems, args.item.text === 'Rotate Clockwise' ? 90 : -90);
    }
    function onSelectFlip(args) {
        // To flip diagram selected objects.
        var selectedObjects = diagram.selectedItems.nodes.concat(diagram.selectedItems.connectors);
        for (i = 0; i < selectedObjects.length; i++) {
            selectedObjects[i].flip ^= args.item.text === 'Flip Horizontal' ?
            ej.diagrams.FlipDirection.Horizontal : ej.diagrams.FlipDirection.Vertical;
        }
        diagram.dataBind();
    }

    //To handle toolbar click events.
    function toolbarClick(args) {
        var pasteIndex = toolbarObj.items.findIndex(item => item.id === 'Paste');
        var item = args.item.tooltipText;
        switch (item) {
            case 'Undo':
                diagram.undo();
                break;
            case 'Redo':
                diagram.redo();
                break;
            case 'Lock':
                lockObject();
                break;
            case 'Cut':
                diagram.cut();
                if (pasteIndex !== -1) {
                    toolbarObj.items[pasteIndex].disabled = false;
                }
                break;
            case 'Copy':
                diagram.copy();
                if (pasteIndex !== -1) {
                    toolbarObj.items[pasteIndex].disabled = false;
                }
                break;
            case 'Paste':
                diagram.paste();
                break;
            case 'Delete':
                diagram.remove();
                break;
            case 'Select Tool':
                diagram.clearSelection();
                diagram.tool = ej.diagrams.DiagramTools.Default;
                break;
            case 'Text Tool':
                diagram.clearSelection();
                diagram.selectedItems.userHandles = [];
                diagram.drawingObject = { shape: { type: 'Text' }, };
                diagram.tool = ej.diagrams.DiagramTools.ContinuousDraw;
                break;
            case 'Pan Tool':
                diagram.clearSelection();
                diagram.tool = ej.diagrams.DiagramTools.ZoomPan;
                break;
            case 'New Diagram':
                diagram.clear();
                historyChange();
                break;
            case 'Print Diagram':
                printDiagram(args);
                break;
            case 'Save Diagram':
                download(diagram.saveDiagram());
                break;
            case 'Open Diagram':
                document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button').click();
                break;
        }
        var selectedItems = diagram.selectedItems.nodes;
        selectedItems = selectedItems.concat(diagram.selectedItems.connectors);
        if (selectedItems && selectedItems.length > 0) {
            var obj = selectedItems[0];
            if (obj instanceof ej.diagrams.Node) {
                if (obj.constraints === (ej.diagrams.NodeConstraints.PointerEvents | ej.diagrams.NodeConstraints.Select | ej.diagrams.NodeConstraints.ReadOnly)) {
                    updateToolbarState(true);
                }
                else {
                    updateToolbarState(false);
                }
            }
            else if (obj instanceof ej.diagrams.Connector) {
                if (obj.constraints === (ej.diagrams.ConnectorConstraints.PointerEvents | ej.diagrams.ConnectorConstraints.Select | ej.diagrams.ConnectorConstraints.ReadOnly)) {
                    updateToolbarState(true);
                }
                else {
                    updateToolbarState(false);
                }
            }
        }
        diagram.dataBind();
    }

    var uploadObject = new ej.inputs.Uploader({
        asyncSettings: {
            saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
            removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
        }, success: onUploadSuccess, showFileList: false

    });
    uploadObject.appendTo('#fileupload');

    //set up uploaded file and call loadDiagram.
    function onUploadSuccess(args) {
        var file = args.file;
        var rawFile = file.rawFile;
        var reader = new FileReader();
        reader.readAsText(rawFile);
        reader.onloadend = loadDiagram;
    }

    //Load the diagraming object.
    function loadDiagram(event) {
        diagram.loadDiagram(event.target.result);
    }

    // Set up print options and initiate printing of the diagram.
    function printDiagram(args) {
        var options = {};
        options.mode = 'Download';
        options.region = 'Content';
        options.multiplePage = diagram.pageSettings.multiplePage;
        options.pageHeight = diagram.pageSettings.height;
        options.pageWidth = diagram.pageSettings.width;
        diagram.print(options);
    }

    //Function to download the diagram.
    function download(data) {
        if (window.navigator.msSaveBlob) {
            var blob = new Blob([data], { type: 'data:text/json;charset=utf-8,' });
            window.navigator.msSaveOrOpenBlob(blob, 'Diagram.json');
        }
        else {
            var dataString = 'data:text/json;charset=utf-8,' + encodeURIComponent(data);
            var element = document.createElement('a');
            element.href = dataString;
            element.download = 'Diagram.json';
            document.body.appendChild(element);
            element.click();
            element.remove();
        }
    }

    // To lock the selected diagram element.
    function lockObject(args) {
        var isChecked;
        for (var i = 0; i < diagram.selectedItems.nodes.length; i++) {
            var node = diagram.selectedItems.nodes[i];
            if (node.constraints & ej.diagrams.NodeConstraints.Drag) {
                node.constraints = ej.diagrams.NodeConstraints.PointerEvents | ej.diagrams.NodeConstraints.Select | ej.diagrams.NodeConstraints.ReadOnly;
                isChecked = true;
            } else {
                node.constraints = ej.diagrams.NodeConstraints.Default;
                isChecked = false;
            }
        }

        for (var j = 0; j < diagram.selectedItems.connectors.length; j++) {
            var connector = diagram.selectedItems.connectors[j];
            if (connector.constraints & ej.diagrams.ConnectorConstraints.Drag) {
                connector.constraints = ej.diagrams.ConnectorConstraints.PointerEvents | ej.diagrams.ConnectorConstraints.Select | ej.diagrams.ConnectorConstraints.ReadOnly;
                isChecked = true;
            } else {
                connector.constraints = ej.diagrams.ConnectorConstraints.Default;
                isChecked = false;
            }
        }
        updateToolbarState(isChecked);
        diagram.dataBind();
    }

    // Function to update the toolbar state based on selected nodes constraints
    function updateToolbarState(isLocked) {
        const itemIds = ['Cut', 'Copy', 'Delete', 'Order', 'Rotate', 'Flip'];
        itemIds.forEach(itemId => {
            const item = toolbarObj.items.find(item => item.id === itemId);
            if (item) {
                item.disabled = isLocked;
            }
        });
        var index = toolbarObj.items.findIndex(item => item.id === 'Lock');
        if (index !== -1) {
            toolbarObj.items[index].disabled = false;
        }
    }

};

