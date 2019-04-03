ej.diagrams.Diagram.Inject(ej.diagrams.UndoRedo);
var diagram;
var nodes = [
    {
        id: 'node1', offsetX: 400, offsetY: 30, style: { fill: '#FFB2B2', strokeColor: '#FFB2B2' }, width: 70, height: 40,
        shape: { type: 'Flow', shape: 'Terminator' },
        annotations: [{ id: 'label1', content: 'Start' }],
    },
    {
        id: 'node2', offsetX: 400, offsetY: 100, style: { fill: '#DCDCDC', strokeColor: '#DCDCDC' },
        shape: { type: 'Flow', shape: 'Process' }, annotations: [{ id: 'label1', content: 'Design' }],
        ports: [{ id: 'designPort', offset: { x: 0, y: 0.5 } }]
    },
    {
        id: 'node3', offsetX: 400, offsetY: 180, style: { fill: '#DCDCDC', strokeColor: '#DCDCDC' },
        annotations: [{ id: 'label1', content: 'Coding' }],
        shape: { type: 'Flow', shape: 'Process' }, ports: [{ id: 'codingPort', offset: { x: 0, y: 0.5 } }]
    },
    {
        id: 'node4', offsetX: 400, offsetY: 260, style: { fill: '#DCDCDC', strokeColor: '#DCDCDC' },
        annotations: [{ id: 'label1', content: 'Testing' }], shape: { type: 'Flow', shape: 'Process' }
    },
    {
        id: 'node5', offsetX: 400, offsetY: 340, style: { fill: '#A2D8B0', strokeColor: '#A2D8B0' }, width: 80, height: 60,
        annotations: [{ id: 'label1', content: 'Errors?' }], shape: { type: 'Flow', shape: 'Decision' }
    },
    {
        id: 'node6', offsetX: 400, offsetY: 430, style: { fill: '#FFB2B2', strokeColor: '#FFB2B2' }, width: 70, height: 40,
        annotations: [{ id: 'label1', content: 'End' }], shape: { type: 'Flow', shape: 'Terminator' }
    },
    {
        id: 'node7', width: 100, offsetX: 220, offsetY: 180, style: { fill: '#A2D8B0', strokeColor: '#A2D8B0' }, height: 60,
        annotations: [{ id: 'label1', content: 'Design Error?' }], shape: { type: 'Flow', shape: 'Decision' },
        ports: [
            { id: 'porterror', offset: { x: 0.5, y: 0 } },
            { id: 'portcoding', offset: { x: 1, y: 0.5 } },
            { id: 'portdesign', offset: { x: 0.5, y: 1 } }
        ]
    }
];

var connectors = [
    { id: 'connector1', sourceID: 'node1', targetID: 'node2' },
    { id: 'connector2', sourceID: 'node2', targetID: 'node3' },
    { id: 'connector3', sourceID: 'node3', targetID: 'node4' },
    { id: 'connector4', sourceID: 'node4', targetID: 'node5' },
    {
        id: 'connector5', sourceID: 'node5', targetID: 'node6',
        annotations: [{ content: 'No', style: { fill: 'white' } }]
    },
    {
        id: 'connector6', sourceID: 'node5', targetID: 'node7', type: 'Orthogonal',
        segments: [{ type: 'Orthogonal', length: 150, direction: 'Left' }],
        annotations: [{ content: 'Yes', style: { fill: 'white' } }]
    },
    {
        id: 'connector7', sourceID: 'node7', targetID: 'node3', sourcePortID: 'portcoding',
        targetPortID: 'codingPort', type: 'Orthogonal',
        segments: [{ type: 'Orthogonal', length: 10, direction: 'left' }],
        annotations: [{ content: 'No', style: { fill: 'white' } }]
    },
    {
        id: 'connector8', sourceID: 'node7', targetID: 'node2', sourcePortID: 'porterror',
        targetPortID: 'designPort', type: 'Orthogonal',
        annotations: [{ content: 'Yes', style: { fill: 'white' } }]
    }
];
this.default = function () {
    diagram = new ej.diagrams.Diagram({
        width: '100%', height: '600px', nodes: nodes, connectors: connectors,
        getNodeDefaults: getNodeDefaults,
        snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
        getConnectorDefaults: function (obj) {
            obj.style.fill = '#707070';
            obj.targetDecorator.style.fill = '#707070';
            obj.targetDecorator.style.strokeColor = '#707070';
        }
    });
    diagram.appendTo('#diagram');

    diagram.historyChange = function (arg) {
        getValue();
    };
    diagram.fitToPage({ mode: 'Height' });
    var stackLimit = new ej.inputs.NumericTextBox({
        value: 0, min: 0, max: 50, width: '100%',
        format: '##.##', step: 1,
        change: function (args) {
            diagram.setStackLimit(args.value);
        }
    });
    stackLimit.appendTo('#StackLimit');

    var listviewInstance = new ej.lists.ListView({
        fields: { value: 'value', text: 'text' },
        headerTitle: 'Device settings',
        height: "180px",
    });
    listviewInstance.appendTo("#redoList");

    var listview = new ej.lists.ListView({
        fields: { value: 'value', text: 'text' },
        headerTitle: 'Device settings',
        height: "180px",
    });
    listview.appendTo("#undoList");

    var clearHistory = new ej.buttons.Button({
        content: 'Clear History',       
    });
    clearHistory.appendTo('#clearHistory');
    clearHistory.element.onclick = function () {
        diagram.clearHistory();
        getValue();
    };
    var startGroupAction = new ej.buttons.Button({
        isToggle: true,        
    });
    startGroupAction.appendTo('#startGroupAction');
    startGroupAction.element.onclick = function () {
        if (startGroupAction.element.classList.contains('e-active')) {
            startGroupAction.content = 'End Group Action';
            diagram.startGroupAction();
        }
        else {
            diagram.endGroupAction();
            startGroupAction.content = 'Start Group Action';
        }
    };
    var undoButton = new ej.buttons.Button({
        disabled: true
    });
    undoButton.appendTo('#undo');
    undoButton.element.onclick = function () {
        diagram.undo();
    };

    var redoButton = new ej.buttons.Button({
        disabled: true
    });
    redoButton.appendTo('#redo');
    redoButton.element.onclick = function () {
        diagram.redo();
    };
    function getNodeDefaults(obj) {
        obj.annotations[0].style.color = '#111111';
        return obj;
    }
    function getValue() {
        var undoStack = diagram.historyManager.undoStack;
        var redoStack = diagram.historyManager.redoStack;
        var undo = [];
        for (var i = 0; i < undoStack.length; i++) {
            undo.push({ 'text': undoStack[i].type, 'value': undoStack[i].type });
        }
        var redo = [];
        for (var j = 0; j < redoStack.length; j++) {
            redo.push({ 'text': redoStack[j].type, 'value': redoStack[j].type });
        }
        var itemsCount = diagram.historyManager.stackLimit ? diagram.historyManager.stackLimit : 0;
        var undoList = document.getElementById('undoList').ej2_instances[0];

        undoButton.disabled = undo.length ? false : true;
        redoButton.disabled = redo.length ? false : true;
        undoList.dataSource = undo;
        undoList.fields = { text: 'text', value: 'text' };
        undoList.index = 0;
        undoList.dataBind();
        var redoList = document.getElementById('redoList').ej2_instances[0];
        redoList.dataSource = redo;
        redoList.fields = { text: 'text', value: 'text' };
        redoList.index = 0;
        redoList.dataBind();
    }
};

