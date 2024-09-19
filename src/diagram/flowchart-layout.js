
ej.diagrams.Diagram.Inject(ej.diagrams.FlowchartLayout,ej.diagrams.DataBinding);
this.default = function () {
    //Initializes the data source for the layout
    var flowChartData = [
        { id: "A", name: "Start", shape: "Terminator", color: "#90EE90", parentId: null, stroke: "#333", strokeWidth: 1 },
        { id: "B", name: "Open the browser and go to Amazon site", shape: "Rectangle", color: "#1759B7", parentId: ["A"], arrowType: "single-line-arrow", stroke: "#333", strokeWidth: 1 },
        { id: "C", name: "Already a customer?", shape: "Decision", color: "#2F95D8", parentId: ["B"], arrowType: "single-line-arrow", stroke: "#333", strokeWidth: 1 },
        { id: "D", name: "Create an account", shape: "Rectangle", color: "#70AF16", parentId: ["C"], label: ["No"], arrowType: "single-line-arrow", stroke: "#333", strokeWidth: 1 },
        { id: "E", name: "Enter login information", shape: "Rectangle", color: "#70AF16", parentId: ["C"], label: ["Yes"], arrowType: "single-line-arrow", stroke: "#333", strokeWidth: 1 },
        { id: "F", name: "Search for the book in the search bar", shape: "Predefined Process", color: "#1759B7", parentId: ["E", "D"], arrowType: "single-line-arrow", label: ["", ""], stroke: "#333", strokeWidth: 1 },
        { id: "G", name: "Select the preferred book", shape: "Rectangle", color: "#1759B7", parentId: ["F"], arrowType: "single-line-arrow", stroke: "#333", strokeWidth: 1 },
        { id: "H", name: "Is the book new or used?", shape: "Rectangle", color: "#2F95D8", parentId: ["G"], arrowType: "single-line-arrow", stroke: "#333", strokeWidth: 1 },
        { id: "I", name: "Select the new book", shape: "Rectangle", color: "#70AF16", parentId: ["H"], label: ["Yes"], arrowType: "single-line-arrow", stroke: "#333", strokeWidth: 1 },
        { id: "J", name: "Select the used book", shape: "Rectangle", color: "#70AF16", parentId: ["H"], label: ["No"], arrowType: "single-line-arrow", stroke: "#333", strokeWidth: 1 },
        { id: "K", name: "Add to Cart & Proceed to Checkout", shape: "Rectangle", color: "#1759B7", parentId: ["I", "J"], arrowType: "single-line-arrow", label: ["", ""], stroke: "#333", strokeWidth: 1 },
        { id: "L", name: "Enter shipping and payment details", shape: "Rectangle", color: "#1759B7", parentId: ["K", "M"], arrowType: "single-line-arrow", label: ["", ""], stroke: "#333", strokeWidth: 1 },
        { id: "M", name: "Is the information correct?", shape: "Decision", color: "#2F95D8", parentId: ["L"], arrowType: "single-line-arrow", stroke: "#333", strokeWidth: 1 },
        { id: "N", name: "Review and place the order", shape: "Rectangle", color: "#1759B7", parentId: ["M"], label: ["True"], arrowType: "single-line-arrow", stroke: "#333", strokeWidth: 1 },
        { id: "O", name: "End", shape: "Terminator", color: "#8E44CC", parentId: ["N"], arrowType: "single-line-arrow", stroke: "#333", strokeWidth: 1 }
      ];

    // Function to set default values for nodes
    function nodeDefaults(node) {
        node.width = 150;
        node.height = 50;
        if(node.shape.shape === 'Decision'){
            node.width = 120;
            node.height = 100;
        }
        return node;
    }
    // Function to set default values for connectors
    function connectorDefaults(connector) {
        connector.type = 'Orthogonal';
        if(connector.annotations && connector.annotations.length > 0) {
            connector.annotations[0].style.fill = 'white';
            connector.annotations[0].style.color = 'black';
        }
        return connector;
    }
   
        //Initializes the diagram
        var diagram = new ej.diagrams.Diagram({
            width: '100%', height: '750px',
            rulerSettings: {
                showRulers: true
            },
            scrollSettings: { scrollLimit: 'Infinity' },
            tool: ej.diagrams.DiagramTools.ZoomPan,
            layout:{
                type: 'Flowchart',
                orientation: 'TopToBottom',
                flowchartLayoutSettings: {
                  yesBranchDirection: 'LeftInFlow',
                  noBranchDirection: 'RightInFlow',
                  yesBranchValues: ['Yes', 'True'],
                  noBranchValues: ['No', 'False']
                },
                verticalSpacing: 50,
                horizontalSpacing: 50
            },
            dataSourceSettings: {
                id: 'id',
                parentId: 'parentId',
                dataSource: new ej.data.DataManager(flowChartData)
              },
            getConnectorDefaults: function (connectors) {
                return connectorDefaults(connectors); // Set the default connector settings
            },
            getNodeDefaults: function (nodes) {
                return nodeDefaults(nodes); // Set the default node settings
            }
        });
        diagram.appendTo('#diagram');

        
// Property panel functionalities

// Orientation
var orientation = new ej.dropdowns.DropDownList({
    index: 0,
    width: '50%',
    dataSource:[{text: 'Top to bottom', value: 'TopToBottom'},{text:'Left to right', value: 'LeftToRight'}],
    change: function(args) {
        var value = args.value;
        diagram.layout.orientation = value === 'Top to bottom' ? 'TopToBottom' : 'LeftToRight';
        diagram.dataBind();
    }
});
orientation.appendTo('#orientation');

// Vertical spacing
var verticalSpacing = new ej.inputs.NumericTextBox({
    value: 50,
    width: '50%',
    min:30,max:120,
    format:'###.##',
    change: function(args){
        var value = args.value;
        diagram.layout.verticalSpacing = value;
        diagram.dataBind();
    }
});
verticalSpacing.appendTo('#verticalSpacing');

// Horizontal spacing
var horizontalSpacing = new ej.inputs.NumericTextBox({
    value: 50,
    width: '50%',
    format:'###.##',
    min:20,max:120,
    change: function(args){
        var value = args.value;
        diagram.layout.horizontalSpacing = value;
        diagram.dataBind();
    }
});
horizontalSpacing.appendTo('#horizontalSpacing');

// Yes branch direction
var yesBranchDirection = new ej.dropdowns.DropDownList({
    index: 0,
    width: '50%',
    dataSource:[{text: 'Left in flow', value: 'LeftInFlow'},{text:'Right in flow', value: 'RightInFlow'},{text:'Same as flow', value: 'SameAsFlow'}],
    change: function(args){
        var value = args.value;
        diagram.layout.flowchartLayoutSettings.yesBranchDirection = value === 'Same as flow' ? 'SameAsFlow' :  value === 'Right in flow' ? 'RightInFlow' : 'LeftInFlow';
        diagram.doLayout();
    }
});
yesBranchDirection.appendTo('#yesBranchDirection');

// No branch direction
var noBranchDirection = new ej.dropdowns.DropDownList({
    index: 1,
    width: '50%',
     dataSource:[{text: 'Left in flow', value: 'LeftInFlow'},{text:'Right in flow', value: 'RightInFlow'},{text:'Same as flow', value: 'SameAsFlow'}],
    change: function(args){
        var value = args.value;
        diagram.layout.flowchartLayoutSettings.noBranchDirection = value === 'Same as flow' ? 'SameAsFlow' :  value === 'Right in flow' ? 'RightInFlow' : 'LeftInFlow';
        diagram.doLayout();
    }
});
noBranchDirection.appendTo('#noBranchDirection');
};
