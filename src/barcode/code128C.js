


 /* tslint:disable */
this.default = function () {
 
    //Initializes barcode control
    var barcodeCode128C = new ej.barcodegenerator.BarcodeGenerator({
        type: 'Code128C',
        value: '01234567',
        width: '200px', height: '150px',
        mode: 'SVG',
        invalid: invalidInputCode128C,
    });
    barcodeCode128C.appendTo('#barcode');
    
    var canShowErrorCode128C = false;
    var customFn = function (args) {
        if (canShowErrorCode128C) {
            return false;
        }
        return true;
    };
    var options = {
        rules: {
            'password': { minLength: [customFn, 'Invalid input'] }
        }
    };
    var formObject = new ej.inputs.FormValidator('#form-element', options);
    function invalidInputCode128C() {
        canShowErrorCode128C = true;
        formObject.validate();
    }

    var barcodeValueCode128C = new ej.inputs.TextBox({
        value: '01234567',
        change: function (args) {
            barcodeCode128C.value = args.value.toString();
            displayTextCode128C.value = args.value.toString();
        }
    });
    barcodeValueCode128C.appendTo('#barcodeValue');

    var barcodeWidthCode128C = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 200, step: 2, min: 150, max: 250,
        change: function (args) {
            barcodeCode128C.width = args.value.toString();
        }
    });
    barcodeWidthCode128C.appendTo('#width');
    
    var barcodeHeightCode128C = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 150, step: 2, min: 100, max: 200,
        change: function (args) {
            barcodeCode128C.height = args.value.toString();
        }
    });
    barcodeHeightCode128C.appendTo('#height');

    var textVisibilityCode128C = new ej.buttons.CheckBox({
        checked: true,
        change: function (args) {
            barcodeCode128C.displayText.visibility = args.checked;
        }
    });
    textVisibilityCode128C.appendTo('#textVisibility');

    var svgModeCode128C = new ej.buttons.CheckBox({
        checked: true,
        change: function (args) {
            barcodeCode128C.mode = args.checked ? 'SVG' : 'Canvas';
        }
    });
    svgModeCode128C.appendTo('#svgMode');

    var bgColorCode128C = new  ej.inputs.ColorPicker({
        value: '#ffffff',
        change: function (args) {
            barcodeCode128C.backgroundColor = args.currentValue.hex;
        }
    });
    bgColorCode128C.appendTo('#bgColor');

    var foreColorCode128C = new  ej.inputs.ColorPicker({
        value: '#000000',
        change: function (args) {
            barcodeCode128C.foreColor = args.currentValue.hex;
        }
    });
    foreColorCode128C.appendTo('#foreColor');

    var marginLeftCode128C = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change: function (args) {
            barcodeCode128C.margin.left = args.value;
        }
    });
    marginLeftCode128C.appendTo('#marginLeft');

    var marginRightCode128C = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        min: -10, max: 30,
        value: 10, step: 1,
        change: function (args) {
            barcodeCode128C.margin.right = args.value;
        }
    });
    marginRightCode128C.appendTo('#MarginRight');

    var marginTopCode128C = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change: function (args) {
            barcodeCode128C.margin.top = args.value;
        }
    });
    marginTopCode128C.appendTo('#marginTop');



    var marginBottomCode128C = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change: function (args) {
            barcodeCode128C.margin.bottom = args.value;
        }
    });
    marginBottomCode128C.appendTo('#MarginBottom');

    var textmarginLeftCode128C = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 40, step: 1, min: 40, max: 60,
        change: function (args) {
            barcodeCode128C.displayText.margin.left = args.value;
        }
    });
    textmarginLeftCode128C.appendTo('#TextmarginLeft');

    var textMarginRightCode128C = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 40, step: 1, min: 40, max: 60,
        change: function (args) {
            barcodeCode128C.displayText.margin.right = args.value;
        }
    });
    textMarginRightCode128C.appendTo('#TextMarginRight');

    var textmarginTopCode128C = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 0, step: 1, min: -10, max: 20,
        change: function (args) {
            barcodeCode128C.displayText.margin.top = args.value;
        }
    });
    textmarginTopCode128C.appendTo('#TextmarginTop');



    var textMarginBottomCode128C = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 0, step: 1, min: -10, max: 20,
        change: function (args) {
            barcodeCode128C.displayText.margin.bottom = args.value;
        }
    });
    textMarginBottomCode128C.appendTo('#TextMarginBottom');


    //FontType Collection
    var positionCode128C = [
        { type: 'Bottom', text: 'Bottom' },
        { type: 'Top', text: 'Top' },
    ];

    var alignmentCode128C = [
        { type: 'Center', text: 'Center' },
        { type: 'Left', text: 'Left' },
        { type: 'Right', text: 'Right' },
    ];
    function updatePositionCode128C(value) {
        var positionValue = ((document.getElementById('textPosition')).ej2_instances[0]);
        barcodeCode128C.displayText.position = (positionValue.value) ;
    }

    function updateAligntCode128C(value) {
        var positionValue = ((document.getElementById('textAlignment')).ej2_instances[0]);
        barcodeCode128C.displayText.alignment = (positionValue.value);
    }

    //DropDownList used to apply for fontFamily of the Annotation
    var textPositionCode128C = new ej.dropdowns.DropDownList({
        dataSource: positionCode128C,
        fields: { value: 'type', text: 'text' }, popupWidth: 150,
        width: '100%', placeholder: 'select position', index: 0,
        change: function (args) {
            updatePositionCode128C(args.value.toString());
        }
    });
    textPositionCode128C.appendTo('#textPosition');

    //DropDownList used to apply for fontFamily of the Annotation
    var textAlignCode128C = new ej.dropdowns.DropDownList({
        dataSource: alignmentCode128C,
        fields: { value: 'type', text: 'text' }, popupWidth: 150,
        width: '100%', placeholder: 'select position', index: 0,
        change: function (args) {
            updateAligntCode128C(args.value.toString());
        }
    });
    textAlignCode128C.appendTo('#textAlignment');

    var displayTextCode128C = new ej.inputs.TextBox({
        value: '01234567',
        change: function (args) {
            barcodeCode128C.displayText.text = args.value.toString();
        }
    });
    displayTextCode128C.appendTo('#displayText');
    var downloadButton = new ej.buttons.Button({});
    downloadButton.appendTo('#downloadBtn9');
    document.getElementById('downloadBtn9').onclick = function () {
        barcodeCode128C.exportImage("Barcode", 'PNG');
    };
};

