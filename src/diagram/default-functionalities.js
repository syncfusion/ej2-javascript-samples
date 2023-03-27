/**
 * Default FlowShape sample
 */
ej.diagrams.Diagram.Inject(ej.diagrams.UndoRedo,ej.diagrams.PrintAndExport);

//Create and add ports for node.
function getNodePorts(obj) {
    var ports = [
        { id: 'nport1', shape: 'Circle', offset: { x: 0, y: 0.5 } },
        { id: 'nport2', shape: 'Circle', offset: { x: 0.5, y: 1 } },
        { id: 'nport3', shape: 'Circle', offset: { x: 1, y: 0.5 } },
        { id: 'nport4', shape: 'Circle', offset: { x: 0.5, y: 0 } }
    ];
    return ports;
}

function addEvents() {
    var isMobile = window.matchMedia('(max-width:550px)').matches;
    if (isMobile) {
        var pIcon = document.getElementById('palette-icon');
        if (pIcon) {
            pIcon.addEventListener('click', openPalette, false);
        }
    }
}

function openPalette() {
    var pSpace = document.getElementById('palette-space');
    isMobile = window.matchMedia('(max-width:550px)').matches;
    if (isMobile) {
        if (!pSpace.classList.contains('sb-mobile-palette-open')) {
            pSpace.classList.add('sb-mobile-palette-open');
        }
        else {
            pSpace.classList.remove('sb-mobile-palette-open');
        }
    }
}

this.default = function () {
    var bounds = document.getElementById('diagram-space').getBoundingClientRect();
    var centerX = bounds.width / 2;
    //Initializes the nodes for the diagram
    var nodes = [{
        id: 'NewIdea', height: 60, offsetX: centerX - 50, offsetY: 80,
        shape: { type: 'Flow', shape: 'Terminator' },
        annotations: [{
            content: 'Place Order'
        }]
    }, {
        id: 'Meeting', height: 60, offsetX: centerX - 50, offsetY: 160,
        shape: { type: 'Flow', shape: 'Process' },
        annotations: [{
            content: 'Start Transaction'
        }]
    }, {
        id: 'BoardDecision', height: 60, offsetX: centerX - 50, offsetY: 240,
        shape: { type: 'Flow', shape: 'Process' },
        annotations: [{
            content: 'Verification'
        }]
    }, {
        id: 'Project', height: 60, offsetX: centerX - 50, offsetY: 330,
        shape: { type: 'Flow', shape: 'Decision' },
        annotations: [{
            content: 'Credit card valid?'
        }]
    }, {
        id: 'End', height: 60, offsetX: centerX - 50, offsetY: 430,
        shape: { type: 'Flow', shape: 'Decision' },
        annotations: [{
            content: 'Funds available?'
        }]
    }, {
        id: 'node11', height: 60, offsetX: (centerX - 50) + 230, offsetY: 330,
        shape: { type: 'Flow', shape: 'Process' },
        annotations: [{
            content: 'Enter payment method'
        }]
    }, {
        id: 'transaction_entered', height: 60, offsetX: (centerX - 50), offsetY: 630,
        shape: { type: 'Flow', shape: 'Terminator' },
        annotations: [{
            content: 'Log transaction'
        }]
    }, {
        id: 'node12', height: 60, offsetX: (centerX - 50) + 180, offsetY: 630,
        shape: { type: 'Flow', shape: 'Process' },
        annotations: [{
            content: 'Reconcile the entries'
        }]
    }, {
        id: 'transaction_completed', height: 60, offsetX: (centerX - 50), offsetY: 530,
        shape: { type: 'Flow', shape: 'Process' },
        annotations: [{
            content: 'Complete Transaction'
        }]
    }, {
        id: 'data', height: 45, offsetX: (centerX - 50) - 190, offsetY: 530,
        shape: { type: 'Flow', shape: 'Data' },
        annotations: [{
            content: 'Send e-mail', margin: { left: 25, right: 25 }
        }]
    }, {
        id: 'node10', height: 70, offsetX: (centerX - 50) + 175, offsetY: 530,
        shape: { type: 'Flow', shape: 'DirectData' },
        annotations: [{ content: 'Customer Database', margin: { left: 25, right: 25 } }]
    }];
    //Initializes the Connectors for the diagram
    var connectors = [
        {
            id: 'connector1', sourceID: 'NewIdea', targetID: 'Meeting'
        },
        { id: 'connector2', sourceID: 'Meeting', targetID: 'BoardDecision' },
        { id: 'connector3', sourceID: 'BoardDecision', targetID: 'Project' },
        {
            id: 'connector4', sourceID: 'Project',
            annotations: [{ content: 'Yes', style: { fill: 'white' } }], targetID: 'End'
        },
        {
            id: 'connector5', sourceID: 'End',
            annotations: [{ content: 'Yes', style: { fill: 'white' } }], targetID: 'transaction_completed'
        },
        { id: 'connector6', sourceID: 'transaction_completed', targetID: 'transaction_entered' },
        { id: 'connector7', sourceID: 'transaction_completed', targetID: 'data' },
        { id: 'connector8', sourceID: 'transaction_completed', targetID: 'node10' },
        {
            id: 'connector9', sourceID: 'node11',type:'Orthogonal', targetID: 'Meeting',
            segments: [{ direction: 'Top', type: 'Orthogonal', length: 120 }]
        },
        {
            id: 'connector10', sourceID: 'End',type:'Orthogonal', annotations: [{ content: 'No', style: { fill: 'white' } }],
            targetID: 'node11', segments: [{ direction: 'Right', type: 'Orthogonal', length: 100 }]
        },
        {
            id: 'connector11', sourceID: 'Project',type:'Orthogonal', annotations: [{ content: 'No', style: { fill: 'white' } }],
            targetID: 'node11'
        },
        {
            id: 'connector12', style: { strokeDashArray: '2,2' },
            sourceID: 'transaction_entered', targetID: 'node12'
        }
    ];
    var interval = [1, 9, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75];
    var gridlines = { lineColor: '#e0e0e0', lineIntervals: interval };
    //Initializes diagram control
    var diagram = new ej.diagrams.Diagram({
        width: '100%', height: '700px', nodes: nodes, connectors: connectors,
        drawingObject:{},
        selectionChange:function (args) {selectionChange(args);},
        historyChange:function (args) {historyChange(args);},
        tool:ej.diagrams.DiagramTools.Default,
        snapSettings: { horizontalGridlines: gridlines, verticalGridlines: gridlines },
        //Sets the default values of a node
        getNodeDefaults: function (node) {
            var obj = {};
            if (obj.width === undefined) {
                obj.width = 145;
            } else {
                var ratio = 100 / obj.width;
                obj.width = 100;
                obj.height *= ratio;
            }
            obj.style = { fill: '#357BD2', strokeColor: 'white' };
            obj.annotations = [{ style: { color: 'white', fill: 'transparent' } }];
            obj.ports = getNodePorts(node);
            return obj;
        },
        //Sets the default values of a Connector.
        getConnectorDefaults: function (obj) {
            if (obj.id.indexOf('connector') !== -1) {
                obj.targetDecorator = { shape: 'Arrow', width: 10, height: 10 };
            }
        },
        scrollChange: function  (args) {
            if(args.panState !=='Start'){
                var zoomCurrentValue = document.getElementById("btnZoomIncrement").ej2_instances[0];
                zoomCurrentValue.content = Math.round(diagram.scrollSettings.currentZoom*100) + ' %';
                }
        },
        //Sets the Node style for DragEnter element.
        dragEnter: function (args) {
            var obj = args.element;
            if (obj instanceof ej.diagrams.Node) {
                var oWidth = obj.width;
                var oHeight = obj.height;
                var ratio = 100 / obj.width;
                obj.width = 100;
                obj.height *= ratio;
                obj.offsetX += (obj.width - oWidth) / 2;
                obj.offsetY += (obj.height - oHeight) / 2;
                obj.style = { fill: '#357BD2', strokeColor: 'white' };
            }
        }
    });
    diagram.appendTo('#diagram');

    function selectionChange(args){
        if(args.state === 'Changed'){
            var selectedItems = diagram.selectedItems.nodes;
                selectedItems = selectedItems.concat(diagram.selectedItems.connectors);
            if(selectedItems.length===0){
                toolbarObj.items[6].disabled = true;
                toolbarObj.items[7].disabled = true;
                toolbarObj.items[19].disabled = true;
                toolbarObj.items[20].disabled = true;
                toolbarObj.items[25].disabled = true;
                toolbarObj.items[29].disabled = true;
                toolbarObj.items[31].disabled = true;
                disableMultiselectedItems();
            }
            if(selectedItems.length === 1){
               
                enableItems();
                disableMultiselectedItems();
                
                if(selectedItems[0].children !== undefined && selectedItems[0].children.length>0){
                    toolbarObj.items[27].disabled = false;
                }
                else{
                    toolbarObj.items[27].disabled = true;
                }
                
            }
            
            if(selectedItems.length > 1){
               enableItems();
                toolbarObj.items[22].disabled = false;
                toolbarObj.items[23].disabled = false;
                toolbarObj.items[27].disabled = false;
                if(selectedItems.length>2){
                toolbarObj.items[23].disabled = false;
                }
                else{
                toolbarObj.items[23].disabled = true;
                }
            }

        }
    }

    function historyChange(args){
        if(diagram.historyManager.undoStack.length>0){
            toolbarObj.items[10].disabled = false;
        }
        else{
            toolbarObj.items[10].disabled = true;
        }
        if(diagram.historyManager.redoStack.length>0){
            toolbarObj.items[11].disabled = false;
        }
        else{
            toolbarObj.items[11].disabled = true;
        }
    }

    function enableItems()
    {
                toolbarObj.items[6].disabled = false;
                toolbarObj.items[7].disabled = false;
                toolbarObj.items[19].disabled = false;
                toolbarObj.items[20].disabled = false;
                toolbarObj.items[25].disabled = false;
                toolbarObj.items[29].disabled = false;
                toolbarObj.items[31].disabled = false;
    }
    function disableMultiselectedItems()
    {
        toolbarObj.items[22].disabled = true;
        toolbarObj.items[23].disabled = true;
        toolbarObj.items[27].disabled = true;
    }

    //Initialize the flowshapes for the symbol palatte
    var shapes = [
        { id: 'terminator', shape: { type: 'Flow', shape: 'Terminator' } },
        { id: 'process', shape: { type: 'Flow', shape: 'Process' } },
        { id: 'decision', shape: { type: 'Flow', shape: 'Decision' } },
        { id: 'document', shape: { type: 'Flow', shape: 'Document' } },
        { id: 'preDefinedProcess', shape: { type: 'Flow', shape: 'PreDefinedProcess' } },
        { id: 'paperTap', shape: { type: 'Flow', shape: 'PaperTap' } },
        { id: 'directData', shape: { type: 'Flow', shape: 'DirectData' } },
        { id: 'sequentialData', shape: { type: 'Flow', shape: 'SequentialData' } },
        { id: 'sort', shape: { type: 'Flow', shape: 'Sort' } },
        { id: 'multiDocument', shape: { type: 'Flow', shape: 'MultiDocument' } },
        { id: 'collate', shape: { type: 'Flow', shape: 'Collate' } },
        { id: 'summingJunction', shape: { type: 'Flow', shape: 'SummingJunction' } },
        { id: 'or', shape: { type: 'Flow', shape: 'Or' } },
        { id: 'internalStorage', shape: { type: 'Flow', shape: 'InternalStorage' } },
        { id: 'extract', shape: { type: 'Flow', shape: 'Extract' } },
        { id: 'manualOperation', shape: { type: 'Flow', shape: 'ManualOperation' } },
        { id: 'merge', shape: { type: 'Flow', shape: 'Merge' } },
        { id: 'offPageReference', shape: { type: 'Flow', shape: 'OffPageReference' } },
        { id: 'sequentialAccessStorage', shape: { type: 'Flow', shape: 'SequentialAccessStorage' } },
        { id: 'annotation', shape: { type: 'Flow', shape: 'Annotation' } },
        { id: 'annotation2', shape: { type: 'Flow', shape: 'Annotation2' } },
        { id: 'data', shape: { type: 'Flow', shape: 'Data' } },
        { id: 'card', shape: { type: 'Flow', shape: 'Card' } },
        { id: 'delay', shape: { type: 'Flow', shape: 'Delay' } },
    ];
    //Initializes connector symbols for the symbol palette
    var connectorSymbols = [
        {
            id: 'Link1', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
            style: { strokeWidth: 1, strokeColor: '#757575' }, targetDecorator: { shape: 'Arrow', style:{strokeColor: '#757575', fill: '#757575'} }
        },
        {
            id: 'link3', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
            targetDecorator: { shape: 'None' }, style: { strokeWidth: 1, strokeColor: '#757575' }
        },
        {
            id: 'Link21', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
            style: { strokeWidth: 1, strokeColor: '#757575' }, targetDecorator: { shape: 'Arrow', style:{strokeColor: '#757575', fill: '#757575'} }
        },
        {
            id: 'link23', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
            targetDecorator: { shape: 'None' }, style: { strokeWidth: 1, strokeColor: '#757575' },
        },
        {
            id: 'link33', type: 'Bezier', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
            targetDecorator: { shape: 'None' }, style: { strokeWidth: 1, strokeColor: '#757575' },
        },
    ];
    //Initializes the symbol palette
    var palette = new ej.diagrams.SymbolPalette({
        expandMode: 'Multiple',
        palettes: [
            { id: 'flow', expanded: true, symbols: shapes, iconCss: 'e-ddb-icons e-flow', title: 'Flow Shapes' },
            { id: 'connectors', expanded: true, symbols: connectorSymbols, iconCss: 'e-ddb-icons e-connector', title: 'Connectors' }
        ],
        width: '100%', height: '700px', symbolHeight: 60, symbolWidth: 60,
        getNodeDefaults: function (symbol) {
            if (symbol.id === 'terminator' || symbol.id === 'process') {
                symbol.width = 80;
                symbol.height = 40;
            }
            else if (symbol.id === 'decision' || symbol.id === 'document' || symbol.id === 'preDefinedProcess' ||
                symbol.id === 'paperTap' || symbol.id === 'directData' || symbol.id === 'multiDocument' || symbol.id === 'data') {
                symbol.width = 50;
                symbol.height = 40;
            }
            else {
                symbol.width = 50;
                symbol.height = 50;
            }
            symbol.style.strokeColor = '#757575';
        },
        symbolMargin: { left: 15, right: 15, top: 15, bottom: 15 },
        getSymbolInfo: function (symbol) {
            return { fit: true };
        }
    });
    palette.appendTo('#symbolpalette');
    addEvents();
function toolbarItems(){
    var items = [
        { prefixIcon: 'e-icons e-circle-add', tooltipText: 'New Diagram' },
        { prefixIcon: 'e-icons e-folder-open', tooltipText: 'Open Diagram', },
        { prefixIcon: 'e-icons e-save', tooltipText: 'Save Diagram' },
        { prefixIcon: 'e-print e-icons', tooltipText: 'Print Diagram'},
        { type: 'Input', tooltipText: 'Export Diagram',template: '<button id="exportBtn" style="width:100%;"></button>'},
                { type: 'Separator' },
        {disabled:true, prefixIcon: 'e-cut e-icons', tooltipText: 'Cut',cssClass:'tb-item-middle tb-item-lock-category' },
        {disabled:true,  prefixIcon: 'e-copy e-icons', tooltipText: 'Copy',cssClass:'tb-item-middle tb-item-lock-category' },
        { prefixIcon: 'e-icons e-paste', tooltipText: 'Paste',disabled:true },
                            {type: 'Separator' },
        {disabled:true,  prefixIcon: 'e-icons e-undo tb-icons', tooltipText: 'Undo',cssClass: 'tb-item-start tb-item-undo' },
        {disabled:true,  prefixIcon: 'e-icons e-redo tb-icons', tooltipText: 'Redo',cssClass: 'tb-item-end tb-item-redo' },
                        { type: 'Separator',},
        { prefixIcon: 'e-pan e-icons', tooltipText: 'Pan Tool',cssClass:'tb-item-start pan-item'},
        { prefixIcon: 'e-mouse-pointer e-icons', tooltipText: 'Select Tool',cssClass:'tb-item-middle tb-item-selected'},
        { tooltipText: 'Draw Connectors',template: '<button id="conTypeBtn" style="width:100%;"></button>',cssClass:'tb-item-middle'},
        { tooltipText: 'Draw Shapes',template: '<button id="shapesBtn" style="width:100%;"></button>',cssClass:'tb-item-middle'},
        { prefixIcon: 'e-caption e-icons', tooltipText: 'Text Tool',cssClass:'tb-item-end' },
                        { type: 'Separator',},
        {disabled:true,  prefixIcon: 'e-icons e-lock', tooltipText: 'Lock' ,cssClass:'tb-item-middle tb-item-lock-category' },
        {disabled:true,  prefixIcon: 'e-trash e-icons', tooltipText: 'Delete',cssClass:'tb-item-middle tb-item-lock-category' },
                        { type: 'Separator',align:'Center' },
        
        {disabled:true,  type: 'Input', tooltipText: 'Align Objects',template: '<button id="alignBtn" style="width:100%;"></button>',cssClass: 'tb-item-middle  tb-item-align-category'},
        {disabled:true,  type: 'Input', tooltipText: 'Distribute Objects',template: '<button id="distributeBtn" style="width:100%;"></button>',cssClass: 'tb-item-middle tb-item-space-category'},
                    { type: 'Separator', },
        {disabled:true,  type: 'Input', tooltipText: 'Order Commands',template: '<button id="orderBtn" style="width:100%;"></button>',cssClass: 'tb-item-middle tb-item-lock-category'},
                        { type: 'Separator'},
        {disabled:true,  type: 'Input', tooltipText: 'Group/Ungroup',template: '<button id="groupBtn" style="width:100%;"></button>',cssClass:'tb-item-middle tb-item-align-category'},
                        { type: 'Separator'},
        {disabled:true,  type: 'Input', tooltipText: 'Rotate',template: '<button id="rotateBtn" style="width:100%;"></button>',cssClass:'tb-item-middle tb-item-lock-category'},
                        { type: 'Separator'},
        {disabled:true,  type: 'Input', tooltipText: 'Flip',template: '<button id="flipBtn" style="width:100%;"></button>',cssClass:'tb-item-middle tb-item-lock-category'},
                        { type: 'Separator'},
        {
            cssClass: 'tb-item-end tb-zoom-dropdown-btn', template: '<button id="btnZoomIncrement"></button>',
        },
    ];
    return items;
}
var conTypeBtn = new ej.splitbuttons.DropDownButton({
    items: conTypeItems, iconCss:'e-ddb-icons e-connector e-icons',
    select: function (args) {onConnectorSelect(args);}
});
conTypeBtn.appendTo('#conTypeBtn');
var shapesBtn = new ej.splitbuttons.DropDownButton({
    items:shapesItems,iconCss: 'e-shapes e-icons',
    select: function (args){onShapesSelect(args);}
});
shapesBtn.appendTo('#shapesBtn');
var btnZoomIncrement = new ej.splitbuttons.DropDownButton({ items: zoomMenuItems, content: Math.round(diagram.scrollSettings.currentZoom*100) + ' %', select: zoomChange,
});
btnZoomIncrement.appendTo('#btnZoomIncrement');

var exportBtn = new ej.splitbuttons.DropDownButton({
    items: exportItems, iconCss: 'e-export e-icons',  select: onselectExport,
 });
 exportBtn.appendTo('#exportBtn');

var groupBtn = new ej.splitbuttons.DropDownButton({
    items: groupItems, iconCss: 'e-icons e-group-1',select:onSelectGroup
});
groupBtn.appendTo('#groupBtn');
var alignBtn = new ej.splitbuttons.DropDownButton({
    items:alignItems, iconCss:'sf-icon-align-center-1',select:onSelectAlignObjects
});
alignBtn.appendTo('#alignBtn');

var distributeBtn = new ej.splitbuttons.DropDownButton({
    items:distributeItems, iconCss:'sf-icon-distribute-vertical',select:onSelectDistributeObjects
});
distributeBtn.appendTo('#distributeBtn');
var orderBtn = new ej.splitbuttons.DropDownButton({
    items:orderItems, iconCss:'sf-icon-order',select:onSelectOrder
});
orderBtn.appendTo('#orderBtn');
var rotateBtn = new ej.splitbuttons.DropDownButton({
    items:rotateItems, iconCss:'e-icons e-repeat',select:onSelectRotate
});
rotateBtn.appendTo('#rotateBtn');
var flipBtn = new ej.splitbuttons.DropDownButton({
    items:flipItems, iconCss:'sf-icon-flip-horizontal',select:onSelectFlip
});
flipBtn.appendTo('#flipBtn');
var rotateItems = [
    {iconCss:'e-icons e-transform-right',text: 'Rotate Clockwise'},
    {iconCss:'e-icons e-transform-left',text: 'Rotate Counter-Clockwise'}
];
var flipItems = [
    {iconCss:'e-icons e-flip-horizontal',text: 'Flip Horizontal'},
    {iconCss:'e-icons e-flip-vertical',text: 'Flip Vertical'}
];
var alignItems = [
    {
        iconCss: 'sf-icon-align-left-1', text: 'Align Left', 
    },
    {
        iconCss: 'sf-icon-align-center-1', text: 'Align Center',
    },
    {
        iconCss: 'sf-icon-align-right-1', text: 'Align Right',
    },
    {
        iconCss: 'sf-icon-align-top-1', text: 'Align Top',
    },
    {
        iconCss: 'sf-icon-align-middle-1', text: 'Align Middle',
    },
    {
        iconCss: 'sf-icon-align-bottom-1', text: 'Align Bottom',
    },
];
var distributeItems = [
    { iconCss: 'sf-icon-distribute-vertical', text: 'Distribute Objects Vertically',},
    { iconCss: 'sf-icon-distribute-horizontal', text: 'Distribute Objects Horizontally',},
];
var orderItems = [
    { iconCss: 'e-icons e-bring-forward', text: 'Bring Forward'},
    { iconCss: 'e-icons e-bring-to-front', text: 'Bring To Front'},
    { iconCss: 'e-icons e-send-backward', text: 'Send Backward'},
    { iconCss: 'e-icons e-send-to-back', text: 'Send To Back'}
];
var zoomMenuItems = [
    { text: 'Zoom In' },{ text: 'Zoom Out' },{ text: 'Zoom to Fit' },{ text: 'Zoom to 50%' },
    { text: 'Zoom to 100%' },{ text: 'Zoom to 200%' },
                    ];
 var conTypeItems = [
                     {text: 'Straight',iconCss: 'e-icons e-line'},
                     {text: 'Orthogonal',iconCss: 'sf-icon-orthogonal'},
                     {text: 'Bezier',iconCss: 'sf-icon-bezier'}
                    ];
var shapesItems = [
                    {text: 'Rectangle',iconCss: 'e-rectangle e-icons'},
                     {text: 'Ellipse',iconCss: ' e-circle e-icons'},
                     {text: 'Polygon',iconCss: 'e-line e-icons'}
];
 var exportItems = [
        {text:'JPG'},{text:'PNG'},{text:'BMP'},{text:'SVG'}
 ];
 var groupItems = [
    {text:'Group',iconCss:'e-icons e-group-1'},{text:'Ungroup',iconCss:'e-icons e-ungroup-1'}
 ];

        //Initialize Toolbar component
        var toolbarObj = new ej.navigations.Toolbar({
            clicked: function (args) {toolbarClick(args);},
            created: function(args) {
                if(diagram!== undefined){
                    var conTypeBtn = new ej.splitbuttons.DropDownButton({
                        items: conTypeItems, iconCss:'e-ddb-icons e-connector e-icons',
                        select: function (args) {onConnectorSelect(args);}
                    });
                    conTypeBtn.appendTo('#conTypeBtn');
                    var btnZoomIncrement = new ej.splitbuttons.DropDownButton({ items: zoomMenuItems, content: Math.round(diagram.scrollSettings.currentZoom*100) + ' %', select: zoomChange,
                    });
                    btnZoomIncrement.appendTo('#btnZoomIncrement');
                    var shapesBtn = new ej.splitbuttons.DropDownButton({
                        items:shapesItems,iconCss: 'e-shapes e-icons',
                        select: function (args){onShapesSelect(args);}
                    });
                    shapesBtn.appendTo('#shapesBtn');
                    var exportBtn = new ej.splitbuttons.DropDownButton({
                        items: exportItems, iconCss: 'e-icons e-export',  select: function (args) {onselectExport(args);},
                     });
                     exportBtn.appendTo('#exportBtn');
                    
                    var groupBtn = new ej.splitbuttons.DropDownButton({
                        items: groupItems, iconCss: 'e-icons e-group-1',select: function (args) {onSelectGroup(args);}
                    });
                    groupBtn.appendTo('#groupBtn');
                    var alignBtn = new ej.splitbuttons.DropDownButton({
                        items:alignItems, iconCss:'sf-icon-align-center-1',select: function (args) {onSelectAlignObjects(args);}
                    });
                    alignBtn.appendTo('#alignBtn');
                    
                    var distributeBtn = new ej.splitbuttons.DropDownButton({
                        items:distributeItems, iconCss:'sf-icon-distribute-vertical',select: function (args) {onSelectDistributeObjects(args);}
                    });
                    distributeBtn.appendTo('#distributeBtn');
                    var orderBtn = new ej.splitbuttons.DropDownButton({
                        items:orderItems, iconCss:'e-icons e-order',select: function (args) {onSelectOrder(args);}
                    });
                    orderBtn.appendTo('#orderBtn');
                    var rotateBtn = new ej.splitbuttons.DropDownButton({
                        items:rotateItems, iconCss:'e-icons e-repeat',select: function (args) {onSelectRotate(args);}
                    });
                    rotateBtn.appendTo('#rotateBtn');
                    var flipBtn = new ej.splitbuttons.DropDownButton({
                        items:flipItems, iconCss:'e-icons e-flip-horizontal',select: function (args) {onSelectFlip(args);}
                    });
                    flipBtn.appendTo('#flipBtn');
                    toolbarObj.refreshOverflow();
                }

            },
            items: toolbarItems(),
            overflowMode: 'Scrollable',
            width:'100%'
     });
     
    toolbarObj.appendTo('#toolbarEditor');
// To perform zoom operation
function zoomChange(args){
    var zoomCurrentValue = document.getElementById("btnZoomIncrement").ej2_instances[0];
        var currentZoom = diagram.scrollSettings.currentZoom;
        var zoom = {};
        switch (args.item.text) {
            case 'Zoom In':
                diagram.zoomTo({ type: 'ZoomIn', zoomFactor: 0.2 });
                zoomCurrentValue.content = (diagram.scrollSettings.currentZoom * 100).toFixed() + '%';
                break;
            case 'Zoom Out':
                diagram.zoomTo({ type: 'ZoomOut', zoomFactor: 0.2 });
                zoomCurrentValue.content = (diagram.scrollSettings.currentZoom * 100).toFixed() + '%';
                break;
            case 'Zoom to Fit':
                diagram.fitToPage({ mode: 'Page', region: 'Content'});
                zoomCurrentValue.content = diagram.scrollSettings.currentZoom;
                break;
            case 'Zoom to 50%':
                zoom.zoomFactor = (0.5 / currentZoom) - 1;
                diagram.zoomTo(zoom);
                break;
            case 'Zoom to 100%':
                zoom.zoomFactor = (1 / currentZoom) - 1;
                diagram.zoomTo(zoom);
                break;
            case 'Zoom to 200%':
                zoom.zoomFactor = (2 / currentZoom) - 1;
                diagram.zoomTo(zoom);
                break;
        }
      
        zoomCurrentValue.content = Math.round(diagram.scrollSettings.currentZoom*100) + ' %';
        
}

function onConnectorSelect(args){
    diagram.clearSelection();
    diagram.drawingObject = {type:args.item.text};
    diagram.tool = ej.diagrams.DiagramTools.ContinuousDraw;
    diagram.selectedItems.userHandles = [];
    diagram.dataBind();
}

function onShapesSelect(args){
    diagram.clearSelection();
    diagram.drawingObject = {shape:{shape:args.item.text}};
    diagram.tool = ej.diagrams.DiagramTools.ContinuousDraw;
    diagram.selectedItems.userHandles = [];
    diagram.dataBind();
}
//Export the diagraming object based on the format.
function onselectExport(args) {
    var exportOptions = {};
    exportOptions.format = args.item.text;
    exportOptions.mode = 'Download';
    exportOptions.region = 'PageSettings';
    exportOptions.fileName = 'Export';
    exportOptions.margin = { left: 0, top: 0, bottom: 0, right: 0 };
    diagram.exportDiagram(exportOptions);
}

function onSelectGroup(args){
    if(args.item.text === 'Group'){
        diagram.group();
    }
    else if(args.item.text === 'Ungroup'){
        diagram.unGroup();
    }
}

function onSelectAlignObjects(args){
    var item = args.item.text;
    var alignType = item.replace('Align', '');
    var alignType1 = alignType.charAt(0).toUpperCase() + alignType.slice(1);
    diagram.align(alignType1.trim());
}
function onSelectDistributeObjects(args){
    if(args.item.text === 'Distribute Objects Vertically'){
        diagram.distribute('BottomToTop');
    }
    else{
        diagram.distribute('RightToLeft');
    }
}
function onSelectOrder(args){
    switch(args.item.text){
        case 'Bring Forward':
            diagram.moveForward();
        break;
        case 'Bring To Front':
            diagram.bringToFront();
        break;
        case 'Send Backward':
            diagram.sendBackward();
        break;
        case 'Send To Back':
            diagram.sendToBack();
        break;
    }
}

function onSelectRotate(args){
    if(args.item.text === 'Rotate Clockwise'){
        diagram.rotate(diagram.selectedItems,90);
    }
    else{
        diagram.rotate(diagram.selectedItems,-90);
    }
}
function onSelectFlip(args){
    flipObjects(args.item.text);
}

// To flip diagram objects
function flipObjects(flipType)
{
    var selectedObjects = diagram.selectedItems.nodes.concat(diagram.selectedItems.connectors);
 for(i=0;i<selectedObjects.length;i++)
 {
    selectedObjects[i].flip = flipType === 'Flip Horizontal'? 'Horizontal':'Vertical';
 }
 diagram.dataBind();
}

function toolbarClick(args){
    var item = args.item.tooltipText;
    switch(item)
    {
        case 'Undo':
            diagram.undo();
            break;
        case 'Redo':
            diagram.redo();
            break;
        case 'Lock':
            lockObject();
            break;
        case 'Cut':
            diagram.cut();
            toolbarObj.items[8].disabled = false;
            break;
        case 'Copy':
            diagram.copy();
            toolbarObj.items[8].disabled = false;
            break;
        case 'Paste':
            diagram.paste();
            break;
        case'Delete':
             diagram.remove();
            break;
        case 'Select Tool':
            diagram.clearSelection();
            diagram.tool = ej.diagrams.DiagramTools.Default;
            break;
        case 'Text Tool':
            diagram.clearSelection();
            diagram.selectedItems.userHandles = [];
            diagram.drawingObject = { shape: { type: 'Text' }, };
            diagram.tool = ej.diagrams.DiagramTools.ContinuousDraw;
            break;
        case 'Pan Tool':
            diagram.clearSelection();
            diagram.tool = ej.diagrams.DiagramTools.ZoomPan;
            break;
        case 'New Diagram':
            diagram.clear();
            historyChange();
            break;
        case 'Print Diagram':
            printDiagram(args);
            break;
        case 'Save Diagram':
            download(diagram.saveDiagram());
            break;
        case 'Open Diagram':
            document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button').click();
            break;
    }
    diagram.dataBind();
}

var uploadObject = new ej.inputs.Uploader({
    asyncSettings: {
        saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
    },success: onUploadSuccess,showFileList:false
    
});
uploadObject.appendTo('#fileupload');

function onUploadSuccess(args) {
    var file = args.file;
    var rawFile = file.rawFile;
    var reader = new FileReader();
    reader.readAsText(rawFile);
    reader.onloadend = loadDiagram;
}
//Load the diagraming object.
function loadDiagram(event){
    diagram.loadDiagram(event.target.result);
}

function printDiagram(args){
var options = {};
options.mode = 'Download';
options.region = 'Content';
options.multiplePage = diagram.pageSettings.multiplePage;
options.pageHeight = diagram.pageSettings.height;
options.pageWidth = diagram.pageSettings.width;
diagram.print(options);
}

function download(data){
    if(window.navigator.msSaveBlob){
        var blob = new Blob([data], { type: 'data:text/json;charset=utf-8,' });
        window.navigator.msSaveOrOpenBlob(blob, 'Diagram.json');
    }
    else {
        var dataString = 'data:text/json;charset=utf-8,' + encodeURIComponent(data);
        var ele = document.createElement('a'); 
        ele.href = dataString; 
        ele.download = 'Diagram.json';
        document.body.appendChild(ele);
        ele.click();
        ele.remove();
    }
}

// To lock diagram object
function lockObject (args) {
    for (var i = 0; i < diagram.selectedItems.nodes.length; i++) {
        var node = diagram.selectedItems.nodes[i];
        if (node.constraints & ej.diagrams.NodeConstraints.Drag) {
            node.constraints = ej.diagrams.NodeConstraints.PointerEvents | ej.diagrams.NodeConstraints.Select;
        } else {
            node.constraints = ej.diagrams.NodeConstraints.Default;
        }
    }
    for (var j = 0; j < diagram.selectedItems.connectors.length; j++) {
        var connector = diagram.selectedItems.connectors[j];
        if (connector.constraints & ej.diagrams.ConnectorConstraints.Drag) {
            connector.constraints = ej.diagrams.ConnectorConstraints.PointerEvents | ej.diagrams.ConnectorConstraints.Select;
        } else {
            connector.constraints = ej.diagrams.ConnectorConstraints.Default;
        }
    }
    diagram.dataBind();
}
    
};

