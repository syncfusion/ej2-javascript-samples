
// Inject the UndoRedo module into the Diagram to enable undo and redo functionality
ej.diagrams.Diagram.Inject(ej.diagrams.UndoRedo);

/**
 * Getting started - Annotation
 */
// tslint:disable-next-line:max-func-body-length

this.default = function () {
    var fontSize;
    var fontColor;
    var fontFamily;
    var bold;
    var italic;
    var underLine;
    var template;
    var labelConstraints;
    var underline;

    // Function to update the appearance of the Annotation
    function updateAnnotation(value, fontSize, fontFamily) {
        // Loop through each selected node in the diagram
        for (var i = 0; i < diagram.selectedItems.nodes.length; i++) {
            var node = diagram.selectedItems.nodes[i];
            var annotationStyle = node.annotations[0].style;
            // Update the font size of the annotation
            if (value === 'fontsize') {
                annotationStyle.fontSize = fontSize.value;
                // Toggle the underline text decoration of the annotation
            } else if (value === 'underline') {
                annotationStyle.textDecoration = annotationStyle.textDecoration === 'Underline' ? 'None' : 'Underline';
                // Update the font family of the annotation
            } else if (value === 'fontfamily') {
                annotationStyle.fontFamily = fontFamily.value.toString();
                // Toggle the bold style of the annotation
            } else if (value === 'bold') {
                annotationStyle.bold = !annotationStyle.bold;
                // Toggle the italic style of the annotation
            } else if (value === 'italic') {
                annotationStyle.italic = !annotationStyle.italic;
                // Update the template of the annotation
            } else if (value === 'template') {
                if (fontFamily === 'none') {
                    node.annotations[0].template = '';
                    node.annotations[0].width = undefined;
                    node.annotations[0].height = undefined;
                } else {
                    node.annotations[0].width = 25;
                    node.annotations[0].height = 25;
                    node.annotations[0].template =
                        '<img src="src/diagram/Images/annotation/' + fontFamily + '.svg" style="width:100%;height:100%"/>';
                }
                // Toggle the interaction constraint of the annotation
            } else if (value === 'interaction') {
                node.annotations[0].constraints = node.annotations[0].constraints ^ ej.diagrams.AnnotationConstraints.Interaction;
            }
        }
        // Apply the changes to the diagram
        diagram.dataBind();
    }
    // Function to update the annotation position based on the selection
    function updateAnnotationPosition(id) {
        // Get the target element by its ID
        var target = document.getElementById(id);
        // Loop through each selected node in the diagram
        for (var i = 0; i < diagram.selectedItems.nodes.length; i++) {
            var node = diagram.selectedItems.nodes[i];
            var annotation = node.annotations[0];
            // Update the annotation position based on the selected option
            switch (target.id) {
                case 'left':
                    setAnnotationPosition(annotation, 0, 0, 'Top', 'Left', target);
                    break;
                case 'right':
                    setAnnotationPosition(annotation, 1, 0, 'Top', 'Right', target);
                    break;
                case 'bottomLeft':
                    setAnnotationPosition(annotation, 0, 1, 'Bottom', 'Left', target);
                    break;
                case 'bottomRight':
                    setAnnotationPosition(annotation, 1, 1, 'Bottom', 'Right', target);
                    break;
                case 'center':
                    setAnnotationPosition(annotation, 0.5, 0.5, 'Center', 'Center', target);
                    break;
                case 'bottomCenter':
                    setAnnotationPosition(annotation, 0.5, 1, 'Top', 'Center', target);
                    break;
            }
        }
    }
    // Function to set the annotation position and margin
    function setAnnotationPosition(annotation, offsetX, offsetY, verticalAlignment, horizontalAlignment, target) {
        // Set the annotation's offset position
        annotation.offset.x = offsetX;
        annotation.offset.y = offsetY;
        // Set the annotation's vertical and horizontal alignment
        annotation.verticalAlignment = verticalAlignment;
        annotation.horizontalAlignment = horizontalAlignment;
        // Set the margin based on the alignment
        if (verticalAlignment === 'Top' && horizontalAlignment === 'Left') {
            annotation.margin = { left: 3, top: 3 };
        } else if (verticalAlignment === 'Top' && horizontalAlignment === 'Right') {
            annotation.margin = { right: 3, top: 3 };
        } else if (verticalAlignment === 'Bottom' && horizontalAlignment === 'Left') {
            annotation.margin = { left: 3, bottom: 3 };
        } else if (verticalAlignment === 'Bottom' && horizontalAlignment === 'Right') {
            annotation.margin = { right: 3, bottom: 3 };
        }
        // Add a class to the target element for styling
        target.classList.add('e-selected-style');
    }
    // Function to enable or disable the property panel
    function enablePropertyPanel(arg) {
        var appearance = document.getElementById('propertypanel');
        var selectedElement = document.getElementsByClassName('e-remove-selection');
        // Check if a new node is selected
        if (arg.newValue) {
            if (arg.newValue[0] instanceof ej.diagrams.Node) {
                // If there is a previously selected element, remove the selection class
                if (selectedElement.length) {
                    selectedElement[0].classList.remove('e-remove-selection');
                }
            } else {
                // If no node is selected, add the selection class to the appearance element
                if (!appearance.classList.contains('e-remove-selection')) {
                    appearance.classList.add('e-remove-selection');
                }
            }
        }
    }
    //Click event for Appearance of the Property Panel
    document.getElementById('appearance').onclick = function (args) {
        var target = args.target;
        var selectedElement = document.getElementsByClassName('e-selected-style');
        if (selectedElement.length) {
            selectedElement[0].classList.remove('e-selected-style');
        }
        if (target.className === 'image-pattern-style') {
            updateAnnotationPosition(target.id);
        }
    };
    var bounds = document.getElementsByClassName('content-wrapper')[0].getBoundingClientRect();
    var centerX = (bounds.width / 2);
    //Initializes the nodes for the diagram
    var nodes = [
        {
            id: 'industry', offsetX: centerX, offsetY: 250,
            annotations: [{ content: 'Industry Competitors' }]
        },
        {
            id: 'potential', offsetX: centerX, offsetY: 110,
            annotations: [{ content: 'Potential Entrants' }]
        },
        {
            id: 'suplier', offsetX: centerX - 190, offsetY: 250,
            annotations: [{ content: 'Suppliers' }]
        },
        {
            id: 'substitutes', offsetX: centerX, offsetY: 390,
            annotations: [{ content: 'Substitutes' }]
        },
        {
            id: 'buyers', offsetX: centerX + 190, offsetY: 250,
            annotations: [{ content: 'Buyers' }]
        }
    ];
    //Initializes the connector for the diagram
    var connectors = [
        {
            id: 'connector1', sourceID: 'potential', targetID: 'industry'
        }, {
            id: 'connector2', sourceID: 'suplier', targetID: 'industry'
        }, {
            id: 'connector3', sourceID: 'substitutes', targetID: 'industry',
        }, {
            id: 'connector4', sourceID: 'buyers', targetID: 'industry'
        }, {
            id: 'connector5', sourceID: 'potential', targetID: 'buyers',
            segments: [{ direction: 'Right', type: 'Orthogonal', length: 60 }], targetDecorator: { shape: 'None' }
        }, {
            id: 'connector6', sourceID: 'buyers', targetID: 'substitutes',
            segments: [{ direction: 'Bottom', type: 'Orthogonal', length: 100 }], targetDecorator: { shape: 'None' }
        }, {
            id: 'connector7', targetID: 'suplier', sourceID: 'substitutes',
            segments: [{ direction: 'Left', type: 'Orthogonal', length: 60 }], targetDecorator: { shape: 'None' }
        }, {
            id: 'connector9', sourceID: 'suplier', targetID: 'potential',
            segments: [{ direction: 'Top', type: 'Orthogonal', length: 100 }], targetDecorator: { shape: 'None' }
        }
    ];
    // Initializes the diagram control
    var diagram = new ej.diagrams.Diagram({
        // Set the dimensions of the diagram
        width: '100%', height: '550px',
        // Define the nodes and connectors
        nodes: nodes, connectors: connectors,
        // Disable snapping to grid or objects
        snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
        // Event handler for selection change
        selectionChange: function (arg) {
            // Check if the selection state has changed
            if (arg.state === 'Changed') {
                // Remove the 'e-selected-style' class from the previously selected element
                var selectedElement = document.getElementsByClassName('e-selected-style');
                if (selectedElement.length) {
                    selectedElement[0].classList.remove('e-selected-style');
                }
                // Check if a new node is selected
                if (arg.newValue[0]) {
                    var node = arg.newValue[0];
                    var offset = node.annotations[0].offset;
                    // Update the annotation position based on the offset values
                    if (offset.x === 0 && offset.y === 0) {
                        updateAnnotationPosition('left');
                    }
                    else if (offset.x === 1 && offset.y === 0) {
                        updateAnnotationPosition('right');
                    }
                    else if (offset.x === 0 && offset.y === 1) {
                        updateAnnotationPosition('bottomLeft');
                    }
                    else if (offset.x === 1 && offset.y === 1) {
                        updateAnnotationPosition('bottomRight');
                    }
                    else if (offset.x === 0.5 && offset.y === 0.5) {
                        updateAnnotationPosition('center');
                    }
                    else if (offset.x === 0.5 && offset.y === 1) {
                        updateAnnotationPosition('bottomCenter');
                    }
                }
                // Enable or disable the property panel based on the selection
                enablePropertyPanel(arg);
            }
        },

        // Sets the default values of a node
        getNodeDefaults: function (node) {
            var obj = {
                width: 130,
                height: 50,
                style: { fill: '#D5EDED', strokeColor: '#7DCFC9' },
                shape: { cornerRadius: 5 }
            };
            return obj;
        },

        // Sets the default values of a connector
        getConnectorDefaults: function (obj) {
            obj.type = 'Orthogonal';
            obj.constraints = ej.diagrams.ConnectorConstraints.None;
        },
    });
    // Append the diagram to the HTML element with id 'diagram'
    diagram.appendTo('#diagram');
    // Select the first node in the diagram
    diagram.select([diagram.nodes[0]]);
    //Button used to apply for Bold of the Annotation
    bold = new ej.buttons.Button({
        cssClass: 'e-small',
        iconCss: 'e-ddb-icons e-bold',
    });
    bold.appendTo('#bold');
    bold.element.onclick = function () { updateAnnotation('bold'); };
    //Button used to apply for Italic of the Annotation
    italic = new ej.buttons.Button({
        cssClass: 'e-small',
        iconCss: 'e-ddb-icons e-italic'
    });
    italic.appendTo('#italic');
    italic.element.onclick = function () { updateAnnotation('italic'); };
    //NumericTextBox used to apply for Fontsize of the Annotation
    fontSize = new ej.inputs.NumericTextBox({
        value: 12, min: 1,
        max: 16, width: '100%',
        format: '##.##',
        step: 2,
        change: function () { updateAnnotation('fontsize', fontSize); }
    });
    fontSize.appendTo('#fontSize');
    fontSize.dataBind();
    //Colorpicker used to apply for Color of the Annotation
    fontColor = new ej.inputs.ColorPicker({
        value: '#000', change: function (arg) {
            for (var i = 0; i < diagram.selectedItems.nodes.length; i++) {
                var node = diagram.selectedItems.nodes[i];
                node.annotations[0].style.color = arg.currentValue.rgba;
                diagram.dataBind();
            }
        }
    });
    fontColor.appendTo('#fontcolor');
    //Button used to apply for Underline of the Annotation
    underLine = new ej.buttons.Button({
        cssClass: 'e-small',
        iconCss: 'e-ddb-icons e-underline'
    });
    underLine.appendTo('#underline');
    underLine.element.onclick = function () { updateAnnotation('underline'); };
    //FontType Collection
    var fontType = [
        { type: 'Arial', text: 'Arial' },
        { type: 'Aharoni', text: 'Aharoni' },
        { type: 'Bell MT', text: 'Bell MT' },
        { type: 'Fantasy', text: 'Fantasy' },
        { type: 'Times New Roman', text: 'Times New Roman' },
        { type: 'Segoe UI', text: 'Segoe UI' },
        { type: 'Verdana', text: 'Verdana' }
    ];
    //DropDownList used to apply for fontFamily of the Annotation
    fontFamily = new ej.dropdowns.DropDownList({
        dataSource: fontType,
        fields: { value: 'type', text: 'text' }, popupWidth: 150,
        width: '100%', placeholder: 'select a font type',
        index: 0, change: function () {
            updateAnnotation('fontfamily', null, fontFamily);
        }
    });
    fontFamily.appendTo('#fontfamily');
    var templateList = [
        { value: 'none', text: 'None' },
        { value: 'industry', text: 'Industry Competitors' },
        { value: 'suppliers', text: 'Suppliers' },
        { value: 'potential', text: 'Potential Entrants' },
        { value: 'buyers', text: 'Buyers' },
        { value: 'substitutes', text: 'Substitutes' }
    ];
    //DropDownList used to apply for template for nodes
    template = new ej.dropdowns.DropDownList({
        dataSource: templateList,
        fields: { value: 'value', text: 'text' }, popupWidth: 200,
        width: '100%', placeholder: 'select a template', index: 0,
        change: function (args) {
            updateAnnotation('template', null, args.value.toString());
        }
    });
    template.appendTo('#template');
    //CheckBox used to enable intractions with templates
    labelConstraints = new ej.buttons.CheckBox({
        checked: false,
        label: 'Label interaction',
        change: function () {
            updateAnnotation('interaction', null, null);
        }
    });
    labelConstraints.appendTo('#labelConstraints');
};
