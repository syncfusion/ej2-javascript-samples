ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding, ej.diagrams.HierarchicalTree, ej.diagrams.LayoutAnimation);
/**
 * hierarchical-model
 */
//Click event for Appearance of the Property Panel.

// tslint:disable-next-line:max-func-body-length
this.default = function () {
    //sets node default value
    function nodeDefaults(obj) {
        obj.style = { fill: '#659be5', strokeColor: 'none', color: 'white', strokeWidth: 2 };
        obj.borderColor = '#3a6eb5';
        obj.backgroundColor = '#659be5';
        obj.shape.margin = { left: 5, right: 5, bottom: 5, top: 5 };
        obj.expandIcon = { height: 10, width: 10, shape: 'None', fill: 'lightgray', offset: { x: 0.5, y: 1 } };
        obj.collapseIcon.offset = { x: 0.5, y: 1 };
        obj.collapseIcon.padding.top = 5;
        obj.collapseIcon.fill = 'lightgray';
        return obj;
    }
    //sets connector default value
    function connectorDefaults(connector) {
        connector.targetDecorator.shape = 'None';
        connector.type = 'Orthogonal';
        connector.style.strokeColor = '#6d6d6d';
        connector.cornerRadius = 5;
        return connector;
    }
    //Initializes the nodes for the diagram
    var diagram = new ej.diagrams.Diagram({
        width: '100%', height: '499px', snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
        //configures data source settings
        dataSourceSettings: {
            id: 'Name', parentId: 'Category',
            dataSource: new ej.data.DataManager(window.hierarchicalTree),
            doBinding: function (nodeModel, data) {
                nodeModel.shape = { type: 'Text', content: data.Name };
            }
        },
        //Disables all interactions except zoom/pan
        tool: ej.diagrams.DiagramTools.ZoomPan,
        //Configures automatic layout
        layout: {
            type: 'HierarchicalTree', verticalSpacing: 30, horizontalSpacing: 40,
            enableAnimation: true
        },
        //Defines the default node and connector properties
        getNodeDefaults: function (obj) {
            return nodeDefaults(obj);
        }, getConnectorDefaults: function (connector) {
            return connectorDefaults(connector);
        }
    });
    diagram.appendTo('#diagram');

    //sets horizontal spacing between nodes
    var horizontalSpacing = new ej.inputs.NumericTextBox({
        format: '###.##',
        change: function () {
            diagram.layout.horizontalSpacing = Number(horizontalSpacing.value);
            diagram.doLayout();
        }
    });
    horizontalSpacing.appendTo('#horizontalSpacing');

    //sets vertical spacing between nodes
    var verticalSpacing = new ej.inputs.NumericTextBox({
        format: '###.##',
        change: function () {
            diagram.layout.verticalSpacing = Number(verticalSpacing.value);
            diagram.doLayout();
        }
    });
    verticalSpacing.appendTo('#verticalSpacing');

    //Changing appearence and applying style for property panal
    document.getElementById('appearance').onclick = function (args) {
        var targetelement = args.target;
        // custom code start
        // Styling the selected appearence
        var selectedElement1 = document.getElementsByClassName('e-selected-style');
        if (selectedElement1.length) {
            selectedElement1[0].classList.remove('e-selected-style');
        }
        // custom code end
        // Changes appearence of tree
        if (targetelement.className === 'image-pattern-style') {
            var id = args.target.id;
            var orientation = id.substring(0, 1).toUpperCase() + id.substring(1, id.length);
            diagram.layout.orientation = orientation;
            diagram.doLayout();
            args.target.classList.add('e-selected-style');
        }
    };
    // Check box to enable expand and collapse icon
    var checkBoxObj = new ej.buttons.CheckBox({
        change: function (args) {
            for (var i = 0, diagramNodes = diagram.nodes; i < diagramNodes.length; i++) {
                var node = diagramNodes[i];
                if (args.checked) {
                    node.expandIcon.shape = 'Minus';
                    node.collapseIcon.shape = 'Plus';
                }
                else {
                    node.expandIcon.shape = 'None';
                    node.collapseIcon.shape = 'None';
                }
            }
            diagram.doLayout();
        }
    });
    checkBoxObj.appendTo('#expand');
};
