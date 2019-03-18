ej.diagrams.Diagram.Inject(ej.diagrams.UndoRedo);
ej.dropdowns.MultiSelect.Inject(ej.dropdowns.CheckBoxSelection);
//get the port for the selected node.
var diagram;
var portVisibilityDrop;
var portFillDrop;
var portBorderDrop;
var portShapeDrop;

var portWidthNum;
var portSizeNum;

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
                portVisibilityDrop.value = [];
                if (ej.diagrams.PortVisibility.Visible & port.visibility) {
                    portVisibilityDrop.value.push(ej.diagrams.PortVisibility.Visible);
                }
                if (ej.diagrams.PortVisibility.Hidden & port.visibility) {
                    portVisibilityDrop.value.push(ej.diagrams.PortVisibility.Hidden);
                }
                if (ej.diagrams.PortVisibility.Hover & port.visibility) {
                    portVisibilityDrop.value.push(ej.diagrams.PortVisibility.Hover);
                }
                if (ej.diagrams.PortVisibility.Connect & port.visibility) {
                    portVisibilityDrop.value.push(ej.diagrams.PortVisibility.Connect);
                }
                if (portVisibilityDrop.value.length === 0) {
                    portVisibilityDrop.placeholder = 'Select Visibility';
                }
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
            port[j].visibility = 0;
            for (var i = 0; i < args.value.length; i++) {
                port[j].visibility += args.value[i];
            }
        }
    }
    diagram.dataBind();
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

this.default = function () {
    var bounds = document.getElementsByClassName('control-section')[0].getBoundingClientRect();
    var centerX = bounds.width / 2;
    var node1Port = [
        {
            id: 'port1', shape: 'Circle', offset: { x: 0, y: 0.5 }, height: 8, width: 8, visibility: ej.diagrams.PortVisibility.Visible,
            text: 'In - 1'
        },
        {
            id: 'port2', shape: 'Circle', offset: { x: 1, y: 0.5 }, height: 8, width: 8, visibility: ej.diagrams.PortVisibility.Visible,
            text: 'OUT - 1'
        },
        {
            id: 'port3', shape: 'Circle', offset: { x: 0.25, y: 1 }, height: 8, width: 8, visibility: ej.diagrams.PortVisibility.Visible,
            text: 'In - 2'
        },
        {
            id: 'port4', shape: 'Circle', offset: { x: 0.5, y: 1 }, height: 8, width: 8, visibility: ej.diagrams.PortVisibility.Visible,
            text: 'OUT - 2'
        },
        {
            id: 'port5', shape: 'Circle', offset: { x: 0.75, y: 1 }, height: 8, width: 8, visibility: ej.diagrams.PortVisibility.Visible,
            text: 'In - 3'
        }
    ];
    var node2Port = [
        {
            id: 'port6', shape: 'Circle', offset: { x: 0, y: 0.5 }, height: 8, width: 8, visibility: ej.diagrams.PortVisibility.Visible,
            text: 'In - 1'
        },
        {
            id: 'port7', shape: 'Circle', offset: { x: 1, y: 0.35 }, height: 8, width: 8, visibility: ej.diagrams.PortVisibility.Visible,
            text: 'OUT - 1'
        },
        {
            id: 'port8', shape: 'Circle', offset: { x: 1, y: 0.70 }, height: 8, width: 8, visibility: ej.diagrams.PortVisibility.Visible,
            text: 'In - 2'
        },
        {
            id: 'port9', shape: 'Circle', offset: { x: 0.5, y: 1 }, height: 8, width: 8, visibility: ej.diagrams.PortVisibility.Visible,
            text: 'OUT - 2'
        }
    ];
    var node3Port = [
        {
            id: 'port10', shape: 'Circle', offset: { x: 0, y: 0.5 }, height: 8, width: 8, visibility: ej.diagrams.PortVisibility.Visible,
            text: 'Out - 1'
        },
        {
            id: 'port11', shape: 'Circle', offset: { x: 0.5, y: 0 }, height: 8, width: 8, visibility: ej.diagrams.PortVisibility.Visible,
            text: 'In - 1'
        },
        {
            id: 'port12', shape: 'Circle', offset: { x: 0.5, y: 1 }, height: 8, width: 8, visibility: ej.diagrams.PortVisibility.Visible,
            text: 'OUT - 2'
        }
    ];
    var node4Port = [
        {
            id: 'port13', shape: 'Circle', offset: { x: 0, y: 0.5 }, height: 8, width: 8, visibility: ej.diagrams.PortVisibility.Visible,
            text: 'In - 1'
        },
        {
            id: 'port14', shape: 'Circle', offset: { x: 0.5, y: 0 }, height: 8, width: 8, visibility: ej.diagrams.PortVisibility.Visible,
            text: 'In - 2'
        },
        {
            id: 'port15', shape: 'Circle', offset: { x: 0.5, y: 1 }, height: 8, width: 8, visibility: ej.diagrams.PortVisibility.Visible,
            text: 'OUT - 1'
        }
    ];
    var node5Port = [
        {
            id: 'port16', shape: 'Circle', offset: { x: 0, y: 0.5 }, height: 8, width: 8, visibility: ej.diagrams.PortVisibility.Visible,
            text: 'out - 1'
        },
        {
            id: 'port17', shape: 'Circle', offset: { x: 0.5, y: 0 }, height: 8, width: 8, visibility: ej.diagrams.PortVisibility.Visible,
            text: 'In - 1'
        },
        {
            id: 'port18', shape: 'Circle', offset: { x: 1, y: 0.5 }, height: 8, width: 8, visibility: ej.diagrams.PortVisibility.Visible,
            text: 'OUT - 2'
        }
    ];
    var node6Port = [
        {
            id: 'port19', shape: 'Circle', offset: { x: 0, y: 0.35 }, height: 8, width: 8, visibility: ej.diagrams.PortVisibility.Visible,
            text: 'In - 1'
        },
        {
            id: 'port20', shape: 'Circle', offset: { x: 0.5, y: 1 }, height: 8, width: 8, visibility: ej.diagrams.PortVisibility.Visible,
            text: 'Out - 1'
        }
    ];
    var node7Port = [
        {
            id: 'port21', shape: 'Circle', offset: { x: 0.5, y: 0 }, height: 8, width: 8, visibility: ej.diagrams.PortVisibility.Visible,
            text: 'In - 1'
        },
        {
            id: 'port22', shape: 'Circle', offset: { x: 0.5, y: 1 }, height: 8, width: 8, visibility: ej.diagrams.PortVisibility.Visible,
            text: 'Out - 1'
        }
    ];
    var shape1 = { type: 'Basic', shape: 'Rectangle' };
    var shape2 = { type: 'Basic', shape: 'Diamond' };
    var nodes = [
        {
            id: 'node1', offsetX: centerX - 200, offsetY: 100,
            annotations: [{ content: 'Publisher' }], ports: node1Port
        },
        {
            id: 'node2', offsetX: centerX, offsetY: 100,
            annotations: [{ content: 'Completed Book', margin: { left: 5, right: 5 } }], ports: node2Port
        },
        {
            id: 'node3', offsetX: centerX, offsetY: 200,
            annotations: [{ content: '1st Review' }], ports: node3Port
        },
        {
            id: 'node4', offsetX: centerX, offsetY: 300,
            annotations: [{ content: 'Legal Terms' }], ports: node4Port
        },
        {
            id: 'node5', offsetX: centerX, offsetY: 400,
            annotations: [{ content: '2nd Review' }], ports: node5Port
        },
        {
            id: 'node6', offsetX: centerX + 200, offsetY: 100,
            annotations: [{ content: 'Board' }], ports: node6Port
        },
        {
            id: 'node7', offsetX: centerX + 200, offsetY: 200,
            annotations: [{ content: 'Approval' }], ports: node7Port
        }
    ];
    var connectors = [
        {
            id: 'connector1', sourceID: 'node1', sourcePortID: 'port2',
            targetID: 'node2', targetPortID: 'port6'
        },
        {
            id: 'connector2', sourceID: 'node1', sourcePortID: 'port4',
            targetID: 'node4', targetPortID: 'port13'
        },
        {
            id: 'connector3', sourceID: 'node2', sourcePortID: 'port9',
            targetID: 'node3', targetPortID: 'port11'
        },
        {
            id: 'connector4', sourceID: 'node2', sourcePortID: 'port7',
            targetID: 'node6', targetPortID: 'port19'
        },
        {
            id: 'connector5', sourceID: 'node3', sourcePortID: 'port10',
            targetID: 'node1', targetPortID: 'port5'
        },
        {
            id: 'connector6', sourceID: 'node3', sourcePortID: 'port12',
            targetID: 'node4', targetPortID: 'port14'
        },
        {
            id: 'connector7', sourceID: 'node4', sourcePortID: 'port15',
            targetID: 'node5', targetPortID: 'port17'
        },
        {
            id: 'connector8', sourceID: 'node5', sourcePortID: 'port18',
            targetID: 'node2', targetPortID: 'port8'
        },
        {
            id: 'connector9', sourceID: 'node5', sourcePortID: 'port16',
            targetID: 'node1', targetPortID: 'port3'
        },
        {
            id: 'connector10', sourceID: 'node6', sourcePortID: 'port20',
            targetID: 'node7', targetPortID: 'port21'
        },
        {
            id: 'connector11', sourceID: 'node7', sourcePortID: 'port22',
            targetID: 'node1', targetPortID: 'port1'
        }
    ];
    //Initialize diagram control
    diagram = new ej.diagrams.Diagram({
        width: '100%', height: 580,
        nodes: nodes, connectors: connectors, selectionChange: selectionChange,
        snapSettings: { constraints: 0 },
        //Sets the default values of nodes
        getNodeDefaults: function (obj) {
            //Initialize shape
            if (obj.id === 'node1' || obj.id === 'node2' || obj.id === 'node4' || obj.id === 'node6') {
                obj.shape = shape1;
            } else if (obj.id === 'node3' || obj.id === 'node5' || obj.id === 'node7') {
                obj.shape = shape2;
            }
            //sets height and width for nodes
            obj.height = 65;
            obj.width = 100;
            obj.style = { fill: '#ebf8fb', strokeColor: '#baeaf5' };
            for (var i = 0; i < obj.ports.length; i++) {
                //sets styles for the ports
                obj.ports[i].style = {
                    fill: '#366f8c',
                    strokeColor: '#366f8c'
                };
                obj.ports[i].width = 6;
                obj.ports[i].height = 6;
            }
            obj.annotations[0].style = {
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
    portVisibilityDrop = new ej.dropdowns.MultiSelect({
        enabled: true, dataSource: visibility,
        fields: { value: 'PortVisibility', text: 'text' },
        mode: 'CheckBox',
        showSelectAll: true,
        showdropdownsIcon: true,
        popupHeight: '280px',
        popupWidth: '180px',
        change: portVisibilityChange
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