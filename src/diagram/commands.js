/* jshint esversion: 6 */
ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding, ej.diagrams.BpmnDiagrams);



this.default = function () {
    //Initializes the nodes for the diagram
    var nodes = [
        createTextNode('Select the below shapes', 150, 40),
        createShapeNode('node1', 60, 40, 150, 100, '#DAEBFF'),
        createShapeNode('node2', 80, 40, 150, 170, '#F5E0F7'),
        createShapeNode('node3', 100, 40, 150, 240, '#E0E5BB'),
        createTextNode('Try Alignment Commands (AlignRight, AlignLeft, and AlignCenter)', 150, 295),
        createTextNode('Select the below shapes', 150, 395),
        createShapeNode('node4', 40, 60, 80, 500, '#DAEBFF'),
        createShapeNode('node5', 40, 80, 160, 500, '#F5E0F7'),
        createShapeNode('node6', 40, 100, 240, 500, '#E0E5BB'),
        createTextNode('Try Alignment Commands (AlignTop, AlignBottom, and AlignMiddle)', 150, 595),
        createTextNode('Select the below shapes', 550, 40),
        createShapeNode('node7', 80, 40, 485, 100, '#DAEBFF'),
        createShapeNode('node8', 80, 40, 635, 100, '#F5E0F7'),
        createShapeNode('node9', 80, 40, 595, 180, '#E0E5BB'),
        createTextNode('Try SpaceAcross Commands', 550, 295),
        createTextNode('Select the below shapes', 550, 395),
        createShapeNode('node10', 80, 40, 475, 430, '#DAEBFF'),
        createShapeNode('node11', 80, 40, 475, 530, '#F5E0F7'),
        createShapeNode('node12', 80, 40, 625, 460, '#E0E5BB'),
        createTextNode('Try SpaceAcross Commands', 550, 595),
        createTextNode('Select the below shapes', 950, 40),
        {
            id: 'RightTriangle', width: 100, height: 100, offsetX: 950, offsetY: 120, style: { fill: '#E0E5BB', strokeColor: 'white' },
            shape: { type: 'Basic', shape: 'RightTriangle' },
        },
        createTextNode('Try Flip Commands', 950, 295),
        createTextNode('Select the below shapes', 950, 395),
        createShapeNode('node14', 60, 20, 950, 420, '#DAEBFF'),
        createShapeNode('node15', 80, 40, 950, 460, '#F5E0F7'),
        createShapeNode('node16', 100, 50, 950, 540, '#E0E5BB'),
        createTextNode('Try Sizing Commands (Same size, Same width, Same height)', 950, 595),
    ];

    // Function to create text nodes
    function createTextNode(content, offsetX, offsetY) {
        return {
            shape: { type: 'Text', content: content },
            constraints: ej.diagrams.NodeConstraints.PointerEvents,
            style: { fontSize: 10, fill: 'None', fontFamily: 'sans-serif', strokeWidth: 0 },
            offsetX: offsetX,
            offsetY: offsetY
        };
    }

    // Function to create shape nodes
    function createShapeNode(id, width, height, offsetX, offsetY, fill) {
        return {
            id: id,
            width: width,
            height: height,
            offsetX: offsetX,
            offsetY: offsetY,
            style: { fill: fill, strokeColor: 'white' }
        };
    }
    //custom code start
    if (window.location.href) {
        if (window.location.href.includes('bootstrap5')) {
            document.getElementById('change_icons').href = '../../src/diagram/styles/Diagram_Builder_EJ2_Icon/Font/Bootstrap5_Diagram_Builder/style.css';
        }
        else if (window.location.href.includes('bootstrap4')) {
            document.getElementById('change_icons').href = '../../src/diagram/styles/Diagram_Builder_EJ2_Icon/Font/bootstrap4_Diagram_Builder/style.css';
        }
        else if (window.location.href.includes('bootstrap')) {
            document.getElementById('change_icons').href = '../../src/diagram/styles/Diagram_Builder_EJ2_Icon/Font/Bootstrap_Diagram_Builder/style.css';
        }
        else if (window.location.href.includes('material3')) {
            document.getElementById('change_icons').href = '../../src/diagram/styles/Diagram_Builder_EJ2_Icon/Font/Material3_Diagram_Builder/style.css';
        }
        else if (window.location.href.includes('material')) {
            document.getElementById('change_icons').href = '../../src/diagram/styles/Diagram_Builder_EJ2_Icon/Font/Material_Diagram_Builder/style.css';
        }
        else if (window.location.href.includes('fabric')) {
            document.getElementById('change_icons').href = '../../src/diagram/styles/Diagram_Builder_EJ2_Icon/Font/fabric_Diagram_Builder/style.css';
        }
        else if (window.location.href.includes('fluent')) {
            document.getElementById('change_icons').href = '../../src/diagram/styles/Diagram_Builder_EJ2_Icon/Font/Fluent_Diagram_Builder/style.css';
        }
        else if (window.location.href.includes('tailwind')) {
            document.getElementById('change_icons').href = '../../src/diagram/styles/Diagram_Builder_EJ2_Icon/Font/Tailwind_Diagram_Builder/style.css';
        }
        else if (window.location.href.includes('highcontrast')) {
            document.getElementById('change_icons').href = '../../src/diagram/styles/Diagram_Builder_EJ2_Icon/Font/HighContrast_Diagram_Builder/style.css';
        }
        else if (window.location.href.includes('fusion')) {
            document.getElementById('change_icons').href = '../../src/diagram/styles/Diagram_Builder_EJ2_Icon/Font/Fusion_Diagram_Builder/style.css';
        }
    }
    //custom code end

    //Initialize the diagram control.
    var diagram = new ej.diagrams.Diagram({
        width: '100%', height: '800px',
        nodes: nodes,
        //Defines the default node properties
        getNodeDefaults: function (obj, diagram) {
            return obj;
        },
        rulerSettings: { showRulers: true },
        selectionChange: selectionChange,
        historyChange: historyChange,
    });
    diagram.appendTo('#diagram');

    //Handle selection change in the diagram.
    function selectionChange(args) {
        if (args.state === 'Changed') {
            if (args.type === 'Addition') {
                if (args.newValue.length > 0) {
                    onClickDisable(false, args.newValue);
                }
            } else {
                onClickDisable(true, args.newValue);
            }
        }
    }

    // Handle history change in the diagram.
    function historyChange() {
        const undoItem = toolbarObj.items.find(item => item.id === 'undo');
        if (undoItem) {
            undoItem.disabled = diagram.historyManager.undoStack.length > 0 ? false : true;
        }
        const redoItem = toolbarObj.items.find(item => item.id === 'redo');
        if (redoItem) {
            redoItem.disabled = diagram.historyManager.redoStack.length > 0 ? false : true;
        }
    }

    // Enable or disable toolbar items based on selection state.
    function onClickDisable(args, selectedItems) {
        if (args === false) {
            const itemIds = ['cut', 'copy', 'transform_right', 'transform_left'];
            itemIds.forEach(itemId => {
                const item = toolbarObj.items.find(item => item.id === itemId);
                if (item) {
                    item.disabled = false;
                }
            });
            if (selectedItems.length === 1) {
                var index = toolbarObj.items.findIndex(item => item.id === 'flip_vertical');
                if (index !== -1) {
                    toolbarObj.items[index].disabled = selectedItems[0].id === "RightTriangle" ? false : true;
                }
                index = toolbarObj.items.findIndex(item => item.id === 'flip_horizontal');
                if (index !== -1) {
                    toolbarObj.items[index].disabled = selectedItems[0].id === "RightTriangle" ? false : true;
                }
                disableCommonItems(true);
            } else if (selectedItems.length > 1) {
                disableCommonItems(false);
            }
        } else {
            const itemIds = ['cut', 'copy', 'align_right', 'transform_right', 'transform_left', 'flip_vertical', 'flip_horizontal'];
            itemIds.forEach(itemId => {
                const item = toolbarObj.items.find(item => item.id === itemId);
                if (item) {
                    item.disabled = true;
                }
            });
            disableCommonItems(true);
        }
    }

    // Disable all common toolbar items.
    function disableCommonItems(args) {
        const itemIds = ['align_left', 'align_center', 'align_right', 'align_top', 'align_middle', 'align_bottom', 'distribute_horizontal', 'distribute_vertical', 'same_width', 'same_height', 'same_size'];
        itemIds.forEach(itemId => {
            const item = toolbarObj.items.find(item => item.id === itemId);
            if (item) {
                item.disabled = args;
            }
        });
    }

    // Initialize the Toolbar control.
    var toolbarObj = new ej.navigations.Toolbar({
        clicked: onItemClick,
        items: [
            { prefixIcon: 'e-icons e-cut', tooltipText: 'Cut', disabled: true, id: 'cut' },
            { prefixIcon: 'e-icons e-copy', tooltipText: 'Copy', disabled: true, id: 'copy' },
            { prefixIcon: 'e-icons e-paste', tooltipText: 'Paste', disabled: true, id: 'paste' },
            { prefixIcon: 'e-icons e-undo', tooltipText: 'Undo', disabled: true, id: 'undo' },
            { prefixIcon: 'e-icons e-redo', tooltipText: 'Redo', disabled: true, id: 'redo' },

            { type: 'Separator', id: 'seperator1' },

            { prefixIcon: 'sf-icon-align-left-1', tooltipText: 'Align Left', disabled: true, id: 'align_left' },
            { prefixIcon: 'sf-icon-align-center-1', tooltipText: 'Align Center', disabled: true, id: 'align_center' },
            { prefixIcon: 'sf-icon-align-right-1', tooltipText: 'Align Right', disabled: true, id: 'align_right' },
            { prefixIcon: 'sf-icon-align-top-1', tooltipText: 'Align Top', disabled: true, id: 'align_top' },
            { prefixIcon: 'sf-icon-align-middle-1', tooltipText: 'Align Middle', disabled: true, id: 'align_middle' },
            { prefixIcon: 'sf-icon-align-bottom-1', tooltipText: 'Align Bottom', disabled: true, id: 'align_bottom' },

            { type: 'Separator', id: 'seperator2' },

            { prefixIcon: 'e-icons e-transform-right', tooltipText: 'Rotate Right', disabled: true, id: 'transform_right' },
            { prefixIcon: 'e-icons e-transform-left', tooltipText: 'Rotate Left', disabled: true, id: 'transform_left' },

            { type: 'Separator', id: 'seperator3' },

            { prefixIcon: 'e-icons e-flip-vertical', tooltipText: 'Flip Vertical', disabled: true, id: 'flip_vertical' },
            { prefixIcon: 'e-icons e-flip-horizontal', tooltipText: 'Flip Horizontal', disabled: true, id: 'flip_horizontal' },

            { type: 'Separator', id: 'seperator4' },

            { prefixIcon: 'sf-icon-distribute-horizontal', tooltipText: 'Distribute Objects Horizontally', disabled: true, id: 'distribute_horizontal' },
            { prefixIcon: 'sf-icon-distribute-vertical', tooltipText: 'Distribute Objects Vertically', disabled: true, id: 'distribute_vertical' },

            { type: 'Separator', id: 'seperator5' },

            { prefixIcon: 'sf-icon-same-width', tooltipText: 'Same Width', disabled: true, id: 'same_width' },
            { prefixIcon: 'sf-icon-same-height', tooltipText: 'Same Height', disabled: true, id: 'same_height' },
            { prefixIcon: 'sf-icon-same-size', tooltipText: 'Same Size', disabled: true, id: 'same_size' }
        ]
    });

    toolbarObj.appendTo('#toolbar');

    // Handle toolbar item click events.
    function onItemClick(args) {
        var item = args.item.tooltipText;
        var index = toolbarObj.items.findIndex(item => item.id === 'paste');
        switch (args.item.tooltipText) {
            case 'Copy':
                diagram.copy();
                if (index !== -1) {
                    toolbarObj.items[index].disabled = false;
                }
                break;
            case 'Cut':
                diagram.cut();
                if (index !== -1) {
                    toolbarObj.items[index].disabled = false;
                }
                break;
            case 'Paste':
                diagram.paste();
                break;
            case 'Undo':
                diagram.undo();
                break;
            case 'Redo':
                diagram.redo();
                break;
            case 'Align Left':
            case 'Align Right':
            case 'Align Top':
            case 'Align Bottom':
            case 'Align Middle':
            case 'Align Center':
                var alignType = item.replace('Align', '');
                var alignType1 = alignType.charAt(0).toUpperCase() + alignType.slice(1);
                diagram.align(alignType1.trim());
                break;
            case 'Rotate Right':
                diagram.rotate(diagram.selectedItems, 90);
                break;
            case 'Rotate Left':
                diagram.rotate(diagram.selectedItems, -90);
                break;
            case 'Flip Vertical':
                flipObjects(item);
                break;
            case 'Flip Horizontal':
                flipObjects(item);
                break;
            case 'Distribute Objects Horizontally':
                diagram.distribute('RightToLeft');
                break;
            case 'Distribute Objects Vertically':
                diagram.distribute('BottomToTop');
                break;
            case 'Same Width':
                diagram.sameSize('Width', diagram.selectedItems.nodes);
                break;
            case 'Same Height':
                diagram.sameSize('Height', diagram.selectedItems.nodes);
                break;
            case 'Same Size':
                diagram.sameSize('Size', diagram.selectedItems.nodes);
                break;
        }
    }

    // Flip selected objects.
    function flipObjects(flipType) {
        var selectedObjects = diagram.selectedItems.nodes.concat(diagram.selectedItems.connectors);
        for (i = 0; i < selectedObjects.length; i++) {
            selectedObjects[i].flip ^= flipType === 'Flip Horizontal' ? ej.diagrams.FlipDirection.Horizontal : ej.diagrams.FlipDirection.Vertical;
        }
        diagram.dataBind();
    }

};
