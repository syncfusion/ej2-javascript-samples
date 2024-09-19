this.default = function () {
    /**
     * Text to Flowchart AI Sample
     */
    ej.diagrams.Diagram.Inject(ej.diagrams.UndoRedo, ej.diagrams.DataBinding, ej.diagrams.PrintAndExport);
    const flowChartData = [
        { id: "A", name: "Start", shape: "Terminator", color: "#90EE90", parentId: null, stroke: "#333", strokeWidth: 2 },
        { id: "B", name: "Open the browser and go to Amazon site", shape: "Rectangle", color: "#1759B7", parentId: ["A"], arrowType: "single-line-arrow", stroke: "#333", strokeWidth: 2 },
        { id: "C", name: "Already a customer?", shape: "Decision", color: "#2F95D8", parentId: ["B"], arrowType: "single-line-arrow", stroke: "#333", strokeWidth: 2 },
        { id: "D", name: "Create an account", shape: "Rectangle", color: "#70AF16", parentId: ["C"], label: ["No"], arrowType: "single-line-arrow", stroke: "#333", strokeWidth: 2 },
        { id: "E", name: "Enter login information", shape: "Rectangle", color: "#70AF16", parentId: ["C"], label: ["Yes"], arrowType: "single-line-arrow", stroke: "#333", strokeWidth: 2 },
        { id: "F", name: "Search for the book in the search bar", shape: "Predefined Process", color: "#1759B7", parentId: ["E", "D"], arrowType: "single-line-arrow", label: ["", ""], stroke: "#333", strokeWidth: 2 },
        { id: "G", name: "Select the preferred book", shape: "Rectangle", color: "#1759B7", parentId: ["F"], arrowType: "single-line-arrow", stroke: "#333", strokeWidth: 2 },
        { id: "H", name: "Is the book new or used?", shape: "Rectangle", color: "#2F95D8", parentId: ["G"], arrowType: "single-line-arrow", stroke: "#333", strokeWidth: 2 },
        { id: "I", name: "Select the new book", shape: "Rectangle", color: "#70AF16", parentId: ["H"], label: ["Yes"], arrowType: "single-line-arrow", stroke: "#333", strokeWidth: 2 },
        { id: "J", name: "Select the used book", shape: "Rectangle", color: "#70AF16", parentId: ["H"], label: ["No"], arrowType: "single-line-arrow", stroke: "#333", strokeWidth: 2 },
        { id: "K", name: "Add to Cart & Proceed to Checkout", shape: "Rectangle", color: "#1759B7", parentId: ["I", "J"], arrowType: "single-line-arrow", label: ["", ""], stroke: "#333", strokeWidth: 2 },
        { id: "L", name: "Enter shipping and payment details", shape: "Rectangle", color: "#1759B7", parentId: ["K", "M"], arrowType: "single-line-arrow", label: ["", ""], stroke: "#333", strokeWidth: 2 },
        { id: "M", name: "Is the information correct?", shape: "Decision", color: "#2F95D8", parentId: ["L"], arrowType: "single-line-arrow", stroke: "#333", strokeWidth: 2 },
        { id: "N", name: "Review and place the order", shape: "Rectangle", color: "#1759B7", parentId: ["M"], label: ["True"], arrowType: "single-line-arrow", stroke: "#333", strokeWidth: 2 },
        { id: "O", name: "End", shape: "Terminator", color: "#8E44CC", parentId: ["N"], arrowType: "single-line-arrow", stroke: "#333", strokeWidth: 2 }
    ];
    //Sets the default values of a connector
    function getConnectorDefaults(obj) {
        obj.type = 'Orthogonal';
        return obj;
    }
    //Sets the Node style for DragEnter element.
    function dragEnter(args) {
        let obj = args.element;
        if (obj instanceof ej.diagrams.Node) {
            let oWidth = obj.width;
            let oHeight = obj.height;
            let ratio = 100 / obj.width;
            obj.width = 100;
            obj.height *= ratio;
            obj.offsetX += (obj.width - oWidth) / 2;
            obj.offsetY += (obj.height - oHeight) / 2;
            obj.style = { fill: '#357BD2', strokeColor: 'white' };
        }
    }
    function getFlowShape(id, shapeType) {
        let flowshape = { id: id, shape: { type: 'Flow', shape: shapeType } };
        return flowshape;
    }
    function getSymbolDefaults(symbol) {
        symbol.style = { strokeColor: '#757575' };
        if (symbol.id === 'Terminator' || symbol.id === 'Process' || symbol.id === 'Delay') {
            symbol.width = 80;
            symbol.height = 40;
        } else if (symbol.id === 'Decision' || symbol.id === 'Document' || symbol.id === 'PreDefinedProcess' ||
            symbol.id === 'PaperTap' || symbol.id === 'DirectData' || symbol.id === 'MultiDocument' || symbol.id === 'Data') {
            symbol.width = 50;
            symbol.height = 40;
        } else {
            symbol.width = 50;
            symbol.height = 50;
        }
    }
    function getSymbolInfo(symbol) {
        return { fit: true };
    }
    let bounds = {
        x: 240,
        y: 122,
        width: 719,
        height: 700,
        top: 122,
        right: 959,
        bottom: 822,
        left: 240
    }
    let centerX = bounds.width / 2;
    let interval = [
        1, 9, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75
    ];

    let gridlines = { lineColor: '#e0e0e0', lineIntervals: interval };

    let rotateItems = [
        { iconCss: 'e-icons e-transform-right', text: 'Rotate Clockwise' },
        { iconCss: 'e-icons e-transform-left', text: 'Rotate Counter-Clockwise' }
    ];
    let flipItems = [
        { iconCss: 'e-icons e-flip-horizontal', text: 'Flip Horizontal' },
        { iconCss: 'e-icons e-flip-vertical', text: 'Flip Vertical' }
    ];
    let alignItems = [
        {
            iconCss: 'sf-icon-align-left-1', text: 'Align Left',
        },
        {
            iconCss: 'sf-icon-align-center-1', text: 'Align Center',
        },
        {
            iconCss: 'sf-icon-align-right-1', text: 'Align Right',
        },
        {
            iconCss: 'sf-icon-align-top-1', text: 'Align Top',
        },
        {
            iconCss: 'sf-icon-align-middle-1', text: 'Align Middle',
        },
        {
            iconCss: 'sf-icon-align-bottom-1', text: 'Align Bottom',
        },
    ];
    let distributeItems = [
        { iconCss: 'sf-icon-distribute-vertical', text: 'Distribute Objects Vertically', },
        { iconCss: 'sf-icon-distribute-horizontal', text: 'Distribute Objects Horizontally', },
    ];
    let orderItems = [
        { iconCss: 'e-icons e-bring-forward', text: 'Bring Forward' },
        { iconCss: 'e-icons e-bring-to-front', text: 'Bring To Front' },
        { iconCss: 'e-icons e-send-backward', text: 'Send Backward' },
        { iconCss: 'e-icons e-send-to-back', text: 'Send To Back' }
    ];
    let zoomMenuItems = [
        { text: 'Zoom In' }, { text: 'Zoom Out' }, { text: 'Zoom to Fit' }, { text: 'Zoom to 50%' },
        { text: 'Zoom to 100%' }, { text: 'Zoom to 200%' },
    ];
    let conTypeItems = [
        { text: 'Straight', iconCss: 'e-icons e-line' },
        { text: 'Orthogonal', iconCss: 'sf-icon-orthogonal' },
        { text: 'Bezier', iconCss: 'sf-icon-bezier' }
    ];
    let shapesItems = [
        { text: 'Rectangle', iconCss: 'e-rectangle e-icons' },
        { text: 'Ellipse', iconCss: ' e-circle e-icons' },
        { text: 'Polygon', iconCss: 'e-line e-icons' }
    ];
    let exportItems = [
        { text: 'JPG' }, { text: 'PNG' }, { text: 'SVG' }
    ];
    let groupItems = [
        { text: 'Group', iconCss: 'e-icons e-group-1' }, { text: 'Ungroup', iconCss: 'e-icons e-ungroup-1' }
    ];
    let diagram;
    //Initializes diagram control
    diagram = new ej.diagrams.Diagram({
        width: '100%', height: '900px',
        // nodes: nodes, connectors: connectors,
        drawingObject: {},
        selectionChange: selectionChange,
        historyChange: historyChange,
        tool: ej.diagrams.DiagramTools.Default,
        snapSettings: { horizontalGridlines: gridlines, verticalGridlines: gridlines },
        scrollSettings: { scrollLimit: 'Infinity' },
        layout: {
            type: 'FlowChart',
            orientation: 'TopToBottom',
            flowChartSettings: {
                yesBranchDirection: 'LeftInFlow',
                noBranchDirection: 'RightInFlow',
                yesBranchValues: ['Yes', 'True'],
                noBranchValues: ['No', 'False']
            },
            verticalSpacing: 50,
            horizontalSpacing: 50
        },
        dataSourceSettings: {
            id: 'id',
            parentId: 'parentId',
            dataManager: new ej.data.DataManager(flowChartData)
        },
        scrollChange: function (args) {
            if (args.panState !== 'Start') {
                let zoomCurrentValue = (document.getElementById("btnZoomIncrement")).ej2_instances[0];
                zoomCurrentValue.content = Math.round(diagram.scrollSettings.currentZoom * 100) + ' %';
            }
        },
        //Sets the default values of a node
        getNodeDefaults: getNodeDefaults,
        //Sets the default values of a connector
        getConnectorDefaults: getConnectorDefaults,
        //Sets the Node style for DragEnter element.
        dragEnter: dragEnter,
    });
    diagram.appendTo('#diagram');

    if (diagram.element) {
        //Button
        let button = new ej.buttons.Fab({ isPrimary: true, content: 'AI Assist', iconCss: 'e-icons e-aiassist-chat' });
        button.appendTo('#ai-assist');

        //Initialize Toolbar component
        let toolbarObj = new ej.navigations.Toolbar({
            clicked: function (args) { toolbarClick(args); },
            created: function () {
                if (diagram !== undefined) {
                    let conTypeBtn = new ej.splitbuttons.DropDownButton({
                        items: conTypeItems, iconCss: 'e-ddb-icons e-connector e-icons',
                        select: function (args) { onConnectorSelect(args); }
                    });
                    conTypeBtn.appendTo('#conTypeBtn');
                    let btnZoomIncrement = new ej.splitbuttons.DropDownButton({
                        items: zoomMenuItems, content: Math.round(diagram.scrollSettings.currentZoom * 100) + ' %', select: zoomChange,
                    });
                    btnZoomIncrement.appendTo('#btnZoomIncrement');
                    let shapesBtn = new ej.splitbuttons.DropDownButton({
                        items: shapesItems, iconCss: 'e-shapes e-icons',
                        select: function (args) { onShapesSelect(args); }
                    });
                    shapesBtn.appendTo('#shapesBtn');
                    let exportBtn = new ej.splitbuttons.DropDownButton({
                        items: exportItems, iconCss: 'e-ddb-icons e-export', select: function (args) { onselectExport(args); },
                    });
                    exportBtn.appendTo('#exportBtn');

                    let groupBtn = new ej.splitbuttons.DropDownButton({
                        items: groupItems, iconCss: 'e-icons e-group-1', select: function (args) { onSelectGroup(args); }
                    });
                    groupBtn.appendTo('#groupBtn');
                    let alignBtn = new ej.splitbuttons.DropDownButton({
                        items: alignItems, iconCss: 'sf-icon-align-center-1', select: function (args) { onSelectAlignObjects(args); }
                    });
                    alignBtn.appendTo('#alignBtn');

                    let distributeBtn = new ej.splitbuttons.DropDownButton({
                        items: distributeItems, iconCss: 'sf-icon-distribute-vertical', select: function (args) { onSelectDistributeObjects(args); }
                    });
                    distributeBtn.appendTo('#distributeBtn');
                    let orderBtn = new ej.splitbuttons.DropDownButton({
                        items: orderItems, iconCss: 'e-icons e-order', select: function (args) { onSelectOrder(args); }
                    });
                    orderBtn.appendTo('#orderBtn');
                    let rotateBtn = new ej.splitbuttons.DropDownButton({
                        items: rotateItems, iconCss: 'e-icons e-repeat', select: function (args) { onSelectRotate(args); }
                    });
                    rotateBtn.appendTo('#rotateBtn');
                    let flipBtn = new ej.splitbuttons.DropDownButton({
                        items: flipItems, iconCss: 'e-icons e-flip-horizontal', select: function (args) { onSelectFlip(args); }
                    });
                    flipBtn.appendTo('#flipBtn');
                    refreshOverflow();
                }

            },
            items: toolbarItems(),
            overflowMode: 'Scrollable',
            width: '100%',
            height: 40
        });

        toolbarObj.appendTo('#toolbarEditor');

        function refreshOverflow() {
            setTimeout(() => {
                toolbarObj.refreshOverflow();

            }, 100);
        }

        function toolbarItems() {
            let items = [
                { prefixIcon: 'e-icons e-circle-add', tooltipText: 'New Diagram' },
                { prefixIcon: 'e-icons e-folder-open', tooltipText: 'Open Diagram', },
                { prefixIcon: 'e-icons e-save', tooltipText: 'Save Diagram' },
                { prefixIcon: 'e-print e-icons', tooltipText: 'Print Diagram' },
                { type: 'Input', tooltipText: 'Export Diagram', template: '<button id="exportBtn" style="width:100%;"></button>' },
                { type: 'Separator' },
                { disabled: true, prefixIcon: 'e-cut e-icons', tooltipText: 'Cut', cssClass: 'tb-item-middle tb-item-lock-category' },
                { disabled: true, prefixIcon: 'e-copy e-icons', tooltipText: 'Copy', cssClass: 'tb-item-middle tb-item-lock-category' },
                { prefixIcon: 'e-icons e-paste', tooltipText: 'Paste', disabled: true },
                { type: 'Separator' },
                { disabled: true, prefixIcon: 'e-icons e-undo tb-icons', tooltipText: 'Undo', cssClass: 'tb-item-start tb-item-undo' },
                { disabled: true, prefixIcon: 'e-icons e-redo tb-icons', tooltipText: 'Redo', cssClass: 'tb-item-end tb-item-redo' },
                { type: 'Separator', },
                { prefixIcon: 'e-pan e-icons', tooltipText: 'Pan Tool', cssClass: 'tb-item-start pan-item' },
                { prefixIcon: 'e-mouse-pointer e-icons', tooltipText: 'Select Tool', cssClass: 'tb-item-middle tb-item-selected' },
                { tooltipText: 'Draw Connectors', template: '<button id="conTypeBtn" style="width:100%;"></button>', cssClass: 'tb-item-middle' },
                { tooltipText: 'Draw Shapes', template: '<button id="shapesBtn" style="width:100%;"></button>', cssClass: 'tb-item-middle' },
                { prefixIcon: 'e-caption e-icons', tooltipText: 'Text Tool', cssClass: 'tb-item-end' },
                { type: 'Separator', },
                { disabled: true, prefixIcon: 'e-icons e-lock', tooltipText: 'Lock', cssClass: 'tb-item-middle tb-item-lock-category' },
                { disabled: true, prefixIcon: 'e-trash e-icons', tooltipText: 'Delete', cssClass: 'tb-item-middle tb-item-lock-category' },
                { type: 'Separator', align: 'Center' },

                { disabled: true, type: 'Input', tooltipText: 'Align Objects', template: '<button id="alignBtn" style="width:100%;"></button>', cssClass: 'tb-item-middle  tb-item-align-category' },
                { disabled: true, type: 'Input', tooltipText: 'Distribute Objects', template: '<button id="distributeBtn" style="width:100%;"></button>', cssClass: 'tb-item-middle tb-item-space-category' },
                { type: 'Separator', },
                { disabled: true, type: 'Input', tooltipText: 'Order Commands', template: '<button id="orderBtn" style="width:100%;"></button>', cssClass: 'tb-item-middle tb-item-lock-category' },
                { type: 'Separator' },
                { disabled: true, type: 'Input', tooltipText: 'Group/Ungroup', template: '<button id="groupBtn" style="width:100%;"></button>', cssClass: 'tb-item-middle tb-item-align-category' },
                { type: 'Separator' },
                { disabled: true, type: 'Input', tooltipText: 'Rotate', template: '<button id="rotateBtn" style="width:100%;"></button>', cssClass: 'tb-item-middle tb-item-lock-category' },
                { type: 'Separator' },
                { disabled: true, type: 'Input', tooltipText: 'Flip', template: '<button id="flipBtn" style="width:100%;"></button>', cssClass: 'tb-item-middle tb-item-lock-category' },
                { type: 'Separator' },
                {
                    cssClass: 'tb-item-end tb-zoom-dropdown-btn', template: '<button id="btnZoomIncrement"></button>',
                },
            ];
            return items;
        }

        function selectionChange(args) {
            if (args.state === 'Changed') {
                let selectedItems = diagram.selectedItems.nodes;
                selectedItems = selectedItems.concat(
                    (diagram.selectedItems).connectors
                );
                if (selectedItems.length === 0) {
                    toolbarObj.items[6].disabled = true;
                    toolbarObj.items[7].disabled = true;
                    toolbarObj.items[19].disabled = true;
                    toolbarObj.items[20].disabled = true;
                    toolbarObj.items[25].disabled = true;
                    toolbarObj.items[29].disabled = true;
                    toolbarObj.items[31].disabled = true;
                    disableMultiselectedItems();
                }
                if (selectedItems.length === 1) {
                    enableItems();
                    disableMultiselectedItems();

                    if (
                        selectedItems[0].children !== undefined &&
                        selectedItems[0].children.length > 0
                    ) {
                        toolbarObj.items[27].disabled = false;
                    } else {
                        toolbarObj.items[27].disabled = true;
                    }
                }

                if (selectedItems.length > 1) {
                    enableItems();
                    toolbarObj.items[22].disabled = false;
                    toolbarObj.items[23].disabled = false;
                    toolbarObj.items[27].disabled = false;
                    if (selectedItems.length > 2) {
                        toolbarObj.items[23].disabled = false;
                    } else {
                        toolbarObj.items[23].disabled = true;
                    }
                }
            }
        }

        function historyChange() {
            if (diagram.historyManager.undoStack.length > 0) {
                toolbarObj.items[10].disabled = false;
            } else {
                toolbarObj.items[10].disabled = true;
            }
            if (diagram.historyManager.redoStack.length > 0) {
                toolbarObj.items[11].disabled = false;
            } else {
                toolbarObj.items[11].disabled = true;
            }
        }
        //Sets the default values of a node
        function getNodeDefaults(node) {
            if (node.width === undefined) {
                node.width = 145;
            } if ((node.shape).type === 'Flow' && (node.shape).shape === 'Decision') {
                node.height = 80;
            }
            return node;
        }
        let uploadObject = new ej.inputs.Uploader({
            asyncSettings: {
                saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
                removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
            }, success: onUploadSuccess, showFileList: false
        });
        uploadObject.appendTo('#fileupload');
        function printDiagram() {
            let options = {};
            options.mode = 'Download';
            options.region = 'Content';
            options.multiplePage = diagram.pageSettings.multiplePage;
            options.pageHeight = diagram.pageSettings.height;
            options.pageWidth = diagram.pageSettings.width;
            diagram.print(options);
        }
        function enableItems() {
            toolbarObj.items[6].disabled = false;
            toolbarObj.items[7].disabled = false;
            toolbarObj.items[19].disabled = false;
            toolbarObj.items[20].disabled = false;
            toolbarObj.items[25].disabled = false;
            toolbarObj.items[29].disabled = false;
            toolbarObj.items[31].disabled = false;
        }
        function disableMultiselectedItems() {
            toolbarObj.items[22].disabled = true;
            toolbarObj.items[23].disabled = true;
            toolbarObj.items[27].disabled = true;
        }
        function toolbarClick(args) {
            let item = args.item.tooltipText;
            switch (item) {
                case 'Undo':
                    diagram.undo();
                    break;
                case 'Redo':
                    diagram.redo();
                    break;
                case 'Lock':
                    lockObject();
                    break;
                case 'Cut':
                    diagram.cut();
                    toolbarObj.items[8].disabled = false;
                    break;
                case 'Copy':
                    diagram.copy();
                    toolbarObj.items[8].disabled = false;
                    break;
                case 'Paste':
                    diagram.paste();
                    break;
                case 'Delete':
                    diagram.remove();
                    break;
                case 'Select Tool':
                    diagram.clearSelection();
                    diagram.tool = ej.diagrams.DiagramTools.Default;
                    break;
                case 'Text Tool':
                    diagram.clearSelection();
                    diagram.selectedItems.userHandles = [];
                    diagram.drawingObject = { shape: { type: 'Text' } };
                    diagram.tool = ej.diagrams.DiagramTools.ContinuousDraw;
                    break;
                case 'Pan Tool':
                    diagram.clearSelection();
                    diagram.tool = ej.diagrams.DiagramTools.ZoomPan;
                    break;
                case 'New Diagram':
                    diagram.clear();
                    historyChange();
                    break;
                case 'Print Diagram':
                    printDiagram();
                    break;
                case 'Save Diagram':
                    download(diagram.saveDiagram());
                    break;
                case 'Open Diagram':
                    (document.getElementsByClassName('e-file-select-wrap'))[0]
                        .querySelector('button')
                        .click();
                    break;
            }
            diagram.dataBind();
        }
        function zoomChange(args) {
            let zoomCurrentValue = (document.getElementById("btnZoomIncrement")).ej2_instances[0];
            let currentZoom = diagram.scrollSettings.currentZoom;
            let zoom = {};
            switch (args.item.text) {
                case 'Zoom In':
                    diagram.zoomTo({ type: 'ZoomIn', zoomFactor: 0.2 });
                    zoomCurrentValue.content = (diagram.scrollSettings.currentZoom * 100).toFixed() + '%';
                    break;
                case 'Zoom Out':
                    diagram.zoomTo({ type: 'ZoomOut', zoomFactor: 0.2 });
                    zoomCurrentValue.content = (diagram.scrollSettings.currentZoom * 100).toFixed() + '%';
                    break;
                case 'Zoom to Fit':
                    zoom.zoomFactor = 1 / currentZoom - 1;
                    diagram.zoomTo(zoom);
                    zoomCurrentValue.content = diagram.scrollSettings.currentZoom;
                    break;
                case 'Zoom to 50%':
                    if (currentZoom === 0.5) {
                        currentZoom = 0;
                        zoom.zoomFactor = (0.5 / currentZoom) - 1;
                        diagram.zoomTo(zoom);
                    }
                    else {
                        zoom.zoomFactor = (0.5 / currentZoom) - 1;
                        diagram.zoomTo(zoom);
                    }
                    break;
                case 'Zoom to 100%':
                    if (currentZoom === 1) {
                        currentZoom = 0;
                        zoom.zoomFactor = (1 / currentZoom) - 1;
                        diagram.zoomTo(zoom);
                    }
                    else {
                        zoom.zoomFactor = (1 / currentZoom) - 1;
                        diagram.zoomTo(zoom);
                    }
                    break;
                case 'Zoom to 200%':
                    if (currentZoom === 2) {
                        currentZoom = 0;
                        zoom.zoomFactor = (2 / currentZoom) - 1;
                        diagram.zoomTo(zoom);
                    }
                    else {
                        zoom.zoomFactor = (2 / currentZoom) - 1;
                        diagram.zoomTo(zoom);
                    }
                    break;
            }

            zoomCurrentValue.content = Math.round(diagram.scrollSettings.currentZoom * 100) + ' %';

        }
        function onConnectorSelect(args) {
            diagram.clearSelection();
            diagram.drawingObject = { type: args.item.text };
            diagram.tool = ej.diagrams.DiagramTools.ContinuousDraw;
            diagram.selectedItems.userHandles = [];
            diagram.dataBind();
        }

        function onShapesSelect(args) {
            diagram.clearSelection();
            diagram.drawingObject = { shape: { shape: args.item.text } };
            diagram.tool = ej.diagrams.DiagramTools.ContinuousDraw;
            diagram.selectedItems.userHandles = [];
            diagram.dataBind();
        }
        //Export the diagraming object based on the format.
        function onselectExport(args) {
            let exportOptions = {};
            exportOptions.format = args.item.text;
            exportOptions.mode = 'Download';
            exportOptions.region = 'PageSettings';
            exportOptions.fileName = 'Export';
            exportOptions.margin = { left: 0, top: 0, bottom: 0, right: 0 };
            diagram.exportDiagram(exportOptions);
        }

        function onSelectGroup(args) {
            if (args.item.text === 'Group') {
                diagram.group();
            }
            else if (args.item.text === 'Ungroup') {
                diagram.unGroup();
            }
        }

        function onSelectAlignObjects(args) {
            let item = args.item.text;
            let alignType = item.replace('Align', '');
            let alignType1 = alignType.charAt(0).toUpperCase() + alignType.slice(1);
            diagram.align(alignType1.trim());
        }
        function onSelectDistributeObjects(args) {
            if (args.item.text === 'Distribute Objects Vertically') {
                diagram.distribute('BottomToTop');
            }
            else {
                diagram.distribute('RightToLeft');
            }
        }
        function onSelectOrder(args) {
            switch (args.item.text) {
                case 'Bring Forward':
                    diagram.moveForward();
                    break;
                case 'Bring To Front':
                    diagram.bringToFront();
                    break;
                case 'Send Backward':
                    diagram.sendBackward();
                    break;
                case 'Send To Back':
                    diagram.sendToBack();
                    break;
            }
        }

        function onSelectRotate(args) {
            if (args.item.text === 'Rotate Clockwise') {
                diagram.rotate(diagram.selectedItems, 90);
            }
            else {
                diagram.rotate(diagram.selectedItems, -90);
            }
        }
        function onSelectFlip(args) {
            flipObjects(args.item.text);
        }

        // To flip diagram objects
        function flipObjects(flipType) {
            let selectedObjects = diagram.selectedItems.nodes.concat((diagram.selectedItems).connectors);
            for (let i = 0; i < selectedObjects.length; i++) {
                selectedObjects[i].flip = flipType === 'Flip Horizontal' ? 'Horizontal' : 'Vertical';
            }
            diagram.dataBind();
        }
        function onUploadSuccess(args) {
            let file = args.file;
            let rawFile = file.rawFile;
            let reader = new FileReader();
            reader.readAsText(rawFile);
            reader.onloadend = loadDiagram;
        }
        function loadDiagram(event) {
            diagram.loadDiagram(event.target.result);
        }


        function download(data) {
            if ((window.navigator).msSaveBlob) {
                let blob = new Blob([data], { type: 'data:text/json;charset=utf-8,' });
                (window.navigator).msSaveOrOpenBlob(blob, 'Diagram.json');
            }
            else {
                let dataString = 'data:text/json;charset=utf-8,' + encodeURIComponent(data);
                let ele = document.createElement('a');
                ele.href = dataString;
                ele.download = 'Diagram.json';
                document.body.appendChild(ele);
                ele.click();
                ele.remove();
            }
        }

        // To lock diagram object
        function lockObject() {
            for (let i = 0; i < diagram.selectedItems.nodes.length; i++) {
                let node = diagram.selectedItems.nodes[i];
                if (node.constraints & ej.diagrams.NodeConstraints.Drag) {
                    node.constraints = ej.diagrams.NodeConstraints.PointerEvents | ej.diagrams.NodeConstraints.Select;
                } else {
                    node.constraints = ej.diagrams.NodeConstraints.Default;
                }
            }
            for (let j = 0; j < diagram.selectedItems.connectors.length; j++) {
                let connector = diagram.selectedItems.connectors[j];
                if (connector.constraints & ej.diagrams.ConnectorConstraints.Drag) {
                    connector.constraints = ej.diagrams.ConnectorConstraints.PointerEvents | ej.diagrams.ConnectorConstraints.Select;
                } else {
                    connector.constraints = ej.diagrams.ConnectorConstraints.Default;
                }
            }
            diagram.dataBind();
        }


        //Initialize the flowshapes for the symbol palatte
        let flowShapes = [
            getFlowShape('Terminator', 'Terminator'),
            getFlowShape('Process', 'Process'),
            getFlowShape('Decision', 'Decision'),
            getFlowShape('Document', 'Document'),
            getFlowShape('PreDefinedProcess', 'PreDefinedProcess'),
            getFlowShape('PaperTap', 'PaperTap'),
            getFlowShape('DirectData', 'DirectData'),
            getFlowShape('SequentialData', 'SequentialData'),
            getFlowShape('Sort', 'Sort'),
            getFlowShape('MultiDocument', 'MultiDocument'),
            getFlowShape('Collate', 'Collate'),
            getFlowShape('Or', 'Or'),
            getFlowShape('Extract', 'Extract'),
            getFlowShape('Merge', 'Merge'),
            getFlowShape('OffPageReference', 'OffPageReference'),
            getFlowShape('SequentialAccessStorage', 'SequentialAccessStorage'),
            getFlowShape('Annotation', 'Annotation'),
            getFlowShape('Annotation2', 'Annotation2'),
            getFlowShape('Data', 'Data'),
            getFlowShape('Card', 'Card'),
            getFlowShape('Delay', 'Delay'),
        ];

        //Initializes connector symbols for the symbol palette
        let connectorSymbols = [
            {
                id: 'Link1', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
                targetDecorator: { shape: 'Arrow', style: { strokeColor: '#757575', fill: '#757575' } },
                style: { strokeWidth: 1, strokeColor: '#757575' }
            },
            {
                id: 'link2', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
                style: { strokeWidth: 2, strokeColor: '#757575' }, targetDecorator: { shape: 'Arrow' }
            },
            {
                id: 'Link3', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
                targetDecorator: { shape: 'Arrow', style: { strokeColor: '#757575', fill: '#757575' } },
                style: { strokeWidth: 1, strokeDashArray: '5,2', strokeColor: '#757575' }
            },
            {
                id: 'Link4', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
                targetDecorator: { shape: 'None', style: { strokeColor: '#757575', fill: '#757575' } },
                style: { strokeWidth: 1, strokeDashArray: '5,2', strokeColor: '#757575' }
            },
        ];

        let palettes = [
            { id: 'flow', expanded: true, symbols: flowShapes, iconCss: 'e-ddb-icons e-flow', title: 'Flow Shapes' },
            { id: 'connectors', expanded: true, symbols: connectorSymbols, iconCss: 'e-ddb-icons e-connector', title: 'Connectors' }
        ];
        //Initializes the symbol palette

        let palette = new ej.diagrams.SymbolPalette({
            expandMode: 'Multiple', palettes: palettes,
            width: '100%', height: '900px', symbolHeight: 60, symbolWidth: 60,
            symbolMargin: { left: 15, right: 15, top: 15, bottom: 15 },
            getNodeDefaults: getSymbolDefaults, getSymbolInfo: getSymbolInfo
        });
        palette.appendTo('#symbolpalette');

        // Dialog

        let dialog = new ej.popups.Dialog({
            header: '<span class="e-icons e-aiassist-chat" style="color: black;width:20px; font-size: 16px;"></span> AI Assist',
            showCloseIcon: true,
            isModal: true,
            content: `<p style="margin-bottom: 10px;font-weight:bold;">Suggested Prompts</p>
      <button id="btn2" style="flex: 1; overflow: visible; border-radius: 8px;margin-bottom: 10px;">Flowchart for online shopping</button>
      <button id="btn1" style="flex: 1; overflow: visible; border-radius: 8px;margin-bottom: 10px;">Flowchart for Mobile banking registration</button>
      <button id="btn3" style="flex: 1; overflow: visible; border-radius: 8px;margin-bottom: 10px;">Flowchart for Bus ticket booking</button>
      <div style="display: flex; align-items: center; margin-top: 20px;">
      <input type="text" id="textBox" class="db-openai-textbox" style="flex: 1;" />
      <button id="db-send" style="margin-left: 2px; height: 32px; width: 32px;"></button>
      </div>
      `,
            target: document.getElementById('control-section'),
            width: '540px',
            visible: false,
            height: '310px',
        });
        dialog.appendTo('#dialog');
        let btn1 = new ej.buttons.Button();
        let btn2 = new ej.buttons.Button();
        let btn3 = new ej.buttons.Button();
        let sendButton = new ej.buttons.Button({ iconCss: 'e-icons e-send', isPrimary: true, disabled: true });
        btn1.appendTo('#btn1');
        btn2.appendTo('#btn2');
        btn3.appendTo('#btn3');
        sendButton.appendTo('#db-send');
        let textBox = new ej.inputs.TextBox({ placeholder: 'Please enter your prompt here...', width: 450, input: onTextBoxChange });
        textBox.appendTo('#textBox');
        let msgBtn1 = (document.getElementById('btn1'));
        let msgBtn2 = (document.getElementById('btn2'));
        let msgBtn3 = (document.getElementById('btn3'));
        (document.getElementById('ai-assist')).onclick = () => {
            dialog.show();
        }

        (document.getElementById('db-send')).onclick = () => {
            dialog.hide();
            convertTextToFlowChart(textBox.value)
        }

        function onTextBoxChange(args) {
            if (args.value !== '') {
                sendButton.disabled = false;
            } else {
                sendButton.disabled = true;
            }
        }

        msgBtn1.onclick = () => {
            dialog.hide();
            convertTextToFlowChart(msgBtn1.value);
        }
        msgBtn2.onclick = () => {
            dialog.hide();
            convertTextToFlowChart(msgBtn1.value);

        }
        msgBtn3.onclick = () => {
            dialog.hide();
            convertTextToFlowChart(msgBtn1.value);
        }


        async function convertTextToFlowChart(inputText) {
            showLoading();
            const options = {
                messages: [
                    {
                        role: 'system',
                        content: 'You are an assistant tasked with generating mermaid flow chart diagram data sources based on user queries'
                    },
                    {
                        role: 'user',
                        content: `
              Generate only the Mermaid flowchart code for the process titled "${inputText}".
              Use the format provided in the example below, but adjust the steps, conditions, and styles according to the new title:
              
              **Example Title:** Bus Ticket Booking
              
              **Example Steps and Mermaid Code:**
              
                  graph TD
                  A([Start]) --> B[Choose Destination]
                  B --> C{Already Registered?}
                  C -->|No| D[Sign Up]
                  D --> E[Enter Details]
                  E --> F[Search Buses]
                  C --> |Yes| F
                  F --> G{Buses Available?}
                  G -->|Yes| H[Select Bus]
                  H --> I[Enter Passenger Details]
                  I --> J[Make Payment]
                  J --> K[Booking Confirmed]
                  G -->|No| L[Set Reminder]
                  K --> M([End])
                  L --> M
                  style A fill:#90EE90,stroke:#333,stroke-width:2px;
                  style B fill:#4682B4,stroke:#333,stroke-width:2px;
                  style C fill:#32CD32,stroke:#333,stroke-width:2px;
                  style D fill:#FFD700,stroke:#333,stroke-width:2px;
                  style E fill:#4682B4,stroke:#333,stroke-width:2px;
                  style F fill:#4682B4,stroke:#333,stroke-width:2px;
                  style G fill:#32CD32,stroke:#333,stroke-width:2px;
                  style H fill:#4682B4,stroke:#333,stroke-width:2px;
                  style I fill:#4682B4,stroke:#333,stroke-width:2px;
                  style J fill:#4682B4,stroke:#333,stroke-width:2px;
                  style K fill:#FF6347,stroke:#333,stroke-width:2px;
                  style L fill:#FFD700,stroke:#333,stroke-width:2px;
                  style M fill:#FF6347,stroke:#333,stroke-width:2px;
              
              
              Note: Please ensure the generated code matches the title "${inputText}" and follows the format given above. Provide only the Mermaid flowchart code, without any additional explanations, comments, or text.
              `
                    }
                ],
            }
            try {
                const jsonResponse = await getAzureChatAIRequest(options);
                diagram.loadDiagramFromMermaid(jsonResponse);
                hideLoading();

            } catch (error) {
                console.error('Error:', error);
                convertTextToFlowChart(inputText);
            }
        };

        // Function to show loading indicator
        function showLoading() {
            (document.getElementById('loadingContainer')).style.display = 'block';
        }

        // Function to hide loading indicator
        function hideLoading() {
            (document.getElementById('loadingContainer')).style.display = 'none';
        }

        // Add keypress event listener to the document
        document.addEventListener('keypress', function (event) {
            if (event.key === 'Enter' && document.activeElement === textBox.element) {
                if (textBox.value !== '') {
                    dialog.hide();
                    convertTextToFlowChart(textBox.value);
                }
            }
        });
    }
};