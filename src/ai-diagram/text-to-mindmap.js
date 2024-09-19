this.default = function () {
    /**
     * Text to MindMap AI Sample
     */
    ej.diagrams.Diagram.Inject(ej.diagrams.UndoRedo, ej.diagrams.DataBinding, ej.diagrams.PrintAndExport, ej.diagrams.MindMap);
    let data = [
        { id: "1", Label: "Business Planning", parentId: "", branch: "Root", fill: "#D0ECFF", hasChild: true, level: 0, strokeColor: "#D0ECFF", orientation: "Root" },
        { id: "2", Label: "Expectation", parentId: "1", branch: "Left", fill: "#C4F2E8", hasChild: true, level: 1, strokeColor: "#C4F2E8", orientation: "Left" },
        { id: "3", Label: "Requirements", parentId: "1", branch: "Right", fill: "#F7E0B3", hasChild: true, level: 1, strokeColor: "#F7E0B3", orientation: "Right" },
        { id: "4", Label: "Marketing", parentId: "1", branch: "Left", fill: "#E5FEE4", hasChild: true, level: 1, strokeColor: "#E5FEE4", orientation: "Left" },
        { id: "5", Label: "Budgets", parentId: "1", branch: "Right", fill: "#E9D4F1", hasChild: true, level: 1, strokeColor: "#E9D4F1", orientation: "Right" },
        { id: "6", Label: "Situation in Market", parentId: "1", branch: "Left", fill: "#90C8C2", hasChild: true, level: 1, strokeColor: "#90C8C2", orientation: "Left" },
        { id: "7", Label: "Product Sales", parentId: "2", branch: "SubLeft", fill: "#C4F2E8", hasChild: false, level: 2, strokeColor: "#C4F2E8", orientation: "SubLeft" },
        { id: "8", Label: "Strategy", parentId: "2", branch: "SubLeft", fill: "#C4F2E8", hasChild: false, level: 2, strokeColor: "#C4F2E8", orientation: "SubLeft" },
        { id: "9", Label: "Contacts", parentId: "2", branch: "SubLeft", fill: "#C4F2E8", hasChild: false, level: 2, strokeColor: "#C4F2E8", orientation: "SubLeft" },
        { id: "10", Label: "Customer Groups", parentId: "4", branch: "SubLeft", fill: "#E5FEE4", hasChild: false, level: 2, strokeColor: "#E5FEE4", orientation: "SubLeft" },
        { id: "11", Label: "Branding", parentId: "4", branch: "SubLeft", fill: "#E5FEE4", hasChild: false, level: 2, strokeColor: "#E5FEE4", orientation: "SubLeft" },
        { id: "12", Label: "Advertising", parentId: "4", branch: "SubLeft", fill: "#E5FEE4", hasChild: false, level: 2, strokeColor: "#E5FEE4", orientation: "SubLeft" },
        { id: "13", Label: "Competitors", parentId: "6", branch: "SubLeft", fill: "#90C8C2", hasChild: false, level: 2, strokeColor: "#90C8C2", orientation: "SubLeft" },
        { id: "14", Label: "Location", parentId: "6", branch: "SubLeft", fill: "#90C8C2", hasChild: false, level: 2, strokeColor: "#90C8C2", orientation: "SubLeft" },
        { id: "15", Label: "Director", parentId: "3", branch: "SubRight", fill: "#F7E0B3", hasChild: false, level: 2, strokeColor: "#F7E0B3", orientation: "SubRight" },
        { id: "16", Label: "Accounts Department", parentId: "3", branch: "SubRight", fill: "#F7E0B3", hasChild: false, level: 2, strokeColor: "#F7E0B3", orientation: "SubRight" },
        { id: "17", Label: "Administration", parentId: "3", branch: "SubRight", fill: "#F7E0B3", hasChild: false, level: 2, strokeColor: "#F7E0B3", orientation: "SubRight" },
        { id: "18", Label: "Development", parentId: "3", branch: "SubRight", fill: "#F7E0B3", hasChild: false, level: 2, strokeColor: "#F7E0B3", orientation: "SubRight" },
        { id: "19", Label: "Estimation", parentId: "5", branch: "SubRight", fill: "#E9D4F1", hasChild: false, level: 2, strokeColor: "#E9D4F1", orientation: "SubRight" },
        { id: "20", Label: "Profit", parentId: "5", branch: "SubRight", fill: "#E9D4F1", hasChild: false, level: 2, strokeColor: "#E9D4F1", orientation: "SubRight" },
        { id: "21", Label: "Funds", parentId: "5", branch: "SubRight", fill: "#E9D4F1", hasChild: false, level: 2, strokeColor: "#E9D4F1", orientation: "SubRight" }
    ];
    let workingData = [
        { id: "1", Label: "Business Planning", parentId: "", branch: "Root", fill: "#D0ECFF", hasChild: true, level: 0, strokeColor: "#D0ECFF", orientation: "Root" },
        { id: "2", Label: "Expectation", parentId: "1", branch: "Left", fill: "#C4F2E8", hasChild: true, level: 1, strokeColor: "#C4F2E8", orientation: "Left" },
        { id: "3", Label: "Requirements", parentId: "1", branch: "Right", fill: "#F7E0B3", hasChild: true, level: 1, strokeColor: "#F7E0B3", orientation: "Right" },
        { id: "4", Label: "Marketing", parentId: "1", branch: "Left", fill: "#E5FEE4", hasChild: true, level: 1, strokeColor: "#E5FEE4", orientation: "Left" },
        { id: "5", Label: "Budgets", parentId: "1", branch: "Right", fill: "#E9D4F1", hasChild: true, level: 1, strokeColor: "#E9D4F1", orientation: "Right" },
        { id: "6", Label: "Situation in Market", parentId: "1", branch: "Left", fill: "#90C8C2", hasChild: true, level: 1, strokeColor: "#90C8C2", orientation: "Left" },
        { id: "7", Label: "Product Sales", parentId: "2", branch: "SubLeft", fill: "#C4F2E8", hasChild: false, level: 2, strokeColor: "#C4F2E8", orientation: "SubLeft" },
        { id: "8", Label: "Strategy", parentId: "2", branch: "SubLeft", fill: "#C4F2E8", hasChild: false, level: 2, strokeColor: "#C4F2E8", orientation: "SubLeft" },
        { id: "9", Label: "Contacts", parentId: "2", branch: "SubLeft", fill: "#C4F2E8", hasChild: false, level: 2, strokeColor: "#C4F2E8", orientation: "SubLeft" },
        { id: "10", Label: "Customer Groups", parentId: "4", branch: "SubLeft", fill: "#E5FEE4", hasChild: false, level: 2, strokeColor: "#E5FEE4", orientation: "SubLeft" },
        { id: "11", Label: "Branding", parentId: "4", branch: "SubLeft", fill: "#E5FEE4", hasChild: false, level: 2, strokeColor: "#E5FEE4", orientation: "SubLeft" },
        { id: "12", Label: "Advertising", parentId: "4", branch: "SubLeft", fill: "#E5FEE4", hasChild: false, level: 2, strokeColor: "#E5FEE4", orientation: "SubLeft" },
        { id: "13", Label: "Competitors", parentId: "6", branch: "SubLeft", fill: "#90C8C2", hasChild: false, level: 2, strokeColor: "#90C8C2", orientation: "SubLeft" },
        { id: "14", Label: "Location", parentId: "6", branch: "SubLeft", fill: "#90C8C2", hasChild: false, level: 2, strokeColor: "#90C8C2", orientation: "SubLeft" },
        { id: "15", Label: "Director", parentId: "3", branch: "SubRight", fill: "#F7E0B3", hasChild: false, level: 2, strokeColor: "#F7E0B3", orientation: "SubRight" },
        { id: "16", Label: "Accounts Department", parentId: "3", branch: "SubRight", fill: "#F7E0B3", hasChild: false, level: 2, strokeColor: "#F7E0B3", orientation: "SubRight" },
        { id: "17", Label: "Administration", parentId: "3", branch: "SubRight", fill: "#F7E0B3", hasChild: false, level: 2, strokeColor: "#F7E0B3", orientation: "SubRight" },
        { id: "18", Label: "Development", parentId: "3", branch: "SubRight", fill: "#F7E0B3", hasChild: false, level: 2, strokeColor: "#F7E0B3", orientation: "SubRight" },
        { id: "19", Label: "Estimation", parentId: "5", branch: "SubRight", fill: "#E9D4F1", hasChild: false, level: 2, strokeColor: "#E9D4F1", orientation: "SubRight" },
        { id: "20", Label: "Profit", parentId: "5", branch: "SubRight", fill: "#E9D4F1", hasChild: false, level: 2, strokeColor: "#E9D4F1", orientation: "SubRight" },
        { id: "21", Label: "Funds", parentId: "5", branch: "SubRight", fill: "#E9D4F1", hasChild: false, level: 2, strokeColor: "#E9D4F1", orientation: "SubRight" }
    ];
    let currentBranch = 'Left';
    //Sets the default values of a connector
    function getConnectorDefaults(connector) {
        connector.type = 'Bezier';
        connector.targetDecorator = { shape: 'None' };
        connector.bezierSettings.allowSegmentsReset = false;
        connector.segments = [{ type: 'Bezier' }];
        var sourceNode = diagram.getObject(connector.sourceID);
        var targetNode = diagram.getObject(connector.targetID);
        if (!sourceNode.data) {
            sourceNode.data = {};
            sourceNode.data.id = sourceNode.id;
            sourceNode.data.branch = 'Root';
            sourceNode.data.orientation = 'Root';
            sourceNode.data.level = 0;
            sourceNode.data.parentId = '';
            sourceNode.data.Label = sourceNode.annotations[0].content;
            sourceNode.addInfo = sourceNode.data;
            let nodeData = getMindMapShape(sourceNode);
            sourceNode.data.fill = nodeData.node.style.fill;
            sourceNode.data.strokeColor = nodeData.node.style.strokeColor;
            sourceNode.addInfo = sourceNode.data;
            sourceNode.style.fill = sourceNode.data.fill;
            sourceNode.style.strokeColor = sourceNode.data.strokeColor;
        }
        if (!targetNode.data) {
            targetNode.data = {};
            targetNode.data.id = targetNode.id;
            targetNode.data.branch = sourceNode.data.branch === 'Root'
                ? currentBranch
                : (sourceNode.data.branch === 'Left' || sourceNode.data.branch === 'subLeft' || sourceNode.data.branch === 'SubLeft' ? 'subLeft' : 'subRight');

            targetNode.data.orientation = targetNode.data.branch === 'Left' || targetNode.data.branch === 'subLeft' ? 'Left' : 'Right';
            targetNode.data.level = sourceNode.data.level + 1;
            targetNode.data.parentId = sourceNode.data.id;
            targetNode.data.Label = targetNode.annotations[0].content;
            targetNode.addInfo = targetNode.data;
            let nodeData = getMindMapShape(sourceNode);
            targetNode.data.fill = nodeData.node.style.fill;
            targetNode.data.strokeColor = nodeData.node.style.strokeColor;
            targetNode.addInfo = targetNode.data;
            targetNode.style.fill = targetNode.data.fill;
            targetNode.style.strokeColor = targetNode.data.strokeColor;
            currentBranch = sourceNode.data.branch === 'Root' ? currentBranch === 'Left' ? 'Right' : 'Left' : currentBranch;
        }
        if (targetNode.data && (targetNode.data.branch === 'Right' || targetNode.data.branch === 'subRight' || targetNode.data.branch === 'SubRight')) {
            connector.sourcePortID = sourceNode.ports[0].id;
            connector.targetPortID = targetNode.ports[1].id;
            connector.style = { strokeWidth: 1, strokeColor: '#8c8c8c' };
        }
        else if (targetNode.data && (targetNode.data.branch === 'Left' || targetNode.data.branch === 'subLeft' || targetNode.data.branch === 'SubLeft')) {
            connector.sourcePortID = sourceNode.ports[1].id;
            connector.targetPortID = targetNode.ports[0].id;
            connector.style = { strokeWidth: 1, strokeColor: '#8c8c8c' };
        }
        connector.constraints &= ~ej.diagrams.ConnectorConstraints.Select;
        return connector;
    }
    let lastFillIndex = 0;
    let fillColorCode = ['#C4F2E8', '#F7E0B3', '#E5FEE4', '#E9D4F1', '#D4EFED', '#DEE2FF'];
    let borderColorCode = ['#8BC1B7', '#E2C180', '#ACCBAA', '#D1AFDF', '#90C8C2', '#BBBFD6'];
    function getMindMapShape(parentNode) {
        var sss = {};
        var node = {};
        var connector = {};
        var addInfo = parentNode.addInfo;
        node = {
            minWidth: 100, maxWidth: 100, shape: { type: 'Basic', shape: 'Rectangle' },
            annotations: [{ content: '' }],
            style: { fill: '#000000', strokeColor: '#000000' },
            addInfo: { level: (addInfo).level + 1 },
            offsetX: 200, offsetY: 200
        };
        connector = { type: 'Bezier', style: { strokeColor: '#000000' } };
        if ((addInfo).level < 1) {
            (node).style.fill = fillColorCode[lastFillIndex];
            (node).style.strokeColor = borderColorCode[lastFillIndex];
            ;
            if (lastFillIndex + 1 >= fillColorCode.length) {
                lastFillIndex = 0;
            }
            else {
                lastFillIndex++;
            }
        }
        else {
            (node).style.strokeColor = (node).style.fill = (parentNode).style.fill;
        }
        connector.type = 'Bezier';
        (connector).style.strokeColor = (node).style.fill;
        connector.targetDecorator = { shape: 'None' };
        (node).constraints = ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Drag;
        (node).ports = [
            { id: 'leftPort', offset: { x: 0, y: 0.5 } },
            { id: 'rightPort', offset: { x: 1, y: 0.5 } },
            { id: 'topPort', offset: { x: 0.5, y: 0 } },
            { id: 'bottomPort', offset: { x: 0.5, y: 1 } }];
        (sss).node = node;
        (sss).connector = connector;
        return sss;
    };

    //Sets the Node style for DragEnter element.
    function dragEnter(args) {
        let obj = args.element;
        if (obj instanceof ej.diagrams.Node) {
            let oWidth = obj.width;
            let oHeight = obj.height;
            let ratio = 100 / obj.width;
            obj.width = 100;
            obj.height *= ratio;
            obj.offsetX += (obj.width - oWidth) / 2;
            obj.offsetY += (obj.height - oHeight) / 2;
            obj.style = { fill: '#357BD2', strokeColor: 'white' };
        }
    }
    let interval = [
        1, 9, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75
    ];

    let gridlines = { lineColor: '#e0e0e0', lineIntervals: interval };
    let zoomMenuItems = [
        { text: 'Zoom In' }, { text: 'Zoom Out' }, { text: 'Zoom to Fit' }, { text: 'Zoom to 50%' },
        { text: 'Zoom to 100%' }, { text: 'Zoom to 200%' },
    ];
    let diagram;
    let items = new ej.data.DataManager(data, new ej.data.Query().take(7));
    let leftarrow = 'M11.924,6.202 L4.633,6.202 L4.633,9.266 L0,4.633 L4.632,0 L4.632,3.551 L11.923,3.551 L11.923,6.202Z';
    let rightarrow = 'M0,3.063 L7.292,3.063 L7.292,0 L11.924,4.633 L7.292,9.266 L7.292,5.714 L0.001,5.714 L0.001,3.063Z';
    let devareicon = 'M 7.04 22.13 L 92.95 22.13 L 92.95 88.8 C 92.95 91.92 91.55 94.58 88.76' +
        '96.74 C 85.97 98.91 82.55 100 78.52 100 L 21.48 100 C 17.45 100 14.03 98.91 11.24 96.74 C 8.45 94.58 7.04' +
        '91.92 7.04 88.8 z M 32.22 0 L 67.78 0 L 75.17 5.47 L 100 5.47 L 100 16.67 L 0 16.67 L 0 5.47 L 24.83 5.47 z';
    let leftuserhandle = setUserHandle('leftHandle', leftarrow, 'Left', 0.5, { top: 10, bottom: 0, left: 0, right: 10 }, 'Left', 'Top');
    let rightuserhandle = setUserHandle('rightHandle', rightarrow, 'Right', 0.5, { top: 10, bottom: 0, left: 10, right: 0 }, 'Right', 'Top');
    let devareuserhandle = setUserHandle('devare', devareicon, 'Top', 0.5, { top: 0, bottom: 0, left: 0, right: 0 }, 'Center', 'Center');
    let handle = [leftuserhandle, rightuserhandle, devareuserhandle];
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
    //Initializes diagram control
    diagram = new ej.diagrams.Diagram({
        width: '100%', height: '900px',
        selectionChange: selectionChange,
        historyChange: historyChange,
        onUserHandleMouseDown: onUserHandleMouseDown,
        tool: ej.diagrams.DiagramTools.Default,
        snapSettings: { horizontalGridlines: gridlines, verticalGridlines: gridlines },
        scrollSettings: { scrollLimit: 'Infinity' },
        layout: {
            type: 'MindMap', horizontalSpacing: 80,
            verticalSpacing: 50,
            getBranch: function (node) {
                if (node.addInfo) {
                    var addInfo = node.addInfo;
                    return (addInfo).orientation.toString();
                }
                return 'Left';
            }
        },
        selectedItems: { constraints: ej.diagrams.SelectorConstraints.UserHandle, userHandles: handle },
        dataSourceSettings: {
            id: 'id',
            parentId: 'parentId',
            dataSource: items,
            root: 1,
        },
        rulerSettings: { showRulers: true },
        scrollChange: function (args) {
            if (args.panState !== 'Start') {
                let zoomCurrentValue = (document.getElementById("btnZoomIncrement")).ej2_instances[0];
                zoomCurrentValue.content = Math.round(diagram.scrollSettings.currentZoom * 100) + ' %';
            }
        },
        //Sets the default values of a node
        getNodeDefaults: getNodeDefaults,
        //Sets the default values of a connector
        getConnectorDefaults: getConnectorDefaults,
        //Sets the Node style for DragEnter element.
        dragEnter: dragEnter,
    });
    diagram.appendTo('#diagram');
    if (diagram.element) {
        function onUserHandleMouseDown(args) {
            if (args.element.name === 'leftHandle') {
                addNode('Right');
            }
            else if (args.element.name === 'rightHandle') {
                addNode('Left');
            }
            else if (args.element.name === 'devare') {
                if (diagram.selectedItems.nodes.length > 0) {
                    diagram.historyManager.startGroupAction();
                    removeSubChild(diagram.selectedItems.nodes[0]);
                    diagram.historyManager.endGroupAction();
                    diagram.doLayout();
                }
            }
        }
        function removeSubChild(node) {
            // Process outgoing edges
            for (let i = node.outEdges.length - 1; i >= 0; i--) {
                const connector = getConnector(diagram.connectors, node.outEdges[i]);
                const childNode = getNode(diagram.nodes, connector.targetID);

                if (childNode && childNode.outEdges.length > 0) {
                    removeSubChild(childNode);
                } else {
                    for (let x = workingData.length - 1; x >= 0; x--) {
                        if (workingData[x].id === (childNode?.data).id) {
                            workingData.splice(x, 1);
                        }
                    }
                    diagram.remove(childNode);
                }
            }

            // Process incoming edges
            for (let j = node.inEdges.length - 1; j >= 0; j--) {
                const connector = getConnector(diagram.connectors, node.inEdges[j]);
                const childNode = getNode(diagram.nodes, connector.sourceID);
                let index = childNode.outEdges.indexOf(connector.id);

                if (childNode.outEdges.length > 1 && index === 0) {
                    index = childNode.outEdges.length;
                }

                if (index > 0) {
                    const node1 = childNode.outEdges[index - 1];
                    const connector1 = diagram.getObject(node1);
                    const node2 = getNode(diagram.nodes, connector1.targetID);
                    diagram.select([node2]);
                } else {
                    diagram.select([childNode]);
                }
            }

            // Remove the node from workingData
            for (let x = workingData.length - 1; x >= 0; x--) {
                if (workingData[x].id === (node.data).id) {
                    workingData.splice(x, 1);
                }
            }

            // Remove the node from the diagram
            diagram.remove(node);
        }
        //Button
        let button = new ej.buttons.Fab({ isPrimary: true, content: 'AI Assist', iconCss: 'e-icons e-aiassist-chat' });
        button.appendTo('#ai-assist');
        let btnZoomIncrement;
        //Initialize Toolbar component
        let toolbarObj = new ej.navigations.Toolbar({
            clicked: function (args) { toolbarClick(args); },
            created: function () {
                if (diagram !== undefined) {
                    btnZoomIncrement = new ej.splitbuttons.DropDownButton({
                        items: zoomMenuItems, content: Math.round(diagram.scrollSettings.currentZoom * 100) + ' %', select: zoomChange,
                    });
                    btnZoomIncrement.appendTo('#btnZoomIncrement');
                    // refreshOverflow();
                }

            },
            items: toolbarItems(),
            overflowMode: 'Scrollable',
            width: '100%',
            height: 40
        });

        toolbarObj.appendTo('#toolbarEditor');

        btnZoomIncrement = new ej.splitbuttons.DropDownButton({
            items: zoomMenuItems, content: Math.round(diagram.scrollSettings.currentZoom * 100) + ' %', select: zoomChange,
        });
        btnZoomIncrement.appendTo('#btnZoomIncrement');
        var index = 1;
        function addSibilingChild() {
            var selectedNode = diagram.selectedItems.nodes[0];
            if (selectedNode.data.branch !== 'Root') {
                var selectedNodeOrientation = selectedNode.addInfo.orientation.toString();
                var orientation_3 = selectedNodeOrientation;
                var connector1 = getConnector(diagram.connectors, selectedNode.inEdges[0]);
                diagram.startGroupAction();
                var mindmapData = getMindMapShape(getNode(diagram.nodes, connector1.sourceID));
                var node = mindmapData.node;
                index = index + 1;
                node.id = index.toString();
                if (node.addInfo) {
                    node.addInfo.orientation = orientation_3;
                }
                else {
                    node.addInfo = { 'orientation': orientation_3 };
                }
                var nodeData = {
                    id: node.id,
                    Label: 'Node',
                    fill: node.style.fill,
                    branch: orientation_3,
                    strokeColor: node.style.strokeColor,
                    parentId: selectedNode.data.id,
                    level: node.addInfo.level,
                    orientation: node.addInfo.orientation,
                    hasChild: false,
                };
                node.data = {
                    id: node.id,
                    Label: 'Node',
                    fill: node.style.fill,
                    strokeColor: node.style.strokeColor,
                    orientation: node.addInfo.orientation,
                    branch: orientation_3,
                    parentId: selectedNode.data.id,
                    level: node.addInfo.level,
                    hasChild: false,
                };
                var tempData = workingData.filter(
                    (a) => a.id === selectedNode.data.id
                );
                tempData[0].hasChild = true;
                workingData.push(nodeData);
                diagram.add(node);
                var connector = setConnectorDefault(diagram, orientation_3, mindmapData.connector, connector1.sourceID, node.id);
                diagram.add(connector);
                var node1 = getNode(diagram.nodes, node.id);
                diagram.doLayout();
                diagram.endGroupAction();
                diagram.select([node1]);
            }
        }
        function addNode(orientation, label, canSelect) {
            var selectedNode = diagram.selectedItems.nodes[0];
            if (selectedNode.data.branch !== 'Root') {
                var selectedNodeOrientation = selectedNode.addInfo.orientation.toString();
                orientation = selectedNodeOrientation;
            }
            diagram.startGroupAction();
            var mindmapData = getMindMapShape(selectedNode);
            var node = mindmapData.node;
            index = index + 1;
            node.id = index.toString();
            if (node.addInfo) {
                node.addInfo.orientation = orientation;
            }
            else {
                node.addInfo = { 'orientation': orientation };
            }
            var nodeData = {
                id: node.id,
                Label: label ? label : "Node",
                fill: node.style.fill,
                branch: orientation,
                strokeColor: node.style.strokeColor,
                parentId: selectedNode.data.id,
                level: node.addInfo.level,
                orientation: node.addInfo.orientation,
                hasChild: false,
            };
            node.data = {
                id: node.id,
                Label: label ? label : "Node",
                fill: node.style.fill,
                strokeColor: node.style.strokeColor,
                orientation: node.addInfo.orientation,
                branch: orientation,
                parentId: selectedNode.data.id,
                level: node.addInfo.level,
                hasChild: false,
            };
            var tempData = workingData.filter(
                (a) => a.id === selectedNode.data.id
            );
            tempData[0].hasChild = true;
            workingData.push(nodeData);
            diagram.add(node);
            var connector = setConnectorDefault(diagram, orientation, mindmapData.connector, selectedNode.id, node.id);
            diagram.add(connector);
            var node1 = getNode(diagram.nodes, node.id);
            diagram.doLayout();
            diagram.endGroupAction();
            if (!canSelect) {
                diagram.select([node1]);
            }
        }
        function getConnector(connectors, name) {
            for (var i = 0; i < connectors.length; i++) {
                if (connectors[i].id === name) {
                    return connectors[i];
                }
            }
            return null;
        };
        function getNode(nodes, name) {
            for (var i = 0; i < nodes.length; i++) {
                if (nodes[i].id === name) {
                    return nodes[i];
                }
            }
            return null;
        };
        function setConnectorDefault(diagram, orientation, connector, sourceID, targetID) {
            connector.id = 'connector' + ej.diagrams.randomId();
            connector.sourceID = sourceID;
            connector.targetID = targetID;
            connector.sourcePortID = 'rightPort';
            connector.targetPortID = 'leftPort';
            if (orientation === 'Right') {
                connector.sourcePortID = 'leftPort';
                connector.targetPortID = 'rightPort';
            }
            connector.style.strokeWidth = 3;
            return connector;
        };


        function toolbarItems() {
            let items = [
                { prefixIcon: 'sf-icon-undo', tooltipText: 'Undo', disabled: true },
                { prefixIcon: 'sf-icon-redo', tooltipText: 'Redo', disabled: true },
                {
                    type: 'Separator'
                },
                { prefixIcon: 'sf-icon-pointer tb-icons', tooltipText: 'Select Tool', cssClass: 'tb-item-selected' },
                { prefixIcon: 'sf-icon-Pan tb-icons', tooltipText: 'Pan Tool', cssClass: '' },
                {
                    type: 'Separator'
                },
                {
                    prefixIcon: 'sf-icon-add-child', tooltipText: 'Add Child', disabled: true
                },
                {
                    prefixIcon: 'sf-icon-add-sibling', tooltipText: 'Add Sibling', disabled: true
                },
                {
                    type: 'Separator'
                },
                {
                    cssClass: 'tb-item-end tb-zoom-dropdown-btn', template: '<button id="btnZoomIncrement"></button>', align: "Right",
                }

            ];
            return items;
        }

        function selectionChange(args) {
            if (args.state === 'Changing') {
                if (args.type === "Addition") {
                    if (args.newValue[0] instanceof Node && args.newValue[0].addInfo) {
                        for (var _i = 0, _a = diagram.selectedItems.userHandles; _i < _a.length; _i++) {
                            var handle_1 = _a[_i];
                            handle_1.visible = true;
                        }
                        if ((args.newValue[0].addInfo).orientation === 'Left' ||
                            (args.newValue[0].addInfo).orientation === 'subLeft' ||
                            (args.newValue[0].addInfo).orientation === 'SubLeft') {
                            hideUserHandle('leftHandle');
                            changeUserHandlePosition('leftHandle');
                            changeUserHandlePosition('devare');
                        }
                        else if ((args.newValue[0].addInfo).orientation === 'Right' ||
                            (args.newValue[0].addInfo).orientation === 'subRight' ||
                            (args.newValue[0].addInfo).orientation === 'SubRight') {
                            hideUserHandle('rightHandle');
                            changeUserHandlePosition('rightHandle');
                            changeUserHandlePosition('devare');

                        }
                        else if ((args.newValue[0].data).branch === 'Root') {
                            hideUserHandle('devare');
                        }
                        onClickDisable(false, args.newValue[0]);
                    }
                    else {
                        hideUserHandle('leftHandle');
                        hideUserHandle('rightHandle');
                        hideUserHandle('devare');
                        onClickDisable(true, args.newValue[0]);
                    }
                }
            }
            if (args.newValue.length === 0) {
                onClickDisable(true);
            }
        }

        //hide the require userhandle.
        function hideUserHandle(name) {
            for (let i = 0; i < diagram.selectedItems.userHandles.length; i++) {
                var handle = diagram.selectedItems.userHandles[i];
                if (handle.name === name) {
                    handle.visible = false;
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
        //Change the Position of the UserHandle.
        function changeUserHandlePosition(change) {
            for (var i = 0; i < diagram.selectedItems.userHandles.length; i++) {
                var handle = diagram.selectedItems.userHandles[i];
                if (handle.name === 'devare' && change === 'leftHandle') {
                    applyHandle(handle, 'Left', 1, { top: 0, bottom: 0, left: 0, right: 10 }, 'Left', 'Top');

                } else if (handle.name === 'devare' && change === 'rightHandle') {
                    applyHandle(handle, 'Right', 1, { top: 0, bottom: 0, left: 10, right: 0 }, 'Right', 'Top');
                }
            }
        }

        function historyChange() {
            if (diagram.historyManager.undoStack.length > 0) {
                toolbarObj.items[0].disabled = false;
            } else {
                toolbarObj.items[0].disabled = true;
            }
            if (diagram.historyManager.redoStack.length > 0) {
                toolbarObj.items[1].disabled = false;
            } else {
                toolbarObj.items[1].disabled = true;
            }
        }
        //Sets the default values of a node
        function getNodeDefaults(obj) {
            if (obj.id !== 'textNode' && obj.data) {
                obj.constraints = ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Drag;
                var empInfo = obj.data;
                obj.style = {
                    fill: (obj.data).fill, strokeColor: (obj.data).strokeColor,
                    strokeWidth: 1
                };
                if (empInfo.branch === 'Root') {
                    obj.addInfo = { level: 0 };
                    (obj.data).level = (obj.addInfo).level;
                    (obj.data).orientation = empInfo.branch;
                }
                obj.addInfo = { level: (obj.data).level, orientation: (obj.data).orientation };
                (obj.shape).cornerRadius = empInfo.branch === 'Root' ? 5 : 0;
                obj.shape = { type: 'Basic', shape: 'Ellipse' };
                obj.width = empInfo.branch === 'Root' ? 150 : 100;
                obj.height = empInfo.branch === 'Root' ? 75 : 50;
                obj.annotations = [{
                    content: empInfo.Label,

                }];
            }
            var port = getPort();
            if (!(obj).ports.length) {
                for (var i = 0; i < port.length; i++) {
                    (obj).ports.push(new ej.diagrams.PointPort(obj, 'ports', port[i], true));
                }
            }

            return obj;
        }
        //creation of the Ports
        function getPort() {
            var port =
                [{
                    id: 'leftPort', offset: { x: 0, y: 0.5 }, visibility: ej.diagrams.PortVisibility.Hidden,
                    style: { fill: 'black' }
                },
                {
                    id: 'rightPort', offset: { x: 1, y: 0.5 }, visibility: ej.diagrams.PortVisibility.Hidden,
                    style: { fill: 'black' }
                },
                {
                    id: 'topPort', offset: { x: 0.5, y: 0 }, visibility: ej.diagrams.PortVisibility.Hidden,
                    style: { fill: 'black' }
                },
                {
                    id: 'bottomPort', offset: { x: 0.5, y: 1 }, visibility: ej.diagrams.PortVisibility.Hidden,
                    style: { fill: 'black' }
                }
                ];
            return port;
        }
        let uploadObject = new ej.inputs.Uploader({
            asyncSettings: {
                saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
                removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
            }, success: onUploadSuccess, showFileList: false
        });
        uploadObject.appendTo('#fileupload');
        function printDiagram() {
            let options = {};
            options.mode = 'Download';
            options.region = 'Content';
            options.multiplePage = diagram.pageSettings.multiplePage;
            options.pageHeight = diagram.pageSettings.height;
            options.pageWidth = diagram.pageSettings.width;
            diagram.print(options);
        }
        function onClickDisable(args, node) {
            if (args === false) {
                toolbarObj.items[6].disabled = false;
                toolbarObj.items[8].disabled = false;
                if ((node.addInfo).level !== 0) {
                    toolbarObj.items[7].disabled = false;
                } else {
                    toolbarObj.items[7].disabled = true;
                }
            }
            else if (args === true) {
                toolbarObj.items[6].disabled = true;
                toolbarObj.items[7].disabled = true;
                toolbarObj.items[8].disabled = true;
            }
        }
        function toolbarClick(args) {
            let item = args.item.tooltipText;
            switch (item) {
                case 'Undo':
                    diagram.undo();
                    break;
                case 'Redo':
                    diagram.redo();
                    break;
                case 'Select Tool':
                    diagram.clearSelection();
                    diagram.tool = ej.diagrams.DiagramTools.Default;
                    changeToolbarSelection('Select Tool');
                    break;
                case 'Pan Tool':
                    diagram.clearSelection();
                    diagram.tool = ej.diagrams.DiagramTools.ZoomPan;
                    changeToolbarSelection('Pan Tool');
                    break;
                case 'Add Child':
                    var orientation = getOrientation();
                    addNode(orientation);
                    break;
                case 'Add Sibling':
                    addSibilingChild();
                    break;
            }
            diagram.dataBind();
        }
        function getOrientation() {
            var leftChildCount = 0;
            var rightChildCount = 0;
            var orientation;
            if (diagram.selectedItems.nodes[0].data.branch === "Root") {
                for (var i = 0; i < diagram.nodes.length; i++) {
                    if (diagram.nodes[i].addInfo && diagram.nodes[i].addInfo.level === 1) {
                        if (diagram.nodes[i].addInfo.orientation === "Left") {
                            leftChildCount++;
                        } else {
                            rightChildCount++;
                        }
                    }
                }
                orientation = leftChildCount > rightChildCount ? "Right" : "Left";
            } else {
                var selectedNodeOrientation = diagram.selectedItems.nodes[0].addInfo.orientation.toString();
                orientation = selectedNodeOrientation;
            }
            return orientation;

        }
        function changeToolbarSelection(tool) {
            let items = toolbarObj.items;
            for (let i = 0; i < items.length; i++) {
                if (items[i].tooltipText === tool) {
                    items[i].cssClass = 'tb-item-selected';
                } else {
                    items[i].cssClass = '';
                }
            }
            setTimeout(() => {
                btnZoomIncrement = new ej.splitbuttons.DropDownButton({
                    items: zoomMenuItems, content: Math.round(diagram.scrollSettings.currentZoom * 100) + ' %', select: zoomChange,
                });
                btnZoomIncrement.appendTo('#btnZoomIncrement');
            }, 10);

        }
        function zoomChange(args) {
            let zoomCurrentValue = (document.getElementById("btnZoomIncrement")).ej2_instances[0];
            let currentZoom = diagram.scrollSettings.currentZoom;
            let zoom = {};
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
                    }
                    else {
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
        //Export the diagraming object based on the format.
        function onselectExport(option) {
            let exportOptions = {};
            exportOptions.format = option.toUpperCase();
            exportOptions.mode = 'Download';
            exportOptions.region = 'Content';
            exportOptions.fileName = 'Export';
            exportOptions.margin = { left: 0, top: 0, bottom: 0, right: 0 };
            diagram.exportDiagram(exportOptions);
        }

        function onUploadSuccess(args) {
            let file = args.file;
            let rawFile = file.rawFile;
            let reader = new FileReader();
            reader.readAsText(rawFile);
            reader.onloadend = loadDiagram;
        }
        function loadDiagram(event) {
            diagram.loadDiagram(event.target.result);
            diagram.fitToPage({ mode: 'Page' });
            updateOrientation(diagram)
            workingData = [];
            if (diagram.dataSourceSettings.dataSource && diagram.dataSourceSettings.dataSource.dataSource.json && diagram.dataSourceSettings.dataSource.dataSource.json.length > 0) {
                for (let i = 0; i < diagram.dataSourceSettings.dataSource.dataSource.json.length; i++) {
                    let treeData = diagram.dataSourceSettings.dataSource.dataSource.json[i];
                    workingData.push(treeData);
                }
            }
            pushWorkingData();
        }
        //To update the layout based on the orientation
        function updateOrientation(diagram) {
            for (var i = 0; i < diagram.connectors.length; i++) {
                var connector = diagram.connectors[i];
                if (diagram.layout.orientation === "Vertical") {
                    if (connector.sourcePortID === "rightPort" && connector.targetPortID === "leftPort") {
                        connector.sourcePortID = 'bottomPort';
                        connector.targetPortID = "topPort";
                    }
                    if (connector.sourcePortID === "leftPort" && connector.targetPortID === "rightPort") {
                        connector.sourcePortID = 'topPort';
                        connector.targetPortID = 'bottomPort';
                    }
                } else if (diagram.layout.orientation === "Horizontal") {
                    if (connector.sourcePortID === "bottomPort" && connector.targetPortID === "topPort") {
                        connector.sourcePortID = 'rightPort';
                        connector.targetPortID = "leftPort";
                    }
                    if (connector.sourcePortID === "topPort" && connector.targetPortID === "bottomPort") {
                        connector.sourcePortID = 'leftPort';
                        connector.targetPortID = 'rightPort';
                    }
                }
            }
        }

        function download(data) {
            if ((window.navigator).msSaveBlob) {
                let blob = new Blob([data], { type: 'data:text/json;charset=utf-8,' });
                (window.navigator).msSaveOrOpenBlob(blob, 'Diagram.json');
            }
            else {
                let dataString = 'data:text/json;charset=utf-8,' + encodeURIComponent(data);
                let ele = document.createElement('a');
                ele.href = dataString;
                ele.download = 'Diagram.json';
                document.body.appendChild(ele);
                ele.click();
                ele.remove();
            }
        }


        // Dialog

        let dialog = new ej.popups.Dialog({
            header: '<span class="e-icons e-aiassist-chat" style="color: black;width:20px; font-size: 16px;"></span> AI Assist',
            showCloseIcon: true,
            isModal: true,
            content: `<p style="margin-bottom: 10px;font-weight:bold;">Suggested Prompts</p>
            <button id="btn1" style="flex: 1; overflow: visible; border-radius: 8px;margin-bottom: 10px;">Mindmap for top tourist places in the world</button>
            <button id="btn2" style="flex: 1; overflow: visible; border-radius: 8px;margin-bottom: 10px;">Mindmap for categories of topics in science</button>
            <button id="btn3" style="flex: 1; overflow: visible; border-radius: 8px;margin-bottom: 10px;">Mindmap for different components in syncfusion</button>
            <div style="display: flex; align-items: center; margin-top: 20px;">
            <input type="text" id="textBox" class="db-openai-textbox" style="flex: 1;" />
            <button id="db-send" style="margin-left: 5px; height: 32px; width: 32px;"></button>
            </div>
            `,
            target: document.getElementById('control-section'),
            width: '540px',
            visible: false,
            height: '310px',
        });
        dialog.appendTo('#dialog');
        let btn1 = new ej.buttons.Button();
        let btn2 = new ej.buttons.Button();
        let btn3 = new ej.buttons.Button();
        let sendButton = new ej.buttons.Button({ iconCss: 'e-icons e-send', isPrimary: true, disabled: true });
        btn1.appendTo('#btn1');
        btn2.appendTo('#btn2');
        btn3.appendTo('#btn3');
        sendButton.appendTo('#db-send');
        let textBox = new ej.inputs.TextBox({ placeholder: 'Please enter your prompt here...', width: 450, input: onTextBoxChange });
        textBox.appendTo('#textBox');
        let msgBtn1 = (document.getElementById('btn1'));
        let msgBtn2 = (document.getElementById('btn2'));
        let msgBtn3 = (document.getElementById('btn3'));

        // Menu items definition
        let menuItems = [
            {
                text: 'File',
                items: [
                    { text: 'New', iconCss: 'e-icons e-circle-add' }, { separator: true }, { text: 'Open', iconCss: 'e-icons e-folder-open' },
                    { text: 'Save', iconCss: 'e-icons e-save' },
                    {
                        text: 'Export', iconCss: 'e-export e-icons', items: [
                            { text: 'JPG' }, { text: 'PNG' }, { text: 'SVG' }
                        ]
                    },
                    { text: 'Print', iconCss: 'e-print e-icons' }
                ]
            },
            {
                text: 'Edit',
                items: [
                    { text: 'Undo', iconCss: 'e-icons e-undo' }, { text: 'Redo', iconCss: 'e-icons e-redo' }, { separator: true },
                    { text: 'Cut', iconCss: 'e-cut e-icons' }, { text: 'Copy', iconCss: 'e-copy e-icons' },
                    { text: 'Paste', iconCss: 'e-icons e-paste' }, { text: 'Delete', iconCss: 'e-trash e-icons' }, { separator: true },
                    { text: 'Select All', iconCss: 'e-icons e-select-all' },
                ]
            },
            {
                text: 'View',
                items: [
                    { text: 'Zoom In', iconCss: 'e-zoom-in e-icons' }, { text: 'Zoom Out', iconCss: 'e-zoom-out e-icons' }, { separator: true },
                    { text: 'Fit To Screen', iconCss: 'e-icons e-zoom-to-fit' }, { separator: true },
                    { text: 'Show Rulers', iconCss: 'e-icons e-check' },
                    { text: 'Show Lines', iconCss: 'e-icons e-check' },
                ]
            },
            {
                text: 'Window',
                items: [
                    { text: 'Show Toolbar', iconCss: 'e-icons e-check' },
                    { text: 'Show Shortcuts', iconCss: '' },
                ]
            },
        ];

        // Menu initialization
        let menu = new ej.navigations.Menu({
            items: menuItems, select: function (args) {
                let option = args.item.text?.toLowerCase().replace(/\s+/g, '');
                switch (option) {
                    case 'new':
                        diagram.clear();
                        diagram.loadDiagram('{"width":"100%","height":"100%","snapSettings":{"constraints":0,"gridType":"Lines","verticalGridlines":{"lineIntervals":[1.25,18.75,0.25,19.75,0.25,19.75,0.25,19.75,0.25,19.75]},"horizontalGridlines":{"lineIntervals":[1.25,18.75,0.25,19.75,0.25,19.75,0.25,19.75,0.25,19.75]}},"tool":1,"layout":{"type":"MindMap","horizontalSpacing":50,"verticalSpacing":50,"getBranch":{},"enableAnimation":true,"connectionPointOrigin":"SamePoint","arrangement":"Nonlinear","enableRouting":false,"fixedNode":"sZIN0"},"selectedItems":{"constraints":4096,"userHandles":[{"name":"leftHandle","pathData":"M11.924,6.202 L4.633,6.202 L4.633,9.266 L0,4.633 L4.632,0 L4.632,3.551 L11.923,3.551 L11.923,6.202Z","backgroundColor":"black","pathColor":"white","side":"Left","offset":0.5,"margin":{"top":10,"bottom":0,"left":0,"right":10},"horizontalAlignment":"Left","verticalAlignment":"Top"},{"name":"rightHandle","pathData":"M0,3.063 L7.292,3.063 L7.292,0 L11.924,4.633 L7.292,9.266 L7.292,5.714 L0.001,5.714 L0.001,3.063Z","backgroundColor":"black","pathColor":"white","side":"Right","offset":0.5,"margin":{"top":10,"bottom":0,"left":10,"right":0},"horizontalAlignment":"Right","verticalAlignment":"Top"},{"name":"devare","pathData":"M 7.04 22.13 L 92.95 22.13 L 92.95 88.8 C 92.95 91.92 91.55 94.58 88.7696.74 C 85.97 98.91 82.55 100 78.52 100 L 21.48 100 C 17.45 100 14.03 98.91 11.24 96.74 C 8.45 94.58 7.0491.92 7.04 88.8 z M 32.22 0 L 67.78 0 L 75.17 5.47 L 100 5.47 L 100 16.67 L 0 16.67 L 0 5.47 L 24.83 5.47 z","backgroundColor":"black","pathColor":"white","side":"Top","offset":0.5,"margin":{"top":0,"bottom":0,"left":0,"right":0},"horizontalAlignment":"Center","verticalAlignment":"Center"}],"nodes":[],"connectors":[],"wrapper":null,"selectedObjects":[]},"dataSourceSettings":{"id":"id","parentId":"parentId","dataSource":{"dateParse":true,"timeZoneHandling":true,"requests":[],"dataSource":{"json":[{"id":"1","Label":"Root","fill":"#D0ECFF","branch":"Root","hasChild":true,"level":0,"strokeColor":"#80BFEA","orientation":"Root"}],"offline":true,"dataType":"json"},"defaultQuery":{"subQuery":null,"isChild":false,"distincts":[],"queries":[{"fn":"onTake","e":{"nos":7}}],"key":"","fKey":"","expands":[],"sortedColumns":[],"groupedColumns":[],"params":[],"lazyLoad":[]},"adaptor":{"options":{"from":"table","requestType":"json","sortBy":"sorted","select":"select","skip":"skip","group":"group","take":"take","search":"search","count":"requiresCounts","where":"where","aggregates":"aggregates","expand":"expand"},"type":{},"pvt":{}}},"root":"1","dataManager":null,"crudAction":{"read":""},"connectionDataSource":{"dataManager":null},"dataMapSettings":[]},"getNodeDefaults":{},"getConnectorDefaults":{},"getCustomTool":{},"selectionChange":{},"rulerSettings":{"showRulers":true,"dynamicGrid":true,"horizontalRuler":{"orientation":"Horizontal","interval":10,"segmentWidth":100,"thickness":25,"tickAlignment":"RightOrBottom","arrangeTick":null},"verticalRuler":{"orientation":"Vertical","interval":10,"segmentWidth":100,"thickness":25,"tickAlignment":"RightOrBottom","arrangeTick":null}},"created":{},"keyDown":{},"historyChange":{},"textEdit":{},"drop":{},"scrollChange":{},"enableRtl":false,"locale":"en-US","scrollSettings":{"currentZoom":1,"viewPortWidth":1330,"viewPortHeight":629.6614379882812,"horizontalOffset":0,"verticalOffset":-0.33,"padding":{"left":0,"right":0,"top":0,"bottom":0},"scrollLimit":"Diagram","minZoom":0.2,"maxZoom":30},"enablePersistence":false,"backgroundColor":"transparent","constraints":500,"contextMenuSettings":{},"mode":"SVG","layers":[{"id":"default_layer","visible":true,"lock":false,"objects":["sZIN0"],"zIndex":0,"objectZIndex":0}],"nodes":[{"id":"sZIN0","data":{"id":"1","Label":"Root","fill":"#D0ECFF","branch":"Root","hasChild":true,"level":0,"strokeColor":"#80BFEA","orientation":"Root"},"shape":{"type":"Basic","cornerRadius":5,"shape":"Ellipse"},"ports":[{"id":"leftPort","offset":{"x":0,"y":0.5},"visibility":2,"style":{"fill":"black","strokeColor":"black","opacity":1,"strokeDashArray":"","strokeWidth":1},"inEdges":[],"outEdges":[],"height":12,"width":12,"shape":"Square","margin":{"right":0,"bottom":0,"left":0,"top":0},"horizontalAlignment":"Center","verticalAlignment":"Center"},{"id":"rightPort","offset":{"x":1,"y":0.5},"visibility":2,"style":{"fill":"black","strokeColor":"black","opacity":1,"strokeDashArray":"","strokeWidth":1},"inEdges":[],"outEdges":[],"height":12,"width":12,"shape":"Square","margin":{"right":0,"bottom":0,"left":0,"top":0},"horizontalAlignment":"Center","verticalAlignment":"Center"}],"zIndex":0,"constraints":5240810,"style":{"fill":"#D0ECFF","strokeColor":"#80BFEA","strokeWidth":1,"gradient":{"type":"None"},"strokeDashArray":"","opacity":1},"addInfo":{"level":0,"orientation":"Root"},"expandIcon":{"shape":"None","height":10,"width":10,"fill":"white","borderColor":"black","offset":{"x":0.5,"y":1}},"collapseIcon":{"shape":"None","height":10,"width":10,"fill":"white","borderColor":"black","offset":{"x":0.5,"y":1}},"width":150,"height":75,"annotations":[{"id":"VgDkd","content":"Root","annotationType":"String","style":{"strokeWidth":0,"strokeColor":"transparent","fill":"transparent","bold":false,"textWrapping":"WrapWithOverflow","color":"black","whiteSpace":"CollapseSpace","fontFamily":"Arial","fontSize":12,"italic":false,"opacity":1,"strokeDashArray":"","textAlign":"Center","textOverflow":"Wrap","textDecoration":"None"},"hyperlink":{"link":"","hyperlinkOpenState":"NewTab","content":"","textDecoration":"None"},"constraints":4,"visibility":true,"rotateAngle":0,"margin":{"right":0,"bottom":0,"left":0,"top":0},"horizontalAlignment":"Center","verticalAlignment":"Center","offset":{"x":0.5,"y":0.5}}],"container":null,"offsetX":665,"offsetY":314.8307189941406,"visible":true,"horizontalAlignment":"Left","verticalAlignment":"Top","backgroundColor":"transparent","borderColor":"none","borderWidth":0,"rotateAngle":0,"pivot":{"x":0.5,"y":0.5},"margin":{},"flip":"None","wrapper":{"actualSize":{"width":150,"height":75},"offsetX":665,"offsetY":314.8307189941406},"flipMode":"All","isExpanded":true,"fixedUserHandles":[],"excludeFromLayout":false,"inEdges":[],"outEdges":[],"parentId":"","processId":"","umlIndex":-1,"isPhase":false,"isLane":false}],"connectors":[],"diagramSettings":{"inversedAlignment":true},"pageSettings":{"boundaryConstraints":"Infinity","width":null,"orientation":"Landscape","height":null,"background":{"source":"","color":"transparent"},"showPageBreaks":false,"fitOptions":{"canFit":false}},"basicElements":[],"tooltip":{"content":""},"commandManager":{"commands":[{"name":"leftChild","canExecute":{},"execute":{},"gesture":{"key":9},"parameter":""},{"name":"rightChild","canExecute":{},"execute":{},"gesture":{"key":9,"keyModifiers":4},"parameter":""},{"name":"showShortCut","canExecute":{},"execute":{},"gesture":{"key":112},"parameter":""},{"name":"FitToPage","canExecute":{},"execute":{},"gesture":{"key":119},"parameter":""},{"name":"boldLabel","canExecute":{},"execute":{},"gesture":{"key":66,"keyModifiers":1},"parameter":""},{"name":"italicLabel","canExecute":{},"execute":{},"gesture":{"key":73,"keyModifiers":1},"parameter":""},{"name":"underlineLabel","canExecute":{},"execute":{},"gesture":{"key":85,"keyModifiers":1},"parameter":""},{"name":"deleteNode","canExecute":{},"execute":{},"gesture":{"key":8},"parameter":""},{"name":"removeNode","canExecute":{},"execute":{},"gesture":{"key":46},"parameter":""},{"name":"expandCollapse","canExecute":{},"execute":{},"gesture":{"key":32},"parameter":""},{"name":"expandCollapseParent","canExecute":{},"execute":{},"gesture":{"key":69,"keyModifiers":1},"parameter":""},{"gesture":{"key":13},"canExecute":{},"execute":{},"name":"sibilingChildTop","parameter":""},{"name":"newDiagram","canExecute":{},"execute":{},"gesture":{"key":78,"keyModifiers":1},"parameter":""},{"name":"saveDiagram","canExecute":{},"execute":{},"gesture":{"key":83,"keyModifiers":1},"parameter":""},{"name":"openDiagram","canExecute":{},"execute":{},"gesture":{"key":79,"keyModifiers":1},"parameter":""},{"name":"navigationDown","canExecute":{},"execute":{},"gesture":{"key":40},"parameter":""},{"name":"navigationUp","canExecute":{},"execute":{},"gesture":{"key":38},"parameter":""},{"name":"navigationLeft","canExecute":{},"execute":{},"gesture":{"key":37},"parameter":""},{"name":"navigationRight","canExecute":{},"execute":{},"gesture":{"key":39},"parameter":""}]},"version":17.1}');
                        workingData = [{ id: '1', Label: 'Root', branch: 'Root', hasChild: true, level: 0, fill: "#D0ECFF", strokeColor: "#80BFEA", orientation: 'Root', parentId: '' },];
                        break;
                    case 'open':
                        (document.getElementsByClassName('e-file-select-wrap'))[0].querySelector('button').click();
                        break;
                    case 'save':
                        download(diagram.saveDiagram());
                        break;
                    case 'print':
                        let printOptions = {};
                        printOptions.multiplePage = false;
                        diagram.print(printOptions);
                        break;
                    case 'jpg':
                    case 'png':
                    case 'svg':
                        onselectExport(option)
                        break;
                    case 'undo':
                        diagram.undo();
                        break;
                    case 'redo':
                        diagram.redo();
                        break;
                    case 'cut':
                        diagram.cut();
                        break;
                    case 'copy':
                        diagram.copy();
                        break;
                    case 'paste':
                        diagram.paste();
                        break;
                    case 'delete':
                        diagram.remove();
                        break;
                    case 'selectall':
                        diagram.selectAll();
                        break;
                    case 'fittoscreen':
                        diagram.fitToPage({ mode: 'Page', region: 'Content', margin: { left: 0, top: 0, right: 0, bottom: 0 } });
                        break;
                    case 'showrulers':
                        diagram.rulerSettings.showRulers = !diagram.rulerSettings.showRulers;
                        args.item.iconCss = args.item.iconCss ? '' : 'sf-icon-check-tick';
                        break;
                    case 'zoomin':
                        diagram.zoomTo({ type: 'ZoomIn', zoomFactor: 0.2 });
                        btnZoomIncrement.content = Math.round(diagram.scrollSettings.currentZoom * 100) + ' %';
                        break;
                    case 'zoomout':
                        diagram.zoomTo({ type: 'ZoomOut', zoomFactor: 0.2 });
                        btnZoomIncrement.content = Math.round(diagram.scrollSettings.currentZoom * 100) + ' %';
                        break;
                    case 'showtoolbar':
                        let toolbar = document.getElementById('toolbarEditor');
                        toolbar.style.display = toolbar.style.display === 'none' ? 'block' : 'none';
                        args.item.iconCss = args.item.iconCss ? '' : 'sf-icon-check-tick';
                        break;
                    case 'showlines':
                        diagram.snapSettings.constraints = diagram.snapSettings.constraints ^ ej.diagrams.SnapConstraints.ShowLines;
                        args.item.iconCss = args.item.iconCss ? '' : 'sf-icon-check-tick';
                        break;
                    case 'showshortcuts':
                        var node1 = document.getElementById('shortcutDiv');
                        node1.style.visibility = node1.style.visibility === "hidden" ? node1.style.visibility = "visible" : node1.style.visibility = "hidden";
                        args.item.iconCss = args.item.iconCss ? '' : 'sf-icon-check-tick';
                        break;
                    case 'showpagebreaks':
                        args.item.iconCss = args.item.iconCss ? '' : 'sf-icon-check-tick';
                        diagram.pageSettings.showPageBreaks = !diagram.pageSettings.showPageBreaks;
                        break;
                }

            }
        }, '#menu');

        (document.getElementById('ai-assist')).onclick = () => {
            dialog.show();
        }

        (document.getElementById('db-send')).onclick = () => {
            dialog.hide();
            convertTextToFlowChart(textBox.value)
        }

        (document.getElementById('closeIconDiv')).onclick = () => {
            onHideNodeClick()
        }

        function onHideNodeClick() {
            var node1 = document.getElementById('shortcutDiv');
            node1.style.visibility = node1.style.visibility === "hidden" ? node1.style.visibility = "visible" : node1.style.visibility = "hidden";
            (menu.items[3]).items[1].iconCss = node1.style.visibility === "hidden" ? '' : 'sf-icon-check-tick';
            diagram.dataBind();
        }
        function onTextBoxChange(args) {
            if (args.value !== '') {
                sendButton.disabled = false;
            } else {
                sendButton.disabled = true;
            }
        }
        msgBtn1.onclick = () => {
            dialog.hide();
            convertTextToFlowChart(msgBtn1.innerText);
        }
        msgBtn2.onclick = () => {
            dialog.hide();
            convertTextToFlowChart(msgBtn2.innerText);

        }
        msgBtn3.onclick = () => {
            dialog.hide();
            convertTextToFlowChart(msgBtn3.innerText);
        }
        async function convertTextToFlowChart(inputText) {
            showLoading();
            const options = {
                messages: [
                    {
                        role: 'system',
                        content: 'You are an assistant tasked with generating mermaid mindmap diagram data source based on user queries with space indentation'
                    },
                    {
                        role: 'user',
                        content: `Generate only the Mermaid mindmap code for the subject titled "${inputText}".
                    Use the format provided in the example below, but adjust the steps, shapes, and indentation according to the new title:
                    
                    **Example Title:** Organizational Research
                    
                    **Example Steps and Mermaid Code:**
          
                        mindmap
                        root(Mobile Banking Registration)
                            User(User)
                            PersonalInfo(Personal Information)
                                Name(Name)
                                DOB(Date of Birth)
                                Address(Address)
                            ContactInfo))Contact Information((
                                Email(Email)
                                Phone(Phone Number)
                            Account[Account]
                                AccountType[Account Type]
                                    Savings[Savings]
                                    Checking[Checking]
                                AccountDetails(Account Details)
                                    AccountNumber(Account Number)
                                    SortCode(Sort Code)
                            Security{{Security}}
                                Authentication(Authentication)
                                    Password(Password)
                                    Biometrics(Biometrics)
                                    Fingerprint(Fingerprint)
                                    FaceID(Face ID)
                                Verification)Verification(
                                    OTP)OTP(
                                    SecurityQuestions)Security Questions(
                            Terms(Terms & Conditions)
                                AcceptTerms(Accept Terms)
                                PrivacyPolicy(Privacy Policy)
          
                    
                    
                    Note: Please ensure the generated code matches the title "${inputText}" and follows the format given above. Provide only the Mermaid mindmap code, without any additional explanations, comments, or text.
                    `
                    }
                ],
            }
            try {
                const jsonResponse = await getAzureChatAIRequest(options);
                diagram.loadDiagramFromMermaid(jsonResponse);
                diagram.clearHistory();
                pushWorkingData();
                toolbarObj.items[0].disabled = true;
                hideLoading();

            } catch (error) {
                console.error('Error:', error);
                convertTextToFlowChart(inputText);

            }
        };

        function pushWorkingData() {
            workingData = [];
            for (var i = 0; i < diagram.nodes.length; i++) {
                var node = diagram.nodes[i];
                var nodeData = {
                    id: node.id,
                    Label: node.annotations ? node.annotations[0].content : 'Node',
                    fill: node.style.fill,
                    branch: node.addInfo.orientation,
                    strokeColor: node.style.strokeColor,
                    parentId: node.data.parentId,
                    level: node.addInfo.level,
                    orientation: node.addInfo.orientation,
                    hasChild: false,
                };
                workingData.push(nodeData);
            }
            // Create a Set of parentIds to quickly check which ids have children
            const parentIds = new Set(workingData.map(item => item.parentId).filter(id => id !== null));

            // Iterate over the data array and set hasChild to true if id is in parentIds
            workingData.forEach(item => {
                if (parentIds.has(item.id)) {
                    item.hasChild = true;
                }
            });
        }

        // Function to show loading indicator
        function showLoading() {
            (document.getElementById('loadingContainer')).style.display = 'block';
        }

        // Function to hide loading indicator
        function hideLoading() {
            (document.getElementById('loadingContainer')).style.display = 'none';
        }

        // Add keypress event listener to the document
        document.addEventListener('keypress', function (event) {
            if (event.key === 'Enter' && document.activeElement === textBox.element) {
                if (textBox.value) {
                    dialog.hide();
                    convertTextToFlowChart(textBox.value);
                }
            }
        });
    }
};