/**
 * Connector sample
 */
ej.diagrams.Diagram.Inject(ej.diagrams.HierarchicalTree);


// tslint:disable-next-line:max-func-body-length
this.default = function () {
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

//Connector style customization
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
                    strokeColor: connector.style.strokeColor,
                    fill: connector.style.strokeColor, strokeWidth: 2
                }, 
                shape: 'Circle'
            };
            document.getElementById('sourceDecorator2').value='Circle';
            sourceDecoratorShape.value = "Circle";
        }
        else {
            diagram.connectors[i].sourceDecorator = { shape: 'None' };
            document.getElementById('sourceDecorator2').value='None';
            sourceDecoratorShape.value = "None";
        }
        diagram.connectors[i].targetDecorator = {
            style: {
                strokeColor: connector.style.strokeColor,
                fill: connector.style.strokeColor, strokeWidth: 2
            }, shape: 'Arrow',
        };
        document.getElementById("targetDecorator").value='Arrow';
        targetDecoratorShape.value = "Arrow";
        diagram.dataBind();
        diagram.updateSelector();
    }
    // custom code start
    target.classList.add('e-selected-style');
    // custom code end
}

//Change Source decorator shape
function sourceDecoratorShapeChange(args)
{
    for (var i = 0; i < diagram.connectors.length; i++) {
        diagram.connectors[i].sourceDecorator = {
         shape: args.itemData.shape,
         style:{
                strokeColor:  diagram.connectors[i].style.strokeColor,
                fill:  diagram.connectors[i].style.strokeColor,
         }
        };
    }
    diagram.dataBind();
   
}
//Change target decorator shape
function targetDecoratorShapeChange(args)
{
    for (var i = 0; i < diagram.connectors.length; i++) {
        diagram.connectors[i].targetDecorator = {
            shape: args.itemData.shape,
            style: {
                strokeColor: diagram.connectors[i].style.strokeColor,
                fill:  diagram.connectors[i].style.strokeColor,
            }
        };
        diagram.dataBind();
    }   
}
// function to Change source  decorator Size
function sourceDecoratorSizeChange(args) {
    for (var i = 0; i < diagram.connectors.length; i++) {
        diagram.connectors[i].sourceDecorator.width = args.value;
        diagram.connectors[i].sourceDecorator.height = args.value;
    }
    diagram.dataBind();
}

// function to Change target  decorator Size
function targetDecoratorSizeChange(args) {
    for (var i = 0; i < diagram.connectors.length; i++) {
        diagram.connectors[i].targetDecorator.width = args.value;
        diagram.connectors[i].targetDecorator.height = args.value;
    }
    diagram.dataBind();
}

// function to Change segment  decorator Size
function segmentDecoratorSizeChange(args) {
    var connector=diagram.selectedItems.connectors[0];
    diagram.segmentThumbSize = args.value;
    diagram.clearSelection();
    diagram.select([diagram.nameTable[connector.id]]);
    diagram.dataBind();
}
//Change segment decorator shape
function segmentDecoratorShapeChange(args)
{
    for (var i = 0; i < diagram.connectors.length; i++) {
        diagram.segmentThumbShape = args.itemData.shape; 
    } 
    diagram.dataBind();  
}
    var bounds = document.getElementsByClassName('content-wrapper')[0].getBoundingClientRect();
    var marginLeft = (bounds.width - 560) / 2;
    //Initialize Diagram Nodes
    var nodes = [
        { id: 'node1', annotations: [{ content: 'Promotion' }] },
        { id: 'node2', annotations: [{ content: 'Lead' }] },
        { id: 'node3', annotations: [{ content: 'Account' }] },
        { id: 'node4', annotations: [{ content: 'Information' }] },
        { id: 'node5', annotations: [{ content: 'Opportunity' }] },
        { id: 'node6', offsetX: marginLeft + 540, offsetY: 340, excludeFromLayout: true }
    ];
    //Initialize Diagram connectors
    var connectors = [
        { id: 'connector1', sourceID: 'node1', targetID: 'node2' },
        {
            id: 'connector2', sourceID: 'node2', sourcePortID: 'port1',
            targetID: 'node3', targetPortID: 'portIn'
        },
        {
            id: 'connector3', sourceID: 'node2', sourcePortID: 'port2',
            targetID: 'node4', targetPortID: 'portIn'
        },
        {
            id: 'connector4', sourceID: 'node2', sourcePortID: 'port3',
            targetID: 'node5', targetPortID: 'portIn'
        },
        {
            id: 'connector5', sourceID: 'node6', sourcePortID: 'port4',
            targetID: 'node3', targetPortID: 'portOut'
        },
        {
            id: 'connector6', sourceID: 'node6', sourcePortID: 'port5',
            targetID: 'node4', targetPortID: 'portOut'
        },
        {
            id: 'connector7', sourceID: 'node6', sourcePortID: 'port6',
            targetID: 'node5', targetPortID: 'portOut'
        }
    ];
    //Initializes diagram control
   var diagram = new ej.diagrams.Diagram({
        width: '100%', height: 680, nodes: nodes,
        connectors: connectors,
        segmentThumbSize:10,
        //Configrues hierarchical tree layout
        layout: {
            type: 'HierarchicalTree', orientation: 'LeftToRight',
            verticalSpacing: 75, margin: { left: marginLeft, right: 0, top: 0, bottom: 0 }
        },
        snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
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
         //Function to Enable the segmentDcorator size when the Connector is selected
        selectionChange: function (){
            if (diagram.selectedItems.connectors.length > 0) {
                segmentDecoratorSize.enabled = true;
            }
            else {
                segmentDecoratorSize.enabled = false;
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
            obj.segments = [
                {
                    type: 'Bezier',
                }
            ];
            obj.constraints = ej.diagrams.ConnectorConstraints.Default | ej.diagrams.ConnectorConstraints.DragSegmentThumb;
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

    //Click event to change the connector type.
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
    //set appearance color
    var objectColor = new ej.inputs.ColorPicker({
        mode: 'Palette',
        showButtons:false,
        modeSwitcher: true,
        value: '#6F409F',
        change: function(args) {
            for(var k=0;k<diagram.connectors.length;k++)
            {
                diagram.connectors[k].style.strokeColor=args.currentValue.hex;
                diagram.connectors[k].targetDecorator.style.strokeColor= args.currentValue.hex;
                diagram.connectors[k].targetDecorator.style.fill= args.currentValue.hex;
                diagram.connectors[k].sourceDecorator.style.strokeColor= args.currentValue.hex;
                diagram.connectors[k].sourceDecorator.style.fill= args.currentValue.hex;
            }
            diagram.dataBind();
        }
    });
    objectColor.appendTo('#color');
    //Shape collection of the decorators.
    var decoratorShape = [
        { shape: 'None', text: 'None' },
        { shape: 'Square', text: 'Square' },
        { shape: 'Circle', text: 'Circle' },
        { shape: 'Diamond', text: 'Diamond' },
        { shape: 'Arrow', text: 'Arrow' },
        { shape: 'OpenArrow', text: 'Open Arrow' },
        { shape: 'Fletch', text: 'Fletch' },
        { shape: 'OpenFetch', text: 'Open Fetch' },
        { shape: 'IndentedArrow', text: 'Indented Arrow' },
        { shape: 'OutdentedArrow', text: 'Outdented Arrow' },
        { shape: 'DoubleArrow', text: 'Double Arrow' }
    ];

    //DropDownList is used to apply the source decorator shape of the connector.
   var sourceDecoratorShape = new ej.dropdowns.DropDownList({
        enabled: true, value: 'None',
        dataSource: decoratorShape,
        change: sourceDecoratorShapeChange
    });
    sourceDecoratorShape.appendTo('#sourceDecorator2');

    //DropDownList is used to apply the target decorator shape of the connector.
   var targetDecoratorShape = new ej.dropdowns.DropDownList({
        enabled: true, 
        value: 'Arrow',
        dataSource: decoratorShape,
        change: targetDecoratorShapeChange
    });
    targetDecoratorShape.appendTo('#targetDecorator');

    //DropDownList is used to apply the segment decorator shape of the connector.
    var segmentDecoratorShape = new ej.dropdowns.DropDownList({
        enabled: true, value: 'Circle',
        dataSource: decoratorShape, 
        change: segmentDecoratorShapeChange
    });
    segmentDecoratorShape.appendTo('#segmentDecorator');

    // Create a numeric text box for adjusting source decorator Size 
    var sourceDecoratorSize = new ej.inputs.NumericTextBox({
        min: 10,
        max: 20,
        step: 1,
        width: 130,
        value: 12,
        format: 'n0',
        change: sourceDecoratorSizeChange
    });
    sourceDecoratorSize.appendTo('#sourceDecoratorSize');


    // Create a numeric text box for adjusting Target decorator Size 
    var targetDecoratorSize = new ej.inputs.NumericTextBox({
        min: 10,
        max: 20,
        step: 1,
        width: 130,
        format: 'n0',
        value: 12,
        change:targetDecoratorSizeChange,
    });
    targetDecoratorSize.appendTo('#targetDecoratorSize');

    // Create a numeric text box for adjusting Segment decorator Size 
    var segmentDecoratorSize = new ej.inputs.NumericTextBox({
        enabled:false,
        min: 10,
        max: 20,
        step: 1,
        format: 'n0',
        width: 130,
        value: 12,   
        change:segmentDecoratorSizeChange, 
    });
    segmentDecoratorSize.appendTo('#segmentDecoratorSize');
    
};
