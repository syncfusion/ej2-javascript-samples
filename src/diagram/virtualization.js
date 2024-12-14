/**
 * virtualization sample
 */

this.default = function () {
    // tslint:disable-next-line:max-func-body-length
    var bound = new ej.diagrams.Rect(100, 100, 500, 100);
    var diagram;
    // Handles the click event for the context menu items.
    function onClick(args) {
        switch (args.item.tooltipText) {
            case 'ZoomIn':
                diagram.zoomTo({ type: 'ZoomIn', zoomFactor: 0.2 });
                break;
            case 'ZoomOut':
                diagram.zoomTo({ type: 'ZoomOut', zoomFactor: 0.2 });
                break;
            case 'Reset':
                diagram.reset();
                diagram.fitToPage({ mode: 'Page', region: 'CustomBounds', margin: { left: 50, right: 50 }, customBounds: bound });
                break;
        }
    }
    // Generates virtualized data for the diagram based on the provided window.virtualizationData.
    function dataVirtualization() {
        var i = 0;
        var data = [];
        var parentName = window.virtualizationData[0].Name;
        data.push({ 'Name': parentName, 'Parent': "" });
        i++;
        for (var j = 1; j < 100; j++) {
            var name = window.virtualizationData[i].Name;
            data.push({ 'Name': name, 'Parent': parentName });
            i++;
            for (var k = 0; k < 2; k++) {
                data.push({ 'Name': window.virtualizationData[i].Name, 'Parent': name });
                i++;
            }
        }
        return data;
    }
    var virtualData = new ej.data.DataManager(dataVirtualization());
    //Initializes diagram control
    diagram = new ej.diagrams.Diagram({
        width: '100%', height: '500px',
        //Configrues hierarchical tree layout
        layout: {
            type: 'HierarchicalTree',
            margin: { left: 10, top: 10 },
            horizontalSpacing: 40.0,
            verticalSpacing: 50.0,
            orientation: 'TopToBottom',
        },
        //Sets the default values of nodes
        getNodeDefaults: function (node) {
            node.shape = { type: 'Text', content: node.data.Name, shape: 'Rectangle', cornerRadius: 5 };
            node.style = { fill: '#659be5', strokeColor: 'none', color: 'white', strokeWidth: 2 };
            node.backgroundColor = '#659be5';
            node.shape.margin = { left: 5, right: 5, bottom: 5, top: 5 };
            node.width = 80;
            node.height = 30;
            return node;
        },
        //Sets the default values of connectors
        getConnectorDefaults: function (connector) {
            connector.type = 'Orthogonal';
            connector.cornerRadius = 7;
            connector.targetDecorator.height = 7;
            connector.targetDecorator.width = 7;
            connector.style.strokeColor = '#6d6d6d';
        },
        //Configures data source
        dataSourceSettings: {
            dataSource: virtualData,
            parentId: "Parent",
            id: "Name",
        },
        //Disables all interactions except zoom/pan
        tool: ej.diagrams.DiagramTools.ZoomPan,
        //Enables the virtualization constraint
        constraints: ej.diagrams.DiagramConstraints.Default | ej.diagrams.DiagramConstraints.Virtualization,
        snapSettings: { constraints: 0 },
        created: function () {
            //fit the diagram to the page with respect to mode and region
            diagram.fitToPage(
                {
                    mode: 'Page',
                    region: 'CustomBounds',
                    margin: { left: 50, right: 50 },
                    customBounds: bound
                });
        },
    });
    diagram.appendTo('#diagram');
    //create the Toolbar and add ZoomIn,ZoomOut and Reset options in ToolBar.
    var toolbarObj = new ej.navigations.Toolbar({
        clicked: onClick,
        items: [
            { type: 'Button', text: 'Zoom In', tooltipText: 'ZoomIn', prefixIcon: 'e-ddb-icons e-zoomin' }, { type: 'Separator' },
            { type: 'Button', text: 'Zoom Out', tooltipText: 'ZoomOut', prefixIcon: 'e-ddb-icons e-zoomout' }, { type: 'Separator' },
            { type: 'Button', text: 'Reset', tooltipText: 'Reset', prefixIcon: 'e-diagram-icons e-diagram-reset' }
        ]
    });
    toolbarObj.appendTo('#toolbar');
};