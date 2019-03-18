/**
 * Connector sample
 */
ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding, ej.diagrams.HierarchicalTree,
    ej.diagrams.ConnectorBridging);
var diagram;


//creation of the TextElement.
function getTextElement(text) {
    var textElement = new ej.diagrams.TextElement();
    textElement.id = ej.diagrams.randomId(); 
    textElement.width = 80;
    textElement.height = 35;
    textElement.content = text;
    textElement.style.fill = '#6f409f';
    textElement.style.color = 'white';
    textElement.style.strokeColor = '#6f409f';
    textElement.cornerRadius = 5;
    textElement.margin = { top: 10, bottom: 10, left: 10, right: 10 };
    textElement.relativeMode = 'Object';
    return textElement;
}

//creation of Port for Node.
function getPorts(obj) {
    if (obj.id === 'node2') {
        var node2Ports = [
            { id: 'port1', offset: { x: 1, y: 0.25 }, visibility: ej.diagrams.PortVisibility.Hidden },
            { id: 'port2', offset: { x: 1, y: 0.5 }, visibility: ej.diagrams.PortVisibility.Hidden },
            { id: 'port3', offset: { x: 1, y: 0.75 }, visibility: ej.diagrams.PortVisibility.Hidden }
        ];
        return node2Ports;
    }
    else if (obj.id === 'node6') {
        var node6Ports = [
            { id: 'port4', offset: { x: 0, y: 0.46 }, visibility: ej.diagrams.PortVisibility.Hidden },
            { id: 'port5', offset: { x: 0, y: 0.5 }, visibility: ej.diagrams.PortVisibility.Hidden },
            { id: 'port6', offset: { x: 0, y: 0.54 }, visibility: ej.diagrams.PortVisibility.Hidden }
        ];
        return node6Ports;
    }
    else {
        var ports = [
            { id: 'portIn', offset: { x: 0, y: 0.5 }, visibility: ej.diagrams.PortVisibility.Hidden },
            { id: 'portOut', offset: { x: 1, y: 0.5 }, visibility: ej.diagrams.PortVisibility.Hidden },
        ];
        return ports;
    }
}

//ConnectorStyle customization
function applyConnectorStyle(dashedLine, sourceDec, isRounded, type, target, strokeWidth) {
    for (var i = 0; i < diagram.connectors.length; i++) {
        connector = diagram.connectors[i];
        connector.style.strokeWidth = !strokeWidth ? 2 : strokeWidth;
        connector.type = type;
        connector.cornerRadius = isRounded ? 5 : 0;
        connector.style.strokeDashArray = dashedLine ? '5,5' : '';
        if (sourceDec) {
            diagram.connectors[i].sourceDecorator = {
                style: {
                    strokeColor: '#6f409f',
                    fill: '#6f409f', strokeWidth: 2
                }, shape: 'Circle'
            };
        }
        else {
            diagram.connectors[i].sourceDecorator = { shape: 'None' };
        }
        diagram.connectors[i].targetDecorator = {
            style: {
                strokeColor: '#6f409f',
                fill: '#6f409f', strokeWidth: 2
            }, shape: 'Arrow'
        };
        diagram.dataBind();
    }
    // custom code start
    target.classList.add('e-selected-style');
    // custom code end
}
// tslint:disable-next-line:max-func-body-length
this.default = function () {
    var bounds = document.getElementsByClassName('content-wrapper')[0].getBoundingClientRect();
    var marginLeft = (bounds.width - 560) / 2;
    //Initialize Diagram Nodes
    var nodes = [
        { id: 'node1', annotations: [{ content: 'Promotion' }] },
        { id: 'node2', annotations: [{ content: 'Lead' }] },
        { id: 'node3', annotations: [{ content: 'Account' }] },
        { id: 'node4', annotations: [{ content: 'Information' }] },
        { id: 'node5', annotations: [{ content: 'Opportunity' }] },
        { id: 'node6', offsetX: marginLeft + 530, offsetY: 290, excludeFromLayout: true }
    ];
    //Initialize Diagram connectors
    var connectors = [
        { id: 'connectr', sourceID: 'node1', targetID: 'node2' },
        {
            id: 'connectr1', sourceID: 'node2', sourcePortID: 'port1',
            targetID: 'node3', targetPortID: 'portIn'
        },
        {
            id: 'connectr2', sourceID: 'node2', sourcePortID: 'port2',
            targetID: 'node4', targetPortID: 'portIn'
        },
        {
            id: 'connectr3', sourceID: 'node2', sourcePortID: 'port3',
            targetID: 'node5', targetPortID: 'portIn'
        },
        {
            id: 'connectr4', sourceID: 'node6', sourcePortID: 'port4',
            targetID: 'node3', targetPortID: 'portOut'
        },
        {
            id: 'connectr5', sourceID: 'node6', sourcePortID: 'port5',
            targetID: 'node4', targetPortID: 'portOut'
        },
        {
            id: 'connectr7', sourceID: 'node6', sourcePortID: 'port6',
            targetID: 'node5', targetPortID: 'portOut'
        }
    ];
    //Initializes diagram control
    diagram = new ej.diagrams.Diagram({
        width: '100%', height: 580, nodes: nodes,
        connectors: connectors,
        selectedItems: {
            constraints: (ej.diagrams.SelectorConstraints.ConnectorSourceThumb
                | ej.diagrams.SelectorConstraints.ConnectorTargetThumb)
        },
        //Configrues hierarchical tree layout
        layout: {
            type: 'HierarchicalTree', orientation: 'LeftToRight',
            verticalSpacing: 75, margin: { left: marginLeft, right: 0, top: 0, bottom: 0 }
        },
        snapSettings: { constraints: 0 },
        //set default value for Nodes.
        getNodeDefaults: function (obj) {
            if (obj.id !== 'node1') {
                obj.ports = getPorts(obj);
            }
            if (obj.id !== 'node6') {
                obj.shape = { type: 'Basic', shape: 'Rectangle', cornerRadius: 10 };
                obj.width = 80;
                obj.style.strokeWidth = 2;
                obj.style.strokeColor = '#6F409F';
                obj.height = 35;
            }
        },
        //set default value for Connectors.
        getConnectorDefaults: function (obj) {
            obj.type = 'Bezier';
            obj.style.strokeColor = '#6f409f';
            obj.style.strokeWidth = 2;
            obj.targetDecorator = {
                style: {
                    strokeColor: '#6f409f',
                    fill: '#6f409f',
                }
            };
        },
        //Customize the content of the node
        setNodeTemplate: function (obj) {
            if (obj.id === 'node6') {
                var canvas = new ej.diagrams.StackPanel();
                canvas.id = ej.diagrams.randomId();
                canvas.children = [];
                canvas.style.strokeWidth = 0;
                canvas.style.fill = '#e6e0eb';
                canvas.children.push(getTextElement('Events', '#a6a1e0'));
                canvas.children.push(getTextElement('Emails', '#db8ec9'));
                canvas.children.push(getTextElement('Calls', '#db8ec9'));
                canvas.children.push(getTextElement('Smart Contents', '#db8ec9'));
                return canvas;
            }
            return null;
        },
    });
    diagram.appendTo('#diagram');
    //checkbox is used to enable or disable the connector interaction.
    var checkBoxObj = new ej.buttons.CheckBox({
        checked: false, label: 'Lock',
        change: function (args) {
            for (var j = 0; j < diagram.connectors.length; j++) {
                var connector = diagram.connectors[j];
                if (args.checked) {
                    connector.constraints &= ~(ej.diagrams.ConnectorConstraints.DragSourceEnd
                        | ej.diagrams.ConnectorConstraints.DragTargetEnd | ej.diagrams.ConnectorConstraints.DragSegmentThumb);
                    connector.constraints |= ej.diagrams.ConnectorConstraints.ReadOnly;
                }
                else {
                    connector.constraints |= ej.diagrams.ConnectorConstraints.Default & ~(ej.diagrams.ConnectorConstraints.ReadOnly);
                }
                diagram.dataBind();
            }
        }
    });
    checkBoxObj.appendTo('#checked');

    //Click Event for Appearance of the layout.
    document.getElementById('appearance').onclick = function (args) {
        var target = args.target;
        // custom code start
        var selectedElement = document.getElementsByClassName('e-selected-style');
        if (selectedElement.length) {
            selectedElement[0].classList.remove('e-selected-style');
        }
        // custom code end
        if (target.className === 'image-pattern-style') {
            switch (target.id) {
                case 'straightConnector':
                    applyConnectorStyle(false, false, false, 'Straight', target, 1);
                    break;
                case 'orthogonalConnector':
                    applyConnectorStyle(false, false, false, 'Orthogonal', target, 1);
                    break;
                case 'bezierConnector':
                    applyConnectorStyle(false, false, false, 'Bezier', target, 1);
                    break;
                case 'straightConnectorWithStroke':
                    applyConnectorStyle(false, false, false, 'Straight', target);
                    break;
                case 'orthogonalConnectorWithStroke':
                    applyConnectorStyle(false, false, false, 'Orthogonal', target);
                    break;
                case 'bezierConnectorWithStroke':
                    applyConnectorStyle(false, false, false, 'Bezier', target);
                    break;
                case 'straightConnectorWithDasharray':
                    applyConnectorStyle(true, false, false, 'Straight', target);
                    break;
                case 'orthogonalConnectorWithDasharray':
                    applyConnectorStyle(true, false, false, 'Orthogonal', target);
                    break;
                case 'bezierConnectorWithDasharray':
                    applyConnectorStyle(true, false, false, 'Bezier', target);
                    break;
                case 'cornerRadious':
                    applyConnectorStyle(false, false, true, 'Orthogonal', target);
                    break;
                case 'sourceDecorator':
                    applyConnectorStyle(false, true, false, 'Straight', target);
                    break;
                case 'sourceDecoratorWithDasharray':
                    applyConnectorStyle(true, true, false, 'Straight', target);
                    break;
            }
        }
    };
};
