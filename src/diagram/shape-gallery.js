ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding, ej.diagrams.BpmnDiagrams);
var basicShapeModel = [
    {
        shape: { type: 'Text', content: 'Basic Shapes' }, constraints: ej.diagrams.NodeConstraints.PointerEvents,
        style: { fontSize: 16, fill: 'None', fontFamily: 'sans-serif', bold: true, strokeWidth: 0 },
    },
    {
        shape: { type: 'Basic', shape: 'Rectangle' }, annotations: [
            { content: 'Rectangle' }
        ]
    },
    {
        shape: { type: 'Basic', shape: 'Ellipse' }, annotations: [
            { content: 'Ellipse' }
        ]
    },
    {
        shape: { type: 'Basic', shape: 'Triangle' }, annotations: [
            { content: 'Triangle' }
        ]
    },
    {
        shape: { type: 'Basic', shape: 'Plus' }, annotations: [
            { content: 'Plus' }
        ]
    },
    {
        shape: { type: 'Basic', shape: 'Star' }, annotations: [
            { content: 'Star' }
        ]
    },
    {
        shape: { type: 'Basic', shape: 'Pentagon' }, annotations: [
            { content: 'Pentagon' }
        ]
    },
    {
        shape: { type: 'Basic', shape: 'Heptagon' }, annotations: [
            { content: 'Heptagon' }
        ]
    },
    {
        shape: { type: 'Basic', shape: 'Octagon' }, annotations: [
            { content: 'Octagon' }
        ]
    },
    {
        shape: { type: 'Basic', shape: 'Trapezoid' }, annotations: [
            { content: 'Trapezoid' }
        ]
    },
    {
        shape: { type: 'Basic', shape: 'Decagon' }, annotations: [
            { content: 'Decagon' }
        ]
    },
    {
        shape: { type: 'Basic', shape: 'RightTriangle' }, annotations: [
            { content: 'Right Triangle' }
        ]
    },
    {
        shape: { type: 'Basic', shape: 'Parallelogram' }, annotations: [
            { content: 'Parallelogram' }
        ]
    },
];
var flowShapeModel = [
    {
        shape: { type: 'Text', content: 'Flow Shapes' }, constraints: ej.diagrams.NodeConstraints.PointerEvents,
        style: { fontSize: 16, fill: 'None', fontFamily: 'sans-serif', bold: true, strokeWidth: 0 },
    },
    {
        shape: { type: 'Flow', shape: 'Terminator' }, annotations: [
            { content: 'Terminator' }
        ]
    },
    {
        shape: { type: 'Flow', shape: 'Process' }, annotations: [
            { content: 'Process' }
        ]
    },
    {
        shape: { type: 'Flow', shape: 'Decision' }, annotations: [
            { content: 'Decision' }
        ]
    },
    {
        shape: { type: 'Flow', shape: 'Document' }, annotations: [
            { content: 'Document' }
        ]
    },
    {
        shape: { type: 'Flow', shape: 'PreDefinedProcess' }, annotations: [
            { content: 'Predefined Process' }
        ]
    },
    {
        shape: { type: 'Flow', shape: 'PaperTap' }, annotations: [
            { content: 'Paper Tape' }
        ]
    },
    {
        shape: { type: 'Flow', shape: 'DirectData' }, annotations: [
            { content: 'Direct Data' }
        ]
    },
    {
        shape: { type: 'Flow', shape: 'SequentialData' }, annotations: [
            { content: 'Direct Data' }
        ]
    },
    {
        shape: { type: 'Flow', shape: 'Sort' }, annotations: [
            { content: 'Sort' }
        ]
    },
    {
        shape: { type: 'Flow', shape: 'MultiDocument' }, annotations: [
            { content: 'Multi-Document' }
        ]
    },
    {
        shape: { type: 'Flow', shape: 'Collate' }, annotations: [
            { content: 'Collate' }
        ]
    },
    {
        shape: { type: 'Flow', shape: 'SummingJunction' }, annotations: [
            { content: 'Summing Junction' }
        ]
    },
    {
        shape: { type: 'Flow', shape: 'Or' }, annotations: [
            { content: 'Or' }
        ]
    },
    {
        shape: { type: 'Flow', shape: 'InternalStorage' }, annotations: [
            { content: 'Internal Storage' }
        ]
    },
    {
        shape: { type: 'Flow', shape: 'Extract' }, annotations: [
            { content: 'Extract' }
        ]
    },
    {
        shape: { type: 'Flow', shape: 'ManualOperation' }, annotations: [
            { content: 'Manual Operation' }
        ]
    },
    {
        shape: { type: 'Flow', shape: 'Merge' }, annotations: [
            { content: 'Merge' }
        ]
    },
    {
        shape: { type: 'Flow', shape: 'OffPageReference' }, annotations: [
            { content: 'Off-Page Reference' }
        ]
    },
    {
        shape: { type: 'Flow', shape: 'SequentialAccessStorage' }, annotations: [
            { content: 'Sequential Access Storage' }
        ]
    },
    {
        shape: { type: 'Flow', shape: 'Data' }, annotations: [
            { content: 'Data' }
        ]
    },
    {
        shape: { type: 'Flow', shape: 'Card' }, annotations: [
            { content: 'Card' }
        ]
    },
];

var bpmnShapeModel = [
    {
        shape: { type: 'Text', content: 'BPMN Shapes' }, constraints: ej.diagrams.NodeConstraints.PointerEvents,
        style: { fontSize: 16, fill: 'none', fontFamily: 'sans-serif', bold: true, strokeWidth: 0 },
    },
    {
        shape: { type: 'Bpmn', shape: 'Event', event: { event: 'Start', trigger: 'None' } },
        annotations: [
            { content: 'Start Event' }
        ]
    },
    {
        shape: { type: 'Bpmn', shape: 'Event', event: { event: 'Intermediate', trigger: 'None' } },
        annotations: [
            { content: 'Intermediate Event' }
        ]
    },
    {
        shape: { type: 'Bpmn', shape: 'Event', event: { event: 'End', trigger: 'None' } },
        annotations: [
            { content: 'End Event' }
        ]
    },
    {
        shape: { type: 'Bpmn', shape: 'Gateway' },
        annotations: [
            { content: 'Gateway' }
        ]
    },
    {
        shape: { type: 'Bpmn', shape: 'Activity', activity: { activity: 'Task' } },
        annotations: [
            { content: 'Task' }
        ]
    },
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
        annotations: [
            { content: 'Transaction' }
        ]
    },
    {
        shape: { type: 'Bpmn', shape: 'Message' }, annotations: [{ content: 'Message' }]
    },
    {
        shape: { type: 'Bpmn', shape: 'DataObject' }, annotations: [{ content: 'Data Object' }]
    },
    {
        shape: { type: 'Bpmn', shape: 'DataSource' }, annotations: [{ content: 'Data Source' }]
    },
    {
        shape: { type: 'Bpmn', shape: 'Group' }, annotations: [{ content: 'Group' }]
    },
    {
        shape: { type: 'Bpmn', shape: 'TextAnnotation' }, annotations: [{ content: 'Text Annotation' }]
    }
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
    var nodes1 = basicShapeModel;
    nodes1 = nodes1.concat(flowShapeModel).concat(bpmnShapeModel);
    var offsetx = 60;
    var offsety = 50;
    var count = 1;
    for (var i = 0; i < nodes1.length; i++) {
        var node = nodes1[i];
        node.width = 40;
        node.height = 40;
        if (node.shape.type === 'Flow') {
            var shapeType = node.shape.shape;
            if (shapeType === 'Process' || shapeType === 'Terminator') {
                node.height = 20;
            } else if (shapeType === 'Decision') {
                node.height = 35;
            } else if (shapeType === 'Document' || shapeType === 'DirectData' ||
                shapeType === 'MultiDocument' || shapeType === 'PreDefinedProcess') {
                node.height = 30;
            }
        }
        node.offsetX = offsetx;
        node.offsetY = offsety;
        if (node.shape.type !== "Text") {
            node.annotations[0].verticalAlignment = 'Top';
            node.annotations[0].offset = { y: 1 };
            node.annotations[0].margin = { top: 10 };

            offsetx = offsetx + 90;
            if (count % 10 === 0) {
                offsety = offsety + 100;
                offsetx = 60;
            }
            count++;
        }
        if (node.shape.type === 'Text') {
            offsetx = 60;
            offsety = offsety + 50;
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
        width: '100%', height: '499px', snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
        nodes: objects,
        //Defines the default node and connector properties
        getNodeDefaults: function (obj, diagram) {
            return obj;
        },
    });
    diagram.appendTo('#diagram');
    diagram.fitToPage({ mode: 'Width' });
};
