/*jslint esversion: 6 */
/**
 * Print and Export
 */
ej.diagrams.Diagram.Inject(ej.diagrams.PrintAndExport);

this.default = function () {
    var checkBoxObj;
    var toolbarObj;
    var btnObj;
    var diagram;
    //click event to perform printing the diagraming objects.
    function onItemClick(args) {
        if (args.item.text === 'Print') {
            var printOptions = {
                mode: 'Data',
                region: 'PageSettings',
                multiplePage: checkBoxObj.checked,
                margin: { left: 0, top: 0, bottom: 0, right: 0 }
            };
            diagram.print(printOptions);
        }
    }
    //Export the diagraming object based on the format.
    function onSelect(args) {
        var exportOptions = {
            format: args.item.text,
            mode: 'Download',
            region: 'PageSettings',
            multiplePage: checkBoxObj.checked,
            fileName: 'Export',
            margin: { left: 0, top: 0, bottom: 0, right: 0 }
        };
        diagram.exportDiagram(exportOptions);
    }

    // Helper function to create a node with common properties
    function createNode(id, width, height, offsetX, offsetY, strokeColor, fillColor, content, shape = 'Rectangle') {
        return {
            id,
            width,
            height,
            offsetX,
            offsetY,
            shape: { type: 'Basic', shape: shape },
            style: { strokeColor: strokeColor, fill: fillColor },
            annotations: [{ content }]
        };
    }

    // Initialize Diagram Nodes with helper function
    let nodes = [
        createNode('sourceNode1', 100, 50, 120, 100, '#868686', '#d5f5d5', 'Source Document'),
        createNode('censusNode2', 100, 75, 120, 200, '#8f908f', '#e2f3fa', 'Census Record', 'Diamond'),
        createNode('booksNode3', 100, 75, 120, 325, '#8f908f', '#e2f3fa', 'Books and Magazine', 'Diamond'),
        createNode('recordNode4', 125, 50, 320, 200, '#868686', '#d5f5d5', 'Record Template'),
        createNode('traditionalNode5', 125, 50, 320, 325, '#868686', '#d5f5d5', 'Traditional Template'),
        createNode('nontraditionalNode6', 135, 50, 120, 425, '#a8a8a8', '#faebee', 'Nontraditional'),
        createNode('Radial1', 125, 50, 850, 225, '#a8a8a8', '#fef0db', 'Health Fitness', 'Ellipse'),
        createNode('Radial2', 125, 75, 850, 100, '#a8a8a8', '#faebee', 'Diet', 'Ellipse'),
        createNode('Radial3', 125, 75, 1025, 175, '#a8a8a8', '#faebee', 'Flexibility', 'Ellipse'),
        createNode('Radial4', 125, 75, 1000, 350, '#a8a8a8', '#faebee', 'Muscular Endurance', 'Ellipse'),
        createNode('Radial5', 125, 75, 675, 175, '#a8a8a8', '#faebee', 'Cardiovascular Strength', 'Ellipse'),
        createNode('Radial6', 125, 75, 770, 350, '#a8a8a8', '#faebee', 'Muscular Strength', 'Ellipse')
    ];

    // Helper function to create a connector with common properties
    function createConnector(id, sourceID, targetID, content = 'Yes') {
        return {
            id,
            sourceID,
            targetID,
            annotations: content ? [{ content, style: { fill: 'White' } }] : []
        };
    }

    // Initialize Diagram Connectors with helper function
    let connectors = [
        createConnector('flowChartConnector1', 'sourceNode1', 'censusNode2', ''),
        createConnector('flowChartConnector2', 'censusNode2', 'booksNode3', 'No'),
        createConnector('flowChartConnector3', 'booksNode3', 'nontraditionalNode6', 'No'),
        createConnector('flowChartConnector4', 'censusNode2', 'recordNode4'),
        createConnector('flowChartConnector5', 'booksNode3', 'traditionalNode5'),
        createConnector('RadialConnector1', 'Radial1', 'Radial2'),
        createConnector('RadialConnector2', 'Radial1', 'Radial3'),
        createConnector('RadialConnector3', 'Radial1', 'Radial4'),
        createConnector('RadialConnector4', 'Radial1', 'Radial5'),
        createConnector('RadialConnector5', 'Radial1', 'Radial6')
    ];
    //initialize the diagram control
    diagram = new ej.diagrams.Diagram({
        width: '100%', height: '580px', nodes: nodes,
        connectors: connectors,
        snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
        pageSettings: { width: 550, height: 500, multiplePage: true },
        getConnectorDefaults: function (connector, diagram) {
            connector.style.strokeColor = '#6d6d6d';
            return connector;
        }
    });
    var items = [{ text: 'JPG' }, { text: 'PNG' }, { text: 'SVG' }];
    //DropDownButton used to perform exporting.
    btnObj = new ej.splitbuttons.DropDownButton({
        items: items, content: 'Export', select: onSelect,
    });
    //enable or disable the multiple page printing and exporting.
    checkBoxObj = new ej.buttons.CheckBox({
        checked: false, label: 'Multiple Page',
    });
    // create and add printing and exporting option in ToolBar.
    toolbarObj = new ej.navigations.Toolbar({
        clicked: onItemClick,
        items: [
            {
                type: 'Input', text: 'Export', template: '<button id="custombtn" style="width:100%;"></button>'
            },
            {
                type: 'Button', text: 'Print', prefixIcon: 'e-diagram-icons e-diagram-print',
            },
            {
                type: 'Input', template: checkBoxObj
            },
        ]
    });
    // Append elements to DOM.
    toolbarObj.appendTo('#toolbar_default');
    btnObj.appendTo('#custombtn');
    diagram.appendTo('#diagram');
    diagram.fitToPage({ mode: 'Width' });
};