var pertChartData = [
    {
        'id': 'Start Project', 'branch': 'root', 'duration': '4',
        'startDate': '04/19/2018', 'endDate': ' 08/19/2018'
    },
    {
        'id': 'Design', 'Category': 'Start Project',
        'duration': '2', 'startDate': '08/20/2018', 'endDate': '10/20/2018'
    },
    {
        'id': 'Formalize Specification', 'Category': 'Start Project',
        'duration': '2', 'startDate': '10/21/2018', 'endDate': '12/22/2018'
    },
    {
        'id': 'Write Documentation', 'Category': 'Start Project',
        'duration': '1', 'startDate': '12/23/2018', 'endDate': '01/22/2019'
    },
    {
        'id': 'Release Prototype', 'Category': 'Design',
        'duration': '1', 'startDate': '01/23/2019', 'endDate': ' 02/23/2019'
    },
    {
        'id': 'Testing', 'Category': ['Formalize Specification', 'Release Prototype'],
        'duration': '2', 'startDate': '02/24/2019', 'endDate': '04/22/2019'
    },
    {
        'id': 'Release Project', 'Category': 'Release Prototype',
        'duration': '1', 'startDate': '04/23/2019', 'endDate': '05/24/2019'
    },
    {
        'id': 'Review Changes', 'Category': 'Write Documentation',
        'duration': '1', 'startDate': '05/25/2019', 'endDate': '06/26/2019'
    },
    {
        'id': 'Publish Documentation', 'Category': 'Review Changes',
        'duration': '1', 'startDate': '06/21/2019', 'endDate': '07/22/2019'
    },
    {
        'id': 'Finish', 'Category': ['Publish Documentation', 'Release Project'],
        'duration': '1', 'startDate': '07/23/2019', 'endDate': '08/24/2019'
    }];

/**
 * Sample for PERT Chart
 */

ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding, ej.diagrams.HierarchicalTree, ej.diagrams.ComplexHierarchicalTree);
this.default = function () {
    
     //Initializes diagram control
    var diagram = new ej.diagrams.Diagram({
        width: '100%', height: '499px', snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
        dataSourceSettings: {
            id: 'id', parentId: 'Category',
            dataManager: new ej.data.DataManager(pertChartData),
            doBinding: function (nodeModel, data, diagram) {
                nodeModel.shape = { type: 'Text' };
            }
        }, layout: {
            type: 'ComplexHierarchicalTree', orientation: 'LeftToRight', verticalSpacing: 100, horizontalSpacing: 70
        },
        getConnectorDefaults: function (connector, diagram) {
            connector.type = 'Straight';
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

    //customization of the node template.
    function getNodeTemplate(node) {
        var table = new ej.diagrams.StackPanel();
        table.style.fill = '#0069d9';
        table.orientation = 'Vertical';
        var nameKey = 'id';
        var stack = new ej.diagrams.StackPanel();
        stack.children = [];
        stack.height = 25;
        stack.orientation = 'Horizontal';
        stack.style.fill = 'white';
        stack.horizontalAlignment = 'Stretch';
        addRows(stack, node);
        table.children = [(getTextElement(node.data[nameKey], 'Stretch', 170, 'Stretch')), stack];
        table.children[0].style.color = 'white';
        table.children[0].style.fontSize = 14;
        return table;
    }

    function getTextElement(text, alignment, width, valignment) {
        var textElement = new ej.diagrams.TextElement();
        textElement.content = text;
        textElement.width = width;
        textElement.height = 25;
        textElement.horizontalAlignment = alignment;
        textElement.verticalAlignment = valignment;
        textElement.style.strokeWidth = 1;
        textElement.style.strokeColor = '#b5b5b5';
        textElement.style.fill = 'transparent';
        textElement.style.color = '#3c3c3c';
        textElement.relativeMode = 'Object';
        return textElement;
    }

    function addRows(column, node) {
        column.children.push(getTextElement(node.data.startDate, 'Left', 70));
        column.children.push(getTextElement(node.data.duration, 'Center', 30));
        column.children.push(getTextElement(node.data.endDate, 'Right', 70));
    }
};
