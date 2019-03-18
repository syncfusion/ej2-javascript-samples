ej.diagrams.Diagram.Inject(ej.diagrams.UndoRedo, ej.diagrams.DiagramContextMenu, ej.diagrams.Snapping);

function getSymbolDefaults(symbol) {
    symbol.width = 50;
    symbol.height = 50;
    symbol.constraints = ej.diagrams.NodeConstraints.Default | ej.diagrams.NodeConstraints.AllowDrop;
}

function getSymbolInfo(symbol) {
    return { fit: true };
}

function dragEnter(args) {
    getEventDetails(args);
}

function dragLeave(args) {
    getEventDetails(args);
}

function dragOver(args) {
    if (args.target) {
        getEventDetails(args);
    }
}

function click(args) {
    getEventDetails(args);
}

function historyChange(args) {
    getEventDetails(args);
}

function doubleClick(args) {
    getEventDetails(args);
}

function textEdit(args) {
    getEventDetails(args);
}

function scrollChange(args) {
    getEventDetails(args);
}

function selectionChange(args) {
    getEventDetails(args);
}

function sizeChange(args) {
    if (args.state === 'Completed') {
        getEventDetails(args);
    }
}

function connectionChange(args) {
    if (args.state === 'Changed') {
        getEventDetails(args);
    }
}

function sourcePointChange(args) {
    if (args.state === 'Completed') {
        getEventDetails(args);
    }
}

function targetPointChange(args) {
    if (args.state === 'Completed') {
        getEventDetails(args);
    }
}

function propertyChange(args) {
    getEventDetails(args);
}

function positionChange(args) {
    if (args.state === 'Completed') {
        getEventDetails(args);
    }
}

function rotateChange(args) {
    if (args.state === 'Completed') {
        getEventDetails(args);
    }
}

function collectionChange(args) {
    getEventDetails(args);
}

function mouseEnter(args) {
    getEventDetails(args);
}

function mouseLeave(args) {
    getEventDetails(args);
}

function mouseOver(args) {
    getEventDetails(args);
}

function contextMenuOpen(args) {
    getEventDetails(args);
}

function contextMenuBeforeItemRender(args) {
    getEventDetails(args);
}

function contextMenuClick(args) {
    getEventDetails(args);
}

// tslint:disable-next-line:max-func-body-length
this.default = function () {

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
    button.appendTo('#clearbtn');

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
            targetDecorator: { shape: 'Arrow' }, style: { strokeWidth: 1 }
        },
        {
            id: 'connector2', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
            style: { strokeWidth: 1 }, targetDecorator: { shape: 'None' }
        },
        {
            id: 'connector3', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
            targetDecorator: { shape: 'Arrow' }, style: { strokeWidth: 1 }
        },
        {
            id: 'connector4', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
            style: { strokeWidth: 1 }, targetDecorator: { shape: 'None' }
        },
        {
            id: 'connector5', type: 'Bezier', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
            style: { strokeWidth: 1 }, targetDecorator: { shape: 'None' }
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
        getNodeDefaults: getSymbolDefaults, getSymbolInfo: getSymbolInfo
    });
    palette.appendTo('#symbolpalette');

    document.getElementById('clearbtn').onclick = function (args) {
        var data = document.getElementById("EventLog");
        for (var i = data.childNodes.length - 1; i >= 0; i--) {
            data.removeChild(data.childNodes[i]);
        }
    };
};

function getEventDetails(args) {
    var listView = document.getElementById("listview-def");
    var listViewComponent = listView.ej2_instances[0];
    var selectedItems = listViewComponent.getSelectedItems();
    if (selectedItems.data.length > 0) {
        var elementName = getName(selectedItems, args);
        if (elementName) {
            eventInformation(args);
        }
    } else {
        eventInformation(args);
    }
}

function getName(selectedItems, args) {
    for (var i = 0; i < selectedItems.data.length; i++) {
        var eventName = selectedItems.data[i].id;
        if (eventName === args.name) {
            return true;
        }
    }
    return false;
}

function clearEventLog() {
    var data = document.getElementById('EventLog');
    data.innerHTML = '';
}

function eventInformation(args) {
    var span = document.createElement('span');
    span.innerHTML = 'Diagram ' + args.name.bold() + ' event called' + '<hr>';
    var log = document.getElementById('EventLog');
    log.insertBefore(span, log.firstChild);
}

