

this.default = function () {
    //Initialize the connector object with basic properties
    function CreateConnector(
        name, source, target, content, type,
        direction, targePort, length) {
        var connector = {};
        connector.id = name;
        connector.sourceID = source;
        connector.targetID = target;
        connector.style = { strokeWidth: 2 };
        var annotation = {};
        annotation.content = content;
        annotation.style = { fill: 'white' };
        connector.annotations = [annotation];
        connector.style.strokeColor = '#8D8D8D';
        connector.targetDecorator = {};
        connector.targetDecorator.style = {};
        connector.targetDecorator.style.strokeColor = '#8D8D8D';
        connector.targetDecorator.style.fill = '#8D8D8D';
        if (targePort) {
            connector.targetPortID = targePort;
        }
        var segment = {};
        if (type) {
            connector.type = type;
            segment.direction = direction;
            segment.type = type;
            segment.length = length;
            connector.segments = [segment];
        }
        return connector;
    }

    //Initialize the node object with basic properties.
    function CreateNodes(
        name, offsetX, offsetY, shape, content,
        width, height, ports) {
        var node = {};
        node.id = name;
        node.offsetX = offsetX;
        node.width = 150;
        node.height = 50;
        node.offsetY = offsetY;
        var annotations = {};
        annotations.content = content;
        node.annotations = [annotations];
        node.shape = { type: 'Flow', shape: shape };
        node.style = { fill: '#FBF6E1', strokeColor: '#E8DFB6', strokeWidth: 2 };
        if (ports) {
            node.ports = ports;
        }
        return node;
    }
    var selectedButton = 'LinksConnected';
    var nodes = [];
    var port1 = { id: 'port1', offset: { x: 0.5, y: 1 } };
    var port = { id: 'port', offset: { x: 1, y: 0.5 } };
    nodes.push(CreateNodes('node1', 100, 125, 'Terminator', 'Begin', 100, 35));
    nodes.push(CreateNodes('node2', 300, 125, 'Process', 'Specify collection', 120, 25, [port]));
    nodes.push(CreateNodes('node3', 500, 125, 'Decision', 'Particulars \n required?', 100, 50, [port1]));
    nodes.push(CreateNodes('node4', 730, 125, 'Process', 'Specify particulars', 90, 25));
    nodes.push(CreateNodes('node5', 500, 225, 'Process', 'Design collection', 100, 25, [port]));
    nodes.push(CreateNodes('node6', 500, 320, 'Process', 'Cluster of events', 100, 25));
    nodes.push(CreateNodes('node7', 500, 420, 'Process', 'Start the process', 100, 25));
    nodes.push(CreateNodes('node8', 730, 320, 'Process', 'Record and analyze \n results', 170, 25, [port]));
    nodes.push(CreateNodes('node9', 730, 420, 'Terminator', 'End ', 100, 35));

    var connectors = [];
    connectors.push(CreateConnector('connector1', 'node1', 'node2', ''));
    connectors.push(CreateConnector('connector2', 'node2', 'node3', ''));
    connectors.push(CreateConnector('connector3', 'node3', 'node4', 'Yes'));
    connectors.push(CreateConnector('connector4', 'node3', 'node5', 'No'));
    connectors.push(CreateConnector('connector5', 'node5', 'node6', ''));
    connectors.push(CreateConnector('connector6', 'node6', 'node7', ''));
    connectors.push(CreateConnector('connector7', 'node8', 'node6', ''));
    connectors.push(CreateConnector('connector8', 'node7', 'node9', ''));
    connectors.push(CreateConnector('connector10', 'node4', 'node5', '', 'Orthogonal', 'Bottom', 'port', 220));

    //initialization of the Diagram.
    var diagram = new ej.diagrams.Diagram({
        width: '100%', height: '600px', nodes: nodes, connectors: connectors,
        snapSettings: { constraints: ej.diagrams.SnapConstraints.None }
    });
    diagram.appendTo('#diagram');

    var highLightedObjects = [];
    var radioButton = new ej.buttons.RadioButton({
        label: 'None', name: 'radio', value: 'UnhighlightAll', change: buttonChange,
    });
    radioButton.appendTo('#UnhighlightAll');

    radioButton = new ej.buttons.RadioButton({ label: 'Incoming connections', change: buttonChange, name: 'radio', value: 'LinksInto' });
    radioButton.appendTo('#LinksInto');

    radioButton = new ej.buttons.RadioButton({ label: 'Outgoing connections', change: buttonChange, name: 'radio', value: 'LinksOutOf' });
    radioButton.appendTo('#LinksOutOf');

    radioButton = new ej.buttons.RadioButton({ label: 'Incoming and outgoing connections', change: buttonChange, name: 'radio', value: 'LinksConnected', checked: true });
    radioButton.appendTo('#LinksConnected');

    radioButton = new ej.buttons.RadioButton({ label: 'Incoming nodes', change: buttonChange, name: 'radio', value: 'NodesInto' });
    radioButton.appendTo('#NodesInto');

    radioButton = new ej.buttons.RadioButton({ label: 'Outgoing nodes', change: buttonChange, name: 'radio', value: 'NodesOutOf' });
    radioButton.appendTo('#NodesOutOf');

    radioButton = new ej.buttons.RadioButton({ label: 'Incoming and outgoing nodes', change: buttonChange, name: 'radio', value: 'NodesConnected' });
    radioButton.appendTo('#NodesConnected');

    radioButton = new ej.buttons.RadioButton({ label: 'Flow of execution', change: buttonChange, name: 'radio', value: 'NodesReachable' });
    radioButton.appendTo('#NodesReachable');


    function buttonChange(args) {
        applyChanges(args.event.srcElement.id);
        selectedButton = args.event.srcElement.id;
    }

    //Function to apply changes based on selection.
    function applyChanges(id) {
        Unhighlight();
        switch (id) {
            case 'LinksInto':
                linkedIn();
                break;
            case 'LinksOutOf':
                LinksOut();
                break;
            case 'LinksConnected':
                LinksConnector();
                break;
            case 'NodesInto':
                NodesIn();
                break;
            case 'NodesOutOf':
                NodesOut();
                break;
            case 'NodesConnected':
                NodesConnect();
                break;
            case 'NodesReachable':
                NodeReachable();
                break;
        }
    }

    // Function to display the incoming connectors.
    function linkedIn() {
        if (diagram.selectedItems.nodes.length) {
            var nodes = diagram.selectedItems.nodes[0].inEdges;
            for (var i = 0; i < nodes.length; i++) {
                var index = diagram.connectors.indexOf(diagram.nameTable[nodes[i]]);
                highLightedObjects.push(nodes[i]);
                var connector = diagram.connectors[index];
                connector.style.strokeColor = '#1413F8';
                connector.targetDecorator.style.strokeColor = '#1413F8';
                connector.targetDecorator.style.fill = '#1413F8';
                diagram.dataBind();
            }
        }
    }

    // Function to display the outgoing connectors.
    function LinksOut() {
        if (diagram.selectedItems.nodes.length) {
            var node = diagram.selectedItems.nodes[0].outEdges;
            for (var i = 0; i < node.length; i++) {
                var index = diagram.connectors.indexOf(diagram.nameTable[node[i]]);
                highLightedObjects.push(node[i]);
                var connector = diagram.connectors[index];
                connector.style.strokeColor = '#1413F8';
                connector.targetDecorator.style.strokeColor = '#1413F8';
                connector.targetDecorator.style.fill = '#1413F8';
                diagram.dataBind();
            }
        }
    }

    // Function to display both the incoming and outgoing connectors.
    function LinksConnector() {
        LinksOut();
        linkedIn();
    }

    // Function to display the incoming nodes.
    function NodesIn() {
        if (diagram.selectedItems.nodes.length) {
            var node = diagram.selectedItems.nodes[0].inEdges;
            for (var i = 0; i < node.length; i++) {
                var nodeId = diagram.nameTable[node[i]].sourceID;
                highLightedObjects.push(nodeId);
                var index = diagram.nodes.indexOf(diagram.nameTable[nodeId]);
                diagram.nodes[index].style.strokeColor = '#1413F8';
                diagram.dataBind();
            }
        }
    }

    // Function to display the outgoing nodes.
    function NodesOut() {
        if (diagram.selectedItems.nodes.length) {
            var node = diagram.selectedItems.nodes[0].outEdges;
            for (var i = 0; i < node.length; i++) {
                var nodeId = diagram.nameTable[node[i]].targetID;
                highLightedObjects.push(nodeId);
                var index = diagram.nodes.indexOf(diagram.nameTable[nodeId]);
                diagram.nodes[index].style.strokeColor = '#1413F8';
                diagram.dataBind();
            }
        }
    }

    // Function to display both the incoming and outgoing nodes.
    function NodesConnect() {
        NodesOut();
        NodesIn();
    }

    //Function to display the flow of execution
    function NodeReachable() {
        if (diagram.selectedItems.nodes.length) {
            var connectors_1 = diagram.selectedItems.nodes[0].outEdges;
            var nodeList = foundNode(connectors_1, []);
            for (var i = 0; i < nodeList.length; i++) {
                var index = diagram.connectors.indexOf(diagram.nameTable[nodeList[i]]);
                highLightedObjects.push(nodeList[i]);
                var connector = diagram.connectors[index];
                connector.style.strokeColor = '#1413F8';
                connector.targetDecorator.style.strokeColor = '#1413F8';
                connector.targetDecorator.style.fill = '#1413F8';
                diagram.dataBind();
            }
        }
    }

    //Function to find the connected nodes
    function foundNode(list, nodeList) {
        for (var i = 0; i < list.length; i++) {
            var connector = diagram.nameTable[list[i]];
            if (nodeList.indexOf(connector.id) > -1) {
                break;
            }
            if (!connector.annotations[0] || (connector.annotations[0] && connector.annotations[0].content !== 'No')) {
                nodeList.push(connector.id);
            }
            if (diagram.nameTable[connector.targetID].outEdges.length) {
                if (list.indexOf(connector.targetID) === -1) {
                    foundNode(diagram.nameTable[connector.targetID].outEdges, nodeList);
                }
            }
        }
        return nodeList;
    }

    //Function to unhighlight the diagram objects
    function Unhighlight() {
        for (var i = highLightedObjects.length - 1; i >= 0; i--) {
            if (diagram.nameTable[highLightedObjects[i]] instanceof ej.diagrams.Node) {
                var index = diagram.nodes.indexOf(diagram.nameTable[highLightedObjects[i]]);
                diagram.nodes[index].style.strokeColor = '#E8DFB6';
                diagram.dataBind();
            }
            else {
                var firstIndex = diagram.connectors.indexOf(diagram.nameTable[highLightedObjects[i]]);
                var connector = diagram.connectors[firstIndex];
                connector.style.strokeColor = '#8D8D8D';
                connector.targetDecorator.style.strokeColor = '#8D8D8D';
                connector.targetDecorator.style.fill = '#8D8D8D';
                diagram.dataBind();
            }
        }
        highLightedObjects = [];
    }

    diagram.selectionChange = function (arg) {
        applyChanges(selectedButton);
    };
    diagram.select([diagram.nodes[2]]);
};
