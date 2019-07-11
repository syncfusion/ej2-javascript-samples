/*jshint esversion: 6 */
ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding, ej.diagrams.MindMap, ej.diagrams.HierarchicalTree);
var diagram;

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        /* jshint proto: true */
        ({ __proto__: [] } instanceof Array && function (der, b) { der.__proto__ = b; }) ||
        function (der, b) { for (var p in b) if (b.hasOwnProperty(p)) der[p] = b[p]; };
    return function (der, b) {
        extendStatics(der, b);
        function __() { this.constructor = der; }
        der.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Mind-map sample
 */

function selectionChange(arg) {
    if (arg.state === 'Changing') {
        if (arg.newValue[0] instanceof ej.diagrams.Node) {
            for (var _i = 0, _a = diagram.selectedItems.userHandles; _i < _a.length; _i++) {
                var handle_1 = _a[_i];
                handle_1.visible = true;
            }
            if (arg.newValue[0].data.branch === 'Left' ||
                arg.newValue[0].data.branch === 'subLeft') {
                hideUserHandle('leftHandle');
                changeUserHandlePosition('leftHandle');
            }
            else if (arg.newValue[0].data.branch === 'Right' ||
                arg.newValue[0].data.branch === 'subRight') {
                hideUserHandle('rightHandle');
                changeUserHandlePosition('rightHandle');
            }
            else if (arg.newValue[0].data.branch === 'Root') {
                hideUserHandle('delete');
            }
        }
        else {
            hideUserHandle('leftHandle');
            hideUserHandle('rightHandle');
            hideUserHandle('delete');
        }
    }
}

function getNodeDefaults(obj) {
    obj.constraints = ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Drag;
    if (obj.data.branch === 'Left' || obj.data.branch === 'Right' || obj.data.branch === 'Root') {
        obj.shape = { type: 'Basic', shape: 'Ellipse' };
        obj.borderColor = 'black';
        obj.style = {
            fill: obj.data.branch === 'Root' ? '#E74C3C' : '#F39C12', strokeColor: 'none',
            strokeWidth: 2
        };
        obj.annotations = [{
            content: obj.data.Label, margin: { left: 10, right: 10, top: 10, bottom: 10 },
            style: { color: 'white' }
        }];
        var port1 = getPort();
        for (var i = 0; i < port1.length; i++) {
            obj.ports.push(new ej.diagrams.PointPort(obj, 'ports', port1[i], true));
        }
        hideUserHandle('Top');
    }
    else {
        var color = void 0;
        if (obj.data.branch === 'Right' || obj.data.branch === 'subRight') {
            color = '#8E44AD';
        }
        else {
            color = '#3498DB';
        }
        obj.shape = { type: 'Basic', shape: 'Rectangle' };
        obj.style = { fill: color, strokeWidth: 0 };
        obj.minWidth = 100;
        obj.height = 4;
        var port2 = getPort();
        for (var j = 0; j < port2.length; j++) {
            obj.ports.push(new ej.diagrams.PointPort(obj, 'ports', port2[j], true));
        }
        obj.annotations = [{
            content: obj.data.Label, offset: { x: 0.5, y: 0 }, verticalAlignment: 'Bottom'
        }];
        obj.shape.margin = { left: 0, right: 0, top: 0, bottom: 0 };
    }
    return obj;
}

function getConnectorDefaults(connector, diagram) {
    connector.type = 'Bezier';
    connector.targetDecorator = { shape: 'None' };
    var sourceNode = diagram.getObject(connector.sourceID);
    var targetNode = diagram.getObject(connector.targetID);
    if (targetNode.data.branch === 'Right' || targetNode.data.branch === 'subRight') {
        connector.sourcePortID = sourceNode.ports[0].id;
        connector.targetPortID = targetNode.ports[1].id;
        connector.style = { strokeWidth: 2, strokeColor: '#8E44AD' };
    }
    else if (targetNode.data.branch === 'Left' || targetNode.data.branch === 'subLeft') {
        connector.sourcePortID = sourceNode.ports[1].id;
        connector.targetPortID = targetNode.ports[0].id;
        connector.style = { strokeWidth: 2, strokeColor: '#3498DB' };
    }
    connector.constraints &= ~ej.diagrams.ConnectorConstraints.Select;
    return connector;
}

//creation of the Ports
function getPort() {
    var port =
        [{
            id: 'port1', offset: { x: 0, y: 0.5 }, visibility: ej.diagrams.PortVisibility.Hidden,
            style: { fill: 'black' }
        },
        {
            id: 'port2', offset: { x: 1, y: 0.5 }, visibility: ej.diagrams.PortVisibility.Hidden,
            style: { fill: 'black' }
        },
        ];
    return port;
}

function addNode() {
    var obj = {};
    obj.id = ej.diagrams.randomId();
    obj.data = {};
    obj.data.Label = 'Node';
    return obj;
}
function addConnector(source, target) {
    var connector = {};
    connector.id = ej.diagrams.randomId();
    connector.sourceID = source.id;
    connector.targetID = target.id;
    return connector;
}

//Tool for Userhandles.
function getTool(action) {
    var tool;
    if (action === 'leftHandle') {
        tool = new LeftExtendTool(diagram.commandHandler);
    } else if (action === 'rightHandle') {
        tool = new RightExtendTool(diagram.commandHandler);
    } else if (action === 'delete') {
        tool = new DeleteClick(diagram.commandHandler);
    }
    return tool;
}

var LeftExtendTool = (function (_super) {
    __extends(LeftExtendTool, _super);
    function LeftExtendTool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LeftExtendTool.prototype.mouseDown = function (args) {
        _super.prototype.mouseDown.call(this, args);
        this.inAction = true;
    };
    LeftExtendTool.prototype.mouseUp = function (args) {
        if (this.inAction) {
            var selectedElement = this.commandHandler.getSelectedObject();
            if (selectedElement[0]) {
                if (selectedElement[0] instanceof ej.diagrams.Node) {
                    var node = addNode();
                    if (selectedElement[0].data.branch === 'Root') {
                        node.data.branch = 'Right';
                    }
                    else if (selectedElement[0].data.branch === 'Right' ||
                        selectedElement[0].data.branch === 'subRight') {
                        node.data.branch = 'subRight';
                    }
                    var connector = addConnector(selectedElement[0], node);
                    diagram.clearSelection();
                    var nd = diagram.add(node);
                    diagram.add(connector);
                    diagram.doLayout();
                    diagram.bringIntoView(nd.wrapper.bounds);
                    diagram.startTextEdit(nd);
                }
            }
        }
    };
    return LeftExtendTool;
}(ej.diagrams.ToolBase));

var RightExtendTool = (function (_super) {
    __extends(RightExtendTool, _super);
    function RightExtendTool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RightExtendTool.prototype.mouseDown = function (args) {
        _super.prototype.mouseDown.call(this, args);
        this.inAction = true;
    };
    RightExtendTool.prototype.mouseUp = function (args) {
        if (this.inAction) {
            var selectedObject = this.commandHandler.getSelectedObject();
            if (selectedObject[0]) {
                if (selectedObject[0] instanceof ej.diagrams.Node) {
                    var node = addNode();
                    if (selectedObject[0].data.branch === 'Root') {
                        node.data.branch = 'Left';
                    }
                    else if (selectedObject[0].data.branch === 'Left' ||
                        selectedObject[0].data.branch === 'subLeft') {
                        node.data.branch = 'subLeft';
                    }
                    var connector = addConnector(selectedObject[0], node);
                    diagram.clearSelection();
                    var nd = diagram.add(node);
                    diagram.add(connector);
                    diagram.doLayout();
                    diagram.bringIntoView(nd.wrapper.bounds);
                    diagram.startTextEdit(nd);
                }
            }
        }
    };
    return RightExtendTool;
}(ej.diagrams.ToolBase));

var DeleteClick = (function (_super) {
    __extends(DeleteClick, _super);
    function DeleteClick() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeleteClick.prototype.mouseDown = function (args) {
        _super.prototype.mouseDown.call(this, args);
        this.inAction = true;
    };
    DeleteClick.prototype.mouseUp = function (args) {
        if (this.inAction) {
            var selectedObject = this.commandHandler.getSelectedObject();
            if (selectedObject[0]) {
                if (selectedObject[0] instanceof ej.diagrams.Node) {
                    var node = selectedObject[0];
                    this.removeSubChild(node);
                }
                diagram.doLayout();
            }
        }
    };
    DeleteClick.prototype.removeSubChild = function (node) {
        for (var i = node.outEdges.length - 1; i >= 0; i--) {
            var connector = diagram.getObject(node.outEdges[i]);
            var childNode = diagram.getObject(connector.targetID);
            if (childNode.outEdges.length > 0) {
                this.removeSubChild(childNode);
            }
            else {
                diagram.remove(childNode);
            }
        }
        diagram.remove(node);
    };
    return DeleteClick;
}(ej.diagrams.ToolBase));

function onchange(params) {
    if (selectedObject[0].data.branch === 'Root' || selectedObject[0].data.branch === 'Left' || selectedObject[0].data.branch === 'Right') {
        selectedObject[0].style.fill = args.target.value;
        diagram.dataBind();
    } else {
        selectedObject[0].annotations[0].style.color = args.target.value;
        diagram.dataBind();
    }
}
//hide the require userhandle.
function hideUserHandle(name) {
    for (var _i = 0, _a = diagram.selectedItems.userHandles; _i < _a.length; _i++) {
        var handle_2 = _a[_i];
        if (handle_2.name === name) {
            handle_2.visible = false;
        }
    }
}

var leftarrow = 'M11.924,6.202 L4.633,6.202 L4.633,9.266 L0,4.633 L4.632,0 L4.632,3.551 L11.923,3.551 L11.923,6.202Z';
var rightarrow = 'M0,3.063 L7.292,3.063 L7.292,0 L11.924,4.633 L7.292,9.266 L7.292,5.714 L0.001,5.714 L0.001,3.063Z';
var deleteicon = 'M 7.04 22.13 L 92.95 22.13 L 92.95 88.8 C 92.95 91.92 91.55 94.58 88.76' +
    '96.74 C 85.97 98.91 82.55 100 78.52 100 L 21.48 100 C 17.45 100 14.03 98.91 11.24 96.74 C 8.45 94.58 7.04' +
    '91.92 7.04 88.8 z M 32.22 0 L 67.78 0 L 75.17 5.47 L 100 5.47 L 100 16.67 L 0 16.67 L 0 5.47 L 24.83 5.47 z';
var leftuserhandle = setUserHandle('leftHandle', leftarrow, 'Left', 1, { top: 0, bottom: 0, left: 0, right: 10 }, 'Left', 'Top');
var rightuserhandle = setUserHandle('rightHandle', rightarrow, 'Right', 1, { top: 0, bottom: 0, left: 10, right: 0 }, 'Right', 'Top');
var deleteuserhandle = setUserHandle('delete', deleteicon, 'Top', 0.5, { top: 0, bottom: 10, left: 0, right: 0 }, 'Center', 'Center');
var handle = [leftuserhandle, rightuserhandle, deleteuserhandle];
//set and creation of the Userhandle.
function setUserHandle(name, pathData, side, offset, margin, halignment, valignment) {
    var userhandle = {
        name: name,
        pathData: pathData,
        backgroundColor: 'black',
        pathColor: 'white',
        side: side,
        offset: offset,
        margin: margin,
        horizontalAlignment: halignment,
        verticalAlignment: valignment,
    };
    return userhandle;
}
//Change the Position of the UserHandle.
function changeUserHandlePosition(change) {
    for (var handle in diagram.selectedItems.userHandles) {
        if (handle.name === 'delete' && change === 'leftHandle') {
            applyHandle(handle, 'Left', 1, { top: 0, bottom: 0, left: 0, right: 10 }, 'Left', 'Top');

        } else if (handle.name === 'delete' && change === 'rightHandle') {
            applyHandle(handle, 'Right', 1, { top: 0, bottom: 0, left: 10, right: 0 }, 'Right', 'Top');
        }
    }
}
//set the value for UserHandle element
function applyHandle(handle, side, offset, margin, halignment, valignment) {
    handle.side = side;
    handle.offset = offset;
    handle.margin = margin;
    handle.horizontalAlignment = halignment;
    handle.verticalAlignment = valignment;
}
this.default = function () {

    var items = new ej.data.DataManager(window.data, new ej.data.Query().take(7));

    //initialization of the Diagram.
    diagram = new ej.diagrams.Diagram({
        width: '100%', height: '550px',
        snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
        tool: ej.diagrams.DiagramTools.SingleSelect,
        layout: {
            type: 'MindMap', horizontalSpacing: 50,
            getBranch: function (node) {
                return node.data.branch;
            }
        },
        selectionChange: selectionChange,
        selectedItems: { constraints: ej.diagrams.SelectorConstraints.UserHandle, userHandles: handle },
        dataSourceSettings: { id: 'id', parentId: 'parentId', dataSource: items, root: String(1) },
        //sets node default value
        getNodeDefaults: getNodeDefaults,
        //sets connector default value 
        getConnectorDefaults: getConnectorDefaults,
        getCustomTool: getTool,
    });
    diagram.appendTo('#diagram');
    diagram.fitToPage();
};
