/**
 * Default FlowShape sample
 */
ej.diagrams.Diagram.Inject(ej.diagrams.UndoRedo);


this.default = function () {
    /* tslint:disable */
    /*eslint eslint-comments/no-duplicate-disable: error */

    /*eslint-disable no-undef */

    //To enhance the functionality of a webpage for mobile devices by adding a click event listener 
    function addMobileEvents() {
        var isMobileMode = window.matchMedia('(max-width:550px)').matches;
        if (isMobileMode) {
            var paletteIcon = document.getElementById('palette-icon');
            if (paletteIcon) {
                paletteIcon.addEventListener('click', openSymbolPalette, false);
            }
        }
    }
    //To manage the visibility state of the palette space on the webpage on a mobile device
    function openSymbolPalette() {
        var paletteSpace = document.getElementById('palette-space');
        isMobileMode = window.matchMedia('(max-width:550px)').matches;
        if (isMobileMode) {
            if (!paletteSpace.classList.contains('sb-mobile-palette-open')) {
                paletteSpace.classList.add('sb-mobile-palette-open');
            }
            else {
                paletteSpace.classList.remove('sb-mobile-palette-open');
            }
        }
    }
    //Sets the default values of a Connector.
    function getConnectorDefaults(connector) {
        setConnectorStyles(connector, '#757575');
        return connector;
    }
    //set styles for connector
    function setConnectorStyles(connector, color) {
        connector.style.strokeWidth = 1;
        connector.style.strokeColor = color;
        connector.targetDecorator.style.fill = color;
        connector.targetDecorator.style.strokeColor = color;
    }
    var scrollableArea = new ej.diagrams.Rect(0, 0, 1500, 1500);

    //Initializes diagram control
    var diagram = new ej.diagrams.Diagram({
        width: '100%', height: '700px',
        rulerSettings: { showRulers: true },
        pageSettings: { width: 1500, height: 1500 },
        scrollSettings: {
            scrollLimit: 'Infinity', canAutoScroll: true, autoScrollBorder: { left: 30, right: 30, top: 30, bottom: 30 },
            scrollableArea: scrollableArea
        },
        getConnectorDefaults: getConnectorDefaults,
        //Sets the node style for DragEnter element.
        dragEnter: function (args) {
            var node = args.element;
            if (node instanceof ej.diagrams.Node) {
                var nodeWidth = node.width;
                var nodeHeight = node.height;
                var ratio = 100 / node.width;
                node.width = 100;
                node.height *= ratio;
                node.offsetX += (node.width - nodeWidth) / 2;
                node.offsetY += (node.height - nodeHeight) / 2;
                node.style = { fill: '#357BD2', strokeColor: 'white' };
                node.annotations = [{ style: { color: 'white', fill: 'transparent' } }];
            }
        },
        //Disable the scrollable area
        created: function (args) {
            var scrollElement = document.getElementById('scrollableDiv');
            scrollElement.className = "disabledbutton";
        }
    });
    diagram.appendTo('#diagram');
    //Initialize the basicshapes for the symbol palette
    var basicShapes = [
        {
            id: 'rectangle', shape: { type: 'Basic', shape: 'Rectangle' }
        },
        {
            id: 'ellipse', shape: { type: 'Basic', shape: 'Ellipse' }
        },
        {
            id: 'triangle', shape: { type: 'Basic', shape: 'Triangle' }
        },
        {
            id: 'plus', shape: { type: 'Basic', shape: 'Plus' }
        },
        {
            id: 'star', shape: { type: 'Basic', shape: 'Star' }
        },
        {
            id: 'pentagon', shape: { type: 'Basic', shape: 'Pentagon' }
        },
        {
            id: 'heptagon', shape: { type: 'Basic', shape: 'Heptagon' }
        },
        {
            id: 'octagon', shape: { type: 'Basic', shape: 'Octagon' }
        },
        {
            id: 'trapezoid', shape: { type: 'Basic', shape: 'Trapezoid' }
        },
        {
            id: 'decagon', shape: { type: 'Basic', shape: 'Decagon' }
        },
        {
            id: 'rightTriangle', shape: { type: 'Basic', shape: 'RightTriangle' }
        },
        {
            id: 'parallelogram', shape: { type: 'Basic', shape: 'Parallelogram' }
        },
    ];
    //Initialize the flowshapes for the symbol palette
    var flowShapes = [
        { id: 'terminator1', shape: { type: 'Flow', shape: 'Terminator' } },
        { id: 'process1', shape: { type: 'Flow', shape: 'Process' } },
        { id: 'extract1', shape: { type: 'Flow', shape: 'Extract' } },
        { id: 'manualOperation1', shape: { type: 'Flow', shape: 'ManualOperation' } },
        { id: 'merge1', shape: { type: 'Flow', shape: 'Merge' } },
        { id: 'offPageReference1', shape: { type: 'Flow', shape: 'OffPageReference' } },
        { id: 'sequentialAccessStorage1', shape: { type: 'Flow', shape: 'SequentialAccessStorage' } },
        { id: 'annotation1', shape: { type: 'Flow', shape: 'Annotation' } },
        { id: 'annotation21', shape: { type: 'Flow', shape: 'Annotation2' } },
        { id: 'data1', shape: { type: 'Flow', shape: 'Data' } },
        { id: 'summingJunction1', shape: { type: 'Flow', shape: 'SummingJunction' } },
        { id: 'or1', shape: { type: 'Flow', shape: 'Or' } },
        { id: 'internalStorage1', shape: { type: 'Flow', shape: 'InternalStorage' } },
        { id: 'card1', shape: { type: 'Flow', shape: 'Card' } },
        { id: 'delay1', shape: { type: 'Flow', shape: 'Delay' } },
        { id: 'decision1', shape: { type: 'Flow', shape: 'Decision' } },
        { id: 'document1', shape: { type: 'Flow', shape: 'Document' } },
        { id: 'preDefinedProcess1', shape: { type: 'Flow', shape: 'PreDefinedProcess' } },
        { id: 'paperTap1', shape: { type: 'Flow', shape: 'PaperTap' } },
        { id: 'directData1', shape: { type: 'Flow', shape: 'DirectData' } },
        { id: 'sequentialData1', shape: { type: 'Flow', shape: 'SequentialData' } },
        { id: 'sort1', shape: { type: 'Flow', shape: 'Sort' } },
        { id: 'multiDocument1', shape: { type: 'Flow', shape: 'MultiDocument' } },
        { id: 'collate1', shape: { type: 'Flow', shape: 'Collate' } },
    ];
    //Initialize the connector for the symbol palette 
    var connectorSymbols = [
        {
            id: 'orthogonal', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 }
        },
        {
            id: 'straight', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 }
        },
        {
            id: 'straightConnector', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
            targetDecorator: { shape: 'None' }
        },
        {
            id: 'orthogonalConnector', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
            targetDecorator: { shape: 'None' }
        },
        {
            id: 'bezier', type: 'Bezier', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
            targetDecorator: { shape: 'None' }
        },
    ];

    //Initializes the symbol palette
    var palette = new ej.diagrams.SymbolPalette({
        expandMode: 'Single',
        getNodeDefaults: function (symbol) {
            var obj = symbol;
            if (obj.id === 'terminator1' || obj.id === 'process1') {
                obj.width = 80;
                obj.height = 40;
            }
            else if (obj.id === 'decision1' || obj.id === 'document1' || obj.id === 'preDefinedProcess1' ||
                obj.id === 'paperTap1' || obj.id === 'directData1' || obj.id === 'multiDocument1' || obj.id === 'data') {
                obj.width = 50;
                obj.height = 40;
            }
            else {
                obj.width = 50;
                obj.height = 50;
            }
            obj.style.strokeColor = '#757575';
        },
        palettes: [
            { id: 'basic', expanded: true, symbols: basicShapes, iconCss: 'e-ddb-icons e-basic', title: 'Basic Shapes' },
            { id: 'flow', expanded: false, symbols: flowShapes, iconCss: 'e-ddb-icons e-flow', title: 'Flow Shapes' },
            { id: 'connectors', expanded: false, symbols: connectorSymbols, iconCss: 'e-ddb-icons e-connector', title: 'Connectors' }
        ],
        symbolMargin: { left: 15, right: 15, top: 15, bottom: 15 },
        getSymbolInfo: function (symbol) {
            return { fit: true };
        },
        getConnectorDefaults: getConnectorDefaults,
        width: '100%', height: '700px', symbolHeight: 60, symbolWidth: 60,
    });
    palette.appendTo('#symbolpalette');
    addMobileEvents();
    /* tslint:enable */

    //Sets the scroll limit
    var scrollLimitDatasource = [
        { text: 'Infinity', value: 'Infinity' }, { text: 'Diagram', value: 'Diagram' },
        { text: 'Limited', value: 'Limited' }
    ];

    //Initializes a dropdown for scrollLimit
    var scrollLimit = new ej.dropdowns.DropDownList({
        dataSource: scrollLimitDatasource,
        fields: { text: 'text', value: 'value' },
        value: 'Infinity',
        change: function (args) {
            var element = document.getElementById('scrollableDiv');
            element.className = args.value === "Limited" ? "" : "disabledbutton";
            diagram.scrollSettings.scrollLimit = args.value;
        }
    });
    scrollLimit.appendTo('#scrollLimit');
    //Initializes a checkbox to enable or disable autoscroll
    var checkBoxObj = new ej.buttons.CheckBox({
        checked: true,
        change: function (args) {
            var autoScrollElement = document.getElementById('autoScrollDiv');
            if (args.checked) {
                autoScrollElement.className = '';
                diagram.scrollSettings.canAutoScroll = true;
            } else {
                autoScrollElement.className = 'disabledbutton';
                diagram.scrollSettings.canAutoScroll = false;
            }
        }
    });
    checkBoxObj.appendTo('#checked');

    var offsetXtextBox = new ej.inputs.TextBox({
        // sets value to the NumericTextBox
        value: 10,
        change: function (args) {
            diagram.scrollSettings.scrollableArea.x = Number(args.value);
        }
    });
    // Renders initialized NumericTextBox 
    offsetXtextBox.appendTo('#x');
    var offsetYtextBox = new ej.inputs.TextBox({
        // sets value to the NumericTextBox
        value: 10,
        change: function (args) {
            diagram.scrollSettings.scrollableArea.y = Number(args.value);
        }
    });

    // Renders initialized NumericTextBox
    offsetYtextBox.appendTo('#y');

    var widthTextBox = new ej.inputs.TextBox({
        // sets value to the NumericTextBox
        value: 1500,
        change: function (args) {
            diagram.scrollSettings.scrollableArea.width = Number(args.value);
        }
    });

    // Renders initialized NumericTextBox
    widthTextBox.appendTo('#width');

    var heightTextBox = new ej.inputs.TextBox({
        // sets value to the NumericTextBox
        value: 1500,
        change: function (args) {
            diagram.scrollSettings.scrollableArea.height = Number(args.value);
        }
    });

    // Renders initialized NumericTextBox
    heightTextBox.appendTo('#height');

    var leftTextBox = new ej.inputs.TextBox({
        // Sets value to the NumericTextBox
        value: 30,
        change: function (args) {
            diagram.scrollSettings.autoScrollBorder.left = Number(args.value);
        }
    });

    // Renders initialized NumericTextBox
    leftTextBox.appendTo('#left');

    var rightTextBox = new ej.inputs.TextBox({
        // Sets value to the NumericTextBox
        value: 30,
        change: function (args) {
            diagram.scrollSettings.autoScrollBorder.right = Number(args.value);
        }
    });

    // Renders initialized NumericTextBox
    rightTextBox.appendTo('#right');

    var topTextBox = new ej.inputs.TextBox({
        // Sets value to the NumericTextBox
        value: 30,
        change: function (args) {
            diagram.scrollSettings.autoScrollBorder.top = Number(args.value);
        }
    });

    // Renders initialized NumericTextBox
    topTextBox.appendTo('#top');

    var bottomTextBox = new ej.inputs.TextBox({
        // Sets value to the NumericTextBox
        value: 30,
        change: function (args) {
            diagram.scrollSettings.autoScrollBorder.bottom = Number(args.value);
        }
    });

    // Renders initialized NumericTextBox
    bottomTextBox.appendTo('#bottom');

};

