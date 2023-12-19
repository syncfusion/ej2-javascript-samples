
ej.diagrams.Diagram.Inject(ej.diagrams.UndoRedo);
this.default = function () {
    var nodes = [
        {
            id:"textNode1",
            // Position of the node
            offsetX:340,
            offsetY: 50,
            // Size of the node
            width: 500,
            height: 50,
            //Sets type of the node
            shape: { type: 'Text', content: 'Use Node Constraints to restrict end-users from performing certain operations on Node.' },
            //Customizes the appearances such as text, font, fill, and stroke.
            style: { strokeColor: 'none', fill: 'none', color: 'black', textAlign: 'Center', },
            constraints:  ej.diagrams.NodeConstraints.None
           
        },
        {
            id:"rectangle",
            offsetX:80,
            offsetY:160,
            width: 80,
            height: 65,
            // style: { fill: '#6BA5D7', strokeColor: 'white' },
            shape: { type: 'Basic', shape: 'Rectangle' },
            annotations: [{ content: 'Selection = False', }],
            constraints: ej.diagrams.SelectorConstraints.None
        },
        {
            id:"ellipse",
            offsetX:190,
            offsetY:160,
            width: 80,
            height: 80,
            // style: { fill: '#6BA5D7', strokeColor: 'white' },
            shape: { type: 'Basic', shape: 'Ellipse',cornerRadius: 10 },
            annotations: [{ content: 'Dragging = False' }],
            constraints:  ej.diagrams.NodeConstraints.Default & ~ ej.diagrams.NodeConstraints.Drag
           
        },
        {
            id:"heptagon",
            offsetX:295,
            offsetY:160,
            width: 80,
            height: 80,
            // style: { fill: '#6BA5D7', strokeColor: 'white' },
            shape: { type: 'Basic', shape: 'Heptagon' },
            annotations: [{ content: 'Delete = False' }],
            constraints: ej.diagrams.NodeConstraints.Default & ~ ej.diagrams.NodeConstraints.Delete
        },
        {
            id:"directData",
            offsetX:410,
            offsetY:160,
            width: 80,
            height: 80,
            rotateAngle:-45,
            // style: { fill: '#6BA5D7', strokeColor: 'white' },
            shape: { type: 'Flow', shape: 'DirectData' },
            annotations: [{ content: 'Rotate = False' }],
            constraints: ej.diagrams.NodeConstraints.Default &~ ej.diagrams.NodeConstraints.Rotate
        },
        {
            id:"Plus",
            offsetX:530,
            offsetY:160,
            width: 80,
            height: 80,
            // style: { fill: '#6BA5D7', strokeColor: 'white' },
            shape: { type: 'Basic', shape: 'Plus' },
            annotations: [{ content: 'TextEdit = False',constraints:ej.diagrams.AnnotationConstraints.ReadOnly }],
        },
        {
            id:"decision",
            offsetX:630,
            offsetY:160,
            width: 80,
            height: 80,
            // style: { fill: '#6BA5D7', strokeColor: 'white' },
            shape: { type: 'Flow', shape: 'Decision' },
            annotations: [{ content: 'Resizing = False' }],
           constraints: ej.diagrams.NodeConstraints.Default & ~ ej.diagrams.NodeConstraints.Resize
        },
        {
            id:"textNode2",
            // Position of the node
            offsetX:350,
            offsetY: 280,
            // Size of the node
            width: 550,
            height: 50,
            //Sets type of the node
            shape: { type: 'Text', content: 'Use Connector Constraints to restrict end-users from performing certain operations on Connector.' },
            //Customizes the appearances such as text, font, fill, and stroke.
            style: { strokeColor: 'none', fill: 'none', color: 'black', textAlign: 'Center', },
            constraints:  ej.diagrams.NodeConstraints.None
        },
    ];
    var connectors = [{
        id: "select",
        type: 'Orthogonal',
        annotations: [{ content: 'Selection = False' , horizontalAlignment: 'Right' , verticalAlignment: 'Bottom' }],
         constraints: ej.diagrams.ConnectorConstraints.Default & ~ej.diagrams.ConnectorConstraints.Select,
         style: {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
            strokeWidth: 2
        },
        targetDecorator: {
            style: {
                fill: '#6BA5D7',
                strokeColor: '#6BA5D7'
            }
        },
        sourcePoint: {
            x: 40,
            y: 350
        },
        targetPoint: {
            x: 120,
            y: 430
        }
    },
    {
        id: "connector2",
        type: 'Orthogonal',
        annotations: [{ content: 'Dragging = True',horizontalAlignment: 'Right' , verticalAlignment: 'Bottom'  }],
        constraints: ej.diagrams.ConnectorConstraints.Default | ~ej.diagrams.ConnectorConstraints.Drag,
         style: {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
            strokeWidth: 2
        },
        targetDecorator: {
            style: {
                fill: '#6BA5D7',
                strokeColor: '#6BA5D7'
            }
        },
        sourcePoint: {
            x: 140,
            y: 350
        },
        targetPoint: {
            x: 220,
            y: 430
        }
    },
    {
        id: "delete",
        type: 'Orthogonal',
        annotations: [{ content: 'Delete = False',horizontalAlignment: 'Right' , verticalAlignment: 'Bottom'  }],
        constraints: (ej.diagrams.ConnectorConstraints.Default | ej.diagrams.ConnectorConstraints.DragSegmentThumb) &~(ej.diagrams.ConnectorConstraints.Delete | ej.diagrams.ConnectorConstraints.Drag),
         style: {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
            strokeWidth: 2
        },
        targetDecorator: {
            style: {
                fill: '#6BA5D7',
                strokeColor: '#6BA5D7'
            }
        },
        sourcePoint: {
            x: 250,
            y: 350
        },
        targetPoint: {
            x: 320,
            y: 430
        }
    },
    {
        id: "endThumb",
        type: 'Orthogonal',
        annotations: [{ content: 'EndThumb = False' ,horizontalAlignment: 'Right' , verticalAlignment: 'Bottom' }],
        constraints:(ej.diagrams.SelectorConstraints.All ) &~ ( ej.diagrams.SelectorConstraints.ConnectorSourceThumb | ej.diagrams.SelectorConstraints.ConnectorTargetThumb),
         style: {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
            strokeWidth: 2
        },
        targetDecorator: {
            style: {
                fill: '#6BA5D7',
                strokeColor: '#6BA5D7'
            }
        },
        sourcePoint: {
            x: 360,
            y: 350
        },
        targetPoint: {
            x: 440,
            y: 430
        }
    },
    {
        id: "draggable",
        type: 'Orthogonal',
        annotations: [{ content: 'EndDraggable = False',horizontalAlignment: 'Right' , verticalAlignment: 'Bottom'  }],
        constraints: (ej.diagrams.ConnectorConstraints.Default | ej.diagrams.ConnectorConstraints.DragSegmentThumb) &~(ej.diagrams.ConnectorConstraints.DragSourceEnd | ej.diagrams.ConnectorConstraints.DragTargetEnd),
         style: {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
            strokeWidth: 2
        },
        targetDecorator: {
            style: {
                fill: '#6BA5D7',
                strokeColor: '#6BA5D7'
            }
        },
        sourcePoint: {
            x: 460,
            y: 350
        },
        targetPoint: {
            x: 540,
            y: 430
        }
    },
    {
        id: "segmentThumb",
        type: 'Orthogonal',
        annotations: [{ content: 'SegmentThumb = False',horizontalAlignment: 'Right' , verticalAlignment: 'Bottom'  }],
        constraints: ej.diagrams.ConnectorConstraints.Default &~ ej.diagrams.ConnectorConstraints.Drag,
         style: {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
            strokeWidth: 2
        },
        targetDecorator: {
            style: {
                fill: '#6BA5D7',
                strokeColor: '#6BA5D7'
            }
        },
        sourcePoint: {
            x: 580,
            y: 350
        },
        targetPoint: {
            x: 660,
            y: 430
        }
    },];
    
    var handles = [
        {
            name: 'delete', pathData: "M 7.04 22.13 L 92.95 22.13 L 92.95 88.8 C 92.95 91.92 91.55 94.58 88.76 96.74 C 85.97 98.91 82.55 100 78.52 100 L 21.48 100 C 17.45 100 14.03 98.91 11.24 96.74 C 8.45 94.58 7.04 91.92 7.04 88.8 z M 32.22 0 L 67.78 0 L 75.17 5.47 L 100 5.47 L 100 16.67 L 0 16.67 L 0 5.47 L 24.83 5.47 z",
            visible: true, offset: 0.5, side: 'Bottom', margin: { top: 0, bottom: 0, left: 0, right: 0 }
        }
    ];
    
    function getTool(action) {
        var tool;
        if (action === 'delete') {
            diagram.remove();
        }
        return tool;
    }
    
    var Zooming = new ej.buttons.CheckBox({ label: 'Zooming',checked:true, 
    change:function () { 
            diagram.constraints = diagram.constraints ^ ej.diagrams.DiagramConstraints.Zoom;
     }});
    Zooming.appendTo('#zooming');
    
    var undoRedo = new ej.buttons.CheckBox({ label: 'Undo/Redo', checked:true,
    change:function (args) { 
        diagram.constraints = diagram.constraints ^ ej.diagrams.DiagramConstraints.UndoRedo ;
        diagram.dataBind();
     } });
    undoRedo.appendTo('#undoRedo');
    
    
    var Editing = new ej.buttons.CheckBox({ label: 'Editing',checked:true,
    change:function (args) { 
        for (var i = 0; i < diagram.nodes.length; i++) {
            var node = diagram.nodes[i];
            for (var j = 0; j < node.annotations.length; j++) {
              if (node.annotations[j].content) {
                if (args.checked) {
                  if (node.id !== 'Plus') {
                    node.annotations[j].constraints =
                      node.annotations[j].constraints ^
                      ej.diagrams.AnnotationConstraints.ReadOnly;
                  }
                } else {
                  node.annotations[j].constraints =
                    node.annotations[j].constraints |
                    ej.diagrams.AnnotationConstraints.ReadOnly;
                }
              }
            }
          }
          for (var x = 0; x < diagram.connectors.length; x++) {
            var connector = diagram.connectors[x];
            for (var y = 0; y < connector.annotations.length; y++) {
              if (connector.annotations[y].content) {
                if (args.checked) {
                  if (connector.id === 'select') {
                    connector.constraints =
                      connector.constraints &
                      ~ej.diagrams.ConnectorConstraints.Select;
                  } else {
                    connector.annotations[y].constraints =
                      connector.annotations[y].constraints ^
                      ej.diagrams.AnnotationConstraints.ReadOnly;
                  }
                } else {
                  connector.annotations[y].constraints =
                    connector.annotations[y].constraints ^
                    ej.diagrams.AnnotationConstraints.ReadOnly;
                }
              }
            }
          }
          diagram.dataBind();
    }});
    Editing.appendTo('#editing');
    
var Selectable = new ej.buttons.CheckBox({ label: 'Selectable' ,checked:true,
change:function (args) { 
    for (var i = 0; i < diagram.nodes.length; i++) {
        var node = diagram.nodes[i];
        if (args.checked) {
            node.constraints  = node.constraints | ej.diagrams.NodeConstraints.Select;
        } 
        else 
        {
            node.constraints = node.constraints &~  ej.diagrams.NodeConstraints.Select;
        }
        diagram.dataBind();
    }
    for (var j = 0; j < diagram.connectors.length; j++) {
        var connector = diagram.connectors[j];
        if (args.checked) {
            if(connector.id ==="select"){
                connector.constraints=connectors.constraints^ej.diagrams.ConnectorConstraints.Select;
            }
            else{
                connector.constraints  = connector.constraints | ej.diagrams.ConnectorConstraints.Select;
            }
        } 
        else
        {
            if(connector.id ==="endThumb"){
                connector.constraints=connectors.constraints^ej.diagrams.ConnectorConstraints.Select;
            }
            else
            {
            connector.constraints = connector.constraints &~ ej.diagrams.ConnectorConstraints.Select;
            }
        }
        diagram.dataBind();
    }
    
}});
Selectable.appendTo('#selectable');

var Draggable = new ej.buttons.CheckBox({ label: 'Draggable',checked:true,
change:function (args) { 
    for (var i = 0; i < diagram.nodes.length; i++) {
        var nodes = diagram.nodes[i];
        if (args.checked) {
             if(nodes.id ==="ellipse"){
                    nodes.constraints =    ej.diagrams.NodeConstraints.Default & ~ ej.diagrams.NodeConstraints.Drag;
            }
            else{
                nodes.constraints = nodes.constraints | ej.diagrams.NodeConstraints.Drag;
            }
        } 
        else {
                nodes.constraints = nodes.constraints &~ ej.diagrams.NodeConstraints.Drag;
        }
        diagram.dataBind();
    }
    for (var j = 0; j < diagram.connectors.length; j++) {
        var connectors = diagram.connectors[j];
        if (args.checked) {
            connectors.constraints =  connectors.constraints | ej.diagrams.ConnectorConstraints.Drag;   
        } else 
        {
            connectors.constraints = connectors.constraints  &~ ej.diagrams.ConnectorConstraints.Drag;   
        }
        diagram.dataBind();
    }
}});
Draggable.appendTo('#draggable');  
    
    var Contextmenu = new ej.buttons.CheckBox({ label: 'Context Menu',checked:true,
    change:function (args) { 
        if (args.checked) {
            diagram.contextMenuSettings.show = true;
            diagram.refresh();
            } 
        else {
            diagram.contextMenuSettings.show = false;
            }
        diagram.dataBind();
    }});
    Contextmenu.appendTo('#contextmenu');

//selection change method
    selectionChange = function (args) 
    {
        if(args.state === 'Changing')
        {
            if(args.type === 'Addition')
            {
                if(args.newValue[0].id === "endThumb")
            {
                 diagram.selectedItems.constraints =(ej.diagrams.SelectorConstraints.All ) &~ ( ej.diagrams.SelectorConstraints.ConnectorSourceThumb | ej.diagrams.SelectorConstraints.ConnectorTargetThumb) ;
                args.newValue[0].constraints = (ej.diagrams.ConnectorConstraints.Default  | ej.diagrams.ConnectorConstraints.DragSegmentThumb) &~ (ej.diagrams.ConnectorConstraints.Drag);
            }
            else{
                diagram.selectedItems.constraints = ej.diagrams.SelectorConstraints.All;
                }
            }
            else
            {
                diagram.selectedItems.constraints = ej.diagrams.SelectorConstraints.All;
            }
                        
        }  
        if(args.state === "Changed")
        {
            if(args.newValue.length>0 && args.newValue[0] instanceof ej.diagrams.Node){
                diagram.selectedItems = { constraints: ej.diagrams.SelectorConstraints.All|ej.diagrams.SelectorConstraints.UserHandle, userHandles: handles };
                }
                else{
                    if(args.newValue.length>0 && args.newValue[0].id !== "endThumb"){
                        diagram.selectedItems = { constraints: ej.diagrams.SelectorConstraints.All &~ ej.diagrams.SelectorConstraints.UserHandle };
                    }
                    else{
                        diagram.selectedItems = { constraints: ej.diagrams.SelectorConstraints.All &~(ej.diagrams.SelectorConstraints.UserHandle|ej.diagrams.SelectorConstraints.ConnectorSourceThumb | ej.diagrams.SelectorConstraints.ConnectorTargetThumb)   };
                    }
                }
        }
    } ;

    var diagram = new ej.diagrams.Diagram({
        width: '100%', height: '600px', nodes: nodes,connectors: connectors,
        contextMenuSettings: {
            show: true,
           
        },
        rulerSettings: {
            showRulers: true
        },
        selectionChange: function (args) { selectionChange(args); },
        selectedItems: { constraints: ej.diagrams.SelectorConstraints.UserHandle, userHandles: handles },
        getCustomTool: getTool
    }, '#diagram');
};
