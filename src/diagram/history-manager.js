/*jslint esversion: 6 */
ej.diagrams.Diagram.Inject(ej.diagrams.UndoRedo);


this.default = function () {
    // Helper function to create a NodeModel with default parameters
    function createNode(
        id,
        offsetX,
        offsetY,
        fill,
        strokeColor,
        shape,
        content,
        width = 70,
        height = 40,
        ports = []) {
        return {
            id,
            offsetX,
            offsetY,
            style: { fill, strokeColor },
            width,
            height,
            shape: { type: 'Flow', shape: shape },
            annotations: [{ content: content }],
            ports
        };
    }

    // Initialize Diagram Nodes using the createNode function
    let nodes = [
        createNode('node1', 400, 30, '#FFB2B2', '#FFB2B2', 'Terminator', 'Start'),
        createNode('node2', 400, 100, '#DCDCDC', '#DCDCDC', 'Process', 'Design', undefined, undefined, [{ id: 'designPort', offset: { x: 0, y: 0.5 } }]),
        createNode('node3', 400, 180, '#DCDCDC', '#DCDCDC', 'Process', 'Coding', undefined, undefined, [{ id: 'codingPort', offset: { x: 0, y: 0.5 } }]),
        createNode('node4', 400, 260, '#DCDCDC', '#DCDCDC', 'Process', 'Testing'),
        createNode('node5', 400, 340, '#A2D8B0', '#A2D8B0', 'Decision', 'Errors?', 80, 60),
        createNode('node6', 400, 430, '#FFB2B2', '#FFB2B2', 'Terminator', 'End'),
        createNode('node7', 220, 180, '#A2D8B0', '#A2D8B0', 'Decision', 'Design Error?', 100, 60, [
            { id: 'porterror', offset: { x: 0.5, y: 0 } },
            { id: 'portcoding', offset: { x: 1, y: 0.5 } },
            { id: 'portdesign', offset: { x: 0.5, y: 1 } }
        ])
    ];

    // Initialize Diagram Connectors using the createConnector function
    let connectors = [
        createConnector('connector1', 'node1', 'node2'),
        createConnector('connector2', 'node2', 'node3'),
        createConnector('connector3', 'node3', 'node4'),
        createConnector('connector4', 'node4', 'node5'),
        createConnector('connector5', 'node5', 'node6', [{ content: 'No', style: { fill: 'white' } }]),
        createConnector('connector6', 'node5', 'node7', [{ content: 'Yes', style: { fill: 'white' } }], [{ type: 'Orthogonal', length: 150, direction: 'Left' }]),
        createConnector('connector7', 'node7', 'node3', [{ content: 'No', style: { fill: 'white' } }], [{ type: 'Orthogonal', length: 10, direction: 'Left' }], 'portcoding', 'codingPort'),
        createConnector('connector8', 'node7', 'node2', [{ content: 'Yes', style: { fill: 'white' } }], [], 'porterror', 'designPort')
    ];

    // Helper function to create a ConnectorModel with default parameters
    function createConnector(
        id,
        sourceID,
        targetID,
        annotations,
        segments = [],
        sourcePortID = '',
        targetPortID = '') {
        return {
            id,
            sourceID,
            targetID,
            annotations,
            type: 'Orthogonal',
            segments,
            sourcePortID,
            targetPortID
        };
    }
    var diagram = new ej.diagrams.Diagram({
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
    // Callback function when history changes
    diagram.historyChange = function (arg) {
        updateHistoryLists();
    };
    // Fit diagram to page height
    diagram.fitToPage({ mode: 'Height' });
    // Numeric text box for stack limit
    var stackLimitTextBox = new ej.inputs.NumericTextBox({
        value: 0, min: 0, max: 50, width: '100%',
        format: '##.##', step: 1,
        change: function (args) {
            diagram.setStackLimit(args.value);
        }
    });
    stackLimitTextBox.appendTo('#StackLimit');
    // ListView for redo history
    var listviewInstance = new ej.lists.ListView({
        fields: { value: 'value', text: 'text' },
        headerTitle: 'Device settings',
        height: "180px",
    });
    listviewInstance.appendTo("#redoList");
    // ListView for undo history
    var listview = new ej.lists.ListView({
        fields: { value: 'value', text: 'text' },
        headerTitle: 'Device settings',
        height: "180px",
    });
    listview.appendTo("#undoList");
    // Button to clear history
    var clearHistory = new ej.buttons.Button({
        content: 'Clear History',
    });
    clearHistory.appendTo('#clearHistory');
    clearHistory.element.onclick = function () {
        diagram.clearHistory();
        updateHistoryLists();
    };
    // Toggle button for starting and ending group action
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
    // Button for undo action
    var undoButton = new ej.buttons.Button({
        disabled: true
    });
    undoButton.appendTo('#undo');
    undoButton.element.onclick = function () {
        diagram.undo();
    };
    // Button for redo action
    var redoButton = new ej.buttons.Button({
        disabled: true
    });
    redoButton.appendTo('#redo');
    redoButton.element.onclick = function () {
        diagram.redo();
    };

    // Function to define default properties for Node 
    function getNodeDefaults(obj) {
        obj.annotations[0].style.color = '#111111';
        return obj;
    }
    // Function to update lists and button states based on history
    function updateHistoryLists() {
        var historyManager = diagram.historyManager;
        var undoStack = historyManager.undoStack;
        var redoStack = historyManager.redoStack;
        var undo = undoStack.map(item => ({ text: item.type, value: item.type }));
        var redo = redoStack.map(item => ({ text: item.type, value: item.type }));

        undoButton.disabled = undo.length === 0;
        redoButton.disabled = redo.length === 0;

        updateListView('#undoList', undo);
        updateListView('#redoList', redo);
    }

    function updateListView(selector, data) {
        var listView = document.querySelector(selector).ej2_instances[0];
        listView.dataSource = data;
        listView.fields = { text: 'text', value: 'value' };
        listView.index = 0;
        listView.dataBind();
    }
};
