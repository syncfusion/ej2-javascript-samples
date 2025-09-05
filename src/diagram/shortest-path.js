/*jslint esversion: 6 */
/**
 * Shortest Path Visualizer
 */
this.default = function () {
    var dashIntervals = new Map();

    // Constants for colors and styles
    var nodeHighlightFill = '#6495ED';
    var nodeHighlightStroke = '#4472C4';
    var nodeDefaultFill = 'white';
    var nodeDefaultStroke = '#333333';
    var nodeErrorFill = '#FF6565';
    var nodeErrorStroke = '#EE3636';
    var connectorHighlightStroke = '#4472C4';
    var connectorDefaultStroke = '#333333';

    var diagram;
    var graphSwitch;
    var graph = new Map();
    var selectedNode = 'A';
    var highlightedNodes = [];
    var highlightedConnectors = [];
    var isDirectedGraph = true;
    var previousNode = null;
    var diagramCreated = false;

    buildGraph();
    initializeComponents();

    function initializeComponents() {
        // Initialize switch component
        graphSwitch = new ej.buttons.Switch({
            checked: true,
            change: onGraphTypeChanged
        });
        graphSwitch.appendTo('#graphSwitch');

        // Initialize diagram component
        diagram = new ej.diagrams.Diagram({
            width: '100%',
            height: '700px',
            nodes: createNodes(),
            connectors: createConnectors(),
            snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
            mouseEnter: onMouseEnter,
            mouseLeave: onMouseLeave,
            click: onNodeClicked,
            created: function () {
                diagramCreated = true;
                diagram.fitToPage();
            },
            load: function () {
                if (diagramCreated) {
                    diagram.fitToPage();
                }
            }
        });
        diagram.appendTo('#diagram');
    }

    function createNode(id, x, y) {
        var isSelected = id === 'A';
        return {
            id: id,
            offsetX: x,
            offsetY: y,
            width: 50,
            height: 50,
            constraints: (ej.diagrams.NodeConstraints.Default | ej.diagrams.NodeConstraints.Tooltip) & ~ej.diagrams.NodeConstraints.Select,
            tooltip: {
                openOn: 'Custom',
                relativeMode: 'Object'
            },
            shape: {
                type: 'Basic',
                shape: 'Ellipse'
            },
            style: isSelected ? {
                strokeColor: nodeHighlightStroke,
                strokeWidth: 3,
                fill: nodeHighlightFill
            } : {
                fill: nodeDefaultFill,
            },
            annotations: [{
                content: id,
                constraints: ej.diagrams.AnnotationConstraints.ReadOnly,
                style: {
                    color: 'black',
                    fontSize: 16
                }
            }]
        };
    }

    function createNodes() {
        var nodes = [
            createNode('A', 75, 75),
            createNode('B', 384, 300),
            createNode('C', 700, 200),
            createNode('D', 100, 300),
            createNode('E', 825, 20),
            createNode('F', 90, 440),
            createNode('G', 460, 660),
            createNode('H', 270, 530),
            createNode('I', 750, 350),
            createNode('J', 1000, 450),
            createNode('K', 750, 450),
            createNode('L', 929, 210),
            createNode('X', 420, 100),
            createNode('Y', 850, 620)
        ];
        return nodes;
    }

    function createConnector(sourceId, targetId) {
        return {
            id: sourceId + targetId,
            sourceID: sourceId,
            targetID: targetId,
            type: 'Straight',
            style: {
                strokeColor: connectorDefaultStroke,
                strokeWidth: 2,
                strokeDashArray: '5,5'
            },
            annotations: [{
                content: '',
                style: {
                    color: 'white',
                    fontSize: 12,
                    bold: true,
                    fill: 'transparent'
                },
                offset: 0.5,
                constraints: ej.diagrams.AnnotationConstraints.ReadOnly,
                alignment: 'Center',
                width: 20,
                height: 20
            }],
            constraints: ej.diagrams.ConnectorConstraints.ReadOnly,
            targetDecorator: {
                shape: 'Arrow'
            }
        };
    }

    function createConnectors() {
        var connectors = [
            createConnector('A', 'B'),
            createConnector('A', 'D'),
            createConnector('A', 'X'),
            createConnector('B', 'D'),
            createConnector('B', 'H'),
            createConnector('B', 'X'),
            createConnector('C', 'L'),
            createConnector('C', 'X'),
            createConnector('D', 'F'),
            createConnector('E', 'X'),
            createConnector('G', 'H'),
            createConnector('G', 'Y'),
            createConnector('H', 'F'),
            createConnector('I', 'J'),
            createConnector('I', 'K'),
            createConnector('I', 'L'),
            createConnector('J', 'L'),
            createConnector('K', 'Y'),
            createConnector('B', 'K'),
            createConnector('B', 'C'),
            createConnector('G', 'K'),
            createConnector('H', 'I')
        ];
        return connectors;
    }

    function buildGraph() {
        var nodeIds = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'X', 'Y'];

        // Initialize graph
        nodeIds.forEach(function (nodeId) {
            graph.set(nodeId, []);
        });

        var edges = [
            { from: 'A', to: 'B' }, { from: 'A', to: 'D' }, { from: 'A', to: 'X' },
            { from: 'B', to: 'D' }, { from: 'B', to: 'H' }, { from: 'B', to: 'X' },
            { from: 'B', to: 'C' }, { from: 'B', to: 'K' }, { from: 'C', to: 'L' },
            { from: 'C', to: 'X' }, { from: 'D', to: 'F' }, { from: 'E', to: 'X' },
            { from: 'F', to: 'H' }, { from: 'G', to: 'H' }, { from: 'G', to: 'Y' },
            { from: 'G', to: 'K' }, { from: 'H', to: 'I' }, { from: 'I', to: 'J' },
            { from: 'I', to: 'K' }, { from: 'I', to: 'L' }, { from: 'J', to: 'L' },
            { from: 'K', to: 'Y' }
        ];

        // Build bidirectional adjacency list
        edges.forEach(function (edge) {
            var fromNeighbors = graph.get(edge.from);
            var toNeighbors = graph.get(edge.to);
            if (fromNeighbors) fromNeighbors.push(edge.to);
            if (toNeighbors) toNeighbors.push(edge.from);
        });
    }

    function onGraphTypeChanged(args) {
        isDirectedGraph = args.checked;

        diagram.connectors.forEach(function (connector) {
            // Update stroke style & decorator
            if (isDirectedGraph) {
                connector.targetDecorator.shape = 'Arrow';
                connector.style.strokeWidth = 2;
                connector.style.strokeDashArray = '5,5';
                connector.style.strokeColor = connectorDefaultStroke;
            }
            else {
                connector.targetDecorator.shape = 'None';
                connector.style.strokeColor = connectorDefaultStroke;
                connector.style.strokeDashArray = '';
                connector.style.strokeWidth = 2;
                // Stop animation for undirected graph
                removeConnectorDash(connector.id + '_path');
            }
        });

        diagram.dataBind();
    }

    function onMouseEnter(args) {
        if (args.actualObject && args.actualObject.id) {
            var hoverNode = args.actualObject;
            previousNode = hoverNode;

            if (hoverNode.id !== selectedNode) {
                removeStepNumbers();
                resetStyles();
                var pathResult = findShortestPath(selectedNode, hoverNode.id);
                var path = pathResult.path;

                if (path.length > 0) {
                    var pathString = path.map(function (p) { return getNodeLabel(p); }).join(" → ");
                    // Update tooltip
                    hoverNode.tooltip.content = pathString;
                    diagram.showTooltip(hoverNode);
                    highlightNodes(path);
                    addStepNumbersToConnectors(path);
                    highlightPath(path);
                }
                else {
                    hoverNode.tooltip.content = 'No path found';
                    diagram.showTooltip(hoverNode);
                    // Show error state
                    hoverNode.style.fill = nodeErrorFill;
                    hoverNode.style.strokeColor = nodeErrorStroke;
                    if (!highlightedNodes.some(function (node) { return node.id === hoverNode.id; })) {
                        highlightedNodes.push(hoverNode);
                    }
                    var rootNode = diagram.getObject(selectedNode);
                    if (rootNode) {
                        rootNode.style.fill = nodeErrorFill;
                        rootNode.style.strokeColor = nodeErrorStroke;
                    }
                }
                diagram.dataBind();
            }
        }
    }

    function onMouseLeave(args) {
        if (previousNode) {
            diagram.hideTooltip(previousNode);

            var selectedNodeObj = diagram.getObject(selectedNode);
            if (selectedNodeObj) {
                selectedNodeObj.style.strokeColor = nodeHighlightStroke;
                selectedNodeObj.style.fill = nodeHighlightFill;
                selectedNodeObj.style.strokeWidth = 4;
            }

            resetStyles();
            removeStepNumbers();
            diagram.dataBind();
        }
    }

    function onNodeClicked(args) {
        if (args.element && args.element.id) {
            var clickedNode = args.element;

            previousSelectedNodeUpdated();
            selectedNode = clickedNode.id;

            clickedNode.style.strokeColor = nodeHighlightStroke;
            clickedNode.style.strokeWidth = 3;
            removeStepNumbers();
            resetStyles();
            diagram.dataBind();
        }
    }

    function previousSelectedNodeUpdated() {
        var previousSelectedNode = diagram.nodes.find(function (node) { return node.id === selectedNode; });
        if (previousSelectedNode) {
            previousSelectedNode.style.strokeColor = nodeDefaultStroke;
            previousSelectedNode.style.strokeWidth = 2;
            previousSelectedNode.style.fill = nodeDefaultFill;
        }
    }

    function resetStyles() {
        // Reset highlighted connectors
        highlightedConnectors.forEach(function (connector) {
            connector.style.strokeColor = connectorDefaultStroke;
            connector.style.strokeWidth = 2;
            if (isDirectedGraph) {
                removeMovingDash(connector.id + '_path');
            }
        });
        highlightedConnectors = [];

        // Reset highlighted nodes
        highlightedNodes.forEach(function (node) {
            if (node.id !== selectedNode) {
                node.style.fill = nodeDefaultFill;
                node.style.strokeColor = nodeDefaultStroke;
                node.style.strokeWidth = 2;
            }
        });
        highlightedNodes = [];
    }

    function getNeighbors(nodeId, directed) {
        if (!directed) {
            // For undirected graph, return all connected nodes
            return graph.get(nodeId) || [];
        } else {
            // For directed graph, only return nodes that this node points to
            var neighbors = [];
            var outgoingConnectors = diagram.connectors.filter(function (connector) {
                return connector.sourceID === nodeId;
            });
            outgoingConnectors.forEach(function (connector) {
                if (connector.targetID) {
                    neighbors.push(connector.targetID);
                }
            });
            return neighbors;
        }
    }

    function findShortestPath(start, end) {
        if (!graph.has(start) || !graph.has(end)) {
            return { path: [], distance: 0 };
        }

        if (start === end) {
            return { path: [start], distance: 0 };
        }

        var queue = [start];
        var visited = new Set([start]);
        var previous = new Map();
        var distances = new Map();
        distances.set(start, 0);

        while (queue.length > 0) {
            var current = queue.shift();
            var neighbors = getNeighbors(current, isDirectedGraph);

            for (var i = 0; i < neighbors.length; i++) {
                var neighbor = neighbors[i];
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    previous.set(neighbor, current);
                    distances.set(neighbor, distances.get(current) + 1);
                    queue.push(neighbor);

                    if (neighbor === end) {
                        break;
                    }
                }
            }

            if (visited.has(end)) {
                break;
            }
        }

        var path = [];
        if (visited.has(end)) {
            var currentNode = end;
            while (currentNode !== undefined) {
                path.unshift(currentNode);
                currentNode = previous.get(currentNode);
            }
        }

        return { path: path, distance: path.length > 0 ? path.length - 1 : 0 };
    }

    function highlightNodes(path) {
        path.forEach(function (nodeId) {
            var node = diagram.getObject(nodeId);
            if (node) {
                node.style.fill = nodeHighlightFill;
                node.style.strokeColor = nodeHighlightStroke;
                node.style.strokeWidth = 3;
                highlightedNodes.push(node);
            }
        });
    }

    function findConnector(sourceId, targetId) {
        return diagram.connectors.find(function (connector) {
            return (connector.sourceID === sourceId && connector.targetID === targetId) ||
                (!isDirectedGraph && connector.sourceID === targetId && connector.targetID === sourceId);
        });
    }

    function highlightPath(path) {
        for (var i = 0; i < path.length - 1; i++) {
            var connector = findConnector(path[i], path[i + 1]);
            if (connector) {
                connector.style.strokeColor = connectorHighlightStroke;
                connector.style.strokeWidth = 4;
                highlightedConnectors.push(connector);

                if (isDirectedGraph) {
                    applyMovingDash(connector.id + '_path');
                }
            }
        }
    }

    function addStepNumbersToConnectors(path) {
        for (var i = 0; i < path.length - 1; i++) {
            var connector = findConnector(path[i], path[i + 1]);
            if (connector && connector.annotations && connector.annotations.length > 0) {
                connector.annotations[0].content = (i + 1).toString();
                connector.annotations[0].style.fill = nodeHighlightStroke;
            }
        }
    }

    function removeStepNumbers() {
        diagram.connectors.forEach(function (connector) {
            if (connector.annotations && connector.annotations.length > 0) {
                connector.annotations[0].content = '';
                connector.annotations[0].style.fill = 'transparent';
            }
        });
    }

    function getNodeLabel(nodeId) {
        var node = diagram.nodes.find(function (n) { return n.id === nodeId; });
        return node && node.annotations && node.annotations[0] ? node.annotations[0].content : nodeId;
    }

    function applyMovingDash(pathId) {
        // Wait for the path to exist in the DOM
        var applyAnimationInterval = setInterval(function () {
            var element = document.getElementById(pathId);
            if (element) {
                element.style.strokeDasharray = '8,4';
                var offset = 0;
                // Store the interval reference for this pathId
                var interval = setInterval(function () {
                    offset -= 1;
                    element.setAttribute('stroke-dashoffset', offset.toString());
                }, 50);
                dashIntervals.set(pathId, interval);
                clearInterval(applyAnimationInterval);
            }
        }, 10);
    }

    function removeMovingDash(pathId) {
        // Wait for the path to exist in the DOM for cleanup
        var removeAnimationInterval = setInterval(function () {
            var element = document.getElementById(pathId);
            if (element) {
                // Clear dash animation interval if it exists
                var interval = dashIntervals.get(pathId);
                if (interval) {
                    clearInterval(interval);
                    dashIntervals.delete(pathId);
                }
                element.removeAttribute('stroke-dasharray');
                element.removeAttribute('stroke-dashoffset');
                clearInterval(removeAnimationInterval);
                element.style.strokeDasharray = '5,5';
            }
        }, 10);
    }

    function removeConnectorDash(pathId) {
        var element = document.querySelector("[id='" + pathId + "']");
        if (element) {
            var interval = dashIntervals.get(pathId);
            if (interval) {
                clearInterval(interval);
                dashIntervals.delete(pathId);
            }
            element.style.strokeDasharray = '';
            element.removeAttribute('stroke-dasharray');
            element.removeAttribute('stroke-dashoffset');
        }
    }
};
