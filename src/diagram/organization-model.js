/**
 * organization-model
 */
ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding, ej.diagrams.HierarchicalTree, ej.diagrams.LayoutAnimation);



this.default = function () {
    //sets default value for Node.
    function getNodeDefaults(obj) {
        obj.backgroundColor = obj.data.color;
        obj.style = { fill: 'none', strokeColor: 'none', color: 'white' };
        obj.expandIcon = { height: 10, width: 10, shape: 'None', fill: 'lightgray', offset: { x: 0.5, y: 1 } };
        obj.expandIcon.verticalAlignment = 'Center';
        obj.expandIcon.margin = { left: 0, right: 0, top: 0, bottom: 0 };
        obj.collapseIcon = { height: 10, width: 10, shape: 'None', fill: 'lightgray', offset: { x: 0.5, y: 1 } };
        obj.collapseIcon.verticalAlignment = 'Center';
        obj.collapseIcon.margin = { left: 0, right: 0, top: 0, bottom: 0 };
        obj.width = 120;
        obj.height = 30;
        return obj;
    }
    //sets default value for Connector.
    function getConnectorDefaults(connector) {
        connector.targetDecorator.shape = 'None';
        connector.type = 'Orthogonal';
        connector.constraints = 0;
        connector.cornerRadius = 0;
        return connector;
    }
    //Initializes the nodes for the diagram
    var diagram = new ej.diagrams.Diagram({
        width: '100%', height: '700px', snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
        //configures data source settings
        dataSourceSettings: {
            id: 'Id', parentId: 'Manager',
            dataSource: new ej.data.DataManager(window.localBindData),
            doBinding: function (nodeModel, data, diagram) {
                nodeModel.shape = {
                    type: 'Text', content: data.Role,
                    margin: { left: 10, right: 10, top: 10, bottom: 10 }
                };
            }
        },
        //Disables all interactions except zoom/pan
        tool: ej.diagrams.DiagramTools.ZoomPan,
        //Configures automatic layout
        layout: {
            type: 'OrganizationalChart',
            getLayoutInfo: function (node, options) {
                if (node.data.Role === 'General Manager') {
                    options.assistants.push(options.children[0]);
                    options.children.splice(0, 1);
                }
                if (!options.hasSubTree) {
                    options.type = 'Right';
                }
            }
        },
        //Defines the default node and connector properties
        getNodeDefaults: function (obj, diagram) {
            return getNodeDefaults(obj, diagram);
        },
        getConnectorDefaults: function (connector, diagram) {
            return getConnectorDefaults(connector, diagram);
        }
    });
    diagram.appendTo('#diagram');
    //NumericTextBox used to increase/decrease horizontalSpacing of the layout.
    var horizontalSpace = new ej.inputs.NumericTextBox({
        format: '###.##',
        change: function () {
            diagram.layout.horizontalSpacing = Number(horizontalSpacing.value);
            diagram.dataBind();
        }
    });
    //NumericTextBox used to increase/decrease verticalSpacing of the layout.
    horizontalSpace.appendTo('#horizontalSpacing');
    var verticalSpace = new ej.inputs.NumericTextBox({
        format: '###.##',
        change: function () {
            diagram.layout.verticalSpacing = Number(verticalSpacing.value);
            diagram.dataBind();
        }
    });
    verticalSpace.appendTo('#verticalSpacing');
    //Enable of disable the expandable option for Node.
    var checkBoxExpand = new ej.buttons.CheckBox({
        label: 'Expandable',
        checked: false, change: function () {
            for (var _i = 0, _a = diagram.nodes; _i < _a.length; _i++) {
                var node_1 = _a[_i];
                if (checkBoxExpand.checked) {
                    node_1.expandIcon.shape = 'Minus';
                    node_1.collapseIcon.shape = 'Plus';
                }
                else {
                    node_1.expandIcon.shape = 'None';
                    node_1.collapseIcon.shape = 'None';
                }
            }
            diagram.dataBind();
            diagram.doLayout();
        }
    });
    checkBoxExpand.appendTo('#checked');

    //Click Event for orientation of the PropertyPanel.
    document.getElementById('orientation').onclick = function (args) {
        var target = args.target;
        // custom code start
        var selectedElement = document.getElementsByClassName('e-selected-orientation-style');
        if (selectedElement.length) {
            selectedElement[0].classList.remove('e-selected-orientation-style');
        }
        if (!target.classList.contains('e-selected-orientation-style')) {
            target.classList.add('e-selected-orientation-style');
        }
        // custom code end
        if (target.className === 'image-pattern-style e-selected-orientation-style') {
            var id = target.id;
            var orientation1 = id.substring(0, 1).toUpperCase() + id.substring(1, id.length);
            diagram.layout.orientation = orientation1;
            diagram.dataBind();
            diagram.doLayout();
        }
    };
    //Click Event for Subtree Alignment of the PropertyPanel.
    document.getElementById('pattern').onclick = function (args) {
        var target = args.target;
        // custom code start
        var selectedpatternElement = document.getElementsByClassName('e-selected-pattern-style');
        if (selectedpatternElement.length) {
            selectedpatternElement[0].classList.remove('e-selected-pattern-style');
        }
        if (!target.classList.contains('e-selected-pattern-style')) {
            target.classList.add('e-selected-pattern-style');
        }
        // custom code end
        if (target.className === 'image-pattern-style e-selected-pattern-style') {
            var subTreeOrientation;
            var subTreeAlignment;
            switch (target.id) {
                case 'pattern1':
                    subTreeOrientation = 'Vertical';
                    subTreeAlignment = 'Alternate';
                    break;
                case 'pattern2':
                    subTreeOrientation = 'Vertical';
                    subTreeAlignment = 'Left';
                    break;
                case 'pattern3':
                    subTreeOrientation = 'Vertical';
                    subTreeAlignment = 'Left';
                    break;
                case 'pattern4':
                    subTreeOrientation = 'Vertical';
                    subTreeAlignment = 'Right';
                    break;
                case 'pattern5':
                    subTreeOrientation = 'Vertical';
                    subTreeAlignment = 'Right';
                    break;
                case 'pattern6':
                    subTreeOrientation = 'Horizontal';
                    subTreeAlignment = 'Balanced';
                    break;
                case 'pattern7':
                    subTreeOrientation = 'Horizontal';
                    subTreeAlignment = 'Center';
                    break;
                case 'pattern8':
                    subTreeOrientation = 'Horizontal';
                    subTreeAlignment = 'Left';
                    break;
                case 'pattern9':
                    subTreeOrientation = 'Horizontal';
                    subTreeAlignment = 'Right';
                    break;
                default:
                    if (selectedpatternElement.length) {
                        selectedpatternElement[0].classList.remove('e-selected-pattern-style');
                    }
            }
            diagram.layout.getLayoutInfo = function (node, options) {
                if (target.id === 'pattern4' || target.id === 'pattern3') {
                    options.offset = -50;
                }
                if (node.data.Role === 'General Manager') {
                    options.assistants.push(options.children[0]);
                    options.children.splice(0, 1);
                }
                if (!options.hasSubTree) {
                    options.orientation = subTreeOrientation;
                    options.type = subTreeAlignment;
                }
            };
            diagram.dataBind();
            diagram.doLayout();
        }
    };
};