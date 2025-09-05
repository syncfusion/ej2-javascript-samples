/**
 * Default symbol palette sample
 */

this.default = function () {
    var palette;
    var animation;
    var expand;
    var size;
    var headericon;
    var itemtext;
    var showSearch;
    var diagram;
    var isItemText = false;
    var symbolSize = 50;
    var htmlSymbolWidth = 91;
    var htmlSymbolHeight = 100;
    //Enable or disable the headerIcon for symbol palette headers
    function onHeaderIconChange(args) {
        for (var i = 0; i < palette.palettes.length; i++) {
            if (args.checked) {
                if (i === 0) {
                    palette.palettes[i].iconCss = 'e-ddb-icons e-basic';
                } else if (i === 1) {
                    palette.palettes[i].iconCss = 'e-ddb-icons e-flow';
                } else if (i === 2) {
                    palette.palettes[i].iconCss = 'e-ddb-icons e-connector';
                }
            } else {
                palette.palettes[i].iconCss = '';
            }
        }
        palette.dataBind();
    }
    //Enable or disable the animation for symbol palette
    function onAnimationChange(args) {
        palette.enableAnimation = args.checked;
        palette.dataBind();
    }
    //Enable or disable the Text for Symbol palette item.
    function onItemTextChange(args) {
        isItemText = args.checked;
        updateGetSymbolInfo();
    }
     function updateGetSymbolInfo() {
            var palette = document.getElementById("symbolpalette").ej2_instances[0];
            palette.getSymbolInfo = function (symbol) {
                return {
                    width: (symbol.shape.type === 'HTML') ? htmlSymbolWidth : symbolSize,
                    height: (symbol.shape.type === 'HTML') ? isItemText ? htmlSymbolHeight + 20 : htmlSymbolHeight : symbolSize,
                    fit: true,
                    description: { text: isItemText ? (symbol.id == "BugFix" ? "Bug Fix" : symbol.id) : '' }
                };
                 };
            palette.dataBind();
        }
    //Initialize the flowshapes for the symbol palatte
    var flowshapes = [
        { id: 'terminator', shape: { type: 'Flow', shape: 'Terminator' } },
        { id: 'sort', shape: { type: 'Flow', shape: 'Sort'} },
         { id: 'document', shape: { type: 'Flow', shape: 'Document' } },
        { id: 'process', shape: { type: 'Flow', shape: 'Process' } },
       
        { id: 'predefinedprocess', shape: { type: 'Flow', shape: 'PreDefinedProcess' } },
        { id: 'sequentialdata', shape: { type: 'Flow', shape: 'SequentialData' } },

        { id: 'directdata', shape: { type: 'Flow', shape: 'DirectData' } },

        { id: 'papertap', shape: { type: 'Flow', shape: 'PaperTap' } },
    ];
    //Initialize the basicshapes for the symbol palatte
    var basicShapes = [
        { id: 'Rectangle', shape: { type: 'Basic', shape: 'Rectangle' } },
        { id: 'Ellipse', shape: { type: 'Basic', shape: 'Ellipse' } },
        { id: 'Hexagon', shape: { type: 'Basic', shape: 'Hexagon' } },

        { id: 'Parallelogram', shape: { type: 'Basic', shape: 'Parallelogram' } },
        { id: 'Triangle', shape: { type: 'Basic', shape: 'Triangle' } },
        { id: 'Pentagon', shape: { type: 'Basic', shape: 'Pentagon' } },
        { id: 'Cylinder', shape: { type: 'Basic', shape: 'Cylinder' } },
        { id: 'Star', shape: { type: 'Basic', shape: 'Star' } }
    ];
    //Initializes connector symbols for the symbol palette
    var connectorSymbols = [
        {
            id: 'Link1', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 30, y: 30 },
        },
        {
            id: 'link3', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 30, y: 30 },
            targetDecorator: { shape: 'None' }
        },
        {
            id: 'Link21', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 30, y: 30 },
        },
        {
            id: 'link23', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 30, y: 30 },
            targetDecorator: { shape: 'None' }
        },
        {
            id: 'link33', type: 'Bezier', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 30, y: 30 },
            targetDecorator: { shape: 'None' }
        },
    ];
    //Initializes the SVG symbols for the symbol palette
    var SVGTemplate = [
       {
            id: 'Script', shape: { type: 'Native', scale: 'Stretch' }, width: 80, height: 80
        },
         {
            id: 'Settings', shape: { type: 'Native', scale: 'Stretch' }, width: 80, height: 80
        },
        {
            id: 'Bluetooth', shape: { type: 'Native', scale: 'Stretch' }, width: 70, height: 70
        },
           {
            id: 'Wi-Fi', shape: { type: 'Native', scale: 'Stretch' }, width: 70, height: 55
        },
    ];

    //Initializes the SVG symbols for the symbol palette
    var HTMLShapes = [
        {
            id: 'Meeting', shape: { type: 'HTML'}, width: 80, height: 80
        },
        {
            id: 'Message', shape: { type: 'HTML'},  width: 80, height: 80
        },
        {
            id: 'Weather', shape: { type: 'HTML'},  width: 70, height: 70
        },
        {
            id: 'BugFix', shape: { type: 'HTML'},  width: 70, height: 55, tooltip: {content: 'Bug Fix'}, constraints: ej.diagrams.NodeConstraints.Tooltip
        },


    ];

    //Initializes the symbol palette
    palette = new ej.diagrams.SymbolPalette({
        expandMode: 'Multiple',
        palettes: [
            { id: 'flow', expanded: true, symbols: flowshapes, iconCss: 'e-ddb-icons e-basic', title: 'Flow Shapes' },
            { id: 'basic', expanded: true, symbols: basicShapes, iconCss: 'e-ddb-icons e-flow', title: 'Basic Shapes' },
            { id: 'connectors', expanded: true, symbols: connectorSymbols, iconCss: 'e-ddb-icons e-connector', title: 'Connectors' },
            { id: 'nodeSVG', expanded: true, symbols: SVGTemplate, title: 'SVG Shapes' },
            { id: 'nodeHTML', expanded: true, symbols: HTMLShapes, title: 'HTML Shapes' },
        ], enableAnimation: true,
        width: '100%', height: '900px', 
        //Set Node default value
        getNodeDefaults: function(symbol) {
            if (symbol.shape.type === 'HTML') {
                symbol.width = htmlSymbolWidth;
                symbol.height = htmlSymbolHeight;
            }
            symbol.style = { strokeWidth: 2, strokeColor: '#757575' };
        },
        //Set connector default value
        getConnectorDefaults: function (symbol) {
            symbol.style.strokeWidth = 2;
            symbol.style.strokeColor = '#757575';
            symbol.targetDecorator.style.strokeColor = '#757575';
            symbol.targetDecorator.style.fill = '#757575';
        },
        getSymbolInfo: function (symbol) {
            if (symbol.shape.type === 'HTML') {
                return { width: htmlSymbolWidth, height: htmlSymbolHeight, fit: true };
            }
            return { width: symbolSize, height: symbolSize, fit: true };
        },
        symbolMargin: { left: 15, right: 15, top: 15, bottom: 15 },
        nodeTemplate: '#nodeTemplate', 
        enableSearch: true
    });
    palette.appendTo('#symbolpalette');
    diagram = new ej.diagrams.Diagram({
            width: '100%', height: '900px',
            rulerSettings: { showRulers: true },
            pageSettings: { width: 1500, height: 1500 },
            scrollSettings: {
                scrollLimit: 'Infinity', canAutoScroll: true, autoScrollBorder: { left: 10, right: 10, top: 10, bottom: 10 },
            },
            nodeTemplate: '#nodeTemplate',
            getNodeDefaults: function (symbol) {
            if (symbol.id.includes("BugFix")) {
                symbol.constraints = ej.diagrams.NodeConstraints.Default;
                symbol.tooltip.content = "";
            }
        },
        });
    diagram.appendTo('#diagram');
    //enable or disable the animation of the symbol palette.
    animation = new ej.buttons.CheckBox({
        checked: true,
        change: onAnimationChange
    });
    animation.appendTo('#animation');
    //DropDownList is used to change the expandMode of the Symbolpallete.
    expand = new ej.dropdowns.DropDownList({
        index: 1, width: 100,
        change: function () {
            palette.expandMode = expand.value;
            palette.dataBind();
        }
    });
    expand.appendTo('#expand');
    //NumericTextBox is used to apply the size of the Symbol.
    size = new ej.inputs.NumericTextBox({
        value: 50, min: 40,
        max: 90, width: 100,
        step: 5,
        format: '##.##',
        change: function () {
           if (symbolSize != size.value) {
                symbolSize = size.value;
                updateGetSymbolInfo();
            }
        }        
    });
    size.appendTo('#size');
    //Add or Remove the Text for Symbol palette item.
    itemtext = new ej.buttons.CheckBox({
        change: onItemTextChange
    });
    itemtext.appendTo('#itemtext');
    //Checkbox to enable or disable symbol palette header icons.
    headericon = new ej.buttons.CheckBox({
        checked: true,
        change: onHeaderIconChange
    });
    headericon.appendTo('#headericon');
    showSearch = new ej.buttons.CheckBox({
        checked: true,
        change: function (args) {
            if (args.checked) {
                palette.enableSearch=true;
            } else {
                palette.enableSearch = false;
            }
            palette.dataBind();
        }
    });
    showSearch.appendTo('#showsearch');

};