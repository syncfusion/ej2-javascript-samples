
//Sets up the default configuration for the diagram.
this.default = function () {
    var diagram;
    var portVisibilityDrop;
    var portFillDrop;
    var portBorderDrop;
    var portShapeDrop;
    var portWidthNum;
    var portSizeNum;
    //Retrieves the ports of the currently selected node in the diagram.
    function getPort() {
        var node = diagram.selectedItems.nodes[0];
        var port = [];
        if (node) {
            port = node.ports;
        }
        return port;
    }
    //enable or disable the property panel based on the Selection.
    function selectionChange(args) {
        if (args.state === 'Changed') {
            var appearance = document.getElementById('propertypanel');
            var selectedElement = document.getElementsByClassName('e-remove-selection');
            if (args.newValue) {
                // custom code start
                if (!appearance.classList.contains('e-remove-selection')) {
                    appearance.classList.add('e-remove-selection');
                }
                // custom code end
                if (args.newValue[0] instanceof ej.diagrams.Node && selectedElement.length) {
                    selectedElement[0].classList.remove('e-remove-selection');
                    var port = getPort()[0];
                    portVisibilityDrop.value = port.visibility;
                    portVisibilityDrop.dataBind();
                    portFillDrop.value = port.style.fill;
                    portFillDrop.dataBind();
                    portBorderDrop.value = port.style.strokeColor;
                    portBorderDrop.dataBind();
                    portShapeDrop.value = port.shape;
                    portShapeDrop.dataBind();
                    portSizeNum.value = port.height;
                    portSizeNum.dataBind();
                    portWidthNum.value = port.style.strokeWidth;
                    portWidthNum.dataBind();
                }
            }
        }
    }
    //change the Visibility of the Port.
    function portVisibilityChange(args) {
        var port = getPort();
        if (port) {
            for (var j = 0; j < port.length; j++) {
                port[j].visibility = portVisibilityDrop.value;
            }
            diagram.dataBind();
        }
    }
    //set the appearence of the Port.
    function applyPortStyle(value) {
        var port = getPort();
        for (var j = 0; j < port.length; j++) {
            if (value === 'size') {

                port[j].height = portSizeNum.value;
                port[j].width = portSizeNum.value;

            } else if (value === 'strokewidth') {
                port[j].style.strokeWidth = portWidthNum.value;
            }
        }
        diagram.dataBind();
    }
    //change the shape of the Port.
    function portShapeChange(args) {
        var port = getPort();
        for (var j = 0; j < port.length; j++) {
            switch (portShapeDrop.value) {
                case 'X':
                    port[j].shape = 'X';
                    break;
                case 'Circle':
                    port[j].shape = 'Circle';
                    break;
                case 'Square':
                    port[j].shape = 'Square';
                    break;
                case 'Custom':
                    port[j].shape = 'Custom';
                    port[j].pathData = 'M6.805,0L13.61,10.703L0,10.703z';
                    break;
            }
            diagram.dataBind();
        }

    }
    //Function to Create nodes by the parameters
    function createNode(id, offsetX, offsetY, annotationContent, ports) {
        return {
            id: id,
            offsetX: offsetX,
            offsetY: offsetY,
            annotations: [{ content: annotationContent }],
            ports: ports
        };
    }
    //Function to Create connector by the parameters
    function createConnector(id, sourceID, sourcePortID, targetID, targetPortID) {
        return {
            id: id,
            sourceID: sourceID,
            sourcePortID: sourcePortID,
            targetID: targetID,
            targetPortID: targetPortID
        };
    }
    //Function to Create connector by the parameters
    function createPort(id, shape, offsetX, offsetY, text) {
        return {
            id: id,
            shape: shape,
            offset: { x: offsetX, y: offsetY },
            height: 8,
            width: 8,
            visibility: ej.diagrams.PortVisibility.Visible,
            text: text
        };
    }
    // Get the bounding rectangle of the control section
    var bounds = document.getElementsByClassName('control-section')[0].getBoundingClientRect();
    // Calculate the center X coordinate of the control section
    var centerX = bounds.width / 2;
    // Define ports for each node
    var node1Port = [
        createPort('port1', 'Circle', 0, 0.5, 'In - 1'),
        createPort('port2', 'Circle', 1, 0.5, 'OUT - 1'),
        createPort('port3', 'Circle', 0.25, 1, 'In - 2'),
        createPort('port4', 'Circle', 0.5, 1, 'OUT - 2'),
        createPort('port5', 'Circle', 0.75, 1, 'In - 3')
    ];
    var node2Port = [
        createPort('port6', 'Circle', 0, 0.5, 'In - 1'),
        createPort('port7', 'Circle', 1, 0.35, 'OUT - 1'),
        createPort('port8', 'Circle', 1, 0.70, 'In - 2'),
        createPort('port9', 'Circle', 0.5, 1, 'OUT - 2')
    ];
    var node3Port = [
        createPort('port10', 'Circle', 0, 0.5, 'Out - 1'),
        createPort('port11', 'Circle', 0.5, 0, 'In - 1'),
        createPort('port12', 'Circle', 0.5, 1, 'OUT - 2')
    ];
    var node4Port = [
        createPort('port13', 'Circle', 0, 0.5, 'In - 1'),
        createPort('port14', 'Circle', 0.5, 0, 'In - 2'),
        createPort('port15', 'Circle', 0.5, 1, 'OUT - 1')
    ];
    var node5Port = [
        createPort('port16', 'Circle', 0, 0.5, 'out - 1'),
        createPort('port17', 'Circle', 0.5, 0, 'In - 1'),
        createPort('port18', 'Circle', 1, 0.5, 'OUT - 2')
    ];
    var node6Port = [
        createPort('port19', 'Circle', 0, 0.35, 'In - 1'),
        createPort('port20', 'Circle', 0.5, 1, 'Out - 1')
    ];
    var node7Port = [
        createPort('port21', 'Circle', 0.5, 0, 'In - 1'),
        createPort('port22', 'Circle', 0.5, 1, 'Out - 1')
    ];
    // Define shapes for nodes
    var shape1 = { type: 'Basic', shape: 'Rectangle' };
    var shape2 = { type: 'Basic', shape: 'Diamond' };
    var nodes = [
        createNode('node1', centerX - 200, 100, 'Publisher', node1Port),
        createNode('node2', centerX, 100, 'Completed Book', node2Port),
        createNode('node3', centerX, 200, '1st Review', node3Port),
        createNode('node4', centerX, 300, 'Legal Terms', node4Port),
        createNode('node5', centerX, 400, '2nd Review', node5Port),
        createNode('node6', centerX + 200, 100, 'Board', node6Port),
        createNode('node7', centerX + 200, 200, 'Approval', node7Port)
    ];
    // Define connectors for the diagram
    var connectors = [
        createConnector('connector1', 'node1', 'port2', 'node2', 'port6'),
        createConnector('connector2', 'node1', 'port4', 'node4', 'port13'),
        createConnector('connector3', 'node2', 'port9', 'node3', 'port11'),
        createConnector('connector4', 'node2', 'port7', 'node6', 'port19'),
        createConnector('connector5', 'node3', 'port10', 'node1', 'port5'),
        createConnector('connector6', 'node3', 'port12', 'node4', 'port14'),
        createConnector('connector7', 'node4', 'port15', 'node5', 'port17'),
        createConnector('connector8', 'node5', 'port18', 'node2', 'port8'),
        createConnector('connector9', 'node5', 'port16', 'node1', 'port3'),
        createConnector('connector10', 'node6', 'port20', 'node7', 'port21'),
        createConnector('connector11', 'node7', 'port22', 'node1', 'port1')
    ];
    //Initialize diagram control
    diagram = new ej.diagrams.Diagram({
        width: '100%', height: 580,
        nodes: nodes, connectors: connectors, selectionChange: selectionChange,
        snapSettings: { constraints: 0 },
        //Sets the default values of nodes
        getNodeDefaults: function (node) {
            //Initialize shape
            if (node.id === 'node1' || node.id === 'node2' || node.id === 'node4' || node.id === 'node6') {
                node.shape = shape1;
            } else if (node.id === 'node3' || node.id === 'node5' || node.id === 'node7') {
                node.shape = shape2;
            }
            //sets height and width for nodes
            node.height = 65;
            node.width = 100;
            node.style = { fill: '#ebf8fb', strokeColor: '#baeaf5' };
            for (var i = 0; i < node.ports.length; i++) {
                //sets styles for the ports
                node.ports[i].style = {
                    fill: '#366f8c',
                    strokeColor: '#366f8c'
                };
                node.ports[i].width = 6;
                node.ports[i].height = 6;
            }
            node.annotations[0].style = {
                fontSize: 13,
                color: 'black'
            };
        },
        //Sets the default values of connector
        getConnectorDefaults: function (connector) {
            //defines type of the connectors
            connector.type = 'Orthogonal';
            connector.style = { strokeColor: '#8cdcef', strokeWidth: 1 };
            connector.targetDecorator = { width: 5, height: 5, style: { fill: '#8cdcef', strokeColor: '#8cdcef' } };
        },
    });
    diagram.appendTo('#diagram');
    //Visibility collection of the Port.
    var visibility = [
        { PortVisibility: ej.diagrams.PortVisibility.Visible, text: 'Visible' },
        { PortVisibility: ej.diagrams.PortVisibility.Hidden, text: 'Hidden' },
        { PortVisibility: ej.diagrams.PortVisibility.Hover, text: 'Hover' },
        { PortVisibility: ej.diagrams.PortVisibility.Connect, text: 'Connect' }
    ];
    //Enable or disable the visibility of the Port
    portVisibilityDrop = new ej.dropdowns.DropDownList({
        enabled: true,
        dataSource: visibility,
        fields: { value: 'PortVisibility', text: 'text' },
        value: 'Visible',
        change: portVisibilityChange,
    });
    portVisibilityDrop.appendTo('#portsVisiblity');
    //Colorpicker used to apply for fill color of the Port.
    portFillDrop = new ej.inputs.ColorPicker({
        value: '#000', disabled: false, change: function (arg) {
            var port = getPort();
            for (var j = 0; j < port.length; j++) {
                port[j].style.fill = arg.currentValue.rgba;
            }
        }
    });
    portFillDrop.appendTo('#fill');
    //Colorpicker used to apply for stroke color of the Port.
    portBorderDrop = new ej.inputs.ColorPicker({
        value: '#000', disabled: false, change: function (arg) {
            var port = getPort();
            for (var j = 0; j < port.length; j++) {
                port[j].style.strokeColor = arg.currentValue.rgba;
            }
        }
    });
    portBorderDrop.appendTo('#border');
    //Shape collection of the Port.
    var shape = [
        { shape: 'X', text: 'X' },
        { shape: 'Circle', text: 'Circle' },
        { shape: 'Square', text: 'Square' },
        { shape: 'Custom', text: 'Custom' }
    ];
    //DropDownList is used to apply the shape of the Port.
    portShapeDrop = new ej.dropdowns.DropDownList({
        enabled: true, placeholder: 'Select a Port', value: 'Circle',
        dataSource: shape, fields: { value: 'shape', text: 'text' },
        change: portShapeChange
    });
    //NumericTextBox is used to apply the size of the Port.
    portShapeDrop.appendTo('#shape');
    portSizeNum = new ej.inputs.NumericTextBox({
        enabled: true,
        format: '###.##',
        value: 6,
        min: 1,
        step: 1,
        change: function (args) {
            applyPortStyle('size');
        }
    });
    portSizeNum.appendTo('#size');
    //NumericTextBox is used to apply the StrokeWidth of the Port.
    portWidthNum = new ej.inputs.NumericTextBox({
        enabled: true,
        format: '###.##',
        value: 1,
        min: 0.5,
        step: 0.5,
        change: function (args) {
            applyPortStyle('strokewidth');
        }
    });
    portWidthNum.appendTo('#width');
    diagram.select([diagram.nodes[0]]);
};