/**
 * Default symbol palette sample
 */
ej.diagrams.Diagram.Inject(ej.diagrams.UndoRedo);
//enable or disable the header icon for Symbol palette.
var palette;
var animation;
var expand;
var size;
var headericon;
var itemtext;
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
}

function onAnimationChange(args) {
    palette.enableAnimation = args.checked;
}

function onItemTextChange(args) {
    if (args.checked) {
        palette.getSymbolInfo = function (symbol) {
            if (symbol.text !== undefined) {
                return { description: { text: symbol.text, overflow: 'Wrap' } };
            }
            return { description: { text: symbol.id } };
        };
    }
    else {
        palette.getSymbolInfo = function (symbol) {
            return { description: { text: '' } };
        };
    }
    palette.dataBind();
}
this.default = function () {
    //Initialize the flowshapes for the symbol palatte
    var flowshapes = [
        { id: 'terminator', shape: { type: 'Flow', shape: 'Terminator' } },
        { id: 'process', shape: { type: 'Flow', shape: 'Process' } },
        { id: 'sort', shape: { type: 'Flow', shape: 'Sort' } },
        { id: 'document', shape: { type: 'Flow', shape: 'Document' } },
        { id: 'predefinedprocess', shape: { type: 'Flow', shape: 'PreDefinedProcess' } },
        { id: 'papertap', shape: { type: 'Flow', shape: 'PaperTap' } },
        { id: 'directdata', shape: { type: 'Flow', shape: 'DirectData' } },
        { id: 'sequentialdata', shape: { type: 'Flow', shape: 'SequentialData' } },
    ];
    var basicShapes = [
        { id: 'Rectangle', shape: { type: 'Basic', shape: 'Rectangle' } },
        { id: 'Ellipse', shape: { type: 'Basic', shape: 'Ellipse' } },
        { id: 'Parallelogram', shape: { type: 'Basic', shape: 'Parallelogram' } },
        { id: 'Triangle', shape: { type: 'Basic', shape: 'Triangle' } },
        { id: 'Hexagon', shape: { type: 'Basic', shape: 'Hexagon' } },
        { id: 'Pentagon', shape: { type: 'Basic', shape: 'Pentagon' } },
        { id: 'Cylinder', shape: { type: 'Basic', shape: 'Cylinder' } },
        { id: 'Star', shape: { type: 'Basic', shape: 'Star' } }
    ];
    //Initializes connector symbols for the symbol palette
    var connectorSymbols = [
        {
            id: 'Link1', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 40, y: 40 },
            targetDecorator: { shape: 'Arrow' }, style: { strokeWidth: 2 }
        },
        {
            id: 'link3', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 40, y: 40 },
            style: { strokeWidth: 2 }, targetDecorator: { shape: 'None' }
        },
        {
            id: 'Link21', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 40, y: 40 },
            targetDecorator: { shape: 'Arrow' }, style: { strokeWidth: 2 }
        },
        {
            id: 'link23', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 40, y: 40 },
            style: { strokeWidth: 2 }, targetDecorator: { shape: 'None' }
        },
        {
            id: 'link33', type: 'Bezier', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 40, y: 40 },
            style: { strokeWidth: 2 }, targetDecorator: { shape: 'None' }
        },
    ];
    //Initializes the symbol palette
    palette = new ej.diagrams.SymbolPalette({
        expandMode: 'Multiple', allowDrag: false,
        palettes: [
            { id: 'flow', expanded: true, symbols: flowshapes, iconCss: 'e-ddb-icons e-basic', title: 'Flow Shapes' },
            { id: 'basic', expanded: true, symbols: basicShapes, iconCss: 'e-ddb-icons e-flow', title: 'Basic Shapes' },
            { id: 'connectors', expanded: true, symbols: connectorSymbols, iconCss: 'e-ddb-icons e-connector', title: 'Connectors' }
        ], enableAnimation: true,
        width: '100%', height: '700px', symbolHeight: 80, symbolWidth: 80,
        //set Node default value
        getNodeDefaults: function (symbol) {
            if (symbol.id === 'terminator' || symbol.id === 'process') {
                symbol.width = 80;
                symbol.height = 40;
            }
            else if (symbol.id === 'document' || symbol.id === 'predefinedprocess' ||
                symbol.id === 'papertap' || symbol.id === 'directdata') {
                symbol.width = 50;
                symbol.height = 40;
            }
            symbol.style = { strokeWidth: 2 };
        },
        getSymbolInfo: function (symbol) {
            return { fit: true };
        },
        symbolMargin: { left: 15, right: 15, top: 15, bottom: 15 }
    });
    palette.appendTo('#symbolpalette');
    //enable or disable the animation of the symbol palette.
    animation = new ej.buttons.CheckBox({
        checked: true,
        change: onAnimationChange
    });
    palette.dataBind();
    animation.appendTo('#animation');
    //DropDownList is used to change the expandMode of the Symbolpallete.
    expand = new ej.dropdowns.DropDownList({
        index: 1,
        change: function () {
            palette.expandMode = expand.value;
            palette.dataBind();
        }
    });
    expand.appendTo('#expand');
    //NumericTextBox is used to apply the size of the Symbol.
    size = new ej.inputs.NumericTextBox({
        value: 80, min: 40,
        max: 100, width: 120,
        step: 5,
        format: '##.##',
        change: function () {
            palette.symbolHeight = size.value;
            palette.symbolWidth = size.value;
        }
    });
    palette.dataBind();
    size.appendTo('#size');
    //Add or Remove the Text for Symbol palette item.
    itemtext = new ej.buttons.CheckBox({
        change: onItemTextChange
    });
    itemtext.appendTo('#itemtext');
    headericon = new ej.buttons.CheckBox({
        checked: true,
        change: onHeaderIconChange
    });
    palette.dataBind();
    headericon.appendTo('#headericon');

};