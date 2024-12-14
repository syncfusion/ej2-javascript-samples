/**
 * Sample for PERT Chart
 */
// Injecting required modules
ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding, ej.diagrams.HierarchicalTree, ej.diagrams.ComplexHierarchicalTree);


this.default = function () {
    //customization of the node template.
    function getNodeTemplate(node) {
        var table = new ej.diagrams.StackPanel();
        table.style.fill = '#0069d9';
        table.id = ej.diagrams.randomId();
        table.orientation = 'Vertical';
        var nameKey = 'id';
        var stack = new ej.diagrams.StackPanel();
        stack.children = [];
        stack.id = ej.diagrams.randomId();
        stack.height = 25;
        stack.orientation = 'Horizontal';
        stack.horizontalAlignment = 'Stretch';
        addRows(stack, node);
        table.children = [(getTextElement(node.data[nameKey], 'Stretch', 170, 'Stretch')), stack];
        table.children[0].style.color = 'white';
        table.children[0].style.fontSize = 14;
        return table;
    }

    //Function to create a text element with specified content, alignment, width, and vertical alignment
    function getTextElement(text, horizontalAlignment, width, verticalAlignment) {
        var textElement = new ej.diagrams.TextElement();
        textElement.content = text;
        textElement.id = ej.diagrams.randomId();
        textElement.width = width;
        textElement.height = 25;
        textElement.horizontalAlignment = horizontalAlignment;
        textElement.verticalAlignment = verticalAlignment;
        textElement.style.strokeWidth = 1;
        textElement.style.strokeColor = '#b5b5b5';
        textElement.style.fill = 'transparent';
        textElement.style.color = '#3c3c3c';
        textElement.relativeMode = 'Object';
        return textElement;
    }

    //Function to add rows of data representing start date, duration, and end date to a column within a node.
    function addRows(column, node) {
        column.children.push(getTextElement(node.data.startDate, 'Left', 70));
        column.children.push(getTextElement(node.data.duration, 'Center', 30));
        column.children.push(getTextElement(node.data.endDate, 'Right', 70));
    }
    //Initializes diagram control
    var diagram = new ej.diagrams.Diagram({
        width: '100%', height: '499px', snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
        dataSourceSettings: {
            id: 'id', parentId: 'Category',
            dataSource: new ej.data.DataManager(window.pertChartData),
            doBinding: function (nodeModel) {
                nodeModel.shape = { type: 'Text' };
            }
        }, layout: {
            type: 'ComplexHierarchicalTree', orientation: 'LeftToRight', verticalSpacing: 100, horizontalSpacing: 70
        },
        getConnectorDefaults: function (connector) {
            connector.style.strokeColor = '#979797';
            connector.targetDecorator.width = 10;
            connector.targetDecorator.height = 10;
            connector.targetDecorator.style = { fill: '#979797', strokeColor: '#979797' };
            return connector;
        },
        //used to customize template of the node.
        setNodeTemplate: function (node) { return getNodeTemplate(node); },
        tool: ej.diagrams.DiagramTools.ZoomPan
    });
    diagram.appendTo('#diagram');
    diagram.fitToPage();
};
