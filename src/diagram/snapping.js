/**
 * Snapping diagram
 */
 this.default = function () {
 var nodes = [
    {
        id:'node_1',width:100,height:100,offsetX:350,offsetY:250,
        ports:[
            {id:'port1',offset:{x:0.5,y:0.5},visibility:ej.diagrams.PortVisibility.Visible,
            style:{fill:'black'},
            constraints:ej.diagrams.PortConstraints.Default|ej.diagrams.PortConstraints.Draw
        }],
        annotations:[{id:'annot1',content:'Shape 1',horiontalAlignment:'Top',offset:{x:0.5,y:1.2},style:{bold:true}}]
    },
    {
        id:'node_2',width:100,height:100,offsetX:650,offsetY:250,
        ports:[
            {id:'port11', offset:{x:0.5,y:0.5},visibility: ej.diagrams.PortVisibility.Visible,style:{fill:'black'},
            constraints:ej.diagrams.PortConstraints.Default|ej.diagrams.PortConstraints.Draw
        },{
            id:'port2',offset:{x:0,y:0.5},visibility:ej.diagrams.PortVisibility.Visible,
            style:{fill:'black'},
            constraints:ej.diagrams.PortConstraints.Default|ej.diagrams.PortConstraints.Draw,
            height:100,width:7
        }],
        annotations:[{id:'annot1',content:'Shape 2',horiontalAlignment:'Top',offset:{x:0.5,y:1.2},style:{bold:true}}]

    },
    {
        id:'node_3',width:100,height:100,offsetX:500,offsetY:400,
        annotations:[{id:'annot1',content:'Shape 3',horiontalAlignment:'Top',offset:{x:0.5,y:1.2},style:{bold:true}}]

    },
];

var connectors = [
    {
        id:'connector_1',sourceID:'node_1',targetID:'node_3',type:'Orthogonal',
    }
];

var contextMenu = {
    show: true,
    showCustomMenuOnly: false,
};
var handles = [
    {
        name: 'Clone', pathData: 'M0,2.4879999 L0.986,2.4879999 0.986,9.0139999 6.9950027,9.0139999 6.9950027,10 0.986,10 C0.70400238,10 0.47000122,9.9060001 0.28100207,9.7180004 0.09400177,9.5300007 0,9.2959995 0,9.0139999 z M3.0050011,0 L9.0140038,0 C9.2960014,0 9.5300026,0.093999863 9.7190018,0.28199956 9.906002,0.47000027 10,0.70399952 10,0.986 L10,6.9949989 C10,7.2770004 9.906002,7.5160007 9.7190018,7.7110004 9.5300026,7.9069996 9.2960014,8.0049992 9.0140038,8.0049992 L3.0050011,8.0049992 C2.7070007,8.0049992 2.4650002,7.9069996 2.2770004,7.7110004 2.0890007,7.5160007 1.9950027,7.2770004 1.9950027,6.9949989 L1.9950027,0.986 C1.9950027,0.70399952 2.0890007,0.47000027 2.2770004,0.28199956 2.4650002,0.093999863 2.7070007,0 3.0050011,0 z',
        visible: true, offset: 1, side: 'Bottom', margin: { top: 0, bottom: 0, left: 0, right: 0 }
    },
    {
        name: 'Delete', pathData: 'M0.54700077,2.2130003 L7.2129992,2.2130003 7.2129992,8.8800011 C7.2129992,9.1920013 7.1049975,9.4570007 6.8879985,9.6739998 6.6709994,9.8910007 6.406,10 6.0939997,10 L1.6659999,10 C1.3539997,10 1.0890004,9.8910007 0.87200136,9.6739998 0.65500242,9.4570007 0.54700071,9.1920013 0.54700077,8.8800011 z M2.4999992,0 L5.2600006,0 5.8329986,0.54600048 7.7599996,0.54600048 7.7599996,1.6660004 0,1.6660004 0,0.54600048 1.9270014,0.54600048 z',
        visible: true, offset: 0, side: 'Bottom', margin: { top: 0, bottom: 0, left: 0, right: 0 }
    },
    {
        name: 'Draw', pathData: 'M3.9730001,0 L8.9730001,5.0000007 3.9730001,10.000001 3.9730001,7.0090005 0,7.0090005 0,2.9910006 3.9730001,2.9910006 z',
        visible: true, offset: 0.5, side: 'Right', margin: { top: 0, bottom: 0, left: 0, right: 0 }
    },
];

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '645px', nodes: nodes,
    rulerSettings:{showRulers:true},
    scrollSettings:{scrollLimit:'Infinity'},
    drawingObject:{type:'Orthogonal'},
    contextMenuSettings: contextMenu,
    onUserHandleMouseDown:userHandelClick,
    connectors:connectors,
    snapSettings:{snapAngle:5},
    getNodeDefaults:getNodeDefaults,
    getConnectorDefaults:getConnectorDefaults,
    created:created,
    selectionChange:selectionChange,
    rotateChange:rotateChange
    });
    diagram.appendTo('#diagram');
    
    function created(){
        diagram.fitToPage({mode:'Width'});
    }
    function selectionChange(args){
        if(args.state === 'Changed'){
            var selectedItems = diagram.selectedItems.nodes;
            selectedItems = selectedItems.concat(diagram.selectedItems.connectors);
            if(selectedItems.length>0){
                if(args.newValue.length>0 && args.newValue[0] instanceof ej.diagrams.Node){
                    diagram.selectedItems = { constraints: ej.diagrams.SelectorConstraints.All|ej.diagrams.SelectorConstraints.UserHandle, userHandles: handles };
                    if(diagram.selectedItems.nodes.length>0){
                        drawingNode = diagram.selectedItems.nodes[diagram.selectedItems.nodes.length-1];
                    }
                }
                else{
            diagram.selectedItems = { constraints: ej.diagrams.SelectorConstraints.All&~ej.diagrams.SelectorConstraints.UserHandle };
                }
            }

        }
    }
    function getConnectorDefaults(obj){
        obj.constraints = ej.diagrams.ConnectorConstraints.Default|ej.diagrams.ConnectorConstraints.DragSegmentThumb;
    }
    function getNodeDefaults(obj){
        obj.style = {fill:'orange',strokeColor:'orange'};
    }
    function rotateChange(args){
        if(args.state === 'Start' || args.state === 'Progress')
    {
        diagram.selectedItems = { constraints: ej.diagrams.SelectorConstraints.All&~ej.diagrams.SelectorConstraints.UserHandle};
    }
    if(args.state === 'Completed'){
        diagram.selectedItems = { constraints: ej.diagrams.SelectorConstraints.All|ej.diagrams.SelectorConstraints.UserHandle, userHandles: handles };
    }
    }
    function userHandelClick(args){
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
    }

    var snappingInterval = new ej.inputs.NumericTextBox({
        min: 1,
        step: 1,
        width:150,
        value:20,
        format: 'n0',
        change: function (args) {
            diagram.snapSettings.horizontalGridlines.snapIntervals[0] = args.value;
            diagram.snapSettings.verticalGridlines.snapIntervals[0] = args.value;
            diagram.snapSettings.horizontalGridlines.scaledIntervals[0] = args.value;
            diagram.snapSettings.verticalGridlines.scaledIntervals[0] = args.value;
            diagram.dataBind();
       }
    });
    snappingInterval.appendTo('#snappingInterval');

    var snappingAngle = new ej.inputs.NumericTextBox({
        min: 1,
        step: 1,
        value:5,
        format: 'n0',
        change: function (args) {
            diagram.snapSettings.snapAngle =args.value;
            diagram.dataBind();
       }
    });
    snappingAngle.appendTo('#snappingAngle');

    var snappingLineColor = new ej.inputs.ColorPicker({
        mode: 'Palette',
        width: '100%',
        height:25,
        showButtons:false,
        value:'#07EDE1',
        change: function (args){
            diagram.snapSettings.snapLineColor = args.value;
            diagram.dataBind();                
         }
    });
    snappingLineColor.appendTo('#snappingLineColor');

    var showGridlines = new ej.buttons.CheckBox({ label: 'Show Gridline', checked: true,
    change: function (args) { 
        diagram.snapSettings.constraints = diagram.snapSettings.constraints ^ ej.diagrams.SnapConstraints.ShowLines;
        diagram.dataBind();
        scale();
     }});
    showGridlines.appendTo('#showGridlines');

     var snapToObject = new ej.buttons.CheckBox({ label: 'Snapping To Objects', checked: true,
     change: function (args) { 
         diagram.snapSettings.constraints = diagram.snapSettings.constraints ^ ej.diagrams.SnapConstraints.SnapToObject;
         diagram.dataBind();
         scale();
      }});
      snapToObject.appendTo('#snapToObject');

    var radioButton = new ej.buttons.RadioButton({ label: 'Snap To Gridlines', name: 'snapToLines', value: 'Snap To Gridlines', checked: true,change:snapToLines });
    radioButton.appendTo('#radio1');

    var radioButton1 = new ej.buttons.RadioButton({ label: 'Snap To Horizontal Gridlines', name: 'snapToLines', value: 'Snap To Horizontal Gridlines',change:snapToLines });
    radioButton1.appendTo('#radio2');

    var radioButton2 = new ej.buttons.RadioButton({ label: 'Snap To Vertical Gridlines', name: 'snapToLines', value: 'Snap To Vertical Gridlines',change:snapToLines });
    radioButton2.appendTo('#radio3');

   var radioButton3 = new ej.buttons.RadioButton({ label: 'None', name: 'snapToLines', value: 'None',change:snapToLines });
    radioButton3.appendTo('#radio4');

    function snapToLines(args){
        if(showGridlines.checked && snapToObject.checked){
            diagram.snapSettings.constraints = ej.diagrams.SnapConstraints.All;
        }
       else if(showGridlines.checked && !snapToObject.checked){
        diagram.snapSettings.constraints = ej.diagrams.SnapConstraints.All &~ej.diagrams.SnapConstraints.SnapToObject;
       }
       else if(!showGridlines.checked && snapToObject.checked){
        diagram.snapSettings.constraints = ej.diagrams.SnapConstraints.All &~ej.diagrams.SnapConstraints.ShowLines;
       }
       else if(!showGridlines.checked && !snapToObject.checked){
        diagram.snapSettings.constraints = ej.diagrams.SnapConstraints.All &~(ej.diagrams.SnapConstraints.ShowLines|ej.diagrams.SnapConstraints.SnapToObject);
       }
        switch(args.value){
            case 'Snap To Gridlines':
                diagram.snapSettings.constraints =  ej.diagrams.SnapConstraints.All| ej.diagrams.SnapConstraints.SnapToLines;
                if( !showGridlines.checked && !snapToObject.checked ) {
                   diagram.snapSettings.constraints = ej.diagrams.SnapConstraints.All &~ (ej.diagrams.SnapConstraints.ShowLines|ej.diagrams.SnapConstraints.SnapToObject);
                }
                else if( !snapToObject.checked && showGridlines.checked ){
                    diagram.snapSettings.constraints = ej.diagrams.SnapConstraints.All &~ (ej.diagrams.SnapConstraints.SnapToObject);
                }
                else if(snapToObject.checked && !showGridlines.checked) {
                    diagram.snapSettings.constraints = ej.diagrams.SnapConstraints.All &~ (ej.diagrams.SnapConstraints.ShowLines);
                }
            break;
            case 'Snap To Horizontal Gridlines':
                diagram.snapSettings.constraints =  diagram.snapSettings.constraints ^ ej.diagrams.SnapConstraints.SnapToVerticalLines;
            break;
            case 'Snap To Vertical Gridlines':
                diagram.snapSettings.constraints =  diagram.snapSettings.constraints ^ ej.diagrams.SnapConstraints.SnapToHorizontalLines;
            break;
            case 'None':
                diagram.snapSettings.constraints = ej.diagrams.SnapConstraints.All &~ (ej.diagrams.SnapConstraints.SnapToHorizontalLines|ej.diagrams.SnapConstraints.SnapToVerticalLines|ej.diagrams.SnapConstraints.SnapToLines);
                if(!showGridlines.checked && !snapToObject.checked){
                    diagram.snapSettings.constraints = ej.diagrams.SnapConstraints.All &~ (ej.diagrams.SnapConstraints.ShowLines|ej.diagrams.SnapConstraints.SnapToObject|ej.diagrams.SnapConstraints.SnapToHorizontalLines|ej.diagrams.SnapConstraints.SnapToVerticalLines|ej.diagrams.SnapConstraints.SnapToLines);
                 }
                 else if(showGridlines.checked && !snapToObject.checked){
                     diagram.snapSettings.constraints =  ej.diagrams.SnapConstraints.All &~ (ej.diagrams.SnapConstraints.SnapToObject|ej.diagrams.SnapConstraints.SnapToHorizontalLines|ej.diagrams.SnapConstraints.SnapToVerticalLines|ej.diagrams.SnapConstraints.SnapToLines);
                 }
                 else if(!showGridlines.checked && snapToObject.checked){
                     diagram.snapSettings.constraints =  ej.diagrams.SnapConstraints.All &~ (ej.diagrams.SnapConstraints.ShowLines|ej.diagrams.SnapConstraints.SnapToHorizontalLines|ej.diagrams.SnapConstraints.SnapToVerticalLines|ej.diagrams.SnapConstraints.SnapToLines);
                 }
            break;
        }
        diagram.dataBind();
        scale();
        
    }
    function scale(){
        diagram.snapSettings.horizontalGridlines.scaledIntervals[0] = snappingInterval.value;
        diagram.snapSettings.verticalGridlines.scaledIntervals[0] = snappingInterval.value;
        diagram.dataBind();
    }
};