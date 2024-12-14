
/**
 * OverView
 */
ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding, ej.diagrams.HierarchicalTree);


this.default = function () {
    var overview;
    //Funtion to add the Template of the Node.
    function setNodeTemplate(obj, diagram) {
        // Create the outer container for the node content.
        var content = new ej.diagrams.StackPanel();
        content.id = obj.id + '_outerstack';
        content.orientation = 'Horizontal';
        content.style.strokeColor = 'gray';
        content.padding = { left: 5, right: 10, top: 5, bottom: 5 };

        // Create an image element for the employee image.
        var image = new ej.diagrams.ImageElement();
        image.width = 50;
        image.height = 50;
        image.style.strokeColor = 'none';
        image.source = obj.data.ImageUrl;
        image.id = obj.id + '_pic';

        // Create an inner stack panel for text elements (name and designation).
        var innerStack = new ej.diagrams.StackPanel();
        innerStack.style.strokeColor = 'none';
        innerStack.margin = { left: 5, right: 0, top: 0, bottom: 0 };
        innerStack.id = obj.id + '_innerstack';

        // Create a text element for the employee name.
        var text = new ej.diagrams.TextElement();
        text.content = obj.data.Name;
        text.style.color = 'black';
        text.style.bold = true;
        text.style.strokeColor = 'none';
        text.horizontalAlignment = 'Left';
        text.style.fill = 'none';
        text.id = obj.id + '_text1';

        // Create a text element for the employee designation.
        var desigText = new ej.diagrams.TextElement();
        desigText.margin = { left: 0, right: 0, top: 5, bottom: 0 };
        desigText.content = obj.data.Designation;
        desigText.style.color = 'black';
        desigText.style.strokeColor = 'none';
        desigText.style.fontSize = 12;
        desigText.style.fill = 'none';
        desigText.horizontalAlignment = 'Left';
        desigText.style.textWrapping = 'Wrap';
        desigText.id = obj.id + '_desig';
        innerStack.children = [text, desigText];
        content.children = [image, innerStack];
        return content;
    }
    //Initializtion of the diagram.
    var diagram = new ej.diagrams.Diagram({
        width: '100%', height: '590px', scrollSettings: { scrollLimit: 'Infinity' },
        //Sets the constraints of the SnapSettings
        snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
        //Configrues organizational chart layout
        layout: {
            type: 'OrganizationalChart', margin: { top: 20 },
            getLayoutInfo: function (node, tree) {
                if (!tree.hasSubTree) {
                    tree.orientation = 'Vertical';
                    tree.type = 'Right';
                }
            }
        },
        //Sets the parent and child relationship of DataSource.
        dataSourceSettings: {
            id: 'Id', parentId: 'ReportingPerson', dataSource: new ej.data.DataManager(window.overviewData)
        },
        //Sets the default values of Nodes.
        getNodeDefaults: function (obj, diagram) {
            obj.height = 50;
            obj.style = { fill: 'transparent', strokeWidth: 2 };
            return obj;
        },
        //Sets the default values of connectors.
        getConnectorDefaults: function (connector, diagram) {
            connector.targetDecorator.shape = 'None';
            connector.type = 'Orthogonal';
            connector.style.strokeColor = 'gray';
            return connector;
        },
        //customization of the node.
        setNodeTemplate: function (obj, diagram) {
            return setNodeTemplate(obj, diagram);
        }
    });
    diagram.appendTo('#diagram');

    //Initializtion of the Overview.
    overview = new ej.diagrams.Overview({
        width: '100%', height: '150px', sourceID: 'diagram'
    });
    overview.appendTo('#overview');

};