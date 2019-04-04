
ej.diagrams.Diagram.Inject(ej.diagrams.BpmnDiagrams);


function getcontent() {
    var tooltipContent = document.createElement('div');
    tooltipContent.innerHTML = '<div style="background-color: #f4f4f4; color: black; border-width:1px;border-style: solid;border-color: #d3d3d3; border-radius: 8px;white-space: nowrap;"> <span style="margin: 10px;"> Tooltip !!! </span> </div>';
    return tooltipContent;
}


this.default = function () {
        var nodes = [
            {
                id: 'node1', width: 60, height: 60, offsetX: 35, offsetY: 120,
                annotations: [{ content: 'Customer query', offset: { x: 0.5, y: 1 }, margin: { top: 15 } }],
                tooltip: { content: 'Queries from the customer' },
                shape: { type: 'Bpmn', shape: 'Event', event: { event: 'Start', trigger: 'Message' } }
            },
            {
                id: 'node2', width: 75, height: 70, offsetX: 140, offsetY: 120,
                annotations: [{ content: 'Enough details?', offset: { x: 0.50, y: 0.50 } }],
                tooltip: { content: 'Whether the provided information is enough?' }, shape: { type: 'Bpmn', shape: 'Gateway' }
            },
            {
                id: 'node3', width: 60, height: 50, offsetX: 270, offsetY: 120,
                annotations: [{ content: 'Analyse', offset: { x: 0.50, y: 0.50 } }],
                tooltip: { content: 'Analysing the query' },
                shape: { type: 'Bpmn', shape: 'Activity', activity: { activity: 'Task' } },
            },
            {
                id: 'node4', width: 75, height: 70, offsetX: 370, offsetY: 120, shape: {
                    type: 'Bpmn', shape: 'Gateway',
                    gateway: { type: 'Exclusive' }
                },
                tooltip: { content: 'proceed to validate?' },
            },
            {
                id: 'node5', width: 75, height: 70, offsetX: 570, offsetY: 120,
                annotations: [{ content: 'Validate', offset: { x: 0.50, y: 0.50 } }],
                tooltip: { content: 'Whether the reported/requested bug/feature is valid?' }, shape: { type: 'Bpmn', shape: 'Gateway' }
            },
            {
                id: 'node6', width: 60, height: 60, offsetX: 720, offsetY: 120,
                tooltip: { content: 'Send the invalid message to customer' },
                shape: { type: 'Bpmn', shape: 'Event', event: { event: 'End', trigger: 'Message' } }
            },
            {
                id: 'node7', width: 60, height: 50, offsetX: 140, offsetY: 280,
                annotations: [{ content: 'Request', offset: { x: 0.50, y: 0.50 }, margin: { top: 5 } }],
                tooltip: { content: 'Requesting for more information' },
                shape: { type: 'Bpmn', shape: 'Activity', activity: { activity: 'Task', task: { type: 'Send' } } }
            },
            {
                id: 'node8', width: 60, height: 60, offsetX: 370, offsetY: 280,
                tooltip: { content: 'Share the User Guide/Knowledge Base link' },
                shape: { type: 'Bpmn', shape: 'Event', event: { event: 'Start', trigger: 'Message' } }
            },
            {
                id: 'node9', width: 70, height: 50, offsetX: 570, offsetY: 280,
                annotations: [{ content: 'Log bug/feature', offset: { x: 0.50, y: 0.50 } }], tooltip: { content: 'Log the bug/feature' },
                shape: { type: 'Bpmn', shape: 'Activity', activity: { activity: 'Task' } }
            },
            {
                id: 'node10', width: 75, height: 55, offsetX: 390, offsetY: 430,
                annotations: [{ content: 'Implement', offset: { x: 0.50, y: 0.50 } }], tooltip: { content: 'Fix the bug/Add the feature' },
                shape: {
                    type: 'Bpmn', shape: 'Activity', activity: {
                        activity: 'SubProcess', subProcess: {
                            collapsed: false,
                            events: [{ event: 'Intermediate', trigger: 'Timer', offset: { x: 0.5, y: 1 }, width: 25, height: 25 }]
                        }
                    }
                }
            },
            {
                id: 'node12', width: 60, height: 60, offsetX: 265, offsetY: 430, tooltip: { content: 'Provide the solution' },
                shape: { type: 'Bpmn', shape: 'Event', event: { event: 'End', trigger: 'Message' } }
            },
            {
                id: 'node13', width: 60, height: 60, offsetX: 720, offsetY: 430, tooltip: { content: 'Share the task details' },
                shape: { type: 'Bpmn', shape: 'Event', event: { event: 'End', trigger: 'Message' } }
            },
            {
                id: 'node14', width: 60, height: 60, offsetX: 570, offsetY: 430, shape: {
                    type: 'Bpmn', shape: 'Gateway',
                    gateway: { type: 'Parallel' }
                },
                tooltip: { content: 'can log?' },
            },
        ];
    var connectors = [
        { id: 'connector1', sourceID: 'node1', targetID: 'node2' },
        { id: 'connector2', sourceID: 'node2', targetID: 'node3' },
        { id: 'connector3', sourceID: 'node3', targetID: 'node4' },
        {
            id: 'connector4', sourceID: 'node4', targetID: 'node5',
            annotations: [{ content: 'Feature/Bug', offset: 0.5, style: { fill: 'white', textWrapping: 'Wrap' } }]
        },
        {
            id: 'connector5', sourceID: 'node5', targetID: 'node6',
            annotations: [{ content: 'Invalid', offset: 0.5, style: { fill: 'white' } }]
        },
        { id: 'connector6', sourceID: 'node2', targetID: 'node7' },
        {
            id: 'connector7', sourceID: 'node4', targetID: 'node8',
            annotations: [{ content: 'How to?', offset: 0.5, style: { fill: 'white' } }]
        },
        { id: 'connector8', sourceID: 'node5', targetID: 'node9' },
        { id: 'connector9', sourceID: 'node14', targetID: 'node13' },
        {
            id: 'connector10', sourceID: 'node7', targetID: 'node3', type: 'Orthogonal',
            segments: [{ type: 'Orthogonal', length: 100, direction: 'Right' }, { type: 'Orthogonal', length: 100, direction: 'Top' }]
        },
        { id: 'connector11', sourceID: 'node14', targetID: 'node10' },
        { id: 'connector12', sourceID: 'node10', targetID: 'node12' },
        { id: 'connector13', sourceID: 'node9', targetID: 'node14' },
    ];
    function getcontent() {
        var tooltipContent = document.createElement('div');
        tooltipContent.innerHTML =
            '<div style="border-width:1px;"><span> Tooltip !!! </span> </div>';
        return tooltipContent;
    }
    function getConnectorDefaults(connector, diagram) {
        connector.type = 'Orthogonal';
        connector.style = { strokeWidth: 2 };
        return connector;
    }
    function getNodeDefaults(obj) {
        obj.offsetX += 0.5;
        obj.offsetY += 0.5;
        obj.constraints = ej.diagrams.NodeConstraints.Default | ej.diagrams.NodeConstraints.Tooltip;
        obj.style = { strokeWidth: 2 };
        return obj;
    }

    //Initializes diagram control
    var diagram = new ej.diagrams.Diagram({
        width: '100%', height: '645px', connectors: connectors, nodes: nodes,
        getConnectorDefaults: getConnectorDefaults,
        getNodeDefaults: getNodeDefaults,
        snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
        tooltip: {
            content: getcontent(), position: 'TopLeft', relativeMode: 'Object',
            animation: { open: { effect: 'FadeZoomIn', delay: 100 }, close: { effect: 'FadeZoomOut', delay: 100 } }
        }
    });
    diagram.appendTo('#diagram');
    var modevalue = [
        { type: 'Object', text: 'Object' },
        { type: 'Mouse', text: 'Mouse' },
    ];
    var positionValue = [
        { type: 'TopLeft', text: 'TopLeft' },
        { type: 'TopCenter', text: 'TopCenter' },
        { type: 'TopRight', text: 'TopRight' },
        { type: 'BottomLeft', text: 'BottomLeft' },
        { type: 'BottomCenter', text: 'BottomCenter' },
        { type: 'BottomRight', text: 'BottomRight' },
        { type: 'LeftTop', text: 'LeftTop' },
        { type: 'LeftCenter', text: 'LeftCenter' },
        { type: 'LeftBottom', text: 'LeftBottom' },
        { type: 'RightTop', text: 'RightTop' },
        { type: 'RightCenter', text: 'RightCenter' },
        { type: 'RightBottom', text: 'RightBottom' },
    ];
    var effectValue = [
        { type: 'FadeIn', text: 'FadeIn' },
        { type: 'FadeOut', text: 'FadeOut' },
        { type: 'FadeZoomIn', text: 'FadeZoomIn' },
        { type: 'FadeZoomOut', text: 'FadeZoomOut' },
        { type: 'FlipXDownIn', text: 'FlipXDownIn' },
        { type: 'FlipXDownOut', text: 'FlipXDownOut' },
        { type: 'FlipXUpIn', text: 'FlipXUpIn' },
        { type: 'FlipXUpOut', text: 'FlipXUpOut' },
        { type: 'FlipYLeftIn', text: 'FlipYLeftIn' },
        { type: 'FlipYLeftOut', text: 'FlipYLeftOut' },
        { type: 'FlipYRightIn', text: 'FlipYRightIn' },
        { type: 'FlipYRightOut', text: 'FlipYRightOut' },
        { type: 'ZoomIn', text: 'ZoomIn' },
        { type: 'ZoomOut', text: 'ZoomOut' },
        { type: 'None', text: 'None' },
    ];
    var mode = new ej.dropdowns.DropDownList({
        dataSource: modevalue,
        fields: { value: 'type', text: 'text' }, popupWidth: 150,
        width: '100%', placeholder: 'select a font type', index: 0,
        change: function () {
            if (mode.value === 'Mouse') {
                diagram.tooltip.relativeMode = 'Mouse';
            }
            else {
                diagram.tooltip.relativeMode = 'Object';
            }
        }
    });
    mode.appendTo('#mode');
    var position = new ej.dropdowns.DropDownList({
        dataSource: positionValue,
        fields: { value: 'type', text: 'text' }, popupWidth: 150,
        width: '100%', placeholder: 'select a font type', index: 0,
        change: function (args) {
            var nodes = diagram.nodes;
            for (var i = 0; i < nodes.length; i++) {
                if (nodes[i].tooltip) {
                    nodes[i].tooltip.position = args.value;
                    diagram.dataBind();
                }
            }
        }
    });
    position.appendTo('#position');
    var effect = new ej.dropdowns.DropDownList({
        dataSource: effectValue,
        fields: { value: 'type', text: 'text' }, popupWidth: 150,
        width: '100%', placeholder: 'select a effect type', index: 0,
        change: function (args) {
            diagram.tooltip.animation.open.effect = args.value;
            diagram.tooltip.animation.close.effect = args.value;
        }
    });
    effect.appendTo('#effect');
    var textContent = new ej.inputs.TextBox({
        placeholder: 'Enter text content',
        floatLabelType: 'Auto',
        change: function (args) {
            diagram.tooltip.content = args.value.toString();
            diagram.dataBind();
        }
    });
    textContent.appendTo('#textContent');
    var htmlContent = new ej.inputs.TextBox({
        placeholder: 'Enter html content',
        floatLabelType: 'Auto',
        change: function (args) {
            var tooltipContent = document.createElement('div');
            var description = args.value.toString();
            tooltipContent.innerHTML =
                '<div style="border-width:1px;"><span> ' + description + ' </span></div>';
            diagram.tooltip.content = tooltipContent;
            diagram.dataBind();
        }
    });
    htmlContent.appendTo('#htmlContent');
    var animation = new ej.inputs.NumericTextBox({
        format: '###.##',
        change: function (args) {
            diagram.tooltip.animation.close.duration = args.value;
            diagram.tooltip.animation.open.duration = args.value;
        }
    });
    animation.appendTo('#duration');
    var temp = '<div style="background-color: #f4f4f4; color: black; border-width:1px;' +
        'border-style: solid;border-color: #d3d3d3; border-radius: 8px;white-space: nowrap;">' +
        ' <span style="margin: 10px;">';
    diagram.fitToPage({ mode: 'Width' });
};