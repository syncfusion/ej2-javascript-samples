/* jshint esversion: 6 */
/**
 * Default Zoom and Pan sample
 */


this.default = function () {
    //Toolbar functionality
    function handleToolbarClick(args) {
        switch (args.item.tooltipText) {
            case 'Zoom In':
                var zoomin = { type: 'ZoomIn', zoomFactor: 0.2 };
                diagram.zoomTo(zoomin);
                break;
            case 'Zoom Out':
                var zoomout = { type: 'ZoomOut', zoomFactor: 0.2 };
                diagram.zoomTo(zoomout);
                break;
            case 'Reset':
                diagram.reset();
                break;
            case 'Pan Tool':
                diagram.tool = ej.diagrams.DiagramTools.ZoomPan;
                break;
            case 'Pointer':
                diagram.clearSelection();
                diagram.drawingObject = {};
                diagram.tool = ej.diagrams.DiagramTools.SingleSelect | ej.diagrams.DiagramTools.MultipleSelect;
                break;
            case 'Fit To Page':
                diagram.fitToPage();
                break;
            case 'Bring Into View':
                //(EJ2-70843-sampleIssue)- while clicking the bring Into view without selectiong nodes means exception occurs and it is resolved
                if (diagram.selectedItems.nodes.length > 0) {
                    var bound = diagram.selectedItems.nodes[0].wrapper.bounds;
                    diagram.bringIntoView(bound);
                }
                break;
            case 'Bring Into Center':
                if (diagram.selectedItems.nodes.length > 0) {
                    var bounds = diagram.selectedItems.nodes[0].wrapper.bounds;
                    diagram.bringToCenter(bounds);
                }
                break;
        }
    }

    //customize the visual representation of nodes within a diagram.
    function setNodeTemplate(node) {
        // Create an outer stack panel to contain image and text elements
        var stackcontent = new ej.diagrams.StackPanel();
        stackcontent.id = node.id + '_outerstack';
        stackcontent.orientation = 'Horizontal';
        stackcontent.style.strokeColor = 'gray';
        stackcontent.padding = { left: 5, right: 10, top: 5, bottom: 5 };

        // Create an image element to display employee image
        var imageElement = new ej.diagrams.ImageElement();
        imageElement.width = 50;
        imageElement.height = 50;
        imageElement.style.strokeColor = 'none';
        imageElement.source = node.data.ImageUrl;
        imageElement.id = node.id + '_pic';

        // Create an inner stack panel to organize text elements
        var innerStackPanel = new ej.diagrams.StackPanel();
        innerStackPanel.style.strokeColor = 'none';
        innerStackPanel.margin = { left: 5, right: 0, top: 0, bottom: 0 };
        innerStackPanel.id = node.id + '_innerstack';

        // Create a text element for displaying employee name
        var textElement = new ej.diagrams.TextElement();
        textElement.content = node.data.Name;
        textElement.style.color = 'black';
        textElement.style.bold = true;
        textElement.style.strokeColor = 'none';
        textElement.horizontalAlignment = 'Left';
        textElement.style.fill = 'none';
        textElement.id = node.id + '_text1';

        // Create a TextElement for the node's designation
        var desigTextElement = new ej.diagrams.TextElement();
        desigTextElement.margin = { left: 0, right: 0, top: 5, bottom: 0 };
        desigTextElement.content = node.data.Designation;
        desigTextElement.style.color = 'black';
        desigTextElement.style.strokeColor = 'none';
        desigTextElement.style.fontSize = 12;
        desigTextElement.style.fill = 'none';
        desigTextElement.horizontalAlignment = 'Left';
        desigTextElement.style.textWrapping = 'Wrap';
        desigTextElement.id = node.id + '_desig';

        // Add text elements to the inner StackPanel
        innerStackPanel.children = [textElement, desigTextElement];

        // Add image element and inner StackPanel to the outer StackPanel
        stackcontent.children = [imageElement, innerStackPanel];

        // Return the StackPanel containing the node's content
        return stackcontent;
    }
    //Initializes diagram control
    var diagram = new ej.diagrams.Diagram({
        width: '100%', height: '500px', selectionChange: selectionChange,
        snapSettings: { constraints: 0 },
        //Configrues hierarchical tree layout
        layout: {
            type: 'OrganizationalChart', margin: { top: 20 },
            getLayoutInfo: function (tree) {
                if (!tree.hasSubTree) {
                    tree.orientation = 'Vertical';
                    tree.type = 'Right';
                }
            }
        },
        dataSourceSettings: {
            id: 'Id', parentId: 'ReportingPerson', dataSource: new ej.data.DataManager(window.overviewData)
        },
        //Sets the default values of Nodes.
        getNodeDefaults: function (node) {
            node.height = 50;
            node.style = { fill: 'transparent', strokeWidth: 2 };
            return node;
        },
        //Sets the default values of connectors.
        getConnectorDefaults: function (connector) {
            connector.targetDecorator.shape = 'None';
            connector.type = 'Orthogonal';
            connector.style.strokeColor = 'gray';
            return connector;
        },
        //customization of the node.
        setNodeTemplate: function (node) {
            return setNodeTemplate(node);
        }
    });
    // Appends the diagram to a specified element
    diagram.appendTo('#diagram');

    /*eslint esversion: 6 */
    // method to disable toolbar items 
    function selectionChange(args) {
        if (args.state === 'Changed') {
            var selectedItems = diagram.selectedItems.nodes;
            // Disables toolbar items if no nodes are selected
            if (selectedItems.length === 0) {
                toolbarEditor.items.find(item => item.id === 'BringIntoView').disabled = true;
                toolbarEditor.items.find(item => item.id === 'BringIntoCenter').disabled = true;
            }
            // Enables toolbar items if node is selected
            if (selectedItems.length > 0) {
                toolbarEditor.items.find(item => item.id === 'BringIntoView').disabled = false;
                toolbarEditor.items.find(item => item.id === 'BringIntoCenter').disabled = false;
            }
        }
    }

    //create the Toolbar and adding items in ToolBar.
    var toolbarEditor = new ej.navigations.Toolbar({
        clicked: handleToolbarClick, // Event handler for toolbar item click
        items: [
            {
                id: 'ZoomIn',
                type: 'Button',
                tooltipText: 'Zoom In',
                prefixIcon: 'e-icons e-zoom-in',
            },
            {
                id: 'ZoomOut',
                type: 'Button',
                tooltipText: 'Zoom Out',
                prefixIcon: 'e-icons e-zoom-out',
            },
            {
                id: 'Separator1', type: 'Separator'
            },
            {
                id: 'Pointer',
                type: 'Button',
                tooltipText: 'Pointer',
                prefixIcon: 'e-icons e-mouse-pointer',
            },
            {
                id: 'PanTool',
                type: 'Button',
                tooltipText: 'Pan Tool',
                prefixIcon: 'e-icons e-pan',
            },
            {
                id: 'Separator2', type: 'Separator'
            },
            {
                id: 'Reset',
                type: 'Button',
                tooltipText: 'Reset',
                prefixIcon: 'e-icons e-reset',
            },
            {
                id: 'FitToPage',
                type: 'Button',
                tooltipText: 'Fit To Page',
                prefixIcon: 'e-icons e-zoom-to-fit',
            },
            {
                id: 'Separator3', type: 'Separator'
            },
            {
                id: 'BringIntoView',
                type: 'Button',
                tooltipText: 'Bring Into View',
                prefixIcon: 'e-icons e-bring-to-view',
                disabled: true
            },
            {
                id: 'BringIntoCenter',
                type: 'Button',
                tooltipText: 'Bring Into Center',
                prefixIcon: 'e-icons e-bring-to-center',
                disabled: true
            },
        ]
    });
    toolbarEditor.appendTo('#toolbar');
};
