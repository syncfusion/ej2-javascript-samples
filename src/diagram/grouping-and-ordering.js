/* jshint esversion: 6 */
/**
 * Sample for Grouping and Ordering diagram
 */


this.default = function () {

  // Function to create a node
  function createNode(id, offsetX, offsetY, width, height, shape, annotations, cornerRadius) {
    return {
      id: id,
      offsetX: offsetX,
      offsetY: offsetY,
      width: width,
      height: height,
      shape: { type: "Basic", shape: shape, cornerRadius: cornerRadius },
      annotations: annotations,
    };
  }

  // Function to create a group node
  function groupNode(id, children, padding, annotations) {
    return {
      id: id,
      children: children,
      padding: padding,
      annotations: annotations
    };
  }

  // Initialize nodes
  var nodes = [
    createNode('Diamond', 350, 250, 100, 100, 'Diamond', [{ content: 'Decision' }]),
    createNode('ellipse', 150, 250, 100, 60, 'Ellipse', [{ content: 'Start/Stop' }]),
    createNode('rectangle', 150, 400, 100, 60, 'Rectangle', [{ content: 'Process' }]),
    createNode('node1', 150, 100, 100, 55, 'Rectangle'),
    createNode('node2', 350, 100, 90, 55, 'Rectangle', [], 5),
    groupNode('group', ['node1', 'node2'], { left: 10, right: 10, top: 10, bottom: 10 }, [{ content: 'Group 1' }])
  ];

  //Initializes diagram control
  var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '500px',
    nodes: nodes,
    rulerSettings: { showRulers: true },
    drawingObject: { type: 'Orthogonal' },
    selectionChange: function (args) { selectionChange(args); },
    onUserHandleMouseDown: function (args) { handleUserHandleClick(args); },
  });
  diagram.appendTo('#diagram');

  // Initializes the user handles for interactive actions.
  var handles = [
    {
      name: 'Clone', pathData: 'M0,2.4879999 L0.986,2.4879999 0.986,9.0139999 6.9950027,9.0139999 6.9950027,10 0.986,10 C0.70400238,10 0.47000122,9.9060001 0.28100207,9.7180004 0.09400177,9.5300007 0,9.2959995 0,9.0139999 z M3.0050011,0 L9.0140038,0 C9.2960014,0 9.5300026,0.093999863 9.7190018,0.28199956 9.906002,0.47000027 10,0.70399952 10,0.986 L10,6.9949989 C10,7.2770004 9.906002,7.5160007 9.7190018,7.7110004 9.5300026,7.9069996 9.2960014,8.0049992 9.0140038,8.0049992 L3.0050011,8.0049992 C2.7070007,8.0049992 2.4650002,7.9069996 2.2770004,7.7110004 2.0890007,7.5160007 1.9950027,7.2770004 1.9950027,6.9949989 L1.9950027,0.986 C1.9950027,0.70399952 2.0890007,0.47000027 2.2770004,0.28199956 2.4650002,0.093999863 2.7070007,0 3.0050011,0 z', tooltip: { content: 'Clone' },
      visible: true, offset: 1, side: 'Bottom', margin: { top: 0, bottom: 0, left: 0, right: 0 }
    },
    {
      name: 'Delete', pathData: 'M0.54700077,2.2130003 L7.2129992,2.2130003 7.2129992,8.8800011 C7.2129992,9.1920013 7.1049975,9.4570007 6.8879985,9.6739998 6.6709994,9.8910007 6.406,10 6.0939997,10 L1.6659999,10 C1.3539997,10 1.0890004,9.8910007 0.87200136,9.6739998 0.65500242,9.4570007 0.54700071,9.1920013 0.54700077,8.8800011 z M2.4999992,0 L5.2600006,0 5.8329986,0.54600048 7.7599996,0.54600048 7.7599996,1.6660004 0,1.6660004 0,0.54600048 1.9270014,0.54600048 z', tooltip: { content: 'Delete' },
      visible: true, offset: 0, side: 'Bottom', margin: { top: 0, bottom: 0, left: 0, right: 0 }
    },
    {
      name: 'Draw', pathData: 'M3.9730001,0 L8.9730001,5.0000007 3.9730001,10.000001 3.9730001,7.0090005 0,7.0090005 0,2.9910006 3.9730001,2.9910006 z', tooltip: { content: 'Draw' },
      visible: true, offset: 0.5, side: 'Right', margin: { top: 0, bottom: 0, left: 0, right: 0 }
    },
  ];


  //Disables specific toolbar items based on the presence of annotations in selected items.
  function disableMultiselectedItems(selectedItems) {
    for (i = 0; i < selectedItems.length; i++) {
      if (selectedItems[i].annotations[0] !== undefined) {
        // Enable toolbar items when annotations are present
        toolbarObj.items.find(item => item.id === 'FontStyle').disabled = false;
        toolbarObj.items.find(item => item.id === 'FontSize').disabled = false;
        toolbarObj.items.find(item => item.id === 'Bold').disabled = false;
        toolbarObj.items.find(item => item.id === 'Italic').disabled = false;
        toolbarObj.items.find(item => item.id === 'Underline').disabled = false;
        toolbarObj.items.find(item => item.id === 'FontColor').disabled = false;
      }

      // Disable toolbar items when annotations are not present
      else {
        toolbarObj.items.find(item => item.id === 'FontStyle').disabled = true;
        toolbarObj.items.find(item => item.id === 'FontSize').disabled = true;
        toolbarObj.items.find(item => item.id === 'Bold').disabled = true;
        toolbarObj.items.find(item => item.id === 'Italic').disabled = true;
        toolbarObj.items.find(item => item.id === 'Underline').disabled = true;
        toolbarObj.items.find(item => item.id === 'FontColor').disabled = true;
      }
    }
  }

  //Handles changes in the selection state.
  function selectionChange(args) {
    if (args.state === "Changed") {
      var selectedItems = diagram.selectedItems.nodes;
      selectedItems = selectedItems.concat(diagram.selectedItems.connectors);
      // Disabling toolbar items when no items are selected
      if (selectedItems.length === 0) {
        for (var i = 0; i < toolbarObj.items.length; i++) {
          var itemId = toolbarObj.items[i].id;
          if (itemId === "Group" || itemId === "UnGroup" || itemId === "BringForward" || itemId === "BringToFront" ||
            itemId === "SendBackward" || itemId === "SendToBack" || itemId === "Bold" || itemId === "Italic" ||
            itemId === "Underline" || itemId === "FontStyle" || itemId === "FontSize" || itemId === "FontColor") {
            toolbarObj.items[i].disabled = true;
          }
        }
      }

      // Handling single item selection
      if (selectedItems.length === 1) {
        enableItems();
        disableMultiselectedItems(selectedItems);
        // Enabling or disabling specific toolbar items based on selection type
        if (selectedItems[0].children !== undefined && selectedItems[0].children.length > 0) {
          toolbarObj.items.find(item => item.id === 'UnGroup').disabled = false;
          disableMultiselectedItems(selectedItems);
        }
        else {
          toolbarObj.items.find(item => item.id === 'Group').disabled = true;
          toolbarObj.items.find(item => item.id === 'UnGroup').disabled = true;
        }
      }

      // Handling multiple items selection
      if (selectedItems.length > 1) {
        enableItems();
        toolbarObj.items.find(item => item.id === 'Group').disabled = false;
        toolbarObj.items.find(item => item.id === 'UnGroup').disabled = true;
        disableMultiselectedItems(selectedItems);
      }

      // Handling specific scenarios when nodes are selected
      if (args.newValue.length > 0 && args.newValue[0] instanceof ej.diagrams.Node) {
        diagram.selectedItems = { constraints: ej.diagrams.SelectorConstraints.All | ej.diagrams.SelectorConstraints.UserHandle, userHandles: handles };
        // Manipulating selected nodes and their properties
        if (diagram.selectedItems.nodes.length > 0) {
          drawingNode = diagram.selectedItems.nodes[diagram.selectedItems.nodes.length - 1];
        }
      }
      else {
        // Resetting selection constraints when other types are selected
        diagram.selectedItems = { constraints: ej.diagrams.SelectorConstraints.All & ~ej.diagrams.SelectorConstraints.UserHandle };
      }
    }
  }

  // Enables specific toolbar items.
  function enableItems() {
    toolbarObj.items.find(item => item.id === 'BringForward').disabled = false;
    toolbarObj.items.find(item => item.id === 'BringToFront').disabled = false;
    toolbarObj.items.find(item => item.id === 'SendBackward').disabled = false;
    toolbarObj.items.find(item => item.id === 'SendToBack').disabled = false;
  }

  //method to add functionality to user handle
  function handleUserHandleClick(args) {
    switch (args.element.name) {
      case 'Delete':
        diagram.remove();
        break;
      case 'Clone':
        diagram.paste(diagram.selectedItems.selectedObjects);
        break;
      case 'Draw':
        diagram.drawingObject.shape = {};
        diagram.drawingObject.type = diagram.drawingObject.type || 'Orthogonal';
        diagram.drawingObject.sourceID = drawingNode.id;
        diagram.dataBind();
        break;
    }
  }

  //Apply the appearence of the Annotation 
  function updateAnnotationValue(value, fontSize, fontFamily, index, isSelected) {
    for (var i = 0; i < diagram.selectedItems.nodes.length; i++) {
      var node = diagram.selectedItems.nodes[i];
      for (var j = 0; j < node.annotations.length; j++) {
        var annotationstyle = node.annotations[j].style;
        if (value === 'fontsize') {
          annotationstyle.fontSize = fontSize;
        } else if (value === 'fontfamily') {
          annotationstyle.fontFamily = fontFamily.toString();
        }
        else if (value === 'bold') {
          annotationstyle.bold = !annotationstyle.bold;
          isSelected = annotationstyle.bold;
        }
        else if (value === 'italic') {
          annotationstyle.italic = !annotationstyle.italic;
          isSelected = annotationstyle.italic;
        }
        else if (value === 'underline') {
          if (annotationstyle.textDecoration === "None") {
            annotationstyle.textDecoration = 'Underline';
            isSelected = true;
          }
          else {
            annotationstyle.textDecoration = 'None';
            isSelected = false;
          }
        }
        var toolbarTextStyle = document.getElementById("toolbarEditor");
        if (toolbarTextStyle) {
          toolbarTextStyle = toolbarTextStyle.ej2_instances[0];
        }
        if (toolbarTextStyle.items[index] !== undefined) {
          var cssClass = toolbarTextStyle.items[index].cssClass;
          toolbarTextStyle.items[index].cssClass = isSelected ? cssClass + ' tb-item-selected' : cssClass.replace(' tb-item-selected', '');
          toolbarTextStyle.dataBind();
        }
        diagram.dataBind();
      }
    }
  }
  // Initialization of font size numeric text box
  var fontSize = new ej.inputs.NumericTextBox({
    value: 12, min: 1, max: 30, width: '110px',
    format: '##.##', step: 2,
    change: function (args) {
      updateAnnotationValue('fontsize', args.value);
    }
  });
  fontSize.appendTo('#fontSize');

  // Initialization of font family type
  var fontTypeList = [
    { type: 'Arial', text: 'Arial' },
    { type: 'Aharoni', text: 'Aharoni' },
    { type: 'Bell MT', text: 'Bell MT' },
    { type: 'Fantasy', text: 'Fantasy' },
    { type: 'Segoe UI', text: 'Segoe UI' },
    { type: 'Times New Roman', text: 'Times New Roman' },
    { type: 'Verdana', text: 'Verdana' }
  ];

  // Initialization of font family dropdown list
  var fontFamily = new ej.dropdowns.DropDownList({
    dataSource: fontTypeList,
    fields: { value: 'type', text: 'text' }, popupWidth: 150,
    width: '100%', placeholder: 'select a font type', index: 0,
    change: function (args) {
      updateAnnotationValue('fontfamily', null, args.value.toString());
    }
  });
  fontFamily.appendTo('#fontfamily');

  // Initialization of font color picker
  var fontColors = new ej.inputs.ColorPicker({
    mode: 'Palette',
    value: '#000',
    change: function (arg) {
      for (var i = 0; i < diagram.selectedItems.nodes.length; i++) {
        var nodes = diagram.selectedItems.nodes[i];
        for (var j = 0; j < nodes.annotations.length; j++) {
          nodes.annotations[j].style.color = arg.currentValue.rgba;
          diagram.dataBind();
        }
      }
    }
  });
  fontColors.appendTo('#fontColors');

  //Handles toolbar item clicks and performs corresponding actions.
  function toolbarClick(args) {
    switch (args.item.tooltipText) {
      case 'Group':
        // Group selected items
        diagram.group();
        // Disable Group button and enable UnGroup button
        toolbarObj.items.find(item => item.id === 'Group').disabled = true;
        toolbarObj.items.find(item => item.id === 'UnGroup').disabled = false;
        break;
      case 'UnGroup':
        // Ungroup selected items
        diagram.unGroup();
        break;
      case 'Bring Forward':
        // Bring selected item(s) forward
        diagram.moveForward();
        break;
      case 'Bring To Front':
        // Bring selected item(s) to front
        diagram.bringToFront();
        break;
      case 'Send Backward':
        // Send selected item(s) backward
        diagram.sendBackward();
        break;
      case 'Send To Back':
        // Send selected item(s) to back
        diagram.sendToBack();
        break;
      case 'Bold':
        // Toggle bold style for selected annotation(s)
        updateAnnotationValue('bold', args.value, null, 11);
        break;
      case 'Italic':
        // Toggle italic style for selected annotation(s)
        updateAnnotationValue('italic', args.value, null, 12);
        break;
      case 'Underline':
        // Toggle underline style for selected annotation(s)
        updateAnnotationValue('underline', args.value, null, 13);
        break;
    }
    // Bind diagram data after actions
    diagram.dataBind();
  }

  //create the Toolbar and adding items in ToolBar.
  var toolbarObj = new ej.navigations.Toolbar({
    clicked: toolbarClick,
    items: [
      // Grouping/UnGrouping buttons
      {
        id: 'Group',
        type: 'Button',
        tooltipText: 'Group',
        prefixIcon: 'e-icons e-group-1',
        disabled: true
      },
      {
        id: 'UnGroup',
        type: 'Button',
        tooltipText: 'UnGroup',
        prefixIcon: 'e-icons e-ungroup-1',
        disabled: true
      },
      { id: 'Separator1', type: 'Separator' },
      {
        id: 'BringForward',
        type: 'Button',
        tooltipText: 'Bring Forward',
        prefixIcon: 'e-icons e-bring-forward',
        disabled: true
      },
      {
        id: 'BringToFront',
        type: 'Button',
        tooltipText: 'Bring To Front',
        prefixIcon: 'e-icons e-bring-to-front',
        disabled: true
      },
      {
        id: 'SendBackward',
        type: 'Button',
        tooltipText: 'Send Backward',
        prefixIcon: 'e-icons e-send-backward',
        disabled: true
      },
      {
        id: 'SendToBack',
        type: 'Button',
        tooltipText: 'Send To Back',
        prefixIcon: 'e-icons e-send-to-back',
        disabled: true
      },
      {
        id: 'Separator2', type: 'Separator',
        template: '<div style="margin-left:1px;"></div>'
      },
      {
        // Custom font family dropdown template
        id: 'FontStyle',
        type: 'Input',
        tooltipText: 'Font Style',
        align: 'Left',
        template: fontFamily,
        disabled: true
      },
      {
        id: 'Separator3', type: 'Separator',
        template: '<div style="margin-left:5px;"></div>'
      },
      {
        // Custom font size numeric text box template
        id: 'FontSize',
        type: 'Input',
        tooltipText: 'Font Size',
        align: 'Left',
        template: fontSize,
        disabled: true,
        style: "margin-left:3px"
      },
      // Font styling buttons (Bold, Italic, Underline)
      {
        id: 'Bold',
        type: 'Button',
        tooltipText: 'Bold',
        prefixIcon: 'e-icons e-bold',
        disabled: true,
        cssClass: 'tb-item-start'
      },
      {
        id: 'Italic',
        type: 'Button',
        tooltipText: 'Italic',
        prefixIcon: 'e-icons e-italic',
        disabled: true,
        cssClass: 'tb-item-middle'
      },
      {
        id: 'Underline',
        type: 'Button',
        tooltipText: 'Underline',
        prefixIcon: 'e-icons e-underline',
        disabled: true,
        cssClass: 'tb-item-end'
      },
      {
        // Font Color picker
        id: 'FontColor',
        type: 'Input',
        tooltipText: 'Font Color',
        align: 'Left',
        template: fontColors,
        disabled: true
      },
    ],
  });
  // Appends the toolbar to the specified HTML element
  toolbarObj.appendTo('#toolbarEditor');

  // Function to create a basic shapes
  function createBasicShape(id, shape) {
    return {
      id: id,
      shape: { type: "Basic", shape: shape },
      style: { strokeWidth: 2 }
    };
  }

  // Initialize basic shapes
  var basicShapes = [
    createBasicShape('Rectangle', 'Rectangle'),
    createBasicShape('Ellipse', 'Ellipse'),
    createBasicShape('Hexagon', 'Hexagon'),
    createBasicShape('Parallelogram', 'Parallelogram'),
    createBasicShape('Triangle', 'Triangle'),
    createBasicShape('Plus', 'Plus'),
    createBasicShape('Star', 'Star'),
    createBasicShape('Pentagon', 'Pentagon'),
    createBasicShape('Heptagon', 'Heptagon'),
    createBasicShape('Octagon', 'Octagon'),
    createBasicShape('Trapezoid', 'Trapezoid'),
    createBasicShape('Decagon', 'Decagon'),
    createBasicShape('RightTriangle', 'RightTriangle'),
    createBasicShape('Cylinder', 'Cylinder'),
    createBasicShape('Diamond', 'Diamond')
  ];

  // Initialize a SymbolPalette control
  var palette = new ej.diagrams.SymbolPalette({
    expandMode: 'Multiple', // Set the mode for expanding palettes
    width: '100%', // Set the width of the symbol palette
    height: '100%', // Set the height of the symbol palette
    symbolWidth: 50, // Set the width of each symbol in the palette
    symbolHeight: 50, // Set the height of each symbol in the palette
    palettes: [
      { id: 'basicShapes', expanded: true, symbols: basicShapes, iconCss: 'e-ddb-icons e-flow', title: 'Basic Shapes' },
    ],
    symbolMargin: { left: 5, right: 5, top: 5, bottom: 10 },
  });
  // Append the symbol palette to the specified HTML element
  palette.appendTo('#symbolpalette');
};