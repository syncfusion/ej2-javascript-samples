// Injecting necessary modules for the diagram
ej.diagrams.Diagram.Inject(ej.diagrams.UndoRedo, ej.diagrams.BpmnDiagrams);
/**
 * WorkFlow editor
 */


// Initialize the diagram
this.default = function () {
    // Initialize variables
    var diagram;
    var container = "container";
    var toolbarObj;
    var taskShape = {
        type: 'Bpmn', shape: 'Activity', activity: {
            activity: 'Task',
        }
    };

    // Define nodes for the workflow
    var nodes = [
        {
            id: 'newTravelRequestRecieved', width: 50, height: 50, offsetX: 100, offsetY: 245,
            shape: {
                type: 'Bpmn', shape: 'Event',
                event: { event: 'Start', trigger: 'None' }
            },
            addInfo: { type: "Bpmn" },
        },
        {
            id: 'getTravelRequestDetails', width: 100, height: 80, offsetX: 250, offsetY: 245,
            shape: {
                type: 'Bpmn', shape: 'Activity', activity: {
                    activity: 'Task',
                }
            }
        },
        {
            id: 'getRequesterProfile', width: 100, height: 80, offsetX: 400, offsetY: 245,
            shape: {
                type: 'Bpmn', shape: 'Activity', activity: {
                    activity: 'Task',
                }
            }
        },
        {
            id: 'getManagerDetails', width: 100, height: 80, offsetX: 550, offsetY: 245,

            shape: {
                type: 'Bpmn', shape: 'Activity', activity: {
                    activity: 'Task',
                }
            }
        },
        {
            id: 'setStatusAsRejected', width: 100, height: 80, offsetX: 700, offsetY: 245,
            shape: {
                type: 'Bpmn', shape: 'Activity', activity: {
                    activity: 'Task',
                }
            }
        },
        {
            id: 'setStatusAsAccepted', width: 100, height: 80, offsetX: 850, offsetY: 245,
            shape: {
                type: 'Bpmn', shape: 'Activity', activity: {
                    activity: 'Task',
                }
            }
        },
        {
            id: 'setNextApprovalStatusAsRejected', width: 100, height: 80, offsetX: 1100, offsetY: 245,
            shape: {
                type: 'Bpmn', shape: 'Activity', activity: {
                    activity: 'Task',
                }
            }
        },
        {
            id: 'setNextApprovalStatusAsAccepted', width: 100, height: 80, offsetX: 1250, offsetY: 245,
            shape: {
                type: 'Bpmn', shape: 'Activity', activity: {
                    activity: 'Task',
                }
            }
        },
        {
            id: 'initiateApprovalWithManager', width: 100, height: 80, offsetX: 550, offsetY: 445,
            shape: {
                type: 'Bpmn', shape: 'Activity', activity: {
                    activity: 'Task',
                }
            }
        },
        {
            id: 'checkApprovalStatus', width: 80, height: 60, offsetX: 700, offsetY: 445,
            shape: {
                type: 'Bpmn', shape: 'Gateway', gateway: { type: 'Exclusive' }
            }
        },
        {
            id: 'checkIfItIsAnInternaltionalTravel', width: 80, height: 60, offsetX: 850, offsetY: 445,
            shape: {
                type: 'Bpmn', shape: 'Gateway', gateway: { type: 'Exclusive' }
            }
        },
        {
            id: 'initialteApprovalWithNextLevelManager', width: 100, height: 80, offsetX: 1000, offsetY: 445,
            shape: {
                type: 'Bpmn', shape: 'Activity', activity: {
                    activity: 'Task',
                }
            }
        },
        {
            id: 'checkLevel2-ApprovalStatus', width: 80, height: 60, offsetX: 1130, offsetY: 445,
            shape: {
                type: 'Bpmn', shape: 'Gateway', gateway: { type: 'Exclusive' }
            }
        },
    ];

    // Define connectors between nodes
    var connectors = [
        {
            id: 'newTravelRequestRecieved-getTravelRequestDetails', sourceID: 'newTravelRequestRecieved',
            targetID: 'getTravelRequestDetails',
            addInfo: { level: 1 }
        },
        {
            id: 'getTravelRequestDetails-getRequesterProfile', sourceID: 'getTravelRequestDetails',
            targetID: 'getRequesterProfile',
            addInfo: { level: 2 }
        },
        {
            id: 'getRequesterProfile-getManagerDetails', sourceID: 'getRequesterProfile',
            targetID: 'getManagerDetails',
            addInfo: { level: 3 }
        },
        {
            id: 'getManagerDetails-initiateApprovalWithManager', sourceID: 'getManagerDetails',
            targetID: 'initiateApprovalWithManager',
            addInfo: { level: 4 }
        },
        {
            id: 'initiateApprovalWithManager-checkApprovalStatus', sourceID: 'initiateApprovalWithManager',
            targetID: 'checkApprovalStatus',
            addInfo: { level: 5 }
        },
        {
            id: 'checkApprovalStatus-setStatusAsRejected', sourceID: 'checkApprovalStatus',
            targetID: 'setStatusAsRejected',
            addInfo: { level: 6 },
            annotations: [{ content: 'Rejected', style: { fill: 'white' } }]
        },
        {
            id: 'checkApprovalStatus-checkIfItIsAnInternaltionalTravel',
            sourceID: 'checkApprovalStatus',
            targetID: 'checkIfItIsAnInternaltionalTravel',
            annotations: [{ content: 'Accepted', style: { fill: 'white' } }],
            addInfo: { level: 7 },

        },
        {
            id: 'checkIfItIsAnInternaltionalTravel-setStatusAsAccepted',
            sourceID: 'checkIfItIsAnInternaltionalTravel',
            targetID: 'setStatusAsAccepted',
            annotations: [{ content: 'No', offset: 0.4, style: { fill: 'white' } }],
            addInfo: { level: 8 }
        },
        {
            id: 'checkIfItIsAnInternaltionalTravel-initialteApprovalWithNextLevelManager',
            sourceID: 'checkIfItIsAnInternaltionalTravel',
            targetID: 'initialteApprovalWithNextLevelManager',
            annotations: [{ content: 'Yes', offset: 0.4, style: { fill: 'white' } }],
            addInfo: { level: 9 }
        },
        {
            id: 'initialteApprovalWithNextLevelManager-checkLevel2-ApprovalStatus',
            sourceID: 'initialteApprovalWithNextLevelManager',
            targetID: 'checkLevel2-ApprovalStatus',
            addInfo: { level: 10 }
        },
        {
            id: 'checkLevel2-ApprovalStatus-setNextApprovalStatusAsRejected',
            sourceID: 'checkLevel2-ApprovalStatus',
            targetID: 'setNextApprovalStatusAsRejected',
            annotations: [{ content: 'Rejected', offset: 0.4, style: { fill: 'white' } }],
            addInfo: { level: 11 }
        },
        {
            id: 'checkLevel2-ApprovalStatus-setNextApprovalStatusAsAccepted',
            sourceID: 'checkLevel2-ApprovalStatus',
            targetID: 'setNextApprovalStatusAsAccepted',
            sourcePortID: 'right_port',
            annotations: [{ content: 'Approved', style: { fill: 'white' } }],
            addInfo: { level: 12 }
        },

    ];

    // Define interval and timeout variables
    var flowInterval;
    var flowTimeOut1;
    var flowTimeOut2;
    var connectorCollection = [];
    var currentTarget;
    var level;
    diagram = new ej.diagrams.Diagram({
        width: '100%', height: '645px', nodes: nodes,
        connectors: connectors,
        tool: ej.diagrams.DiagramTools.ZoomPan,
        scrollSettings: { currentZoom: 0.8 },
        snapSettings: { constraints: ej.diagrams.SnapConstraints.None },

        getNodeDefaults: getNodeDefaults,
        getConnectorDefaults: getConnectorDefaults,
        created: created,
    });
    diagram.appendTo('#diagram');

    // Function to execute when the diagram is created  
    function created() {
        diagram.fitToPage({ region: 'Content', mode: 'Width' });
    }

    // Set defaults for connectors
    function getConnectorDefaults(connector) {
        connector.type = 'Orthogonal';
        connector.style = { strokeColor: '#B6B6B4' };
        connector.targetDecorator.style = { strokeColor: '#B6B6B4', fill: '#B6B6B4' };
        connector.annotations.style = { fill: 'White', fontSize: 20 };
        if (connector.annotations && connector.annotations.length > 0) {
            connector.annotations = connector.annotations.concat({ content: '', height: 8, width: 8, offset: 0, style: { fill: 'transparent' } });
            if (connector.annotations[0].content === 'Accepted' || connector.annotations[0].content === 'Yes') {
                connector.annotations[0].alignment = 'Before';
                connector.annotations[0].displacement = { x: 0, y: 10 };
            }
        } else {
            connector.annotations = [{ content: '', height: 8, width: 8, offset: 0, style: { fill: 'transparent' } }];
        }
        // connector.annotations.style
        connector.annotations[0].style.fontSize = 14;
    }

    // Set defaults for nodes
    function getNodeDefaults(node) {
        if (node.id === 'checkLevel2-ApprovalStatus') {
            node.ports = [{ id: 'right_port', offset: { x: 1, y: 0.5 } }];
        }
        if (node.shape.type === 'HTML') {
            node.constraints = ej.diagrams.NodeConstraints.None;
        }
        if (node.shape.type !== 'HTML') {
            node.annotations = [
                {
                    id: node.id + '_label',
                    content: node.id.replace(/-/g, ' ')
                        .replace(/([a-z])([A-Z0-9])/g, '$1 $2')
                        .replace(/\b\w/g, function (match) { return match.toUpperCase(); }),
                    style: { fontSize: 15 },
                    constraints: ej.diagrams.AnnotationConstraints.ReadOnly
                }];

            if (node.id === 'travelRequestApprovalProcess') {
                node.annotations[0].offset = { x: 0.1, y: 0.5 };
            }
            if (node.shape.shape === 'Gateway' || node.shape.shape === 'Event') {
                node.annotations[0].offset = { x: 0.5, y: 1.7 };
            }
            if (node.id === 'row1' || node.id === 'row2') {
                node.annotations = [];
            }
            node.annotations[0].style.fontSize = 14;
        }
    }

    //Initializes ToolBar control to start and reset the workflow diagram
    toolbarObj = new ej.navigations.Toolbar({
        clicked: function (args) {
            if (args.item.text === 'Execute') {
                startWorkflow();
                toolbarObj.items[2].disabled = true;
                toolbarObj.items[0].disabled = true;
            }
            else if (args.item.text === 'Reset') {
                resetFLow();
                toolbarObj.items[2].disabled = true;
                toolbarObj.items[0].disabled = false;
            }
        },
        items: [
            {
                text: 'Execute', tooltipText: 'Execute', prefixIcon: 'e-play tb-icons'
            },
            { type: 'Separator' },
            { text: 'Reset', tooltipText: 'Reset', disabled: true, prefixIcon: 'e-diagram-icons e-diagram-reset' },
        ]
    });
    toolbarObj.appendTo('#toolbar');

    // Function To execute workflow.
    function startWorkflow(args) {
        if (!args) {
            clearInterval(flowInterval);
            clearTimeout(flowTimeOut1);
            clearTimeout(flowTimeOut2);
        }
        connectorCollection = [];
        level = args ? args : 1;
        var connectors = diagram.connectors;

        for (var i = 0; i < connectors.length; i++) {
            if (connectors[i].addInfo && connectors[i].addInfo.level === level) {
                connectorCollection.push(connectors[i]);
            }
        }

        var intervalDuration = 120;
        var completedCount = 0;

        flowInterval = setInterval(function () {
            for (var j = 0; j < connectorCollection.length; j++) {
                var connector = connectorCollection[j];
                if ((connector.id !== "checkApprovalStatus-setStatusAsRejected") && (connector.id !== "checkIfItIsAnInternaltionalTravel-setStatusAsAccepted") && (connector.id !== "checkLevel2-ApprovalStatus-setNextApprovalStatusAsRejected")) {
                    connector.annotations[connector.annotations.length - 1].style.fill = '#76F543';
                    if (connector.annotations[connector.annotations.length - 1].offset < 0.9) {
                        connector.annotations[connector.annotations.length - 1].offset += 0.025;
                        connector.style.strokeColor = '#F8FC02';
                    }
                    if (connector.annotations[connector.annotations.length - 1].offset >= 0.9) {
                        completedCount++;
                        if (completedCount === connectorCollection.length) {
                            clearInterval(flowInterval);
                            callTimeOut(connectorCollection, connector, level);
                        }
                    }
                } else {
                    clearInterval(flowInterval);
                    clearTimeout(flowTimeOut1);
                    clearTimeout(flowTimeOut2);
                    startWorkflow(level + 1);
                }
            }
            diagram.dataBind();
        }, intervalDuration);
    }

    // Function to handle the first timeout during workflow execution
    function callTimeOut(connectorCollection, connector, level) {
        flowTimeOut1 =
            setTimeout(function () {
                timeOne(connectorCollection, connector);
            }, 10);
        flowTimeOut2 =
            setTimeout(function () {
                timeTwo(level);
            }, 1800);

    }

    // Function to execute actions after the first timeout
    function timeOne(connectorCollection, connector) {
        for (var k = 0; k < connectorCollection.length; k++) {
            connectorCollection[k].annotations[connector.annotations.length - 1].style.fill = 'transparent';
            connectorCollection[k].style.strokeColor = 'green';
            connectorCollection[k].targetDecorator.style.strokeColor = 'green';
            connectorCollection[k].targetDecorator.style.fill = 'green';
            var targetNode = diagram.getObject(connectorCollection[k].targetID);
            if ((targetNode.shape).shape !== 'Gateway' && (((targetNode).id !== 'setStatusAsRejected' || (targetNode).id !== 'setStatusAsAccepted' || (targetNode).id !== 'setNextApprovalStatusAsRejected'))) {
                var newNode = {
                    id: ej.diagrams.randomId(), width: 15, height: 15, offsetX: targetNode.wrapper.bounds.left + 1,
                    offsetY: (targetNode).wrapper.bounds.top + 2, shape: {
                        type: 'HTML', content:
                            '<div style="display: flex; flex-direction: column; align-items: center;"><div id="loadingIndicator" class="loading-indicator"></div><div class="tick">✓</div></div>'
                    }
                };
                diagram.add(newNode);
                currentTarget = targetNode;
            }
        }

    }

    // Function to handle the second timeout during workflow execution
    function timeTwo(level) {
        diagram.dataBind();
        var loadingIndicator2 = document.getElementsByClassName('loading-indicator');
        // To remove loading indicator.
        for (var loadINum = 0; loadINum < loadingIndicator2.length; loadINum++) {
            (loadingIndicator2[loadINum]).style.display = 'none';
        }
        // To add tick mark.
        var tick = document.getElementsByClassName('tick');
        for (var tickINum = 0; tickINum < tick.length; tickINum++) {
            (tick[tickINum]).style.display = 'block';
        }
        if (level < 12) {
            startWorkflow(level + 1);
        } else {
            toolbarObj.items[2].disabled = false;
        }
        currentTarget.style.strokeColor = 'green';
        currentTarget.style.strokeWidth = 2;

    }

    //Function to reset the workflow when the reset option is clicked
    function resetFLow() {
        clearInterval(flowInterval);
        clearTimeout(flowTimeOut1);
        clearTimeout(flowTimeOut2);
        diagram.loadDiagram('{"width":"100%","height":"645px","nodes":[{"shape":{"type":"Bpmn","shape":"Event","event":{"event":"Start","trigger":"None"},"activity":{"subProcess":{}},"annotations":[]},"ports":[],"id":"newTravelRequestRecieved","width":50,"height":50,"offsetX":100,"offsetY":245,"addInfo":{"type":"Bpmn"},"annotations":[{"id":"newTravelRequestRecieved_label","content":"New Travel Request Recieved","style":{"strokeWidth":0,"strokeColor":"transparent","fill":"transparent","fontSize":14,"bold":false,"textWrapping":"WrapWithOverflow","color":"black","whiteSpace":"CollapseSpace","fontFamily":"Arial","italic":false,"opacity":1,"strokeDashArray":"","textAlign":"Center","textOverflow":"Wrap","textDecoration":"None"},"constraints":2,"offset":{"x":0.5,"y":1.7},"annotationType":"String","hyperlink":{"link":"","hyperlinkOpenState":"NewTab","content":"","textDecoration":"None"},"visibility":true,"rotateAngle":0,"margin":{"right":0,"bottom":0,"left":0,"top":0},"horizontalAlignment":"Center","verticalAlignment":"Center"}],"zIndex":0,"container":null,"visible":true,"horizontalAlignment":"Left","verticalAlignment":"Top","backgroundColor":"transparent","borderColor":"none","borderWidth":0,"rotateAngle":0,"pivot":{"x":0.5,"y":0.5},"margin":{},"flip":"None","wrapper":{"actualSize":{"width":50,"height":50},"offsetX":100,"offsetY":245},"style":{"fill":"white","strokeColor":"black","strokeWidth":1,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"}},"constraints":5240814,"isExpanded":true,"expandIcon":{"shape":"None"},"fixedUserHandles":[],"flipMode":"All","inEdges":[],"outEdges":["newTravelRequestRecieved-getTravelRequestDetails"],"parentId":"","processId":"","umlIndex":-1,"isPhase":false,"isLane":false},{"shape":{"type":"Bpmn","shape":"Activity","activity":{"activity":"Task","subProcess":{"type":"None"},"task":{"call":false,"compensation":false,"loop":"None","type":"None"}},"annotations":[]},"ports":[],"id":"getTravelRequestDetails","width":100,"height":80,"offsetX":250,"offsetY":245,"annotations":[{"id":"getTravelRequestDetails_label","content":"Get Travel Request Details","style":{"strokeWidth":0,"strokeColor":"transparent","fill":"transparent","fontSize":14,"bold":false,"textWrapping":"WrapWithOverflow","color":"black","whiteSpace":"CollapseSpace","fontFamily":"Arial","italic":false,"opacity":1,"strokeDashArray":"","textAlign":"Center","textOverflow":"Wrap","textDecoration":"None"},"constraints":2,"annotationType":"String","hyperlink":{"link":"","hyperlinkOpenState":"NewTab","content":"","textDecoration":"None"},"visibility":true,"rotateAngle":0,"margin":{"right":0,"bottom":0,"left":0,"top":0},"horizontalAlignment":"Center","verticalAlignment":"Center","offset":{"x":0.5,"y":0.5}}],"zIndex":1,"container":null,"visible":true,"horizontalAlignment":"Left","verticalAlignment":"Top","backgroundColor":"transparent","borderColor":"none","borderWidth":0,"rotateAngle":0,"pivot":{"x":0.5,"y":0.5},"margin":{},"flip":"None","wrapper":{"actualSize":{"width":100,"height":80},"offsetX":250,"offsetY":245},"style":{"fill":"white","strokeColor":"black","strokeWidth":1,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"}},"constraints":5240814,"isExpanded":true,"expandIcon":{"shape":"None"},"fixedUserHandles":[],"flipMode":"All","inEdges":["newTravelRequestRecieved-getTravelRequestDetails"],"outEdges":["getTravelRequestDetails-getRequesterProfile"],"parentId":"","processId":"","umlIndex":-1,"isPhase":false,"isLane":false},{"shape":{"type":"Bpmn","shape":"Activity","activity":{"activity":"Task","subProcess":{"type":"None"},"task":{"call":false,"compensation":false,"loop":"None","type":"None"}},"annotations":[]},"ports":[],"id":"getRequesterProfile","width":100,"height":80,"offsetX":400,"offsetY":245,"annotations":[{"id":"getRequesterProfile_label","content":"Get Requester Profile","style":{"strokeWidth":0,"strokeColor":"transparent","fill":"transparent","fontSize":14,"bold":false,"textWrapping":"WrapWithOverflow","color":"black","whiteSpace":"CollapseSpace","fontFamily":"Arial","italic":false,"opacity":1,"strokeDashArray":"","textAlign":"Center","textOverflow":"Wrap","textDecoration":"None"},"constraints":2,"annotationType":"String","hyperlink":{"link":"","hyperlinkOpenState":"NewTab","content":"","textDecoration":"None"},"visibility":true,"rotateAngle":0,"margin":{"right":0,"bottom":0,"left":0,"top":0},"horizontalAlignment":"Center","verticalAlignment":"Center","offset":{"x":0.5,"y":0.5}}],"zIndex":2,"container":null,"visible":true,"horizontalAlignment":"Left","verticalAlignment":"Top","backgroundColor":"transparent","borderColor":"none","borderWidth":0,"rotateAngle":0,"pivot":{"x":0.5,"y":0.5},"margin":{},"flip":"None","wrapper":{"actualSize":{"width":100,"height":80},"offsetX":400,"offsetY":245},"style":{"fill":"white","strokeColor":"black","strokeWidth":1,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"}},"constraints":5240814,"isExpanded":true,"expandIcon":{"shape":"None"},"fixedUserHandles":[],"flipMode":"All","inEdges":["getTravelRequestDetails-getRequesterProfile"],"outEdges":["getRequesterProfile-getManagerDetails"],"parentId":"","processId":"","umlIndex":-1,"isPhase":false,"isLane":false},{"shape":{"type":"Bpmn","shape":"Activity","activity":{"activity":"Task","subProcess":{"type":"None"},"task":{"call":false,"compensation":false,"loop":"None","type":"None"}},"annotations":[]},"ports":[],"id":"getManagerDetails","width":100,"height":80,"offsetX":550,"offsetY":245,"annotations":[{"id":"getManagerDetails_label","content":"Get Manager Details","style":{"strokeWidth":0,"strokeColor":"transparent","fill":"transparent","fontSize":14,"bold":false,"textWrapping":"WrapWithOverflow","color":"black","whiteSpace":"CollapseSpace","fontFamily":"Arial","italic":false,"opacity":1,"strokeDashArray":"","textAlign":"Center","textOverflow":"Wrap","textDecoration":"None"},"constraints":2,"annotationType":"String","hyperlink":{"link":"","hyperlinkOpenState":"NewTab","content":"","textDecoration":"None"},"visibility":true,"rotateAngle":0,"margin":{"right":0,"bottom":0,"left":0,"top":0},"horizontalAlignment":"Center","verticalAlignment":"Center","offset":{"x":0.5,"y":0.5}}],"zIndex":3,"container":null,"visible":true,"horizontalAlignment":"Left","verticalAlignment":"Top","backgroundColor":"transparent","borderColor":"none","borderWidth":0,"rotateAngle":0,"pivot":{"x":0.5,"y":0.5},"margin":{},"flip":"None","wrapper":{"actualSize":{"width":100,"height":80},"offsetX":550,"offsetY":245},"style":{"fill":"white","strokeColor":"black","strokeWidth":1,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"}},"constraints":5240814,"isExpanded":true,"expandIcon":{"shape":"None"},"fixedUserHandles":[],"flipMode":"All","inEdges":["getRequesterProfile-getManagerDetails"],"outEdges":["getManagerDetails-initiateApprovalWithManager"],"parentId":"","processId":"","umlIndex":-1,"isPhase":false,"isLane":false},{"shape":{"type":"Bpmn","shape":"Activity","activity":{"activity":"Task","subProcess":{},"task":{"call":false,"compensation":false,"loop":"None","type":"None"}},"annotations":[]},"ports":[],"id":"setStatusAsRejected","width":100,"height":80,"offsetX":700,"offsetY":245,"annotations":[{"id":"setStatusAsRejected_label","content":"Set Status As Rejected","style":{"strokeWidth":0,"strokeColor":"transparent","fill":"transparent","fontSize":14,"bold":false,"textWrapping":"WrapWithOverflow","color":"black","whiteSpace":"CollapseSpace","fontFamily":"Arial","italic":false,"opacity":1,"strokeDashArray":"","textAlign":"Center","textOverflow":"Wrap","textDecoration":"None"},"constraints":2,"annotationType":"String","hyperlink":{"link":"","hyperlinkOpenState":"NewTab","content":"","textDecoration":"None"},"visibility":true,"rotateAngle":0,"margin":{"right":0,"bottom":0,"left":0,"top":0},"horizontalAlignment":"Center","verticalAlignment":"Center","offset":{"x":0.5,"y":0.5}}],"zIndex":4,"container":null,"visible":true,"horizontalAlignment":"Left","verticalAlignment":"Top","backgroundColor":"transparent","borderColor":"none","borderWidth":0,"rotateAngle":0,"pivot":{"x":0.5,"y":0.5},"margin":{},"flip":"None","wrapper":{"actualSize":{"width":100,"height":80},"offsetX":700,"offsetY":245},"style":{"fill":"white","strokeColor":"black","strokeWidth":1,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"}},"constraints":5240814,"isExpanded":true,"expandIcon":{"shape":"None"},"fixedUserHandles":[],"flipMode":"All","inEdges":["checkApprovalStatus-setStatusAsRejected"],"outEdges":[],"parentId":"","processId":"","umlIndex":-1,"isPhase":false,"isLane":false},{"shape":{"type":"Bpmn","shape":"Activity","activity":{"activity":"Task","subProcess":{},"task":{"call":false,"compensation":false,"loop":"None","type":"None"}},"annotations":[]},"ports":[],"id":"setStatusAsAccepted","width":100,"height":80,"offsetX":850,"offsetY":245,"annotations":[{"id":"setStatusAsAccepted_label","content":"Set Status As Accepted","style":{"strokeWidth":0,"strokeColor":"transparent","fill":"transparent","fontSize":14,"bold":false,"textWrapping":"WrapWithOverflow","color":"black","whiteSpace":"CollapseSpace","fontFamily":"Arial","italic":false,"opacity":1,"strokeDashArray":"","textAlign":"Center","textOverflow":"Wrap","textDecoration":"None"},"constraints":2,"annotationType":"String","hyperlink":{"link":"","hyperlinkOpenState":"NewTab","content":"","textDecoration":"None"},"visibility":true,"rotateAngle":0,"margin":{"right":0,"bottom":0,"left":0,"top":0},"horizontalAlignment":"Center","verticalAlignment":"Center","offset":{"x":0.5,"y":0.5}}],"zIndex":5,"container":null,"visible":true,"horizontalAlignment":"Left","verticalAlignment":"Top","backgroundColor":"transparent","borderColor":"none","borderWidth":0,"rotateAngle":0,"pivot":{"x":0.5,"y":0.5},"margin":{},"flip":"None","wrapper":{"actualSize":{"width":100,"height":80},"offsetX":850,"offsetY":245},"style":{"fill":"white","strokeColor":"black","strokeWidth":1,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"}},"constraints":5240814,"isExpanded":true,"expandIcon":{"shape":"None"},"fixedUserHandles":[],"flipMode":"All","inEdges":["checkIfItIsAnInternaltionalTravel-setStatusAsAccepted"],"outEdges":[],"parentId":"","processId":"","umlIndex":-1,"isPhase":false,"isLane":false},{"shape":{"type":"Bpmn","shape":"Activity","activity":{"activity":"Task","subProcess":{},"task":{"call":false,"compensation":false,"loop":"None","type":"None"}},"annotations":[]},"ports":[],"id":"setNextApprovalStatusAsRejected","width":100,"height":80,"offsetX":1100,"offsetY":245,"annotations":[{"id":"setNextApprovalStatusAsRejected_label","content":"Set Next Approval Status As Rejected","style":{"strokeWidth":0,"strokeColor":"transparent","fill":"transparent","fontSize":14,"bold":false,"textWrapping":"WrapWithOverflow","color":"black","whiteSpace":"CollapseSpace","fontFamily":"Arial","italic":false,"opacity":1,"strokeDashArray":"","textAlign":"Center","textOverflow":"Wrap","textDecoration":"None"},"constraints":2,"annotationType":"String","hyperlink":{"link":"","hyperlinkOpenState":"NewTab","content":"","textDecoration":"None"},"visibility":true,"rotateAngle":0,"margin":{"right":0,"bottom":0,"left":0,"top":0},"horizontalAlignment":"Center","verticalAlignment":"Center","offset":{"x":0.5,"y":0.5}}],"zIndex":6,"container":null,"visible":true,"horizontalAlignment":"Left","verticalAlignment":"Top","backgroundColor":"transparent","borderColor":"none","borderWidth":0,"rotateAngle":0,"pivot":{"x":0.5,"y":0.5},"margin":{},"flip":"None","wrapper":{"actualSize":{"width":100,"height":80},"offsetX":1100,"offsetY":245},"style":{"fill":"white","strokeColor":"black","strokeWidth":1,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"}},"constraints":5240814,"isExpanded":true,"expandIcon":{"shape":"None"},"fixedUserHandles":[],"flipMode":"All","inEdges":["checkLevel2-ApprovalStatus-setNextApprovalStatusAsRejected"],"outEdges":[],"parentId":"","processId":"","umlIndex":-1,"isPhase":false,"isLane":false},{"shape":{"type":"Bpmn","shape":"Activity","activity":{"activity":"Task","subProcess":{},"task":{"call":false,"compensation":false,"loop":"None","type":"None"}},"annotations":[]},"ports":[],"id":"setNextApprovalStatusAsAccepted","width":100,"height":80,"offsetX":1250,"offsetY":245,"annotations":[{"id":"setNextApprovalStatusAsAccepted_label","content":"Set Next Approval Status As Accepted","style":{"strokeWidth":0,"strokeColor":"transparent","fill":"transparent","fontSize":14,"bold":false,"textWrapping":"WrapWithOverflow","color":"black","whiteSpace":"CollapseSpace","fontFamily":"Arial","italic":false,"opacity":1,"strokeDashArray":"","textAlign":"Center","textOverflow":"Wrap","textDecoration":"None"},"constraints":2,"annotationType":"String","hyperlink":{"link":"","hyperlinkOpenState":"NewTab","content":"","textDecoration":"None"},"visibility":true,"rotateAngle":0,"margin":{"right":0,"bottom":0,"left":0,"top":0},"horizontalAlignment":"Center","verticalAlignment":"Center","offset":{"x":0.5,"y":0.5}}],"zIndex":7,"container":null,"visible":true,"horizontalAlignment":"Left","verticalAlignment":"Top","backgroundColor":"transparent","borderColor":"none","borderWidth":0,"rotateAngle":0,"pivot":{"x":0.5,"y":0.5},"margin":{},"flip":"None","wrapper":{"actualSize":{"width":100,"height":80},"offsetX":1250,"offsetY":245},"style":{"fill":"white","strokeColor":"black","strokeWidth":1,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"}},"constraints":5240814,"isExpanded":true,"expandIcon":{"shape":"None"},"fixedUserHandles":[],"flipMode":"All","inEdges":["checkLevel2-ApprovalStatus-setNextApprovalStatusAsAccepted"],"outEdges":[],"parentId":"","processId":"","umlIndex":-1,"isPhase":false,"isLane":false},{"shape":{"type":"Bpmn","shape":"Activity","activity":{"activity":"Task","subProcess":{"type":"None"},"task":{"call":false,"compensation":false,"loop":"None","type":"None"}},"annotations":[]},"ports":[],"id":"initiateApprovalWithManager","width":100,"height":80,"offsetX":550,"offsetY":445,"annotations":[{"id":"initiateApprovalWithManager_label","content":"Initiate Approval With Manager","style":{"strokeWidth":0,"strokeColor":"transparent","fill":"transparent","fontSize":14,"bold":false,"textWrapping":"WrapWithOverflow","color":"black","whiteSpace":"CollapseSpace","fontFamily":"Arial","italic":false,"opacity":1,"strokeDashArray":"","textAlign":"Center","textOverflow":"Wrap","textDecoration":"None"},"constraints":2,"annotationType":"String","hyperlink":{"link":"","hyperlinkOpenState":"NewTab","content":"","textDecoration":"None"},"visibility":true,"rotateAngle":0,"margin":{"right":0,"bottom":0,"left":0,"top":0},"horizontalAlignment":"Center","verticalAlignment":"Center","offset":{"x":0.5,"y":0.5}}],"zIndex":8,"container":null,"visible":true,"horizontalAlignment":"Left","verticalAlignment":"Top","backgroundColor":"transparent","borderColor":"none","borderWidth":0,"rotateAngle":0,"pivot":{"x":0.5,"y":0.5},"margin":{},"flip":"None","wrapper":{"actualSize":{"width":100,"height":80},"offsetX":550,"offsetY":445},"style":{"fill":"white","strokeColor":"black","strokeWidth":1,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"}},"constraints":5240814,"isExpanded":true,"expandIcon":{"shape":"None"},"fixedUserHandles":[],"flipMode":"All","inEdges":["getManagerDetails-initiateApprovalWithManager"],"outEdges":["initiateApprovalWithManager-checkApprovalStatus"],"parentId":"","processId":"","umlIndex":-1,"isPhase":false,"isLane":false},{"shape":{"type":"Bpmn","shape":"Gateway","gateway":{"type":"Exclusive"},"activity":{"subProcess":{}},"annotations":[]},"ports":[],"id":"checkApprovalStatus","width":80,"height":60,"offsetX":700,"offsetY":445,"annotations":[{"id":"checkApprovalStatus_label","content":"Check Approval Status","style":{"strokeWidth":0,"strokeColor":"transparent","fill":"transparent","fontSize":14,"bold":false,"textWrapping":"WrapWithOverflow","color":"black","whiteSpace":"CollapseSpace","fontFamily":"Arial","italic":false,"opacity":1,"strokeDashArray":"","textAlign":"Center","textOverflow":"Wrap","textDecoration":"None"},"constraints":2,"offset":{"x":0.5,"y":1.7},"annotationType":"String","hyperlink":{"link":"","hyperlinkOpenState":"NewTab","content":"","textDecoration":"None"},"visibility":true,"rotateAngle":0,"margin":{"right":0,"bottom":0,"left":0,"top":0},"horizontalAlignment":"Center","verticalAlignment":"Center"}],"zIndex":9,"container":null,"visible":true,"horizontalAlignment":"Left","verticalAlignment":"Top","backgroundColor":"transparent","borderColor":"none","borderWidth":0,"rotateAngle":0,"pivot":{"x":0.5,"y":0.5},"margin":{},"flip":"None","wrapper":{"actualSize":{"width":80,"height":60},"offsetX":700,"offsetY":445},"style":{"fill":"white","strokeColor":"black","strokeWidth":1,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"}},"constraints":5240814,"isExpanded":true,"expandIcon":{"shape":"None"},"fixedUserHandles":[],"flipMode":"All","inEdges":["initiateApprovalWithManager-checkApprovalStatus"],"outEdges":["checkApprovalStatus-setStatusAsRejected","checkApprovalStatus-checkIfItIsAnInternaltionalTravel"],"parentId":"","processId":"","umlIndex":-1,"isPhase":false,"isLane":false},{"shape":{"type":"Bpmn","shape":"Gateway","gateway":{"type":"Exclusive"},"activity":{"subProcess":{}},"annotations":[]},"ports":[],"id":"checkIfItIsAnInternaltionalTravel","width":80,"height":60,"offsetX":850,"offsetY":445,"annotations":[{"id":"checkIfItIsAnInternaltionalTravel_label","content":"Check If It Is An Internaltional Travel","style":{"strokeWidth":0,"strokeColor":"transparent","fill":"transparent","fontSize":14,"bold":false,"textWrapping":"WrapWithOverflow","color":"black","whiteSpace":"CollapseSpace","fontFamily":"Arial","italic":false,"opacity":1,"strokeDashArray":"","textAlign":"Center","textOverflow":"Wrap","textDecoration":"None"},"constraints":2,"offset":{"x":0.5,"y":1.7},"annotationType":"String","hyperlink":{"link":"","hyperlinkOpenState":"NewTab","content":"","textDecoration":"None"},"visibility":true,"rotateAngle":0,"margin":{"right":0,"bottom":0,"left":0,"top":0},"horizontalAlignment":"Center","verticalAlignment":"Center"}],"zIndex":10,"container":null,"visible":true,"horizontalAlignment":"Left","verticalAlignment":"Top","backgroundColor":"transparent","borderColor":"none","borderWidth":0,"rotateAngle":0,"pivot":{"x":0.5,"y":0.5},"margin":{},"flip":"None","wrapper":{"actualSize":{"width":80,"height":60},"offsetX":850,"offsetY":445},"style":{"fill":"white","strokeColor":"black","strokeWidth":1,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"}},"constraints":5240814,"isExpanded":true,"expandIcon":{"shape":"None"},"fixedUserHandles":[],"flipMode":"All","inEdges":["checkApprovalStatus-checkIfItIsAnInternaltionalTravel"],"outEdges":["checkIfItIsAnInternaltionalTravel-setStatusAsAccepted","checkIfItIsAnInternaltionalTravel-initialteApprovalWithNextLevelManager"],"parentId":"","processId":"","umlIndex":-1,"isPhase":false,"isLane":false},{"shape":{"type":"Bpmn","shape":"Activity","activity":{"activity":"Task","subProcess":{"type":"None"},"task":{"call":false,"compensation":false,"loop":"None","type":"None"}},"annotations":[]},"ports":[],"id":"initialteApprovalWithNextLevelManager","width":100,"height":80,"offsetX":1000,"offsetY":445,"annotations":[{"id":"initialteApprovalWithNextLevelManager_label","content":"Initialte Approval With Next Level Manager","style":{"strokeWidth":0,"strokeColor":"transparent","fill":"transparent","fontSize":14,"bold":false,"textWrapping":"WrapWithOverflow","color":"black","whiteSpace":"CollapseSpace","fontFamily":"Arial","italic":false,"opacity":1,"strokeDashArray":"","textAlign":"Center","textOverflow":"Wrap","textDecoration":"None"},"constraints":2,"annotationType":"String","hyperlink":{"link":"","hyperlinkOpenState":"NewTab","content":"","textDecoration":"None"},"visibility":true,"rotateAngle":0,"margin":{"right":0,"bottom":0,"left":0,"top":0},"horizontalAlignment":"Center","verticalAlignment":"Center","offset":{"x":0.5,"y":0.5}}],"zIndex":11,"container":null,"visible":true,"horizontalAlignment":"Left","verticalAlignment":"Top","backgroundColor":"transparent","borderColor":"none","borderWidth":0,"rotateAngle":0,"pivot":{"x":0.5,"y":0.5},"margin":{},"flip":"None","wrapper":{"actualSize":{"width":100,"height":80},"offsetX":1000,"offsetY":445},"style":{"fill":"white","strokeColor":"black","strokeWidth":1,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"}},"constraints":5240814,"isExpanded":true,"expandIcon":{"shape":"None"},"fixedUserHandles":[],"flipMode":"All","inEdges":["checkIfItIsAnInternaltionalTravel-initialteApprovalWithNextLevelManager"],"outEdges":["initialteApprovalWithNextLevelManager-checkLevel2-ApprovalStatus"],"parentId":"","processId":"","umlIndex":-1,"isPhase":false,"isLane":false},{"shape":{"type":"Bpmn","shape":"Gateway","gateway":{"type":"Exclusive"},"activity":{"subProcess":{}},"annotations":[]},"ports":[{"inEdges":[],"outEdges":["checkLevel2-ApprovalStatus-setNextApprovalStatusAsAccepted"],"id":"right_port","offset":{"x":1,"y":0.5},"height":12,"width":12,"shape":"Square","margin":{"right":0,"bottom":0,"left":0,"top":0},"style":{"fill":"white","strokeColor":"black","opacity":1,"strokeDashArray":"","strokeWidth":1},"horizontalAlignment":"Center","verticalAlignment":"Center","visibility":8,"constraints":24}],"id":"checkLevel2-ApprovalStatus","width":80,"height":60,"offsetX":1130,"offsetY":445,"annotations":[{"id":"checkLevel2-ApprovalStatus_label","content":"Check Level 2 Approval Status","style":{"strokeWidth":0,"strokeColor":"transparent","fill":"transparent","fontSize":14,"bold":false,"textWrapping":"WrapWithOverflow","color":"black","whiteSpace":"CollapseSpace","fontFamily":"Arial","italic":false,"opacity":1,"strokeDashArray":"","textAlign":"Center","textOverflow":"Wrap","textDecoration":"None"},"constraints":2,"offset":{"x":0.5,"y":1.7},"annotationType":"String","hyperlink":{"link":"","hyperlinkOpenState":"NewTab","content":"","textDecoration":"None"},"visibility":true,"rotateAngle":0,"margin":{"right":0,"bottom":0,"left":0,"top":0},"horizontalAlignment":"Center","verticalAlignment":"Center"}],"zIndex":12,"container":null,"visible":true,"horizontalAlignment":"Left","verticalAlignment":"Top","backgroundColor":"transparent","borderColor":"none","borderWidth":0,"rotateAngle":0,"pivot":{"x":0.5,"y":0.5},"margin":{},"flip":"None","wrapper":{"actualSize":{"width":80,"height":60},"offsetX":1130,"offsetY":445},"style":{"fill":"white","strokeColor":"black","strokeWidth":1,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"}},"constraints":5240814,"flipMode":"All","isExpanded":true,"expandIcon":{"shape":"None"},"fixedUserHandles":[],"inEdges":["initialteApprovalWithNextLevelManager-checkLevel2-ApprovalStatus"],"outEdges":["checkLevel2-ApprovalStatus-setNextApprovalStatusAsRejected","checkLevel2-ApprovalStatus-setNextApprovalStatusAsAccepted"],"parentId":"","processId":"","umlIndex":-1,"isPhase":false,"isLane":false}],"connectors":[{"shape":{"type":"None"},"id":"newTravelRequestRecieved-getTravelRequestDetails","sourceID":"newTravelRequestRecieved","targetID":"getTravelRequestDetails","addInfo":{"level":1},"annotations":[{"id":"HvJiG","content":"","height":8,"width":8,"offset":0,"style":{"strokeWidth":0,"strokeColor":"transparent","fill":"transparent","fontSize":14,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"},"fontFamily":"Arial","textOverflow":"Wrap","textDecoration":"None","whiteSpace":"CollapseSpace","textWrapping":"WrapWithOverflow","textAlign":"Center","color":"black","italic":false,"bold":false},"annotationType":"String","constraints":4,"visibility":true,"rotateAngle":0,"horizontalAlignment":"Center","verticalAlignment":"Center","margin":{"left":0,"right":0,"bottom":0,"top":0},"alignment":"Center","segmentAngle":false,"displacement":{"x":0,"y":0}}],"zIndex":13,"type":"Orthogonal","style":{"strokeWidth":1,"strokeColor":"#B6B6B4","fill":"transparent","strokeDashArray":"","opacity":1,"gradient":{"type":"None"}},"targetDecorator":{"shape":"Arrow","style":{"fill":"#B6B6B4","strokeColor":"#B6B6B4","strokeWidth":1,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"}},"width":10,"height":10,"pivot":{"x":0,"y":0.5}},"segments":[{"type":"Orthogonal","direction":null}],"sourcePortID":"","targetPortID":"","targetPoint":{"x":200,"y":245},"connectorSpacing":13,"sourcePadding":0,"targetPadding":0,"sourcePoint":{"x":124.66,"y":245},"sourceDecorator":{"shape":"None","width":10,"height":10,"pivot":{"x":0,"y":0.5},"style":{"fill":"black","strokeColor":"black","strokeWidth":1,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"}}},"cornerRadius":0,"wrapper":{"actualSize":{"width":75.34,"height":0},"offsetX":162.32999999999998,"offsetY":245},"fixedUserHandles":[],"ports":[],"visible":true,"constraints":994878,"flipMode":"All","parentId":""},{"shape":{"type":"None"},"id":"getTravelRequestDetails-getRequesterProfile","sourceID":"getTravelRequestDetails","targetID":"getRequesterProfile","addInfo":{"level":2},"annotations":[{"id":"fi2MU","content":"","height":8,"width":8,"offset":0,"style":{"strokeWidth":0,"strokeColor":"transparent","fill":"transparent","fontSize":14,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"},"fontFamily":"Arial","textOverflow":"Wrap","textDecoration":"None","whiteSpace":"CollapseSpace","textWrapping":"WrapWithOverflow","textAlign":"Center","color":"black","italic":false,"bold":false},"annotationType":"String","constraints":4,"visibility":true,"rotateAngle":0,"horizontalAlignment":"Center","verticalAlignment":"Center","margin":{"left":0,"right":0,"bottom":0,"top":0},"alignment":"Center","segmentAngle":false,"displacement":{"x":0,"y":0}}],"zIndex":14,"type":"Orthogonal","style":{"strokeWidth":1,"strokeColor":"#B6B6B4","fill":"transparent","strokeDashArray":"","opacity":1,"gradient":{"type":"None"}},"targetDecorator":{"shape":"Arrow","style":{"fill":"#B6B6B4","strokeColor":"#B6B6B4","strokeWidth":1,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"}},"width":10,"height":10,"pivot":{"x":0,"y":0.5}},"segments":[{"type":"Orthogonal","direction":null}],"sourcePortID":"","targetPortID":"","targetPoint":{"x":350,"y":245},"connectorSpacing":13,"sourcePadding":0,"targetPadding":0,"sourcePoint":{"x":300,"y":245},"sourceDecorator":{"shape":"None","width":10,"height":10,"pivot":{"x":0,"y":0.5},"style":{"fill":"black","strokeColor":"black","strokeWidth":1,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"}}},"cornerRadius":0,"wrapper":{"actualSize":{"width":50,"height":0},"offsetX":325,"offsetY":245},"fixedUserHandles":[],"ports":[],"visible":true,"constraints":994878,"flipMode":"All","parentId":""},{"shape":{"type":"None"},"id":"getRequesterProfile-getManagerDetails","sourceID":"getRequesterProfile","targetID":"getManagerDetails","addInfo":{"level":3},"annotations":[{"id":"JyK3T","content":"","height":8,"width":8,"offset":0,"style":{"strokeWidth":0,"strokeColor":"transparent","fill":"transparent","fontSize":14,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"},"fontFamily":"Arial","textOverflow":"Wrap","textDecoration":"None","whiteSpace":"CollapseSpace","textWrapping":"WrapWithOverflow","textAlign":"Center","color":"black","italic":false,"bold":false},"annotationType":"String","constraints":4,"visibility":true,"rotateAngle":0,"horizontalAlignment":"Center","verticalAlignment":"Center","margin":{"left":0,"right":0,"bottom":0,"top":0},"alignment":"Center","segmentAngle":false,"displacement":{"x":0,"y":0}}],"zIndex":15,"type":"Orthogonal","style":{"strokeWidth":1,"strokeColor":"#B6B6B4","fill":"transparent","strokeDashArray":"","opacity":1,"gradient":{"type":"None"}},"targetDecorator":{"shape":"Arrow","style":{"fill":"#B6B6B4","strokeColor":"#B6B6B4","strokeWidth":1,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"}},"width":10,"height":10,"pivot":{"x":0,"y":0.5}},"segments":[{"type":"Orthogonal","direction":null}],"sourcePortID":"","targetPortID":"","targetPoint":{"x":500,"y":245},"connectorSpacing":13,"sourcePadding":0,"targetPadding":0,"sourcePoint":{"x":450,"y":245},"sourceDecorator":{"shape":"None","width":10,"height":10,"pivot":{"x":0,"y":0.5},"style":{"fill":"black","strokeColor":"black","strokeWidth":1,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"}}},"cornerRadius":0,"wrapper":{"actualSize":{"width":50,"height":0},"offsetX":475,"offsetY":245},"fixedUserHandles":[],"ports":[],"visible":true,"constraints":994878,"flipMode":"All","parentId":""},{"shape":{"type":"None"},"id":"getManagerDetails-initiateApprovalWithManager","sourceID":"getManagerDetails","targetID":"initiateApprovalWithManager","addInfo":{"level":4},"annotations":[{"id":"HANdM","content":"","height":8,"width":8,"offset":0,"style":{"strokeWidth":0,"strokeColor":"transparent","fill":"transparent","fontSize":14,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"},"fontFamily":"Arial","textOverflow":"Wrap","textDecoration":"None","whiteSpace":"CollapseSpace","textWrapping":"WrapWithOverflow","textAlign":"Center","color":"black","italic":false,"bold":false},"annotationType":"String","constraints":4,"visibility":true,"rotateAngle":0,"horizontalAlignment":"Center","verticalAlignment":"Center","margin":{"left":0,"right":0,"bottom":0,"top":0},"alignment":"Center","segmentAngle":false,"displacement":{"x":0,"y":0}}],"zIndex":16,"type":"Orthogonal","style":{"strokeWidth":1,"strokeColor":"#B6B6B4","fill":"transparent","strokeDashArray":"","opacity":1,"gradient":{"type":"None"}},"targetDecorator":{"shape":"Arrow","style":{"fill":"#B6B6B4","strokeColor":"#B6B6B4","strokeWidth":1,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"}},"width":10,"height":10,"pivot":{"x":0,"y":0.5}},"segments":[{"type":"Orthogonal","direction":null}],"sourcePortID":"","targetPortID":"","targetPoint":{"x":550,"y":405},"connectorSpacing":13,"sourcePadding":0,"targetPadding":0,"sourcePoint":{"x":550,"y":285},"sourceDecorator":{"shape":"None","width":10,"height":10,"pivot":{"x":0,"y":0.5},"style":{"fill":"black","strokeColor":"black","strokeWidth":1,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"}}},"cornerRadius":0,"wrapper":{"actualSize":{"width":0,"height":120},"offsetX":550,"offsetY":345},"fixedUserHandles":[],"ports":[],"visible":true,"constraints":994878,"flipMode":"All","parentId":""},{"shape":{"type":"None"},"id":"initiateApprovalWithManager-checkApprovalStatus","sourceID":"initiateApprovalWithManager","targetID":"checkApprovalStatus","addInfo":{"level":5},"annotations":[{"id":"XvuH5","content":"","height":8,"width":8,"offset":0,"style":{"strokeWidth":0,"strokeColor":"transparent","fill":"transparent","fontSize":14,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"},"fontFamily":"Arial","textOverflow":"Wrap","textDecoration":"None","whiteSpace":"CollapseSpace","textWrapping":"WrapWithOverflow","textAlign":"Center","color":"black","italic":false,"bold":false},"annotationType":"String","constraints":4,"visibility":true,"rotateAngle":0,"horizontalAlignment":"Center","verticalAlignment":"Center","margin":{"left":0,"right":0,"bottom":0,"top":0},"alignment":"Center","segmentAngle":false,"displacement":{"x":0,"y":0}}],"zIndex":17,"type":"Orthogonal","style":{"strokeWidth":1,"strokeColor":"#B6B6B4","fill":"transparent","strokeDashArray":"","opacity":1,"gradient":{"type":"None"}},"targetDecorator":{"shape":"Arrow","style":{"fill":"#B6B6B4","strokeColor":"#B6B6B4","strokeWidth":1,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"}},"width":10,"height":10,"pivot":{"x":0,"y":0.5}},"segments":[{"type":"Orthogonal","direction":null}],"sourcePortID":"","targetPortID":"","targetPoint":{"x":660,"y":445},"connectorSpacing":13,"sourcePadding":0,"targetPadding":0,"sourcePoint":{"x":600,"y":445},"sourceDecorator":{"shape":"None","width":10,"height":10,"pivot":{"x":0,"y":0.5},"style":{"fill":"black","strokeColor":"black","strokeWidth":1,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"}}},"cornerRadius":0,"wrapper":{"actualSize":{"width":60,"height":0},"offsetX":630,"offsetY":445},"fixedUserHandles":[],"ports":[],"visible":true,"constraints":994878,"flipMode":"All","parentId":""},{"shape":{"type":"None"},"id":"checkApprovalStatus-setStatusAsRejected","sourceID":"checkApprovalStatus","targetID":"setStatusAsRejected","addInfo":{"level":6},"annotations":[{"id":"CrRG5","content":"Rejected","style":{"strokeWidth":0,"strokeColor":"transparent","fill":"white","fontSize":14,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"},"fontFamily":"Arial","textOverflow":"Wrap","textDecoration":"None","whiteSpace":"CollapseSpace","textWrapping":"WrapWithOverflow","textAlign":"Center","color":"black","italic":false,"bold":false},"annotationType":"String","constraints":4,"visibility":true,"rotateAngle":0,"horizontalAlignment":"Center","verticalAlignment":"Center","margin":{"left":0,"right":0,"bottom":0,"top":0},"offset":0.5,"alignment":"Center","segmentAngle":false},{"id":"SgPGQ","content":"","height":8,"width":8,"offset":0,"style":{"strokeWidth":0,"strokeColor":"transparent","fill":"transparent","strokeDashArray":"","opacity":1,"gradient":{"type":"None"},"fontSize":12,"fontFamily":"Arial","textOverflow":"Wrap","textDecoration":"None","whiteSpace":"CollapseSpace","textWrapping":"WrapWithOverflow","textAlign":"Center","color":"black","italic":false,"bold":false},"annotationType":"String","constraints":4,"visibility":true,"rotateAngle":0,"horizontalAlignment":"Center","verticalAlignment":"Center","margin":{"left":0,"right":0,"bottom":0,"top":0},"alignment":"Center","segmentAngle":false,"displacement":{"x":0,"y":0}}],"zIndex":18,"type":"Orthogonal","style":{"strokeWidth":1,"strokeColor":"#B6B6B4","fill":"transparent","strokeDashArray":"","opacity":1,"gradient":{"type":"None"}},"targetDecorator":{"shape":"Arrow","style":{"fill":"#B6B6B4","strokeColor":"#B6B6B4","strokeWidth":1,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"}},"width":10,"height":10,"pivot":{"x":0,"y":0.5}},"segments":[{"type":"Orthogonal","direction":null}],"sourcePortID":"","targetPortID":"","targetPoint":{"x":700,"y":285},"connectorSpacing":13,"sourcePadding":0,"targetPadding":0,"sourcePoint":{"x":700,"y":415},"sourceDecorator":{"shape":"None","width":10,"height":10,"pivot":{"x":0,"y":0.5},"style":{"fill":"black","strokeColor":"black","strokeWidth":1,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"}}},"cornerRadius":0,"wrapper":{"actualSize":{"width":0,"height":130},"offsetX":700,"offsetY":350},"fixedUserHandles":[],"ports":[],"visible":true,"constraints":994878,"flipMode":"All","parentId":""},{"shape":{"type":"None"},"id":"checkApprovalStatus-checkIfItIsAnInternaltionalTravel","sourceID":"checkApprovalStatus","targetID":"checkIfItIsAnInternaltionalTravel","annotations":[{"id":"vvnwf","content":"Accepted","style":{"strokeWidth":0,"strokeColor":"transparent","fill":"white","fontSize":14,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"},"fontFamily":"Arial","textOverflow":"Wrap","textDecoration":"None","whiteSpace":"CollapseSpace","textWrapping":"WrapWithOverflow","textAlign":"Center","color":"black","italic":false,"bold":false},"alignment":"Before","displacement":{"x":0,"y":10},"annotationType":"String","constraints":4,"visibility":true,"rotateAngle":0,"horizontalAlignment":"Center","verticalAlignment":"Center","margin":{"left":0,"right":0,"bottom":0,"top":0},"offset":0.5,"segmentAngle":false},{"id":"CpHnx","content":"","height":8,"width":8,"offset":0,"style":{"strokeWidth":0,"strokeColor":"transparent","fill":"transparent","strokeDashArray":"","opacity":1,"gradient":{"type":"None"},"fontSize":12,"fontFamily":"Arial","textOverflow":"Wrap","textDecoration":"None","whiteSpace":"CollapseSpace","textWrapping":"WrapWithOverflow","textAlign":"Center","color":"black","italic":false,"bold":false},"annotationType":"String","constraints":4,"visibility":true,"rotateAngle":0,"horizontalAlignment":"Center","verticalAlignment":"Center","margin":{"left":0,"right":0,"bottom":0,"top":0},"alignment":"Center","segmentAngle":false,"displacement":{"x":0,"y":0}}],"addInfo":{"level":7},"zIndex":19,"type":"Orthogonal","style":{"strokeWidth":1,"strokeColor":"#B6B6B4","fill":"transparent","strokeDashArray":"","opacity":1,"gradient":{"type":"None"}},"targetDecorator":{"shape":"Arrow","style":{"fill":"#B6B6B4","strokeColor":"#B6B6B4","strokeWidth":1,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"}},"width":10,"height":10,"pivot":{"x":0,"y":0.5}},"segments":[{"type":"Orthogonal","direction":null}],"sourcePortID":"","targetPortID":"","targetPoint":{"x":810,"y":445},"connectorSpacing":13,"sourcePadding":0,"targetPadding":0,"sourcePoint":{"x":740,"y":445},"sourceDecorator":{"shape":"None","width":10,"height":10,"pivot":{"x":0,"y":0.5},"style":{"fill":"black","strokeColor":"black","strokeWidth":1,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"}}},"cornerRadius":0,"wrapper":{"actualSize":{"width":70,"height":0},"offsetX":775,"offsetY":445},"fixedUserHandles":[],"ports":[],"visible":true,"constraints":994878,"flipMode":"All","parentId":""},{"shape":{"type":"None"},"id":"checkIfItIsAnInternaltionalTravel-setStatusAsAccepted","sourceID":"checkIfItIsAnInternaltionalTravel","targetID":"setStatusAsAccepted","annotations":[{"id":"Vi7uZ","content":"No","offset":0.4,"style":{"strokeWidth":0,"strokeColor":"transparent","fill":"white","fontSize":14,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"},"fontFamily":"Arial","textOverflow":"Wrap","textDecoration":"None","whiteSpace":"CollapseSpace","textWrapping":"WrapWithOverflow","textAlign":"Center","color":"black","italic":false,"bold":false},"annotationType":"String","constraints":4,"visibility":true,"rotateAngle":0,"horizontalAlignment":"Center","verticalAlignment":"Center","margin":{"left":0,"right":0,"bottom":0,"top":0},"alignment":"Center","segmentAngle":false},{"id":"b2ATX","content":"","height":8,"width":8,"offset":0,"style":{"strokeWidth":0,"strokeColor":"transparent","fill":"transparent","strokeDashArray":"","opacity":1,"gradient":{"type":"None"},"fontSize":12,"fontFamily":"Arial","textOverflow":"Wrap","textDecoration":"None","whiteSpace":"CollapseSpace","textWrapping":"WrapWithOverflow","textAlign":"Center","color":"black","italic":false,"bold":false},"annotationType":"String","constraints":4,"visibility":true,"rotateAngle":0,"horizontalAlignment":"Center","verticalAlignment":"Center","margin":{"left":0,"right":0,"bottom":0,"top":0},"alignment":"Center","segmentAngle":false,"displacement":{"x":0,"y":0}}],"addInfo":{"level":8},"zIndex":20,"type":"Orthogonal","style":{"strokeWidth":1,"strokeColor":"#B6B6B4","fill":"transparent","strokeDashArray":"","opacity":1,"gradient":{"type":"None"}},"targetDecorator":{"shape":"Arrow","style":{"fill":"#B6B6B4","strokeColor":"#B6B6B4","strokeWidth":1,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"}},"width":10,"height":10,"pivot":{"x":0,"y":0.5}},"segments":[{"type":"Orthogonal","direction":null}],"sourcePortID":"","targetPortID":"","targetPoint":{"x":850,"y":285},"connectorSpacing":13,"sourcePadding":0,"targetPadding":0,"sourcePoint":{"x":850,"y":415},"sourceDecorator":{"shape":"None","width":10,"height":10,"pivot":{"x":0,"y":0.5},"style":{"fill":"black","strokeColor":"black","strokeWidth":1,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"}}},"cornerRadius":0,"wrapper":{"actualSize":{"width":0,"height":130},"offsetX":850,"offsetY":350},"fixedUserHandles":[],"ports":[],"visible":true,"constraints":994878,"flipMode":"All","parentId":""},{"shape":{"type":"None"},"id":"checkIfItIsAnInternaltionalTravel-initialteApprovalWithNextLevelManager","sourceID":"checkIfItIsAnInternaltionalTravel","targetID":"initialteApprovalWithNextLevelManager","annotations":[{"id":"iNfD4","content":"Yes","offset":0.4,"style":{"strokeWidth":0,"strokeColor":"transparent","fill":"white","fontSize":14,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"},"fontFamily":"Arial","textOverflow":"Wrap","textDecoration":"None","whiteSpace":"CollapseSpace","textWrapping":"WrapWithOverflow","textAlign":"Center","color":"black","italic":false,"bold":false},"alignment":"Before","displacement":{"x":0,"y":10},"annotationType":"String","constraints":4,"visibility":true,"rotateAngle":0,"horizontalAlignment":"Center","verticalAlignment":"Center","margin":{"left":0,"right":0,"bottom":0,"top":0},"segmentAngle":false},{"id":"tDi9H","content":"","height":8,"width":8,"offset":0,"style":{"strokeWidth":0,"strokeColor":"transparent","fill":"transparent","strokeDashArray":"","opacity":1,"gradient":{"type":"None"},"fontSize":12,"fontFamily":"Arial","textOverflow":"Wrap","textDecoration":"None","whiteSpace":"CollapseSpace","textWrapping":"WrapWithOverflow","textAlign":"Center","color":"black","italic":false,"bold":false},"annotationType":"String","constraints":4,"visibility":true,"rotateAngle":0,"horizontalAlignment":"Center","verticalAlignment":"Center","margin":{"left":0,"right":0,"bottom":0,"top":0},"alignment":"Center","segmentAngle":false,"displacement":{"x":0,"y":0}}],"addInfo":{"level":9},"zIndex":21,"type":"Orthogonal","style":{"strokeWidth":1,"strokeColor":"#B6B6B4","fill":"transparent","strokeDashArray":"","opacity":1,"gradient":{"type":"None"}},"targetDecorator":{"shape":"Arrow","style":{"fill":"#B6B6B4","strokeColor":"#B6B6B4","strokeWidth":1,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"}},"width":10,"height":10,"pivot":{"x":0,"y":0.5}},"segments":[{"type":"Orthogonal","direction":null}],"sourcePortID":"","targetPortID":"","targetPoint":{"x":950,"y":445},"connectorSpacing":13,"sourcePadding":0,"targetPadding":0,"sourcePoint":{"x":890,"y":445},"sourceDecorator":{"shape":"None","width":10,"height":10,"pivot":{"x":0,"y":0.5},"style":{"fill":"black","strokeColor":"black","strokeWidth":1,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"}}},"cornerRadius":0,"wrapper":{"actualSize":{"width":60,"height":0},"offsetX":920,"offsetY":445},"fixedUserHandles":[],"ports":[],"visible":true,"constraints":994878,"flipMode":"All","parentId":""},{"shape":{"type":"None"},"id":"initialteApprovalWithNextLevelManager-checkLevel2-ApprovalStatus","sourceID":"initialteApprovalWithNextLevelManager","targetID":"checkLevel2-ApprovalStatus","addInfo":{"level":10},"annotations":[{"id":"TxsOH","content":"","height":8,"width":8,"offset":0,"style":{"strokeWidth":0,"strokeColor":"transparent","fill":"transparent","fontSize":14,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"},"fontFamily":"Arial","textOverflow":"Wrap","textDecoration":"None","whiteSpace":"CollapseSpace","textWrapping":"WrapWithOverflow","textAlign":"Center","color":"black","italic":false,"bold":false},"annotationType":"String","constraints":4,"visibility":true,"rotateAngle":0,"horizontalAlignment":"Center","verticalAlignment":"Center","margin":{"left":0,"right":0,"bottom":0,"top":0},"alignment":"Center","segmentAngle":false,"displacement":{"x":0,"y":0}}],"zIndex":22,"type":"Orthogonal","style":{"strokeWidth":1,"strokeColor":"#B6B6B4","fill":"transparent","strokeDashArray":"","opacity":1,"gradient":{"type":"None"}},"targetDecorator":{"shape":"Arrow","style":{"fill":"#B6B6B4","strokeColor":"#B6B6B4","strokeWidth":1,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"}},"width":10,"height":10,"pivot":{"x":0,"y":0.5}},"segments":[{"type":"Orthogonal","direction":null}],"sourcePortID":"","targetPortID":"","targetPoint":{"x":1090,"y":445},"connectorSpacing":13,"sourcePadding":0,"targetPadding":0,"sourcePoint":{"x":1050,"y":445},"sourceDecorator":{"shape":"None","width":10,"height":10,"pivot":{"x":0,"y":0.5},"style":{"fill":"black","strokeColor":"black","strokeWidth":1,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"}}},"cornerRadius":0,"wrapper":{"actualSize":{"width":40,"height":0},"offsetX":1070,"offsetY":445},"fixedUserHandles":[],"ports":[],"visible":true,"constraints":994878,"flipMode":"All","parentId":""},{"shape":{"type":"None"},"id":"checkLevel2-ApprovalStatus-setNextApprovalStatusAsRejected","sourceID":"checkLevel2-ApprovalStatus","targetID":"setNextApprovalStatusAsRejected","annotations":[{"id":"vuJBl","content":"Rejected","offset":0.4,"style":{"strokeWidth":0,"strokeColor":"transparent","fill":"white","fontSize":14,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"},"fontFamily":"Arial","textOverflow":"Wrap","textDecoration":"None","whiteSpace":"CollapseSpace","textWrapping":"WrapWithOverflow","textAlign":"Center","color":"black","italic":false,"bold":false},"annotationType":"String","constraints":4,"visibility":true,"rotateAngle":0,"horizontalAlignment":"Center","verticalAlignment":"Center","margin":{"left":0,"right":0,"bottom":0,"top":0},"alignment":"Center","segmentAngle":false},{"id":"f9rUi","content":"","height":8,"width":8,"offset":0,"style":{"strokeWidth":0,"strokeColor":"transparent","fill":"transparent","strokeDashArray":"","opacity":1,"gradient":{"type":"None"},"fontSize":12,"fontFamily":"Arial","textOverflow":"Wrap","textDecoration":"None","whiteSpace":"CollapseSpace","textWrapping":"WrapWithOverflow","textAlign":"Center","color":"black","italic":false,"bold":false},"annotationType":"String","constraints":4,"visibility":true,"rotateAngle":0,"horizontalAlignment":"Center","verticalAlignment":"Center","margin":{"left":0,"right":0,"bottom":0,"top":0},"alignment":"Center","segmentAngle":false,"displacement":{"x":0,"y":0}}],"addInfo":{"level":11},"zIndex":23,"type":"Orthogonal","style":{"strokeWidth":1,"strokeColor":"#B6B6B4","fill":"transparent","strokeDashArray":"","opacity":1,"gradient":{"type":"None"}},"targetDecorator":{"shape":"Arrow","style":{"fill":"#B6B6B4","strokeColor":"#B6B6B4","strokeWidth":1,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"}},"width":10,"height":10,"pivot":{"x":0,"y":0.5}},"segments":[{"type":"Orthogonal","direction":null}],"sourcePortID":"","targetPortID":"","targetPoint":{"x":1100,"y":285},"connectorSpacing":13,"sourcePadding":0,"targetPadding":0,"sourcePoint":{"x":1130,"y":415},"sourceDecorator":{"shape":"None","width":10,"height":10,"pivot":{"x":0,"y":0.5},"style":{"fill":"black","strokeColor":"black","strokeWidth":1,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"}}},"cornerRadius":0,"wrapper":{"actualSize":{"width":30,"height":130},"offsetX":1115,"offsetY":350},"fixedUserHandles":[],"ports":[],"visible":true,"constraints":994878,"flipMode":"All","parentId":""},{"shape":{"type":"None"},"id":"checkLevel2-ApprovalStatus-setNextApprovalStatusAsAccepted","sourceID":"checkLevel2-ApprovalStatus","targetID":"setNextApprovalStatusAsAccepted","sourcePortID":"right_port","annotations":[{"id":"Th5Zc","content":"Approved","style":{"strokeWidth":0,"strokeColor":"transparent","fill":"white","fontSize":14,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"},"fontFamily":"Arial","textOverflow":"Wrap","textDecoration":"None","whiteSpace":"CollapseSpace","textWrapping":"WrapWithOverflow","textAlign":"Center","color":"black","italic":false,"bold":false},"annotationType":"String","constraints":4,"visibility":true,"rotateAngle":0,"horizontalAlignment":"Center","verticalAlignment":"Center","margin":{"left":0,"right":0,"bottom":0,"top":0},"offset":0.5,"alignment":"Center","segmentAngle":false},{"id":"XQHwT","content":"","height":8,"width":8,"offset":0,"style":{"strokeWidth":0,"strokeColor":"transparent","fill":"transparent","strokeDashArray":"","opacity":1,"gradient":{"type":"None"},"fontSize":12,"fontFamily":"Arial","textOverflow":"Wrap","textDecoration":"None","whiteSpace":"CollapseSpace","textWrapping":"WrapWithOverflow","textAlign":"Center","color":"black","italic":false,"bold":false},"annotationType":"String","constraints":4,"visibility":true,"rotateAngle":0,"horizontalAlignment":"Center","verticalAlignment":"Center","margin":{"left":0,"right":0,"bottom":0,"top":0},"alignment":"Center","segmentAngle":false,"displacement":{"x":0,"y":0}}],"addInfo":{"level":12},"zIndex":24,"type":"Orthogonal","style":{"strokeWidth":1,"strokeColor":"#B6B6B4","fill":"transparent","strokeDashArray":"","opacity":1,"gradient":{"type":"None"}},"targetDecorator":{"shape":"Arrow","style":{"fill":"#B6B6B4","strokeColor":"#B6B6B4","strokeWidth":1,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"}},"width":10,"height":10,"pivot":{"x":0,"y":0.5}},"segments":[{"type":"Orthogonal","direction":null}],"targetPortID":"","targetPoint":{"x":1250,"y":285},"connectorSpacing":13,"sourcePadding":0,"targetPadding":0,"sourcePoint":{"x":1170,"y":445},"sourceDecorator":{"shape":"None","width":10,"height":10,"pivot":{"x":0,"y":0.5},"style":{"fill":"black","strokeColor":"black","strokeWidth":1,"strokeDashArray":"","opacity":1,"gradient":{"type":"None"}}},"cornerRadius":0,"wrapper":{"actualSize":{"width":80,"height":160},"offsetX":1210,"offsetY":365},"fixedUserHandles":[],"ports":[],"visible":true,"constraints":994878,"flipMode":"All","parentId":""}],"tool":4,"scrollSettings":{"currentZoom":0.8979658060097132,"viewPortWidth":1153.5999755859375,"viewPortHeight":645,"horizontalOffset":38.400001525878906,"verticalOffset":0,"padding":{"left":0,"right":0,"top":0,"bottom":0},"scrollLimit":"Diagram","minZoom":0.2,"maxZoom":30},"snapSettings":{"constraints":0,"gridType":"Lines","verticalGridlines":{"lineIntervals":[1.25,18.75,0.25,19.75,0.25,19.75,0.25,19.75,0.25,19.75],"snapIntervals":[20]},"horizontalGridlines":{"lineIntervals":[1.25,18.75,0.25,19.75,0.25,19.75,0.25,19.75,0.25,19.75],"snapIntervals":[20]}},"pageSettings":{"background":{"color":"white","source":""},"boundaryConstraints":"Infinity","orientation":"Landscape","height":null,"width":null,"showPageBreaks":false,"fitOptions":{"canFit":false}},"getNodeDefaults":{},"getConnectorDefaults":{},"created":{},"enableRtl":false,"locale":"en","enablePersistence":false,"rulerSettings":{"showRulers":false},"backgroundColor":"transparent","constraints":500,"layout":{"type":"None","enableAnimation":true,"connectionPointOrigin":"SamePoint","arrangement":"Nonlinear","enableRouting":false},"contextMenuSettings":{},"dataSourceSettings":{"dataManager":null,"dataSource":null,"crudAction":{"read":""},"connectionDataSource":{"crudAction":{"read":""}}},"mode":"SVG","layers":[{"id":"default_layer","visible":true,"lock":false,"objects":["newTravelRequestRecieved","getTravelRequestDetails","getRequesterProfile","getManagerDetails","setStatusAsRejected","setStatusAsAccepted","setNextApprovalStatusAsRejected","setNextApprovalStatusAsAccepted","initiateApprovalWithManager","checkApprovalStatus","checkIfItIsAnInternaltionalTravel","initialteApprovalWithNextLevelManager","checkLevel2-ApprovalStatus","newTravelRequestRecieved-getTravelRequestDetails","getTravelRequestDetails-getRequesterProfile","getRequesterProfile-getManagerDetails","getManagerDetails-initiateApprovalWithManager","initiateApprovalWithManager-checkApprovalStatus","checkApprovalStatus-setStatusAsRejected","checkApprovalStatus-checkIfItIsAnInternaltionalTravel","checkIfItIsAnInternaltionalTravel-setStatusAsAccepted","checkIfItIsAnInternaltionalTravel-initialteApprovalWithNextLevelManager","initialteApprovalWithNextLevelManager-checkLevel2-ApprovalStatus","checkLevel2-ApprovalStatus-setNextApprovalStatusAsRejected","checkLevel2-ApprovalStatus-setNextApprovalStatusAsAccepted"],"zIndex":0,"objectZIndex":24}],"diagramSettings":{"inversedAlignment":true},"selectedItems":{"nodes":[],"connectors":[],"wrapper":null,"constraints":16382,"selectedObjects":[]},"basicElements":[],"tooltip":{"content":""},"commandManager":{"commands":[]},"version":17.1}');
        diagram.fitToPage({ region: 'Content', mode: 'Width' });
    }



};


