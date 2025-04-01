
ej.diagrams.Diagram.Inject(ej.diagrams.UndoRedo);
this.default = function () {
    //Initializes the nodes for the diagram
    var nodes = [
        {
            id:"textNode1",
            // Position of the node
            offsetX:340,
            offsetY: 50,
            height: 50,
            width: 550,
             //Customizes the appearances such as text, font, fill, and stroke.
            style : { strokeColor : 'none', fill : 'none', color : 'black', textAlign : 'Center' },
            constraints : ej.diagrams.NodeConstraints.None,
            //Sets type of the node
            shape: { type: 'Text', content: 'Use Node Constraints to restrict end-users from performing certain operations on Node.' },           
        },
        {
            id:"rectangle",
            offsetX:80,
            offsetY:160,
            height: 65,
            shape: { type: 'Basic', shape: 'Rectangle' },
            annotations: [{ content: 'Selection = False', }],
            constraints: ej.diagrams.SelectorConstraints.None
        },
        {
            id:"ellipse",
            offsetX:190,
            offsetY:160,
            height: 80,
            shape: { type: 'Basic', shape: 'Ellipse',cornerRadius: 10 },
            annotations: [{ content: 'Dragging = False' }],
            constraints:  ej.diagrams.NodeConstraints.Default & ~ ej.diagrams.NodeConstraints.Drag
           
        },
        {
            id:"heptagon",
            offsetX:295,
            offsetY:160,
            height: 80,
            shape: { type: 'Basic', shape: 'Heptagon' },
            annotations: [{ content: 'Delete = False' }],
            constraints: ej.diagrams.NodeConstraints.Default & ~ ej.diagrams.NodeConstraints.Delete
        },
        {
            id:"directData",
            offsetX:410,
            offsetY:160,
            height: 80,
            rotateAngle:-45,
            shape: { type: 'Flow', shape: 'DirectData' },
            annotations: [{ content: 'Rotate = False' }],
            constraints: ej.diagrams.NodeConstraints.Default &~ ej.diagrams.NodeConstraints.Rotate
        },
        {
            id:"Plus",
            offsetX:530,
            offsetY:160,
            height: 80,
            shape: { type: 'Basic', shape: 'Plus' },
            annotations: [{ content: 'TextEdit = False',constraints:ej.diagrams.AnnotationConstraints.ReadOnly }],
        },
        {
            id:"decision",
            offsetX:630,
            offsetY:160,
            height: 80,
            shape: { type: 'Flow', shape: 'Decision' },
            annotations: [{ content: 'Resizing = False' }],
           constraints: ej.diagrams.NodeConstraints.Default & ~ ej.diagrams.NodeConstraints.Resize
        },
        {
            id:"textNode2",
            // Position of the node
            offsetX:350,
            offsetY: 280,
            height: 50,
            width: 550,
            //Customizes the appearances such as text, font, fill, and stroke.
            style : { strokeColor : 'none', fill : 'none', color : 'black', textAlign : 'Center' },
            constraints : ej.diagrams.NodeConstraints.None,
            //Sets type of the node
            shape: { type: 'Text', content: 'Use Connector Constraints to restrict end-users from performing certain operations on Connector.' },
        },
    ];
    //Initializes the connectors for the diagram
    var connectors = [{
        id: "select",
        type: 'Orthogonal',
        annotations: [{ content: 'Selection = False' , horizontalAlignment: 'Right' , verticalAlignment: 'Bottom' }],
         constraints: ej.diagrams.ConnectorConstraints.Default & ~ej.diagrams.ConnectorConstraints.Select,
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
        sourcePoint: {
            x: 580,
            y: 350
        },
        targetPoint: {
            x: 660,
            y: 430
        }
    },];
    // Function to set default values for nodes
    function nodeDefaults(nodes) {
        // Apply default settings if the node is not 'textNode1' or 'textNode2'
        if(nodes.id !== "textNode1" && nodes.id !== "textNode2") {
        nodes.width = 80;
        nodes.style.fill = '#C7E6FF';
        nodes.style.strokeColor = '#1587FF';
        }
    }
    // Function to set default values for connectors
    function connectorDefaults(connectors) {
        connectors.style.strokeColor = '#6BA5D7';
        connectors.style.strokeWidth = 2;
        connectors.targetDecorator.style.strokeColor = '#6BA5D7';
        connectors.targetDecorator.style.fill = '#6BA5D7';
        return connectors;  // Return the modified connector
    }
    //Initializes the user handles for the diagram
    var handles = [
        {
            name: 'delete', pathData: "M 7.04 22.13 L 92.95 22.13 L 92.95 88.8 C 92.95 91.92 91.55 94.58 88.76 96.74 C 85.97 98.91 82.55 100 78.52 100 L 21.48 100 C 17.45 100 14.03 98.91 11.24 96.74 C 8.45 94.58 7.04 91.92 7.04 88.8 z M 32.22 0 L 67.78 0 L 75.17 5.47 L 100 5.47 L 100 16.67 L 0 16.67 L 0 5.47 L 24.83 5.47 z",
            visible: true, offset: 0.5, side: 'Bottom', margin: { top: 0, bottom: 0, left: 0, right: 0 }
        }
    ];
    // Function to handle actions performed by user handles
    function getTool(action) {
        var tool;
        // Check if the action is 'delete'
        if (action === 'delete') {
             // Remove the selected object from the diagram
            diagram.remove();
        }
        // Return the tool (undefined in this case)
        return tool;
    }
    // CheckBox used to enable zooming of the diagram
    var Zooming = new ej.buttons.CheckBox({ label: 'Zooming',checked:true, 
    change:function () { 
        // Toggle the zoom constraint for the diagram
            diagram.constraints = diagram.constraints ^ ej.diagrams.DiagramConstraints.Zoom;
     }});
     // Append the Zooming CheckBox to the element with id 'zooming'
    Zooming.appendTo('#zooming');

    // CheckBox used to enable undo/redo in the diagram
    var undoRedo = new ej.buttons.CheckBox({ label: 'Undo/Redo', checked:true,
    change:function () { 
        // Toggle the undo/redo constraint for the diagram
        diagram.constraints = diagram.constraints ^ ej.diagrams.DiagramConstraints.UndoRedo ;
        diagram.dataBind();
     } });
     // Append the undoRedo CheckBox to the element with id 'undoRedo'
    undoRedo.appendTo('#undoRedo');
    
    //CheckBox used to enable editing
    var Editing = new ej.buttons.CheckBox({ label: 'Editing',checked:true,
    change:function (args) { 
        // Iterate through all nodes in the diagram
        for (var i = 0; i < diagram.nodes.length; i++) {
            var node = diagram.nodes[i];
            // Check if the node has annotations with content
              if (node.annotations.length > 0 && node.annotations[0].content) {
                // If editing is enabled, remove ReadOnly constraint for annotations except 'Plus' node
                if (args.checked) {
                  if (node.id !== 'Plus') {
                    node.annotations[0].constraints =
                      node.annotations[0].constraints ^
                      ej.diagrams.AnnotationConstraints.ReadOnly;
                  }
                } else {
                    // If editing is disabled, add ReadOnly constraint for annotations
                  node.annotations[0].constraints =
                    node.annotations[0].constraints |
                    ej.diagrams.AnnotationConstraints.ReadOnly;
                }
              }
        }
        // Iterate through all connectors in the diagram
          for (var x = 0; x < diagram.connectors.length; x++) {
            var connector = diagram.connectors[x];
             // Check if the connector has annotations with content
              if (connector.annotations.length > 0 && connector.annotations[0].content) {
                if (args.checked) {
                    // If editing is enabled, handle 'select' connector differently
                  if (connector.id === 'select') {
                    connector.constraints =
                      connector.constraints &
                      ~ej.diagrams.ConnectorConstraints.Select;
                  } else {
                    // Remove ReadOnly constraint for connector annotations
                    connector.annotations[0].constraints =
                      connector.annotations[0].constraints ^
                      ej.diagrams.AnnotationConstraints.ReadOnly;
                  }
                } else {
                    // If editing is disabled, add ReadOnly constraint for connector annotations
                  connector.annotations[0].constraints =
                    connector.annotations[0].constraints ^
                    ej.diagrams.AnnotationConstraints.ReadOnly;
                }
              }
          }
          diagram.dataBind(); // Update the diagram with the new constraints
    }});
    // Append the Editing CheckBox to the element with id 'editing'
    Editing.appendTo('#editing');
   // CheckBox used to enable selection in the diagram
    var Selectable = new ej.buttons.CheckBox({ label: 'Selectable' ,checked:true,
    change:function (args) { 
         // Iterate through all nodes in the diagram
        for (var i = 0; i < diagram.nodes.length; i++) {
            var node = diagram.nodes[i];
            if (args.checked) {
                // If selection is enabled, add the Select constraint to the node
                node.constraints  = node.constraints | ej.diagrams.NodeConstraints.Select;
            } 
            else 
            {
                // If selection is disabled, remove the Select constraint from the node
                node.constraints = node.constraints &~  ej.diagrams.NodeConstraints.Select;
            }
            diagram.dataBind(); // Update the diagram with the new constraints
        }
        // Iterate through all connectors in the diagram
        for (var j = 0; j < diagram.connectors.length; j++) {
            var connector = diagram.connectors[j];
            if (args.checked) {
                // If selection is enabled
                if(connector.id ==="select"){
                    // Toggle the Select constraint for the 'select' connector
                    connector.constraints=connectors.constraints^ej.diagrams.ConnectorConstraints.Select;
                }
                else{
                    // Add the Select constraint to other connectors
                    connector.constraints  = connector.constraints | ej.diagrams.ConnectorConstraints.Select;
                }
            } 
            else
            {
                // If selection is disabled
                if(connector.id ==="endThumb"){
                    // Toggle the Select constraint for the 'endThumb' connector
                    connector.constraints=connectors.constraints^ej.diagrams.ConnectorConstraints.Select;
                }
                else
                {
                     // Remove the Select constraint from other connectors
                connector.constraints = connector.constraints &~ ej.diagrams.ConnectorConstraints.Select;
                }
            }
            diagram.dataBind(); // Update the diagram with the new constraints
        }
        
    }});
    // Append the Selectable CheckBox to the element with id 'selectable'
    Selectable.appendTo('#selectable');
    // CheckBox used to enable dragging interactions in the diagram
    var Draggable = new ej.buttons.CheckBox({ label: 'Draggable',checked:true,
    change:function (args) { 
         // Iterate through all nodes in the diagram
        for (var i = 0; i < diagram.nodes.length; i++) {
            var nodes = diagram.nodes[i];
            if (args.checked) {
                // If dragging is enabled, disable drag for the 'ellipse' node and enable drag for other nodes
                if(nodes.id ==="ellipse"){
                        nodes.constraints = ej.diagrams.NodeConstraints.Default & ~ ej.diagrams.NodeConstraints.Drag;
                }
                else{
                    nodes.constraints = nodes.constraints | ej.diagrams.NodeConstraints.Drag;
                }
            } 
            else {
                 // If dragging is disabled, remove the drag constraint from all nodes
                    nodes.constraints = nodes.constraints &~ ej.diagrams.NodeConstraints.Drag;
            }
            diagram.dataBind(); // Update the diagram with the new constraints
        }
        // Iterate through all connectors in the diagram
        for (var j = 0; j < diagram.connectors.length; j++) {
            var connectors = diagram.connectors[j];
            if (args.checked) {
                // If dragging is enabled, add the drag constraint to all connectors
                connectors.constraints = connectors.constraints | ej.diagrams.ConnectorConstraints.Drag;   
            } else 
            {
                // If dragging is disabled, remove the drag constraint from all connectors
                connectors.constraints = connectors.constraints  &~ ej.diagrams.ConnectorConstraints.Drag;   
            }
            diagram.dataBind(); // Update the diagram with the new constraints
        }
    }});
    // Append the Draggable CheckBox to the element with id 'draggable'
    Draggable.appendTo('#draggable');  
        
        //CheckBox used to enable context menu on right click
        var Contextmenu = new ej.buttons.CheckBox({ label: 'Context Menu',checked:true,
        change:function (args) { 
            if (args.checked) {
                // If context menu is enabled, show the context menu
                diagram.contextMenuSettings.show = true;
                diagram.refresh();
                } 
            else {
                // If context menu is disabled, hide the context menu
                diagram.contextMenuSettings.show = false;
                }
            diagram.dataBind(); // Update the diagram with the new settings
        }});
        // Append the Contextmenu CheckBox to the element with id 'contextMenu'
        Contextmenu.appendTo('#contextMenu');
        // Function to handle selection changes in the diagram
        function selectionChange (args) 
        {
            if(args.state === 'Changing')
            {
                if(args.type === 'Addition')
                {
                    if(args.newValue[0].id === "endThumb")
                {
                    // Disable connector source and target thumbs for 'endThumb' connector
                    diagram.selectedItems.constraints =(ej.diagrams.SelectorConstraints.All ) &~ ( ej.diagrams.SelectorConstraints.ConnectorSourceThumb | ej.diagrams.SelectorConstraints.ConnectorTargetThumb) ;
                    args.newValue[0].constraints = (ej.diagrams.ConnectorConstraints.Default  | ej.diagrams.ConnectorConstraints.DragSegmentThumb) &~ (ej.diagrams.ConnectorConstraints.Drag);
                }
                else{
                    // Enable all constraints for selected items
                    diagram.selectedItems.constraints = ej.diagrams.SelectorConstraints.All;
                    }
                }
                else
                {
                    // Enable all constraints for selected items
                    diagram.selectedItems.constraints = ej.diagrams.SelectorConstraints.All;
                }
                            
            }  
            if(args.state === "Changed")
            {
                // If a node is selected, enable user handles
                if(args.newValue.length>0 && args.newValue[0] instanceof ej.diagrams.Node){
                    diagram.selectedItems = { constraints: ej.diagrams.SelectorConstraints.All|ej.diagrams.SelectorConstraints.UserHandle, userHandles: handles };
                    }
                    else{
                        // If a connector other than 'endThumb' is selected, disable user handles
                        if(args.newValue.length>0 && args.newValue[0].id !== "endThumb"){
                            diagram.selectedItems = { constraints: ej.diagrams.SelectorConstraints.All &~ ej.diagrams.SelectorConstraints.UserHandle };
                        }
                        else{
                            // Disable user handles and connector thumbs for 'endThumb'
                            diagram.selectedItems = { constraints: ej.diagrams.SelectorConstraints.All &~(ej.diagrams.SelectorConstraints.UserHandle|ej.diagrams.SelectorConstraints.ConnectorSourceThumb | ej.diagrams.SelectorConstraints.ConnectorTargetThumb)   };
                        }
                    }
            }
        }
        //Initializes the diagram
        var diagram = new ej.diagrams.Diagram({
            width: '100%', height: '550px', nodes: nodes, connectors: connectors,
            contextMenuSettings: {
                show: true,   
            },
            rulerSettings: {
                showRulers: true
            },
            selectionChange: function (args) { selectionChange(args); },
            selectedItems: { constraints: ej.diagrams.SelectorConstraints.UserHandle, userHandles: handles },
            getCustomTool: getTool,// Set the custom tool handler
            getConnectorDefaults: function (connectors) {
                return connectorDefaults(connectors); // Set the default connector settings
            },
            getNodeDefaults: function (nodes) {
                return nodeDefaults(nodes); // Set the default node settings
            }
        }, '#diagram');
};
