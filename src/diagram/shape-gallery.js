ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding, ej.diagrams.BpmnDiagrams);

// Function to create basic shapes
function createBasicShape(shape, content) {
    return {
        shape: { type: 'Basic', shape: shape },
        annotations: [{ content: content }]
    };
}

// Function to create flow shapes
function createFlowShape(shape, content) {
    return {
        shape: { type: 'Flow', shape: shape },
        annotations: [{ content: content }]
    };
}

// Function to create BPMN shapes
function createBpmnShape(shape, content, event) {
    return {
        shape: { type: 'Bpmn', shape: shape, event: event },
        annotations: [{ content: content }]
    };
}
// Basic shapes model
var basicShapeModel = [
    { shape: { type: 'Text', content: 'Basic Shapes' }, constraints: ej.diagrams.NodeConstraints.PointerEvents,
      style: { fontSize: 16, fill: 'None', fontFamily: 'sans-serif', bold: true, strokeWidth: 0 }
    },
    createBasicShape('Rectangle', 'Rectangle'),
    createBasicShape('Ellipse', 'Ellipse'),
    createBasicShape('Triangle', 'Triangle'),
    createBasicShape('Plus', 'Plus'),
    createBasicShape('Star', 'Star'),
    createBasicShape('Pentagon', 'Pentagon'),
    createBasicShape('Heptagon', 'Heptagon'),
    createBasicShape('Octagon', 'Octagon'),
    createBasicShape('Trapezoid', 'Trapezoid'),
    createBasicShape('Decagon', 'Decagon'),
    createBasicShape('RightTriangle', 'Right Triangle'),
    createBasicShape('Parallelogram', 'Parallelogram')
];

// Flow shapes model
var flowShapeModel = [
    { shape: { type: 'Text', content: 'Flow Shapes' }, constraints: ej.diagrams.NodeConstraints.PointerEvents,
      style: { fontSize: 16, fill: 'None', fontFamily: 'sans-serif', bold: true, strokeWidth: 0 }
    },
    createFlowShape('Terminator', 'Terminator'),
    createFlowShape('Process', 'Process'),
    createFlowShape('Decision', 'Decision'),
    createFlowShape('Document', 'Document'),
    createFlowShape('PreDefinedProcess', 'Predefined Process'),
    createFlowShape('PaperTap', 'Paper Tape'),
    createFlowShape('DirectData', 'Direct Data'),
    createFlowShape('SequentialData', 'Direct Data'),
    createFlowShape('Sort', 'Sort'),
    createFlowShape('MultiDocument', 'Multi-Document'),
    createFlowShape('Collate', 'Collate'),
    createFlowShape('SummingJunction', 'Summing Junction'),
    createFlowShape('Or', 'Or'),
    createFlowShape('InternalStorage', 'Internal Storage'),
    createFlowShape('Extract', 'Extract'),
    createFlowShape('ManualOperation', 'Manual Operation'),
    createFlowShape('Merge', 'Merge'),
    createFlowShape('OffPageReference', 'Off-Page Reference'),
    createFlowShape('SequentialAccessStorage', 'Sequential Access Storage'),
    createFlowShape('Data', 'Data'),
    createFlowShape('Card', 'Card')
];

// BPMN shapes model
var bpmnShapeModel = [
    {
        shape: { type: 'Text', content: 'BPMN Shapes' }, constraints: ej.diagrams.NodeConstraints.PointerEvents,
        style: { fontSize: 16, fill: 'none', fontFamily: 'sans-serif', bold: true, strokeWidth: 0 }
    },
    createBpmnShape('Event', 'Start Event', { event: 'Start', trigger: 'None' }),
    createBpmnShape('Event', 'Intermediate Event', { event: 'Intermediate', trigger: 'None' }),
    createBpmnShape('Event', 'End Event', { event: 'End', trigger: 'None' }),
    createBpmnShape('Gateway', 'Gateway', undefined),
    createBpmnShape('Activity', 'Task', { activity: 'Task' }),
    {
        shape: {
            type: 'Bpmn', shape: 'Activity', activity: {
                activity: 'SubProcess',
                subProcess: {
                    type: 'Transaction', transaction: {
                        success: { visible: false }, failure: { visible: false }, cancel: { visible: false }
                    }
                }
            },
        },
        annotations: [{ content: 'Transaction' }]
    },
    createBpmnShape('Message', 'Message', undefined),
    createBpmnShape('DataObject', 'Data Object', undefined),
    createBpmnShape('DataSource', 'Data Source', undefined),
    createBpmnShape('Group', 'Group', undefined),
    createBpmnShape('TextAnnotation', 'Text Annotation', undefined)
];

/**
 * Sample for Shape gallery.
 */
var shape = [
    { shapeName: 'Basic Shapes', shapeId: 'Basic' },
    { shapeName: 'Flow Shapes', shapeId: 'Flow' },
    { shapeName: 'BPMN Shapes', shapeId: 'Bpmn' },
];

//create and return the Nodes collection.
function getNodes() {
    var nodes1 =  basicShapeModel.concat(flowShapeModel).concat(bpmnShapeModel);
    var offsetx = 60;
    var offsety = 50;
    var count = 1;
    for (var i = 0; i < nodes1.length; i++) {
        var node = nodes1[i];
        node.width = 40;
        node.height = 40;
        node.offsetX = offsetx;
        node.offsetY = offsety;
        if (node.shape.type === 'Flow') {
            var shapeType = node.shape.shape;
            switch (shapeType) {
                case 'Process':
                case 'Terminator':
                    node.height = 20;
                    break;
                case 'Decision':
                    node.height = 35;
                    break;
                case 'Document':
                case 'DirectData':
                case 'MultiDocument':
                case 'PreDefinedProcess':
                    node.height = 30;
                    break;
            }
        }

        if (node.shape.type !== "Text") {
            var label=node.annotations[0];
            label.verticalAlignment = 'Top';
            label.offset = { y: 1 };
            label.margin = { top: 10 };

            offsetx += 90;
            if (count % 10 === 0) {
                offsety = offsety + 100;
                offsetx = 60;
            }
            count++;
        }
        if (node.shape.type === 'Text') {
            offsetx = 60;
            offsety += 50;
            count = 1;
            node.width = 150;
            node.height = 100;
            node.offsetX = 90;
            if (node.shape.content !== 'Basic Shapes') {
                node.offsetX = 90;
                node.offsetY = offsety + 50;
                offsety = offsety + 100;
            }
        }
    }
    return nodes1;
}
this.default = function () {
    var objects = getNodes();
    //Initialize diagram control
    var diagram = new ej.diagrams.Diagram({
        width: '100%', height: '800px', snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
        nodes: objects,
        //Defines the default node properties
        getNodeDefaults: function (obj, diagram) {
            return obj;
        },
        created: function () { diagram.fitToPage({ mode: 'Height' }); }
    });
    diagram.appendTo('#diagram');
    
};
