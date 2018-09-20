var keyBoardData = [
    { 'id': 'A', 'fill': '#3498DB' },
    { 'id': 'B', 'ancestor': 'A', 'fill': '#E74C3C' },
    { 'id': 'C', 'ancestor': 'A', 'fill': '#E74C3C' },
    { 'id': 'D', 'ancestor': 'A', 'fill': '#E74C3C' },
    { 'id': 'E', 'ancestor': 'B', 'fill': '#F39C12' },
    { 'id': 'F', 'ancestor': 'B', 'fill': '#F39C12' },
    { 'id': 'G', 'ancestor': 'F', 'fill': '#8E44AD' },
    { 'id': 'H', 'ancestor': 'F', 'fill': '#8E44AD' },
    { 'id': 'I', 'ancestor': 'G', 'fill': '#1E8449' },
    { 'id': 'J', 'ancestor': 'G', 'fill': '#1E8449' }
];

/**
 * Key Board Interaction sample
 */
// tslint:disable-next-line:max-func-body-length
ej.diagrams.Diagram.Inject(ej.diagrams.UndoRedo, ej.diagrams.DiagramContextMenu, ej.diagrams.HierarchicalTree, ej.diagrams.DataBinding);
this.default = function () {
    //Initialize shape
    var shape = { type: 'Basic', shape: 'Ellipse', cornerRadius: 10 };
    //initialize the diagram control
    var diagram = new ej.diagrams.Diagram({
        width: '100%', height: 645,
        snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
        contextMenuSettings: { show: true },
        getNodeDefaults: function (obj) {
            if (!obj.children) {
                obj.shape = shape;
                obj.width = 70;
                obj.height = 70;
            }
            return obj;
        },
        layout: {
            type: 'HierarchicalTree'
        },
        dataSourceSettings: {
            id: 'id', parentId: 'ancestor', dataManager: new ej.data.DataManager(keyBoardData),
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
    //Custom command for Diagraming elements.
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
    function navigateLevels(isParent) {
        var node = diagram.selectedItems.nodes[0];
        if (node) {
            var connectorId = isParent ? node.outEdges[0] : node.inEdges[0];
            var altNode = isParent ? getNode(connectorId, false) : getNode(connectorId, true);
            selectNode(altNode);
        }
    }
    function navigateToSiblings(isRightSibling) {
        var child = diagram.selectedItems.nodes[0];
        if (child) {
            var connectorId = child.inEdges[0];
            var altConnectorId = '';
            var parent = getNode(connectorId, true);
            if (parent && parent.length > 0) {
                for (var i = 0; i < parent[0].outEdges.length; i++) {
                    if (parent[0].outEdges[i] === connectorId) {
                        altConnectorId = isRightSibling ? parent[0].outEdges[i + 1] : parent[0].outEdges[i - 1];
                    }
                }
                var sibling = getNode(altConnectorId, false);
                selectNode(sibling);
            }
        }
    }
    function getNode(name, isParent) {
        var node = [];
        var connector = diagram.getObject(name);
        if (connector) {
            node.push(diagram.getObject(isParent ? (connector.sourceID) : (connector.targetID)));
        }
        return node;
    }
    function selectNode(node) {
        if (node && node.length > 0) {
            diagram.clearSelection();
            diagram.select(node);
        }
    }
};
