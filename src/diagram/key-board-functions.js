/**
 * Key Board Interaction sample
 */
// tslint:disable-next-line:max-func-body-length
 //Custom command for Diagraming elements.

// Initializes the default settings and configuration for the diagram control.
this.default = function () {
     //Retrieves the command manager settings for the diagram, including custom commands and their associated gestures.
 function getCommandManagerSettings() {
    var commandManager = {
        commands: [{
                name: 'customGroup',
                canExecute: function () {
                    if (diagram.selectedItems.nodes.length > 0 || diagram.selectedItems.connectors.length > 0) {
                        return true;
                    }
                    return false;
                },
                execute: function () {
                    diagram.group();
                },
                gesture: {
                    key: ej.diagrams.Keys.G,
                    keyModifiers: ej.diagrams.KeyModifiers.Control
                }
            },
            {
                name: 'customUnGroup',
                canExecute: function () {
                    if (diagram.selectedItems.nodes[0].children) {
                        return true;
                    }
                    return false;
                },
                execute: function () {
                    diagram.unGroup();
                },
                gesture: {
                    key: ej.diagrams.Keys.U,
                    keyModifiers: ej.diagrams.KeyModifiers.Control
                }
            },
            {
                name: 'navigationDown',
                canExecute: function () {
                    return true;
                },
                execute: function () {
                    navigateLevels(true);
                },
                gesture: { key: ej.diagrams.Keys.Down },
            },
            {
                name: 'navigationUp',
                canExecute: function () {
                    return true;
                },
                execute: function () {
                    navigateLevels(false);
                },
                gesture: { key: ej.diagrams.Keys.Up },
            },
            {
                name: 'navigationLeft',
                canExecute: function () {
                    return true;
                },
                execute: function () {
                    navigateToSiblings(true);
                },
                gesture: { key: ej.diagrams.Keys.Right },
            },
            {
                name: 'navigationRight',
                canExecute: function () {
                    return true;
                },
                execute: function () {
                    navigateToSiblings(false);
                },
                gesture: { key: ej.diagrams.Keys.Left },
            }]
    };
    return commandManager;
}
// Navigates between levels in a diagram based on the selected node's relationship with its parent or child.
function navigateLevels(isParent) {
    var selectedNode = diagram.selectedItems.nodes[0];
    if (selectedNode) {
        var connectorId = isParent ? selectedNode.outEdges[0] : selectedNode.inEdges[0];
        var altNode = isParent ? getNode(connectorId, false) : getNode(connectorId, true);
        selectNode(altNode);
    }
}
//Navigates to the right or left sibling node of the currently selected node in a diagram.
function navigateToSiblings(isRightSibling) {
    var selectedNode = diagram.selectedItems.nodes[0];
    if (selectedNode) {
        var connectorId = selectedNode.inEdges[0];
        var altConnectorId = '';
        var parentNode = getNode(connectorId, true);
        if (parentNode && parentNode.length > 0) {
            for (var i = 0; i < parentNode[0].outEdges.length; i++) {
                if (parentNode[0].outEdges[i] === connectorId) {
                    altConnectorId = isRightSibling ? parentNode[0].outEdges[i + 1] : parentNode[0].outEdges[i - 1];
                }
            }
            var sibling = getNode(altConnectorId, false);
            selectNode(sibling);
        }
    }
}
// Retrieves the node connected to the specified connector based on whether it's the parent or child node.
function getNode(name, isParent) {
    var node = [];
    var connector = diagram.getObject(name);
    if (connector) {
        node.push(diagram.getObject(isParent ? (connector.sourceID) : (connector.targetID)));
    }
    return node;
}
//Selects the specified node(s) in the diagram.
function selectNode(node) {
    if (node && node.length > 0) {
        diagram.clearSelection();
        diagram.select(node);
    }
}
    //Initialize shape
    var shape = { type: 'Basic', shape: 'Ellipse', cornerRadius: 10 };
    //initialize the diagram control
     var diagram = new ej.diagrams.Diagram({
        width: '100%', height: 645,
        snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
        contextMenuSettings: { show: true },
        getNodeDefaults: function (node) {
            if (!node.children) {
                node.shape = shape;
                node.width = 70;
                node.height = 70;
            }
            return node;
        },
        layout: {
            type: 'HierarchicalTree'
        },
        dataSourceSettings: {
            id: 'id', parentId: 'ancestor', dataSource: new ej.data.DataManager(window.keyBoardData),
            doBinding: function (nodeModel, data) {
                nodeModel.annotations = [{
                    content: data.id,
                    style: { color: 'white' }
                }
                ];
                nodeModel.style = {
                    strokeColor: 'transparent',
                    fill: data.fill
                };
            }
        },
        commandManager: getCommandManagerSettings()
    });
    diagram.appendTo('#diagram');
   
};
