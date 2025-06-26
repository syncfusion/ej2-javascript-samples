/* jshint esversion: 6 */
/**
 * Container sample
 */
ej.diagrams.Diagram.Inject(ej.diagrams.UndoRedo,ej.diagrams.ConnectorBridging);
// Initialize diagram and checkbox
this.default = function () {
    // Initialization of font family collection.
    var fontTypeCollection = [
        // Arial, Aharoni, Bell MT
        { type: 'Arial', text: 'Arial' }, { type: 'Aharoni', text: 'Aharoni' }, { type: 'Bell MT', text: 'Bell MT' },
        // Fantasy, Segoe UI, Times New Roman, Verdana
        { type: 'Fantasy', text: 'Fantasy' }, { type: 'Segoe UI', text: 'Segoe UI' }, { type: 'Times New Roman', text: 'Times New Roman' },
        // Verdana
        { type: 'Verdana', text: 'Verdana' }
    ];

    function createNode(id, x, y, height, width, content, marginX, marginY) {
        var ports = [];
        if (id == "node5") {
            ports = [
                { id: "port1", offset: { x: 0.9, y: 0 } },
            ];
        }
        if (id == "node6") {

            ports = [
                { id: "port1", offset: { x: 0.9, y: 0 } },
            ];
        }
        if (id == "node13") {

            ports = [
                { id: "port2", offset: { x: 1, y: 0.5 } },
            ];
        }
        if (id == "node15") {

            ports = [
                { id: "port2", offset: { x: 1, y: 0.5 } },
            ];
        }
        if (id == "node3") {

            ports = [
                { id: "port3", offset: { x: 0.25, y: 1 } },
                { id: "port4", offset: { x: 0.5, y: 1 } },
                { id: "port5", offset: { x: 0.75, y: 1 } },
            ];
        }
        if (id == "node7") {
            ports = [
                { id: "port1", offset: { x: 0, y: 0.5 } },
                { id: "port2", offset: { x: 1, y: 0.5 } },
            ];
        }
        if (id == "node8") {
            ports = [
                { id: "port3", offset: { x: 0.25, y: 1 } },
                { id: "port5", offset: { x: 0.75, y: 1 } },
            ];
        }

        return {
            id: id,
            offsetX: x,
            offsetY: y,
            margin: { left: marginX || 0, top: marginY || 0 },
            width: width,
            height: height,
            style: { fill: 'white', strokeColor: '#2546BB', strokeWidth: 1 },
            shape: {
                type: 'Basic', shape: 'Rectangle',
                cornerRadius: 4
            },
            annotations: [{
                content: content,
                style: { color: '#343434' },
                horizontalAlignment: 'Center',
            }],
            ports: ports
        };
    }
    const nodes = [
        createNode("node1", 300, 300, 60, 100, "HTTP Traffic"),
        createNode("node2", 500, 300, 60, 100, "Ingestion service", 50, 30),
        createNode("node3", 650, 300, 60, 100, "Workflow service", 200, 30),
        createNode("node4", 500, 415, 60, 100, "Package service", 50, 150),
        createNode("node5", 650, 415, 60, 150, "Drone Scheduler service", 175, 150),
        createNode("node6", 800, 415, 60, 100, "Delivery service", 350, 150),
        createNode("node7", 580, 130, 60, 90, "Azure Service Bus"),
        createNode("node8", 815, 130, 60, 100, "Managed Identities"),
        createNode("node9", 1000, 130, 60, 100, "Azure Key Vault"),
        createNode("node10", 500, 550, 60, 100, "Azure Cosmos DB for MongoDB API"),
        createNode("node11", 650, 550, 60, 100, "Azure Cosmos DB"),
        createNode("node12", 800, 550, 60, 100, "Azure Cache for Redis"),
        createNode("node13", 1040, 255, 60, 100, "Azure Application Insights"),
        createNode("node14", 1140, 350, 60, 100, "Azure Monitor"),
        createNode("node15", 1040, 445, 60, 100, "Azure Log Analytics workspace"),
        {
            id: 'container', width: 520, height: 300, offsetX: 660, offsetY: 350,
            shape: {
                type: 'Container',
                header: {
                    annotation: {
                        content: 'Azure Container Apps Environment',
                        style: { fontSize: 18, bold: true, fill: 'transparent', strokeColor: 'transparent' },
                    },
                    height: 40,
                    style: { fontSize: 18, bold: true, fill: 'transparent', strokeColor: 'transparent' },
                },
                children: ["node2", "node3", "node4", "node5", "node6"]
            },
            style: { fill: '#E9EEFF', strokeColor: '#2546BB', strokeWidth: 1 }
        },
    ];
    function createConnector(id, sourceID, targetID, sourcePortID, targetPortID, sourceDecorator) {
        return {
            id: id,
            type: 'Orthogonal',
            sourceID: sourceID,
            targetID: targetID,
            sourcePortID: sourcePortID,
            targetPortID: targetPortID,
            style: { strokeColor: "#5E5E5E", strokeWidth: 1 },
            sourceDecorator: sourceDecorator,
            targetDecorator: {
                style: {
                    fill: "#5E5E5E",
                    strokeColor: "#5E5E5E",
                    strokeWidth: 1
                }
            }
        };
    }

    const sourceDecorator = {
        shape: 'Arrow',
        style: {
            fill: "#5E5E5E",
            strokeColor: "#5E5E5E",
            strokeWidth: 1
        }
    };
    const connectors = [
        createConnector("connector1", "node1", "node2"),
        createConnector("connector2", "node4", "node10"),
        createConnector("connector3", "node5", "node11"),
        createConnector("connector4", "node6", "node12"),
        createConnector("connector5", "node8", "node9"),
        createConnector("connector6", "container", "node13"),
        createConnector("connector7", "container", "node15"),
        createConnector("connector8", "node3", "node4", 'port3'),
        createConnector("connector9", "node3", "node5", 'port4'),
        createConnector("connector10", "node3", "node6", 'port5'),
        createConnector("connector11", "node2", "node7", "", 'port1'),
        createConnector("connector12", "node7", "node3", 'port2'),
        createConnector("connector13", "node13", "node14", 'port2'),
        createConnector("connector14", "node15", "node14", 'port2'),
        createConnector("connector16", "node8", "node5", 'port3', 'port1', sourceDecorator),
        createConnector("connector17", "node8", "node6", 'port5', 'port1', sourceDecorator)
    ];
    // Initialize diagram control
    let diagram = new ej.diagrams.Diagram({
        width: '100%', height: '700px',
        nodes: nodes,
        connectors: connectors,
        constraints: ej.diagrams.DiagramConstraints.Default | ej.diagrams.DiagramConstraints.Bridging,
        rulerSettings: {
            showRulers: true, dynamicGrid: true
        },
        selectionChange: onSelectionChange,
    });
    diagram.appendTo('#diagram');

    // Handles selection changes in the diagram
    function onSelectionChange(args) {
        if (args.state === 'Changed') {
            var selectedItems = diagram.selectedItems.nodes.concat(diagram.selectedItems.connectors);

            let hasAnnotation = false;
            selectedItems.forEach(item => {
                if (item.shape.type === 'Container') {
                    hasAnnotation = item.shape.header.annotation ? true : false;
                }
                else {
                    hasAnnotation = selectedItems.some(item => item.annotations && item.annotations.length > 0);
                }
            });
            const toolbarItems = ['FontStyle', 'FontSize', 'Bold', 'Italic', 'Underline', 'FontColor'];
            toolbarItems.forEach(id => {
                const item = toolbarObject.items.find(item => item.id === id);
                if (item) {
                    item.disabled = !hasAnnotation;
                }
            });
        }
    }

    //Apply the appearence of the Annotation 
    function updateAnnotationStyling(value, fontSizeChange, fontType, index, isSelected) {
        const toolbarElement = document.getElementById("toolbarEdit");
        const toolbar = toolbarElement ? toolbarElement.ej2_instances[0] : null;
        const selectedItems = [...diagram.selectedItems.nodes, ...diagram.selectedItems.connectors];
        for (let i = 0; i < selectedItems.length; i++) {
            const obj = selectedItems[i];
            if (!obj) continue;
            const annotations = (obj.shape.type === 'Container') ? [obj.shape.header.annotation] : obj.annotations || [];
            for (let j = 0; j < annotations.length; j++) {
                const style = annotations[j].style;

                switch (value) {
                    case 'fontsize':
                        style.fontSize = fontSizeChange;
                        break;
                    case 'fontfamily':
                        style.fontFamily = fontType.toString();
                        break;
                    case 'bold':
                        style.bold = !style.bold;
                        isSelected = style.bold;
                        break;
                    case 'italic':
                        style.italic = !style.italic;
                        isSelected = style.italic;
                        break;
                    case 'underline':
                        style.textDecoration = style.textDecoration === 'None' ? 'Underline' : 'None';
                        isSelected = style.textDecoration === 'Underline';
                        break;
                }
            }

            if (toolbar && toolbar.items[index] !== undefined) {
                const item = toolbar.items[index];
                const selectedClass = 'tb-item-selected';
                if (isSelected && !item.cssClass.includes(selectedClass)) {
                    item.cssClass += ` ${selectedClass}`;
                } else if (!isSelected && item.cssClass.includes(selectedClass)) {
                    item.cssClass = item.cssClass.replace(` ${selectedClass}`, '');
                }
                toolbar.dataBind();
            }

            diagram.dataBind();
        }
    }
    // Initialization of font size numeric text box
    var fontSizeChange = new ej.inputs.NumericTextBox({
        value: 12, min: 1, max: 30, width: '110px',
        format: '##.##', step: 2,
        change: function (args) {
            updateAnnotationStyling('fontsize', args.value);
        }
    });
    fontSizeChange.appendTo('#FontSize');

    // Create a new DropDownList instance for font family
    var fontType = new ej.dropdowns.DropDownList({
        dataSource: fontTypeCollection,
        fields: { value: 'type', text: 'text' }, popupWidth: 150,
        width: '100%', placeholder: 'select a font type', index: 0,
        change: function (args) {
            updateAnnotationStyling('fontfamily', null, args.value.toString());
        }
    });
    fontType.appendTo('#FontStyle');

    // Initialization of color picker for font
    var fontColorChange = new ej.inputs.ColorPicker({
        mode: 'Palette',
        value: '#000',
        change: function (arg) {
            const selectedItems = [...diagram.selectedItems.nodes, ...diagram.selectedItems.connectors];
            for (var i = 0; i < selectedItems.length; i++) {
                var obj = selectedItems[i];
                if (obj.shape.type === 'Container') {
                    obj.shape.header.annotation.style.color = arg.currentValue.rgba;
                    diagram.dataBind();
                } else {
                    for (var j = 0; j < obj.annotations.length; j++) {
                        obj.annotations[j].style.color = arg.currentValue.rgba;
                        diagram.dataBind();
                    }
                }
            }
        }
    });
    fontColorChange.appendTo('#FontColor');

    function toolbarSelect(args) {
        switch (args.item.tooltipText) {
            case 'Bold':
                updateAnnotationStyling('bold', args.value, null, 11);
                break;
            case 'Italic':
                updateAnnotationStyling('italic', args.value, null, 12);
                break;
            case 'Underline':
                updateAnnotationStyling('underline', args.value, null, 13);
                break;
        }
        diagram.dataBind();
    }

    //create the Toolbar and adding items in ToolBar.
    var toolbarObject = new ej.navigations.Toolbar({
        clicked: toolbarSelect,
        items: [
            {
                id: 'FontStyle',
                type: 'Input',
                tooltipText: 'Font Style',
                align: 'Left',
                template: fontType,
                disabled:'true',
            },
            {
                id: 'FontSize',
                type: 'Input',
                tooltipText: 'Font Size',
                align: 'Left',
                template: fontSizeChange,
                style: "margin-left:3px",
                disabled:'true',
            },
            {
                id: 'Bold',
                type: 'Button',
                tooltipText: 'Bold',
                prefixIcon: 'e-icons e-bold',
                cssClass: 'tb-item-start',
                disabled:'true',
            },
            {
                id: 'Italic',
                type: 'Button',
                tooltipText: 'Italic',
                prefixIcon: 'e-icons e-italic',
                cssClass: 'tb-item-middle',
                disabled:'true',
            },
            {
                id: 'Underline',
                type: 'Button',
                tooltipText: 'Underline',
                prefixIcon: 'e-icons e-underline',
                cssClass: 'tb-item-end',
                disabled:'true',
            },
            {
                // Font Color picker
                id: 'FontColor',
                type: 'Input',
                tooltipText: 'Font Color',
                align: 'Left',
                template: fontColorChange,
                disabled:'true',
            },
        ],
    });
    // Appends the toolbar to the specified HTML element.
    toolbarObject.appendTo('#toolbarEdit');
};