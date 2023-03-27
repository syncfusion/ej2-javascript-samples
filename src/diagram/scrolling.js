/**
 * Default FlowShape sample
 */
ej.diagrams.Diagram.Inject(ej.diagrams.UndoRedo);

/* tslint:disable */
/*eslint eslint-comments/no-duplicate-disable: error */

/*eslint-disable no-undef */
//Create and add ports for node.


function addMobileEvents() {
    var isMobileMode = window.matchMedia('(max-width:550px)').matches;
    if (isMobileMode) {
        var pIcon = document.getElementById('palette-icon');
        if (pIcon) {
            pIcon.addEventListener('click', opensymbolPalette, false);
        }
    }
}

function opensymbolPalette() {
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

this.default = function () {
    var scrollableArea = new ej.diagrams.Rect(0, 0, 1500, 1500);

    //Initializes diagram control
    var diagram = new ej.diagrams.Diagram({
        width: '100%', height: '700px',
        rulerSettings: { showRulers: true },
        pageSettings: { width: 1500, height: 1500 },
        scrollSettings: {
            scrollLimit: 'Diagram', canAutoScroll: true, autoScrollBorder: { left: 10, right: 10, top: 10, bottom: 10 },
            scrollableArea: scrollableArea
        },
        //Sets the default values of a node
        getNodeDefaults: function (node) {
            if (node.width === undefined) {
                node.width = 145;
            } else {
                var ratio = 100 / node.width;
                node.width = 100;
                node.height *= ratio;
            }
            node.style = { fill: '#357BD2', strokeColor: 'white' };
            node.annotations = [{ style: { color: 'white', fill: 'transparent' } }];
            return node;
        },
        //Sets the default values of a Connector.
        getConnectorDefaults: function (connector) {
            if (connector.id.indexOf('connector') !== -1) {
                connector.type = 'Orthogonal';
                connector.targetDecorator = { shape: 'Arrow', width: 10, height: 10 };
            }
        },
        //Sets the Node style for DragEnter element.
        dragEnter: function (args) {
            var node = args.element;
            if (node instanceof ej.diagrams.Node) {
                var oWidth = node.width;
                var oHeight = node.height;
                var ratio = 100 / node.width;
                node.width = 100;
                node.height *= ratio;
                node.offsetX += (node.width - oWidth) / 2;
                node.offsetY += (node.height - oHeight) / 2;
                node.style = { fill: '#357BD2', strokeColor: 'white' };
            }
        },
        created: function (args) {
            var element2 = document.getElementById('scrollableDiv');
            element2.className = "disabledbutton";
        }
    });
    diagram.appendTo('#diagram');
    //Initialize the flowshapes for the symbol palatte
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
    //Initialize the flowshapes for the symbol palatte
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

    //Initializes the symbol palette
    var palette = new ej.diagrams.SymbolPalette({
        expandMode: 'Single',
        getNodeDefaults: function (symbol) {
            var obj = symbol;
            if (obj.id === 'terminator' || obj.id === 'process') {
                obj.width = 80;
                obj.height = 40;
            }
            else if (obj.id === 'decision' || obj.id === 'document' || obj.id === 'preDefinedProcess' ||
                obj.id === 'paperTap' || obj.id === 'directData' || obj.id === 'multiDocument' || obj.id === 'data') {
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
            { id: 'flow', expanded: false, symbols: flowShapes, iconCss: 'e-ddb-icons e-flow', title: 'Flow Shapes' }
        ],
        symbolMargin: { left: 15, right: 15, top: 15, bottom: 15 },
        getSymbolInfo: function (symbol) {
            return { fit: true };
        },
        width: '100%', height: '700px', symbolHeight: 60, symbolWidth: 60,
    });
    palette.appendTo('#symbolpalette');
    addMobileEvents();
    /* tslint:enable */

    var items = [
        { text: 'Auto', value: 'Auto' }, { text: 'Scroll', value: 'Scroll' },
        { text: 'Drag', value: 'Drag' }
    ];

    var scrollLimitDatasource = [
        { text: 'Infinity', value: 'Infinity' }, { text: 'Diagram', value: 'Diagram' },
        { text: 'Limited', value: 'Limited' }
    ];

    var scrollLevel = new ej.dropdowns.DropDownList({
        dataSource: items,
        fields: { text: 'text', value: 'value' },
        value: 'Scroll',
        change: function (args) {
            var element = document.getElementById('autoScrollDiv');
            element.className = args.value === "Auto" ? "" : "disabledbutton";
        }
    });
    scrollLevel.appendTo('#scrollLevel');

    var scrollLimit = new ej.dropdowns.DropDownList({
        dataSource: scrollLimitDatasource,
        fields: { text: 'text', value: 'value' },
        value: 'Diagram',
        change: function (args) {
            var element = document.getElementById('scrollableDiv');
            element.className = args.value === "Limited" ? "" : "disabledbutton";
            diagram.scrollSettings.scrollLimit = args.value;
        }
    });
    scrollLimit.appendTo('#scrollLimit');

    var numeric = new ej.inputs.TextBox({
        // sets value to the NumericTextBox
        value: 10,
        change: function (args) {
            diagram.scrollSettings.scrollableArea.x = Number(args.value);
        }
    });

    // renders initialized NumericTextBox
    numeric.appendTo('#x');

    var numeric2 = new ej.inputs.TextBox({
        // sets value to the NumericTextBox
        value: 10,
        change: function (args) {
            diagram.scrollSettings.scrollableArea.y = Number(args.value);
        }
    });

    // renders initialized NumericTextBox
    numeric2.appendTo('#y');

    var widthTextBox = new ej.inputs.TextBox({
        // sets value to the NumericTextBox
        value: 1500,
        change: function (args) {
            diagram.scrollSettings.scrollableArea.width = Number(args.value);
        }
    });

    // renders initialized NumericTextBox
    widthTextBox.appendTo('#width');

    var heightTextBox = new ej.inputs.TextBox({
        // sets value to the NumericTextBox
        value: 1500,
        change: function (args) {
            diagram.scrollSettings.scrollableArea.height = Number(args.value);
        }
    });

    // renders initialized NumericTextBox
    heightTextBox.appendTo('#height');

    var leftTextBox = new ej.inputs.TextBox({
        // sets value to the NumericTextBox
        value: 10,
        change: function (args) {
            diagram.scrollSettings.autoScrollBorder.left = Number(args.value);
        }
    });

    // renders initialized NumericTextBox
    leftTextBox.appendTo('#left');

    var rightTextBox = new ej.inputs.TextBox({
        // sets value to the NumericTextBox
        value: 10,
        change: function (args) {
            diagram.scrollSettings.autoScrollBorder.right = Number(args.value);
        }
    });

    // renders initialized NumericTextBox
    rightTextBox.appendTo('#right');

    var topTextBox = new ej.inputs.TextBox({
        // sets value to the NumericTextBox
        value: 10,
        change: function (args) {
            diagram.scrollSettings.autoScrollBorder.top = Number(args.value);
        }
    });

    // renders initialized NumericTextBox
    topTextBox.appendTo('#top');

    var bottomTextBox = new ej.inputs.TextBox({
        // sets value to the NumericTextBox
        value: 10,
        change: function (args) {
            diagram.scrollSettings.autoScrollBorder.bottom = Number(args.value);
        }
    });

    // renders initialized NumericTextBox
    bottomTextBox.appendTo('#bottom');

};

