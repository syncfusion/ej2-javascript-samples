/*jslint esversion: 6 */
/**
 * Serialization sample
 */
ej.diagrams.Diagram.Inject(ej.diagrams.UndoRedo);


// Save the diagram object as a JSON file.
function download(data) {
    // MIME type for JSON data.
    var mimeType = "data:text/json;charset=utf-8,";
    // Checks for MS browser to use the msSaveBlob method.
    if ((window.navigator).msSaveBlob) {
        // Creates a new Blob object containing the JSON data.
        var blob = new Blob([data], { type: mimeType });
        // Saves or opens the blob depending on the browser capability.
        (window.navigator).msSaveOrOpenBlob(blob, "Diagram.json");
    } else {
        // Encodes the JSON data as a data URL.
        var dataStr = mimeType + encodeURIComponent(data);
        // Creates an anchor element to facilitate downloading.
        var downloadAnchor = document.createElement("a");
        downloadAnchor.href = dataStr;
        downloadAnchor.download = "Diagram.json";
        document.body.appendChild(downloadAnchor);
        // Triggers the download process.
        downloadAnchor.click();
        // Removes the anchor element from the document.
        downloadAnchor.remove();
    }
}
// Function to toggle palette visibility
function openPalette() {
    var paletteSpace = document.getElementById('palette-space');
    // Checks if the current viewport width is less than or equal to 550 pixels.
    var isMobile = window.matchMedia('(max-width:550px)').matches;
    if (isMobile) {
        // Toggles the class to show or hide the palette.
        if (!paletteSpace.classList.contains('sb-mobile-palette-open')) {
            paletteSpace.classList.add('sb-mobile-palette-open');
        }
        else {
            paletteSpace.classList.remove('sb-mobile-palette-open');
        }
    }
}
this.default = function () {
    // Predefined styles for different types of nodes in the diagram. 
    var nodeStyles = {
        terminator: { fill: "#d0f0f1", strokeColor: "#797979", height: 50, width: 100 },
        process: { fill: "#fbfdc5", strokeColor: "#797979", height: 50, width: 120 },
        decision: { fill: "#c5efaf", strokeColor: "#797979", height: 90, width: 120 },
        delay: { fill: "#f8eee5", strokeColor: "#797979", height: 50, width: 100 }
    };
    // Initializing nodes for the diagram.
    var nodes = [
        createNode("Start", 250, 60, "Terminator", "Start", nodeStyles.terminator),
        createNode("Alarm", 250, 160, "Process", "Alarm Rings", nodeStyles.process),
        createNode("Ready", 250, 260, "Decision", "Ready to Get Up?", nodeStyles.decision),
        createNode("Climb", 250, 370, "Process", "Climb Out of Bed", nodeStyles.process),
        createNode("End", 250, 460, "Terminator", "End", nodeStyles.terminator),
        createNode("Relay", 450, 160, "Delay", "Relay", nodeStyles.delay),
        createNode("Hit", 450, 260, "Process", "Hit Snooze Button", nodeStyles.process)
    ];
    // Function to create a node with given parameters.
    function createNode(id, offsetX, offsetY, shapeType, content, style) {
        return {
            id: id,
            height: style.height,
            width: style.width,
            offsetX: offsetX,
            offsetY: offsetY,
            shape: { type: "Flow", shape: shapeType },
            annotations: [{ content: content }],
            style: style
        };
    }
    // Function to create a connector with given parameters.
    function createConnector(id, sourceID, targetID, annotations) {
        return {
            id: id,
            sourceID: sourceID,
            targetID: targetID,
            annotations: annotations
        };
    }
    // Initializing connectors for the diagram.
    var connectors = [
        createConnector("connector1", "Start", "Alarm"),
        createConnector("connector2", "Alarm", "Ready"),
        createConnector("connector3", "Ready", "Climb", [{ content: "Yes", style: { fill: "white" } }]),
        createConnector("connector4", "Climb", "End"),
        createConnector("connector5", "Ready", "Hit", [{ content: "No", style: { fill: "white" } }]),
        createConnector("connector6", "Hit", "Relay"),
        createConnector("connector7", "Relay", "Alarm")
    ];
    var lineinterval;
    lineinterval = [1, 9, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75];
    var gridlines = { lineColor: '#e0e0e0', lineIntervals: lineinterval };
    //Initializes diagram control
    var diagram = new ej.diagrams.Diagram({
        width: '100%', height: '645px',
        nodes: nodes,
        connectors: connectors,
        // event triggers after the diagram elements finished loading using loadDiagram method
          loaded: function(){
                diagram.select([diagram.nodes[0]]);
            },
        snapSettings: { horizontalGridlines: gridlines, verticalGridlines: gridlines },
        //set default value for Connectors.
        getConnectorDefaults: function (args) {
            args.targetDecorator.height = 5;
            args.targetDecorator.width = 5;
            args.style.strokeColor = '#797979';
            args.targetDecorator.style = { fill: '#797979', strokeColor: '#797979' };
            return args;
        },
        //Sets the Node style for DragEnter element.
        dragEnter: function (args) {
            var obj = args.element;
            if (obj instanceof ej.diagrams.Node) {
                var ratio = 100 / obj.width;
                obj.width = 100;
                obj.height *= ratio;
            }
        }
    });
    diagram.appendTo('#diagram');

    // Preparing flow shapes for the symbol palette.
    const flowShapeTypes = [
        "Terminator", "Process", "Decision", "Document",
        "PreDefinedProcess", "PaperTap", "DirectData",
        "SequentialData", "Sort", "MultiDocument",
        "Collate", "SummingJunction", "Or", "InternalStorage",
        "Extract", "ManualOperation", "Merge", "OffPageReference",
        "SequentialAccessStorage", "Annotation", "Annotation2",
        "Data", "Card", "Delay"
    ];
    let flowshapes = flowShapeTypes.map(type => ({ id: type, shape: { type: "Flow", shape: type } }));

    // Function to create a connector symbol for the symbol palette.
    function createConnectorSymbol(id, type, targetDecoratorShape = "None") {
        let connector = {
            id,
            type,
            sourcePoint: { x: 0, y: 0 },
            targetPoint: { x: 40, y: 40 },
            style: { strokeWidth: 2, strokeColor: '#757575' }
        };

        if (targetDecoratorShape !== "None") {
            connector.targetDecorator = { shape: targetDecoratorShape, style: { strokeColor: '#757575', fill: '#757575' } };
        }
        else {
            connector.targetDecorator = { shape: "None" };
        }

        return connector;
    }

    // Initializing connector symbols for the symbol palette.
    let connectorSymbols = [
        createConnectorSymbol("Link1", "Orthogonal", "Arrow"),
        createConnectorSymbol("link2", "Orthogonal"),
        createConnectorSymbol("Link3", "Straight", "Arrow"),
        createConnectorSymbol("link4", "Straight"),
        createConnectorSymbol("link5", "Bezier")
    ];
    //Initializes ToolBar control to invoke save and load the diagram
    var toolbarObj = new ej.navigations.Toolbar({
        clicked: function (args) {
            if (args.item.text === 'New') {
                diagram.clear();
            }
            else if (args.item.text === 'Load') {
                document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button').click();
            } else if (args.item.id === 'palette-icon') {
                openPalette();
            } else {
                download(diagram.saveDiagram());
            }
        },
        items: [
            { id: 'palette-icon', prefixIcon: 'e-ddb-icons2 e-toggle-palette', align: 'Right' },
            { text: 'New', tooltipText: 'New', prefixIcon: 'e-ddb-icons e-new' },
            { type: 'Separator' }, { text: 'Save', tooltipText: 'Save', prefixIcon: 'e-diagram-icons e-diagram-save' },
            { type: 'Separator' }, { text: 'Load', tooltipText: 'Load', prefixIcon: 'e-ddb-icons e-open' }
        ]
    });
    toolbarObj.appendTo('#toolbar');
    //Initializes the symbol palette
    var palette = new ej.diagrams.SymbolPalette({
        expandMode: 'Multiple',
        palettes: [
            { id: 'flow', expanded: true, symbols: flowshapes, iconCss: 'e-ddb-icons1 e-flow', title: 'Flow Shapes' },
            { id: 'connectors', expanded: true, symbols: connectorSymbols, iconCss: 'e-ddb-icons1 e-connector', title: 'Connectors' }
        ],
        //set default value for Node.
        getNodeDefaults: function (symbol) {
            if (symbol.id === 'Terminator' || symbol.id === 'Process' || symbol.id === 'Delay') {
                symbol.width = 80;
                symbol.height = 40;
            }
            else if (symbol.id === 'Decision' || symbol.id === 'Document' || symbol.id === 'PreDefinedProcess' ||
                symbol.id === 'PaperTap' || symbol.id === 'DirectData' || symbol.id === 'MultiDocument' || symbol.id === 'Data') {
                symbol.width = 50;
                symbol.height = 40;
            } else {
                symbol.width = 50;
                symbol.height = 50;
            }

            symbol.style.strokeWidth = 2;
            symbol.style.strokeColor = '#757575';
        },
        symbolMargin: { left: 15, right: 15, top: 15, bottom: 15 },
        getSymbolInfo: function (symbol) {
            return { fit: true };
        },
        width: '100%', height: '645px', symbolHeight: 60, symbolWidth: 60,
    });
    palette.appendTo('#symbolpalette');
    var uploadObj = new ej.inputs.Uploader({
        asyncSettings: {
            saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
            removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
        },
        success: onUploadSuccess,
        showFileList: false
    });
    uploadObj.appendTo('#fileupload');
    // Function to handle upload success
    function onUploadSuccess(args) {
        var file1 = args.file;
        // Extracts the file from the upload success event arguments.
        var file = file1.rawFile;
        // Creates a FileReader to read the content of the file.
        var reader = new FileReader();
        // Reads the content of the file as a text string.
        reader.readAsText(file);
        // Assigns the loadDiagram function to execute when the file read operation completes.
        reader.onloadend = loadDiagram;
    }
    // Load the diagram object from a JSON string.
    function loadDiagram(event) {
        diagram.loadDiagram(event.target.result);
    }

};
