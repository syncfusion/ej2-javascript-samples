// Inject necessary dependencies for the diagram
ej.diagrams.Diagram.Inject(ej.diagrams.UndoRedo, ej.diagrams.DiagramContextMenu, ej.diagrams.Snapping);

// Function to define default properties for symbols in the diagram
function getSymbolDefaults(symbol) {
    symbol.width = 50;
    symbol.height = 50;
    symbol.constraints = ej.diagrams.NodeConstraints.Default | ej.diagrams.NodeConstraints.AllowDrop;
    symbol.style.strokeColor = '#757575';
}

// Event handler for symbol info event
function getSymbolInfo(symbol) {
    return { fit: true };
}

// Event handler for drag enter event
function dragEnter(args) {
    getEventDetails(args);
}

// Event handler for drag leave event
function dragLeave(args) {
    getEventDetails(args);
}

// Event handler for drag over event
function dragOver(args) {
    if (args.target) {
        getEventDetails(args);
    }
}

// Event handler for click event
function click(args) {
    getEventDetails(args);
}

// Event handler for history change event
function historyChange(args) {
    getEventDetails(args);
}

// Event handler for double click event
function doubleClick(args) {
    getEventDetails(args);
}

// Event handler for text edit event
function textEdit(args) {
    getEventDetails(args);
}

// Event handler for scroll change event
function scrollChange(args) {
    getEventDetails(args);
}

// Event handler for selection change event
function selectionChange(args) {
    // Check if the state is Changed and get event details
    if (args.state === 'Changed') {
        getEventDetails(args);
    }
}

// Event handler for size change event
function sizeChange(args) {
     // Check if the state is completed and get event details
    if (args.state === 'Completed') {
        getEventDetails(args);
    }
}

// Event handler for connection change event
function connectionChange(args) {
     // Check if the state is changed and get event details
    if (args.state === 'Changed') {
        getEventDetails(args);
    }
}

// Event handler for source point change event
function sourcePointChange(args) {
     // Check if the state is completed and get event details
    if (args.state === 'Completed') {
        getEventDetails(args);
    }
}

// Event handler for target point change event
function targetPointChange(args) {
    // Check if the state is completed and get event details
    if (args.state === 'Completed') {
        getEventDetails(args);
    }
}

// Event handler for property change event
function propertyChange(args) {
    getEventDetails(args);
}

// Event handler for position change event
function positionChange(args) {
    if (args.state === 'Completed') {
        getEventDetails(args);
    }
}

// Event handler for rotate change event
function rotateChange(args) {
    // Check if the state is completed and get event details
    if (args.state === 'Completed') {
        getEventDetails(args);
    }
}

// Event handler for collection change event
function collectionChange(args) {
    // Check if the state is Changed and get event details
    if (args.state === 'Changed') {
        getEventDetails(args);
    }
}

// Event handler for mouse enter event
function mouseEnter(args) {
    getEventDetails(args);
}

// Event handler for mouse leave event
function mouseLeave(args) {
    getEventDetails(args);
}

// Event handler for mouse over event
function mouseOver(args) {
    getEventDetails(args);
}

// Event handler for context menu open event
function contextMenuOpen(args) {
    getEventDetails(args);
}

// Event handler for context menu before item render event
function contextMenuBeforeItemRender(args) {
    getEventDetails(args);
}

// Event handler for context menu click event
function contextMenuClick(args) {
    getEventDetails(args);
}

// tslint:disable-next-line:max-func-body-length
this.default = function () {

     // Define data for the ListView
    var data = [
        { text: 'Drag enter', id: 'dragEnter' },
        { text: 'Drag leave', id: 'dragLeave' },
        { text: 'Drag over', id: 'dragOver' },
        { text: 'Click', id: 'click', isChecked: true },
        { text: 'History change', id: 'historyChange', isChecked: true },
        { text: 'Double click', id: 'doubleClick' },
        { text: 'Text edit', id: 'textEdit', isChecked: true },
        { text: 'Scroll change', id: 'scrollChange' },
        { text: 'Selection change', id: 'selectionChange', isChecked: true },
        { text: 'Size change', id: 'sizeChange', isChecked: true },
        { text: 'Connection change', id: 'connectionChange', isChecked: true },
        { text: 'SourcePoint change', id: 'sourcePointChange' },
        { text: 'TargetPoint change', id: 'targetPointChange' },
        { text: 'Position change', id: 'positionChange', isChecked: true },
        { text: 'Rotate change', id: 'rotateChange', isChecked: true },
        { text: 'Collection change', id: 'collectionChange', isChecked: true },
        { text: 'Mouse enter', id: 'mouseEnter' },
        { text: 'Mouse leave', id: 'mouseLeave' },
        { text: 'Mouse over', id: 'mouseOver' },
        { text: 'Context menu open', id: 'contextMenuOpen' },
        { text: 'Context menu before item render', id: 'contextMenuBeforeItemRender' },
        { text: 'Context menu click', id: 'contextMenuClick' }
    ];

    //Initialize ListView component
    var listObj = new ej.lists.ListView({
        //Set defined data to dataSource property
        dataSource: data,
        height: "calc(100% - 40px)",
        //Enables checkbox
        showCheckBox: true
    });

    //Render initialized ListView component
    listObj.appendTo('#listview-def');

    //Render initialized button component
    var button = new ej.buttons.Button();
    button.appendTo('#clearButton');

    //Initializes diagram control
    var diagram = new ej.diagrams.Diagram({
        width: '100%', height: '700px',
        contextMenuSettings: { show: true },
        snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
        dragEnter: dragEnter,
        dragLeave: dragLeave,
        dragOver: dragOver,
        click: click,
        historyChange: historyChange,
        doubleClick: doubleClick,
        textEdit: textEdit,
        scrollChange: scrollChange,
        selectionChange: selectionChange,
        sizeChange: sizeChange,
        connectionChange: connectionChange,
        sourcePointChange: sourcePointChange,
        targetPointChange: targetPointChange,
        propertyChange: propertyChange,
        positionChange: positionChange,
        rotateChange: rotateChange,
        collectionChange: collectionChange,
        mouseEnter: mouseEnter,
        mouseLeave: mouseLeave,
        mouseOver: mouseOver,
        contextMenuOpen: contextMenuOpen,
        contextMenuBeforeItemRender: contextMenuBeforeItemRender,
        contextMenuClick: contextMenuClick
    });
    diagram.appendTo('#diagram');
    clearEventLog();

    //Initialize the basicshapes for the symbol palatte
    var basicShapes = [
        { id: 'RectangleNode', shape: { type: 'Basic', shape: 'Rectangle' } },
        { id: 'EllipseNode', shape: { type: 'Basic', shape: 'Ellipse' } },
        { id: 'ParallelogramNode', shape: { type: 'Basic', shape: 'Parallelogram' } },
        { id: 'TriangleNode', shape: { type: 'Basic', shape: 'Triangle' } },
        { id: 'HexagonNode', shape: { type: 'Basic', shape: 'Hexagon' } },
        { id: 'PentagonNode', shape: { type: 'Basic', shape: 'Pentagon' } },
        { id: 'CylinderNode', shape: { type: 'Basic', shape: 'Cylinder' } },
        { id: 'PlusNode', shape: { type: 'Basic', shape: 'Plus' } },
        { id: 'HeptagonNode', shape: { type: 'Basic', shape: 'Heptagon' } },
        { id: 'OctagonNode', shape: { type: 'Basic', shape: 'Octagon' } },
        { id: 'TrapezoidNode', shape: { type: 'Basic', shape: 'Trapezoid' } },
        { id: 'DecagonNode', shape: { type: 'Basic', shape: 'Decagon' } },
        { id: 'RightTriangleNode', shape: { type: 'Basic', shape: 'RightTriangle' } },
        { id: 'DiamondNode', shape: { type: 'Basic', shape: 'Diamond' } },
        { id: 'StarNode', shape: { type: 'Basic', shape: 'Star' } }
    ];

    //Initializes connector symbols for the symbol palette
    var connectorSymbols = [
        {
            id: 'connector1', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
            targetDecorator: { shape: 'Arrow', style:{strokeColor: '#757575', fill: '#757575'} }
        },
        {
            id: 'connector2', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
            targetDecorator: { shape: 'None' }
        },
        {
            id: 'connector3', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
            targetDecorator: { shape: 'Arrow', style:{strokeColor: '#757575', fill: '#757575'} }
        },
        {
            id: 'connector4', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
            targetDecorator: { shape: 'None' }
        },
        {
            id: 'connector5', type: 'Bezier', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
            targetDecorator: { shape: 'None' }
        },
    ];

    var palettes = [
        { id: 'basic', expanded: true, symbols: basicShapes, iconCss: 'e-ddb-icons e-basic', title: 'Basic Shapes' },
        { id: 'connectors', expanded: true, symbols: connectorSymbols, iconCss: 'e-ddb-icons e-connector', title: 'Connectors' }
    ];

    //Initializes the symbol palette
    var palette = new ej.diagrams.SymbolPalette({
        expandMode: 'Multiple', palettes: palettes,
        width: '100%', height: '700px', symbolHeight: 60, symbolWidth: 60,
        symbolMargin: { left: 15, right: 15, top: 15, bottom: 15 },
        getNodeDefaults: getSymbolDefaults, getSymbolInfo: getSymbolInfo,
         //Sets the default values of a Connectors
        getConnectorDefaults: function (connector) {
            connector.style = { strokeWidth: 1 , strokeColor: '#757575' };
        },
    });
    palette.appendTo('#symbolpalette');

     // Event handler for clearing the event log
    document.getElementById('clearButton').onclick = function (args) {
        var data = document.getElementById("EventLog");
        for (var i = data.childNodes.length - 1; i >= 0; i--) {
            data.removeChild(data.childNodes[i]);
        }
    };
};

// Function to get event details based on selected items
function getEventDetails(args) {
    var listView = document.getElementById("listview-def");
    var listViewComponent = listView.ej2_instances[0];
    var selectedItems = listViewComponent.getSelectedItems();
    if (selectedItems.data.length > 0) {
        var elementName = getName(selectedItems, args);
        if (elementName) {
            eventInformation(args);
        }
    }
}

// Function to check if the event name matches any selected item
function getName(selectedItems, args) {
    for (var i = 0; i < selectedItems.data.length; i++) {
        var eventName = selectedItems.data[i].id;
        if (eventName === args.name) {
            return true;
        }
    }
    return false;
}

// Function to clear the event log
function clearEventLog() {
    var data = document.getElementById('EventLog');
    data.innerHTML = '';
}

// Function to display event information in the event log
function eventInformation(args) {
    var span = document.createElement('span');
    span.innerHTML = 'Diagram ' + args.name.bold() + ' event called' + '<hr>';
    var log = document.getElementById('EventLog');
    log.insertBefore(span, log.firstChild);
}

