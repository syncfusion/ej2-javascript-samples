/* jshint esversion: 6 */
/**
 * Visio Import/Export
 */

ej.diagrams.Diagram.Inject(ej.diagrams.BpmnDiagrams, ej.diagrams.UndoRedo, ej.diagrams.ImportAndExportVisio);
this.default = function () {
    // Helper method to create a process node
    function createNode(id, content, offsetY, shape = 'Process',
        offsetX = 400, width = 100, height = 50, ports = null) {
        var node = {
            id: id,
            shape: { type: 'Flow', shape: shape },
            style: { fill: '#357BD2', strokeColor: 'white' },
            annotations: [{ content: content, style: { color: 'white' } }],
            offsetX: offsetX,
            offsetY: offsetY,
            width: width,
            height: height
        };
        if (ports) { node.ports = ports; }

        return node;
    }
    // Helper method to create a connector
    function createConnector(id, sourceID, targetID,
        annotation, sourcePortID, targetPortID) {
        var connector = {
            id: id,
            sourceID: sourceID,
            targetID: targetID,
            type: 'Orthogonal'
        };
        if (annotation) {
            connector.annotations = [{
                content: annotation,
                alignment: annotation === 'Yes' ? 'After' : 'Before',
                displacement: annotation === 'Yes' ? { x: 5, y: 0 } : { x: 5, y: 5 }
            }];
        }
        if (sourcePortID) { connector.sourcePortID = sourcePortID; }
        if (targetPortID) { connector.targetPortID = targetPortID; }
        return connector;
    }
    // Define the nodes using helper method
    const nodes = [
        createNode('start', 'Start', 80, 'Terminator'),
        createNode('draft', 'Draft', 180, 'Process', 400, 100, 50, [
            { id: 'rightport', offset: { x: 1, y: 0.5 } },
        ]),
        createNode('approvedDecision', 'Approved?', 280, 'Decision', 400, 120, 60),
        createNode('revise', 'Revise', 280, 'Process', 600, 100, 50, [
            { id: 'rightport', offset: { x: 1, y: 0.5 } },
        ]),
        createNode('copyedit', 'Copyedit', 400),
        createNode('proof', 'Proof', 500),
        createNode('finalrevise', 'Revise', 600),
        createNode('finalize', 'Finalize', 700),
        createNode('publish', 'Publish', 800, 'Terminator')
    ];
    // Define the connectors using helper method
    const connectors = [
        createConnector('connector1', 'start', 'draft'),
        createConnector('connector2', 'draft', 'approvedDecision'),
        createConnector('connector3', 'approvedDecision', 'copyedit', 'Yes'),
        createConnector('connector4', 'approvedDecision', 'revise', 'No'),
        createConnector('connector5', 'revise', 'draft', undefined, 'rightport', 'rightport'),
        createConnector('connector6', 'copyedit', 'proof'),
        createConnector('connector7', 'proof', 'finalrevise'),
        createConnector('connector8', 'finalrevise', 'finalize'),
        createConnector('connector9', 'finalize', 'publish')
    ];

    // Initialize Diagram component
    let diagram = new ej.diagrams.Diagram({
        width: '100%',
        height: '700',
        nodes: nodes,
        connectors: connectors,
        selectionChange: selectionChange,
        historyChange: historyChange,
        diagramImporting: diagramImporting,
        diagramExporting: diagramExporting,
        dragEnter(args) {
            let obj = args.element;
            if (obj instanceof ej.diagrams.Node) {
                let objWidth = obj.width;
                let objHeight = obj.height;
                let ratio = 100 / obj.width;
                obj.width = 100;
                obj.height *= ratio;
                obj.offsetX += (obj.width - objWidth) / 2;
                obj.offsetY += (obj.height - objHeight) / 2;
            }
        },
        created: function(){
            diagram.fitToPage();
        }
    });
    // render initialized Diagram
    diagram.appendTo('#diagram');

    // Define the palette nodes for "Flow Shapes"
    const flowShapes = [
        { id: 'Process', shape: { type: 'Flow', shape: 'Process' } },
        { id: 'Decision', shape: { type: 'Flow', shape: 'Decision' } },
        { id: 'Document', shape: { type: 'Flow', shape: 'Document' } },
        { id: 'Terminator', shape: { type: 'Flow', shape: 'Terminator' } },
        { id: 'PredefinedProcess', shape: { type: 'Flow', shape: 'PreDefinedProcess' } },
        { id: 'Data', shape: { type: 'Flow', shape: 'Data' } },
        { id: 'DirectData', shape: { type: 'Flow', shape: 'DirectData' } },
        { id: 'InternalStorage', shape: { type: 'Flow', shape: 'InternalStorage' } },
        { id: 'ManualInput', shape: { type: 'Flow', shape: 'ManualInput' } },
        { id: 'ManualOperation', shape: { type: 'Flow', shape: 'ManualOperation' } }
    ];

    // Define the palette nodes for "Basic Shapes"
    const basicShapes = [
        { id: 'Ellipse', shape: { type: 'Basic', shape: 'Ellipse' } },
        { id: 'Rectangle', shape: { type: 'Basic', shape: 'Rectangle' } },
        { id: 'Pentagon', shape: { type: 'Basic', shape: 'Pentagon' } },
        { id: 'Hexagon', shape: { type: 'Basic', shape: 'Hexagon' } },
        { id: 'Parallelogram', shape: { type: 'Basic', shape: 'Parallelogram' } },
        { id: 'Heptagon', shape: { type: 'Basic', shape: 'Heptagon' } },
        { id: 'Octagon', shape: { type: 'Basic', shape: 'Octagon' } },
        { id: 'Triangle', shape: { type: 'Basic', shape: 'Triangle' } },
        { id: 'Star', shape: { type: 'Basic', shape: 'Star' } },
        { id: 'Plus', shape: { type: 'Basic', shape: 'Plus' } }
    ];

    // Define the palette connectors for "Connectors"
    const paletteConnectors = [
        {
            id: 'Link1', type: 'Orthogonal',
            targetDecorator: { shape: 'Arrow', style: { strokeColor: '#757575', fill: '#757575' } },
        },
        {
            id: 'Link2', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
            targetDecorator: { shape: 'None' }
        },
        {
            id: 'Link3', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
            targetDecorator: { shape: 'Arrow', style: { strokeColor: '#757575', fill: '#757575' } },
        },
        {
            id: 'Link4', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
            targetDecorator: { shape: 'None' }
        },
        {
            id: 'Link5', type: 'Bezier', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
            targetDecorator: { shape: 'None' }
        }
    ];

    // Define the palettes for the SymbolPalette
    const palettes = [
        {
            id: 'flowShapesPalette',
            expanded: true,
            symbols: flowShapes,
            title: 'Flow Shapes',
            iconCss: 'e-ddb-icons e-flow'
        },
        {
            id: 'basicShapesPalette',
            expanded: false,
            symbols: basicShapes,
            title: 'Basic Shapes',
            iconCss: 'e-ddb-icons e-basic'
        },
        {
            id: 'connectorsPalette',
            expanded: false,
            symbols: paletteConnectors,
            title: 'Connectors',
            iconCss: 'e-ddb-icons e-connector'
        }
    ];

    // Initialize SymbolPalette component
    let palette = new ej.diagrams.SymbolPalette({
        expandMode: 'Multiple',
        palettes: palettes,
        width: '100%',
        height: '700px',
        symbolHeight: 50,
        symbolWidth: 50,
        getSymbolInfo: function(symbol) {
            // Enables to fit the content into the specified palette item size
            return {
                fit: true
            };
        },
        // Adjust spacing between symbols
        getNodeDefaults: (symbol) => {
            symbol.style = { fill: '#357BD2', strokeColor: 'white' };
            symbol.width = 40;
            symbol.height = 40;
        },
        getConnectorDefaults: (connector) => {
            connector.sourcePoint = { x: 0, y: 0 };
            connector.targetPoint = { x: 60, y: 60 };
            connector.style = { strokeWidth: 1, strokeColor: '#757575' };
        }
    });

    // Render initialized SymbolPalette
    palette.appendTo('#symbolpalette');
    addEvents();

    let conTypeItems = [
        { text: 'Straight', iconCss: 'e-icons e-line' },
        { text: 'Orthogonal', iconCss: 'sf-icon-orthogonal' },
        { text: 'Bezier', iconCss: 'sf-icon-bezier' }
    ];
    let shapesItems = [
        { text: 'Rectangle', iconCss: 'e-rectangle e-icons' },
        { text: 'Ellipse', iconCss: ' e-circle e-icons' }
    ];

    // Initialize Toolbar component.
    let toolbarObj = new ej.navigations.Toolbar({
        clicked: toolbarClick,
        created: function (args) {
            if (diagram !== undefined) {
                let conTypeBtn = new ej.splitbuttons.DropDownButton({
                    items: conTypeItems, iconCss: 'e-ddb-icons e-connector e-icons',
                    select: function (args) { onConnectorSelect(args); }
                });
                conTypeBtn.appendTo('#conTypeBtn');

                let shapesBtn = new ej.splitbuttons.DropDownButton({
                    items: shapesItems, iconCss: 'e-shapes e-icons',
                    select: function (args) { onShapesSelect(args); }
                });
                shapesBtn.appendTo('#shapesBtn');

                refreshOverflow();
            }
        },
        items: toolbarItems(),
        overflowMode: 'Scrollable',
        width: '100%'
    });

    toolbarObj.appendTo('#toolbar');

    ej.base.enableRipple(true);
    let toast = new ej.notifications.Toast({
        showCloseButton: true,
        position: { X: "Right", Y: "Bottom" },
        timeOut: 0
    });
    toast.appendTo('#toast');
    function refreshOverflow() {
        setTimeout(() => {
            toolbarObj.refreshOverflow();
        }, 100);
    }

    // Initializes toolbar Items
    function toolbarItems() {
        return [
            // Import/Export
            { prefixIcon: 'e-icons e-circle-add', tooltipText: 'New Diagram', id: 'New_Diagram' },
            { prefixIcon: 'e-icons e-import', tooltipText: 'Import Visio (.vsdx)', id: 'Import' },
            { prefixIcon: 'e-icons e-export', tooltipText: 'Export as Visio (.vsdx)', id: 'Export' },

            { type: 'Separator' },

            // Tools
            { tooltipText: 'Draw Connectors', template: '<button id="conTypeBtn" style="width:100%;"></button>', cssClass: 'tb-item-middle', id: 'Draw_connectors' },
            { tooltipText: 'Draw Shapes', template: '<button id="shapesBtn" style="width:100%;"></button>', cssClass: 'tb-item-middle', id: 'Draw_shapes' },

            { type: 'Separator' },

            // Clipboard items
            { disabled: true, prefixIcon: 'e-cut e-icons', tooltipText: 'Cut', cssClass: 'tb-item-middle tb-item-lock-category', id: 'Cut' },
            { disabled: true, prefixIcon: 'e-copy e-icons', tooltipText: 'Copy', cssClass: 'tb-item-middle tb-item-lock-category', id: 'Copy' },
            { prefixIcon: 'e-icons e-paste', tooltipText: 'Paste', disabled: true, id: 'Paste' },

            { type: 'Separator' },

            // Undo/Redo
            { disabled: true, prefixIcon: 'e-icons e-undo tb-icons', tooltipText: 'Undo', cssClass: 'tb-item-start tb-item-undo', id: 'Undo' },
            { disabled: true, prefixIcon: 'e-icons e-redo tb-icons', tooltipText: 'Redo', cssClass: 'tb-item-end tb-item-redo', id: 'Redo' },

            { type: 'Separator' },

            // Delete
            { disabled: true, prefixIcon: 'e-trash e-icons', tooltipText: 'Delete', cssClass: 'tb-item-middle tb-item-lock-category', id: 'Delete' }
        ];
    }

    // To handle toolbar click
    function toolbarClick(args) {
        let item = args.item.tooltipText;
        switch (item) {
            case 'Undo':
                diagram.undo();
                break;
            case 'Redo':
                diagram.redo();
                break;
            case 'Cut':
                diagram.cut();
                updateToolbarItems(["Paste"], true);
                break;
            case 'Copy':
                diagram.copy();
                updateToolbarItems(["Paste"], true);
                break;
            case 'Paste':
                diagram.paste();
                break;
            case 'Delete':
                diagram.remove();
                break;
            case 'New Diagram':
                diagram.clear();
                historyChange();
                break;
            case 'Export as Visio (.vsdx)':
                diagram.exportToVisio();
                break;
            case 'Import Visio (.vsdx)':
                    vsdxInput.click();
                break;
        }
    }

    // Handle VSDX file input change: import into diagram, set size, and reset input
    var vsdxInput = document.getElementById(
        'vsdxInput');

    vsdxInput.addEventListener('change', (event) => {
        const input = event.target;
        const file = input && input.files && input.files[0];
        if (!file) return;
        diagram.importFromVisio(file)
            .then(() => {
                diagram.width = '100%';
                diagram.height = '700px';
            })
            .catch((err) => {
                console.error('Failed to import VSDX:', err);
            })
            .finally(() => {
                input.value = '';
            });
    });
    // To enable and disable the toolbar items based on selection.
    function selectionChange(args) {
        if (args.state === 'Changed') {
            let selectedItems = diagram.selectedItems.nodes;
            selectedItems = selectedItems.concat(diagram.selectedItems.connectors);
            if (selectedItems.length === 0) {
                updateToolbarItems(['Cut', 'Copy', 'Delete'], false);
            }
            if (selectedItems.length === 1) {
                updateToolbarItems(['Cut', 'Copy', 'Delete'], true);
            }

            if (selectedItems.length > 1) {
                updateToolbarItems(['Cut', 'Copy', 'Delete'], true);
            }
        }
    }

    // To enable and disable undo/redo button.
    function historyChange() {
        updateToolbarItems(['Undo'], diagram.historyManager.undoStack.length !== 0);
        updateToolbarItems(['Redo'], diagram.historyManager.redoStack.length !== 0);
    }

    function diagramImporting(args) {
        toast.timeOut = 0;
        toast.showCloseButton = false;
        if (args.status === "started") {
            updateToolbarItems(['Export', 'Import'], false); // Disable buttons
            toast.hide();
            toast.timeOut = 1000;
            toast.title = 'Importing Diagram';
            toast.content = 'The Visio diagram is being imported. Please wait...';
            toast.cssClass = 'e-toast-info';
            toast.show();
        }
        else if (args.status === "completed") {
            toast.showCloseButton = true;
            toast.timeOut = 3000;
            toast.title = 'Import Complete';
            toast.content = 'The Visio diagram has been imported successfully.';
            toast.cssClass = 'e-toast-success';
            toast.show();
            updateToolbarItems(['Export', 'Import'], true); // Enable buttons
        }
        else if (args.status === "failed") {
            toast.showCloseButton = true;
            toast.timeOut = 3000;
            toast.title = 'Import Failed';
            toast.content = 'There was an error importing the Visio diagram.';
            toast.cssClass = 'e-toast-danger';
            toast.show();
            updateToolbarItems(['Export', 'Import'], true); // Enable buttons
        }
    }
    function diagramExporting(args) {
        toast.timeOut = 0;
        toast.showCloseButton = false;
        if (args.status === "started") {
            updateToolbarItems(['Export', 'Import'], false); // Disable buttons
            toast.hide();
            toast.timeOut = 1000;
            toast.title = 'Exporting Diagram';
            toast.content = 'The diagram is being exported to Visio format. Please wait...';
            toast.cssClass = 'e-toast-info';
            toast.show();
        }
        else if (args.status === "completed") {
            toast.showCloseButton = true;
            toast.timeOut = 3000;
            toast.title = 'Export Complete';
            toast.content = 'The diagram has been exported to Visio format successfully.';
            toast.cssClass = 'e-toast-success';
            toast.show();
            updateToolbarItems(['Export', 'Import'], true); // Enable buttons
        }
        else if (args.status === "failed") {
            toast.showCloseButton = true;
            toast.timeOut = 3000;
            toast.title = 'Export Failed';
            toast.content = 'There was an error exporting the diagram to Visio format.';
            toast.cssClass = 'e-toast-danger';
            toast.show();
            updateToolbarItems(['Export', 'Import'], true); // Enable buttons
        }
    }
    let uploadObject = new ej.inputs.Uploader({
        asyncSettings: {
            saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
            removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
        }, success: onUploadSuccess, showFileList: false, multiple: false, allowedExtensions: '.vsdx'
    });
    uploadObject.appendTo('#fileupload');

    // To handle selection of drawing connectors.
    function onConnectorSelect(args) {
        diagram.clearSelection();
        diagram.drawingObject = { type: args.item.text };
        diagram.tool = ej.diagrams.DiagramTools.DrawOnce;
        diagram.dataBind();
    }

    // To handle selection of drawing shapes.
    function onShapesSelect(args) {
        diagram.clearSelection();
        diagram.drawingObject = {
            shape: { type: 'Basic', shape: args.item.text },
            style: { fill: '#357BD2', strokeColor: 'white' }
        };
        diagram.tool = ej.diagrams.DiagramTools.DrawOnce;
        diagram.dataBind();
    }

    // set up uploaded file and call loadDiagram
    function onUploadSuccess(args) {
        var file = args.file;
        var rawFile = file.rawFile;
        diagram.importFromVisio(rawFile).then(function () {
            diagram.width = '100%';
            diagram.height = '700px';
        });
        uploadObject.clearAll(); // clears the file list AND resets the internal input
    }

    // Enable or disable toolbar items
    function updateToolbarItems(itemIds, isEnabled) {
        itemIds.forEach((itemId) => {
            toolbarObj.enableItems(document.getElementById(itemId).parentElement, isEnabled);
        });
    }

    // Adds event listeners and toggles palette visibility for mobile devices
    function addEvents() {
        if (window.matchMedia('(max-width:550px)').matches) {
            const paletteIcon = document.getElementById('palette-icon');
            if (paletteIcon) paletteIcon.onclick = togglePalette;
        }
    }
    function togglePalette() {
        const paletteSpace = document.getElementById('palette-space');
        if (window.matchMedia('(max-width:550px)').matches && paletteSpace) {
            paletteSpace.classList.toggle('sb-mobile-palette-open');
        }
    }
};

