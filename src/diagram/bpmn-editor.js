/**
 * Sample for BPMN Editor.
 */

// Initialization function for the diagram and symbol palette
this.default = function () {
    // Function to initialize a node
    function createNode(id, width, height, offsetX, offsetY, shape, annotations, margin, style, constraints) {
        return {
            id: id,
            width: width,
            height: height,
            offsetX: offsetX,
            offsetY: offsetY,
            shape: shape,
            annotations: annotations,
            margin: margin,
            style: style,
            constraints: constraints
        };
    }

    //Initializes the nodes for the diagram.
    var nodes = [
        createNode('start', 40, 40, 35, 180, { type: 'Bpmn', shape: 'Event', event: { event: 'Start' } }),

        createNode('subProcess', 520, 250, 355, 180, {
            shape: 'Activity', type: 'Bpmn', activity: {
                activity: 'SubProcess',
                subProcess: {
                    type: 'Transaction', collapsed: false, processes: ['processesStart', 'service', 'compensation',
                        'error', 'processesTask', 'processesEnd', 'user', 'subProcessesEnd']
                }
            }
        }, [], {}, {},
            ej.diagrams.NodeConstraints.Default | ej.diagrams.NodeConstraints.AllowDrop
        ),

        createNode('hazardEnd', 40, 40, 305, 370, { type: 'Bpmn', shape: 'Event', event: { event: 'End' } }, [
            { id: 'label2', content: 'Hazard', verticalAlignment: 'Top', style: { fill: 'white', color: 'black' }, margin: { top: 20 } }
        ]),

        createNode('cancelledEnd', 40, 40, 545, 370, { type: 'Bpmn', shape: 'Event', event: { event: 'End' } }, [
            { id: 'cancelledEndLabel2', content: 'Cancelled', verticalAlignment: 'Top', style: { fill: 'white', color: 'black' }, margin: { top: 20 } }
        ]),

        createNode('end', 40, 40, 665, 180, { type: 'Bpmn', shape: 'Event', event: { event: 'End' } }),

        createNode('processesStart', 30, 30, 0, 0, { type: 'Bpmn', shape: 'Event', event: { event: 'Start' } }, [], { left: 40, top: 80 }),

        createNode('service', 95, 70, 0, 0, {
            type: 'Bpmn', shape: 'Activity', activity: { activity: 'Task', task: { type: 'Service', loop: 'ParallelMultiInstance' } }
        },
            [{ id: 'serviceLabel2', content: 'Book hotel', style: { color: 'white' }, offset: { x: 0.5, y: 0.5 } }],
            { left: 110, top: 20 }, { fill: '#6FAAB0' }
        ),

        createNode('compensation', 30, 30, 0, 0, { type: 'Bpmn', shape: 'Event', event: { event: 'Intermediate', trigger: 'Compensation' } }, [], { left: 170, top: 100 }),

        createNode('processesTask', 95, 70, 0, 0, {
            type: 'Bpmn', shape: 'Activity', activity: { activity: 'Task', task: { type: 'Service' } }
        },
            [{ id: 'serviceLabel2', content: 'Charge credit card', style: { color: 'white' }, offset: { x: 0.5, y: 0.6 } }],
            { left: 290, top: 20 }, { fill: '#F6B53F' }
        ),

        createNode('error', 30, 30, 0, 0, { type: 'Bpmn', shape: 'Event', event: { event: 'Intermediate', trigger: 'Error' } }, [], { left: 350, top: 100 }),

        createNode('processesEnd', 30, 30, 0, 0, { type: 'Bpmn', shape: 'Event', event: { event: 'End' } }, [], { left: 440, top: 80 }),

        createNode('user', 90, 80, 0, 0, {
            type: 'Bpmn', shape: 'Activity', activity: { activity: 'Task', task: { type: 'User', compensation: true } }
        },
            [{ id: 'serviceLabel2', content: 'Cancel hotel reservation', style: { color: 'white' }, offset: { x: 0.5, y: 0.6 } }],
            { left: 30, top: 160 }, { fill: '#E94649' }
        ),

        createNode('subProcessesEnd', 30, 30, 0, 0, { type: 'Bpmn', shape: 'Event', event: { event: 'End' } }, [], { left: 440, top: 210 }),
    ];


    // Function to create a connector
    function createConnector(id, sourceID, targetID, sourcePortID, targetPortID, type, segments, annotations, shape, style) {
        return {
            id: id,
            sourceID: sourceID,
            targetID: targetID,
            sourcePortID: sourcePortID,
            targetPortID: targetPortID,
            type: type,
            segments: segments,
            annotations: annotations,
            shape: shape,
            style: style
        };
    }

    //Initializes the connectors for the diagram.
    var connectors = [
        createConnector('connector1', 'start', 'subProcess'),
        createConnector('connector2', 'subProcess', 'end', 'success'),
        createConnector('connector3', 'subProcess', 'hazardEnd', 'failure', "", 'Orthogonal',
            [{ type: 'Orthogonal', length: 50, direction: 'Bottom' }],
            [{ id: 'connector3Label2', content: 'Booking system failure', offset: 0.50, style: { fill: 'white' } }]
        ),
        createConnector('connector4', 'subProcess', 'cancelledEnd', 'cancel', "", 'Orthogonal',
            [{ type: 'Orthogonal', length: 50, direction: 'Bottom' }]
        ),
        createConnector('connector5', 'processesStart', 'service', "", "", 'Orthogonal'),
        createConnector('connector6', 'service', 'processesTask'),
        createConnector('connector7', 'processesTask', 'processesEnd', "", "", 'Orthogonal'),
        createConnector('connector8', 'compensation', 'user', "", "", 'Orthogonal',
            [{ type: 'Orthogonal', length: 30, direction: 'Bottom' }, { type: 'Orthogonal', length: 80, direction: 'Left' }],
            [], { type: 'Bpmn', flow: 'Association', association: 'Directional' }, { strokeDashArray: '2,2' }
        ),
        createConnector('connector9', 'error', 'subProcessesEnd', null, null, 'Orthogonal',
            [{ type: 'Orthogonal', length: 50, direction: 'Bottom' }],
            [{
                id: 'connector9Label2', content: 'Cannot charge card', offset: 0.5,
                style: { fill: 'white', color: 'black' }
            }]
        )
    ];


    //Initializes the bpmn shapes for the symbol pallete.
    var bpmnShapes = [
        {
            id: 'Start', width: 35, height: 35, shape: {
                type: 'Bpmn', shape: 'Event',
                event: { event: 'Start' }
            },
        },
        {
            id: 'NonInterruptingIntermediate', width: 35, height: 35, shape: {
                type: 'Bpmn', shape: 'Event',
                event: { event: 'NonInterruptingIntermediate' }
            },
        },
        {
            id: 'End', width: 35, height: 35, shape: {
                type: 'Bpmn', shape: 'Event',
                event: { event: 'End' }
            },
        },
        {
            id: 'Task', width: 35, height: 35, shape: {
                type: 'Bpmn', shape: 'Activity', activity: {
                    activity: 'Task',
                },
            },
        },
        {
            id: 'Transaction', width: 35, height: 35, shape: {
                type: 'Bpmn', shape: 'Activity',
                activity: {
                    activity: 'SubProcess', subProcess: {
                        type: 'Transaction', transaction: {
                            cancel: { visible: false }, failure: { visible: false }, success: { visible: false }
                        }
                    }
                }
            },
        },
        {
            id: 'Task_Service', width: 35, height: 35, shape: {
                type: 'Bpmn', shape: 'Activity', activity: {
                    activity: 'Task', task: { type: 'Service' }
                },
            },
        },
        {
            id: 'Gateway', width: 35, height: 35, shape: { type: 'Bpmn', shape: 'Gateway', gateway: { type: 'Exclusive' } },
        },
        {
            id: 'DataObject', width: 35, height: 35, shape: { type: 'Bpmn', shape: 'DataObject', dataObject: { collection: false, type: 'None' } },
        },
        {
            id: 'subProcess', width: 520, height: 250,
            constraints: ej.diagrams.NodeConstraints.Default | ej.diagrams.NodeConstraints.AllowDrop,
            shape: {
                shape: 'Activity', type: 'Bpmn',
                activity: {
                    activity: 'SubProcess', subProcess: {
                        type: 'Transaction', collapsed: false,
                        processes: [], transaction: {
                            cancel: { visible: false }, failure: { visible: false }, success: { visible: false }
                        }
                    }
                }
            },
        }
    ];

    //Initializes the context menu for shapes.
    var contextMenu = {
        show: true, items: [
            {
                text: 'Ad-Hoc', id: 'Adhoc',
                items: [{ text: 'None', iconCss: 'e-adhocs e-bpmn-event e-bpmn-icons e-None', id: 'AdhocNone' },
                { iconCss: 'e-adhocs e-bpmn-icons e-adhoc', text: 'Ad-Hoc', id: 'AdhocAdhoc' }]
            }, {
                text: 'Loop', id: 'Loop',
                items: [{ text: 'None', iconCss: 'e-loop e-bpmn-icons e-None', id: 'LoopNone' },
                { text: 'Standard', iconCss: 'e-loop e-bpmn-icons e-Loop', id: 'Standard' },
                { text: 'Parallel Multi-Instance', iconCss: 'e-loop e-bpmn-icons e-ParallelMI', id: 'ParallelMultiInstance' },
                { text: 'Sequence Multi-Instance', iconCss: 'e-loop e-bpmn-icons e-SequentialMI', id: 'SequenceMultiInstance' }]
            }, {
                text: 'Compensation', id: 'taskCompensation',
                items: [{ text: 'None', iconCss: 'e-compensation e-bpmn-icons e-None', id: 'CompensationNone' },
                { iconCss: 'e-compensation e-bpmn-icons e-Compensation', text: 'Compensation', id: 'CompensationCompensation' }]
            }, {
                text: 'Activity-Type', id: 'Activity-Type',
                items: [{ text: 'Collapsed sub-process', iconCss: 'e-bpmn-icons e-SubProcess', id: 'CollapsedSubProcess' },
                { iconCss: 'e-bpmn-icons e-Task', text: 'Expanded sub-process', id: 'ExpandedSubProcess' }]
            }, {
                text: 'Boundry', id: 'Boundry',
                items: [{ text: 'Default', iconCss: 'e-boundry e-bpmn-icons e-Default', id: 'Default' },
                { text: 'Call', iconCss: 'e-boundry e-bpmn-icons e-Call', id: 'BoundryCall' },
                { text: 'Event', iconCss: 'e-boundry e-bpmn-icons e-Event', id: 'BoundryEvent' }]
            }, {
                text: 'Data Object', id: 'DataObject',
                items: [{ text: 'None', iconCss: 'e-data e-bpmn-icons e-None', id: 'DataObjectNone' },
                { text: 'Input', iconCss: 'e-data e-bpmn-icons e-DataInput', id: 'Input' },
                { text: 'Output', iconCss: 'e-data e-bpmn-icons e-DataOutput', id: 'Output' }]
            }, {
                text: 'Collection', id: 'collection',
                items: [{ text: 'None', iconCss: 'e-collection e-bpmn-icons e-None', id: 'collectionNone' },
                { text: 'Collection', iconCss: 'e-collection e-bpmn-icons e-ParallelMI', id: 'Collectioncollection' }]
            }, {
                text: 'Call', id: 'DeftCall',
                items: [{ text: 'None', iconCss: 'e-call e-bpmn-icons e-None', id: 'CallNone' },
                { text: 'Call', iconCss: 'e-call e-bpmn-icons e-CallActivity', id: 'CallCall' }]
            }, {
                text: 'Trigger Result', id: 'TriggerResult',
                items: [{ text: 'None', id: 'TriggerNone', iconCss: 'e-trigger e-bpmn-icons e-None' },
                { text: 'Message', id: 'Message', iconCss: 'e-trigger e-bpmn-icons e-InMessage' },
                { text: 'Multiple', id: 'Multiple', iconCss: 'e-trigger e-bpmn-icons e-InMultiple' },
                { text: 'Parallel', id: 'Parallel', iconCss: 'e-trigger e-bpmn-icons e-InParallelMultiple' },
                { text: 'Signal', id: 'Signal', iconCss: 'e-trigger e-bpmn-icons e-InSignal' },
                { text: 'Timer', id: 'Timer', iconCss: 'e-trigger e-bpmn-icons e-InTimer' },
                { text: 'Cancel', id: 'Cancel', iconCss: 'e-trigger e-bpmn-icons e-CancelEnd' },
                { text: 'Escalation', id: 'Escalation', iconCss: 'e-trigger e-bpmn-icons e-InEscalation' },
                { text: 'Error', id: 'Error', iconCss: 'e-trigger e-bpmn-icons e-InError' },
                { text: 'Compensation', id: 'triggerCompensation', iconCss: 'e-trigger e-bpmn-icons e-InCompensation' },
                { text: 'Terminate', id: 'Terminate', iconCss: 'e-trigger e-bpmn-icons e-TerminateEnd' },
                { text: 'Conditional', id: 'Conditional', iconCss: 'e-trigger e-bpmn-icons e-InConditional' },
                { text: 'Link', id: 'Link', iconCss: 'e-trigger e-bpmn-icons e-ThrowLinkin' }
                ]
            },
            {
                text: 'Event Type', id: 'EventType',
                items: [{ text: 'Start', id: 'Start', iconCss: 'e-event e-bpmn-icons e-NoneStart', },
                { text: 'Intermediate', id: 'Intermediate', iconCss: 'e-event e-bpmn-icons e-InterruptingNone' },
                { text: 'NonInterruptingStart', id: 'NonInterruptingStart', iconCss: 'e-event e-bpmn-icons e-Noninterruptingstart' },
                { text: 'ThrowingIntermediate', id: 'ThrowingIntermediate', iconCss: 'e-event e-bpmn-icons e-ThrowingIntermediate' },
                {
                    text: 'NonInterruptingIntermediate', id: 'NonInterruptingIntermediate',
                    iconCss: 'e-event e-bpmn-icons e-NoninterruptingIntermediate'
                },
                { text: 'End', id: 'End', iconCss: 'e-event e-bpmn-icons e-NoneEnd' }]
            }, {
                text: 'Task Type', id: 'TaskType',
                items: [
                    { text: 'None', id: 'TaskNone', iconCss: 'e-task e-bpmn-icons e-None' },
                    { text: 'Service', id: 'Service', iconCss: 'e-task e-bpmn-icons e-ServiceTask' },
                    { text: 'BusinessRule', id: 'BusinessRule', iconCss: 'e-task e-bpmn-icons e-BusinessRule' },
                    { text: 'InstantiatingReceive', id: 'InstantiatingReceive', iconCss: 'e-task e-bpmn-icons e-InstantiatingReceive' },
                    { text: 'Manual', id: 'Manual', iconCss: 'e-task e-bpmn-icons e-ManualCall' },
                    { text: 'Receive', id: 'Receive', iconCss: 'e-task e-bpmn-icons e-InMessage' },
                    { text: 'Script', id: 'Script', iconCss: 'e-task e-bpmn-icons e-ScriptCall' },
                    { text: 'Send', id: 'Send', iconCss: 'e-task e-bpmn-icons e-OutMessage' },
                    { text: 'User', id: 'User', iconCss: 'e-task e-bpmn-icons e-UserCall' },
                ]
            }, {
                text: 'GateWay', id: 'GateWay',
                iconCss: 'e-bpmn-icons e-Gateway', items: [
                    { text: 'None', id: 'GatewayNone', iconCss: 'e-gate e-bpmn-icons e-None' },
                    { text: 'Exclusive', iconCss: 'e-gate e-bpmn-icons e-ExclusiveGatewayWithMarker', id: 'Exclusive' },
                    { text: 'Inclusive', iconCss: 'e-gate e-bpmn-icons e-InclusiveGateway', id: 'Inclusive' },
                    { text: 'Parallel', iconCss: 'e-gate e-bpmn-icons e-ParallelGateway', id: 'GatewayParallel' },
                    { text: 'Complex', iconCss: 'e-gate e-bpmn-icons e-ComplexGateway', id: 'Complex' },
                    { text: 'EventBased', iconCss: 'e-gate e-bpmn-icons e-EventBasedGateway', id: 'EventBased' },
                    { text: 'ExclusiveEventBased', iconCss: 'e-gate e-bpmn-icons e-ExclusiveEventBased', id: 'ExclusiveEventBased' },
                    { text: 'ParallelEventBased', iconCss: 'e-gate e-bpmn-icons e-ParallelEventBasedGatewaytostart', id: 'ParallelEventBased' }
                ]
            },
        ],
        showCustomMenuOnly: true,
    };

    //Initializes the Connector shapes for the symbol pallete.
    function getConnectors() {
        var connectorSymbols = [
            {
                id: 'Link1', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 40, y: 40 },
                targetDecorator: { shape: 'Arrow', style: { strokeColor: '#757575', fill: '#757575' } }, style: { strokeWidth: 2, strokeColor: '#757575' }
            },
            {
                id: 'Link2', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 40, y: 40 },
                targetDecorator: { shape: 'Arrow', style: { strokeColor: '#757575', fill: '#757575' } }, style: { strokeWidth: 2, strokeDashArray: '4 4', strokeColor: '#757575' }
            },
            {
                id: 'Link3', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 40, y: 40 },
                targetDecorator: { shape: 'Arrow', style: { strokeColor: '#757575', fill: '#757575' } }, style: { strokeWidth: 2, strokeColor: '#757575' }
            },
            {
                id: 'link4', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 40, y: 40 }, type: 'Orthogonal',
                targetDecorator: { style: { strokeColor: '#757575', fill: '#757575' } },
                shape: {
                    type: 'Bpmn',
                    flow: 'Association',
                    association: 'Directional'
                }, style: {
                    strokeDashArray: '2,2', strokeColor: '#757575'
                },
            },
        ];
        return connectorSymbols;
    }

    //function drag enter from palette to diagram
    function dragEnter(args) {
        var node = args.element;
        if (node instanceof ej.diagrams.Node) {
            if (!node.shape.activity.subProcess.collapsed) {
                // Make certain transaction-related elements visible
                node.shape.activity.subProcess.transaction.cancel.visible = true;
                node.shape.activity.subProcess.transaction.failure.visible = true;
                node.shape.activity.subProcess.transaction.success.visible = true;
            }
            else {
                var nodeWidth = node.width;
                var nodeHeight = node.height;
                var ratio = 100 / node.width;
                node.width = 100;
                node.height *= ratio;
                node.offsetX += (node.width - nodeWidth) / 2;
                node.offsetY += (node.height - nodeHeight) / 2;
            }
        }
    }

    //function context menu click
    function contextMenuClick(args) {
        // Check if any node is selected in the diagram
        if (diagram.selectedItems.nodes.length > 0) {
            var bpmnShape = diagram.selectedItems.nodes[0].shape;
            if (args.item.iconCss.indexOf('e-adhocs') > -1) {
                bpmnShape.activity.subProcess.adhoc = args.item.id === 'AdhocNone' ? false : true;
            }
            if (args.item.iconCss.indexOf("e-event") > -1) {
                bpmnShape.event.event = args.item.id;
            }
            if (args.item.iconCss.indexOf("e-trigger") > -1) {
                bpmnShape.event.trigger = args.item.text;
            }
            if (args.item.iconCss.indexOf("e-loop") > -1) {
                var loop = (args.item.id === 'LoopNone') ? 'None' : args.item.id;
                if (bpmnShape.activity.activity === 'Task') {
                    bpmnShape.activity.task.loop = loop;
                }
                if (bpmnShape.activity.activity === 'SubProcess') {
                    bpmnShape.activity.subProcess.loop = loop;
                }
            }
            if (args.item.iconCss.indexOf("e-compensation") > -1) {
                var compensation = (args.item.id === 'CompensationNone') ? false : true;
                if (bpmnShape.activity.activity === 'Task') {
                    bpmnShape.activity.task.compensation = compensation;
                }
                if (bpmnShape.activity.activity === 'SubProcess') {
                    bpmnShape.activity.subProcess.compensation = compensation;
                }
            }
            if (args.item.iconCss.indexOf('e-call') > -1) {
                var compensations = (args.item.id === 'CallNone') ? false : true;
                if (bpmnShape.activity.activity === 'Task') {
                    bpmnShape.activity.task.call = compensations;
                }
            }
            if (args.item.id === 'CollapsedSubProcess' || args.item.id === 'ExpandedSubProcess') {
                if (args.item.id === 'ExpandedSubProcess') {
                    bpmnShape.activity.activity = 'SubProcess';
                    bpmnShape.activity.subProcess.collapsed = false;
                }
                else {
                    bpmnShape.activity.activity = 'SubProcess';
                    bpmnShape.activity.subProcess.collapsed = true;
                }
            }
            if (args.item.iconCss.indexOf('e-boundry') > -1) {
                call = args.item.id;
                if (args.item.id !== 'Default') {
                    call = (args.item.id === 'BoundryEvent') ? 'Event' : 'Call';
                }
                bpmnShape.activity.subProcess.boundary = call;
            }
            if (args.item.iconCss.indexOf('e-data') > -1) {
                var data = args.item.id === 'DataObjectNone' ? 'None' : args.item.id;
                bpmnShape.dataObject.type = data;
            }
            if (args.item.iconCss.indexOf('e-collection') > -1) {
                var collection = (args.item.id === 'Collectioncollection') ? true : false;
                bpmnShape.dataObject.collection = collection;
            }
            if (args.item.iconCss.indexOf("e-task") > -1) {
                var task = task === 'TaskNone' ? 'None' : args.item.id;
                if (bpmnShape.activity.activity === 'Task') {
                    bpmnShape.activity.task.type = task;
                }
            }
            if (args.item.iconCss.indexOf("e-gate") > -1) {
                var gate = args.item.id.replace('Gateway', '');
                if (bpmnShape.shape === 'Gateway') {
                    bpmnShape.gateway.type = gate;
                }
            }
            diagram.dataBind();
        }
    }

    //function context menu Open
    function contextMenuOpen(args) {
        var hiddenId = [];
        if (args.element.className !== 'e-menu-parent e-ul ') {
            hiddenId = ['Adhoc', 'Loop', 'taskCompensation', 'Activity-Type', 'Boundry', 'DataObject',
                'collection', 'DeftCall', 'TriggerResult', 'EventType', 'TaskType', 'GateWay'];
        }
        if (diagram.selectedItems.nodes.length) {
            for (var i = 0; i < args.items.length; i++) {
                var item = args.items[i];
                var bpmnShape = diagram.selectedItems.nodes[0].shape;
                if (bpmnShape.shape !== 'DataObject' && bpmnShape.shape !== 'Gateway') {
                    if (item.text === 'Ad-Hoc') {
                        if (bpmnShape.activity.activity === 'SubProcess') {
                            hiddenId.splice(hiddenId.indexOf(item.id), 1);
                        }
                    }
                    if (item.text === 'Loop' || item.text === 'Compensation' || item.text === 'Activity-Type') {
                        if (bpmnShape.shape === 'Activity') {
                            hiddenId.splice(hiddenId.indexOf(item.id), 1);
                        }
                    }
                    if (item.text === 'Boundry') {
                        if ((bpmnShape.activity.activity === 'SubProcess')) {
                            hiddenId.splice(hiddenId.indexOf(item.id), 1);
                        }
                    }
                }
                if (item.text === 'Data Object') {
                    if ((bpmnShape.shape === 'DataObject')) {
                        hiddenId.splice(hiddenId.indexOf(item.id), 1);
                    }
                }
                if (item.text === 'Collection') {
                    if ((bpmnShape.shape === 'DataObject')) {
                        hiddenId.splice(hiddenId.indexOf(item.id), 1);
                    }
                }
                if (item.text === 'Call') {
                    if ((bpmnShape.shape === 'Activity') &&
                        (bpmnShape.activity.activity === 'Task')) {
                        hiddenId.splice(hiddenId.indexOf(item.id), 1);
                    }
                }
                if (item.text === 'Trigger Result') {
                    if ((bpmnShape.shape === 'Event')) {
                        hiddenId.splice(hiddenId.indexOf(item.id), 1);
                    }
                }
                if (item.text === 'Event Type') {
                    if ((bpmnShape.shape === 'Event')) {
                        hiddenId.splice(hiddenId.indexOf(item.id), 1);
                    }
                }
                if (item.text === 'Task Type') {
                    if ((bpmnShape.shape === 'Activity') &&
                        (bpmnShape.activity.activity === 'Task')) {
                        hiddenId.splice(hiddenId.indexOf(item.id), 1);
                    }
                }
                if (item.text === 'GateWay') {
                    if ((bpmnShape.shape === 'Gateway')) {
                        hiddenId.splice(hiddenId.indexOf(item.id), 1);
                    }
                }
                if (diagram.selectedItems.nodes.length > 0 && args.parentItem && args.parentItem.id === 'TriggerResult' &&
                    bpmnShape.shape === 'Event') {
                    var shape = bpmnShape;
                    if (item.text !== 'None' && (item.text === shape.event.event ||
                        item.text === shape.event.trigger)) {
                        hiddenId.push(item.id);
                    }
                    if (shape.event.event === 'Start') {
                        if (item.text === 'Cancel' || item.text === 'Terminate' || item.text === 'Link') {
                            hiddenId.push(item.id);
                        }
                    }
                    if (shape.event.event === 'NonInterruptingStart' || item.text === 'Link') {
                        if (item.text === 'Cancel' || item.text === 'Terminate' || item.text === 'Compensation' ||
                            item.text === 'Error' || item.text === 'None') {
                            hiddenId.push(item.id);
                        }
                    }
                    if (shape.event.event === 'Intermediate') {
                        if (item.text === 'Terminate') {
                            hiddenId.push(item.id);
                        }
                    }
                    if (shape.event.event === 'NonInterruptingIntermediate') {
                        if (item.text === 'Cancel' || item.text === 'Terminate' || item.text === 'Compensation' ||
                            item.text === 'Error' || item.text === 'None' || item.text === 'Link') {
                            hiddenId.push(item.id);
                        }
                    }
                    if (shape.event.event === 'ThrowingIntermediate') {
                        if (item.text === 'Cancel' || item.text === 'Terminate' || item.text === 'Timer' || item.text === 'Error' ||
                            item.text === 'None' || item.text === 'Pareller' || item.text === 'Conditional') {
                            hiddenId.push(item.id);
                        }
                    }
                    if (shape.event.event === 'End') {
                        if (item.text === 'Parallel' || item.text === 'Timer' || item.text === 'Conditional' || item.text === 'Link') {
                            hiddenId.push(item.id);
                        }
                    }
                }
                if (diagram.selectedItems.nodes.length > 0 && args.parentItem && args.parentItem.id === 'EventType' &&
                    bpmnShape.shape === 'Event') {
                    if ((item.text === bpmnShape.event.event)) {
                        hiddenId.push(item.id);
                    }
                }
            }
        }
        args.hiddenItems = hiddenId;
    }

    // Function to handle click event on the palette icon in a mobile view
    function paletteIconClick() {
        var isMobile = window.matchMedia('(max-width:550px)').matches;
        if (isMobile) {
            var element = document.getElementById('palette-icon');
            if (element) {
                element.addEventListener('click', showPaletteToolbar, false);
            }
        }
    }
    // Function to toggle the visibility of the palette toolbar in a mobile view
    function showPaletteToolbar() {
        var element = document.getElementById('palette-space');
        isMobile = window.matchMedia('(max-width:550px)').matches;
        if (isMobile) {
            if (!element.classList.contains('sb-mobile-palette-open')) {
                element.classList.add('sb-mobile-palette-open');
            }
            else {
                element.classList.remove('sb-mobile-palette-open');
            }
        }
    }
    //Initializtion of the diagram.
    var diagram = new ej.diagrams.Diagram({
        width: '100%', height: '445px', nodes: nodes, connectors: connectors,
        contextMenuSettings: contextMenu,
        contextMenuOpen: contextMenuOpen,
        contextMenuClick: contextMenuClick,
        //Set the constraints of the SnapSettings
        snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
        dragEnter: dragEnter
    });
    diagram.appendTo('#diagram');
    diagram.fitToPage();
    //Initializes the symbol palette
    var palette = new ej.diagrams.SymbolPalette({
        expandMode: 'Multiple', symbolMargin: { left: 15, right: 15, top: 15, bottom: 15 }, symbolHeight: 60, symbolWidth: 60,
        palettes: [
            { id: 'Bpmn', expanded: true, symbols: bpmnShapes, iconCss: 'shapes', title: 'BPMN Shapes' },
            { id: 'Connector', expanded: true, symbols: getConnectors(), iconCss: 'shapes', title: 'Connectors' },
        ],
        width: '100%', height: '471px',
        getNodeDefaults: function (symbol) {
            symbol.style.strokeColor = '#757575';
        },
    });
    palette.appendTo('#symbolpalette');
    paletteIconClick();
};

