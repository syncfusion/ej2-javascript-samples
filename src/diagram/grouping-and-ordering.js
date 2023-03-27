

var nodes = [
    {
    id:"Diamond",
    // Position of the node
    offsetX: 350,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    shape: { type: 'Basic', shape: 'Diamond' },
    annotations: [{
    content: 'Decision'
    }]
    },
    {
    id:"ellipse",
    // Position of the node
    offsetX: 150,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 60,
    shape: { type: 'Basic', shape: 'Ellipse' },
    annotations: [{
        content: 'Start/Stop'
    }]
    },
    {
    id:"node1",
    // Position of the node
    offsetX: 150,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 55,
    shape: { type: 'Basic', shape: 'Rectangle' },
    },
    {
    id:"node2",
    // Position of the node
    offsetX: 350,
    offsetY: 100,
    // Size of the node
    width: 90,
    height: 55,
    // style: { fill: '#6BA5D7', strokeColor: 'white' },
      shape: { type: 'Basic', shape: 'Rectangle' ,cornerRadius:5},
    },
    {
    id: 'group',
    children: ['node1', 'node2'],
    padding:{left:10,right:10,top:10,bottom:10},
    annotations: [{
      content: 'Group 1'
  }]
},
{
  id:"rectangle",
  // Position of the node
  offsetX: 150,
  offsetY: 400,
  // Size of the node
  width: 100,
  height: 60,
  shape: { type: 'Basic', shape: 'Rectangle' },
  annotations: [{
    content: 'Process'
  }]
},
];
var diagram;

this.default = function () {
    //Initializes diagram control
    diagram = new ej.diagrams.Diagram({
        width: '100%', height: '500px',
        nodes:nodes,
        rulerSettings: { showRulers :true},
        drawingObject:{type:'Orthogonal'},
        selectionChange: function (args) {selectionChange(args); },
        onUserHandleMouseDown:function (args) { userHandleClick(args); },
});
diagram.appendTo('#diagram');

var handles = [
    {
        name: 'Clone', pathData: 'M0,2.4879999 L0.986,2.4879999 0.986,9.0139999 6.9950027,9.0139999 6.9950027,10 0.986,10 C0.70400238,10 0.47000122,9.9060001 0.28100207,9.7180004 0.09400177,9.5300007 0,9.2959995 0,9.0139999 z M3.0050011,0 L9.0140038,0 C9.2960014,0 9.5300026,0.093999863 9.7190018,0.28199956 9.906002,0.47000027 10,0.70399952 10,0.986 L10,6.9949989 C10,7.2770004 9.906002,7.5160007 9.7190018,7.7110004 9.5300026,7.9069996 9.2960014,8.0049992 9.0140038,8.0049992 L3.0050011,8.0049992 C2.7070007,8.0049992 2.4650002,7.9069996 2.2770004,7.7110004 2.0890007,7.5160007 1.9950027,7.2770004 1.9950027,6.9949989 L1.9950027,0.986 C1.9950027,0.70399952 2.0890007,0.47000027 2.2770004,0.28199956 2.4650002,0.093999863 2.7070007,0 3.0050011,0 z',tooltip:{content:'Clone'},
        visible: true, offset: 1, side: 'Bottom', margin: { top: 0, bottom: 0, left: 0, right: 0 }
    },
    {
        name: 'Delete', pathData: 'M0.54700077,2.2130003 L7.2129992,2.2130003 7.2129992,8.8800011 C7.2129992,9.1920013 7.1049975,9.4570007 6.8879985,9.6739998 6.6709994,9.8910007 6.406,10 6.0939997,10 L1.6659999,10 C1.3539997,10 1.0890004,9.8910007 0.87200136,9.6739998 0.65500242,9.4570007 0.54700071,9.1920013 0.54700077,8.8800011 z M2.4999992,0 L5.2600006,0 5.8329986,0.54600048 7.7599996,0.54600048 7.7599996,1.6660004 0,1.6660004 0,0.54600048 1.9270014,0.54600048 z',tooltip:{content:'Delete'},
        visible: true, offset: 0, side: 'Bottom', margin: { top: 0, bottom: 0, left: 0, right: 0 }
    },
    {
        name: 'Draw', pathData: 'M3.9730001,0 L8.9730001,5.0000007 3.9730001,10.000001 3.9730001,7.0090005 0,7.0090005 0,2.9910006 3.9730001,2.9910006 z',tooltip:{content:'Draw'},
        visible: true, offset: 0.5, side: 'Right', margin: { top: 0, bottom: 0, left: 0, right: 0 }
    },
  ];
  
 // method to disable toolbar items 
  disableMultiselectedItems =function (selectedItems){
    for(i=0;i<selectedItems.length;i++){
      if(selectedItems[i].annotations[0] !== undefined){
        toolbarObj.items[8].disabled = false;
        toolbarObj.items[10].disabled = false;
        toolbarObj.items[11].disabled = false;
        toolbarObj.items[12].disabled = false;
        toolbarObj.items[13].disabled = false;
        toolbarObj.items[14].disabled = false;
      }
      else{
        toolbarObj.items[8].disabled = true;
        toolbarObj.items[10].disabled = true;
        toolbarObj.items[11].disabled = true;
        toolbarObj.items[12].disabled = true;
        toolbarObj.items[13].disabled = true;
        toolbarObj.items[14].disabled = true;
      }
    }
  };

  selectionChange = function (args) 
  { 
  if(args.state === "Changed")
  {
    var selectedItems = diagram.selectedItems.nodes;
    selectedItems = selectedItems.concat(diagram.selectedItems.connectors);
    if(selectedItems.length===0){
      toolbarObj.items[0].disabled = true;
      toolbarObj.items[1].disabled = true;
      toolbarObj.items[3].disabled = true;
      toolbarObj.items[4].disabled = true;
      toolbarObj.items[5].disabled = true;
      toolbarObj.items[6].disabled = true;
      toolbarObj.items[8].disabled = true;
      toolbarObj.items[10].disabled = true;
      toolbarObj.items[11].disabled = true;
      toolbarObj.items[12].disabled = true;
      toolbarObj.items[13].disabled = true;
      toolbarObj.items[14].disabled = true;
      }
      if(selectedItems.length === 1){
        enableItems();
        disableMultiselectedItems(selectedItems);
       
      if(selectedItems[0].children !== undefined && selectedItems[0].children.length>0){
        toolbarObj.items[1].disabled = false;
        disableMultiselectedItems(selectedItems);
      }
      else{
        toolbarObj.items[1].disabled = true;
      }
      
      }
      if(selectedItems.length > 1){
        enableItems();
        toolbarObj.items[0].disabled = false; 
        toolbarObj.items[1].disabled = true;
        disableMultiselectedItems(selectedItems);
      }
    if(args.newValue.length>0 && args.newValue[0] instanceof ej.diagrams.Node){
      diagram.selectedItems = { constraints: ej.diagrams.SelectorConstraints.All|ej.diagrams.SelectorConstraints.UserHandle, userHandles: handles };
        if(diagram.selectedItems.nodes.length>0){
           drawingNode = diagram.selectedItems.nodes[diagram.selectedItems.nodes.length-1];
        }
      }
    else
    {
    diagram.selectedItems = { constraints: ej.diagrams.SelectorConstraints.All&~ej.diagrams.SelectorConstraints.UserHandle };
    }
  }
  };

function enableItems()
{
  toolbarObj.items[3].disabled = false;
  toolbarObj.items[4].disabled = false;
  toolbarObj.items[5].disabled = false;
  toolbarObj.items[6].disabled = false;
}

//method to add functionality to user handle
  userHandleClick = function(args)
  {
    switch(args.element.name)
    {
    case 'Delete':
      diagram.remove();
      break;
    case 'Clone':
      diagram.paste(diagram.selectedItems.selectedObjects);
      break;
    case 'Draw':
      diagram.drawingObject.shape = {};
      diagram.drawingObject.type = diagram.drawingObject.type?diagram.drawingObject.type:'Orthogonal';
      diagram.drawingObject.sourceID = drawingNode.id;
      diagram.dataBind();
      break;
    }
  };

//Apply the appearence of the Annotation 
function updateAnnotationValue(value, fontSize, fontFamily,index,isSelected) {
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
              isSelected=annotationstyle.bold;
           }
           else if (value === 'italic') {
            annotationstyle.italic = !annotationstyle.italic;
            isSelected= annotationstyle.italic;
          } 
          else if (value === 'underline') {
            if(annotationstyle.textDecoration ==="None"){
              annotationstyle.textDecoration = 'Underline';
              isSelected = true;
            }
            else{
              annotationstyle.textDecoration = 'None';
              isSelected =false;
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

      var fontSize  =  new ej.inputs.NumericTextBox({
          value: 12, min: 1, max: 30, width: '90px',
          format: '##.##', step: 2,
          change: function(args)  {
            updateAnnotationValue('fontsize', args.value);
          }
      });
      fontSize.appendTo('#fontSize');
    
      var fontTypeList = [
        { type: 'Arial', text: 'Arial' },
        { type: 'Aharoni', text: 'Aharoni' },
        { type: 'Bell MT', text: 'Bell MT' },
        { type: 'Fantasy', text: 'Fantasy' },
        { type: 'Segoe UI', text: 'Segoe UI' },
        { type: 'Times New Roman', text: 'Times New Roman' },
        { type: 'Verdana', text: 'Verdana' }
    ];
      var fontFamily =new ej.dropdowns.DropDownList({
        dataSource: fontTypeList,
        fields: { value: 'type', text: 'text' }, popupWidth: 150,
        width: '100%', placeholder: 'select a font type', index: 0,
        change: function(args)  {
            updateAnnotationValue('fontfamily', null, args.value.toString());
        }
    });
    fontFamily.appendTo('#fontfamily');
    
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

    //Toolbar functionality
function toolbarClick(args) {
    switch (args.item.tooltipText) {
        case 'Group':
            diagram.group();
            toolbarObj.items[0].disabled = true;
            toolbarObj.items[1].disabled = false;
            break;
        case 'UnGroup':
            diagram.unGroup();
            break;
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
        case 'Bold':
            updateAnnotationValue('bold',args.value,null,11);
        break;
        case 'Italic':
            updateAnnotationValue('italic',args.value,null,12);  
        break;
        case 'Underline':
            updateAnnotationValue('underline',args.value,null,13);
        break;
      }
      diagram.dataBind();
}

//create the Toolbar and adding items in ToolBar.
var toolbarObj = new ej.navigations.Toolbar({
    clicked: toolbarClick,
    items: [
        {
            type: 'Button',
            tooltipText: 'Group',
            prefixIcon: 'e-icons e-group-1',
            disabled:true
        },
        {
            type: 'Button',
            tooltipText: 'UnGroup',
            prefixIcon: 'e-icons e-ungroup-1',
            disabled:true
        },
        { type: 'Separator' },
        {
            type: 'Button',
            tooltipText: 'Bring Forward',
            prefixIcon: 'e-icons e-bring-forward',
            disabled:true
         },
        {
            type: 'Button',
            tooltipText: 'Bring To Front',
            prefixIcon: 'e-icons e-bring-to-front',
            disabled:true
        },
        {
            type: 'Button',
            tooltipText: 'Send Backward',
            prefixIcon: 'e-icons e-send-backward',
            disabled:true
        },
        {
            type: 'Button',
            tooltipText: 'Send To Back',
            prefixIcon: 'e-icons e-send-to-back',
            disabled:true
        },
        { type: 'Separator' ,template:'<div style="margin-left:1px;"></div>'},
        {
            type: 'Input', tooltipText: 'Font Style', align: 'Left', template: fontFamily, disabled:true
        },
        { type: 'Separator', template:'<div style="margin-left:5px;"></div>'},
        {
            type: 'Input', tooltipText: 'Font Size', align: 'Left', template: fontSize,  disabled:true,style :"margin-left:3px"
        },
        {
            type: 'Button',
            tooltipText: 'Bold',
            prefixIcon: 'e-icons e-bold',
            disabled:true,
            cssClass: 'tb-item-start'
        },
        {
            type: 'Button',
            tooltipText: 'Italic',
            prefixIcon: 'e-icons e-italic',
            disabled:true,
            cssClass: 'tb-item-middle'
        },
        {
            type: 'Button',
            tooltipText: 'Underline',
            prefixIcon: 'e-icons e-underline',
            disabled:true,
            cssClass: 'tb-item-end'
        },
        {
            type: 'Input',  tooltipText: 'Font Color', align: 'Left', template: fontColors ,disabled:true
        },
  ],
});
toolbarObj.appendTo('#toolbarEditor');

//defining palette shapes
var basicShapes = [
    { id: 'Rectangle', shape: { type: 'Basic', shape: 'Rectangle' }, style: { strokeWidth: 2 } },
    { id: 'Ellipse', shape: { type: 'Basic', shape: 'Ellipse' }, style: { strokeWidth: 2 } },
    { id: 'Hexagon', shape: { type: 'Basic', shape: 'Hexagon' }, style: { strokeWidth: 2 } },
    { id: 'Parallelogram', shape: { type: 'Basic', shape: 'Parallelogram' }, style: { strokeWidth: 2 } },
    { id: 'Triangle', shape: { type: 'Basic', shape: 'Triangle' }, style: { strokeWidth: 2 } },
    { id: 'Plus', shape: { type: 'Basic', shape: 'Plus' }, style: { strokeWidth: 2 } },
    { id: 'Star', shape: { type: 'Basic', shape: 'Star' }, style: { strokeWidth: 2 } },
    { id: 'Pentagon', shape: { type: 'Basic', shape: 'Pentagon' }, style: { strokeWidth: 2 } },
    { id: 'Heptagon', shape: { type: 'Basic', shape: 'Heptagon' }, style: { strokeWidth: 2 } },
    { id: 'Octagon', shape: { type: 'Basic', shape: 'Octagon' }, style: { strokeWidth: 2 } },
    { id: 'Trapezoid', shape: { type: 'Basic', shape: 'Trapezoid' }, style: { strokeWidth: 2 } },
    { id: 'Decagon', shape: { type: 'Basic', shape: 'Decagon' }, style: { strokeWidth: 2 } },
    { id: 'RightTriangle', shape: { type: 'Basic', shape: 'RightTriangle' }, style: { strokeWidth: 2 } },
    { id: 'Cylinder', shape: { type: 'Basic', shape: 'Cylinder' }, style: { strokeWidth: 2 } },
    { id: 'Diamond', shape: { type: 'Basic', shape: 'Diamond' }, style: { strokeWidth: 2 } },
  ];

  //rendering palettes
  var palette = new ej.diagrams.SymbolPalette({
    expandMode: 'Multiple' ,
    width: '100%',
    height: '100%',
    symbolWidth :50,
    symbolHeight:50,
    palettes: [
        { id: 'basicShapes', expanded: true, symbols: basicShapes, iconCss: 'e-ddb-icons e-flow', title: 'Basic Shapes' }, 
      ],
      symbolMargin: { left: 5, right: 5, top: 5, bottom:10},
    });
    palette.appendTo('#symbolpalette');
};