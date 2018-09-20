ej.diagrams.Diagram.Inject(ej.diagrams.UndoRedo);
/**
 * Getting started -  Annotation
 */
// tslint:disable-next-line:max-func-body-length

var diagram;
this.default = function () {
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
    //Initializes diagram control
    diagram = new ej.diagrams.Diagram({
        width: '100%', height: '645px', nodes: nodes, connectors: connectors,
        snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
        selectionChange: function (arg) {
            if (arg.state === 'Changed') {
                var selectedElement = document.getElementsByClassName('e-selected-style');
                if (selectedElement.length) {
                    selectedElement[0].classList.remove('e-selected-style');
                }
                if (arg.newValue[0]) {
                    var node = arg.newValue[0];
                    var offset = node.annotations[0].offset;
                    if (offset.x === 0 && offset.y === 0) {
                        updatePosition('left');
                    }
                    else if (offset.x === 1 && offset.y === 0) {
                        updatePosition('right');
                    }
                    else if (offset.x === 1 && offset.y === 0) {
                        updatePosition('right');
                    }
                    else if (offset.x === 0 && offset.y === 1) {
                        updatePosition('bottoml');
                    }
                    else if (offset.x === 1 && offset.y === 1) {
                        updatePosition('bottomr');
                    }
                    else if (offset.x === 0.5 && offset.y === 0.5) {
                        updatePosition('center');
                    }
                    else if (offset.x === 0.5 && offset.y === 1) {
                        updatePosition('bottomcenter_top');
                    }
                }
                enableOptions(arg);
            }
        },
        //Sets the default values of a node
        getNodeDefaults: function (node) {
            var obj = {
                width: 130, height: 50, style: { fill: '#D5EDED', strokeColor: '#7DCFC9', strokeWidth: 1 },
                shape: { cornerRadius: 5 }
            };
            return obj;
        },
        //Sets the default values of a connector
        getConnectorDefaults: function (obj) {
            obj.type = 'Orthogonal';
            obj.constraints = ej.diagrams.ConnectorConstraints.None;
        },
    });
    diagram.appendTo('#diagram');
    diagram.select([diagram.nodes[0]]);
    //Button used to apply for Bold of the Annotation
    var bold = new ej.buttons.Button({
        cssClass: 'e-small',
        iconCss: 'e-ddb-icons e-bold',
    });
    bold.appendTo('#bold');
    bold.element.onclick = function () { updateAnnotation('bold'); };
    //Button used to apply for Italic of the Annotation
    var italic = new ej.buttons.Button({
        cssClass: 'e-small',
        iconCss: 'e-ddb-icons e-italic'
    });
    italic.appendTo('#italic');
    italic.element.onclick = function () { updateAnnotation('italic'); };
    //NumericTextBox used to apply for Fontsize of the Annotation
    var fontSize = new ej.inputs.NumericTextBox({
        value: 0, min: 1,
        max: 8, width: '100%',
        format: '##.##',
        step: 2,
        change: function () { updateAnnotation('fontsize'); }
    });
    fontSize.appendTo('#fontSize');
    fontSize.dataBind();
    //Colorpicker used to apply for Color of the Annotation
    var fontColor = new ej.inputs.ColorPicker({
        value: '#000', change: function (arg) {
            for (var i = 0; i < diagram.selectedItems.nodes.length; i++) {
                var node = diagram.selectedItems.nodes[i];
                for (var j = 0; j < node.annotations.length; j++) {
                    node.annotations[j].style.color = arg.currentValue.rgba;
                    diagram.dataBind();
                }
            }
        }
    });
    fontColor.appendTo('#fontcolor');
    //Button used to apply for Underline of the Annotation
    var underLine = new ej.buttons.Button({
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
    var fontFamily = new ej.dropdowns.DropDownList({
        dataSource: fontType,
        fields: { value: 'type', text: 'text' }, popupWidth: 150,
        width: '100%', placeholder: 'select a font type',
        index: 0, change: function () {
            updateAnnotation('fontfamily');
        }
    });
    fontFamily.appendTo('#fontfamily');
    //Click event for Appearance of the Property Panel
    document.getElementById('appearance').onclick = function (args) {
        var target = args.target;
        var selectedElement = document.getElementsByClassName('e-selected-style');
        if (selectedElement.length) {
            selectedElement[0].classList.remove('e-selected-style');
        }
        if (target.className === 'image-pattern-style') {
            updatePosition(target.id);
        }
    };
};

//Apply the appearence of the Annotation 
function updateAnnotation(value) {
    for (var i = 0; i < diagram.selectedItems.nodes.length; i++) {
        var node = diagram.selectedItems.nodes[i];
        for (var j = 0; j < node.annotations.length; j++) {
            var annotationStyle = node.annotations[j].style;
            if (value === 'fontsize') {
                annotationStyle.fontSize = fontSize.value;
            } else if (value === 'underline') {
                annotationStyle.textDecoration = 'Underline';
            } else if (value === 'fontfamily') {
                annotationStyle.fontFamily = fontFamily.value.toString();
            } else if (value === 'bold') {
                annotationStyle.bold = true;
            } else if (value === 'italic') {
                annotationStyle.italic = true;
            }
            diagram.dataBind();
        }
    }
}
//Update the Annotation Position based on the selection
function updatePosition(id) {
    var target = document.getElementById(id);
    for (var i = 0; i < diagram.selectedItems.nodes.length; i++) {
        var node = diagram.selectedItems.nodes[i];
        for (var j = 0; j < node.annotations.length; j++) {
            var annotation = node.annotations[j];
            switch (target.id) {
                case 'left':
                    setAnnotationPosition(annotation, 0, 0, 'Top', 'Left', target);
                    break;
                case 'right':
                    setAnnotationPosition(annotation, 1, 0, 'Top', 'Right', target);
                    break;
                case 'bottoml':
                    setAnnotationPosition(annotation, 0, 1, 'Bottom', 'Left', target);
                    break;
                case 'bottomr':
                    setAnnotationPosition(annotation, 1, 1, 'Bottom', 'Right', target);
                    break;
                case 'center':
                    setAnnotationPosition(annotation, 0.5, 0.5, 'Center', 'Center', target);
                    break;
                case 'bottomcenter_top':
                    setAnnotationPosition(annotation, 0.5, 1, 'Top', 'Center', target);
                    break;
            }
        }
    }
}
//set the Annotation Position
function setAnnotationPosition(annotation, offsetX, offsetY, vAlignment, hAlignment, target) {
    annotation.offset.x = offsetX;
    annotation.offset.y = offsetY;
    annotation.verticalAlignment = vAlignment;
    annotation.horizontalAlignment = hAlignment;
    if (vAlignment === 'Top' && hAlignment === 'Left') {
        annotation.margin = { left: 3, top: 3 };
    } else if (vAlignment === 'Top' && hAlignment === 'Right') {
        annotation.margin = { right: 3, top: 3 };
    } else if (vAlignment === 'Bottom' && hAlignment === 'Left') {
        annotation.margin = { left: 3, bottom: 3 };
    } else if (vAlignment === 'Bottom' && hAlignment === 'Right') {
        annotation.margin = { right: 3, bottom: 3 };
    }
    target.classList.add('e-selected-style');
}
//Enable or disable the property panel
function enableOptions(arg) {
    var appearance = document.getElementById('propertypanel');
    var selectedElement = document.getElementsByClassName('e-remove-selection');
    if (arg.newValue) {
        if (arg.newValue[0] instanceof ej.diagrams.Node) {
            if (selectedElement.length) {
                selectedElement[0].classList.remove('e-remove-selection');
            }
        } else {
            if (!appearance.classList.contains('e-remove-selection')) {
                appearance.classList.add('e-remove-selection');
            }

        }
    }
}